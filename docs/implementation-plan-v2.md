# Implementation Plan V2: immobilien-photograph.wien
## Premium Real Estate Photography Website - Visual Excellence Focus

**CRITICAL CHANGE:** This plan prioritizes **visual quality over test completion**.
Success = "Does it look like a $10M website?" not "Do tests pass?"

---

## Executive Summary

**Project:** Premium real estate photography website with Apple-style liquid glass design
**Visual Standard:** Reference image quality + Apple.com level polish
**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lottie, kie.ai API
**Completion Criteria:** Visual quality judgment (90% = looks premium) NOT test pass rate

---

## 🎨 NEW SUCCESS CRITERIA - VISUAL QUALITY FIRST

### What "90% Complete" Really Means

**NOT:** 90% of tests pass
**YES:** 90% of visual quality standards met

### Visual Quality Checklist (Must Score ≥9/10)

1. ✅ **Animations feel premium** (smooth, natural, Apple-quality)
2. ✅ **Typography is beautiful** (proper hierarchy, spacing, rhythm)
3. ✅ **Colors are sophisticated** (not basic Tailwind defaults)
4. ✅ **Images look professional** (proper aspect ratios, quality, optimization)
5. ✅ **Spacing is perfect** (consistent rhythm, breathing room)
6. ✅ **Interactions feel responsive** (hover states, micro-interactions)
7. ✅ **Mobile design is polished** (not just "responsive")
8. ✅ **Loading states are smooth** (skeleton screens, progressive enhancement)
9. ✅ **Overall aesthetic is cohesive** (feels like ONE premium brand)
10. ✅ **Exceeds reference image quality** (better than the Gemini example)

---

## 🚨 MANDATORY IMPLEMENTATION RULES (UPDATED)

### Rule 1: VISUAL QUALITY OVER SPEED
- If something looks cheap, STOP and fix it
- Iterate until it looks premium
- Use frontend-design skill for UI/UX guidance

### Rule 2: SELF-CRITIQUE BEFORE SHOWING
- Build it
- Take screenshots
- Compare to reference image
- Judge: "Does this look like a $10M website?"
- If NO → loop and improve
- If YES → proceed

### Rule 3: NEVER SETTLE FOR "GOOD ENOUGH"
- Basic Tailwind styling = NOT acceptable
- Static images without hover effects = NOT acceptable
- No animations = NOT acceptable
- Generic typography = NOT acceptable

### Rule 4: USE MODERN UI PATTERNS
- Glassmorphism (frosted glass effects)
- Smooth scroll with Lenis
- Micro-interactions on all interactive elements
- Skeleton loading states
- Progressive image loading
- Ambient animations

---

## DESIGN SYSTEM REQUIREMENTS

### Color Palette (Sophisticated, Not Basic)

**Primary (Warm Neutrals):**
- Background: `#F8F6F3` (warm off-white)
- Surface: `rgba(255, 255, 255, 0.8)` (frosted glass)
- Text Primary: `#1A1816`
- Text Secondary: `#6B6560`

**Accents (Luxury):**
- Gold: `#C9A55C` (elegant, not flashy)
- Dark: `#2C2824` (rich brown-black)
- Accent: `#8B7355` (warm taupe)

**Glass Effects:**
- Backdrop blur: `blur(20px)`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Shadow: `0 8px 32px rgba(0, 0, 0, 0.08)`

### Typography (Premium Hierarchy)

**Fonts:**
- Display: `'Cormorant Garamond'` - Elegant serif for headlines
- Body: `'Inter'` - Clean sans for text
- Accent: `'Space Grotesk'` - Modern geometric for UI elements

**Scale (Fluid Typography):**
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem);
--text-xl: clamp(1.5rem, 1.3rem + 1vw, 2.25rem);
--text-2xl: clamp(2.25rem, 1.8rem + 2.25vw, 3.75rem);
--text-hero: clamp(3rem, 2rem + 5vw, 6rem);
```

### Spacing System (Consistent Rhythm)

```css
--space-unit: 0.25rem; /* 4px */
--space-xs: calc(var(--space-unit) * 2); /* 8px */
--space-sm: calc(var(--space-unit) * 4); /* 16px */
--space-md: calc(var(--space-unit) * 6); /* 24px */
--space-lg: calc(var(--space-unit) * 12); /* 48px */
--space-xl: calc(var(--space-unit) * 20); /* 80px */
--space-2xl: calc(var(--space-unit) * 32); /* 128px */
```

---

## ANIMATION REQUIREMENTS

### Framer Motion Animations (REQUIRED)

**Hero Section:**
- Fade in + slide up on load (stagger children)
- Parallax background (moves slower than content)
- Floating elements (subtle ambient motion)

**Scroll Reveals:**
- Elements fade in + slide up when in viewport
- Stagger: 0.1s delay between elements
- Use IntersectionObserver

**Hover States:**
- Scale: 1.02 on card hover
- Smooth color transitions
- Cursor: pointer with scale

**Page Transitions:**
- Fade between routes (300ms)
- Smooth navigation

### GSAP Animations (REQUIRED)

**Smooth Scroll:**
- Lenis smooth scroll library
- Custom scrollbar (thin, elegant)

**Parallax Layers:**
- Hero background: 0.5x speed
- Mid-layer: 0.7x speed
- Foreground: 1.0x speed

**Scroll-Triggered:**
- Progress bar on scroll
- Section theme changes
- Pin sections on scroll

### Lottie Animations (OPTIONAL)

- Scroll indicator (subtle bounce)
- Loading spinner (if needed)
- Success checkmark (form submission)

---

## PHASE BREAKDOWN (REDESIGNED FOR QUALITY)

### Phase 1: kie.ai Asset Generation ✅ (Already Complete)

**Status:** DONE (6/6 tests, 14 assets downloaded)

**Next:** Regenerate with photorealistic prompts using kie-asset-generator skill

---

### Phase 2: Design System & Animation Foundation (3 hours)

**Goal:** Build the visual foundation that makes everything look premium

#### Tasks:

1. **Install Animation Libraries**
```bash
npm install framer-motion @studio-freight/lenis
npm install @react-spring/web
```

2. **Tailwind Config (Premium Colors)**
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      cream: {
        50: '#FDFCFA',
        100: '#F8F6F3',
        200: '#F0EDE8',
      },
      luxury: {
        gold: '#C9A55C',
        dark: '#2C2824',
        taupe: '#8B7355',
      }
    },
    fontFamily: {
      display: ['Cormorant Garamond', 'serif'],
      body: ['Inter', 'sans-serif'],
      accent: ['Space Grotesk', 'sans-serif'],
    },
    backdropBlur: {
      glass: '20px',
    }
  }
}
```

3. **Global Animations (Framer Motion Variants)**
```typescript
// src/lib/animations.ts

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};
```

4. **Smooth Scroll Setup**
```typescript
// src/components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
```

5. **Glass Card Component**
```typescript
// src/components/ui/GlassCard.tsx
export function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      bg-white/80 backdrop-blur-glass
      border border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.08)]
      rounded-2xl p-8
      hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]
      transition-shadow duration-300
    ">
      {children}
    </div>
  );
}
```

#### Visual Quality Tests:

**Test 1: Animation Smoothness**
```typescript
// Manual test: Do animations run at 60fps?
// Use Chrome DevTools Performance profiler
// Target: No frame drops during scroll
```

**Test 2: Glass Effect Rendering**
```typescript
// Visual test: Does frosted glass look premium?
// Compare to Apple.com cards
// Check: backdrop-blur renders correctly
```

**Test 3: Typography Hierarchy**
```typescript
// Visual test: Is text readable and beautiful?
// Check: Line height, letter spacing, font sizes
// Compare to reference image
```

---

### Phase 3: Hero Section (Premium Quality) (2 hours)

**Goal:** Build a hero that rivals Apple.com

#### Requirements:

**Layout:**
- Full viewport height (100vh)
- Video background with parallax
- Overlay: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))`
- Centered content with glass card

**Animations:**
```typescript
// Hero loads with stagger animation
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
```

**Typography:**
- Headline: 72px → 128px (responsive)
- Subheadline: 24px → 32px
- Line height: 1.2 for headlines, 1.6 for body

**Interactions:**
- CTA button: Hover lifts with shadow
- Scroll indicator: Subtle bounce animation
- Video: Autoplay, muted, loop

#### Visual Quality Test:

```typescript
// Self-critique checklist:
// ✅ Does hero feel cinematic?
// ✅ Is CTA button prominent but elegant?
// ✅ Does video enhance (not distract)?
// ✅ Is text readable over video?
// ✅ Does scroll indicator invite interaction?
```

---

### Phase 4: Portfolio Section (Apple-Style Grid) (2 hours)

**Goal:** Portfolio grid that feels like Apple product pages

#### Layout:

**Desktop (3 columns):**
```css
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
gap: 2rem;
```

**Card Design:**
- Image: aspect-ratio 3/2
- Hover: Scale 1.05, shadow grows
- Overlay: Gradient appears on hover
- Text: Slides up on hover

**Implementation:**
```typescript
<motion.div
  variants={scaleOnHover}
  initial="rest"
  whileHover="hover"
  className="group relative overflow-hidden rounded-2xl"
>
  <Image {...} className="transition-transform duration-500 group-hover:scale-105" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileHover={{ y: 0, opacity: 1 }}
  >
    <h3>{title}</h3>
    <p>{location}</p>
  </motion.div>
</motion.div>
```

#### Visual Quality Test:

```typescript
// ✅ Do cards feel interactive?
// ✅ Is hover animation smooth?
// ✅ Do images look professional?
// ✅ Is spacing consistent?
```

---

### Phase 5: Services Section (Glass Cards) (1.5 hours)

**Goal:** Service cards with glassmorphism

#### Design:

**3 Service Cards:**
1. Architecture Photography
2. Twilight & Drone
3. Virtual Staging

**Card Structure:**
```typescript
<GlassCard>
  <LottieIcon /> {/* Animated icon */}
  <h3>Service Name</h3>
  <p>Description</p>
  <ul>Features</ul>
  <Button variant="ghost">Learn More</Button>
</GlassCard>
```

**Interactions:**
- Hover: Lift with shadow
- Icon: Scale on hover
- Button: Smooth color transition

---

### Phase 6: Contact Form (Modern UI) (1.5 hours)

**Goal:** Contact form that feels premium (not generic)

#### Design Elements:

**Floating Labels:**
```css
/* Label floats up when input has value */
.floating-label {
  transform: translateY(0);
  font-size: 1rem;
}

.floating-label.active {
  transform: translateY(-1.5rem);
  font-size: 0.875rem;
  color: var(--luxury-gold);
}
```

**Input Styling:**
```css
input, textarea {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s;
}

input:focus {
  background: rgba(255, 255, 255, 0.8);
  border-color: var(--luxury-gold);
  box-shadow: 0 4px 12px rgba(201, 165, 92, 0.2);
}
```

**Submit Button:**
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    bg-gradient-to-r from-luxury-gold to-luxury-taupe
    text-white px-8 py-4 rounded-full
    shadow-lg hover:shadow-xl
    transition-shadow
  "
>
  Send Message
</motion.button>
```

**Success Animation:**
- Lottie checkmark appears
- Form fades out
- Success message slides in

---

### Phase 7: E2E Testing (REDESIGNED FOR VISUAL QUALITY)

**Old Tests:** "Does h1 exist?" ✅
**New Tests:** "Does animation feel smooth?" ✅

#### Visual Quality Tests:

**Test 1: Animation Performance**
```typescript
test('Animations run at 60fps', async ({ page }) => {
  await page.goto('/');

  // Start performance profiling
  await page.evaluate(() => {
    performance.mark('scroll-start');
  });

  // Scroll page
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(1000);

  // Check frame rate
  const metrics = await page.evaluate(() => {
    performance.mark('scroll-end');
    const measure = performance.measure('scroll', 'scroll-start', 'scroll-end');
    return {
      duration: measure.duration,
      // Should scroll smoothly in <1s
    };
  });

  expect(metrics.duration).toBeLessThan(1000);
});
```

**Test 2: Visual Regression (Screenshot Comparison)**
```typescript
test('Hero section looks correct', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Take screenshot
  await expect(page).toHaveScreenshot('hero-section.png', {
    maxDiffPixels: 100, // Allow minor rendering differences
  });
});
```

**Test 3: Responsive Design Quality**
```typescript
test('Mobile design is polished (not just responsive)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  // Check mobile-specific optimizations
  const heroHeight = await page.locator('section[data-hero]').evaluate(el => el.offsetHeight);
  expect(heroHeight).toBeGreaterThan(600); // Full screen on mobile

  // Check touch targets are large enough
  const buttons = page.locator('button');
  const buttonSizes = await buttons.evaluateAll(els =>
    els.map(el => ({ width: el.offsetWidth, height: el.offsetHeight }))
  );

  buttonSizes.forEach(size => {
    expect(size.height).toBeGreaterThan(44); // iOS minimum touch target
  });
});
```

**Test 4: Glass Effect Quality**
```typescript
test('Glassmorphism renders correctly', async ({ page }) => {
  await page.goto('/');

  // Check backdrop-filter is applied
  const glassCard = page.locator('[data-glass-card]').first();
  const backdropFilter = await glassCard.evaluate(el =>
    window.getComputedStyle(el).backdropFilter
  );

  expect(backdropFilter).toContain('blur');
});
```

**Test 5: Loading Performance**
```typescript
test('Page loads feel instant (perceived performance)', async ({ page }) => {
  const startTime = Date.now();

  await page.goto('/');
  await page.waitForSelector('[data-hero]', { state: 'visible' });

  const loadTime = Date.now() - startTime;

  // Hero should be visible in <1.5s
  expect(loadTime).toBeLessThan(1500);
});
```

**Test 6: Interaction Smoothness**
```typescript
test('Hover interactions feel responsive', async ({ page }) => {
  await page.goto('/');

  const card = page.locator('[data-portfolio-card]').first();

  // Hover and check transition
  await card.hover();
  await page.waitForTimeout(300); // Animation duration

  // Check scale transform was applied
  const transform = await card.evaluate(el =>
    window.getComputedStyle(el).transform
  );

  expect(transform).not.toBe('none');
});
```

#### Success Criteria (NEW):

**MUST PASS:**
- ✅ All animations smooth (60fps)
- ✅ Glassmorphism renders correctly
- ✅ Mobile design is polished
- ✅ Page feels fast (<1.5s to interactive)
- ✅ Hover states are smooth
- ✅ Visual regression tests pass

**VISUAL JUDGMENT:**
- ✅ Take screenshots
- ✅ Compare to reference image
- ✅ Compare to Apple.com
- ✅ Score visual quality: 9/10 minimum

---

## COMPLETION CRITERIA (REDESIGNED)

### What "DONE" Means (NEW DEFINITION)

**OLD:** 90% of tests pass = DONE ❌
**NEW:** 90% visual quality score = DONE ✅

### Visual Quality Score (10 Points Total)

**Score each category 0-1:**

1. **Animation Quality** (Smooth, natural, Apple-level)
2. **Typography** (Beautiful hierarchy, rhythm, spacing)
3. **Color Palette** (Sophisticated, cohesive, luxury)
4. **Image Quality** (Professional, optimized, stunning)
5. **Spacing & Layout** (Perfect rhythm, breathing room)
6. **Interactions** (Responsive, delightful, smooth)
7. **Mobile Polish** (Optimized, not just responsive)
8. **Loading Experience** (Fast, smooth, progressive)
9. **Overall Aesthetic** (Cohesive, premium brand)
10. **Exceeds Reference** (Better than example image)

**Required Score:** ≥9/10

### Self-Critique Process

**Before showing user:**

1. Build the website
2. Take screenshots of every section
3. Compare side-by-side with reference image
4. Score each visual quality category
5. If score <9/10 → Identify issues and loop
6. If score ≥9/10 → Show to user

---

## TOOLS TO USE

### Claude Skills (USE THESE)

**frontend-design skill:**
```
/frontend-design
- Use for component design
- Get Apple-style UI patterns
- Generate polished layouts
```

**web-artifacts-builder skill:**
```
/web-artifacts-builder
- Use for complex multi-component pages
- shadcn/ui integration
- React + Tailwind + Framer Motion
```

---

## REFERENCE MATERIALS

**Visual Inspiration:**
- Reference image: `Gemini_Generated_Image_vksvl6vksvl6vksv.png`
- Apple.com (navigation, interactions)
- Shopify Editions Winter 2026 (animations)

**Do NOT copy these exactly. Use as inspiration for quality level.**

---

## NEXT STEPS FOR RALPH LOOP

**When you run Ralph Loop again:**

1. ✅ Use kie-asset-generator skill to regenerate assets with photorealistic prompts
2. ✅ Use frontend-design skill for component UI
3. ✅ Build with visual quality focus (not speed)
4. ✅ Self-critique with screenshots
5. ✅ Loop until visual score ≥9/10
6. ✅ Only show when it looks premium

**Ralph Loop completion promise:**
- **OLD:** Output "DONE" when tests pass
- **NEW:** Output "DONE" when visual quality score ≥9/10

---

## SUCCESS = VISUAL EXCELLENCE, NOT TEST COMPLETION

This plan prioritizes what the user actually wants: a beautiful website that looks like it cost $10M to build.
