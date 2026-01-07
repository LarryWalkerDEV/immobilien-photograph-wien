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
  title: 'Immobilienfotografie für Privatverkauf Wien',
  description:
    'Professionelle Fotos für Ihren privaten Immobilienverkauf in Wien. Bessere Fotos = höherer Preis. Komplette Anleitung + Service ab €290.',
  keywords: [
    'immobilie privat verkaufen fotos',
    'wohnung fotografieren tipps',
    'privatverkauf immobilie marketing',
    'immobilie selbst verkaufen',
    'fotos für willhaben',
    'privatverkauf wohnung wien',
    'immobilien fotos selber machen',
    'professionelle fotos privatverkauf',
  ],
  path: '/immobilienfotografie-privatverkauf',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Immobilienfotografie für Privatverkauf',
    description:
      'Professionelle Immobilienfotografie für Privatverkäufer. Maximieren Sie Ihren Verkaufspreis mit hochwertigen Fotos.',
    price: '290',
    url: '/immobilienfotografie-privatverkauf',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privatverkauf', url: '/immobilienfotografie-privatverkauf' },
  ]),
  generateFAQSchema([
    {
      question: 'Lohnt sich professionelle Fotografie beim Privatverkauf?',
      answer:
        'Ja, definitiv. Studien zeigen, dass professionelle Fotos den Verkaufspreis um durchschnittlich 5-10% steigern können. Bei einer €300.000 Immobilie sind das €15.000-30.000 Mehrerlös – deutlich mehr als die Kosten für Fotografie.',
    },
    {
      question: 'Was kostet Immobilienfotografie für Privatverkäufer?',
      answer:
        'Professionelle Immobilienfotografie für Privatverkäufer kostet ab €290. Dafür erhalten Sie 15-20 hochwertige Fotos, die Ihnen helfen, Ihre Immobilie schneller und zu einem besseren Preis zu verkaufen.',
    },
    {
      question: 'Kann ich die Fotos für willhaben und andere Portale nutzen?',
      answer:
        'Ja, Sie erhalten alle Nutzungsrechte und können die Fotos unbegrenzt für willhaben, ImmobilienScout24, Facebook Marketplace und alle anderen Plattformen verwenden.',
    },
  ]),
];

export default function PagePrivatverkauf() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Immobilienfotografie für Privatverkäufer in Wien"
        heroSubtitle="Verkaufen Sie Ihre Immobilie schneller und zu einem besseren Preis – mit Fotos, die Käufer überzeugen"
        heroImage="/assets/portfolio/altbau-innere-stadt.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Privatverkauf', href: '/immobilienfotografie-privatverkauf' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>Professionelle Immobilienfotografie für Privatverkäufer kostet ab €290</strong>{' '}
          und kann den Verkaufspreis Ihrer Immobilie um 5-10% steigern. Bei einem Verkaufspreis von
          €400.000 bedeutet das einen potenziellen Mehrerlös von €20.000-40.000 – eine Investition,
          die sich um ein Vielfaches auszahlt.
        </p>

        <h2>Warum professionelle Fotos beim Privatverkauf entscheidend sind</h2>

        <p>
          Sie haben sich entschieden, Ihre Immobilie privat zu verkaufen – ohne Makler. Eine kluge
          Entscheidung, denn Sie sparen die Maklerprovision von typischerweise 3-4% des
          Verkaufspreises. Aber um erfolgreich zu verkaufen, müssen Sie jetzt selbst für eine
          professionelle Vermarktung sorgen.
        </p>

        <p>
          Und hier machen viele Privatverkäufer einen teuren Fehler: Sie unterschätzen die
          Bedeutung guter Fotos. In der digitalen Welt beginnt der Immobilienkauf online – und
          Fotos entscheiden in Sekundenbruchteilen, ob ein Interessent auf Ihre Anzeige klickt oder
          zur nächsten scrollt.
        </p>

        <h3>Die harte Realität: Smartphone-Fotos vs. Profi-Fotos</h3>

        <p>
          Wir alle haben ein Smartphone mit einer guten Kamera. Die Versuchung ist groß, einfach
          selbst ein paar Fotos zu machen. Aber hier liegt das Problem:
        </p>

        <ul>
          <li>
            <strong>Räume wirken kleiner:</strong> Smartphone-Objektive verzerren und lassen Räume
            enger erscheinen als sie sind
          </li>
          <li>
            <strong>Lichtverhältnisse stimmen nicht:</strong> Fenster sind überbelichtet, Ecken zu
            dunkel
          </li>
          <li>
            <strong>Perspektiven sind ungünstig:</strong> Ohne Stativ entstehen schiefe Linien und
            unvorteilhafte Blickwinkel
          </li>
          <li>
            <strong>Das "Wow" fehlt:</strong> Amateur-Fotos vermitteln keine Emotionen
          </li>
        </ul>

        <h3>Was professionelle Fotos bewirken</h3>

        <p>
          Professionelle Immobilienfotos sind eine Investition, die sich messbar auszahlt:
        </p>

        <ul>
          <li>
            <strong>118% mehr Aufrufe:</strong> Anzeigen mit Profi-Fotos werden mehr als doppelt so
            oft angeklickt
          </li>
          <li>
            <strong>32% kürzere Verkaufszeit:</strong> Weniger Monate auf dem Markt bedeutet weniger
            Stress und Kosten
          </li>
          <li>
            <strong>5-10% höherer Verkaufspreis:</strong> Professionelle Präsentation rechtfertigt
            höhere Preisvorstellungen
          </li>
          <li>
            <strong>Mehr qualifizierte Anfragen:</strong> Interessenten wissen vorher, was sie
            erwartet – weniger Zeitverschwendung für Sie
          </li>
        </ul>

        <h2>Unser Angebot für Privatverkäufer</h2>

        <p>
          Wir haben spezielle Pakete entwickelt, die auf die Bedürfnisse von Privatverkäufern
          zugeschnitten sind: professionelle Qualität zu fairen Preisen, unkomplizierte Abwicklung.
        </p>

        <h3>Starter-Paket – €290</h3>

        <p>
          Ideal für Wohnungen bis 70m². Sie erhalten:
        </p>

        <ul>
          <li>15-20 professionelle HDR-Fotos</li>
          <li>Alle Räume optimal in Szene gesetzt</li>
          <li>Professionelle Nachbearbeitung</li>
          <li>Lieferung innerhalb von 48 Stunden</li>
          <li>Volle Nutzungsrechte für alle Plattformen</li>
        </ul>

        <h3>Empfohlen: Komplett-Paket – €490</h3>

        <p>
          Für Wohnungen und Häuser bis 120m². Zusätzlich zum Starter-Paket:
        </p>

        <ul>
          <li>25-35 Fotos</li>
          <li>360° Rundgang für virtuelle Besichtigungen</li>
          <li>Grundriss (2D oder 3D)</li>
          <li>Außenaufnahmen</li>
          <li>24h Express-Lieferung</li>
        </ul>

        <h3>Premium-Paket – €790</h3>

        <p>
          Für größere Objekte und maximale Wirkung:
        </p>

        <ul>
          <li>Unbegrenzte Fotos</li>
          <li>360° Premium-Tour mit Hotspots</li>
          <li>Drohnenaufnahmen (wenn erlaubt)</li>
          <li>Möblierter 3D-Grundriss</li>
          <li>Video-Slideshow für Social Media</li>
          <li>Beratung zur optimalen Anzeigengestaltung</li>
        </ul>

        <h2>Vorbereitung: So machen Sie Ihre Immobilie fototauglich</h2>

        <p>
          Die Qualität der Fotos hängt nicht nur von der Kamera ab – die Vorbereitung ist
          entscheidend. Hier unsere Profi-Tipps:
        </p>

        <h3>Entrümpeln und Aufräumen</h3>

        <p>
          Weniger ist mehr. Räumen Sie persönliche Gegenstände weg, reduzieren Sie Dekorationen auf
          das Wesentliche. Die Räume sollten großzügig und einladend wirken, nicht überladen.
        </p>

        <h4>Konkret bedeutet das:</h4>

        <ul>
          <li>Arbeitsplatten in Küche und Bad frei räumen</li>
          <li>Persönliche Fotos und religiöse Symbole entfernen</li>
          <li>Schuhe, Jacken, Taschen verstecken</li>
          <li>Zeitschriften, Bücher, Fernbedienungen ordnen</li>
          <li>Müll und Wäsche wegräumen</li>
        </ul>

        <h3>Reinigung</h3>

        <p>
          Die Kamera sieht alles – auch Staubflusen und Fingerabdrücke auf Glas. Eine gründliche
          Reinigung vor dem Shooting ist unverzichtbar:
        </p>

        <ul>
          <li>Fenster putzen (innen!)</li>
          <li>Böden wischen</li>
          <li>Spiegel und Glasflächen reinigen</li>
          <li>Badezimmer makellos</li>
          <li>Küche glänzend</li>
        </ul>

        <h3>Licht maximieren</h3>

        <p>
          Helle Räume wirken größer und einladender:
        </p>

        <ul>
          <li>Alle Vorhänge öffnen</li>
          <li>Jalousien hochziehen</li>
          <li>Alle Lampen einschalten (ja, auch tagsüber!)</li>
          <li>Defekte Glühbirnen ersetzen</li>
        </ul>

        <h3>Kleine Details mit großer Wirkung</h3>

        <ul>
          <li>Frische Blumen in einer Vase</li>
          <li>Saubere, gleichfarbige Handtücher im Bad</li>
          <li>Ordentlich gemachte Betten</li>
          <li>Kissen aufschütteln</li>
          <li>Stühle gerade rücken</li>
        </ul>

        <h2>Der Ablauf: So einfach ist es</h2>

        <h3>1. Anfrage und Terminvereinbarung</h3>

        <p>
          Kontaktieren Sie uns per Telefon, E-Mail oder über unser Formular. Wir besprechen kurz
          Ihr Objekt und Ihre Anforderungen und finden einen Termin, der Ihnen passt.
        </p>

        <h3>2. Vorbereitung (von Ihnen)</h3>

        <p>
          Mit unserer Checkliste bereiten Sie Ihre Immobilie optimal vor. Das dauert je nach
          Zustand 2-4 Stunden – Zeit, die sich lohnt!
        </p>

        <h3>3. Das Shooting</h3>

        <p>
          Unser Fotograf kommt mit allem notwendigen Equipment. Sie müssen nur den Zugang
          ermöglichen. Für eine 80m²-Wohnung planen wir etwa 1,5-2 Stunden.
        </p>

        <h3>4. Nachbearbeitung</h3>

        <p>
          Wir bearbeiten Ihre Fotos professionell: Farbkorrektur, Belichtungsoptimierung, leichte
          Retusche. Das dauert 24-48 Stunden.
        </p>

        <h3>5. Lieferung</h3>

        <p>
          Sie erhalten Ihre Fotos per Download-Link in voller Auflösung, optimiert für Web und
          Print.
        </p>

        <h2>Tipps für Ihre Anzeige</h2>

        <p>
          Gute Fotos sind die halbe Miete – aber auch die Anzeige selbst muss überzeugen. Hier
          unsere Tipps:
        </p>

        <h3>Die richtige Reihenfolge der Fotos</h3>

        <ol>
          <li>
            <strong>Titelbild:</strong> Das beste Foto – oft ein Weitwinkel des Wohnzimmers oder
            eine starke Außenansicht
          </li>
          <li>
            <strong>Grundriss:</strong> Gleich am Anfang zur Orientierung
          </li>
          <li>
            <strong>Wohnzimmer:</strong> Der wichtigste Raum
          </li>
          <li>
            <strong>Küche:</strong> Oft ausschlaggebend
          </li>
          <li>
            <strong>Schlafzimmer:</strong> Privater Rückzugsort
          </li>
          <li>
            <strong>Bad:</strong> Zeigt den Zustand
          </li>
          <li>
            <strong>Weitere Räume:</strong> Kinderzimmer, Büro etc.
          </li>
          <li>
            <strong>Außenbereich:</strong> Balkon, Terrasse, Garten
          </li>
          <li>
            <strong>Umgebung:</strong> Falls relevant (Blick, Lage)
          </li>
        </ol>

        <h3>Die richtige Anzahl</h3>

        <p>
          Studien zeigen: 20-25 Fotos sind optimal. Weniger wirkt nicht vertrauenswürdig, mehr
          überfordert. Mit einem professionellen Grundriss können es auch 15-20 sein.
        </p>

        <h3>Beschreibungstext</h3>

        <p>
          Ihre Fotos ziehen an – der Text überzeugt:
        </p>

        <ul>
          <li>Beginnen Sie mit den Highlights</li>
          <li>Beschreiben Sie das Gefühl, nicht nur die Fakten</li>
          <li>Nennen Sie konkrete Vorteile (U-Bahn 3 Min, Supermarkt im Haus)</li>
          <li>Seien Sie ehrlich – Enttäuschungen rächen sich bei der Besichtigung</li>
        </ul>

        <h2>Rechenbeispiel: Die Investition, die sich auszahlt</h2>

        <p>
          Nehmen wir an, Sie verkaufen eine Wohnung für €350.000:
        </p>

        <ul>
          <li>
            <strong>Ohne professionelle Fotos:</strong> Verkauf nach 4 Monaten für €340.000
          </li>
          <li>
            <strong>Mit professionellen Fotos (€490):</strong> Verkauf nach 6 Wochen für €355.000
          </li>
        </ul>

        <p>
          <strong>Ergebnis:</strong> €14.510 mehr in der Tasche (€15.000 Mehrerlös minus €490
          Fotografie). Und 2,5 Monate weniger Stress.
        </p>

        <h2>Warum wir der richtige Partner für Privatverkäufer sind</h2>

        <h3>Faire Preise</h3>

        <p>
          Unsere Pakete sind speziell für Privatverkäufer kalkuliert – professionelle Qualität
          ohne unnötige Extras.
        </p>

        <h3>Unkompliziert</h3>

        <p>
          Ein Termin, ein Ansprechpartner, ein Preis. Keine versteckten Kosten, keine
          komplizierten Verträge.
        </p>

        <h3>Schnell</h3>

        <p>
          Lieferung innerhalb von 24-48 Stunden. Sie können Ihre Anzeige noch diese Woche online
          stellen.
        </p>

        <h3>Volle Unterstützung</h3>

        <p>
          Auf Wunsch beraten wir Sie zur Anzeigengestaltung und geben Tipps für den erfolgreichen
          Verkauf.
        </p>

        <h2>Jetzt anfragen</h2>

        <p>
          Machen Sie den ersten Schritt zu einem erfolgreichen Privatverkauf. Kontaktieren Sie
          uns für ein unverbindliches Angebot oder buchen Sie direkt Ihren Termin.
        </p>
      </SEOPageLayout>
    </>
  );
}
