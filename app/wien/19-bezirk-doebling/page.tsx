import { Metadata } from 'next';
import { SEOPageLayout } from '@/components/seo/SEOPageLayout';
import { SchemaScript } from '@/components/seo/SchemaScript';
import {
  generatePageMetadata,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo-config';

export const metadata: Metadata = generatePageMetadata({
  title: '360° Rundgänge & Immobilienfotografie 19. Bezirk Döbling',
  description:
    'Professionelle Immobilienfotografie und 360° Touren in Döbling Wien. Villen, Einfamilienhäuser, Grinzing. Drohnenaufnahmen für Gärten und Grundstücke.',
  keywords: [
    'einfamilienhaus fotografie döbling',
    '360 tour 19 bezirk',
    'villa fotografie wien',
    'immobilienfotograf döbling',
    'drohnenaufnahmen döbling',
    'haus fotografie grinzing',
    'immobilien 1190 wien',
    'luxusvilla döbling',
  ],
  path: '/wien/19-bezirk-doebling',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Rundgänge 19. Bezirk Döbling',
    description:
      'Spezialisierte Immobilienfotografie für Villen und Einfamilienhäuser in Wien Döbling.',
    url: '/wien/19-bezirk-doebling',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wien', url: '/wien' },
    { name: '19. Bezirk', url: '/wien/19-bezirk-doebling' },
  ]),
];

export default function PageBezirk19() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Rundgänge im 19. Bezirk Döbling"
        heroSubtitle="Villen, Gärten und grüne Oasen perfekt präsentiert"
        heroImage="/assets/portfolio/villa-hietzing.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Wien', href: '/wien/19-bezirk-doebling' },
          { name: '19. Bezirk', href: '/wien/19-bezirk-doebling' },
        ]}
      >
        <p>
          <strong>
            Der 19. Bezirk Döbling ist Wiens grünster und exklusivster Villenbezirk.
          </strong>{' '}
          Von der Weinidylle in Grinzing bis zu den herrschaftlichen Villen am Kahlenberg bietet
          Döbling ein einzigartiges Wohnumfeld für anspruchsvolle Käufer, die Natur, Ruhe und
          dennoch Wien-Nähe schätzen.
        </p>

        <h2>Immobilien in Döbling</h2>

        <p>
          Döbling ist geprägt von großzügigen Grundstücken, historischen Villen und modernen
          Architekten-Häusern. Die Kombination aus Weinbergen, Wienerwald und städtischer
          Infrastruktur macht den Bezirk besonders attraktiv für Familien und erfolgreiche
          Unternehmer.
        </p>

        <h3>Typische Immobilien im 19. Bezirk</h3>

        <ul>
          <li>
            <strong>Historische Villen:</strong> Gründerzeit und Jahrhundertwende, große Gärten
          </li>
          <li>
            <strong>Moderne Architektenhäuser:</strong> Zeitgenössische Neubauten mit
            Panoramablick
          </li>
          <li>
            <strong>Einfamilienhäuser:</strong> Klassische Wiener Vororthäuser mit Garten
          </li>
          <li>
            <strong>Wohnungen in Villen:</strong> Exklusive Apartments in historischen Gebäuden
          </li>
          <li>
            <strong>Weinbau-Anwesen:</strong> Heurigen-Betriebe in Grinzing und Umgebung
          </li>
        </ul>

        <h2>Warum Drohnenaufnahmen in Döbling unverzichtbar sind</h2>

        <p>
          Bei Häusern mit Garten und großen Grundstücken sind Drohnenaufnahmen kein Luxus –
          sie sind essentiell. Vom Boden aus lässt sich weder die Größe des Grundstücks noch
          die Lage im Grünen adäquat vermitteln. Luftaufnahmen zeigen:
        </p>

        <ul>
          <li>Die gesamte Grundstücksfläche und den Garten</li>
          <li>Die Beziehung zum umgebenden Grün und Wienerwald</li>
          <li>Pool, Terrassen und Außenanlagen</li>
          <li>Die Privatsphäre der Lage</li>
          <li>Den Blick auf Wien und die Umgebung</li>
        </ul>

        <h3>Genehmigungen für Drohnenflüge in Döbling</h3>

        <p>
          Als EU-lizenzierte Drohnenpiloten verfügen wir über alle notwendigen Genehmigungen
          für Flüge im 19. Bezirk. Wir prüfen vorab die spezifischen Bedingungen an Ihrem
          Standort und kümmern uns um eventuelle Sondergenehmigungen.
        </p>

        <h2>Unsere Services für Döbling</h2>

        <h3>360° Virtuelle Rundgänge</h3>

        <p>
          Vollständige Touren durch Haus und Garten. Bei Villen erfassen wir alle Etagen,
          Kellerräume, Garagen und Außenbereiche für ein komplettes Bild.
        </p>

        <h3>Premium Haus-Fotografie</h3>

        <p>
          Professionelle Fotos von Innen- und Außenbereichen. Mit besonderem Fokus auf die
          Gartengestaltung, Terrassen und die Einbettung in die Umgebung.
        </p>

        <h3>Professionelle Drohnenaufnahmen</h3>

        <p>
          Hochauflösende Luftbilder und Videos. Zeigen Sie Ihr Anwesen aus der
          Vogelperspektive – der beste Weg, um Grundstück und Lage zu kommunizieren.
        </p>

        <h3>Twilight-Aufnahmen</h3>

        <p>
          Besonders wirkungsvoll bei Villen mit Außenbeleuchtung, Pool oder Gartenanlage.
          Die blaue Stunde verleiht dem Anwesen eine magische Atmosphäre.
        </p>

        <h2>Besondere Lagen in Döbling</h2>

        <h3>Grinzing</h3>

        <p>
          Das berühmte Heurigen-Viertel mit seinen charmanten Weinbauernhäusern und
          traditionellen Anwesen. Hier fotografieren wir sowohl Wohnimmobilien als auch
          Gastronomiebetriebe.
        </p>

        <h3>Sievering</h3>

        <p>
          Ruhige Wohngegend mit großzügigen Villen und Gärten. Viele Nachkriegsbauten und
          modernisierte Bestandsimmobilien.
        </p>

        <h3>Kahlenbergerdorf</h3>

        <p>
          Exklusive Hanglage mit spektakulärem Blick über Wien. Moderne Architektur trifft
          auf Panorama-Aussicht.
        </p>

        <h3>Heiligenstadt</h3>

        <p>
          Beethoven-Viertel mit historischen Gebäuden und guter Anbindung. Mix aus Altbau
          und hochwertigem Neubau.
        </p>

        <h2>Der Immobilienmarkt in Döbling</h2>

        <h3>Preissegment</h3>

        <p>
          Döbling gehört zu den teuersten Bezirken Wiens. Villen kosten typischerweise
          €1,5 bis €8 Mio., Einfamilienhäuser €800.000 bis €2 Mio. Bei diesen Preisen
          erwarten Käufer eine perfekte Präsentation.
        </p>

        <h3>Käuferstruktur</h3>

        <ul>
          <li>Erfolgreiche Unternehmer und Führungskräfte</li>
          <li>Familien, die Platz und Natur suchen</li>
          <li>Internationale Käufer (Botschaften, UN-Mitarbeiter)</li>
          <li>Investoren für Renditeobjekte (Zinshäuser)</li>
        </ul>

        <h3>Vermarktungsdauer</h3>

        <p>
          Hochwertige Villen in Döbling können längere Vermarktungszeiten haben, da die
          Käuferschicht begrenzt ist. Umso wichtiger ist eine professionelle Präsentation,
          die sofort die richtigen Interessenten anspricht.
        </p>

        <h2>Referenzen aus Döbling</h2>

        <p>
          Wir haben zahlreiche Projekte im 19. Bezirk realisiert:
        </p>

        <ul>
          <li>Jahrhundertwende-Villa Grinzing – 600m² Wohnfläche, 2.500m² Garten</li>
          <li>Modernes Architektenhaus Sievering – Passivhaus mit Panoramablick</li>
          <li>Einfamilienhaus Heiligenstadt – Klassisches Wiener Vorstadthaus</li>
          <li>Weinbau-Anwesen Neustift – Heuriger mit Weingarten</li>
        </ul>

        <h2>Workflow für Villen und Häuser</h2>

        <h3>1. Vor-Ort-Besichtigung</h3>

        <p>
          Bei großen Objekten führen wir vorab eine Besichtigung durch, um den optimalen
          Shooting-Plan zu erstellen: Beste Tageszeit für Licht, Drohnenflugplanung,
          Vorbereitung des Gartens.
        </p>

        <h3>2. Shooting-Tag</h3>

        <p>
          Ein ganzer Tag für umfassende Dokumentation: Innenräume am Vormittag (bestes
          Licht), Drohnenflug am Mittag, Außenaufnahmen und Garten am Nachmittag.
          Optional: Twilight-Session am Abend.
        </p>

        <h3>3. Umfassende Nachbearbeitung</h3>

        <p>
          Alle Materialien werden professionell bearbeitet und für verschiedene
          Verwendungszwecke optimiert.
        </p>

        <h2>Jetzt Ihr Döbling-Objekt präsentieren</h2>

        <p>
          Sie vermarkten eine Villa oder ein Haus in Döbling? Kontaktieren Sie uns für
          ein persönliches Beratungsgespräch. Wir besichtigen Ihr Objekt und erstellen
          ein maßgeschneidertes Angebot.
        </p>
      </SEOPageLayout>
    </>
  );
}
