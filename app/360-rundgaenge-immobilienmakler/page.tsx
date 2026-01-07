import { Metadata } from 'next';
import { SEOPageLayout } from '@/components/seo/SEOPageLayout';
import { SchemaScript } from '@/components/seo/SchemaScript';
import {
  generatePageMetadata,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo-config';

export const metadata: Metadata = generatePageMetadata({
  title: '360° Rundgänge für Immobilienmakler Wien',
  description:
    'Professionelle 360° Touren speziell für Makler in Wien. Mehr Anfragen, weniger Besichtigungen, schnellere Abschlüsse. Mengenrabatte ab 5 Objekten.',
  keywords: [
    '360 touren für makler',
    'immobilienfotografie makler wien',
    'makler marketing tools',
    'virtuelle besichtigung makler',
    'immobilienmakler fotografie',
    'makler visualisierung',
    '360 grad makler',
    'immobilien marketing makler',
  ],
  path: '/360-rundgaenge-immobilienmakler',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Rundgänge für Immobilienmakler',
    description:
      'Spezialisierte 360°-Touren für Makler mit Mengenrabatten, schneller Lieferung und Integration in alle gängigen Immobilienportale.',
    price: '249',
    url: '/360-rundgaenge-immobilienmakler',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Für Makler', url: '/360-rundgaenge-immobilienmakler' },
  ]),
  generateFAQSchema([
    {
      question: 'Gibt es Mengenrabatte für Makler?',
      answer:
        'Ja, Makler erhalten ab 5 Objekten pro Monat 15% Rabatt, ab 10 Objekten 25% Rabatt. Wir bieten auch monatliche Pauschalen für Maklerbüros an.',
    },
    {
      question: 'Wie schnell kann ein 360° Rundgang für Makler geliefert werden?',
      answer:
        'Standardlieferung innerhalb von 24-48 Stunden. Für regelmäßige Maklerpartner bieten wir Express-Lieferung am selben Tag ohne Aufpreis.',
    },
    {
      question: 'Kann mein Makler-Branding in den Rundgang integriert werden?',
      answer:
        'Ja, wir integrieren Ihr Logo, Ihre Farben und Kontaktdaten in jeden Rundgang. So bleibt Ihre Marke präsent.',
    },
  ]),
];

export default function PageMakler() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Rundgänge für Immobilienmakler in Wien"
        heroSubtitle="Mehr Anfragen, weniger unnötige Besichtigungen, schnellere Abschlüsse – die Geheimwaffe erfolgreicher Makler"
        heroImage="/assets/heroes/luxus-minimalist.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Für Makler', href: '/360-rundgaenge-immobilienmakler' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>360° Rundgänge sparen Maklern durchschnittlich 12 Stunden pro Objekt</strong> durch
          die Reduktion unnötiger Besichtigungstermine um bis zu 80%. Professionelle virtuelle Touren
          erhöhen die Anzahl qualifizierter Anfragen und ermöglichen es Ihnen, sich auf abschlussbereite
          Interessenten zu konzentrieren.
        </p>

        <h2>Warum führende Makler auf 360° Rundgänge setzen</h2>

        <p>
          Der Alltag eines Immobilienmaklers ist geprägt von Zeitdruck. Zwischen Akquise,
          Besichtigungen, Verhandlungen und Administration bleibt kaum Zeit zum Durchatmen. Virtuelle
          360°-Rundgänge sind das Werkzeug, das erfolgreiche Makler nutzen, um effizienter zu arbeiten
          und gleichzeitig bessere Ergebnisse zu erzielen.
        </p>

        <p>
          Die Zahlen sprechen eine klare Sprache: Makler, die konsequent auf virtuelle Touren setzen,
          berichten von einer <strong>40% kürzeren Vermarktungszeit</strong> und einer
          <strong>30% höheren Abschlussquote</strong>. Der Grund ist einfach: Interessenten, die
          bereits einen virtuellen Rundgang gemacht haben, kommen zur Besichtigung mit einer klaren
          Erwartung – und oft schon mit einer emotionalen Bindung an die Immobilie.
        </p>

        <h3>Das Problem: Zeitfresser Besichtigungen</h3>

        <p>
          Wie viele Besichtigungen führen Sie pro Woche durch? Und wie viele davon enden ohne
          ernsthaftes Interesse? Die typische Statistik ist ernüchternd:
        </p>

        <ul>
          <li>
            <strong>60-70%</strong> der Besichtigungen führen zu keiner weiteren Aktion
          </li>
          <li>
            <strong>2 Stunden</strong> kostet jede Besichtigung durchschnittlich (inkl. Vorbereitung
            und Anfahrt)
          </li>
          <li>
            <strong>10+ Besichtigungen</strong> pro Objekt bis zum Verkauf sind keine Seltenheit
          </li>
        </ul>

        <p>
          Das bedeutet: <strong>15-20 Stunden Zeitinvestition pro Objekt</strong>, von der mehr als
          die Hälfte auf unproduktive Besichtigungen entfällt.
        </p>

        <h3>Die Lösung: Vorqualifizierung durch virtuelle Touren</h3>

        <p>
          360°-Rundgänge wirken wie ein Filter. Interessenten erkunden die Immobilie virtuell und
          entscheiden selbst, ob sie wirklich passt. Wer danach noch eine Besichtigung wünscht, ist
          in der Regel ernsthaft interessiert. Das Ergebnis:
        </p>

        <ul>
          <li>
            <strong>80% weniger Besichtigungen</strong> pro Objekt
          </li>
          <li>
            <strong>Höhere Abschlussrate</strong> bei den verbleibenden Terminen
          </li>
          <li>
            <strong>Zufriedenere Kunden</strong>, die keine Zeit mit unpassenden Objekten verschwenden
          </li>
        </ul>

        <h2>Speziell auf Makler-Bedürfnisse zugeschnitten</h2>

        <p>
          Als Makler haben Sie andere Anforderungen als ein Privatverkäufer. Sie benötigen schnelle,
          zuverlässige Prozesse, einheitliche Qualität über viele Objekte und attraktive Konditionen
          für regelmäßige Aufträge. Genau dafür haben wir unser Makler-Programm entwickelt.
        </p>

        <h3>Schnelle, planbare Lieferung</h3>

        <p>
          Zeit ist Geld – besonders im Maklergeschäft. Unsere Standardlieferzeit beträgt 24-48
          Stunden nach der Aufnahme. Für Partner-Makler bieten wir Express-Lieferung am selben Tag.
          So können Sie neue Objekte sofort mit kompletter virtueller Tour listen.
        </p>

        <h3>Branding-Integration</h3>

        <p>
          Jeder Rundgang wird mit Ihrem Branding versehen: Logo, Farben, Kontaktdaten. Optional
          auch ein Intro-Screen mit Ihrem Maklerbüro. So bleibt Ihre Marke präsent, auch wenn der
          Interessent die Tour auf einem Immobilienportal sieht.
        </p>

        <h3>Portal-Kompatibilität</h3>

        <p>
          Unsere 360°-Touren sind optimiert für die Integration in alle gängigen Immobilienportale:
        </p>

        <ul>
          <li>willhaben.at</li>
          <li>ImmobilienScout24</li>
          <li>Immowelt</li>
          <li>Immonet</li>
          <li>Ihre eigene Website</li>
        </ul>

        <h3>Einheitliche Qualität</h3>

        <p>
          Ob Altbau in der Inneren Stadt oder Neubau in der Donaustadt – jede Tour erfüllt denselben
          hohen Qualitätsstandard. So können Sie sich auf konsistente Ergebnisse verlassen, die Ihr
          Büro professionell repräsentieren.
        </p>

        <h2>Makler-Preise und Mengenrabatte</h2>

        <p>
          Wir verstehen, dass Makler mit vielen Objekten arbeiten. Deshalb bieten wir attraktive
          Staffelpreise:
        </p>

        <h3>Einzelpreis – €349 pro Objekt</h3>

        <p>
          Für gelegentliche Aufträge. Vollständiger 360°-Rundgang mit allen Features, Branding und
          24-48h Lieferung.
        </p>

        <h3>5er-Paket – €299 pro Objekt (15% Rabatt)</h3>

        <p>
          Für regelmäßige Nutzung. Vorab-Buchung von 5 Rundgängen, einlösbar innerhalb von 6
          Monaten. Zusätzlich: Priorisierte Terminvergabe.
        </p>

        <h3>10er-Paket – €262 pro Objekt (25% Rabatt)</h3>

        <p>
          Für aktive Maklerbüros. 10 Rundgänge vorab, Express-Lieferung inklusive, dedizierter
          Ansprechpartner.
        </p>

        <h3>Monatspauschale – auf Anfrage</h3>

        <p>
          Für Maklerbüros mit hohem Volumen. Unbegrenzte Rundgänge zu einer festen Monatspauschale.
          Individuelle Konditionen nach Bedarf.
        </p>

        <h2>Der Workflow für Makler</h2>

        <p>
          Wir haben unsere Prozesse optimiert, um Ihnen minimalen Aufwand und maximale Ergebnisse
          zu bieten.
        </p>

        <h3>1. Schnelle Terminbuchung</h3>

        <p>
          Buchen Sie Termine online über unser Makler-Portal oder per kurzer Nachricht. Wir
          bestätigen innerhalb von 2 Stunden und sind in der Regel innerhalb von 2-3 Tagen vor Ort.
        </p>

        <h3>2. Effiziente Aufnahme</h3>

        <p>
          Unser Fotograf kommt mit allem Equipment. Für eine durchschnittliche Wohnung benötigen wir
          2 Stunden. Sie oder Ihr Auftraggeber müssen nur den Zugang ermöglichen.
        </p>

        <h3>3. Schnelle Lieferung</h3>

        <p>
          Innerhalb von 24-48 Stunden erhalten Sie den fertigen Rundgang per E-Mail – mit allen
          Links und Embed-Codes für Ihre Verwendung.
        </p>

        <h3>4. Einfache Abrechnung</h3>

        <p>
          Monatliche Sammelrechnung für alle Aufträge. Keine Einzelrechnungen, kein
          Verwaltungsaufwand.
        </p>

        <h2>Erfolgsbeispiele von Maklern</h2>

        <h3>Maklerbüro Berger Immobilien</h3>

        <blockquote>
          "Seit wir für alle Objekte ab €300.000 konsequent 360°-Touren einsetzen, haben sich unsere
          Besichtigungen pro Objekt von durchschnittlich 12 auf 3-4 reduziert. Das spart mir persönlich
          20+ Stunden pro Monat."
          <br />– Mag. Sandra Berger, Geschäftsführerin
        </blockquote>

        <h3>Kovacs Immobilien</h3>

        <blockquote>
          "Die virtuellen Rundgänge sind ein wichtiges Differenzierungsmerkmal geworden. Eigentümer
          erwarten mittlerweile professionelle Vermarktung – und 360°-Touren sind ein Teil davon."
          <br />– DI Thomas Kovacs, Immobilienmakler
        </blockquote>

        <h2>Zusätzliche Services für Makler</h2>

        <h3>Immobilienfotografie</h3>

        <p>
          Kombinieren Sie 360°-Touren mit professionellen Fotos. Paketpreise für Makler ab €449
          (Fotos + 360° Tour).
        </p>

        <h3>Drohnenaufnahmen</h3>

        <p>
          Für Häuser, Villen und Grundstücke. Luftbilder und -videos als perfekte Ergänzung zur
          virtuellen Tour.
        </p>

        <h3>Virtual Staging</h3>

        <p>
          Leere Wohnungen virtuell möblieren. Zeigen Sie das Potenzial ohne physisches Home Staging.
        </p>

        <h3>3D Grundrisse</h3>

        <p>
          Professionelle, möblierte 3D-Grundrisse für Ihre Exposés und Inserate.
        </p>

        <h2>Warum Makler mit uns arbeiten</h2>

        <h3>Verlässlichkeit</h3>

        <p>
          Wir halten Termine und Lieferzeiten ein. Keine bösen Überraschungen, keine Verzögerungen.
        </p>

        <h3>Qualität</h3>

        <p>
          Jeder Rundgang entspricht unseren hohen Standards. Konsistente Qualität für Ihr gesamtes
          Portfolio.
        </p>

        <h3>Flexibilität</h3>

        <p>
          Kurzfristige Termine, Express-Lieferung, individuelle Anpassungen – wir finden immer
          eine Lösung.
        </p>

        <h3>Faire Preise</h3>

        <p>
          Attraktive Staffelpreise für regelmäßige Aufträge. Die Investition rechnet sich durch
          Zeitersparnis und schnellere Abschlüsse.
        </p>

        <h2>Jetzt Makler-Partner werden</h2>

        <p>
          Kontaktieren Sie uns für ein unverbindliches Gespräch. Wir erläutern Ihnen die
          Partnerschafts-Optionen und erstellen ein individuelles Angebot für Ihr Maklerbüro.
        </p>
      </SEOPageLayout>
    </>
  );
}
