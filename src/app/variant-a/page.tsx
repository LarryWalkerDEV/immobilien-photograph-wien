import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import PricingTable from '@/components/sections/PricingTable';
import ContactForm from '@/components/sections/ContactForm';

// Import manifest and data
import manifest from '@/../../public/generated/manifest.json';
import testimonialsData from '@/data/testimonials.json';
import servicesData from '@/data/services.json';
import processData from '@/data/process.json';

export const metadata = {
  title: 'Luxus Minimalist | immobilien-photograph.wien',
  description: '80% weniger unnötige Besichtigungen. 3x schnellere Vermietung. Garantiert.',
};

export default function VariantAPage() {
  const { image, video } = manifest.heroes.luxusMinimalist;

  return (
    <>
      <Navigation />

      <main>
        <HeroSection
          variant="luxusMinimalist"
          videoUrl={video}
          posterUrl={image}
          headline="80% weniger unnötige Besichtigungen. 3x schnellere Vermietung. Garantiert."
          subheadline="Während Ihre Konkurrenz noch Smartphone-Fotos macht, verkaufen Sie bereits – mit professionellen virtuellen Rundgängen, die Kaufinteressenten überzeugen."
          ctaPrimary="Kostenlose Beratung vereinbaren"
          ctaSecondary="Portfolio ansehen"
        />

        {/* Problem-Agitate Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-12">
                Warum verlieren Sie wertvolle Zeit mit unqualifizierten Besichtigungen?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-gold mb-4">73%</div>
                  <p className="font-body text-olive-medium">
                    der Interessenten entscheiden innerhalb der ersten 3 Sekunden online
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-gold mb-4">5x</div>
                  <p className="font-body text-olive-medium">
                    mehr Anfragen mit professionellen Fotos und virtuellem Rundgang
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-gold mb-4">-60%</div>
                  <p className="font-body text-olive-medium">
                    weniger unnötige Besichtigungen dank realistischer Online-Präsentation
                  </p>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-8 lg:p-12">
                <h3 className="font-display font-bold text-2xl text-olive mb-6">
                  Das Problem mit Amateur-Fotos
                </h3>
                <ul className="space-y-4 font-body text-olive-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">×</span>
                    <span>Schlechte Beleuchtung lässt Räume kleiner und dunkler wirken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">×</span>
                    <span>Falsche Perspektiven verzerren Proportionen und täuschen Interessenten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">×</span>
                    <span>Fehlende virtuelle Rundgänge führen zu endlosen, zeitraubenden Besichtigungen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">×</span>
                    <span>Ihre Immobilie wird online übersehen, während Konkurrenz mit Profi-Fotos glänzt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PortfolioGrid items={manifest.portfolio} variant="grid" />

        <ProcessTimeline steps={processData.steps} />

        <TestimonialSlider testimonials={testimonialsData} />

        <PricingTable packages={servicesData.packages} />

        <ContactForm variant="minimal" />
      </main>

      <Footer />
    </>
  );
}
