# Implementation Plan: immobilien-photograph.wien
## 4 Homepage Variants with Shopify Editions-Inspired Parallax

---

## Executive Summary

**Project:** High-performance Next.js 16 website with 4 distinct homepage design variants for client presentation
**Timeline:** ~12 hours development (7 phases)
**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, GSAP, Framer Motion, Lottie, kie.ai API
**Critical Path:** Phase 1 (kie.ai assets) MUST complete before any UI development

---

## 🚨 MANDATORY IMPLEMENTATION RULES

### Critical Rules - NO EXCEPTIONS

1. **NEVER BYPASS TESTS**
   - Every phase MUST have validation tests
   - Tests MUST be executed before proceeding
   - Failed tests MUST be fixed, not skipped
   - NO moving forward without test verification

2. **NEVER USE MOCK DATA**
   - NO placeholder data in production code
   - NO mock APIs without explicit fallback strategy
   - NO fake assets or dummy content
   - If real data unavailable, BLOCK and report issue

3. **MEASURABLE OUTCOMES REQUIRED**
   - Every phase has defined success criteria
   - Success criteria MUST be measurable (pass/fail, numeric thresholds)
   - Each phase has validation tests to verify criteria
   - Document test results before proceeding

4. **90% COMPLETION THRESHOLD**
   - Each phase requires ≥90% of success criteria met
   - Cannot proceed to next phase until 90% achieved
   - Document which 10% is incomplete and why
   - Iterate until threshold met

5. **BLOCKING PHASES**
   - Phase 1 (kie.ai) is ABSOLUTE BLOCKER
   - Phase 6 (E2E Tests) is ABSOLUTE BLOCKER
   - If blocker fails, entire implementation stops
   - Report blocker failure and required fixes

---

## Implementation Strategy

### Phase Execution Order (Sequential)

```
Phase 1: kie.ai Setup (BLOCKER)
    ↓
Phase 2: Design System & Components
    ↓
Phase 3: Variant A "Luxus Minimalist" (TEMPLATE)
    ↓
Phase 4: Variants B, C, D (clone Variant A)
    ↓
Phase 5: Variant Selector Landing
    ↓
Phase 6: E2E Testing & Optimization
    ↓
Phase 7: Vercel Deployment
```

---

## PHASE 1: kie.ai Asset Generation (ABSOLUTE BLOCKER - ~1 hour)

**⚠️ CRITICAL BLOCKER:** All UI components depend on `public/generated/manifest.json`. CANNOT proceed without real kie.ai assets.

**🚫 NO MOCK DATA ALLOWED:** This phase MUST use real kie.ai API. Failure = implementation stops.

---

### Tasks

1. **Initialize Next.js Project**
   ```bash
   cd "C:\Users\eugen\.cursor\projects\Lucas Website"
   npx create-next-app@latest . --typescript --tailwind --app --src-dir
   ```

2. **Install All Dependencies**
   ```bash
   npm install gsap lottie-react framer-motion
   npm install @radix-ui/react-icons @radix-ui/react-slot
   npm install class-variance-authority clsx tailwind-merge
   npm install @tailwindcss/typography @tailwindcss/forms
   npm install -D @playwright/test tsx dotenv autoprefixer
   ```

3. **Configure Environment**
   ```bash
   echo "KIE_API_KEY=9ab1e4a03a71fdc8f1cc186ea5297418" > .env.local
   echo "KIE_API_KEY=your_key_here" > .env.example
   ```

4. **Build kie.ai API Client** (`src/lib/kie-api.ts`)
   - `createImageTask()` - Seedream 4.5 text-to-image
   - `createVideoTask()` - Kling 2.6 image-to-video
   - `checkTaskStatus()` - Polling with 5s intervals
   - `waitForTaskCompletion()` - Retry logic (3 attempts, exponential backoff)
   - `generateImage()` - Convenience wrapper
   - `generateVideo()` - Convenience wrapper
   - TypeScript interfaces for API responses

5. **Build Asset Generation Script** (`scripts/generate-assets.ts`)
   - **4 Hero Prompts:**
     - Luxus Minimalist: "Luxurious Vienna apartment, floor-to-ceiling windows, golden hour..."
     - Cinematic: "Dramatic twilight penthouse, moody atmospheric lighting..."
     - Data-Driven: "Modern professional office, screens with analytics..."
     - Editorial: "Editorial Altbau apartment, classic Viennese architecture..."

   - **6 Portfolio Prompts:**
     - Penthouse Döbling, Altbau Innere Stadt, Modern Loft Mariahilf
     - Villa Hietzing, Neubau Balkon, Dachgeschoss Leopoldstadt

   - Sequential generation with progress logging
   - Error handling with 3 retry attempts
   - Write `manifest.json` incrementally after each success

---

### 🧪 VALIDATION TESTS (MUST PASS BEFORE PROCEEDING)

Create `scripts/test-phase1.ts` with the following tests:

#### Test 1: kie.ai API Connectivity (BLOCKING)
```typescript
// Test: Can we reach kie.ai API?
const response = await fetch('https://api.kie.art/health');
assert(response.ok, 'kie.ai API unreachable');
```
**Goal:** Verify API endpoint is accessible
**Measurement:** HTTP 200 response
**Failure Action:** STOP - Report DNS/network issue

#### Test 2: API Key Validation (BLOCKING)
```typescript
// Test: Is API key valid?
const task = await createImageTask('test prompt');
assert(task.data.task_id, 'Invalid API key');
```
**Goal:** Verify API key is valid
**Measurement:** Task ID returned
**Failure Action:** STOP - Check API key in .env.local

#### Test 3: Single Image Generation (BLOCKING)
```typescript
// Test: Can we generate 1 image?
const image = await generateImage('Vienna apartment interior');
assert(image.url.includes('http'), 'Image generation failed');
assert(await urlExists(image.url), 'Image URL not accessible');
```
**Goal:** Verify image generation works
**Measurement:** Valid URL returned, HTTP 200
**Failure Action:** STOP - Check kie.ai account/credits

#### Test 4: Single Video Generation (BLOCKING)
```typescript
// Test: Can we generate 1 video?
const video = await generateVideo(imageUrl, 'slow pan');
assert(video.url.includes('http'), 'Video generation failed');
assert(await urlExists(video.url), 'Video URL not accessible');
```
**Goal:** Verify video generation works
**Measurement:** Valid URL returned, HTTP 200
**Failure Action:** STOP - Check kie.ai video credits

#### Test 5: Full Asset Generation (BLOCKING)
```bash
# Run full generation script
npx tsx scripts/generate-assets.ts
```
**Goal:** Generate all 14 assets (4 heroes × 2 + 6 portfolio)
**Measurement:**
- manifest.json created
- 14 URLs in manifest
- All URLs return HTTP 200
- No generation errors in console

**Failure Action:** STOP - Fix errors and retry

#### Test 6: Manifest Structure Validation
```typescript
// Test: Does manifest have correct structure?
const manifest = JSON.parse(fs.readFileSync('public/generated/manifest.json'));
assert(manifest.heroes.luxusMinimalist.image, 'Missing hero image');
assert(manifest.heroes.luxusMinimalist.video, 'Missing hero video');
assert(manifest.portfolio.length === 6, 'Wrong portfolio count');
```
**Goal:** Verify manifest structure
**Measurement:** All required fields present
**Failure Action:** STOP - Fix generation script

---

### Test Execution Command
```bash
# Run validation tests
npx tsx scripts/test-phase1.ts

# Expected output:
# ✅ Test 1: API Connectivity PASSED
# ✅ Test 2: API Key Validation PASSED
# ✅ Test 3: Image Generation PASSED
# ✅ Test 4: Video Generation PASSED
# ✅ Test 5: Full Asset Generation PASSED (14/14 assets)
# ✅ Test 6: Manifest Validation PASSED
#
# PHASE 1 COMPLETE: 6/6 tests passed (100%)
```

---

### Success Criteria (MUST MEET 90% = 5/6 tests)

**Measurable Outcomes:**
1. ✅ API connectivity test passes (HTTP 200)
2. ✅ API key validation test passes (task ID received)
3. ✅ Image generation test passes (valid URL + HTTP 200)
4. ✅ Video generation test passes (valid URL + HTTP 200)
5. ✅ Full generation completes (14/14 assets created)
6. ✅ Manifest structure validation passes (all fields present)

**Additional Requirements:**
- ✅ `public/generated/manifest.json` exists
- ✅ Contains 4 hero objects (each with `image` + `video` URLs)
- ✅ Contains 6 portfolio objects (each with `image` URL)
- ✅ All 14 URLs return HTTP 200 status
- ✅ No console errors during generation
- ✅ Test results documented in `test-results/phase1.txt`

**Minimum Threshold:** ≥5/6 tests passing (83% minimum, 90% target)

**IF TESTS FAIL:**
- ❌ DO NOT proceed to Phase 2
- ❌ DO NOT use mock/placeholder data
- ❌ Fix the failing tests
- ❌ Re-run validation
- ✅ Report blocker issue if cannot be resolved

**Git Commit (ONLY AFTER TESTS PASS):**
```bash
git init
git add .
git commit -m "feat: Phase 1 complete - kie.ai asset generation validated (6/6 tests pass)"
git branch -M main
gh repo create immobilien-photograph-wien --public --source=. --remote=origin
git push -u origin main
```

---

## PHASE 2: Design System & Core Components (~3 hours)

### Tasks

1. **Configure Tailwind** (`tailwind.config.js`)
   ```javascript
   extend: {
     colors: {
       cream: { DEFAULT: '#DCDCD0', light: '#F7F7EE' },
       olive: { DEFAULT: '#292919', medium: '#5C5C4E', light: '#909083' },
       gold: { DEFAULT: '#C9A55C' },
       trust: { DEFAULT: '#2E5EAA' },
       success: { DEFAULT: '#00C49A' }
     },
     fontFamily: {
       display: ['Space Grotesk', 'sans-serif'],
       serif: ['Cormorant Garamond', 'serif'],
       body: ['Inter', 'system-ui']
     },
     fontSize: {
       hero: 'clamp(60px, 10vw, 140px)',
       section: 'clamp(48px, 8vw, 120px)',
       'narrative-lg': 'clamp(24px, 3vw, 38px)'
     },
     screens: {
       xs: '375px', sm: '768px', md: '1024px', lg: '1440px', xl: '1920px'
     }
   }
   ```

2. **Global Styles** (`src/app/globals.css`)
   - Import Google Fonts with `display=swap`
   - CSS variables for Shopify Editions colors
   - Utility classes: `.section-title`, `.narrative-text`, `.drop-cap`
   - `prefers-reduced-motion` support

3. **Initialize shadcn/ui**
   ```bash
   npx shadcn-ui@latest init
   npx shadcn-ui@latest add button card input
   ```

4. **Build Animation Components**

   **`src/components/animations/ParallaxSection.tsx`** (GSAP)
   ```typescript
   // Multi-layer parallax with ScrollTrigger
   // Respects prefers-reduced-motion
   // Cleanup on unmount (kill ScrollTrigger instances)
   ```

   **`src/components/animations/ScrollReveal.tsx`** (Framer Motion)
   ```typescript
   // Fade-in + slide-up on scroll
   // IntersectionObserver with margin: '-100px'
   // Stagger support via delay prop
   ```

   **`src/components/animations/LottiePlayer.tsx`**
   ```typescript
   // Load JSON from /public/lottie/
   // Autoplay + loop controls
   // Reduced motion fallback
   ```

5. **Build Layout Components**

   **`src/components/layout/Navigation.tsx`**
   - Sticky with `position: sticky; top: 0`
   - Backdrop blur on scroll (detect `scrollY > 50`)
   - Responsive hamburger (<768px)

   **`src/components/layout/Footer.tsx`**
   - Business address: "Raaber-Bahn-Gasse 11, 1100 Wien"
   - Legal links: Impressum, Datenschutz, AGB

   **`src/components/layout/MobileMenu.tsx`**
   - Slide-in from right (Framer Motion)
   - Close on navigation

6. **Build Section Components**

   **`src/components/sections/HeroSection.tsx`**
   - Props: `variant`, `videoUrl`, `posterUrl`, `headline`, `subheadline`, `ctaPrimary`
   - Video: autoplay, loop, muted
   - GSAP 3-layer parallax (speeds: 0.2, 0.5, 0.8)
   - Variant-specific colors/typography via props

   **`src/components/sections/PortfolioGrid.tsx`**
   - CSS Grid masonry layout
   - Hover: scale(1.02) + shadow
   - Next.js `<Image>` with lazy loading

   **`src/components/sections/ProcessTimeline.tsx`**
   - Vertical layout with SVG connecting lines
   - 5 steps with icons (Radix UI)

   **`src/components/sections/TestimonialSlider.tsx`**
   - Horizontal scroll with snap points
   - Navigation arrows

   **`src/components/sections/PricingTable.tsx`**
   - 3-column grid (Essential €490, Premium €990, Luxury €1890)
   - Highlight "Beliebteste" badge

   **`src/components/sections/ContactForm.tsx`**
   - Fields: Name, Email, Phone, Message (all required)
   - Austrian phone validation: `/^(\+43|0)[1-9][0-9]{3,12}$/`
   - Email regex validation
   - Message min length: 10 chars
   - Mock submission (console.log + success message)

7. **Create Data Files**
   - `src/data/testimonials.json` (2 testimonials, German)
   - `src/data/services.json` (3 packages with features)
   - `src/data/process.json` (5 steps: Beratung, Termin, Shooting, Bearbeitung, Lieferung)

### Success Criteria
- ✅ Tailwind colors apply correctly
- ✅ Google Fonts load (Space Grotesk, Cormorant Garamond, Inter)
- ✅ GSAP parallax renders without errors
- ✅ Framer Motion scroll reveal animates
- ✅ Lottie player loads JSON
- ✅ All components render in isolation

---

## PHASE 3: Variant A - "Luxus Minimalist" (~1.5 hours)

**Strategy:** Build as golden template for Variants B, C, D to clone.

### Tasks

1. **Create Route** (`src/app/variant-a/page.tsx`)
   ```typescript
   import manifest from '@/public/generated/manifest.json';
   const { image, video } = manifest.heroes.luxusMinimalist;
   ```

2. **Compose Page Sections**
   ```tsx
   <HeroSection
     variant="luxusMinimalist"
     videoUrl={video}
     posterUrl={image}
     headline="80% weniger unnötige Besichtigungen. 3x schnellere Vermietung. Garantiert."
     subheadline="Während Ihre Konkurrenz noch Smartphone-Fotos macht, verkaufen Sie..."
     ctaPrimary="Kostenlose Beratung vereinbaren"
   />
   <ProblemAgitateSection />
   <PortfolioGrid items={manifest.portfolio} variant="masonry" />
   <ProcessTimeline steps={processData.steps} />
   <TestimonialSlider testimonials={testimonialsData} />
   <PricingTable packages={servicesData.packages} />
   <ContactForm variant="minimal" />
   <Footer />
   ```

3. **Variant-Specific Styling**
   - Color scheme: Cream (#DCDCD0) + Gold (#C9A55C)
   - Typography: Space Grotesk headlines, Cormorant Garamond narrative
   - GSAP ease: `power2.out` (subtle)

4. **Performance Optimization**
   - Next.js `<Image>` with `priority` on hero
   - `sizes` prop: `"(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1440px"`
   - Lazy load below-fold images
   - Preload hero video

5. **Responsive Testing**
   - Test: 375px, 768px, 1024px, 1440px
   - Fix layout breaks
   - Test mobile menu

6. **Lighthouse Audit**
   ```bash
   npm run build
   npm run start
   lighthouse http://localhost:3000/variant-a --view
   ```
   - Target: Performance ≥90, FCP <1.5s, LCP <2.5s

### Success Criteria
- ✅ `/variant-a` loads without errors
- ✅ Hero video autoplays
- ✅ All 7 sections render correctly
- ✅ Mobile responsive (375px tested)
- ✅ Lighthouse Performance ≥90

---

## PHASE 4: Variants B, C, D (~2.5 hours)

**Strategy:** Copy `variant-a/page.tsx`, customize per personality.

### Variant B - "Cinematic Storytelling"

**Copy & Customize:**
```bash
cp -r src/app/variant-a src/app/variant-b
```

**Changes:**
- Manifest: `manifest.heroes.cinematicStorytelling`
- Colors: Dark (#292919) + Cyan accents
- Typography: Bold headlines, large serif quotes
- GSAP ease: `power3.inOut` (dramatic)
- Hero: Fullscreen video with gradient overlay
- Add: Case Studies section, Team/About section

### Variant C - "Data-Driven ROI"

**Changes:**
- Manifest: `manifest.heroes.dataRoiDriven`
- Colors: Trust Blue (#2E5EAA) + Success Green (#00C49A)
- Typography: Clean sans-serif
- Animation: Minimal + professional
- Hero: Split-screen layout (visual left, copy right)
- Add: Lottie number counters (73%, 40%, 95%), FAQ accordion

### Variant D - "Editorial Magazine"

**Changes:**
- Manifest: `manifest.heroes.editorialMagazine`
- Colors: Cream + Olive (Renaissance palette)
- Typography: Cormorant Garamond prominent, drop caps (`.drop-cap` class)
- Animation: Elegant scroll-based
- Hero: Magazine cover style
- Add: Feature article section, Newsletter signup

### Per-Variant Tasks
1. Copy Variant A structure
2. Update manifest import
3. Customize colors (Tailwind classes)
4. Adjust typography
5. Test responsive (4 breakpoints)
6. Run Lighthouse (must score ≥90)

### Success Criteria
- ✅ All 3 variants load without errors
- ✅ Each has distinct personality visible
- ✅ Mobile responsive
- ✅ Lighthouse Performance ≥90 per variant

---

## PHASE 5: Variant Selector Landing (~45 min)

### Tasks

1. **Create Root Page** (`src/app/page.tsx`)
   - 2-column grid (1-column on mobile)
   - Max-width: 1440px, centered

2. **Build Preview Cards**
   ```tsx
   <VariantPreviewCard
     title="Luxus Minimalist"
     description="Elegant, reduziert, hochwertig"
     href="/variant-a"
     image={manifest.heroes.luxusMinimalist.image}
   />
   // Repeat for variants B, C, D
   ```

3. **Hover Effects**
   - Scale 1.03 + shadow on hover
   - Smooth transition

### Success Criteria
- ✅ All 4 cards visible
- ✅ Navigation to variants works
- ✅ Hover effects smooth
- ✅ Mobile responsive
- ✅ Lighthouse ≥90

---

## PHASE 6: E2E Testing & Optimization (~2 hours) - MANDATORY

**⚠️ CRITICAL: This phase is REQUIRED before declaring "DONE". Minimum 90% test pass rate mandatory.**

### Tasks

1. **Install Playwright** (REQUIRED FIRST)
   ```bash
   npx playwright install chromium
   ```

2. **Configure Playwright** (`playwright.config.ts`)
   ```typescript
   use: {
     baseURL: 'http://localhost:3000',
     screenshot: 'on',              // ALWAYS capture screenshots
     video: 'retain-on-failure',
     trace: 'retain-on-failure'
   }
   testDir: './e2e',
   reporter: [
     ['html', { outputFolder: 'test-results/html' }],
     ['json', { outputFile: 'test-results/results.json' }]
   ]
   ```

3. **Write 8 E2E Tests** (`e2e/homepage.spec.ts`) - ALL REQUIRED
   - Test 1: Homepage loads without errors + screenshot
   - Test 2: Animation libraries load (GSAP, Framer Motion, Lottie) + console log check
   - Test 3: Hero video renders correctly + screenshot
   - Test 4: Parallax scroll effects work (GSAP ScrollTrigger) + visual verification
   - Test 5: Navigation sticky + backdrop blur on scroll + screenshot
   - Test 6: Variant selector navigates correctly + all 4 routes tested
   - Test 7: Contact form validation (all fields, email, Austrian phone) + error messages
   - Test 8: Form submission success message + screenshot

4. **Responsive Tests** (`e2e/variants.spec.ts`) - ALL REQUIRED
   ```typescript
   test('mobile 375px', async ({ page }) => {
     await page.setViewportSize({ width: 375, height: 667 });
     await page.goto('/variant-a');
     const menu = page.locator('[data-mobile-menu-trigger]');
     await expect(menu).toBeVisible();
     await page.screenshot({ path: 'test-results/mobile-375.png' });
   });
   // Repeat for 768px, 1024px, 1440px
   ```

5. **Error Logging & Console Check**
   - Capture all console errors, warnings in each test
   - Save to `test-results/console-logs.txt`
   - Test FAILS if any console errors detected

6. **Run Tests & Verify**
   ```bash
   npm run test:e2e
   # Must see: "8 passed" or minimum 7/8 (90%)
   # Check test-results/ for screenshots
   # Review console-logs.txt for errors
   ```

7. **Performance Testing** (AFTER tests pass)
   ```bash
   lighthouse http://localhost:3000/variant-a --output=json --output-path=test-results/lh-variant-a.json
   lighthouse http://localhost:3000/variant-b --output=json --output-path=test-results/lh-variant-b.json
   lighthouse http://localhost:3000/variant-c --output=json --output-path=test-results/lh-variant-c.json
   lighthouse http://localhost:3000/variant-d --output=json --output-path=test-results/lh-variant-d.json
   ```

8. **Optimization** (if Lighthouse <90)
   - Image sizes (Next.js Image optimization)
   - Font loading (`display=swap`)
   - GSAP performance (GPU acceleration)
   - Lottie JSON compression

### Success Criteria (MUST MEET BEFORE "DONE")
- ✅ Playwright installed and configured
- ✅ Minimum 7/8 E2E tests pass (90%)
- ✅ All tests have screenshots saved to test-results/
- ✅ Console logs captured and reviewed (no critical errors)
- ✅ Lighthouse ≥90 for all 4 variants
- ✅ FCP <1.5s, LCP <2.5s, CLS <0.1
- ✅ Test results saved to test-results/ directory
- ✅ 60fps scrolling verified
- ✅ No blocking console errors

**⚠️ IF TESTS FAIL:**
- Fix the failing tests
- Re-run tests
- Do NOT proceed to Phase 7 until 90% pass rate achieved
- Do NOT output "DONE" until this phase is complete

---

## PHASE 7: Vercel Deployment (~35 min)

### Tasks

1. **Final Commit**
   ```bash
   git add .
   git commit -m "feat: Production-ready with all 4 variants and E2E tests"
   git push origin main
   ```

2. **Deploy to Vercel**
   ```bash
   vercel login
   vercel --prod
   ```

3. **Configure Environment** (Vercel Dashboard)
   - Add `KIE_API_KEY` = `9ab1e4a03a71fdc8f1cc186ea5297418`

4. **Verify Deployment**
   - Test all 4 variant URLs live
   - Run Lighthouse on production
   - Test mobile on real device
   - Verify SSL active

### Success Criteria
- ✅ Vercel build succeeds
- ✅ All 4 variants accessible
- ✅ Lighthouse ≥90 on live site
- ✅ Mobile responsive verified
- ✅ SSL certificate active

---

## Critical Files to Implement

1. **`src/lib/kie-api.ts`** - kie.ai API client with retry logic
2. **`scripts/generate-assets.ts`** - Asset generation orchestrator
3. **`src/components/animations/ParallaxSection.tsx`** - GSAP parallax wrapper
4. **`src/components/sections/HeroSection.tsx`** - Most complex section, variant customization pattern
5. **`src/app/variant-a/page.tsx`** - Golden template for other variants

---

## Risk Mitigation

### Performance Optimization
- Use Next.js `<Image>` with `priority` on LCP elements
- `sizes` prop for responsive images
- Font `display=swap` for FOUT prevention
- GPU acceleration for animations (`transform: translate3d`)

### Austrian Phone Validation
```typescript
const PHONE_REGEX = /^(\+43|0)[1-9][0-9]{3,12}$/;
const normalized = phone.replace(/[\s\-\(\)]/g, ''); // Remove formatting
if (!PHONE_REGEX.test(normalized)) throw new Error('Invalid');
```

### kie.ai API Failures
- Retry logic: 3 attempts with exponential backoff (5s, 10s, 20s)
- Commit `manifest.json` to Git (don't regenerate in production)
- Fallback images in `/public/fallback/`

### Animation Performance
- `prefers-reduced-motion` support (disable GSAP/Framer)
- Throttle ScrollTrigger callbacks
- `will-change: transform` hints (sparingly)

---

## Timeline

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Phase 1: kie.ai Setup | 1 hour | 1h |
| Phase 2: Design System | 3 hours | 4h |
| Phase 3: Variant A | 1.5 hours | 5.5h |
| Phase 4: Variants B, C, D | 2.5 hours | 8h |
| Phase 5: Landing Page | 45 min | 8.75h |
| Phase 6: Testing | 2 hours | 10.75h |
| Phase 7: Deployment | 35 min | 11.5h |
| **TOTAL** | **~12 hours** | |

**Realistic Schedule:** 7 days (2h/day) or 2 full days

---

## Deployment Checklist

### Pre-Deployment
- [ ] All E2E tests pass (`npm run test:e2e`)
- [ ] Lighthouse ≥90 on all 4 variants
- [ ] Mobile responsive (375px, 768px, 1024px, 1440px)
- [ ] No console errors in production build
- [ ] Images optimized (WebP served)
- [ ] Fonts load correctly

### GitHub
- [ ] All changes committed
- [ ] Clean commit history
- [ ] `.env.example` provided (without API key)
- [ ] README.md updated

### Vercel
- [ ] Environment variables set (`KIE_API_KEY`)
- [ ] Production build successful
- [ ] All 4 variant URLs accessible
- [ ] SSL certificate active
- [ ] Performance verified on live site

---

## ⚠️ CRITICAL: "DONE" Declaration Criteria

**YOU MAY ONLY OUTPUT "DONE" WHEN ALL OF THE FOLLOWING ARE TRUE:**

### Minimum 90% Completion Checklist
- [ ] All 7 phases executed in order
- [ ] Playwright installed (`npx playwright install chromium`)
- [ ] `playwright.config.ts` exists and configured
- [ ] All 8 E2E tests written in `e2e/` directory
- [ ] Test pass rate: **≥90% (minimum 7/8 tests passing)**
- [ ] Screenshots saved to `test-results/` for ALL tests
- [ ] Console logs captured and no critical errors
- [ ] Production build succeeds (`npm run build`)
- [ ] All 4 variants accessible and functional
- [ ] Test results documented and saved

### Verification Command Sequence
```bash
# MUST run these commands and verify results:
npm run build                    # Must succeed
npm run dev                      # Must start without errors
npx playwright install chromium  # Must install browsers
npm run test:e2e                 # Must show ≥7/8 passing
```

### Test Results Location
```
test-results/
├── screenshots/        # ALL test screenshots
├── console-logs.txt    # Console error logs
├── results.json        # Playwright JSON report
└── html/              # HTML test report
```

**IF ANY CRITERION IS NOT MET:**
- Continue iterating in the Ralph loop
- Fix failing tests
- Re-run verification
- DO NOT output "DONE"

**ONLY WHEN 90% THRESHOLD ACHIEVED:**
- Output "DONE" to complete the loop
- Provide summary of test results
- List any remaining 10% issues

---

## Next Steps After Plan Approval

1. Execute Phase 1 (kie.ai setup) - CRITICAL BLOCKER
2. Wait for asset generation to complete (~15 min)
3. Verify `manifest.json` created successfully
4. Proceed with Phase 2 (components)
5. Build incrementally, testing after each phase
6. **MANDATORY: Run Phase 6 (E2E tests) and achieve ≥90% pass rate**
7. Deploy to Vercel only after all tests pass
8. Only output "DONE" when 90% completion verified
