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
  title: '360° Rundgänge & Immobilienfotografie 13. Bezirk Hietzing',
  description:
    'Professionelle Immobilienfotografie und 360° Touren in Hietzing Wien. Villen, Schloss Schönbrunn-Nähe, Premium-Wohnlagen. Luxusimmobilien-Expertise.',
  keywords: [
    'luxusimmobilien hietzing',
    'villen fotografie wien 13',
    'immobilienfotograf hietzing',
    '360 tour hietzing',
    'schönbrunn immobilien',
    'villa hietzing kaufen',
    'premium wohnung 1130',
    'fotograf hietzing wien',
  ],
  path: '/wien/13-bezirk-hietzing',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Rundgänge 13. Bezirk Hietzing',
    description:
      'Premium Immobilienfotografie für Villen und Luxuswohnungen in Wien Hietzing.',
    url: '/wien/13-bezirk-hietzing',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wien', url: '/wien' },
    { name: '13. Bezirk', url: '/wien/13-bezirk-hietzing' },
  ]),
];

export default function PageBezirk13() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Rundgänge im 13. Bezirk Hietzing"
        heroSubtitle="Kaiserliche Eleganz: Villen und Premium-Wohnlagen nahe Schloss Schönbrunn"
        heroImage="/assets/portfolio/villa-hietzing.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Wien', href: '/wien/13-bezirk-hietzing' },
          { name: '13. Bezirk', href: '/wien/13-bezirk-hietzing' },
        ]}
      >
        <p>
          <strong>
            Der 13. Bezirk Hietzing ist einer der nobelsten Wohnbezirke Wiens.
          </strong>{' '}
          Mit Schloss Schönbrunn als Nachbarn, weitläufigen Villengärten und einer Atmosphäre
          gediegener Eleganz zieht Hietzing anspruchsvolle Käufer an, die Ruhe, Grün und
          gehobenen Lebensstandard suchen.
        </p>

        <h2>Immobilien in Hietzing</h2>

        <p>
          Hietzing verbindet kaiserliche Geschichte mit modernem Luxuswohnen. Die Nähe zu
          Schloss Schönbrunn und dem Tiergarten, die großzügigen Grundstücke und die etablierte
          Infrastruktur machen den Bezirk zu einer der begehrtesten Adressen Wiens.
        </p>

        <h3>Typische Immobilien im 13. Bezirk</h3>

        <ul>
          <li>
            <strong>Historische Villen:</strong> Gründerzeit und Jugendstil mit parkähnlichen
            Gärten
          </li>
          <li>
            <strong>Stadtvillen:</strong> Moderne Interpretationen klassischer Architektur
          </li>
          <li>
            <strong>Luxuswohnungen:</strong> Hochwertige Apartments in Premium-Residenzen
          </li>
          <li>
            <strong>Reihenhäuser:</strong> Gehobene Wohnformen für Familien
          </li>
          <li>
            <strong>Schönbrunn-Nähe:</strong> Exklusive Lagen mit Schlossblick
          </li>
        </ul>

        <h2>Die Hietzinger Käuferschaft</h2>

        <p>
          Hietzing zieht eine spezifische Klientel an:
        </p>

        <ul>
          <li>Etablierte Unternehmer und Führungskräfte</li>
          <li>Familien mit gehobenen Ansprüchen</li>
          <li>Internationale Diplomaten und Expats</li>
          <li>Käufer, die Tradition und Beständigkeit schätzen</li>
          <li>Investoren für Premium-Immobilien</li>
        </ul>

        <h3>Erwartungen an die Präsentation</h3>

        <p>
          Hietzinger Käufer erwarten eine Präsentation, die dem Niveau der Immobilien entspricht:
          klassisch, elegant, professionell. Keine grellen Effekte, sondern zeitlose Qualität.
        </p>

        <h2>Unsere Services für Hietzing</h2>

        <h3>Villa-Fotografie</h3>

        <p>
          Villen erfordern einen umfassenden fotografischen Ansatz: Außenaufnahmen der Fassade,
          Dokumentation des Gartens, alle Innenräume, Details der Architektur. Wir nehmen uns
          die Zeit, die solche Objekte verdienen.
        </p>

        <h3>Premium 360° Rundgänge</h3>

        <p>
          Mit Matterport-Technologie erstellen wir vollständige virtuelle Touren durch
          Villen und große Wohnungen. Internationale Interessenten können so eine intensive
          Vorbesichtigung durchführen.
        </p>

        <h3>Drohnenaufnahmen</h3>

        <p>
          Große Grundstücke und Gärten verdienen Luftaufnahmen. Wir dokumentieren das gesamte
          Anwesen aus der Vogelperspektive und zeigen die grüne Umgebung.
        </p>

        <h3>Twilight-Fotografie</h3>

        <p>
          Villen mit Außenbeleuchtung und Gärten wirken besonders in der Dämmerung. Unsere
          Twilight-Sessions fangen diese magische Atmosphäre ein.
        </p>

        <h2>Besondere Lagen in Hietzing</h2>

        <h3>Schönbrunn-Nähe</h3>

        <p>
          Immobilien in unmittelbarer Nähe des Schlosses und Parks profitieren von der
          einzigartigen Lage. Der tägliche Spaziergang durch den Schlosspark ist hier
          Realität.
        </p>

        <h3>Ober St. Veit</h3>

        <p>
          Villenkolonie mit großzügigen Grundstücken und gewachsenen Gärten. Hier finden
          sich einige der schönsten Jugendstil-Villen Wiens.
        </p>

        <h3>Lainz</h3>

        <p>
          Am Rande des Lainzer Tiergartens gelegen – Natur pur vor der Haustür. Beliebt
          bei Familien und Naturliebhabern.
        </p>

        <h3>Speising</h3>

        <p>
          Ruhige, gutbürgerliche Wohngegend mit guter Infrastruktur und U4-Anbindung.
        </p>

        <h2>Der Immobilienmarkt in Hietzing</h2>

        <h3>Preissegment</h3>

        <p>
          Hietzing gehört zu den teuersten Bezirken Wiens:
        </p>

        <ul>
          <li>Villen: €1,5 - €10 Mio. (je nach Größe und Lage)</li>
          <li>Premium-Wohnungen: €8.000 - €12.000 pro m²</li>
          <li>Reihenhäuser: €600.000 - €1,2 Mio.</li>
        </ul>

        <h3>Marktdynamik</h3>

        <p>
          Der Hietzinger Markt ist stabil, aber nicht hektisch. Käufer nehmen sich Zeit
          für Entscheidungen. Umso wichtiger ist eine überzeugende Präsentation, die
          langfristig wirkt.
        </p>

        <h2>Workflow für Hietzing-Villen</h2>

        <h3>1. Vorab-Besichtigung</h3>

        <p>
          Bei größeren Objekten führen wir eine Vorab-Besichtigung durch, um den optimalen
          Shooting-Plan zu entwickeln: Lichtverhältnisse, Gartengestaltung, besondere Details.
        </p>

        <h3>2. Ganztägiges Shooting</h3>

        <p>
          Für Villen planen wir einen ganzen Tag: Innenaufnahmen am Vormittag, Drohne am
          Mittag, Außen und Garten am Nachmittag, Twilight am Abend.
        </p>

        <h3>3. Premium-Nachbearbeitung</h3>

        <p>
          Jedes Bild wird individuell bearbeitet. Bei Villen gibt es keine Massenabfertigung.
        </p>

        <h3>4. Umfassende Lieferung</h3>

        <p>
          Sie erhalten ein komplettes Paket: Fotos, 360°-Tour, Drohnenaufnahmen, Grundrisse –
          alles für eine überzeugende Vermarktung.
        </p>

        <h2>Referenzen aus Hietzing</h2>

        <p>
          Einige unserer Projekte im 13. Bezirk (Details auf Anfrage):
        </p>

        <ul>
          <li>Jugendstil-Villa Ober St. Veit – 800m² Wohnfläche, 3.000m² Garten</li>
          <li>Moderne Stadtvilla Speising – Architekt: bekanntes Wiener Büro</li>
          <li>Penthouse Schönbrunn-Nähe – 250m² mit Dachterrasse und Schlossblick</li>
          <li>Historisches Anwesen Lainz – Denkmalgeschützte Villa mit Nebengebäuden</li>
        </ul>

        <h2>Jetzt Ihr Hietzing-Objekt präsentieren</h2>

        <p>
          Sie vermarkten eine Villa oder Premium-Wohnung in Hietzing? Kontaktieren Sie uns
          für ein persönliches Gespräch. Wir verstehen die Ansprüche dieses Marktsegments
          und liefern entsprechende Qualität.
        </p>
      </SEOPageLayout>
    </>
  );
}
