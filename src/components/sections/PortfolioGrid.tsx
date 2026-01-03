import Image from 'next/image';
import ScrollReveal from '../animations/ScrollReveal';

interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  image: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  variant?: 'masonry' | 'grid';
}

export default function PortfolioGrid({ items, variant = 'grid' }: PortfolioGridProps) {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-cream-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-center mb-4">Portfolio</h2>
          <p className="narrative-text text-center mb-12 max-w-2xl mx-auto">
            Entdecken Sie unsere Arbeit – von eleganten Altbauten bis zu modernen Penthäusern
          </p>
        </ScrollReveal>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`}>
          {items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-olive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                    <h3 className="font-display font-bold text-xl mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-cream/80">{item.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
