# Visual Quality Checklist
## Use This to Judge "Is It Ready?" During Ralph Loop

**Purpose:** Self-critique tool to determine if website meets premium quality standards

**How to Use:**
1. Take screenshots of every section
2. Score each category 0-1 (partial scores like 0.7 allowed)
3. Calculate total score
4. If <9/10 → Identify issues, loop again
5. If ≥9/10 → Ready to show user

---

## Scoring Guide

**1.0** = Exceeds Apple.com quality
**0.8** = Matches reference image quality
**0.5** = Acceptable but needs improvement
**0.3** = Basic implementation, missing polish
**0.0** = Not implemented or broken

---

## Category 1: Animation Quality (0-1)

**Check:**
- [ ] All animations run at 60fps (no frame drops)
- [ ] Scroll feels smooth like Apple.com
- [ ] Hover states have smooth transitions
- [ ] Loading animations feel natural
- [ ] Page transitions are elegant
- [ ] No jank or stuttering

**Score:** ___ / 1.0

**If <0.8:**
- Optimize animations (use transform/opacity only)
- Add Lenis smooth scroll
- Use Framer Motion for transitions
- Check performance profiler

---

## Category 2: Typography (0-1)

**Check:**
- [ ] Headline hierarchy is clear and beautiful
- [ ] Line heights feel comfortable (1.2 for headlines, 1.6 for body)
- [ ] Letter spacing is refined
- [ ] Font pairings are sophisticated (serif + sans)
- [ ] Text is readable at all sizes
- [ ] Responsive scaling works smoothly

**Score:** ___ / 1.0

**If <0.8:**
- Use fluid typography (clamp())
- Improve font pairing
- Adjust line heights
- Add letter spacing to headlines

---

## Category 3: Color Palette (0-1)

**Check:**
- [ ] Colors feel sophisticated (not default Tailwind)
- [ ] Palette is cohesive across all sections
- [ ] Accent colors draw attention appropriately
- [ ] Gradients are subtle and refined
- [ ] Dark mode colors (if applicable) are elegant
- [ ] Glass effects use appropriate opacity

**Score:** ___ / 1.0

**If <0.8:**
- Replace generic colors with custom palette
- Add subtle gradients
- Improve contrast ratios
- Use luxury colors (gold, warm neutrals)

---

## Category 4: Image Quality (0-1)

**Check:**
- [ ] Images are sharp and professional
- [ ] Aspect ratios are consistent
- [ ] Optimization is working (WebP, responsive sizes)
- [ ] No layout shift on load
- [ ] Hover effects enhance images
- [ ] Loading states are smooth (skeleton/blur)

**Score:** ___ / 1.0

**If <0.8:**
- Regenerate images with better prompts
- Use Next.js Image optimization
- Add progressive loading
- Improve aspect ratio consistency

---

## Category 5: Spacing & Layout (0-1)

**Check:**
- [ ] Spacing follows consistent rhythm
- [ ] Sections have breathing room
- [ ] Grid alignment is perfect
- [ ] Padding feels balanced
- [ ] White space is intentional
- [ ] No cramped or cluttered areas

**Score:** ___ / 1.0

**If <0.8:**
- Use consistent spacing scale
- Increase white space
- Improve grid alignment
- Add section padding

---

## Category 6: Interactions (0-1)

**Check:**
- [ ] Buttons have delightful hover states
- [ ] Cards lift on hover with shadow
- [ ] Form inputs have smooth focus states
- [ ] Cursor changes appropriately
- [ ] Touch targets are large enough (44px min)
- [ ] Micro-interactions add polish

**Score:** ___ / 1.0

**If <0.8:**
- Add hover transforms (scale 1.02)
- Improve shadow transitions
- Add cursor pointer states
- Implement micro-interactions

---

## Category 7: Mobile Polish (0-1)

**Check:**
- [ ] Mobile design is OPTIMIZED (not just responsive)
- [ ] Touch targets are large and comfortable
- [ ] Typography scales beautifully
- [ ] Navigation is touch-friendly
- [ ] Images are appropriately sized
- [ ] No horizontal scroll

**Score:** ___ / 1.0

**If <0.8:**
- Redesign for mobile (don't just shrink desktop)
- Increase touch targets
- Optimize mobile typography
- Test on actual device

---

## Category 8: Loading Experience (0-1)

**Check:**
- [ ] Page feels fast (LCP <2.5s)
- [ ] Initial render is instant
- [ ] Skeleton screens show while loading
- [ ] Images load progressively (blur-up)
- [ ] No flash of unstyled content
- [ ] Loading states are smooth

**Score:** ___ / 1.0

**If <0.8:**
- Add skeleton screens
- Optimize bundle size
- Implement progressive image loading
- Reduce FCP time

---

## Category 9: Overall Aesthetic (0-1)

**Check:**
- [ ] Design feels cohesive (ONE brand voice)
- [ ] Style is consistent across all pages
- [ ] Components share design language
- [ ] Transitions are unified
- [ ] Brand personality is clear
- [ ] No visual inconsistencies

**Score:** ___ / 1.0

**If <0.8:**
- Create design system
- Unify component styles
- Ensure consistent spacing
- Establish clear brand voice

---

## Category 10: Exceeds Reference (0-1)

**Check:**
- [ ] Better than reference image
- [ ] Matches or exceeds Apple.com quality
- [ ] Adds unique premium touches
- [ ] Feels like $10M website
- [ ] Would impress professional designers
- [ ] User would be proud to show clients

**Score:** ___ / 1.0

**If <0.8:**
- Add premium finishing touches
- Improve animations
- Refine typography
- Add unique design elements

---

## TOTAL SCORE

**Add all categories:** ___ / 10.0

### Decision:

**Score ≥9.0:** ✅ Ready to show user - output "DONE"
**Score 7.0-8.9:** ⚠️ Close but needs refinement - loop again
**Score <7.0:** ❌ Major improvements needed - identify 3 biggest issues and fix

---

## Quick Visual Comparison

**Take Screenshots:**
1. Hero section (desktop + mobile)
2. Portfolio grid (desktop + mobile)
3. Services section
4. Contact form
5. Full page scroll video

**Compare Side-by-Side:**
- Your website vs reference image
- Your website vs Apple.com
- Your website vs current production site (if exists)

**Ask:**
1. Which looks more expensive?
2. Which feels more polished?
3. Which would you be prouder to show?

If reference/Apple looks better → Loop and improve
If your website looks better → Ready!

---

## Common Issues & Fixes

### Issue: "Animations feel janky"
**Fix:**
- Use transform/opacity only (GPU-accelerated)
- Reduce animation complexity
- Check performance profiler
- Enable hardware acceleration

### Issue: "Looks generic/cheap"
**Fix:**
- Replace default colors with luxury palette
- Add glassmorphism effects
- Improve typography hierarchy
- Add micro-interactions

### Issue: "Spacing feels off"
**Fix:**
- Use consistent spacing scale
- Increase white space by 50%
- Improve vertical rhythm
- Align all elements to grid

### Issue: "Mobile feels cramped"
**Fix:**
- Increase mobile padding (32px min)
- Scale typography more aggressively
- Reduce content density
- Optimize for thumb-friendly interactions

### Issue: "Images look AI-generated"
**Fix:**
- Regenerate with photorealistic prompts
- Use image-to-image refinement
- Download locally (not temp URLs)
- Add subtle filters for realism

---

## Remember:

**The goal is NOT to pass tests.**
**The goal is to build something visually stunning.**

If you wouldn't be proud to show this to a client, it's not done.
