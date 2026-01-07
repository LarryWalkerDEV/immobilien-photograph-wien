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
  title: 'Drohnenaufnahmen für Immobilien Wien',
  description:
    'Professionelle Drohnenaufnahmen und Luftbilder für Immobilien in Wien. Lizenzierte Piloten, 4K-Video, Genehmigungen inklusive. Eindrucksvolle Perspektiven ab €190.',
  keywords: [
    'drohnenaufnahmen immobilien',
    'luftaufnahmen immobilien wien',
    'drohne immobilienfotografie',
    'aerial photography real estate',
    'drohnenfotos wien',
    'luftbilder immobilien',
    'immobilien drohne',
    'drone photography vienna',
  ],
  path: '/drohnenaufnahmen-immobilien-wien',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Drohnenaufnahmen für Immobilien',
    description:
      'Professionelle Drohnenaufnahmen und Luftbilder für Immobilien in Wien. Atemberaubende Perspektiven für Ihre Immobilienvermarktung.',
    price: '190',
    url: '/drohnenaufnahmen-immobilien-wien',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Drohnenaufnahmen', url: '/drohnenaufnahmen-immobilien-wien' },
  ]),
  generateFAQSchema([
    {
      question: 'Sind Drohnenaufnahmen in Wien erlaubt?',
      answer:
        'Ja, mit entsprechender Genehmigung und Versicherung. Unsere Piloten sind EU-lizenziert und wir kümmern uns um alle erforderlichen Genehmigungen für Ihren Standort.',
    },
    {
      question: 'Was kosten Drohnenaufnahmen für Immobilien?',
      answer:
        'Drohnenaufnahmen für Immobilien kosten in Wien ab €190 für Fotos und ab €290 inklusive 4K-Video. Der Preis hängt von Umfang und Standort ab.',
    },
    {
      question: 'Bei welchem Wetter können Drohnenaufnahmen gemacht werden?',
      answer:
        'Drohnenflüge sind bei trockenem Wetter und Windgeschwindigkeiten unter 30 km/h möglich. Bei schlechtem Wetter vereinbaren wir einen Ersatztermin ohne Zusatzkosten.',
    },
  ]),
];

export default function PageDrohnenaufnahmen() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Drohnenaufnahmen für Immobilien in Wien"
        heroSubtitle="Atemberaubende Luftbilder und Videos, die Ihre Immobilie aus einzigartiger Perspektive zeigen"
        heroImage="/assets/portfolio/villa-hietzing.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Drohnenaufnahmen', href: '/drohnenaufnahmen-immobilien-wien' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>Drohnenaufnahmen für Immobilien in Wien kosten ab €190</strong> und bieten
          einzigartige Perspektiven, die mit herkömmlicher Fotografie nicht möglich sind. Luftbilder
          steigern die Attraktivität von Immobilienanzeigen um bis zu 68% und sind besonders
          wirkungsvoll für Häuser mit Grundstück, Neubauprojekte und Luxusimmobilien.
        </p>

        <h2>Warum Drohnenaufnahmen für Immobilien?</h2>

        <p>
          Drohnenaufnahmen revolutionieren die Art, wie Immobilien präsentiert werden. Aus der
          Vogelperspektive erhält der Betrachter einen völlig neuen Eindruck von der Immobilie, ihrer
          Umgebung und den räumlichen Verhältnissen. Was früher nur mit teuren Helikopterflügen
          möglich war, ist heute dank moderner Drohnentechnologie erschwinglich und hocheffektiv.
        </p>

        <p>
          Besonders bei Immobilien mit Außenbereich – Einfamilienhäusern, Villen, Baugrundstücken
          oder gewerblichen Objekten – sind Luftaufnahmen unverzichtbar geworden. Sie zeigen das
          gesamte Grundstück, die Nachbarschaft und wichtige Standortfaktoren auf einen Blick.
        </p>

        <h3>Vorteile von Drohnen-Immobilienfotografie</h3>

        <p>
          Die Investition in professionelle Drohnenaufnahmen bietet messbare Vorteile für Ihre
          Immobilienvermarktung:
        </p>

        <ul>
          <li>
            <strong>Einzigartige Perspektiven:</strong> Zeigen Sie Ihre Immobilie aus Blickwinkeln,
            die vom Boden aus unmöglich sind
          </li>
          <li>
            <strong>Grundstücksübersicht:</strong> Visualisieren Sie Grundstücksgrenzen, Garten,
            Pool und Außenanlagen
          </li>
          <li>
            <strong>Umgebungsdarstellung:</strong> Demonstrieren Sie die Lage, Nachbarschaft und
            Infrastruktur
          </li>
          <li>
            <strong>Emotionale Wirkung:</strong> Cineastische Luftaufnahmen erzeugen ein
            Wow-Erlebnis bei Interessenten
          </li>
          <li>
            <strong>Differenzierung:</strong> Heben Sie sich von der Konkurrenz ab, die nur
            Bodenaufnahmen anbietet
          </li>
        </ul>

        <h2>Unsere Drohnen-Dienstleistungen</h2>

        <p>
          Als spezialisierter Anbieter für Immobilien-Drohnenfotografie in Wien bieten wir ein
          umfassendes Leistungsportfolio für verschiedene Anforderungen.
        </p>

        <h3>Drohnen-Fotos</h3>

        <p>
          Hochauflösende Luftbilder in bis zu 48 Megapixel Auflösung. Perfekt für
          Immobilieninserate, Exposés und Marketingmaterialien. Wir fotografieren aus verschiedenen
          Höhen und Winkeln, um die optimalen Perspektiven zu finden.
        </p>

        <h4>Typische Aufnahmeperspektiven:</h4>

        <ul>
          <li>
            <strong>Frontalansicht:</strong> Klassische Fassadenaufnahme aus erhöhter Position
          </li>
          <li>
            <strong>Schrägansicht:</strong> Zeigt Dach, Fassade und Grundstück gleichzeitig
          </li>
          <li>
            <strong>Vogelperspektive:</strong> Senkrechte Aufnahme von oben für
            Grundstücksübersichten
          </li>
          <li>
            <strong>Umgebungsansicht:</strong> Weitwinkelaufnahmen, die den Standort im Kontext
            zeigen
          </li>
        </ul>

        <h3>Drohnen-Videos</h3>

        <p>
          Cineastische 4K-Videoaufnahmen, die Ihre Immobilie in Bewegung zeigen. Dynamische
          Kamerafahrten um das Gebäude, Aufnahmen des Umfelds und smooth übergehende Szenen
          erzeugen einen professionellen Videoclip, der Emotionen weckt.
        </p>

        <p>
          Unsere Drohnen-Videos eignen sich hervorragend für:
        </p>

        <ul>
          <li>Social-Media-Marketing (Instagram, Facebook, LinkedIn)</li>
          <li>YouTube-Exposés und Immobilienvideos</li>
          <li>Präsentationen für Investoren</li>
          <li>Website-Header und Hintergrundvideos</li>
        </ul>

        <h3>Kombipakete Drohne + Innenaufnahmen</h3>

        <p>
          Die wirkungsvollste Präsentation kombiniert Luftaufnahmen mit professionellen
          Innenaufnahmen und 360°-Rundgängen. Wir bieten attraktive Kombi-Pakete, die alle Aspekte
          der Immobilienvisualisierung abdecken.
        </p>

        <h2>Rechtliche Aspekte und Genehmigungen in Wien</h2>

        <p>
          Drohnenflüge unterliegen strengen gesetzlichen Regelungen. Als professioneller Anbieter
          kümmern wir uns um alle erforderlichen Genehmigungen und Versicherungen, sodass Sie sich um
          nichts kümmern müssen.
        </p>

        <h3>EU-Drohnenverordnung und Kategorien</h3>

        <p>
          Seit 2021 gilt die EU-Drohnenverordnung, die Drohnenflüge in drei Kategorien einteilt:
          Open, Specific und Certified. Die meisten Immobilienaufnahmen fallen in die Kategorie
          "Open" oder "Specific", je nach Standort und Umgebung.
        </p>

        <h3>Unsere Qualifikationen</h3>

        <ul>
          <li>EU-Fernpiloten-Lizenz (A1/A3 und A2)</li>
          <li>Austro Control Betriebsgenehmigung für spezifische Kategorie</li>
          <li>Drohnen-Haftpflichtversicherung mit €3 Mio. Deckungssumme</li>
          <li>Registrierung als Drohnenbetreiber</li>
        </ul>

        <h3>Flugverbotszonen in Wien</h3>

        <p>
          In Wien gibt es mehrere Bereiche mit eingeschränktem Luftraum, insbesondere in der Nähe
          des Flughafens und in bestimmten städtischen Gebieten. Wir prüfen vor jedem Auftrag die
          Flugmöglichkeiten an Ihrem Standort und beantragen bei Bedarf die erforderlichen
          Genehmigungen bei Austro Control.
        </p>

        <h2>Unsere Drohnen-Ausrüstung</h2>

        <p>
          Wir setzen auf professionelle Drohnen der neuesten Generation, die höchste Bildqualität
          und sichere Flüge garantieren.
        </p>

        <h3>DJI Mavic 3 Pro</h3>

        <p>
          Unser Hauptwerkzeug für Immobilien-Luftaufnahmen. Mit Hasselblad-Kamera, 4/3 CMOS-Sensor
          und 5.1K-Videoaufnahme liefert diese Drohne außergewöhnliche Bildqualität bei kompakter
          Größe.
        </p>

        <h4>Technische Daten:</h4>

        <ul>
          <li>20 Megapixel Fotos / 5.1K Video</li>
          <li>Dreifach-Kamerasystem für verschiedene Brennweiten</li>
          <li>43 Minuten Flugzeit</li>
          <li>Omnidirektionale Hinderniserkennung</li>
          <li>HDR-Fotografie und -Video</li>
        </ul>

        <h3>DJI Inspire 2 (für Premium-Projekte)</h3>

        <p>
          Für Luxusimmobilien und anspruchsvolle Projekte setzen wir die DJI Inspire 2 mit
          X5S-Kamera ein. Diese professionelle Plattform bietet kinoreife Bildqualität und maximale
          Flexibilität.
        </p>

        <h2>Ablauf einer Drohnenaufnahme</h2>

        <p>
          Unser strukturierter Workflow garantiert reibungslose Abläufe und optimale Ergebnisse.
        </p>

        <h3>1. Standortprüfung</h3>

        <p>
          Nach Ihrer Anfrage prüfen wir den Standort: Liegt er in einer Flugverbotszone? Welche
          Genehmigungen sind erforderlich? Gibt es Hindernisse wie Hochspannungsleitungen oder hohe
          Bäume? Diese Vorabprüfung ist kostenlos.
        </p>

        <h3>2. Terminplanung und Wettercheck</h3>

        <p>
          Drohnenflüge sind wetterabhängig. Wir planen den Termin so, dass optimale Bedingungen
          herrschen: kein Regen, mäßiger Wind, gutes Licht. Bei ungünstigem Wetter verschieben wir
          kostenfrei.
        </p>

        <h3>3. Flug und Aufnahme</h3>

        <p>
          Vor Ort führen wir systematische Sicherheitschecks durch, bevor wir mit den Aufnahmen
          beginnen. Ein typischer Drohneneinsatz dauert 30-60 Minuten, abhängig vom Umfang.
        </p>

        <h3>4. Nachbearbeitung</h3>

        <p>
          Die Rohdaten werden professionell bearbeitet: Farbkorrektur, Kontrastverstärkung,
          Ausschnitt-Optimierung. Bei Videos fügen wir Übergänge und ggf. Musik hinzu.
        </p>

        <h3>5. Lieferung</h3>

        <p>
          Sie erhalten Ihre Aufnahmen innerhalb von 24-48 Stunden per Download-Link in voller
          Auflösung, optimiert für Web und Print.
        </p>

        <h2>Preise für Drohnenaufnahmen in Wien</h2>

        <p>
          Unsere Drohnen-Preise sind kalkuliert auf faire Vergütung bei maximaler Qualität.
        </p>

        <h3>Drohnen-Fotos – ab €190</h3>

        <p>
          10-15 hochauflösende Luftbilder aus verschiedenen Perspektiven und Höhen. Professionelle
          Nachbearbeitung, Lieferung in Web- und Print-Auflösung.
        </p>

        <h3>Drohnen-Video – ab €290</h3>

        <p>
          60-90 Sekunden 4K-Video mit professionellem Schnitt. Verschiedene Flugmanöver und
          Perspektiven, lizenzfreie Hintergrundmusik optional.
        </p>

        <h3>Kombi-Paket Foto + Video – €390</h3>

        <p>
          Das Beste aus beiden Welten: Hochwertige Fotos und cineastisches Video in einem Termin.
          Ideal für eine umfassende Marketingkampagne.
        </p>

        <h2>Ideale Einsatzgebiete für Drohnenaufnahmen</h2>

        <h3>Einfamilienhäuser und Villen</h3>

        <p>
          Bei Häusern mit Garten sind Drohnenaufnahmen quasi ein Muss. Sie zeigen das gesamte
          Grundstück, die Größe des Gartens, Pool, Terrassen und das Umfeld aus der Perspektive,
          die Käufer überzeugt.
        </p>

        <h3>Neubauprojekte und Baustellen</h3>

        <p>
          Dokumentieren Sie den Baufortschritt aus der Luft oder präsentieren Sie fertige
          Neubauprojekte mit eindrucksvollen Gesamtansichten des Komplexes.
        </p>

        <h3>Gewerbeimmobilien</h3>

        <p>
          Bürogebäude, Lagerhallen, Produktionsstätten – Drohnenaufnahmen vermitteln Größe und
          Lage von Gewerbeimmobilien besser als jede andere Aufnahmetechnik.
        </p>

        <h3>Grundstücke und Bauland</h3>

        <p>
          Bei unbebauten Grundstücken sind Drohnenaufnahmen oft die einzige Möglichkeit, Größe und
          Zuschnitt anschaulich darzustellen.
        </p>

        <h2>Häufig gestellte Fragen</h2>

        <h3>Wie nah kann die Drohne an das Haus fliegen?</h3>

        <p>
          Mit unseren professionellen Drohnen können wir sehr nah an Gebäude heranfliegen und
          dabei sichere Abstände einhalten. Die Hinderniserkennung verhindert Kollisionen.
        </p>

        <h3>Was passiert bei schlechtem Wetter?</h3>

        <p>
          Bei Regen, starkem Wind oder schlechter Sicht verschieben wir den Termin kostenfrei auf
          einen besseren Tag. Sicherheit hat immer Priorität.
        </p>

        <h3>Kann ich die Aufnahmen für alle Zwecke verwenden?</h3>

        <p>
          Ja, Sie erhalten uneingeschränkte Nutzungsrechte für alle kommerziellen Zwecke:
          Inserate, Website, Social Media, Print-Exposés.
        </p>

        <h2>Jetzt Drohnenaufnahmen anfragen</h2>

        <p>
          Heben Sie Ihre Immobilienvermarktung auf ein neues Level. Kontaktieren Sie uns für ein
          unverbindliches Angebot und lassen Sie sich von der Wirkung professioneller
          Drohnenaufnahmen überzeugen.
        </p>
      </SEOPageLayout>
    </>
  );
}
