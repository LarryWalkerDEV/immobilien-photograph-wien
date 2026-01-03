import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import PricingTable from '@/components/sections/PricingTable';
import ContactForm from '@/components/sections/ContactForm';

import manifest from '@/../../public/generated/manifest.json';
import testimonialsData from '@/data/testimonials.json';
import servicesData from '@/data/services.json';
import processData from '@/data/process.json';

export const metadata = {
  title: 'Data-Driven ROI | immobilien-photograph.wien',
  description: 'Messbare Ergebnisse. Höhere Conversion. Schnellerer Verkauf.',
};

export default function VariantCPage() {
  const { image, video } = manifest.heroes.dataRoiDriven;

  return (
    <>
      <Navigation />

      <main>
        <HeroSection
          variant="dataRoiDriven"
          videoUrl={video}
          posterUrl={image}
          headline="Professionelle Immobilienfotografie mit messbarem ROI"
          subheadline="Datengetriebene Strategien für 3x schnelleren Verkauf und 5x mehr qualifizierte Anfragen."
          ctaPrimary="ROI-Analyse anfordern"
          ctaSecondary="Fallstudien ansehen"
        />

        {/* Data & Metrics Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-4">
                Zahlen, die für sich sprechen
              </h2>
              <p className="narrative-text text-center mb-16 max-w-2xl mx-auto">
                Basierend auf 500+ erfolgreich vermarkteten Immobilien in Wien
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-trust/5 rounded-xl p-8 text-center border border-trust/20">
                  <div className="text-7xl font-display font-bold text-trust mb-4">+320%</div>
                  <h3 className="font-display font-semibold text-xl text-olive mb-2">
                    Mehr Website-Traffic
                  </h3>
                  <p className="font-body text-olive-medium">
                    Immobilien mit virtuellen Rundgängen erhalten durchschnittlich 320% mehr Views
                  </p>
                </div>

                <div className="bg-success/5 rounded-xl p-8 text-center border border-success/20">
                  <div className="text-7xl font-display font-bold text-success mb-4">-40%</div>
                  <h3 className="font-display font-semibold text-xl text-olive mb-2">
                    Kürzere Vermarktungszeit
                  </h3>
                  <p className="font-body text-olive-medium">
                    Professionell fotografierte Objekte verkaufen sich 40% schneller
                  </p>
                </div>

                <div className="bg-gold/10 rounded-xl p-8 text-center border border-gold/30">
                  <div className="text-7xl font-display font-bold text-gold mb-4">95%</div>
                  <h3 className="font-display font-semibold text-xl text-olive mb-2">
                    Kundenzufriedenheit
                  </h3>
                  <p className="font-body text-olive-medium">
                    Unsere Kunden bewerten uns mit durchschnittlich 4.9/5 Sternen
                  </p>
                </div>
              </div>

              {/* ROI Calculation Example */}
              <div className="bg-cream rounded-2xl p-8 lg:p-12">
                <h3 className="font-display font-bold text-3xl text-olive mb-8 text-center">
                  ROI-Beispielrechnung
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-display font-semibold text-xl text-olive mb-4">
                      Ohne professionelle Fotos:
                    </h4>
                    <ul className="space-y-3 font-body text-olive-medium">
                      <li>→ Vermarktungszeit: 6 Monate</li>
                      <li>→ Besichtigungen: 40 Termine (à 1h)</li>
                      <li>→ Zeitaufwand: 40 Stunden</li>
                      <li>→ Entgangene Mieteinnahmen: €7.200</li>
                      <li className="text-xl font-bold text-olive pt-2">Gesamtkosten: ~€10.000</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-display font-semibold text-xl text-trust mb-4">
                      Mit Premium-Paket (€990):
                    </h4>
                    <ul className="space-y-3 font-body text-olive">
                      <li>✓ Vermarktungszeit: 2 Monate</li>
                      <li>✓ Besichtigungen: 12 Termine (à 1h)</li>
                      <li>✓ Zeitaufwand: 12 Stunden</li>
                      <li>✓ Gesparte Mietausfälle: €4.800</li>
                      <li className="text-xl font-bold text-success pt-2">ROI: +€3.810 (+385%)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="font-body text-olive-medium">
                    <strong className="text-trust">Bottom Line:</strong> Eine Investition von €990 spart Ihnen durchschnittlich €3.810 an Zeit- und Opportunitätskosten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PortfolioGrid items={manifest.portfolio} variant="grid" />
        <ProcessTimeline steps={processData.steps} />
        <TestimonialSlider testimonials={testimonialsData} />
        <PricingTable packages={servicesData.packages} />
        <ContactForm variant="standard" />
      </main>

      <Footer />
    </>
  );
}
