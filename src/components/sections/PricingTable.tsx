import ScrollReveal from '../animations/ScrollReveal';
import { CheckIcon } from '@radix-ui/react-icons';

interface Package {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

interface PricingTableProps {
  packages: Package[];
}

export default function PricingTable({ packages }: PricingTableProps) {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-cream-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-center mb-4">Transparente Preise</h2>
          <p className="narrative-text text-center mb-16 max-w-2xl mx-auto">
            Wählen Sie das Paket, das perfekt zu Ihren Anforderungen passt
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1}>
              <div
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.highlighted
                    ? 'ring-2 ring-gold scale-105 md:scale-110'
                    : 'hover:scale-105'
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-white px-4 py-1.5 rounded-full text-sm font-body font-semibold">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Package Name */}
                <h3 className="font-display font-bold text-2xl text-olive mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-display font-bold text-olive">
                    {pkg.currency}{pkg.price}
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-olive-medium mb-6">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-olive-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-3 rounded-full font-body font-medium transition-all ${
                    pkg.highlighted
                      ? 'bg-gold text-white hover:bg-gold/90'
                      : 'bg-olive text-cream hover:bg-olive/90'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
