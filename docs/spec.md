# SPEZIFIKATION: immobilien-photograph.wien
Virtuelle Rundgänge für Wiener Immobilien

---

## 📋 EXECUTIVE SUMMARY

Professionelle Website für virtuelle Immobilienrundgänge in Wien. Zielgruppe: Immobilienmakler, Vermieter und Hausverwaltungen, die Zeit und Geld sparen wollen durch vorqualifizierte Interessenten.

**Hauptprodukt:** Virtuelle 360° Rundgänge + professionelle Immobilienfotografie + Video-Touren

**Verkaufsversprechen (Alex Hormozi + Eugene Schwartz Stil):**
- 80% weniger unnötige Besichtigungstermine
- Nur noch vorqualifizierte Interessenten
- 3x schnellere Vermietung/Verkauf
- Höhere Abschlussraten durch emotionale Vorbindung

---

## 🎯 PROJEKT ÜBERSICHT

### Kernziele
1. **4 Homepage-Varianten** für Client-Präsentation (verschiedene Design-Ansätze)
2. **Conversion-optimiert** mit klaren CTAs und Value Propositions
3. **Performance-optimiert** (Lighthouse 90+, FCP <1.5s, LCP <2.5s)
4. **Mobile-first & responsive** (Breakpoints: 768px, 1024px, 1440px, 1920px)
5. **Editorial Parallax-Erlebnis** inspiriert von Shopify Editions Winter 2026

### Business Details
- **Website:** immobilien-photograph.wien
- **Adresse:** Raaber-Bahn-Gasse 11, 1100 Wien
- **Sprache:** Deutsch (Österreich)
- **Markt:** Wien und Umgebung

### Zielgruppe
1. **Primär:** Immobilienmakler in Wien und Umgebung
2. **Sekundär:** Private Vermieter mit hochwertigen Objekten
3. **Tertiär:** Hausverwaltungen und Bauträger

---

## ✅ DEFINITION OF DONE (Autonomous Coding Success Criteria)

### Deployment Readiness
- [ ] All 4 variants deployed and accessible via routes (`/variant-a`, `/variant-b`, `/variant-c`, `/variant-d`)
- [ ] Root page (`/`) shows variant selector with previews linking to each variant
- [ ] All routes tested locally with `npm run dev` before GitHub push
- [ ] Production build succeeds with `npm run build` (no errors)
- [ ] Single GitHub repository ready for Vercel deployment

### Performance Benchmarks (MUST PASS)
- [ ] Lighthouse Performance Score: **≥90**
- [ ] First Contentful Paint (FCP): **<1.5s**
- [ ] Largest Contentful Paint (LCP): **<2.5s**
- [ ] Cumulative Layout Shift (CLS): **<0.1**
- [ ] Mobile Performance Score: **≥85**

### E2E Tests (Playwright) - MANDATORY BEFORE "DONE"
**CRITICAL:** These tests MUST be implemented and passing at ≥90% before declaring completion.

- [ ] **Test 1:** Homepage loads without errors
- [ ] **Test 2:** All animation libraries load (GSAP, Framer Motion, Lottie)
- [ ] **Test 3:** Hero video/image renders correctly
- [ ] **Test 4:** Parallax scroll effects work (GSAP ScrollTrigger)
- [ ] **Test 5:** Navigation sticky + backdrop blur on scroll
- [ ] **Test 6:** Variant selector navigates to correct variant pages
- [ ] **Test 7:** Contact form validation works (all fields, email format, phone format)
- [ ] **Test 8:** Form submission shows success message (mock)

**Testing Protocol:**
- [ ] `playwright.config.ts` configured with screenshot on failure
- [ ] All tests in `e2e/` directory with descriptive names
- [ ] Each test captures screenshot of final state
- [ ] Console errors logged and saved to file
- [ ] Test results saved to `test-results/` directory
- [ ] Minimum 90% pass rate required for "DONE" status
- [ ] Failed tests must include: screenshot, console logs, error stack trace

### Responsive Testing (Chrome MCP)
- [ ] **Mobile (375px):** Navigation, typography, images responsive
- [ ] **Tablet (768px):** Layout adjusts, sidebar becomes hamburger
- [ ] **Desktop (1024px):** Full layout with sidebar navigation
- [ ] **Large Desktop (1440px+):** Max-width containers, optimal spacing

### Animation Requirements
- [ ] GSAP parallax works on all hero sections (multi-layer depth)
- [ ] Framer Motion component transitions smooth (page entry, hover states)
- [ ] Lottie hero scroll indicator animates
- [ ] Lottie icon animations (checkmarks, stats counting) trigger on scroll
- [ ] Reduced motion support (`prefers-reduced-motion: reduce`)

### Accessibility
- [ ] All interactive elements keyboard-navigable (Tab, Enter, Space)
- [ ] Focus visible indicators on all buttons/links
- [ ] ARIA labels on icon buttons
- [ ] Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- [ ] Heading hierarchy (H1 → H2 → H3, no skips)

### Content Completeness
- [ ] German copy adapted per variant personality (Variant A: elegant, B: emotional, C: data-driven, D: editorial)
- [ ] 6-8 portfolio items generated via kie.ai API with realistic Vienna properties
- [ ] Contact form with all required fields (Name, Email, Phone, Message)
- [ ] Footer with business address, phone, email
- [ ] Legal pages: Impressum, Datenschutzerklärung, AGB (basic templates)

---

## 🛠️ TECHNICAL ARCHITECTURE

### Tech Stack
```
Frontend:
├── Next.js 16 (App Router, TypeScript strict mode)
├── Tailwind CSS v4
├── shadcn/ui Components
├── GSAP + ScrollTrigger (parallax, scroll animations)
├── Framer Motion (component animations)
└── Lottie React (micro-animations)

APIs & Services:
├── kie.ai Text-to-Image API (4.5 model)
├── kie.ai Image-to-Video API (Kling 2.6)
└── (Future: Google Maps API for location)

Development & Deployment:
├── GitHub (Version Control)
├── Vercel (Hosting & CI/CD)
├── Playwright (E2E Testing)
├── Chrome MCP (Live Testing & Screenshots)
└── Plausible Analytics (Privacy-friendly, optional)
```

### Design System: Shopify Editions Renaissance Style

#### Farbpalette
```css
/* Primäre Hintergrundfarben */
--bg-cream: #DCDCD0;           /* Warmes Creme - Haupthintergrund */
--bg-offwhite: #F7F7EE;        /* Off-White - Karten, Sektionen */
--bg-dark-olive: #292919;      /* Dunkles Olive - dunkle Bereiche */
--bg-black: #000000;           /* Reines Schwarz - Kontraste */

/* Textfarben */
--text-primary: #292919;       /* Dunkles Olive - Haupttext */
--text-secondary: #5C5C4E;     /* Mittleres Grau - Sekundärtext */
--text-tertiary: #909083;      /* Warmes Grau - gedämpfter Text */
--text-light: #F7F7EE;         /* Off-White - Text auf Dunkel */

/* UI-Farben */
--border-default: #C9C9C9;     /* Gedämpftes Grau - Rahmen */
--border-light: #ECECEC;       /* Helles Grau - subtile Rahmen */

/* Akzentfarben */
--accent-gold: #C9A55C;        /* Gold - Premium-Akzente */
--accent-blue: #2E5EAA;        /* Vertrauens-Blau */
--accent-green: #00C49A;       /* Erfolgs-Grün */
```

#### Typografie
```css
/* Schriftfamilien */
--font-display: 'Space Grotesk', sans-serif;
--font-serif: 'Cormorant Garamond', serif;
--font-body: 'Inter', system-ui, sans-serif;

/* Schriftgrößen (Responsive) */
--text-hero: clamp(60px, 10vw, 140px);
--text-section: clamp(48px, 8vw, 120px);
--text-narrative-lg: clamp(24px, 3vw, 38px);
--text-narrative-md: clamp(20px, 2.5vw, 27px);
--text-body: 16px;
--text-small: 14px;

/* Schriftstärken */
--weight-regular: 400;
--weight-medium: 500;
--weight-bold: 700;
```

#### Responsive Breakpoints
```css
/* Mobile First */
375px   /* Mobile small */
768px   /* Tablet */
1024px  /* Desktop small */
1440px  /* Desktop large */
1920px  /* Desktop XL */
```

---

## 📄 4 SEITEN-VARIANTEN

### Variante 1: "Luxus Minimalist"

**Design-Philosophie:** Elegant, reduziert, hochwertig
**Zielgruppe:** Premium-Immobilienmakler, Luxus-Objekte
**Animation Intensity:** Subtil & smooth

#### Hero-Sektion
- **Layout:** Vollbild-Parallax mit 3 Layern (Background, Mid, Foreground)
- **Design:** Warmes Creme (#DCDCD0) mit dunklem Olive Text
- **Animation:** GSAP ScrollTrigger parallax (langsame Layer-Bewegung)

**Headline (Hormozi-Stil):**
```
"80% weniger unnötige Besichtigungen.
3x schnellere Vermietung.
Garantiert."
```

**Subheadline (Schwartz-Stil):**
```
"Während Ihre Konkurrenz noch Smartphone-Fotos macht,
verkaufen Sie mit virtuellen Rundgängen, die Interessenten
emotional binden – bevor sie überhaupt kommen."
```

**CTA:** "Kostenlose Beratung vereinbaren"

#### Sektionen (Reihenfolge)
1. **Hero** - Vollbild-Video/Bild (kie.ai generiert)
2. **Problem-Agitate-Solution**
   - Problem: "Sie verschwenden Stunden mit Besichtigungen für Uninteressierte"
   - Agitate: "Jede Besichtigung kostet Sie 1 Stunde + Anfahrt. 20 Besichtigungen = 3 Tage verschwendet"
   - Solution: "Virtuelle Rundgänge filtern automatisch Uninteressierte heraus"
3. **Portfolio-Grid** (Masonry-Layout, subtle hover lift)
4. **Process Timeline** (Vertical mit connecting lines)
5. **Social Proof** (Testimonials mit Fotos)
6. **Pakete & Preise** (Elegant comparison cards)
7. **Contact Form** (Clean, minimal design)
8. **Footer** (Business info, legal links)

**Farben:** Primär Creme & Off-White, Akzente in Gold
**Schriften:** Space Grotesk (Headlines), Cormorant Garamond (Narrative)
**Animationen:** Subtil, smooth, elegant (GSAP ease: "power2.out")

---

### Variante 2: "Cinematic Storytelling"

**Design-Philosophie:** Immersiv, emotional, story-getrieben
**Zielgruppe:** Emotionale Entscheider, Premium-Segment
**Animation Intensity:** Dramatisch & cinematic

#### Hero-Sektion
- **Layout:** Fullpage-Video-Hero (Auto-Play, stumm, loop)
- **Design:** Dunkler Hintergrund mit Gradient-Overlay
- **Animation:** Scroll-triggered text reveal (Framer Motion)

**Headline:**
```
"Ihre Immobilien verdienen mehr
als 5 Smartphone-Fotos auf willhaben.at"
```

**Subheadline:**
```
"Entdecken Sie, wie virtuelle Rundgänge Ihre Objekte
in begehrte Traumimmobilien verwandeln –
und nur noch die richtigen Interessenten anziehen."
```

**CTA:** "Referenzen ansehen"

#### Sektionen
1. **Cinematic Video Hero** (10s Loop, kie.ai generiert)
2. **"Warum Visualisierung verkauft"** - Narrative mit Drop Caps
3. **Case Studies** (Video-Hintergründe, before/after)
4. **Portfolio Showcase** (Fullscreen lightbox on click)
5. **Team/About** (Personal story, founder photo)
6. **Process Timeline** (Vertical with emotional copy)
7. **Contact Form** (Dark theme, video background)

**Farben:** Dunkel (#292919) mit lebendigen Akzenten (Gold, Cyan)
**Schriften:** Bold Headlines (Space Grotesk), große Serif-Zitate (Cormorant)
**Animationen:** Dramatisch, cinematic parallax, fade reveals

---

### Variante 3: "Data-Driven ROI"

**Design-Philosophie:** ROI-fokussiert, professionell, zahlenbasiert
**Zielgruppe:** Analytische Entscheider, Hausverwaltungen
**Animation Intensity:** Minimal & professional

#### Hero-Sektion
- **Layout:** Split-Screen (Visual links, Copy rechts)
- **Design:** Heller Hintergrund mit Vertrauens-Blau
- **Animation:** Lottie animated statistics (counting numbers)

**Headline:**
```
"€2.400 durchschnittliche Zeitersparnis
pro Vermietung durch virtuelle Rundgänge"
```

**Subheadline:**
```
"Fakten: 73% weniger Besichtigungen.
40% kürzere Vermarktungszeit.
95% Interessenten-Zufriedenheit."
```

**CTA-Primär:** "Jetzt anfragen"
**CTA-Sekundär:** "Referenzen ansehen"

#### Sektionen
1. **Split-Screen Hero** mit Live-Statistiken (Lottie counter)
2. **Statistik-Sektion** (Animated numbers, data visualization)
3. **"ROI-Beweis"** - Vergleichstabelle (vorher/nachher)
4. **Service-Pakete mit Preisen** (Transparente Kostenaufstellung)
5. **Kunden-Ergebnisse Grid** (Zahlen im Fokus)
6. **Process Timeline** (Efficiency-focused copy)
7. **FAQ** (Akkordeon-Stil)
8. **Contact Form** (Professional, multi-step feel)

**Farben:** Vertrauens-Blau (#2E5EAA), Erfolgs-Grün (#00C49A)
**Schriften:** Klare Sans-Serif (Space Grotesk), datenfokussiert
**Animationen:** Smooth, professional, number counting

---

### Variante 4: "Editorial Magazine"

**Design-Philosophie:** Magazin-Layout, content-reich, informativ
**Zielgruppe:** Informationssuchende, Content-Konsumenten
**Animation Intensity:** Elegant & lesbar

#### Hero-Sektion
- **Layout:** Große Typografie mit Editorial-Grid
- **Design:** Warmes Creme mit großen Serifenschriften
- **Animation:** Scroll-based fade-in (Framer Motion)

**Headline:**
```
"Wie virtuelle Rundgänge
die Wiener Immobilienbranche
revolutionieren"
```

**Subheadline (mit Drop Cap):**
```
"Ein umfassender Leitfaden für Makler, Vermieter
und Hausverwaltungen, die ihren Vermietungsprozess
professionalisieren und Zeit sparen wollen."
```

**CTA:** "Mehr erfahren"

#### Sektionen
1. **Editorial Hero** (Magazine-Cover-Style mit Drop Cap)
2. **Feature Article** (Long-form content mit Illustrationen)
3. **Portfolio als Editorial-Spread** (Grid mit captions)
4. **"Hinter den Kulissen"** - Prozess-Dokumentation
5. **Process Timeline** (Editorial infographic style)
6. **Testimonials** (Quote-style mit großen Serif-Zitaten)
7. **Newsletter-Signup** (Lead-Magnet: "Leitfaden herunterladen")
8. **Contact Form** (Editorial design)

**Farben:** Renaissance-inspiriert (Creme #DCDCD0, Olive #292919)
**Schriften:** Cormorant Garamond prominent, Space Grotesk für Kontrast
**Animationen:** Scroll-basiert, lesbar, elegant

---

## 🎨 DESIGN-SYSTEM IMPLEMENTATION

### Tailwind Config (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#DCDCD0',
          light: '#F7F7EE',
        },
        olive: {
          DEFAULT: '#292919',
          medium: '#5C5C4E',
          light: '#909083',
        },
        gold: {
          DEFAULT: '#C9A55C',
        },
        trust: {
          DEFAULT: '#2E5EAA',
        },
        success: {
          DEFAULT: '#00C49A',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'system-ui'],
      },
      fontSize: {
        hero: 'clamp(60px, 10vw, 140px)',
        section: 'clamp(48px, 8vw, 120px)',
        'narrative-lg': 'clamp(24px, 3vw, 38px)',
        'narrative-md': 'clamp(20px, 2.5vw, 27px)',
      },
      lineHeight: {
        tight: '0.9',
        snug: '1.1',
      },
      screens: {
        'xs': '375px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
        'xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

### Globale CSS-Variablen (globals.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Shopify Editions Farben */
  --bg-cream: #DCDCD0;
  --bg-offwhite: #F7F7EE;
  --bg-dark-olive: #292919;
  --text-primary: #292919;
  --text-secondary: #5C5C4E;
  --accent-gold: #C9A55C;

  /* Typografie */
  --font-display: 'Space Grotesk', sans-serif;
  --font-serif: 'Cormorant Garamond', serif;
  --font-body: 'Inter', system-ui;
}

@layer base {
  body {
    @apply bg-cream text-olive font-body;
  }

  .section-title {
    @apply font-display text-section font-bold leading-tight text-olive;
  }

  .narrative-text {
    @apply font-serif text-narrative-lg leading-relaxed text-olive;
  }

  .drop-cap::first-letter {
    @apply font-serif text-6xl float-left mr-2 mt-2;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔧 kie.ai API INTEGRATION

### Implementation Priority: ZUERST!

**KRITISCH:** Assets müssen VOR Website-Entwicklung generiert werden.

### Phase 1: kie.ai Setup (TAG 1)
1. API-Credentials in `.env.local` einrichten
2. API-Wrapper-Funktionen erstellen (`lib/kie-api.ts`)
3. Test-Images generieren (4 Hero-Backgrounds)
4. Test-Videos generieren (4 Hero-Videos)
5. Portfolio-Assets generieren (6-8 Vienna properties)
6. Asset-Manifest erstellen (`public/generated/manifest.json`)

### API-Wrapper (lib/kie-api.ts)
```typescript
// lib/kie-api.ts

const KIE_API_BASE = 'https://api.kie.ai/api/v1/jobs';
const KIE_API_KEY = process.env.KIE_API_KEY;

interface TextToImageParams {
  prompt: string;
  aspect_ratio: '1:1' | '4:3' | '3:4' | '16:9' | '9:16' | '2:3' | '3:2' | '21:9';
  quality: 'basic' | 'high';
  callBackUrl?: string;
}

interface ImageToVideoParams {
  prompt: string;
  image_urls: string[];
  duration: '5' | '10';
  sound: boolean;
  callBackUrl?: string;
}

interface TaskResponse {
  code: number;
  msg: string;
  data: {
    taskId: string;
  };
}

interface TaskStatus {
  taskId: string;
  model: string;
  state: 'waiting' | 'success' | 'fail';
  resultJson?: string;
  failMsg?: string;
  costTime?: number;
  completeTime?: number;
  createTime: number;
}

/**
 * Erstellt einen Text-to-Image Task
 */
export async function createImageTask(
  params: TextToImageParams
): Promise<string> {
  const response = await fetch(`${KIE_API_BASE}/createTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KIE_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'seedream/4.5-text-to-image',
      input: params,
    }),
  });

  const data: TaskResponse = await response.json();

  if (data.code !== 200) {
    throw new Error(`API Error: ${data.msg}`);
  }

  return data.data.taskId;
}

/**
 * Erstellt einen Image-to-Video Task
 */
export async function createVideoTask(
  params: ImageToVideoParams
): Promise<string> {
  const response = await fetch(`${KIE_API_BASE}/createTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KIE_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'kling-2.6/image-to-video',
      input: params,
    }),
  });

  const data: TaskResponse = await response.json();

  if (data.code !== 200) {
    throw new Error(`API Error: ${data.msg}`);
  }

  return data.data.taskId;
}

/**
 * Prüft den Status eines Tasks
 */
export async function checkTaskStatus(
  taskId: string
): Promise<TaskStatus> {
  const response = await fetch(
    `${KIE_API_BASE}/recordInfo?taskId=${taskId}`,
    {
      headers: {
        'Authorization': `Bearer ${KIE_API_KEY}`,
      },
    }
  );

  const data = await response.json();

  if (data.code !== 200) {
    throw new Error(`API Error: ${data.msg}`);
  }

  return data.data;
}

/**
 * Wartet auf Task-Completion und gibt Ergebnis zurück
 */
export async function waitForTaskCompletion(
  taskId: string,
  maxAttempts: number = 60,
  delayMs: number = 5000
): Promise<string[]> {
  for (let i = 0; i < maxAttempts; i++) {
    const status = await checkTaskStatus(taskId);

    if (status.state === 'success') {
      const result = JSON.parse(status.resultJson || '{}');
      return result.resultUrls || [];
    }

    if (status.state === 'fail') {
      throw new Error(`Task failed: ${status.failMsg}`);
    }

    // Task läuft noch, warten
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }

  throw new Error('Task timeout - took too long to complete');
}

/**
 * Generiert ein Bild und wartet auf Fertigstellung
 */
export async function generateImage(
  params: TextToImageParams
): Promise<string> {
  const taskId = await createImageTask(params);
  const urls = await waitForTaskCompletion(taskId);
  return urls[0];
}

/**
 * Generiert ein Video aus einem Bild
 */
export async function generateVideo(
  params: ImageToVideoParams
): Promise<string> {
  const taskId = await createVideoTask(params);
  const urls = await waitForTaskCompletion(taskId, 120, 10000);
  return urls[0];
}
```

### Content-Generation-Script (scripts/generate-assets.ts)
```typescript
// scripts/generate-assets.ts

import { generateImage, generateVideo } from '../src/lib/kie-api';
import fs from 'fs/promises';
import path from 'path';

const HERO_PROMPTS = {
  luxusMinimalist: {
    image: `Luxurious Vienna apartment interior, floor-to-ceiling windows with
    stunning city views, modern minimalist furniture, golden hour warm
    lighting, professional architectural photography, 8K ultra high quality,
    cinematic composition, elegant and sophisticated atmosphere`,
    video: `Slow elegant camera movement through the luxurious space,
    subtle panning revealing the stunning cityscape, gentle natural
    light movement, sophisticated and refined motion`
  },

  cinematicStorytelling: {
    image: `Dramatic cinematic view of an elegant Vienna penthouse,
    twilight cityscape through large windows, moody atmospheric lighting,
    professional real estate videography style, high-end luxury aesthetic,
    cinematic color grading, 8K quality`,
    video: `Dramatic cinematic camera movement, slow zoom towards the windows,
    atmospheric light changes from twilight to evening,
    professional videography motion, emotional and immersive`
  },

  dataRoiDriven: {
    image: `Modern professional real estate office in Vienna, clean contemporary
    design, large screens showing property data and analytics,
    bright professional lighting, corporate photography style,
    trust-inspiring aesthetic, 8K quality`,
    video: `Smooth professional camera movement, screens displaying animated
    data and graphs, confident and trustworthy motion,
    corporate video style`
  },

  editorialMagazine: {
    image: `Editorial-style photograph of a beautiful restored Altbau apartment
    in Vienna, classic Viennese architecture with modern touches,
    natural daylight streaming through tall windows, magazine-quality
    composition, warm inviting atmosphere, 8K ultra high quality`,
    video: `Gentle documentary-style camera movement through the space,
    natural exploration of the architectural details,
    editorial photography motion, warm and inviting`
  },
};

const PORTFOLIO_PROMPTS = [
  {
    id: 'penthouse-doebling',
    title: 'Luxus-Penthouse Döbling',
    prompt: `Luxury penthouse in Vienna Döbling district, panoramic city views,
    modern interior design, floor-to-ceiling windows, professional real estate photography,
    8K quality, warm natural lighting`
  },
  {
    id: 'altbau-innere-stadt',
    title: 'Altbau-Wohnung Innere Stadt',
    prompt: `Classic Viennese Altbau apartment in 1st district, high ceilings,
    ornate moldings, herringbone parquet floors, restored historic architecture,
    professional real estate photography, 8K quality`
  },
  {
    id: 'modern-loft-mariahilf',
    title: 'Modernes Loft Mariahilf',
    prompt: `Modern industrial loft apartment in Vienna Mariahilf, exposed brick walls,
    open plan living, contemporary design, professional real estate photography,
    8K quality, natural light`
  },
  {
    id: 'villa-hietzing',
    title: 'Villa Hietzing',
    prompt: `Elegant villa in Vienna Hietzing, classic Viennese architecture,
    beautiful garden, high-end interior, professional real estate photography,
    8K quality, golden hour lighting`
  },
  {
    id: 'neubau-wohnung',
    title: 'Neubauwohnung mit Balkon',
    prompt: `Brand new apartment in Vienna with large balcony, modern minimalist design,
    smart home features, contemporary architecture, professional real estate photography,
    8K quality, bright natural light`
  },
  {
    id: 'dachgeschoss-leopoldstadt',
    title: 'Dachgeschoss Leopoldstadt',
    prompt: `Penthouse apartment in Vienna Leopoldstadt, rooftop terrace with city views,
    modern design, skylights, professional real estate photography,
    8K quality, sunset lighting`
  },
];

async function generateAllAssets() {
  console.log('🎨 Starte Content-Generierung...');

  const assetDir = path.join(process.cwd(), 'public', 'generated');
  await fs.mkdir(assetDir, { recursive: true });

  const manifest = {
    generated_at: new Date().toISOString(),
    heroes: {} as Record<string, { image: string; video: string }>,
    portfolio: [] as Array<{ id: string; title: string; image: string }>,
  };

  // Generate Hero Assets
  for (const [variant, prompts] of Object.entries(HERO_PROMPTS)) {
    console.log(`\n📸 Generiere Hero für ${variant}...`);

    try {
      const imageUrl = await generateImage({
        prompt: prompts.image.trim(),
        aspect_ratio: '21:9',
        quality: 'high',
      });

      console.log(`✅ Bild generiert: ${imageUrl}`);

      const videoUrl = await generateVideo({
        prompt: prompts.video.trim(),
        image_urls: [imageUrl],
        duration: '10',
        sound: false,
      });

      console.log(`✅ Video generiert: ${videoUrl}`);

      manifest.heroes[variant] = {
        image: imageUrl,
        video: videoUrl,
      };

      await fs.writeFile(
        path.join(assetDir, 'manifest.json'),
        JSON.stringify(manifest, null, 2)
      );

    } catch (error) {
      console.error(`❌ Fehler bei ${variant}:`, error);
    }
  }

  // Generate Portfolio Assets
  for (const item of PORTFOLIO_PROMPTS) {
    console.log(`\n📸 Generiere Portfolio: ${item.title}...`);

    try {
      const imageUrl = await generateImage({
        prompt: item.prompt.trim(),
        aspect_ratio: '16:9',
        quality: 'high',
      });

      console.log(`✅ Portfolio-Bild generiert: ${imageUrl}`);

      manifest.portfolio.push({
        id: item.id,
        title: item.title,
        image: imageUrl,
      });

      await fs.writeFile(
        path.join(assetDir, 'manifest.json'),
        JSON.stringify(manifest, null, 2)
      );

    } catch (error) {
      console.error(`❌ Fehler bei ${item.title}:`, error);
    }
  }

  console.log('\n✅ Alle Assets generiert!');
  console.log('📄 Manifest gespeichert in: public/generated/manifest.json');
}

generateAllAssets();
```

### Verwendung im Code
```typescript
// app/variant-a/page.tsx

import manifest from '@/public/generated/manifest.json';

export default function VariantAPage() {
  const { image, video } = manifest.heroes.luxusMinimalist;

  return (
    <main>
      <HeroSection
        videoUrl={video}
        posterUrl={image}
        headline="80% weniger unnötige Besichtigungen"
      />
      {/* Rest */}
    </main>
  );
}
```

---

## 🗂️ DATEISTRUKTUR

```
immobilien-photograph-wien/
│
├── .env.local                    # KIE_API_KEY
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── playwright.config.ts
│
├── public/
│   ├── generated/                # kie.ai Assets
│   │   ├── manifest.json
│   │   └── README.md
│   ├── lottie/                   # Lottie JSON files
│   │   ├── scroll-indicator.json
│   │   └── checkmark-animation.json
│   └── fonts/                    # Custom Fonts (if needed)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root Layout
│   │   ├── page.tsx              # Variant Selector Landing
│   │   ├── globals.css           # Global Styles
│   │   │
│   │   ├── variant-a/            # Luxus Minimalist
│   │   │   └── page.tsx
│   │   │
│   │   ├── variant-b/            # Cinematic Storytelling
│   │   │   └── page.tsx
│   │   │
│   │   ├── variant-c/            # Data-Driven ROI
│   │   │   └── page.tsx
│   │   │
│   │   ├── variant-d/            # Editorial Magazine
│   │   │   └── page.tsx
│   │   │
│   │   ├── impressum/
│   │   │   └── page.tsx
│   │   │
│   │   ├── datenschutz/
│   │   │   └── page.tsx
│   │   │
│   │   └── agb/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/ui Components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   │
│   │   ├── animations/           # Animation Components
│   │   │   ├── ParallaxSection.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── LottiePlayer.tsx
│   │   │
│   │   ├── sections/             # Reusable Sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PortfolioGrid.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── TestimonialSlider.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── layout/               # Layout Components
│   │       ├── Navigation.tsx
│   │       ├── MobileMenu.tsx
│   │       └── CookieBanner.tsx
│   │
│   ├── lib/
│   │   ├── kie-api.ts           # kie.ai API Integration
│   │   ├── utils.ts             # Utility Functions
│   │   └── constants.ts         # Constants
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── types/
│   │   ├── kie-api.ts
│   │   ├── portfolio.ts
│   │   └── testimonials.ts
│   │
│   └── data/
│       ├── portfolio.json        # Portfolio-Daten
│       ├── testimonials.json     # Kundenstimmen
│       ├── services.json         # Leistungen & Preise
│       └── faqs.json             # FAQ-Daten
│
├── scripts/
│   ├── generate-assets.ts       # Content-Generierung
│   └── optimize-images.ts       # Bild-Optimierung
│
├── e2e/
│   ├── homepage.spec.ts         # E2E Tests
│   └── variants.spec.ts         # Variant Navigation Tests
│
└── README.md
```

---

## 🚀 ENTWICKLUNGS-WORKFLOW

### Phase 1: Setup & kie.ai Integration (TAG 1) - KRITISCH ZUERST!

```bash
# 1. Projekt initialisieren
npx create-next-app@latest immobilien-photograph-wien --typescript --tailwind --app
cd immobilien-photograph-wien

# 2. Dependencies installieren
npm install gsap lottie-react framer-motion
npm install @radix-ui/react-icons @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge
npm install @tailwindcss/typography @tailwindcss/forms

# 3. Dev Dependencies
npm install -D @playwright/test @types/node

# 4. shadcn/ui initialisieren
npx shadcn-ui@latest init

# 5. .env.local erstellen
echo "KIE_API_KEY=your_api_key_here" > .env.local

# 6. Git initialisieren
git init
git add .
git commit -m "Initial commit: Next.js 16 setup"

# 7. GitHub Repository erstellen
gh repo create immobilien-photograph-wien --public --source=. --remote=origin
git push -u origin main

# 8. kie.ai Assets generieren (WICHTIG: VOR Website-Entwicklung!)
npm run generate:assets
```

#### Checklist Phase 1:
- [ ] Next.js 16 Projekt initialisiert
- [ ] Alle Dependencies installiert
- [ ] shadcn/ui konfiguriert
- [ ] `.env.local` mit `KIE_API_KEY` angelegt
- [ ] `lib/kie-api.ts` erstellt
- [ ] Test-Image erfolgreich generiert (Bestätigung in Console)
- [ ] Test-Video erfolgreich generiert (Bestätigung in Console)
- [ ] **Alle Hero-Assets generiert (4 Images + 4 Videos)**
- [ ] **Alle Portfolio-Assets generiert (6 Images)**
- [ ] `manifest.json` erstellt und validiert
- [ ] Git Repository erstellt
- [ ] Zu GitHub gepusht

---

### Phase 2: Design-System & Core Components (TAG 2)

```bash
# Tailwind Config anpassen
# globals.css mit Custom Fonts
# shadcn/ui Components installieren
npx shadcn-ui@latest add button card input
```

#### Component Development Order:
1. **Layout Components**
   - Navigation (Sticky mit backdrop blur)
   - Footer (Business info, legal links)
   - MobileMenu (Hamburger für < 768px)

2. **Animation Components**
   - ParallaxSection (GSAP ScrollTrigger wrapper)
   - ScrollReveal (Framer Motion fade-in)
   - LottiePlayer (Lottie animation loader)

3. **Section Components**
   - HeroSection (Video/Image background, headline, CTA)
   - PortfolioGrid (Masonry layout, hover effects)
   - ProcessTimeline (Vertical with connecting lines)
   - TestimonialSlider (Carousel)
   - PricingTable (Comparison cards)
   - ContactForm (Validation, mock submission)

#### Checklist Phase 2:
- [ ] Tailwind Config mit Shopify Editions Farben
- [ ] globals.css mit Custom Fonts (Space Grotesk, Cormorant Garamond, Inter)
- [ ] Button Component customized (Gold accent on hover)
- [ ] Card Component customized
- [ ] Input Component customized
- [ ] Navigation Component (Sticky + backdrop blur on scroll)
- [ ] Footer Component (Business address, legal links)
- [ ] MobileMenu Component (Responsive hamburger)
- [ ] ParallaxSection Component (GSAP integration)
- [ ] ScrollReveal Component (Framer Motion)
- [ ] LottiePlayer Component
- [ ] All Section Components built

---

### Phase 3: Variant A - "Luxus Minimalist" (TAG 3)

**Build first variant as template for others**

```typescript
// app/variant-a/page.tsx
import manifest from '@/public/generated/manifest.json';

export default function VariantAPage() {
  const { image, video } = manifest.heroes.luxusMinimalist;

  return (
    <main className="relative">
      {/* Hero */}
      <HeroSection
        variant="luxusMinimalist"
        videoUrl={video}
        posterUrl={image}
        headline="80% weniger unnötige Besichtigungen. 3x schnellere Vermietung. Garantiert."
        subheadline="Während Ihre Konkurrenz noch Smartphone-Fotos macht, verkaufen Sie mit virtuellen Rundgängen, die Interessenten emotional binden – bevor sie überhaupt kommen."
        ctaPrimary="Kostenlose Beratung vereinbaren"
      />

      {/* Problem-Agitate-Solution */}
      <ProblemAgitateSection />

      {/* Portfolio Grid */}
      <PortfolioGrid items={manifest.portfolio} variant="masonry" />

      {/* Process Timeline */}
      <ProcessTimeline variant="vertical" />

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonialsData} />

      {/* Pricing */}
      <PricingTable packages={servicesData.packages} />

      {/* Contact Form */}
      <ContactForm variant="minimal" />

      {/* Footer */}
      <Footer />
    </main>
  );
}
```

#### Checklist Phase 3:
- [ ] Hero Section mit GSAP Parallax (3 Layers)
- [ ] Video autoplay, loop, muted
- [ ] Problem-Agitate-Solution Section
- [ ] Portfolio Grid (6 items from kie.ai)
- [ ] Process Timeline (5 steps, vertical, connecting lines)
- [ ] Testimonials (2-3 items, subtle animation)
- [ ] Pricing Table (3 packages)
- [ ] Contact Form (validation working)
- [ ] Footer with business info
- [ ] Mobile responsive (tested 375px, 768px, 1024px)
- [ ] Lighthouse Score ≥90

---

### Phase 4: Variants B, C, D (TAG 4-5)

**Use Variant A as template, customize per variant personality**

#### Variant B - "Cinematic Storytelling"
- [ ] Dark theme implementation
- [ ] Fullscreen video hero
- [ ] Dramatic parallax effects
- [ ] Case studies with video backgrounds
- [ ] Team/About section

#### Variant C - "Data-Driven ROI"
- [ ] Split-screen hero
- [ ] Lottie animated statistics (number counting)
- [ ] ROI comparison tables
- [ ] FAQ accordion
- [ ] Professional color scheme (blue/green)

#### Variant D - "Editorial Magazine"
- [ ] Editorial typography (large serifs, drop caps)
- [ ] Magazine-style grid
- [ ] Long-form content sections
- [ ] Newsletter signup
- [ ] Content-rich layout

---

### Phase 5: Variant Selector Landing Page (TAG 5)

```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-hero font-display text-center mb-8">
            Wählen Sie Ihre bevorzugte Variante
          </h1>
          <p className="text-narrative-md font-serif text-center mb-16 max-w-3xl mx-auto">
            Vier unterschiedliche Design-Ansätze für Ihre virtuelle Immobilien-Präsentation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <VariantPreviewCard
              title="Luxus Minimalist"
              description="Elegant, reduziert, hochwertig"
              href="/variant-a"
              image={manifest.heroes.luxusMinimalist.image}
            />
            <VariantPreviewCard
              title="Cinematic Storytelling"
              description="Immersiv, emotional, story-getrieben"
              href="/variant-b"
              image={manifest.heroes.cinematicStorytelling.image}
            />
            <VariantPreviewCard
              title="Data-Driven ROI"
              description="ROI-fokussiert, professionell, zahlenbasiert"
              href="/variant-c"
              image={manifest.heroes.dataRoiDriven.image}
            />
            <VariantPreviewCard
              title="Editorial Magazine"
              description="Magazin-Layout, content-reich, informativ"
              href="/variant-d"
              image={manifest.heroes.editorialMagazine.image}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

#### Checklist Phase 5:
- [ ] Variant selector landing page built
- [ ] 4 preview cards with hover effects
- [ ] Links navigate to correct variants
- [ ] Mobile responsive
- [ ] Lighthouse Score ≥90

---

### Phase 6: E2E Testing & Optimization (TAG 6)

```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage Animations', () => {
  test('should load all animation libraries', async ({ page }) => {
    await page.goto('http://localhost:3000/variant-a');

    // Check GSAP loaded
    const gsapLoaded = await page.evaluate(() => {
      return typeof window.gsap !== 'undefined';
    });
    expect(gsapLoaded).toBeTruthy();

    // Check ScrollTrigger loaded
    const scrollTriggerLoaded = await page.evaluate(() => {
      return typeof window.ScrollTrigger !== 'undefined';
    });
    expect(scrollTriggerLoaded).toBeTruthy();
  });

  test('should display hero video', async ({ page }) => {
    await page.goto('http://localhost:3000/variant-a');

    const video = page.locator('video');
    await expect(video).toBeVisible();

    const isAutoplay = await video.getAttribute('autoplay');
    expect(isAutoplay).not.toBeNull();
  });

  test('should have backdrop blur on navigation scroll', async ({ page }) => {
    await page.goto('http://localhost:3000/variant-a');

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 200));

    // Wait for animation
    await page.waitForTimeout(500);

    // Check backdrop-filter applied
    const nav = page.locator('[data-navbar]');
    const backdropFilter = await nav.evaluate((el) => {
      return window.getComputedStyle(el).backdropFilter;
    });

    expect(backdropFilter).toContain('blur');
  });

  test('should validate contact form', async ({ page }) => {
    await page.goto('http://localhost:3000/variant-a');

    // Scroll to contact form
    await page.locator('[data-contact-form]').scrollIntoViewIfNeeded();

    // Try to submit empty form
    await page.click('[data-submit-button]');

    // Check validation errors appear
    const nameError = page.locator('[data-error-name]');
    await expect(nameError).toBeVisible();
  });
});

test.describe('Variant Navigation', () => {
  test('should navigate between variants from selector', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Click Variant A card
    await page.click('[href="/variant-a"]');
    await expect(page).toHaveURL(/.*variant-a/);

    // Navigate back
    await page.goBack();

    // Click Variant B card
    await page.click('[href="/variant-b"]');
    await expect(page).toHaveURL(/.*variant-b/);
  });
});

test.describe('Responsive Design', () => {
  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/variant-a');

    // Check mobile menu visible
    const mobileMenu = page.locator('[data-mobile-menu-trigger]');
    await expect(mobileMenu).toBeVisible();
  });

  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000/variant-a');

    // Check layout adjusts
    const hero = page.locator('[data-hero]');
    await expect(hero).toBeVisible();
  });

  test('should be responsive on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/variant-a');

    // Check sidebar navigation visible
    const sidebar = page.locator('[data-sidebar]');
    await expect(sidebar).toBeVisible();
  });
});
```

#### Run Tests
```bash
# Install Playwright
npx playwright install

# Run E2E tests
npm run test:e2e

# Run with UI
npx playwright test --ui

# Generate report
npx playwright show-report
```

#### Performance Testing
```bash
# Build production
npm run build

# Run Lighthouse
lighthouse http://localhost:3000/variant-a --view

# Check all variants
lighthouse http://localhost:3000/variant-b --view
lighthouse http://localhost:3000/variant-c --view
lighthouse http://localhost:3000/variant-d --view
```

#### Checklist Phase 6:
- [ ] All E2E tests passing (8/8)
- [ ] Lighthouse Performance ≥90 (all variants)
- [ ] FCP <1.5s (all variants)
- [ ] LCP <2.5s (all variants)
- [ ] CLS <0.1 (all variants)
- [ ] Mobile Performance ≥85 (all variants)
- [ ] Responsive tested: 375px, 768px, 1024px, 1440px
- [ ] GSAP parallax working smoothly
- [ ] Framer Motion transitions working
- [ ] Lottie animations playing
- [ ] Contact form validation working
- [ ] No console errors
- [ ] Images optimized (Next.js Image)
- [ ] Fonts loaded correctly

---

### Phase 7: Final Polish & Deployment (TAG 7)

```bash
# Final build check
npm run build
npm run start

# Test production locally
# Open http://localhost:3000 in Chrome MCP
# Navigate through all 4 variants
# Test responsive on all breakpoints
# Verify animations

# Push to GitHub
git add .
git commit -m "Production ready: All 4 variants complete with animations and E2E tests"
git push origin main

# Deploy to Vercel
vercel login
vercel --prod

# Set environment variables in Vercel dashboard
# KIE_API_KEY=your_key_here

# Verify deployment
# Open deployed URL
# Test all 4 variants live
```

#### Checklist Phase 7:
- [ ] Production build succeeds locally
- [ ] All 4 variants tested in production mode
- [ ] Pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables set in Vercel
- [ ] Production deployment successful
- [ ] All 4 variant URLs accessible
- [ ] SSL certificate active
- [ ] Performance verified on live site (Lighthouse)
- [ ] Mobile responsive verified on live site
- [ ] Animations working on live site
- [ ] Contact form working on live site

---

## 📊 CONTENT-DATEN

### Testimonials (src/data/testimonials.json)
```json
{
  "testimonials": [
    {
      "id": "testimonial-001",
      "name": "Mag. Sandra Berger",
      "role": "Immobilienmaklerin",
      "company": "Berger Immobilien GmbH",
      "rating": 5,
      "text": "Seit wir virtuelle Rundgänge verwenden, haben sich unsere Besichtigungen um 70% reduziert. Nur noch wirklich interessierte Kunden melden sich. Das spart uns unglaublich viel Zeit!",
      "project": "15+ Objekte",
      "location": "Wien"
    },
    {
      "id": "testimonial-002",
      "name": "DI Thomas Kovacs",
      "role": "Geschäftsführer",
      "company": "Kovacs Hausverwaltung",
      "rating": 5,
      "text": "Die ROI-Berechnung hat sich bestätigt: Wir vermieten 40% schneller und haben praktisch keine Fehlbesichtigungen mehr. Die Investition hat sich nach 3 Objekten amortisiert.",
      "project": "50+ Objekte",
      "location": "Wien & Niederösterreich"
    }
  ]
}
```

### Services & Preise (src/data/services.json)
```json
{
  "packages": [
    {
      "id": "essential",
      "name": "Essential",
      "tagline": "Perfekt für Standard-Objekte",
      "price": 490,
      "currency": "EUR",
      "per": "Objekt",
      "features": [
        "20-30 professionelle Fotos",
        "Basis-Bildbearbeitung",
        "Online-Galerie",
        "24h Lieferzeit",
        "Digitale Download-Links"
      ],
      "recommended": false
    },
    {
      "id": "premium",
      "name": "Premium",
      "tagline": "Unser Bestseller",
      "price": 990,
      "currency": "EUR",
      "per": "Objekt",
      "features": [
        "40-50 professionelle Fotos",
        "360° Virtueller Rundgang",
        "Drohnenaufnahmen (Außenbereich)",
        "2-3 Min. Video-Tour",
        "Premium-Bildbearbeitung",
        "12h Express-Lieferzeit",
        "3D-Grundriss inklusive"
      ],
      "recommended": true,
      "badge": "Beliebteste"
    },
    {
      "id": "luxury",
      "name": "Luxury",
      "tagline": "Für Luxus-Immobilien",
      "price": 1890,
      "currency": "EUR",
      "per": "Objekt",
      "features": [
        "Unbegrenzte professionelle Fotos",
        "360° Premium-Rundgang mit Hotspots",
        "Professionelles Drohnen-Video",
        "5-7 Min. Cinematic Video-Tour",
        "Virtual Staging (3 Räume)",
        "Twilight-Aufnahmen",
        "6h Express-Lieferzeit",
        "3D-Grundriss mit Maßen",
        "Social Media Content-Paket"
      ],
      "recommended": false,
      "badge": "Premium"
    }
  ]
}
```

### Process Timeline (src/data/process.json)
```json
{
  "steps": [
    {
      "number": 1,
      "title": "Kostenlose Beratung",
      "description": "Wir besprechen Ihre Anforderungen und erstellen ein individuelles Angebot.",
      "icon": "calendar"
    },
    {
      "number": 2,
      "title": "Termin vereinbaren",
      "description": "Wir planen den Foto-/Video-Termin zu einem für Sie passenden Zeitpunkt.",
      "icon": "clock"
    },
    {
      "number": 3,
      "title": "Professionelles Shooting",
      "description": "Unser Team erstellt hochwertige Fotos, 360°-Aufnahmen und Videos Ihrer Immobilie.",
      "icon": "camera"
    },
    {
      "number": 4,
      "title": "Bearbeitung & Aufbereitung",
      "description": "Professionelle Bildbearbeitung und Erstellung des virtuellen Rundgangs.",
      "icon": "edit"
    },
    {
      "number": 5,
      "title": "Lieferung & Support",
      "description": "Sie erhalten alle Materialien in hoher Qualität und technischen Support bei Bedarf.",
      "icon": "delivery"
    }
  ]
}
```

---

## 🎯 ANIMATION IMPLEMENTATION

### GSAP Parallax Setup
```typescript
// components/animations/ParallaxSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxLayer {
  speed: number;
  children: React.ReactNode;
  className?: string;
}

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const layers = containerRef.current?.querySelectorAll('[data-parallax-speed]');

    layers?.forEach((layer) => {
      const speed = parseFloat(layer.getAttribute('data-parallax-speed') || '0.5');

      gsap.to(layer, {
        y: () => (layer as HTMLElement).offsetHeight * speed * -1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
    </div>
  );
}

export function ParallaxLayer({ speed, children, className = '' }: ParallaxLayer) {
  return (
    <div
      data-parallax-speed={speed}
      className={`absolute inset-0 ${className}`}
    >
      {children}
    </div>
  );
}
```

### Framer Motion Scroll Reveal
```typescript
// components/animations/ScrollReveal.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Lottie Player
```typescript
// components/animations/LottiePlayer.tsx
'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottiePlayerProps {
  animationPath: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export function LottiePlayer({
  animationPath,
  loop = true,
  autoplay = true,
  className = ''
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path: animationPath,
    });

    return () => {
      animationRef.current?.destroy();
    };
  }, [animationPath, loop, autoplay]);

  return <div ref={containerRef} className={className} />;
}
```

---

## 🔒 LEGAL PAGES (Templates)

### Impressum
```markdown
# Impressum

## Informationspflicht laut §5 E-Commerce Gesetz

**immobilien-photograph.wien**
[Firmenname]
Raaber-Bahn-Gasse 11
1100 Wien
Österreich

**Kontakt:**
Tel.: [Telefonnummer]
E-Mail: [E-Mail-Adresse]
Web: https://immobilien-photograph.wien

## Berufsbezeichnung
Gewerblicher Fotograf

## Aufsichtsbehörde/Gewerbebehörde
Magistrat der Stadt Wien

## Berufsrecht
Gewerbeordnung: www.ris.bka.gv.at
```

### Datenschutzerklärung (GDPR-konform)
```markdown
# Datenschutzerklärung

## Datenschutz

Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der
Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären,
welche personenbezogenen Daten wir verarbeiten.

## Kontaktdaten des Verantwortlichen

[Firmenname]
Raaber-Bahn-Gasse 11, 1100 Wien
E-Mail: [Datenschutz-E-Mail]
Telefon: [Telefonnummer]

## Speicherdauer

Wir speichern personenbezogene Daten nur so lange, wie es für die Bereitstellung
unserer Dienstleistungen nötig ist.

## Rechte laut Datenschutz-Grundverordnung

- Recht auf Auskunft (Artikel 15 DSGVO)
- Recht auf Berichtigung (Artikel 16 DSGVO)
- Recht auf Löschung (Artikel 17 DSGVO)
- Recht auf Einschränkung (Artikel 18 DSGVO)
- Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)
- Widerspruchsrecht (Artikel 21 DSGVO)

## Cookies

Unsere Website verwendet HTTP-Cookies nur für essentielle Funktionen.
Es werden keine Tracking-Cookies eingesetzt.

## Kontaktformular

Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
```

---

## 🎯 FINAL DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] All E2E tests passing
- [ ] Lighthouse scores meet targets (≥90 Performance)
- [ ] All 4 variants tested locally
- [ ] Mobile responsive verified (375px, 768px, 1024px, 1440px)
- [ ] Animations working (GSAP, Framer, Lottie)
- [ ] Contact form validation working
- [ ] No console errors
- [ ] Images optimized
- [ ] Fonts loading correctly
- [ ] Legal pages complete (Impressum, Datenschutz, AGB)

### GitHub
- [ ] All changes committed
- [ ] Clean commit history
- [ ] README.md updated with setup instructions
- [ ] .env.example provided (without API key)
- [ ] Pushed to main branch

### Vercel Deployment
- [ ] Vercel project created
- [ ] Environment variables set (`KIE_API_KEY`)
- [ ] Production build successful
- [ ] Custom domain connected (immobilien-photograph.wien)
- [ ] SSL certificate active
- [ ] All 4 variant URLs accessible
- [ ] Performance verified on live site
- [ ] Mobile responsive verified on live site

### Client Handoff
- [ ] All 4 variant URLs shared with client
- [ ] Performance reports generated (Lighthouse)
- [ ] Responsive screenshots captured (mobile, tablet, desktop)
- [ ] Client can navigate between variants
- [ ] Contact form working (mock submission)

---

## 🎓 IMPLEMENTATION NOTES FOR AUTONOMOUS CODING

### Priority Order
1. **kie.ai Asset Generation FIRST** (Cannot build UI without assets)
2. **Design System Setup** (Tailwind, fonts, colors)
3. **Core Components** (Reusable building blocks)
4. **Variant A** (Template for other variants)
5. **Variants B, C, D** (Reuse Variant A structure)
6. **Variant Selector Landing** (Navigation hub)
7. **Testing & Optimization** (E2E tests, Lighthouse)
8. **Deployment** (GitHub → Vercel)

### Testing Strategy
- **E2E with Playwright:** Focus on critical user journeys (animations, navigation, form)
- **Performance with Lighthouse:** Automated benchmarking (must score ≥90)
- **Responsive with Chrome MCP:** Visual verification on breakpoints
- **Manual QA:** Final walkthrough before deployment

### Success Metrics
- **Deployment:** All 4 variants accessible via URLs
- **Performance:** Lighthouse ≥90, FCP <1.5s, LCP <2.5s
- **Animations:** GSAP parallax, Framer transitions, Lottie icons all working
- **Responsive:** Mobile, tablet, desktop all tested and working
- **Quality:** No console errors, images optimized, fonts loaded

### Ralph Loop Integration
This spec provides:
- **Clear Goals:** 4 variants deployed to Vercel
- **Measurable Tests:** E2E tests (8 tests), Lighthouse scores, responsive checks
- **Autonomous Coding Readiness:** Step-by-step workflow, component breakdown, test criteria
- **Definition of Done:** Checklist-based completion criteria

---

**END OF SPECIFICATION**
