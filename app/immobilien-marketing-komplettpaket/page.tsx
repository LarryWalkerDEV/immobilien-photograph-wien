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
  title: 'Immobilien Marketing Komplettpaket Wien',
  description:
    'Alles aus einer Hand: Fotografie, 360° Tour, Drohne, Video, Grundriss. Das Rundum-sorglos-Paket für Ihre Immobilienvermarktung in Wien. Ab €890.',
  keywords: [
    'immobilien marketing wien',
    'komplettes immobilien marketing',
    '360 foto drohne paket',
    'immobilien visualisierung komplett',
    'full service immobilienfotografie',
    'all-in-one immobilien paket',
    'immobilien vermarktung wien',
    'professionelles immobilien marketing',
  ],
  path: '/immobilien-marketing-komplettpaket',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Immobilien Marketing Komplettpaket',
    description:
      'Das Rundum-sorglos-Paket für Immobilienvermarktung: Fotografie, 360° Tour, Drohne, Video und Grundriss in einem Termin.',
    price: '890',
    url: '/immobilien-marketing-komplettpaket',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Komplettpaket', url: '/immobilien-marketing-komplettpaket' },
  ]),
  generateFAQSchema([
    {
      question: 'Was ist im Immobilien Marketing Komplettpaket enthalten?',
      answer:
        'Das Komplettpaket enthält professionelle Fotografie (25-40 Bilder), einen 360° virtuellen Rundgang, Drohnenaufnahmen (falls möglich), einen 3D-Grundriss und ein kurzes Video für Social Media. Alles in einem Termin.',
    },
    {
      question: 'Warum ist ein Komplettpaket günstiger als Einzelbuchungen?',
      answer:
        'Durch die Kombination aller Services in einem Termin sparen wir Zeit und Logistikaufwand. Diese Ersparnis geben wir an Sie weiter – Sie sparen bis zu 30% gegenüber Einzelbuchungen.',
    },
    {
      question: 'Wie lange dauert ein Komplettpaket-Termin?',
      answer:
        'Für eine durchschnittliche Wohnung (80-100m²) planen wir 3-4 Stunden vor Ort. Größere Objekte können länger dauern. Die Lieferung aller Materialien erfolgt innerhalb von 48-72 Stunden.',
    },
  ]),
];

export default function PageKomplettpaket() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Immobilien Marketing Komplettpaket"
        heroSubtitle="Alles aus einer Hand: Fotos, 360° Tour, Drohne, Video und Grundriss – das Rundum-sorglos-Paket für maximalen Verkaufserfolg"
        heroImage="/assets/heroes/cinematic-storytelling.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Komplettpaket', href: '/immobilien-marketing-komplettpaket' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>Das Immobilien Marketing Komplettpaket kostet ab €890</strong> und enthält alles,
          was Sie für eine professionelle Immobilienvermarktung brauchen: hochwertige Fotografie,
          360° virtuellen Rundgang, Drohnenaufnahmen, 3D-Grundriss und Video-Content. Alles in einem
          Termin, mit bis zu 30% Ersparnis gegenüber Einzelbuchungen.
        </p>

        <h2>Warum ein Komplettpaket die beste Wahl ist</h2>

        <p>
          Erfolgreiche Immobilienvermarktung braucht heute mehr als nur ein paar Fotos. Käufer
          erwarten virtuelle Touren, Videos für Social Media, aussagekräftige Grundrisse und bei
          Häusern auch Luftaufnahmen. Das Problem: All diese Services einzeln zu buchen ist teuer,
          zeitaufwendig und koordinationsintensiv.
        </p>

        <p>
          Unser Komplettpaket löst dieses Problem: Ein Termin, ein Ansprechpartner, ein Preis –
          und Sie erhalten alles, was Sie für eine erstklassige Präsentation brauchen.
        </p>

        <h3>Die Vorteile im Überblick</h3>

        <ul>
          <li>
            <strong>Bis zu 30% günstiger:</strong> als Einzelbuchungen
          </li>
          <li>
            <strong>Ein Termin:</strong> Statt 3-4 separater Termine nur ein Vor-Ort-Besuch
          </li>
          <li>
            <strong>Ein Ansprechpartner:</strong> Keine Koordination zwischen verschiedenen
            Dienstleistern
          </li>
          <li>
            <strong>Konsistente Qualität:</strong> Alle Materialien passen zusammen und
            repräsentieren Ihre Immobilie einheitlich
          </li>
          <li>
            <strong>Schnelle Lieferung:</strong> Alle Materialien innerhalb von 48-72 Stunden
          </li>
        </ul>

        <h2>Was im Komplettpaket enthalten ist</h2>

        <h3>Professionelle Immobilienfotografie</h3>

        <p>
          25-40 hochwertige HDR-Fotos, die jeden Raum optimal präsentieren. Mit professioneller
          Ausrüstung, perfekter Belichtung und sorgfältiger Nachbearbeitung.
        </p>

        <h4>Inklusive:</h4>

        <ul>
          <li>Alle Innenräume aus optimalen Perspektiven</li>
          <li>Außenaufnahmen (Fassade, Eingang, Garten/Balkon)</li>
          <li>Detailaufnahmen besonderer Merkmale</li>
          <li>Professionelle HDR-Nachbearbeitung</li>
          <li>Web- und Print-Auflösung</li>
        </ul>

        <h3>360° Virtueller Rundgang</h3>

        <p>
          Ein vollständiger interaktiver Rundgang, der Interessenten eine realistische virtuelle
          Besichtigung ermöglicht. Kompatibel mit allen Geräten und Immobilienportalen.
        </p>

        <h4>Features:</h4>

        <ul>
          <li>Navigation durch alle Räume</li>
          <li>Dollhouse-/Grundriss-Ansicht</li>
          <li>Hotspots mit Rauminformationen (optional)</li>
          <li>Einbindung in Website und Portale</li>
          <li>Unbegrenztes Hosting</li>
        </ul>

        <h3>Drohnenaufnahmen</h3>

        <p>
          Luftbilder und -videos, die Ihre Immobilie und ihr Umfeld aus der Vogelperspektive
          zeigen. Besonders wertvoll für Häuser, Grundstücke und Objekte mit besonderer Lage.
        </p>

        <h4>Hinweis:</h4>

        <p>
          Drohnenflüge sind standortabhängig und benötigen Genehmigungen. Wir prüfen vorab die
          Flugmöglichkeit. Falls ein Drohnenflug nicht möglich ist, erhalten Sie eine anteilige
          Gutschrift oder einen alternativen Service.
        </p>

        <h3>3D-Grundriss</h3>

        <p>
          Ein möblierter, dreidimensionaler Grundriss, der die Raumaufteilung anschaulich
          visualisiert. Interessenten verstehen sofort, wie die Räume zueinander liegen.
        </p>

        <h4>Optionen:</h4>

        <ul>
          <li>Möbliert oder unmöbliert</li>
          <li>Verschiedene Stilrichtungen</li>
          <li>Mit oder ohne Außenbereich</li>
        </ul>

        <h3>Video-Content</h3>

        <p>
          Ein 45-60 Sekunden Video, optimiert für Social Media (Instagram, Facebook, LinkedIn).
          Perfekt, um Aufmerksamkeit zu erzeugen und Reichweite zu generieren.
        </p>

        <h4>Enthält:</h4>

        <ul>
          <li>Dynamische Übergänge zwischen Fotos/Drohnenaufnahmen</li>
          <li>Lizenzfreie Hintergrundmusik</li>
          <li>Ihr Logo/Branding</li>
          <li>Optimiert für verschiedene Plattformen (quadratisch, Hochformat, Querformat)</li>
        </ul>

        <h2>Die drei Komplettpaket-Varianten</h2>

        <h3>Komplettpaket Standard – €890</h3>

        <p>
          Ideal für Wohnungen bis 80m².
        </p>

        <ul>
          <li>25 professionelle HDR-Fotos</li>
          <li>360° Rundgang (Basis)</li>
          <li>2D-Grundriss oder einfacher 3D-Grundriss</li>
          <li>Video-Slideshow (30 Sek.)</li>
          <li>Lieferung: 72 Stunden</li>
        </ul>

        <h3>Komplettpaket Premium – €1.490</h3>

        <p>
          Für Wohnungen und Häuser bis 150m². Unser Bestseller.
        </p>

        <ul>
          <li>35 professionelle HDR-Fotos</li>
          <li>360° Premium-Rundgang mit Hotspots</li>
          <li>Drohnenaufnahmen (Fotos + kurzes Video)</li>
          <li>Möblierter 3D-Grundriss</li>
          <li>Video-Tour (60 Sek.) für Social Media</li>
          <li>Lieferung: 48 Stunden</li>
        </ul>

        <h3>Komplettpaket Luxus – €2.490</h3>

        <p>
          Für große Objekte und Luxusimmobilien.
        </p>

        <ul>
          <li>Unbegrenzte Fotos</li>
          <li>Matterport 3D-Scan</li>
          <li>Professionelle Drohnenaufnahmen (Fotos + cinematic Video)</li>
          <li>Premium 3D-Grundriss aller Etagen</li>
          <li>Cinematic Video (2-3 Min.)</li>
          <li>Twilight-Aufnahmen</li>
          <li>Lieferung: 48 Stunden Express</li>
        </ul>

        <h2>Der Ablauf: Ein Termin für alles</h2>

        <h3>Vorbereitung</h3>

        <p>
          Sie erhalten vorab unsere Checkliste zur Vorbereitung der Immobilie. Eine gut
          vorbereitete Immobilie macht den Unterschied – wir geben Ihnen alle Tipps, die Sie
          brauchen.
        </p>

        <h3>Der Termin vor Ort</h3>

        <p>
          Unser Team kommt mit allem Equipment: Kamera, Drohne, 360°-Kamera, Beleuchtung. Für das
          Premium-Paket (100m²) planen wir ca. 3-4 Stunden:
        </p>

        <ul>
          <li>
            <strong>Fotografie:</strong> 1,5-2 Stunden
          </li>
          <li>
            <strong>360° Scan:</strong> 1-1,5 Stunden
          </li>
          <li>
            <strong>Drohne:</strong> 30-45 Minuten
          </li>
        </ul>

        <p>
          Sie müssen nur den Zugang sicherstellen – alles andere übernehmen wir.
        </p>

        <h3>Nachbearbeitung</h3>

        <p>
          In unserem Studio werden alle Materialien professionell bearbeitet: Fotos optimiert,
          360°-Tour zusammengestellt, Grundriss erstellt, Video geschnitten.
        </p>

        <h3>Lieferung</h3>

        <p>
          Innerhalb von 48-72 Stunden (je nach Paket) erhalten Sie alles per Download-Link:
        </p>

        <ul>
          <li>Fotos in Web- und Print-Auflösung</li>
          <li>Link zur 360°-Tour + Embed-Codes</li>
          <li>3D-Grundriss als Bilddatei</li>
          <li>Video in verschiedenen Formaten</li>
          <li>Drohnenaufnahmen (falls enthalten)</li>
        </ul>

        <h2>Für wen ist das Komplettpaket ideal?</h2>

        <h3>Immobilienmakler</h3>

        <p>
          Maximale Professionalität bei minimalem Koordinationsaufwand. Ein Termin, vollständige
          Materialien, konsistente Qualität für Ihr Portfolio.
        </p>

        <h3>Privatverkäufer</h3>

        <p>
          Sie verkaufen ohne Makler und wollen professionell auftreten? Das Komplettpaket gibt
          Ihnen alle Werkzeuge für einen erfolgreichen Privatverkauf.
        </p>

        <h3>Bauträger</h3>

        <p>
          Für fertiggestellte Musterwohnungen oder den Weiterverkauf: Vollständige Dokumentation
          in einem Termin.
        </p>

        <h3>Hausverwaltungen</h3>

        <p>
          Effiziente Vermarktung von Mietobjekten mit allen notwendigen Materialien für schnelle
          Neuvermietung.
        </p>

        <h2>Kostenvergleich: Einzelbuchung vs. Komplettpaket</h2>

        <h3>Einzelbuchung (Beispiel für 100m² Wohnung):</h3>

        <ul>
          <li>Fotografie (30 Bilder): €490</li>
          <li>360° Rundgang: €399</li>
          <li>Drohnenaufnahmen: €290</li>
          <li>3D-Grundriss: €249</li>
          <li>Video-Slideshow: €199</li>
        </ul>

        <p>
          <strong>Gesamt Einzelbuchung: €1.627</strong>
        </p>

        <h3>Komplettpaket Premium:</h3>

        <p>
          <strong>€1.490</strong> – Sie sparen €137 (8%)
        </p>

        <p>
          Zusätzlich sparen Sie Zeit: Statt 4-5 Termine nur ein einziger Vor-Ort-Termin.
        </p>

        <h2>Häufig gestellte Fragen</h2>

        <h3>Was, wenn die Drohne nicht fliegen kann?</h3>

        <p>
          Bei Flugverbotszonen oder schlechtem Wetter entfällt die Drohnenaufnahme. Sie erhalten
          eine anteilige Gutschrift (€100-150) oder einen Ersatz-Service wie zusätzliche Fotos
          oder erweiterten Grundriss.
        </p>

        <h3>Kann ich einzelne Leistungen abwählen?</h3>

        <p>
          Das Komplettpaket ist als Gesamtpaket kalkuliert. Für individuelle Zusammenstellungen
          nutzen Sie unsere Einzelservices oder kontaktieren Sie uns für ein Custom-Angebot.
        </p>

        <h3>Wie schnell kann ein Termin stattfinden?</h3>

        <p>
          In der Regel können wir Termine innerhalb von 3-5 Werktagen realisieren. Express-Termine
          (24-48h) sind gegen Aufpreis möglich.
        </p>

        <h2>Jetzt Komplettpaket buchen</h2>

        <p>
          Vereinfachen Sie Ihre Immobilienvermarktung mit unserem Rundum-sorglos-Paket.
          Kontaktieren Sie uns für ein unverbindliches Angebot oder buchen Sie direkt Ihren
          Termin.
        </p>
      </SEOPageLayout>
    </>
  );
}
