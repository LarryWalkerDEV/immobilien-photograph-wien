import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-olive text-cream-light py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              immobilien-photograph.wien
            </h3>
            <p className="text-olive-light font-body">
              Professionelle Immobilienfotografie<br />
              und virtuelle Rundgänge in Wien
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Kontakt</h4>
            <address className="text-olive-light font-body not-italic">
              Raaber-Bahn-Gasse 11<br />
              1100 Wien<br />
              Österreich
            </address>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  href="/impressum"
                  className="text-olive-light hover:text-cream transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-olive-light hover:text-cream transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-olive-light hover:text-cream transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-olive-medium text-center text-olive-light font-body text-sm">
          <p>&copy; {new Date().getFullYear()} immobilien-photograph.wien. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
