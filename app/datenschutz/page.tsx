import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#DCDCD0] py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-[#C9A55C] hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-5xl font-bold mb-8 text-[#292919]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg">
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>

          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h2>3. Datenerfassung auf dieser Website</h2>
          <p>
            Diese Website erfasst keine personenbezogenen Daten ohne Ihre Einwilligung.
          </p>
        </div>
      </div>
    </main>
  );
}
