import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#DCDCD0] py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-[#C9A55C] hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-5xl font-bold mb-8 text-[#292919]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Impressum
        </h1>

        <div className="prose prose-lg">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            immobilien-photograph.wien<br />
            Raaber-Bahn-Gasse 11<br />
            1100 Wien, Österreich
          </p>

          <h2>Kontakt</h2>
          <p>
            Website: immobilien-photograph.wien
          </p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>
        </div>
      </div>
    </main>
  );
}
