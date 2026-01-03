import Link from 'next/link';
import Image from 'next/image';
import manifest from '@/../../public/generated/manifest.json';

export const metadata = {
  title: 'Design-Varianten | immobilien-photograph.wien',
  description: 'Wählen Sie Ihren Lieblingsstil aus 4 einzigartigen Homepage-Designs',
};

const variants = [
  {
    id: 'luxus-minimalist',
    href: '/variant-a',
    title: 'Luxus Minimalist',
    description: 'Elegant, reduziert, hochwertig',
    personality: 'Für anspruchsvolle Kunden, die Wert auf subtile Eleganz und zeitlose Ästhetik legen',
    colors: 'Cream & Gold',
    image: manifest.heroes.luxusMinimalist.image,
  },
  {
    id: 'cinematic-storytelling',
    href: '/variant-b',
    title: 'Cinematic Storytelling',
    description: 'Dramatisch, emotional, fesselnd',
    personality: 'Für Immobilien mit Geschichte, die durch emotionale Bildsprache verkauft werden sollen',
    colors: 'Dark & Cyan',
    image: manifest.heroes.cinematicStorytelling.image,
  },
  {
    id: 'data-roi-driven',
    href: '/variant-c',
    title: 'Data-Driven ROI',
    description: 'Professionell, zahlenbasiert, überzeugend',
    personality: 'Für datenorientierte Kunden, die ROI und messbare Ergebnisse schätzen',
    colors: 'Blue & Green',
    image: manifest.heroes.dataRoiDriven.image,
  },
  {
    id: 'editorial-magazine',
    href: '/variant-d',
    title: 'Editorial Magazine',
    description: 'Zeitlos, elegant, publikationsreif',
    personality: 'Für Luxusimmobilien, die Magazine-Qualität und klassische Eleganz verdienen',
    colors: 'Cream & Olive',
    image: manifest.heroes.editorialMagazine.image,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl lg:text-7xl text-olive mb-6">
            immobilien-photograph.wien
          </h1>
          <p className="font-serif text-2xl lg:text-3xl text-olive-medium max-w-3xl mx-auto">
            Wählen Sie Ihren bevorzugten Design-Stil
          </p>
          <p className="font-body text-lg text-olive-light mt-4 max-w-2xl mx-auto">
            Wir präsentieren Ihnen 4 unterschiedliche Homepage-Varianten.
            Jede hat eine eigene Persönlichkeit und Zielgruppe.
          </p>
        </div>
      </header>

      {/* Variant Grid */}
      <main className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {variants.map((variant, index) => (
              <Link
                key={variant.id}
                href={variant.href}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={variant.image}
                    alt={variant.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={index < 2}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-olive/30 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-display font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-olive mb-2">
                    {variant.title}
                  </h2>

                  <p className="font-serif text-lg text-olive-medium mb-4">
                    {variant.description}
                  </p>

                  <p className="font-body text-sm text-olive-light mb-4 leading-relaxed">
                    {variant.personality}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-olive-light bg-cream px-3 py-1 rounded-full">
                      {variant.colors}
                    </span>

                    <span className="font-body font-medium text-gold group-hover:translate-x-2 transition-transform">
                      Ansehen →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-16 max-w-4xl mx-auto bg-olive text-cream rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4">
              Welche Variante passt zu Ihnen?
            </h3>
            <p className="font-body text-cream-light leading-relaxed">
              Dies sind 4 vollständig entwickelte Homepage-Varianten für Präsentationszwecke.
              In der finalen Version würden Sie Ihren bevorzugten Stil wählen, den wir dann
              mit Ihren individuellen Inhalten und Markenidentität anpassen.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-body text-sm text-olive-light">
          © {new Date().getFullYear()} immobilien-photograph.wien
        </p>
      </footer>
    </div>
  );
}
