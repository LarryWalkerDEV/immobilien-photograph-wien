import Link from 'next/link';

export const metadata = {
  title: 'Datenschutz | immobilien-photograph.wien',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/" className="text-gold hover:text-gold/80 font-body mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="font-display font-bold text-5xl text-olive mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none font-body text-olive-medium">
          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">Datenschutz</h2>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">Cookies</h2>
          <p>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem
            Rechner keinen Schaden an und enthalten keine Viren.
          </p>
        </div>
      </div>
    </div>
  );
}
