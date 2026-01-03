import Link from 'next/link';

export const metadata = {
  title: 'AGB | immobilien-photograph.wien',
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/" className="text-gold hover:text-gold/80 font-body mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="font-display font-bold text-5xl text-olive mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-lg max-w-none font-body text-olive-medium">
          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über Leistungen der
            immobilien-photograph.wien.
          </p>

          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">§ 2 Leistungen</h2>
          <p>
            Die Leistungen umfassen professionelle Immobilienfotografie, virtuelle Rundgänge und
            verwandte Dienstleistungen gemäß der jeweiligen Leistungsbeschreibung.
          </p>

          <h2 className="font-display font-semibold text-2xl text-olive mt-8 mb-4">§ 3 Nutzungsrechte</h2>
          <p>
            Mit Bezahlung der vereinbarten Vergütung erhält der Kunde die vollständigen kommerziellen
            Nutzungsrechte an den gelieferten Fotografien für Immobilienvermarktungszwecke.
          </p>
        </div>
      </div>
    </div>
  );
}
