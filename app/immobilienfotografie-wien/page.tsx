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
  title: 'Professionelle Immobilienfotografie Wien',
  description:
    'Hochwertige Immobilienfotografie in Wien. Professionelle Fotos für schnelleren Verkauf und höhere Preise. HDR-Technologie, Twilight-Aufnahmen. Ab €290.',
  keywords: [
    'immobilienfotografie wien',
    'immobilien fotograf wien',
    'immobilien photographer',
    'professionelle immobilienfotos',
    'wohnung fotografieren wien',
    'haus fotografie',
    'real estate photography vienna',
    'hdr immobilienfotografie',
  ],
  path: '/immobilienfotografie-wien',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Professionelle Immobilienfotografie Wien',
    description:
      'Hochwertige Immobilienfotografie mit HDR-Technologie für schnelleren Verkauf und höhere Preise. Professionelle Ausrüstung, erfahrene Fotografen.',
    price: '290',
    url: '/immobilienfotografie-wien',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Immobilienfotografie', url: '/immobilienfotografie-wien' },
  ]),
  generateFAQSchema([
    {
      question: 'Was kostet professionelle Immobilienfotografie in Wien?',
      answer:
        'Professionelle Immobilienfotografie in Wien kostet zwischen €290 und €890, abhängig von der Größe der Immobilie und den gewünschten Leistungen wie HDR, Twilight-Aufnahmen oder Drohnenfotos.',
    },
    {
      question: 'Wie viele Fotos bekomme ich bei einem Immobilien-Fotoshooting?',
      answer:
        'Je nach Paket erhalten Sie zwischen 15 und 50 professionell bearbeitete Fotos. Für eine durchschnittliche Wohnung empfehlen wir 20-30 Bilder.',
    },
    {
      question: 'Wie bereite ich meine Immobilie für das Fotoshooting vor?',
      answer:
        'Räumen Sie alle persönlichen Gegenstände weg, sorgen Sie für Sauberkeit und öffnen Sie alle Vorhänge für maximales Tageslicht. Wir senden Ihnen vorab eine detaillierte Checkliste.',
    },
  ]),
];

export default function PageImmobilienfotografie() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Professionelle Immobilienfotografie in Wien"
        heroSubtitle="Hochwertige Fotos, die Ihre Immobilie ins beste Licht rücken und qualifizierte Interessenten anziehen"
        heroImage="/assets/portfolio/altbau-innere-stadt.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Immobilienfotografie', href: '/immobilienfotografie-wien' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>Professionelle Immobilienfotografie in Wien kostet zwischen €290 und €890</strong>{' '}
          und kann den Verkaufspreis Ihrer Immobilie um bis zu 10% steigern. Hochwertige
          Immobilienfotos mit HDR-Technologie sorgen für 118% mehr Online-Aufrufe und verkürzen die
          Vermarktungszeit um durchschnittlich 32%.
        </p>

        <h2>Warum professionelle Immobilienfotografie entscheidend ist</h2>

        <p>
          In der heutigen digitalen Welt beginnt die Suche nach einer Immobilie fast immer online.
          Innerhalb von Sekunden entscheiden potenzielle Käufer oder Mieter, ob sie sich für eine
          Anzeige interessieren – und diese Entscheidung basiert fast ausschließlich auf den Fotos.
          Professionelle Immobilienfotografie ist daher keine Luxusoption, sondern eine strategische
          Investition in den erfolgreichen Verkauf oder die Vermietung Ihrer Immobilie.
        </p>

        <p>
          Studien des National Association of Realtors zeigen, dass 97% aller Immobiliensuchenden das
          Internet als primäre Informationsquelle nutzen. Gleichzeitig verbringen sie durchschnittlich
          nur 20 Sekunden auf einer Anzeige, bevor sie zur nächsten scrollen. In dieser kurzen Zeit
          müssen Ihre Fotos überzeugen – oder die Chance ist vertan.
        </p>

        <h3>Der Unterschied zwischen Amateur- und Profi-Fotos</h3>

        <p>
          Smartphone-Fotos mögen auf den ersten Blick akzeptabel erscheinen, doch der Unterschied zu
          professionellen Aufnahmen ist dramatisch. Professionelle Immobilienfotografie verwendet
          spezielle Ausrüstung, Beleuchtungstechniken und Nachbearbeitung, um Räume größer, heller
          und einladender erscheinen zu lassen – ohne dabei die Realität zu verfälschen.
        </p>

        <h4>Technische Vorteile professioneller Ausrüstung:</h4>

        <ul>
          <li>
            <strong>Weitwinkelobjektive:</strong> Erfassen mehr vom Raum und vermitteln ein
            realistisches Raumgefühl
          </li>
          <li>
            <strong>HDR-Technologie:</strong> Perfekte Belichtung auch bei schwierigen
            Lichtverhältnissen (z.B. Fenster mit Gegenlicht)
          </li>
          <li>
            <strong>Professionelle Stative:</strong> Garantieren scharfe, verwacklungsfreie Bilder
          </li>
          <li>
            <strong>Externe Blitzgeräte:</strong> Sorgen für gleichmäßige, natürlich wirkende
            Ausleuchtung
          </li>
          <li>
            <strong>Farbkalibrierte Monitore:</strong> Gewährleisten farbechte Nachbearbeitung
          </li>
        </ul>

        <h2>Unsere Immobilienfotografie-Leistungen</h2>

        <p>
          Als spezialisierter Immobilienfotograf in Wien bieten wir ein umfassendes Portfolio an
          Fotografie-Dienstleistungen, die auf die Bedürfnisse des Wiener Immobilienmarktes
          zugeschnitten sind.
        </p>

        <h3>HDR-Immobilienfotografie</h3>

        <p>
          High Dynamic Range (HDR) Fotografie ist der Goldstandard in der Immobilienfotografie. Bei
          dieser Technik werden mehrere Aufnahmen mit unterschiedlichen Belichtungen kombiniert, um
          sowohl helle als auch dunkle Bereiche optimal darzustellen. Das Ergebnis: Fotos, auf denen
          sowohl der Raum als auch der Ausblick durch die Fenster perfekt sichtbar sind.
        </p>

        <p>
          Besonders bei Wiener Altbauwohnungen mit hohen Fenstern oder bei Penthouse-Wohnungen mit
          Panoramablick ist HDR-Fotografie unverzichtbar, um die Qualität der Immobilie angemessen zu
          präsentieren.
        </p>

        <h3>Twilight-Fotografie</h3>

        <p>
          Twilight- oder Dämmerungsaufnahmen verleihen Ihrer Immobilie eine besonders eindrucksvolle
          Atmosphäre. In der blauen Stunde, kurz nach Sonnenuntergang, erstrahlen beleuchtete Fenster
          warmgolden vor dem tiefblauen Abendhimmel. Diese Aufnahmen eignen sich besonders für:
        </p>

        <ul>
          <li>Luxusimmobilien und Villen</li>
          <li>Neubauprojekte mit moderner Architektur</li>
          <li>Objekte mit beeindruckender Außenbeleuchtung</li>
          <li>Immobilien mit Pool oder Gartenanlage</li>
        </ul>

        <h3>Interieur- und Detailfotografie</h3>

        <p>
          Neben den klassischen Raumaufnahmen fotografieren wir auch die besonderen Details Ihrer
          Immobilie: hochwertige Einbauküchen, edle Badezimmerausstattung, Stuck-Decken im Altbau
          oder moderne Smart-Home-Installationen. Diese Detailaufnahmen unterstreichen die Qualität
          und den Wert der Immobilie.
        </p>

        <h3>Außen- und Umgebungsfotografie</h3>

        <p>
          Der erste Eindruck zählt – und der beginnt oft mit der Außenansicht. Wir fotografieren die
          Fassade, den Eingangsbereich, Gärten, Terrassen und die Umgebung, um potenziellen Käufern
          einen vollständigen Eindruck der Immobilie und ihrer Lage zu vermitteln.
        </p>

        <h2>Der Ablauf eines Immobilien-Fotoshootings</h2>

        <p>
          Unser professioneller Workflow garantiert Ihnen ein reibungsloses Erlebnis von der ersten
          Anfrage bis zur Lieferung der fertigen Fotos.
        </p>

        <h3>Vorbereitung und Planung</h3>

        <p>
          Nach Ihrer Anfrage kontaktieren wir Sie, um die Details zu besprechen: Größe der
          Immobilie, besondere Anforderungen, gewünschter Liefertermin. Sie erhalten von uns eine
          detaillierte Checkliste zur Vorbereitung der Immobilie, damit am Shooting-Tag alles perfekt
          ist.
        </p>

        <h4>Unsere Vorbereitungs-Checkliste umfasst:</h4>

        <ul>
          <li>Aufräumen und Entrümpeln aller Räume</li>
          <li>Persönliche Gegenstände (Fotos, Medikamente etc.) entfernen</li>
          <li>Alle Lichter funktionsfähig machen</li>
          <li>Badezimmer: Frische Handtücher, keine Pflegeprodukte sichtbar</li>
          <li>Küche: Arbeitsplatten frei räumen, Geschirr wegräumen</li>
          <li>Außenbereich: Mülltonnen verstecken, Gartenmöbel aufstellen</li>
        </ul>

        <h3>Das Shooting vor Ort</h3>

        <p>
          Am vereinbarten Termin kommt unser Fotograf mit professioneller Ausrüstung zu Ihnen. Ein
          typisches Shooting für eine 80m²-Wohnung dauert etwa 1,5 bis 2 Stunden. Während dieser Zeit
          fotografieren wir jeden Raum aus mehreren Perspektiven und verschiedenen
          Belichtungssituationen.
        </p>

        <p>
          Unser Fotograf achtet auf Details, die den Unterschied machen: perfekte Linien, keine
          störenden Spiegelungen, optimale Lichtverhältnisse in jedem Raum. Bei Bedarf werden kleine
          Anpassungen vorgenommen – ein Kissen gerade gerückt, Vorhänge optimal drapiert.
        </p>

        <h3>Professionelle Nachbearbeitung</h3>

        <p>
          Nach dem Shooting beginnt die Nachbearbeitung in unserem Studio. Jedes Foto wird
          individuell bearbeitet: Farbkorrektur, Belichtungsoptimierung, Perspektivkorrektur und
          dezentes Retuschieren störender Elemente. Das Ergebnis sind Bilder, die professionell und
          einladend wirken, dabei aber authentisch bleiben.
        </p>

        <h2>Immobilienfotografie für verschiedene Immobilientypen</h2>

        <p>
          Jede Immobilie hat ihre eigenen Besonderheiten und erfordert einen angepassten
          fotografischen Ansatz.
        </p>

        <h3>Altbauwohnungen in Wien</h3>

        <p>
          Wiener Altbauten mit ihren hohen Decken, Stuck-Verzierungen und Fischgrätparkett sind
          fotografisch besonders reizvoll. Wir wissen, wie man diese historischen Details optimal in
          Szene setzt, ohne den Raum dunkel oder überladen wirken zu lassen.
        </p>

        <h3>Moderne Neubauten</h3>

        <p>
          Bei Neubauten liegt der Fokus auf klaren Linien, modernen Materialien und
          zeitgemäßer Architektur. Wir arbeiten mit präzisen Perspektiven und betonen die moderne
          Ästhetik durch sorgfältige Komposition.
        </p>

        <h3>Einfamilienhäuser und Villen</h3>

        <p>
          Bei größeren Objekten ist eine umfassende Dokumentation wichtig: Außenaufnahmen, Garten,
          Garage, alle Stockwerke. Hier empfehlen wir oft eine Kombination aus klassischer Fotografie
          und Drohnenaufnahmen für einen vollständigen Überblick.
        </p>

        <h3>Gewerbeimmobilien</h3>

        <p>
          Büros, Geschäftslokale und andere Gewerbeobjekte erfordern einen anderen Ansatz als
          Wohnimmobilien. Wir fotografieren Funktionalität, Raumaufteilung und
          Nutzungsmöglichkeiten, um die richtigen gewerblichen Mieter oder Käufer anzusprechen.
        </p>

        <h2>Preise für Immobilienfotografie in Wien</h2>

        <p>
          Unsere Preise sind transparent und fair kalkuliert. Sie zahlen für Qualität, die sich in
          schnelleren Verkäufen und höheren Preisen auszahlt.
        </p>

        <h3>Basis-Paket – €290</h3>

        <p>
          Ideal für Wohnungen bis 60m². Sie erhalten 15-20 professionell bearbeitete HDR-Fotos,
          Lieferung innerhalb von 48 Stunden und unbegrenzte Nutzungsrechte.
        </p>

        <h3>Standard-Paket – €490</h3>

        <p>
          Für Immobilien bis 120m². 25-35 HDR-Fotos, zusätzlich Detailaufnahmen und
          Außenfotografie. Lieferung innerhalb von 24 Stunden.
        </p>

        <h3>Premium-Paket – €890</h3>

        <p>
          Für große Objekte und Luxusimmobilien. Unbegrenzte Fotos, Twilight-Aufnahmen, virtuelle
          Möblierung auf Wunsch und persönliche Beratung zur optimalen Präsentation.
        </p>

        <h2>Der ROI professioneller Immobilienfotografie</h2>

        <p>
          Die Investition in professionelle Fotos zahlt sich mehrfach aus. Hier die wichtigsten
          Kennzahlen:
        </p>

        <ul>
          <li>
            <strong>118% mehr Aufrufe:</strong> Anzeigen mit Profi-Fotos erhalten mehr als doppelt so
            viele Klicks
          </li>
          <li>
            <strong>32% kürzere Vermarktungszeit:</strong> Schnellerer Verkauf bedeutet weniger
            Leerstand und Haltekosten
          </li>
          <li>
            <strong>Bis zu 10% höherer Verkaufspreis:</strong> Professionelle Präsentation
            rechtfertigt höhere Preise
          </li>
          <li>
            <strong>Mehr qualifizierte Anfragen:</strong> Interessenten wissen vorher, was sie
            erwartet
          </li>
        </ul>

        <h2>Warum Immobilien-Photograph Wien?</h2>

        <p>
          Als spezialisierter Immobilienfotograf in Wien verbinden wir technische Expertise mit
          lokalem Marktwissen. Wir kennen die Besonderheiten des Wiener Immobilienmarktes und wissen,
          wie wir Ihre Immobilie optimal präsentieren.
        </p>

        <h3>Unsere Vorteile:</h3>

        <ul>
          <li>Über 500 erfolgreich fotografierte Immobilien in Wien</li>
          <li>Modernste Ausrüstung und Technologie</li>
          <li>Schnelle Lieferung innerhalb von 24-48 Stunden</li>
          <li>Faire, transparente Preise ohne versteckte Kosten</li>
          <li>Persönlicher Service und individuelle Beratung</li>
        </ul>

        <h2>Jetzt Termin vereinbaren</h2>

        <p>
          Überzeugen Sie sich selbst von der Qualität unserer Immobilienfotografie. Kontaktieren Sie
          uns für ein unverbindliches Angebot oder buchen Sie direkt Ihren Fotoshooting-Termin.
        </p>
      </SEOPageLayout>
    </>
  );
}
