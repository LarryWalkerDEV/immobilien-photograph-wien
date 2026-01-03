import Link from 'next/link';

export default function AGB() {
  return (
    <main className="min-h-screen bg-[#DCDCD0] py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-[#C9A55C] hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-5xl font-bold mb-8 text-[#292919]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="prose prose-lg">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von
            immobilien-photograph.wien im Bereich der Immobilienfotografie.
          </p>

          <h2>§ 2 Leistungsumfang</h2>
          <p>
            Die Leistungen umfassen professionelle Fotografie und Videografie für
            Immobilien in Wien und Umgebung.
          </p>

          <h2>§ 3 Preise und Zahlung</h2>
          <p>
            Die Preise richten sich nach der aktuellen Preisliste. Zahlungen sind
            innerhalb von 14 Tagen nach Rechnungsstellung fällig.
          </p>
        </div>
      </div>
    </main>
  );
}
