# immobilien-photograph.wien

High-performance Next.js 18 marketing website featuring 4 distinct homepage design variants for a Vienna-based real estate photography business.

## 🎨 Project Overview

This project showcases **4 unique homepage variants**, each with its own personality and target audience:

1. **Variant A - Luxus Minimalist** (`/variant-a`)
   - Elegant, sophisticated, high-end
   - Gold & Cream color palette
   - Subtle parallax, refined typography

2. **Variant B - Cinematic Storytelling** (`/variant-b`)
   - Dramatic, emotional, engaging
   - Dark theme with cyan accents
   - Full-screen video heroes, storytelling focus

3. **Variant C - Data-Driven ROI** (`/variant-c`)
   - Professional, metrics-focused, business-oriented
   - Blue & Green trust colors
   - ROI calculations, data-driven messaging

4. **Variant D - Editorial Magazine** (`/variant-d`)
   - Timeless, elegant, publication-worthy
   - Cream & Olive Renaissance palette
   - Magazine-style layouts, drop caps, editorial typography

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:**
  - GSAP + ScrollTrigger (parallax effects)
  - Framer Motion (scroll reveals, transitions)
  - Lottie (micro-interactions)
- **Images:** Next.js Image optimization + Unsplash placeholders
- **Icons:** Radix UI Icons

## 📁 Project Structure

\`\`\`
immobilien-photograph-wien/
├── src/
│   ├── app/
│   │   ├── page.tsx                # Variant selector landing page
│   │   ├── variant-a/page.tsx      # Luxus Minimalist
│   │   ├── variant-b/page.tsx      # Cinematic Storytelling
│   │   ├── variant-c/page.tsx      # Data-Driven ROI
│   │   ├── variant-d/page.tsx      # Editorial Magazine
│   │   ├── impressum/page.tsx      # Legal: Impressum
│   │   ├── datenschutz/page.tsx    # Legal: Privacy Policy
│   │   └── agb/page.tsx            # Legal: Terms & Conditions
│   ├── components/
│   │   ├── animations/
│   │   │   ├── ParallaxSection.tsx  # GSAP parallax wrapper
│   │   │   ├── ScrollReveal.tsx     # Framer Motion scroll reveals
│   │   │   └── LottiePlayer.tsx     # Lottie animations
│   │   ├── layout/
│   │   │   ├── Navigation.tsx       # Sticky nav with backdrop blur
│   │   │   ├── MobileMenu.tsx       # Slide-in mobile menu
│   │   │   └── Footer.tsx           # Footer with legal links
│   │   └── sections/
│   │       ├── HeroSection.tsx      # Video/image hero with parallax
│   │       ├── PortfolioGrid.tsx    # Portfolio image grid
│   │       ├── ProcessTimeline.tsx  # 5-step service timeline
│   │       ├── TestimonialSlider.tsx # Client testimonials carousel
│   │       ├── PricingTable.tsx     # 3-tier pricing cards
│   │       └── ContactForm.tsx      # Contact form with validation
│   ├── data/
│   │   ├── testimonials.json        # Client testimonials
│   │   ├── services.json            # Pricing packages
│   │   └── process.json             # Service process steps
│   └── lib/
│       └── kie-api.ts               # kie.ai API client (for future use)
├── public/
│   └── generated/
│       └── manifest.json            # Asset URLs (images & videos)
├── docs/
│   ├── spec.md                      # Full project specification
│   └── implementation-plan.md       # 7-phase implementation plan
└── scripts/
    ├── generate-assets.ts           # kie.ai asset generation
    └── generate-mock-assets.ts      # Mock assets for development
\`\`\`

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd immobilien-photograph-wien

# Install dependencies
npm install

# Generate mock assets (or use kie.ai API if available)
npx tsx scripts/generate-mock-assets.ts

# Start development server
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) to see the variant selector.

### Available Commands

\`\`\`bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Run production build locally
npm run lint         # Run ESLint
npm run test:e2e     # Run Playwright E2E tests (when configured)
\`\`\`

## 🎯 Key Features

### Animations (3-Layer Hybrid System)

1. **GSAP + ScrollTrigger** - Parallax scrolling effects
   - Multi-layer depth (3 layers at different speeds: 0.2, 0.5, 0.8)
   - Respects `prefers-reduced-motion: reduce`

2. **Framer Motion** - Component transitions
   - Scroll-triggered reveals with fade + slide-up
   - Staggered animations for lists

3. **Lottie** - Micro-interactions
   - Icon animations, loading indicators
   - Optimized JSON files

### Design System

**Colors:**
- Cream: `#DCDCD0` (primary background)
- Olive: `#292919` (text, dark backgrounds)
- Gold: `#C9A55C` (accents, CTAs)
- Trust Blue: `#2E5EAA` (data-focused variant)
- Success Green: `#00C49A` (positive feedback)

**Typography:**
- Display: Space Grotesk (headlines)
- Serif: Cormorant Garamond (narrative, editorial)
- Body: Inter (UI text, body copy)

**Responsive Breakpoints:**
- `xs`: 375px
- `sm`: 768px
- `md`: 1024px
- `lg`: 1440px
- `xl`: 1920px

### Form Validation

The contact form includes:
- **Email:** Standard email regex
- **Phone:** Austrian format (`+43...` or `0...`)
- **Message:** Minimum 10 characters
- **All fields required**

Currently frontend-only (no backend). Shows success message on submit.

## 📊 Performance

Built with performance in mind:
- Next.js automatic image optimization
- Lazy loading for below-fold content
- Font optimization with `display=swap`
- GPU-accelerated animations
- Responsive images with `sizes` prop
- Reduced motion support

**Target Metrics:**
- Lighthouse Performance: ≥90
- FCP: <1.5s
- LCP: <2.5s
- CLS: <0.1

## 🌍 Deployment

### Vercel (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

**Environment Variables (Optional):**
- `KIE_API_KEY` - For kie.ai asset generation (if using)

## 📝 Content Management

### Updating Content

**Testimonials:** Edit `src/data/testimonials.json`

**Pricing:** Edit `src/data/services.json`

**Process Steps:** Edit `src/data/process.json`

**Portfolio Images:** Update `public/generated/manifest.json`

### Adding New Variants

1. Create new directory: `src/app/variant-e/`
2. Copy structure from existing variant
3. Customize content, colors, and personality
4. Add to variant selector in `src/app/page.tsx`

## 🧪 Testing

E2E tests can be configured with Playwright:

\`\`\`bash
# Install Playwright
npx playwright install

# Run tests
npm run test:e2e
\`\`\`

**Suggested Test Coverage:**
- Homepage loads and navigates to variants
- Animation libraries load (GSAP, Framer Motion)
- Hero sections render correctly
- Contact form validation works
- Mobile menu functions properly
- All variants are accessible

## 📄 License

This is a commercial project. All rights reserved.

## 🤝 Contributing

This is a client project. For questions or modifications, contact the development team.

---

**Built with ❤️ in Vienna**

For detailed specifications, see `docs/spec.md`
For implementation details, see `docs/implementation-plan.md`
