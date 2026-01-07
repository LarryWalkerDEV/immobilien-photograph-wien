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
  title: '3D Grundriss & Visualisierung Wien',
  description:
    'Professionelle 3D Grundrisse und Architekturvisualisierungen für Immobilien in Wien. Fotorealistische Renderings, interaktive Grundrisse. Ab €149.',
  keywords: [
    '3d grundriss immobilien',
    'architekturvisualisierung wien',
    '3d visualisierung immobilien',
    'floor plans 3d',
    'grundriss erstellen lassen',
    '3d rendering immobilie',
    'interaktiver grundriss',
    'möblierter grundriss',
  ],
  path: '/3d-grundriss-visualisierung',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '3D Grundriss & Visualisierung',
    description:
      'Professionelle 3D Grundrisse und fotorealistische Visualisierungen für Immobilien. Bessere Verkaufschancen durch anschauliche Darstellung.',
    price: '149',
    url: '/3d-grundriss-visualisierung',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: '3D Grundriss', url: '/3d-grundriss-visualisierung' },
  ]),
  generateFAQSchema([
    {
      question: 'Was kostet ein 3D Grundriss für eine Immobilie?',
      answer:
        'Ein professioneller 3D Grundriss kostet in Wien zwischen €149 und €349, abhängig von Größe, Detailgrad und ob Möblierung gewünscht ist.',
    },
    {
      question: 'Was ist der Unterschied zwischen 2D und 3D Grundrissen?',
      answer:
        '2D Grundrisse zeigen die Raumaufteilung von oben als flache Zeichnung. 3D Grundrisse zeigen eine dreidimensionale, oft möblierte Ansicht, die Raumhöhen und Proportionen besser vermittelt.',
    },
    {
      question: 'Wie lange dauert die Erstellung eines 3D Grundrisses?',
      answer:
        'Die Erstellung dauert je nach Komplexität 2-5 Werktage. Express-Lieferung innerhalb von 24-48 Stunden ist gegen Aufpreis möglich.',
    },
  ]),
];

export default function Page3DGrundriss() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="3D Grundrisse & Visualisierungen für Immobilien"
        heroSubtitle="Anschauliche Darstellungen, die Interessenten begeistern und Verkäufe beschleunigen"
        heroImage="/assets/portfolio/neubau-balkon.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: '3D Grundriss', href: '/3d-grundriss-visualisierung' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>3D Grundrisse für Immobilien kosten in Wien zwischen €149 und €349</strong> und
          steigern das Interesse an Ihrer Immobilie nachweislich um bis zu 60%. Im Gegensatz zu
          flachen 2D-Plänen zeigen 3D Grundrisse Räume in anschaulicher Perspektive – oft mit
          stilvoller Möblierung, die das Potenzial der Immobilie verdeutlicht.
        </p>

        <h2>Warum 3D Grundrisse die Immobilienvermarktung revolutionieren</h2>

        <p>
          Ein Grundriss ist unverzichtbar für jede Immobilienanzeige – aber nicht alle Grundrisse
          sind gleich. Während herkömmliche 2D-Pläne technische Informationen liefern, sprechen 3D
          Grundrisse auch die emotionale Seite der Kaufentscheidung an. Sie helfen Interessenten,
          sich das Leben in der Immobilie vorzustellen.
        </p>

        <p>
          Studien zeigen, dass Immobilienanzeigen mit 3D Grundrissen bis zu 60% mehr Engagement
          erhalten. Die räumliche Darstellung macht abstrakte Quadratmeterzahlen greifbar und hilft
          besonders Menschen, die Schwierigkeiten haben, 2D-Pläne zu interpretieren.
        </p>

        <h3>2D vs. 3D Grundrisse: Die wichtigsten Unterschiede</h3>

        <h4>2D Grundrisse</h4>

        <ul>
          <li>Technische Draufsicht von oben</li>
          <li>Zeigt Wände, Türen, Fenster als Linien</li>
          <li>Raumgrößen und Proportionen schwer einzuschätzen</li>
          <li>Keine Höheninformation</li>
          <li>Oft schwer zu interpretieren für Laien</li>
        </ul>

        <h4>3D Grundrisse</h4>

        <ul>
          <li>Dreidimensionale Perspektive</li>
          <li>Realistische Darstellung mit Texturen</li>
          <li>Intuitive Einschätzung von Raumgrößen</li>
          <li>Raumhöhen sichtbar</li>
          <li>Sofort verständlich für jeden Betrachter</li>
        </ul>

        <h2>Unsere 3D Grundriss-Leistungen</h2>

        <p>
          Wir bieten verschiedene Arten von Grundrissen und Visualisierungen an, passend zu
          unterschiedlichen Anforderungen und Budgets.
        </p>

        <h3>Möblierte 3D Grundrisse</h3>

        <p>
          Unsere beliebteste Option: Fotorealistische 3D-Ansichten mit stilvoller, passender
          Möblierung. Die Möbel werden sorgfältig ausgewählt, um zum Stil der Immobilie zu passen
          und das Potenzial jedes Raums optimal zu zeigen.
        </p>

        <p>
          Vorteile möblierter 3D Grundrisse:
        </p>

        <ul>
          <li>
            <strong>Emotionale Ansprache:</strong> Interessenten können sich sofort vorstellen, wie
            sie in der Immobilie leben würden
          </li>
          <li>
            <strong>Größenvergleich:</strong> Möbel geben einen realistischen Maßstab für
            Raumgrößen
          </li>
          <li>
            <strong>Nutzungsideen:</strong> Zeigen Sie, wie verschiedene Bereiche genutzt werden
            können
          </li>
          <li>
            <strong>Leerstands-Lösung:</strong> Leere Räume wirken einladend und bewohnbar
          </li>
        </ul>

        <h3>Unmöblierte 3D Grundrisse</h3>

        <p>
          Für Interessenten, die ihre eigenen Möbel mitbringen und die leeren Räume sehen möchten.
          Diese Variante zeigt Böden, Wände und architektonische Details ohne Ablenkung durch
          Einrichtung.
        </p>

        <h3>Interaktive 3D Grundrisse</h3>

        <p>
          Die Premium-Option: Interaktive Grundrisse, die im Browser gedreht und gezoomt werden
          können. Nutzer können verschiedene Möblierungsoptionen durchschalten oder Farben und
          Materialien ändern – ideal für Neubauprojekte mit Ausstattungsvarianten.
        </p>

        <h3>2D Grundrisse (Professional)</h3>

        <p>
          Wenn ein klassischer 2D-Grundriss gewünscht ist, erstellen wir professionelle,
          maßstabsgetreue Pläne mit einheitlichem Design, klarer Beschriftung und ansprechender
          Optik.
        </p>

        <h2>Architekturvisualisierung für Neubauprojekte</h2>

        <p>
          Bei Neubauprojekten, die noch nicht gebaut sind, sind fotorealistische Visualisierungen
          unverzichtbar für den Vorverkauf. Wir erstellen:
        </p>

        <h3>Innenraum-Renderings</h3>

        <p>
          Fotorealistische Darstellungen von Innenräumen auf Basis der Architekturpläne. Diese
          Bilder zeigen, wie die fertigen Räume aussehen werden – mit Materialien, Beleuchtung und
          Möblierung.
        </p>

        <h4>Was wir benötigen:</h4>

        <ul>
          <li>Architekturpläne (DWG, PDF oder ähnlich)</li>
          <li>Materialauswahl (Bodenbeläge, Wandfarben)</li>
          <li>Stilrichtung für Möblierung</li>
          <li>Ggf. Referenzbilder für gewünschte Atmosphäre</li>
        </ul>

        <h3>Außenansicht-Renderings</h3>

        <p>
          Visualisierungen der Fassade und Außenbereiche, die zeigen, wie das fertige Gebäude im
          Kontext seiner Umgebung wirken wird. Mit realistischer Bepflanzung, Beleuchtung und
          Atmosphäre.
        </p>

        <h3>Luftbild-Visualisierungen</h3>

        <p>
          Für größere Projekte erstellen wir Vogelperspektive-Renderings, die das gesamte Areal
          zeigen – perfekt für Wohnanlagen oder Quartiersentwicklungen.
        </p>

        <h2>Der Erstellungsprozess</h2>

        <h3>Schritt 1: Briefing und Unterlagen</h3>

        <p>
          Sie liefern uns die Grundlage: vorhandene Grundrisse (egal ob Handskizze, PDF oder
          Architektenplan), Fotos der Immobilie (falls vorhanden) und Ihre Wünsche bezüglich
          Stil und Möblierung.
        </p>

        <h3>Schritt 2: Digitalisierung</h3>

        <p>
          Wir digitalisieren den Grundriss maßstabsgetreu und modellieren die Räume in 3D-Software.
          Jede Wand, jede Tür, jedes Fenster wird präzise nachgebaut.
        </p>

        <h3>Schritt 3: Texturierung und Möblierung</h3>

        <p>
          Bodenbeläge, Wandfarben und Materialien werden hinzugefügt. Bei möblierten Grundrissen
          wählen wir passende Möbel aus unserer umfangreichen Bibliothek.
        </p>

        <h3>Schritt 4: Rendering und Finalisierung</h3>

        <p>
          Das finale Bild wird gerendert – ein rechenintensiver Prozess, der fotorealistische
          Qualität erzeugt. Nach einer Korrekturschleife erhalten Sie die finalen Dateien.
        </p>

        <h2>Preise für 3D Grundrisse</h2>

        <h3>Standard 3D Grundriss – €149</h3>

        <p>
          Für Wohnungen bis 80m². Dreidimensionale Ansicht mit Boden- und Wandtexturen, ohne
          Möblierung. Ideal als Ergänzung zu Fotos.
        </p>

        <h3>Möblierter 3D Grundriss – €249</h3>

        <p>
          Für Wohnungen bis 100m². Vollständig möblierte, fotorealistische Darstellung.
          Stilauswahl aus: Modern, Klassisch, Skandinavisch, Industrial.
        </p>

        <h3>Premium Visualisierung – €349</h3>

        <p>
          Für anspruchsvolle Objekte. Höchste Detailstufe, individuelle Möbelauswahl, mehrere
          Perspektiven inklusive.
        </p>

        <h3>Paket: 3D Grundriss + 2D Plan – €199</h3>

        <p>
          Beides aus einer Hand: Ein professioneller 2D-Grundriss plus ein 3D-Grundriss zum
          Vorteilspreis.
        </p>

        <h2>Anwendungsbereiche</h2>

        <h3>Immobilienverkauf</h3>

        <p>
          3D Grundrisse sind das perfekte Ergänzungsmaterial zu Fotos und virtuellen Touren. Sie
          helfen Interessenten, die Raumaufteilung zu verstehen, bevor sie zur Besichtigung kommen.
        </p>

        <h3>Vermietung</h3>

        <p>
          Besonders bei leerstehenden Wohnungen machen möblierte 3D Grundrisse den entscheidenden
          Unterschied. Sie zeigen das Potenzial, das Interessenten in kahlen Räumen oft nicht
          erkennen.
        </p>

        <h3>Neubauprojekte</h3>

        <p>
          Für den Vorverkauf von Neubauwohnungen sind 3D Visualisierungen unverzichtbar. Sie
          verkaufen Wohnungen, die noch gar nicht existieren.
        </p>

        <h3>Renovierungsplanung</h3>

        <p>
          Zeigen Sie Käufern das Potenzial einer renovierungsbedürftigen Immobilie mit
          Visualisierungen des möglichen Endzustands.
        </p>

        <h2>Integration in Ihre Marketingmaterialien</h2>

        <h3>Lieferformate</h3>

        <p>
          Sie erhalten Ihre 3D Grundrisse in allen gängigen Formaten:
        </p>

        <ul>
          <li>
            <strong>JPG/PNG:</strong> Für Web und Immobilienportale
          </li>
          <li>
            <strong>TIFF:</strong> Für hochwertige Printprodukte
          </li>
          <li>
            <strong>PDF:</strong> Für Exposés
          </li>
          <li>
            <strong>Auf Wunsch:</strong> Transparenter Hintergrund für flexible Einbindung
          </li>
        </ul>

        <h3>Empfohlene Verwendung</h3>

        <ul>
          <li>Als zweites oder drittes Bild in Immobilienportalen</li>
          <li>Im Exposé nach den Fotos</li>
          <li>In Social-Media-Posts als aufmerksamkeitsstarkes Visual</li>
          <li>Auf Ihrer Website als Teil der Objektdarstellung</li>
        </ul>

        <h2>Warum 3D Grundrisse von uns?</h2>

        <h3>Schnelle Lieferung</h3>

        <p>
          Standard-Lieferzeit: 3-5 Werktage. Express-Option: 24-48 Stunden gegen Aufpreis.
        </p>

        <h3>Konsistente Qualität</h3>

        <p>
          Jeder Grundriss wird nach unseren hohen Qualitätsstandards erstellt. Einheitlicher Stil
          für Ihr gesamtes Portfolio.
        </p>

        <h3>Korrekturschleifen inklusive</h3>

        <p>
          Eine Korrekturschleife ist im Preis enthalten. Weitere Änderungen nach Absprache.
        </p>

        <h3>Kombination mit anderen Services</h3>

        <p>
          Kombinieren Sie 3D Grundrisse mit unserer Fotografie, 360°-Rundgängen oder
          Drohnenaufnahmen für ein vollständiges Marketingpaket.
        </p>

        <h2>Jetzt 3D Grundriss anfragen</h2>

        <p>
          Senden Sie uns Ihre vorhandenen Pläne und erhalten Sie ein unverbindliches Angebot.
          Wir beraten Sie gerne zur optimalen Darstellung Ihrer Immobilie.
        </p>
      </SEOPageLayout>
    </>
  );
}
