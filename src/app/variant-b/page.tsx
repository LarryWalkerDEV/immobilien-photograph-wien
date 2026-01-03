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
  title: 'Cinematic Storytelling | immobilien-photograph.wien',
  description: 'Ihre Immobilie verdient mehr als Standard-Fotos. Emotionale Geschichten, die verkaufen.',
};

export default function VariantBPage() {
  const { image, video } = manifest.heroes.cinematicStorytelling;

  return (
    <>
      <Navigation />

      <main className="bg-olive">
        <HeroSection
          variant="cinematicStorytelling"
          videoUrl={video}
          posterUrl={image}
          headline="Ihre Immobilie verdient mehr als Standard-Fotos"
          subheadline="Cinematic Storytelling, das Emotionen weckt und Käufer anzieht. Wir erzählen die Geschichte Ihrer Immobilie."
          ctaPrimary="Story beginnen"
          ctaSecondary="Portfolio erleben"
        />

        {/* Emotional Story Section */}
        <section className="py-20 lg:py-32 bg-olive/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-cream">
              <h2 className="section-title text-center mb-12 text-cream">
                Menschen kaufen Emotionen, nicht Quadratmeter
              </h2>

              <div className="prose prose-lg prose-invert mx-auto font-serif text-cream-light">
                <p className="text-xl leading-relaxed drop-cap">
                  Stellen Sie sich vor: Ein Paar betritt virtuell Ihre Immobilie. Das warme Licht der untergehenden Sonne durchflutet den Raum. Sie können sich bereits vorstellen, wie sie hier ihr erstes gemeinsames Frühstück genießen.
                </p>

                <p className="text-lg leading-relaxed mt-6">
                  Das ist die Kraft von cinematischer Immobilienfotografie. Nicht einfach nur Räume dokumentieren – sondern Geschichten erzählen, die Herzen berühren und Kaufentscheidungen beschleunigen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div className="bg-olive-medium/30 backdrop-blur-sm rounded-xl p-6 border border-cream/10">
                  <h3 className="font-display font-bold text-2xl text-gold mb-4">
                    Vor unserer Arbeit
                  </h3>
                  <ul className="space-y-3 text-cream-light font-body">
                    <li>→ Durchschnittliche Verweildauer: 12 Sekunden</li>
                    <li>→ Kalte, unpersönliche Aufnahmen</li>
                    <li>→ 80% Absprungrate</li>
                    <li>→ Monatelange Vermarktung</li>
                  </ul>
                </div>

                <div className="bg-gold/20 backdrop-blur-sm rounded-xl p-6 border border-gold/30">
                  <h3 className="font-display font-bold text-2xl text-gold mb-4">
                    Nach unserer Arbeit
                  </h3>
                  <ul className="space-y-3 text-cream font-body font-medium">
                    <li>✓ Verweildauer: 4+ Minuten</li>
                    <li>✓ Emotionale Verbindung zum Raum</li>
                    <li>✓ 3x mehr qualifizierte Anfragen</li>
                    <li>✓ Verkauf in Rekordzeit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-cream">
          <PortfolioGrid items={manifest.portfolio} variant="grid" />
          <ProcessTimeline steps={processData.steps} />
          <TestimonialSlider testimonials={testimonialsData} />
          <PricingTable packages={servicesData.packages} />
          <ContactForm variant="standard" />
        </div>
      </main>

      <Footer />
    </>
  );
}
