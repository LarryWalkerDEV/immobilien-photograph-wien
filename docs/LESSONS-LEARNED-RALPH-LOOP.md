# Lessons Learned: Ralph Loop Frontend Development

> **Purpose**: This document captures critical learnings from the Immobilien-Photograph Wien project to ensure future AI-driven development loops (Ralph Loop) produce production-quality results on the first attempt.

---

## Executive Summary: What Went Wrong

### Initial Failure Points
1. **No Visual Verification**: Code was written without using Playwright to see actual rendered output
2. **Tailwind Misconfiguration**: `tailwind.config.js` scanned wrong directories, stripping all CSS classes
3. **Design Mismatches**: Files had swapped content (variant-c had variant-d's design and vice versa)
4. **Generic AI Aesthetics**: Initial designs used overused fonts (Inter, Arial) and predictable layouts

### Root Cause
**The AI assumed code correctness without visual confirmation.** This is the cardinal sin of frontend development.

---

## The Golden Rule

```
NEVER mark a frontend task as complete without visual verification via Playwright/Chrome DevTools.
```

---

## Phase-Based Workflow with Grading System

### Phase 0: Project Setup (Gate: 100% required)

| Criterion | Test Method | Weight |
|-----------|------------|--------|
| Node modules installed | `npm install` exits 0 | 20% |
| Dev server starts | `npm run dev` shows "Ready" | 30% |
| Tailwind config paths match file structure | Grep content array vs actual dirs | 30% |
| All required skills loaded | Check skill invocations | 20% |

**Required Skills to Invoke:**
```
/document-skills:frontend-design  - For distinctive UI creation
/document-skills:webapp-testing   - For Playwright verification
```

**Tailwind Configuration Validation:**
```javascript
// CRITICAL: Paths in tailwind.config.js MUST match actual file locations
// If files are in /app/ (not /src/app/), config must include:
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',      // Root-level app directory
  './pages/**/*.{js,ts,jsx,tsx,mdx}',    // Root-level pages
  './components/**/*.{js,ts,jsx,tsx,mdx}', // Root-level components
  './src/**/*.{js,ts,jsx,tsx,mdx}',      // AND src directory if used
],

// VALIDATION: Run this check before any styling work:
// 1. List actual directories: ls -la
// 2. Compare with tailwind.config.js content array
// 3. If mismatch found, fix config FIRST
```

---

### Phase 1: Asset Generation with kie.ai (Gate: 80% required)

| Criterion | Test Method | Weight |
|-----------|------------|--------|
| API key configured | Check .env.local exists with KIE_API_KEY | 15% |
| Hero images generated (all variants) | manifest.json has all hero.image URLs | 25% |
| Hero videos generated (all variants) | manifest.json has all hero.video URLs | 25% |
| Portfolio images generated | manifest.json has portfolio array | 20% |
| Images load without 404 | Playwright screenshot shows images | 15% |

#### kie.ai Usage Guide

**Text-to-Image (Hero Images):**
```typescript
// Use model: kling-v2.0-master (highest quality)
const params = {
  prompt: "Luxurious Vienna penthouse interior, floor-to-ceiling windows,
           golden hour sunlight, minimalist furniture, 8K quality,
           architectural photography style",
  negative_prompt: "blurry, low quality, watermark, text",
  aspect_ratio: "16:9",  // For hero sections
  model: "kling-v2.0-master"
};
```

**Image-to-Video (Hero Videos):**
```typescript
// Use model: kling-v2.6-master for smooth motion
const params = {
  image_url: "https://generated-hero-image.jpg",
  prompt: "Subtle camera movement, cinematic lighting shift,
           curtains gently moving, dust particles in sunlight",
  duration: "5",  // 5 seconds
  model: "kling-v2.6-master",
  cfg_scale: 0.5  // Lower = more creative motion
};
```

**Creative Video Uses:**
- **Motion Graphics**: Generate animated backgrounds from static designs
- **Parallax Effects**: Create depth layers that move independently
- **Logo Animations**: Animate static logos with subtle motion
- **Transition Effects**: Generate smooth scene transitions
- **Ambient Elements**: Floating particles, light rays, smoke effects

**Asset Manifest Structure:**
```json
{
  "generated_at": "ISO-timestamp",
  "heroes": {
    "luxusMinimalist": { "image": "url", "video": "url" },
    "cinematicStorytelling": { "image": "url", "video": "url" },
    "dataRoiDriven": { "image": "url", "video": "url" },
    "editorialMagazine": { "image": "url", "video": "url" }
  },
  "portfolio": [
    { "id": "unique-id", "title": "Display Title", "image": "url" }
  ]
}
```

---

### Phase 2: Design Implementation (Gate: 80% required)

| Criterion | Test Method | Weight |
|-----------|------------|--------|
| Distinctive typography (no Inter/Arial/Roboto) | Grep for banned fonts | 15% |
| Custom color palette applied | CSS variables defined | 15% |
| Hero section renders correctly | Playwright screenshot analysis | 20% |
| Animations working (Framer Motion/GSAP) | Check for motion on scroll | 15% |
| No white/blank sections | Screenshot pixel analysis | 20% |
| Mobile responsive | Screenshot at 375px width | 15% |

#### Frontend Design Skill Requirements

**MUST USE the frontend-design skill which enforces:**

1. **Typography Rules:**
   - BANNED: Inter, Roboto, Arial, system-ui as primary fonts
   - REQUIRED: Distinctive display fonts (Space Grotesk, Cormorant Garamond, etc.)
   - Each variant MUST have different typography personality

2. **Color Rules:**
   - BANNED: Generic purple gradients on white
   - REQUIRED: Cohesive palette with CSS variables
   - Dark themes need proper contrast ratios

3. **Layout Rules:**
   - BANNED: Cookie-cutter Bootstrap-style layouts
   - REQUIRED: Asymmetry, overlapping elements, unexpected compositions
   - Each variant MUST be visually distinct

4. **Animation Rules:**
   - REQUIRED: Entry animations on scroll
   - REQUIRED: Hover states that surprise
   - GSAP for parallax, Framer Motion for component transitions

---

### Phase 3: Visual Verification (Gate: 100% required - NO EXCEPTIONS)

| Criterion | Test Method | Weight |
|-----------|------------|--------|
| Each page loads without console errors | Playwright console capture | 20% |
| Hero section visible (not white/blank) | Screenshot pixel analysis | 25% |
| Typography renders correctly | Screenshot text analysis | 20% |
| Images/videos load | Network request check | 20% |
| Design matches spec intent | Human comparison or AI vision | 15% |

#### Playwright Verification Protocol

**MANDATORY: Run this after EVERY significant code change:**

```python
from playwright.sync_api import sync_playwright

def verify_variant(url: str, name: str) -> dict:
    results = {
        "url": url,
        "name": name,
        "passed": [],
        "failed": []
    }

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1440, 'height': 900})

        # 1. Page loads without timeout
        try:
            page.goto(url, timeout=30000)
            page.wait_for_load_state('networkidle')
            results["passed"].append("Page loads")
        except:
            results["failed"].append("Page load timeout")
            return results

        # 2. No console errors
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        if not errors:
            results["passed"].append("No console errors")
        else:
            results["failed"].append(f"Console errors: {errors}")

        # 3. Screenshot for visual check
        page.screenshot(path=f'verification/{name}.png')
        results["passed"].append(f"Screenshot saved: verification/{name}.png")

        # 4. Check for white/blank hero (pixel analysis)
        hero = page.locator('section').first
        if hero:
            box = hero.bounding_box()
            if box and box['height'] > 100:
                results["passed"].append("Hero section has content")
            else:
                results["failed"].append("Hero section empty or missing")

        # 5. Check images loaded
        images = page.locator('img').all()
        broken_images = []
        for img in images:
            if img.get_attribute('src') and not img.is_visible():
                broken_images.append(img.get_attribute('src'))

        if not broken_images:
            results["passed"].append("All images loaded")
        else:
            results["failed"].append(f"Broken images: {broken_images}")

        browser.close()

    return results

# Run for all variants
variants = [
    ("http://localhost:3000/variant-a", "luxus-minimalist"),
    ("http://localhost:3000/variant-b", "cinematic-storytelling"),
    ("http://localhost:3000/variant-c", "data-driven-roi"),
    ("http://localhost:3000/variant-d", "editorial-magazine"),
]

for url, name in variants:
    result = verify_variant(url, name)
    print(f"\n{name}: {len(result['passed'])}/{len(result['passed']) + len(result['failed'])} passed")
```

#### Chrome DevTools MCP Alternative

When Playwright scripts are complex, use Chrome DevTools MCP directly:

```
1. mcp__chrome-devtools__navigate_page(url)
2. mcp__chrome-devtools__take_screenshot()
3. mcp__chrome-devtools__take_snapshot() - for DOM analysis
4. mcp__chrome-devtools__list_console_messages() - for errors
```

**CRITICAL**: After taking a screenshot, ANALYZE it:
- Is the background visible (not white when should be dark)?
- Is typography rendering (not fallback fonts)?
- Are images/videos showing (not broken placeholders)?
- Does the design match the variant's personality?

---

### Phase 4: Cross-Variant Validation (Gate: 90% required)

| Criterion | Test Method | Weight |
|-----------|------------|--------|
| Each variant has distinct visual identity | Compare screenshots | 25% |
| Correct hero assets per variant | Check manifest.json references | 25% |
| No content swaps between variants | Verify page content matches route | 25% |
| All variants accessible from selector | Click-through test | 25% |

#### Content Swap Prevention

**THIS IS A CRITICAL BUG WE ENCOUNTERED:**

```typescript
// WRONG - Files were swapped:
// variant-c/page.tsx had: const hero = manifest.heroes.editorialMagazine;  // WRONG!
// variant-d/page.tsx had: const hero = manifest.heroes.dataRoiDriven;      // WRONG!

// CORRECT mapping:
// variant-a -> luxusMinimalist
// variant-b -> cinematicStorytelling
// variant-c -> dataRoiDriven
// variant-d -> editorialMagazine

// VALIDATION: After writing each variant, verify:
// 1. The hero reference matches the variant name
// 2. The design aesthetic matches the variant description
// 3. Visual screenshot confirms the correct design
```

---

## Common Pitfalls & Prevention

### Pitfall 1: Tailwind Classes Not Applied

**Symptom**: White backgrounds, no styling, fallback fonts

**Cause**: `tailwind.config.js` content array doesn't include actual file paths

**Prevention**:
```bash
# Before ANY styling work, verify paths:
ls -la app/        # Check if files are here
ls -la src/app/    # Or here

# Then verify tailwind.config.js matches
grep -A 10 "content:" tailwind.config.js
```

### Pitfall 2: Assuming Code Works Without Seeing It

**Symptom**: "I wrote the code, it should work"

**Cause**: No visual verification step

**Prevention**:
```
RULE: Every UI task MUST end with a screenshot verification.
NO EXCEPTIONS. Not "I think it works." SHOW IT WORKS.
```

### Pitfall 3: Generic AI Aesthetics

**Symptom**: All variants look similar, predictable layouts, overused fonts

**Cause**: Not invoking frontend-design skill, not following design guidelines

**Prevention**:
```
1. ALWAYS invoke /document-skills:frontend-design at project start
2. ALWAYS choose different typography per variant
3. ALWAYS avoid Inter, Roboto, Arial as primary fonts
4. ALWAYS create asymmetric, surprising layouts
```

### Pitfall 4: Content Swaps Between Files

**Symptom**: variant-c shows variant-d's design and vice versa

**Cause**: Copy-paste errors, incorrect manifest references

**Prevention**:
```
After writing each variant file:
1. Check the hero reference: manifest.heroes.[CORRECT_KEY]
2. Take a screenshot
3. Visually confirm the design matches the variant's intended personality
4. If wrong, fix IMMEDIATELY before proceeding
```

### Pitfall 5: Not Using Skills

**Symptom**: Suboptimal code, missed best practices, reinventing wheels

**Cause**: Forgetting to invoke available skills

**Prevention**:
```
AT PROJECT START, invoke:
- /document-skills:frontend-design  (for UI guidelines)
- /document-skills:webapp-testing   (for Playwright patterns)
- /document-skills:pdf              (if generating PDFs)
- /document-skills:xlsx             (if generating spreadsheets)
```

---

## Grading Calculation

### Per-Phase Scoring

```
Phase Score = (Sum of passed criteria weights) / (Sum of all criteria weights) * 100

Example Phase 2:
- Distinctive typography: PASS (15%)
- Custom color palette: PASS (15%)
- Hero renders correctly: FAIL (0% of 20%)
- Animations working: PASS (15%)
- No white sections: FAIL (0% of 20%)
- Mobile responsive: PASS (15%)

Score = (15 + 15 + 0 + 15 + 0 + 15) / 100 = 60%
Gate: 80% required -> FAIL, must fix before proceeding
```

### Overall Project Scoring

```
Overall Score = (Phase0 * 0.15) + (Phase1 * 0.20) + (Phase2 * 0.30) + (Phase3 * 0.25) + (Phase4 * 0.10)

Thresholds:
- 90-100%: Gold - Production ready
- 80-89%:  Silver - Minor fixes needed
- 70-79%:  Bronze - Significant fixes needed
- <70%:    Fail - Major rework required
```

---

## Ralph Loop Integration

### Pre-Loop Checklist

Before starting any Ralph Loop iteration:

```yaml
pre_loop_checks:
  - skill_frontend_design_loaded: true
  - skill_webapp_testing_loaded: true
  - tailwind_config_validated: true
  - dev_server_running: true
  - playwright_available: true
  - kie_api_key_configured: true  # If generating assets
```

### Loop Structure

```
1. PLAN: Define what will be built
2. IMPLEMENT: Write the code
3. VERIFY: Take screenshot, analyze visually
4. GRADE: Score against criteria
5. FIX: If score < threshold, identify issues and loop back to step 2
6. PROCEED: If score >= threshold, move to next phase
```

### Exit Conditions

```yaml
exit_conditions:
  success:
    - all_phases_pass_gates: true
    - visual_verification_complete: true
    - no_console_errors: true
    - all_variants_distinct: true

  failure_max_iterations:
    - phase_attempts: 5  # Max 5 attempts per phase before escalating
    - total_attempts: 20 # Max 20 total iterations before human review
```

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                    RALPH LOOP QUICK REFERENCE                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. START: Invoke skills                                     │
│     /document-skills:frontend-design                         │
│     /document-skills:webapp-testing                          │
│                                                              │
│  2. VALIDATE: Check Tailwind config paths                    │
│     grep -A 10 "content:" tailwind.config.js                 │
│     ls -la app/ src/                                         │
│                                                              │
│  3. GENERATE: Use kie.ai for assets                          │
│     - Text-to-Image: kling-v2.0-master                       │
│     - Image-to-Video: kling-v2.6-master                      │
│                                                              │
│  4. IMPLEMENT: Write distinctive designs                     │
│     - NO Inter/Roboto/Arial                                  │
│     - YES surprising layouts                                 │
│     - YES variant-specific personalities                     │
│                                                              │
│  5. VERIFY: ALWAYS screenshot after changes                  │
│     mcp__chrome-devtools__take_screenshot()                  │
│     OR Playwright script                                     │
│                                                              │
│  6. GRADE: Score against phase criteria                      │
│     Phase gates: 80-100% required                            │
│                                                              │
│  7. FIX: If score < gate, loop back                          │
│     Max 5 attempts per phase                                 │
│                                                              │
│  GOLDEN RULE: Never mark complete without visual proof!      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Appendix: Test Scripts

### A. Full Verification Script

See: `scripts/ralph-loop-verify.py` (to be created from YAML spec)

### B. Tailwind Config Validator

```bash
#!/bin/bash
# scripts/validate-tailwind.sh

CONFIG="tailwind.config.js"
ERRORS=0

# Extract content paths
PATHS=$(grep -oP "'\./[^']+'" $CONFIG | tr -d "'")

for path in $PATHS; do
  DIR=$(dirname "$path" | sed 's/\*\*.*//g')
  if [ ! -d "$DIR" ] && [ "$DIR" != "." ]; then
    echo "WARNING: Directory does not exist: $DIR"
    ERRORS=$((ERRORS + 1))
  fi
done

if [ $ERRORS -eq 0 ]; then
  echo "Tailwind config paths validated successfully"
  exit 0
else
  echo "Found $ERRORS path issues in Tailwind config"
  exit 1
fi
```

### C. Variant Content Validator

```typescript
// scripts/validate-variants.ts
import * as fs from 'fs';

const VARIANTS = {
  'variant-a': 'luxusMinimalist',
  'variant-b': 'cinematicStorytelling',
  'variant-c': 'dataRoiDriven',
  'variant-d': 'editorialMagazine',
};

let errors = 0;

for (const [variant, expectedHero] of Object.entries(VARIANTS)) {
  const filePath = `app/${variant}/page.tsx`;
  const content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes(`manifest.heroes.${expectedHero}`)) {
    console.error(`ERROR: ${variant} does not reference ${expectedHero}`);
    errors++;
  } else {
    console.log(`OK: ${variant} -> ${expectedHero}`);
  }
}

process.exit(errors > 0 ? 1 : 0);
```

---

*Document Version: 1.0*
*Created: 2026-01-03*
*Project: Immobilien-Photograph Wien*
