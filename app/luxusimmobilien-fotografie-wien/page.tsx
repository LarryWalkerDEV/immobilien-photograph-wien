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
  title: 'Luxusimmobilien Fotografie Wien',
  description:
    'Premium Immobilienfotografie für Luxusobjekte in Wien. Penthouse, Villen, High-End Wohnungen. Twilight, Drohne, 360° Tour. Referenzen auf Anfrage.',
  keywords: [
    'luxusimmobilien fotografie',
    'penthouse fotografie wien',
    'high-end immobilien marketing',
    'luxury real estate photography',
    'villa fotografie',
    'premium immobilienfotografie',
    'exklusive immobilien wien',
    'luxury property vienna',
  ],
  path: '/luxusimmobilien-fotografie-wien',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Luxusimmobilien Fotografie',
    description:
      'Premium Fotografie und Visualisierung für Luxusimmobilien in Wien. Twilight-Aufnahmen, Drohnenbilder, 360°-Touren für anspruchsvollste Objekte.',
    price: '1890',
    url: '/luxusimmobilien-fotografie-wien',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxusimmobilien', url: '/luxusimmobilien-fotografie-wien' },
  ]),
  generateFAQSchema([
    {
      question: 'Was kostet Luxusimmobilien-Fotografie in Wien?',
      answer:
        'Premium Luxusimmobilien-Pakete beginnen bei €1.890 und umfassen Fotografie, 360°-Tour, Drohnenaufnahmen und Twilight-Shooting. Der Preis variiert je nach Objektgröße und gewünschten Leistungen.',
    },
    {
      question: 'Was unterscheidet Luxusimmobilien-Fotografie von Standard-Fotografie?',
      answer:
        'Luxusimmobilien-Fotografie verwendet Premium-Ausrüstung, mehr Zeit pro Aufnahme, spezielle Lichttechnik, Twilight-Aufnahmen und eine aufwendigere Nachbearbeitung. Der Fokus liegt auf der Inszenierung von Exklusivität und Lifestyle.',
    },
    {
      question: 'Wird Diskretion gewährleistet bei prominenten Verkäufern?',
      answer:
        'Absolut. Wir arbeiten regelmäßig mit diskreten Off-Market-Verkäufen. Alle Mitarbeiter unterliegen Verschwiegenheitspflicht und Bildmaterial wird nur nach ausdrücklicher Freigabe verwendet.',
    },
  ]),
];

export default function PageLuxusimmobilien() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Luxusimmobilien Fotografie in Wien"
        heroSubtitle="Premium Visualisierung für außergewöhnliche Objekte – weil Exklusivität sichtbar sein muss"
        heroImage="/assets/portfolio/penthouse-doebling.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Luxusimmobilien', href: '/luxusimmobilien-fotografie-wien' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>Luxusimmobilien-Fotografie in Wien kostet ab €1.890</strong> für ein Premium-Paket
          mit Fotografie, 360°-Tour, Drohnenaufnahmen und Twilight-Shooting. High-End Immobilien
          verdienen eine Präsentation, die ihrem Wert entspricht – professionelle Visualisierung ist
          dabei entscheidend, um internationale Käufer zu erreichen und den Verkaufspreis zu
          maximieren.
        </p>

        <h2>Die besondere Herausforderung von Luxusimmobilien</h2>

        <p>
          Luxusimmobilien sind keine gewöhnlichen Objekte – und sie verdienen keine gewöhnliche
          Präsentation. Ein Penthouse mit Blick über die Wiener Skyline, eine Gründerzeit-Villa in
          Hietzing oder ein modernes Architektenhaus in Döbling: Diese Immobilien sprechen eine
          anspruchsvolle Käuferschicht an, die höchste Qualität in allen Aspekten erwartet.
        </p>

        <p>
          Die Fotografieund Vermarktung einer Luxusimmobilie unterscheidet sich fundamental von
          Standard-Immobilienfotografie. Es geht nicht nur darum, Räume zu dokumentieren, sondern
          ein Lifestyle zu inszenieren, eine Geschichte zu erzählen und Emotionen zu wecken.
        </p>

        <h3>Was macht Luxusimmobilien-Fotografie anders?</h3>

        <h4>Mehr Zeit, mehr Perfektion</h4>

        <p>
          Für ein Luxusobjekt nehmen wir uns einen halben bis ganzen Tag Zeit – nicht nur 2-3
          Stunden wie bei Standard-Aufträgen. Jedes Detail wird perfekt inszeniert, jede Aufnahme
          sorgfältig komponiert. Das Licht muss stimmen, die Perspektive muss die Großzügigkeit
          betonen, die Materialqualität muss sichtbar werden.
        </p>

        <h4>Premium Ausrüstung</h4>

        <p>
          Für Luxusobjekte setzen wir unsere beste Ausrüstung ein:
        </p>

        <ul>
          <li>Mittelformat-Kamera mit 100+ Megapixel Auflösung</li>
          <li>Tilt-Shift-Objektive für perfekte Perspektivkorrektur</li>
          <li>Professionelle Studioblitz-Systeme</li>
          <li>Cinema-Drohnen für filmreife Luftaufnahmen</li>
        </ul>

        <h4>Aufwendige Nachbearbeitung</h4>

        <p>
          Jedes Bild wird individuell nachbearbeitet – nicht nur automatisiert optimiert. Farben
          werden perfektioniert, störende Elemente entfernt, die Atmosphäre verfeinert. Das
          Ergebnis: Bilder, die in Hochglanz-Magazinen bestehen könnten.
        </p>

        <h2>Das Luxusimmobilien Premium-Paket</h2>

        <p>
          Unser Premium-Paket für Luxusimmobilien ist ein Rundum-Service für anspruchsvollste
          Objekte.
        </p>

        <h3>Professionelle Fotografie (unbegrenzt)</h3>

        <p>
          Keine Beschränkung bei der Anzahl der Fotos. Wir fotografieren jeden Raum aus optimalen
          Perspektiven, Details, Architekturelemente, Materialien. Sie erhalten alle gelungenen
          Aufnahmen – typischerweise 50-100+ Bilder.
        </p>

        <h3>Twilight-Fotografie</h3>

        <p>
          Die "blaue Stunde" nach Sonnenuntergang verleiht Luxusimmobilien eine magische Atmosphäre.
          Warmgelb beleuchtete Fenster vor tiefblauem Himmel – diese Aufnahmen sind spektakulär und
          heben Ihr Objekt von der Masse ab.
        </p>

        <h4>Was Twilight-Aufnahmen so besonders macht:</h4>

        <ul>
          <li>Dramatischer Kontrast zwischen Innen- und Außenlicht</li>
          <li>Poolbeleuchtung, Gartenlicht, Architekturbeleuchtung kommen zur Geltung</li>
          <li>Die Stadt im Hintergrund leuchtet</li>
          <li>Ein emotionales, begehrenswertes Bild entsteht</li>
        </ul>

        <h3>360° Virtual Tour (Matterport Premium)</h3>

        <p>
          Ein vollständiger Matterport-Rundgang ermöglicht internationalen Interessenten eine
          immersive Besichtigung von überall auf der Welt. Mit Dollhouse-Ansicht, Grundriss und
          Measurement-Tools.
        </p>

        <h3>Drohnenaufnahmen</h3>

        <p>
          Luftaufnahmen zeigen das Anwesen im Kontext: das Grundstück, die Nachbarschaft, die Lage.
          Besonders bei Villen und Häusern mit Garten unverzichtbar.
        </p>

        <h3>Cinematic Video</h3>

        <p>
          Ein 2-3 minütiges, professionell geschnittenes Video mit Musik, das die Immobilie
          emotional inszeniert. Für Social Media, Landingpages und exklusive Exposés.
        </p>

        <h2>Zusätzliche Luxus-Services</h2>

        <h3>Virtual Staging</h3>

        <p>
          Leere Luxuswohnungen können virtuell mit hochwertigen Möbeln ausgestattet werden. Wir
          arbeiten mit fotorealistischen Renderings, die das Potenzial zeigen, ohne physisches
          Staging.
        </p>

        <h3>Home Staging Beratung</h3>

        <p>
          In Zusammenarbeit mit professionellen Home Stagern bereiten wir Ihr Objekt optimal für
          das Shooting vor. Auf Wunsch organisieren wir auch das physische Staging.
        </p>

        <h3>Premium Print-Materialien</h3>

        <p>
          Hochwertige Exposé-Designs, gedruckt auf Premium-Papier. Für exklusive Verkäufe, bei
          denen auch die haptische Qualität der Unterlagen zählt.
        </p>

        <h3>Off-Market und Diskretion</h3>

        <p>
          Für Verkäufer, die Diskretion wünschen, arbeiten wir unter strengster
          Vertraulichkeit. Keine Fotos ohne explizite Freigabe, keine Erkennbarkeit des
          Eigentümers.
        </p>

        <h2>Für welche Objekte eignet sich das Luxus-Paket?</h2>

        <h3>Penthouse-Wohnungen</h3>

        <p>
          Dachgeschosswohnungen mit Terrasse und Weitblick in Top-Lagen. Hier ist die View oft
          das wichtigste Verkaufsargument – wir inszenieren sie perfekt.
        </p>

        <h3>Gründerzeit-Villen</h3>

        <p>
          Historische Villen in Hietzing, Döbling oder Währing mit Stuck, Parkettböden und
          großzügigen Gärten. Diese Architekturschätze verdienen eine würdige Präsentation.
        </p>

        <h3>Architekten-Häuser</h3>

        <p>
          Moderne, individuell geplante Häuser mit außergewöhnlicher Architektur. Hier
          fotografieren wir nicht nur Immobilien, sondern Kunst.
        </p>

        <h3>Exklusive Altbauwohnungen</h3>

        <p>
          Beletage-Wohnungen in repräsentativen Häusern der Inneren Stadt und angrenzenden
          Bezirken. Geschichte trifft auf Lifestyle.
        </p>

        <h2>Internationale Käufer erreichen</h2>

        <p>
          Luxusimmobilien in Wien sprechen oft ein internationales Publikum an. Käufer aus
          Deutschland, der Schweiz, dem Nahen Osten oder Asien suchen nach besonderen Objekten.
          Diese Käufer können nicht einfach vorbeikommen – sie entscheiden oft auf Basis der
          Online-Präsentation.
        </p>

        <h3>Was internationale Käufer erwarten</h3>

        <ul>
          <li>Hochauflösende, professionelle Fotos</li>
          <li>Virtuelle 3D-Touren für realistische Besichtigungen</li>
          <li>Englischsprachige Beschreibungen</li>
          <li>Videomaterial für eine emotionale Ansprache</li>
          <li>Grundrisse mit Maßangaben</li>
        </ul>

        <h3>Unsere Materialien für internationale Vermarktung</h3>

        <p>
          Alle unsere Luxus-Pakete können mit englischsprachigem Branding und Beschriftungen
          geliefert werden. Die virtuellen Touren funktionieren weltweit und sind für
          internationale Immobilienportale optimiert.
        </p>

        <h2>Preise für Luxusimmobilien-Visualisierung</h2>

        <h3>Premium Paket – €1.890</h3>

        <p>
          Für Objekte bis 200m². Unbegrenzte Fotografie, Twilight-Session, 360°-Tour,
          Drohnenaufnahmen. Premium-Nachbearbeitung, alle Nutzungsrechte.
        </p>

        <h3>Signature Paket – €3.490</h3>

        <p>
          Für große Villen und Anwesen. Ganztägiges Shooting, cinematic Video, Virtual Staging
          von 3 Räumen, Premium-Exposé-Design inklusive.
        </p>

        <h3>Ultra Premium – auf Anfrage</h3>

        <p>
          Für außergewöhnliche Objekte mit besonderen Anforderungen. Individuelles Konzept,
          persönliche Betreuung, maßgeschneiderte Lösung.
        </p>

        <h2>Referenzen auf Anfrage</h2>

        <p>
          Aufgrund der Diskretion, die viele unserer Luxus-Kunden erwarten, zeigen wir
          Referenzen nur auf persönliche Anfrage. Kontaktieren Sie uns für eine Auswahl
          vergleichbarer Projekte, die wir Ihnen präsentieren dürfen.
        </p>

        <h2>Der Ablauf für Ihr Luxusobjekt</h2>

        <h3>1. Persönliches Gespräch</h3>

        <p>
          Wir besprechen Ihr Objekt, Ihre Anforderungen und entwickeln ein individuelles Konzept.
          Auf Wunsch besuchen wir das Objekt vorab.
        </p>

        <h3>2. Vorbereitung</h3>

        <p>
          Gemeinsam mit Ihnen oder Ihrem Staging-Partner bereiten wir das Objekt optimal vor.
          Wir geben Empfehlungen zur Inszenierung.
        </p>

        <h3>3. Shooting-Tag(e)</h3>

        <p>
          Ein halber bis ganzer Tag für Fotografie, 360°-Scan und Drohnenaufnahmen. Ein separater
          Termin für Twilight-Aufnahmen am Abend.
        </p>

        <h3>4. Premium-Nachbearbeitung</h3>

        <p>
          5-7 Werktage für die sorgfältige Bearbeitung aller Materialien. Sie erhalten Vorabversionen
          zur Abstimmung.
        </p>

        <h3>5. Lieferung</h3>

        <p>
          Alle Materialien in höchster Qualität: Fotos in Web- und Print-Auflösung, 360°-Tour-Link,
          Video-Dateien, Grundrisse.
        </p>

        <h2>Jetzt Ihr Luxusobjekt präsentieren</h2>

        <p>
          Ihr außergewöhnliches Objekt verdient eine außergewöhnliche Präsentation. Kontaktieren
          Sie uns für ein persönliches Gespräch und ein individuelles Angebot.
        </p>
      </SEOPageLayout>
    </>
  );
}
