import Link from 'next/link';

export const metadata = {
  title: 'Impressum | immobilien-photograph.wien',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/" className="text-gold hover:text-gold/80 font-body mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="font-display font-bold text-5xl text-olive mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none font-body text-olive-medium">
          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            immobilien-photograph.wien<br />
            Raaber-Bahn-Gasse 11<br />
            1100 Wien<br />
            Österreich
          </p>

          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">Kontakt</h2>
          <p>
            E-Mail: info@immobilien-photograph.wien
          </p>

          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
