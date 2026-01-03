# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**immobilien-photograph.wien** - A high-performance Next.js 18 marketing website for virtual real estate tours in Vienna. The project showcases 4 distinct homepage design variants for client selection, featuring Shopify Editions-inspired editorial parallax experiences with advanced animations.

**Tech Stack:** Next.js 18 (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Framer Motion, Lottie, kie.ai API

**Target:** Lighthouse Performance ≥90, FCP <1.5s, LCP <2.5s, German-only, Mobile-first

## Critical Setup Sequence

**⚠️ MUST DO FIRST: kie.ai Asset Generation**

Before any UI development, generate all assets via kie.ai API:

```bash
# 1. Set API key in .env.local
echo "KIE_API_KEY=your_key_here" > .env.local

# 2. Generate all hero images + videos + portfolio assets
npm run generate:assets

# 3. Verify manifest.json created
cat public/generated/manifest.json
```

**Why critical:** UI components depend on `manifest.json` for image/video URLs. Without assets, pages will fail to build.

## Development Commands

```bash
# Initial setup (after repo creation)
npm install
npm run generate:assets          # FIRST - Generate kie.ai assets

# Development
npm run dev                       # Start dev server (http://localhost:3000)
npm run build                     # Production build
npm run start                     # Run production build locally

# Testing
npm run test:e2e                  # Run Playwright E2E tests
npx playwright test --ui          # E2E tests with UI
npx playwright test --headed      # E2E tests in visible browser

# Performance testing
lighthouse http://localhost:3000/variant-a --view
lighthouse http://localhost:3000/variant-b --view
lighthouse http://localhost:3000/variant-c --view
lighthouse http://localhost:3000/variant-d --view

# Single test
npx playwright test e2e/homepage.spec.ts
npx playwright test e2e/homepage.spec.ts --grep "should load all animation libraries"
```

## Architecture

### Route Structure

The project uses Next.js App Router with 4 homepage variants plus a selector landing page:

```
app/
├── page.tsx                 # Root: Variant selector with preview cards
├── variant-a/page.tsx       # "Luxus Minimalist" - Subtle, elegant
├── variant-b/page.tsx       # "Cinematic Storytelling" - Dramatic, emotional
├── variant-c/page.tsx       # "Data-Driven ROI" - Professional, numbers-focused
├── variant-d/page.tsx       # "Editorial Magazine" - Content-rich, editorial
├── impressum/page.tsx       # Legal: Impressum
├── datenschutz/page.tsx     # Legal: Privacy Policy
└── agb/page.tsx             # Legal: Terms & Conditions
```

Each variant shares components but has distinct personality:
- **Variant A:** Gold accents, subtle parallax, elegant serif typography
- **Variant B:** Dark theme, dramatic video heroes, cinematic transitions
- **Variant C:** Blue/green data colors, Lottie number counters, ROI focus
- **Variant D:** Large drop caps, magazine grids, editorial typography

### Animation System (3-Layer Hybrid)

**GSAP + ScrollTrigger** (Parallax & scroll-linked)
- Hero sections: Multi-layer parallax (3 depth layers at different speeds)
- Located in: `components/animations/ParallaxSection.tsx`
- Usage: Wrap sections with `<ParallaxSection>`, add `<ParallaxLayer speed={0.3}>` children
- Respects `prefers-reduced-motion: reduce`

**Framer Motion** (Component transitions)
- Scroll reveals, page entry animations, hover states
- Located in: `components/animations/ScrollReveal.tsx`
- Usage: `<ScrollReveal delay={0.2}>{children}</ScrollReveal>`

**Lottie** (Micro-interactions)
- Hero scroll indicators, icon animations (checkmarks, stat counters)
- Located in: `components/animations/LottiePlayer.tsx`
- JSON files in: `public/lottie/`

### kie.ai API Integration

**Location:** `src/lib/kie-api.ts`

**Key Functions:**
- `generateImage(params)` - Text-to-image (4.5 model)
- `generateVideo(params)` - Image-to-video (Kling 2.6 model)
- `waitForTaskCompletion(taskId)` - Polls until task succeeds/fails

**Asset Manifest:** `public/generated/manifest.json`

Structure:
```json
{
  "generated_at": "2026-01-02T...",
  "heroes": {
    "luxusMinimalist": { "image": "url", "video": "url" },
    "cinematicStorytelling": { "image": "url", "video": "url" },
    "dataRoiDriven": { "image": "url", "video": "url" },
    "editorialMagazine": { "image": "url", "video": "url" }
  },
  "portfolio": [
    { "id": "penthouse-doebling", "title": "...", "image": "url" },
    ...
  ]
}
```

**Usage in components:**
```typescript
import manifest from '@/public/generated/manifest.json';
const { image, video } = manifest.heroes.luxusMinimalist;
```

### Design System (Shopify Editions Renaissance)

**Colors:** Defined in `tailwind.config.js` and `globals.css`
- Cream (`#DCDCD0`), Olive (`#292919`), Gold (`#C9A55C`)
- Trust Blue (`#2E5EAA`), Success Green (`#00C49A`)

**Typography:**
- Display: Space Grotesk (headlines)
- Serif: Cormorant Garamond (narrative text, drop caps)
- Body: Inter (UI text)

**Responsive Breakpoints:**
- `xs`: 375px (Mobile small)
- `sm`: 768px (Tablet)
- `md`: 1024px (Desktop small)
- `lg`: 1440px (Desktop large)
- `xl`: 1920px (Desktop XL)

### Component Organization

**Reusable Sections:** `src/components/sections/`
- `HeroSection.tsx` - Video/image backgrounds, GSAP parallax
- `PortfolioGrid.tsx` - Masonry layout with hover effects
- `ProcessTimeline.tsx` - Vertical timeline with SVG connecting lines
- `TestimonialSlider.tsx` - Carousel for client testimonials
- `PricingTable.tsx` - Comparison cards for 3 packages
- `ContactForm.tsx` - Validation (German phone/email format), mock submission
- `Footer.tsx` - Business address, legal links

**Layout Components:** `src/components/layout/`
- `Navigation.tsx` - Sticky navbar with backdrop blur on scroll
- `MobileMenu.tsx` - Hamburger menu for <768px
- `CookieBanner.tsx` - GDPR-compliant cookie consent

**Animation Wrappers:** `src/components/animations/`
- See "Animation System" above

### Data Files

**Static Content:** `src/data/`
- `testimonials.json` - 2 client testimonials (German)
- `services.json` - 3 pricing packages (Essential €490, Premium €990, Luxury €1890)
- `process.json` - 5-step service process timeline
- `faqs.json` - FAQ items (if needed)

**Business Info:**
- Address: Raaber-Bahn-Gasse 11, 1100 Wien
- Website: immobilien-photograph.wien
- Language: German only

## Performance Requirements

**Lighthouse Targets (MUST PASS):**
- Performance: ≥90
- FCP: <1.5s
- LCP: <2.5s
- CLS: <0.1
- Mobile Performance: ≥85

**Image Optimization:**
- Use Next.js `<Image>` component (automatic WebP, responsive sizes)
- kie.ai generates 8K quality images - ensure proper sizing
- Lazy load images below the fold

**Font Loading:**
- Google Fonts: Space Grotesk, Cormorant Garamond, Inter
- Use `display=swap` in URL params
- Fonts already configured in `globals.css`

## Testing Strategy

**E2E Tests (Playwright):** 8 critical tests in `e2e/homepage.spec.ts`

1. Homepage loads without errors
2. Animation libraries load (GSAP, Framer Motion, Lottie)
3. Hero video renders correctly
4. Parallax scroll effects work
5. Navigation sticky + backdrop blur on scroll
6. Variant selector navigates correctly
7. Contact form validation works (German formats)
8. Form submission shows success message

**Responsive Tests:** `e2e/variants.spec.ts`
- Mobile (375px): Check mobile menu visible
- Tablet (768px): Check layout adjusts
- Desktop (1440px): Check sidebar navigation visible

**Run specific test:**
```bash
npx playwright test --grep "should load all animation libraries"
```

## Contact Form Validation

**Required Fields:** Name, Email, Phone, Message

**Validation Rules:**
- Email: Standard email regex
- Phone: Austrian format (`+43...` or `0...`)
- Message: Minimum 10 characters
- All fields required

**Behavior:** Frontend validation only (no backend). Show success message on submit (mock).

## Deployment

**Target:** Vercel

**Environment Variables (Set in Vercel Dashboard):**
- `KIE_API_KEY` - kie.ai API key

**Pre-deployment Checklist:**
1. All E2E tests pass (`npm run test:e2e`)
2. Lighthouse scores meet targets (≥90)
3. All 4 variants tested locally
4. No console errors
5. `manifest.json` committed (or regenerate in production)

**Deployment Commands:**
```bash
# Build locally first
npm run build
npm run start  # Test production build

# Deploy to Vercel
vercel --prod
```

## Common Issues

**Issue: "Cannot find module '@/public/generated/manifest.json'"**
- **Solution:** Run `npm run generate:assets` first. Assets must exist before build.

**Issue: GSAP parallax not working**
- **Solution:** Check `prefers-reduced-motion` setting. Parallax disabled if user prefers reduced motion.

**Issue: Lottie animations not playing**
- **Solution:** Verify JSON files exist in `public/lottie/`. Check browser console for loading errors.

**Issue: Contact form Austrian phone validation failing**
- **Solution:** Phone regex accepts both `+43...` and `0...` formats. Check regex in `ContactForm.tsx`.

**Issue: Lighthouse performance <90**
- **Solutions:**
  - Check image sizes (use Next.js Image component)
  - Verify fonts using `display=swap`
  - Disable animations temporarily to isolate issue
  - Check network throttling in Lighthouse settings

## Reference Documentation

**Complete Specification:** `docs/spec.md` - Full project requirements, design system, component specs

**Shopify Editions Reference:** `docs/Website example.txt` - Parallax implementation patterns

**Important:** Always check `docs/spec.md` for detailed requirements on:
- Variant-specific copy and personality
- Exact color codes and typography
- Animation intensity per variant
- Component composition and layout
