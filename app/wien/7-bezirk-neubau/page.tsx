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
  title: '360° Rundgänge & Immobilienfotografie 7. Bezirk Neubau',
  description:
    'Professionelle Immobilienfotografie und 360° Touren in Wien Neubau. Trendiger Bezirk, Altbau-Charme, urbanes Leben. Für junge Käufer perfekt präsentiert.',
  keywords: [
    '360 touren neubau wien',
    'fotograf 7 bezirk',
    'immobilienfotografie neubau',
    'altbau fotografie 1070',
    'immobilien neubau wien',
    'wohnung fotografieren 7 bezirk',
    'loft fotografie wien',
    'trendy wohnung neubau',
  ],
  path: '/wien/7-bezirk-neubau',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Rundgänge 7. Bezirk Neubau',
    description:
      'Immobilienfotografie für den trendigen 7. Bezirk – Altbau-Charme für urbane Käufer.',
    url: '/wien/7-bezirk-neubau',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wien', url: '/wien' },
    { name: '7. Bezirk', url: '/wien/7-bezirk-neubau' },
  ]),
];

export default function PageBezirk7() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Rundgänge im 7. Bezirk Neubau"
        heroSubtitle="Wiens Trend-Bezirk: Altbau-Charme trifft urbanes Lebensgefühl"
        heroImage="/assets/portfolio/modern-loft-mariahilf.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Wien', href: '/wien/7-bezirk-neubau' },
          { name: '7. Bezirk', href: '/wien/7-bezirk-neubau' },
        ]}
      >
        <p>
          <strong>
            Der 7. Bezirk Neubau ist Wiens Kreativ- und Trendbezirk.
          </strong>{' '}
          Mit seiner lebendigen Mischung aus Gründerzeit-Altbauten, Designershops, Cafés und
          kreativer Szene zieht Neubau vor allem junge Berufstätige, Kreative und urbane
          Familien an, die das pulsierende Stadtleben schätzen.
        </p>

        <h2>Immobilien im 7. Bezirk</h2>

        <p>
          Neubau ist geprägt von wunderschönen Altbauten aus der Gründerzeit. Die Gebäude
          entlang der Mariahilfer Straße, im Spittelberg-Viertel und um den Siebensternplatz
          bieten charmante Wohnungen mit hohen Decken, Stuck und Charakter.
        </p>

        <h3>Typische Immobilien im 7. Bezirk</h3>

        <ul>
          <li>
            <strong>Gründerzeit-Altbauten:</strong> Klassische Wiener Wohnungen mit hohen
            Decken
          </li>
          <li>
            <strong>Loft-Wohnungen:</strong> Umgebaute Gewerberäume mit industriellem Charme
          </li>
          <li>
            <strong>Dachgeschoss-Ausbauten:</strong> Moderne Penthouses in historischen
            Gebäuden
          </li>
          <li>
            <strong>Kompakte City-Apartments:</strong> Ideal für Singles und Paare
          </li>
          <li>
            <strong>Geschäftslokale:</strong> Einzelhandel und Gastronomie im Erdgeschoss
          </li>
        </ul>

        <h2>Der Neubau-Käufer</h2>

        <p>
          Die Käuferstruktur im 7. Bezirk unterscheidet sich von anderen Wiener Bezirken.
          Hier suchen:
        </p>

        <ul>
          <li>Junge Berufstätige mit urbanem Lifestyle</li>
          <li>Kreative und Freiberufler</li>
          <li>Internationale Fachkräfte und Expats</li>
          <li>Design-affine Käufer, die Wert auf Ästhetik legen</li>
          <li>Investoren für Kurzzeitvermietung (Airbnb-Potenzial)</li>
        </ul>

        <h3>Was diese Käufer erwarten</h3>

        <p>
          Neubau-Käufer sind visuell orientiert und digital unterwegs. Sie erwarten:
        </p>

        <ul>
          <li>Hochwertige, ästhetische Fotografie</li>
          <li>Virtuelle Touren für die Vorbesichtigung</li>
          <li>Social-Media-tauglichen Content</li>
          <li>Schnelle, unkomplizierte Kommunikation</li>
        </ul>

        <h2>Unsere Services für Neubau</h2>

        <h3>Altbau-optimierte Fotografie</h3>

        <p>
          Wir wissen, wie man Gründerzeit-Wohnungen ins beste Licht rückt: Stuck-Details
          hervorheben, hohe Decken betonen, den Charme historischer Böden einfangen – ohne
          die Räume altmodisch wirken zu lassen.
        </p>

        <h3>360° Rundgänge für kompakte Wohnungen</h3>

        <p>
          Auch kleinere Wohnungen profitieren von virtuellen Touren. Sie ermöglichen es
          Interessenten, die Raumaufteilung zu verstehen und sich ein Bild vom Potenzial
          zu machen – besonders wichtig bei kompakten City-Apartments.
        </p>

        <h3>Lifestyle-Fotografie</h3>

        <p>
          Für Neubau-Wohnungen bieten wir auch Lifestyle-Fotografie an: Aufnahmen, die
          nicht nur die Räume zeigen, sondern das Lebensgefühl transportieren. Perfekt
          für Social Media und Premium-Inserate.
        </p>

        <h2>Besondere Lagen im 7. Bezirk</h2>

        <h3>Spittelberg</h3>

        <p>
          Das historische Viertel mit Biedermeier-Häusern, Kopfsteinpflaster und dem
          berühmten Weihnachtsmarkt. Wohnungen hier haben besonderen Charme und
          Geschichte.
        </p>

        <h3>Mariahilfer Straße-Nähe</h3>

        <p>
          Zentrale Lage mit direktem Zugang zu Wiens größter Einkaufsstraße. Beliebt
          bei urbanen Singles und Paaren.
        </p>

        <h3>Neubaugasse/Siebensternplatz</h3>

        <p>
          Das Herz des Bezirks mit Cafés, Boutiquen und Galerien. Hochwertige
          Altbauwohnungen in begehrter Lage.
        </p>

        <h2>Der Immobilienmarkt in Neubau</h2>

        <h3>Preissegment</h3>

        <p>
          Neubau gehört zu den gehobenen Innenstadtbezirken:
        </p>

        <ul>
          <li>Durchschnittlicher Quadratmeterpreis: €6.500-9.000</li>
          <li>Sanierte Altbauten: €7.500-10.000</li>
          <li>Dachgeschoss-Wohnungen: €8.000-12.000</li>
        </ul>

        <h3>Nachfrage</h3>

        <p>
          Die Nachfrage im 7. Bezirk ist konstant hoch. Gute Objekte sind schnell vergeben.
          Professionelle Präsentation kann den Unterschied machen zwischen 20 Anfragen und
          200 Anfragen.
        </p>

        <h2>Fotografie-Tipps für Neubau-Wohnungen</h2>

        <h3>Den Charme betonen</h3>

        <p>
          Flügeltüren, Stuck-Rosetten, Fischgrätparkett, Kassettenböden – diese Details
          machen Altbauten besonders und sollten prominent in Szene gesetzt werden.
        </p>

        <h3>Licht ist alles</h3>

        <p>
          Hohe Fenster sind ein Segen für die Fotografie. Wir nutzen das natürliche Licht
          optimal und ergänzen mit professioneller Beleuchtung in dunkleren Bereichen.
        </p>

        <h3>Aufgeräumt, aber bewohnt</h3>

        <p>
          Neubau-Käufer mögen es stylish, aber nicht steril. Ein paar ausgewählte
          Accessoires (Bücher, Pflanzen, Design-Objekte) machen die Wohnung lebendig.
        </p>

        <h2>Referenzen aus dem 7. Bezirk</h2>

        <ul>
          <li>Dachgeschoss-Ausbau Neubaugasse – 120m², Terrasse mit Stadtblick</li>
          <li>Altbauwohnung Spittelberg – 3 Zimmer, vollständig saniert</li>
          <li>Loft Siebensternplatz – ehemaliges Atelier, 4,5m Deckenhöhe</li>
          <li>Kompaktes Apartment Mariahilfer Straße – optimal für Vermietung</li>
        </ul>

        <h2>Jetzt Ihre Neubau-Immobilie präsentieren</h2>

        <p>
          Sie vermarkten eine Wohnung im 7. Bezirk? Wir verstehen den Markt und die
          Zielgruppe. Kontaktieren Sie uns für Fotografie, die Neubau-Käufer anspricht.
        </p>
      </SEOPageLayout>
    </>
  );
}
