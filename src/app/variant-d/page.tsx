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
  title: 'Editorial Magazine | immobilien-photograph.wien',
  description: 'Immobilienfotografie, die Magazine würdig ist. Zeitlose Eleganz für außergewöhnliche Objekte.',
};

export default function VariantDPage() {
  const { image, video } = manifest.heroes.editorialMagazine;

  return (
    <>
      <Navigation />

      <main>
        <HeroSection
          variant="editorialMagazine"
          videoUrl={video}
          posterUrl={image}
          headline="Immobilienfotografie, die Magazine würdig ist"
          subheadline="Zeitlose Eleganz und außergewöhnliche Details für anspruchsvolle Objekte."
          ctaPrimary="Ihr Projekt besprechen"
          ctaSecondary="Galerie durchblättern"
        />

        {/* Editorial Feature Section */}
        <section className="py-20 lg:py-32 bg-cream-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="text-2xl font-serif text-olive-medium leading-relaxed drop-cap">
                  In einer Welt voller austauschbarer Immobilienangebote verdienen außergewöhnliche Objekte eine außergewöhnliche Präsentation. Unsere editorial-inspirierten Aufnahmen verbinden klassische Fotografie-Prinzipien mit modernem Visual Storytelling – für Immobilien, die nicht nur verkauft, sondern zelebriert werden sollen.
                </p>
              </div>

              {/* Feature Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <article className="border-l-4 border-gold pl-6">
                  <h3 className="font-serif font-bold text-3xl text-olive mb-3">
                    Die Kunst des Details
                  </h3>
                  <p className="font-body text-olive-medium leading-relaxed">
                    Während andere nur Räume fotografieren, fangen wir die Seele einer Immobilie ein. Die Patina eines historischen Parkettbodens. Das Lichtspiel durch handgeschliffene Altbau-Fenster. Die subtile Textur handwerklicher Stuckarbeiten.
                  </p>
                  <p className="font-body text-olive-medium leading-relaxed mt-4">
                    Diese Details – oft übersehen, doch entscheidend – sind es, die anspruchsvolle Käufer suchen und zu schätzen wissen.
                  </p>
                </article>

                <article className="border-l-4 border-olive pl-6">
                  <h3 className="font-serif font-bold text-3xl text-olive mb-3">
                    Zeitlose vs. Trendy
                  </h3>
                  <p className="font-body text-olive-medium leading-relaxed">
                    Mode kommt und geht. Klassische Komposition bleibt. Unsere Fotografien orientieren sich an den Prinzipien großer Magazine wie Architectural Digest und Elle Decor – zeitlos elegant, nie kurzlebig trendy.
                  </p>
                  <p className="font-body text-olive-medium leading-relaxed mt-4">
                    Das Ergebnis? Ihre Immobilie wirkt heute begehrenswert und wird es auch in Jahren noch sein.
                  </p>
                </article>
              </div>

              {/* Magazine-Style Pull Quote */}
              <blockquote className="my-16 px-8 lg:px-16 py-12 bg-white rounded-lg shadow-sm">
                <p className="font-serif text-3xl lg:text-4xl text-olive text-center leading-relaxed">
                  "Eine Immobilie zu fotografieren ist leicht. Eine Geschichte zu erzählen, die Herzen berührt und Geldbörsen öffnet – das ist Kunst."
                </p>
                <footer className="text-center mt-6 font-body text-olive-light">
                  — Unser fotografisches Credo
                </footer>
              </blockquote>

              {/* Signature Services */}
              <div className="bg-olive text-cream rounded-2xl p-8 lg:p-12">
                <h3 className="font-serif font-bold text-3xl mb-8 text-center">
                  Unsere Signature Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-xl text-gold">
                      Golden Hour Sessions
                    </h4>
                    <p className="font-body text-cream-light">
                      Das perfekte Licht macht den Unterschied. Wir planen jedes Shooting präzise zur optimalen Tageszeit.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-xl text-gold">
                      Architektur-Detailaufnahmen
                    </h4>
                    <p className="font-body text-cream-light">
                      Stuckverzierungen, Originalböden, schmiedeeiserne Geländer – die Details, die Geschichte erzählen.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-xl text-gold">
                      Lifestyle-Staging
                    </h4>
                    <p className="font-body text-cream-light">
                      Subtiles Styling, das Räume lebendig macht, ohne aufgesetzt zu wirken.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-xl text-gold">
                      Limitierte Editionen
                    </h4>
                    <p className="font-body text-cream-light">
                      Premium-Prints Ihrer schönsten Aufnahmen – rahmenswert für Büro oder Exposé.
                    </p>
                  </div>
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
