import Link from 'next/link';
import Image from 'next/image';
import manifest from '../public/generated/manifest.json';

export default function Home() {
  const variants = [
    {
      id: 'variant-a',
      title: 'Luxus Minimalist',
      description: 'Subtle, elegant design with gold accents and refined typography',
      image: manifest.heroes.luxusMinimalist.image,
      theme: 'Cream & Gold',
    },
    {
      id: 'variant-b',
      title: 'Cinematic Storytelling',
      description: 'Dramatic, emotional presentation with cinematic transitions',
      image: manifest.heroes.cinematicStorytelling.image,
      theme: 'Dark & Dramatic',
    },
    {
      id: 'variant-c',
      title: 'Data-Driven ROI',
      description: 'Professional, numbers-focused approach with analytics',
      image: manifest.heroes.dataRoiDriven.image,
      theme: 'Blue & Green',
    },
    {
      id: 'variant-d',
      title: 'Editorial Magazine',
      description: 'Content-rich, editorial style with large typography',
      image: manifest.heroes.editorialMagazine.image,
      theme: 'Classic Editorial',
    },
  ];

  return (
    <main className="min-h-screen bg-[#DCDCD0] text-[#292919]">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            immobilien-photograph.wien
          </h1>
          <p className="text-xl md:text-2xl text-[#292919]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Wählen Sie Ihren bevorzugten Design-Ansatz
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/${variant.id}`}
              className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={variant.image}
                  alt={variant.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {variant.title}
                  </h2>
                  <p className="text-sm opacity-90">{variant.theme}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#292919]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {variant.description}
                </p>
                <div className="mt-4 text-[#C9A55C] font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Ansehen →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="text-center mt-16 text-[#292919]/60 text-sm">
          <p>Diese Vorschau zeigt 4 Designvarianten für Ihre Auswahl</p>
        </footer>
      </div>
    </main>
  );
}
