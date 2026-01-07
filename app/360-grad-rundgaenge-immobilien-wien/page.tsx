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
  title: '360° Virtuelle Rundgänge für Immobilien Wien',
  description:
    'Professionelle 360-Grad-Rundgänge für Immobilien in Wien. Interaktive virtuelle Touren für schnelleren Verkauf. 80% weniger unnötige Besichtigungen. Ab €299.',
  keywords: [
    '360 grad rundgänge immobilien wien',
    'virtuelle rundgänge immobilien',
    '360 grad tour immobilie',
    'interaktive immobilienbesichtigung',
    'virtuelle besichtigung wien',
    '360 tour wohnung',
    'immobilien virtual tour',
    '3d rundgang immobilie',
  ],
  path: '/360-grad-rundgaenge-immobilien-wien',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Virtuelle Rundgänge für Immobilien',
    description:
      'Professionelle 360-Grad-Rundgänge für Immobilien in Wien. Interaktive virtuelle Touren ermöglichen potenziellen Käufern eine realistische Besichtigung von überall.',
    price: '299',
    url: '/360-grad-rundgaenge-immobilien-wien',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: '360° Rundgänge', url: '/360-grad-rundgaenge-immobilien-wien' },
  ]),
  generateFAQSchema([
    {
      question: 'Was kostet ein 360° Rundgang für eine Immobilie in Wien?',
      answer:
        'Ein professioneller 360° Rundgang kostet in Wien zwischen €299 und €990, abhängig von der Größe der Immobilie und den gewünschten Zusatzleistungen wie Drohnenaufnahmen oder virtuellem Staging.',
    },
    {
      question: 'Wie lange dauert die Erstellung eines virtuellen Rundgangs?',
      answer:
        'Die Aufnahme vor Ort dauert 2-3 Stunden. Die Nachbearbeitung und Online-Bereitstellung erfolgt innerhalb von 24-48 Stunden nach dem Termin.',
    },
    {
      question: 'Funktionieren 360° Rundgänge auf allen Geräten?',
      answer:
        'Ja, unsere 360° Rundgänge sind vollständig responsiv und funktionieren auf Desktop-Computern, Tablets, Smartphones und VR-Brillen.',
    },
  ]),
];

export default function Page360GradRundgaenge() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Virtuelle Rundgänge für Immobilien in Wien"
        heroSubtitle="Interaktive 3D-Touren, die Ihre Immobilie von der Konkurrenz abheben und nur qualifizierte Interessenten anziehen"
        heroImage="/assets/heroes/luxus-minimalist.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: '360° Rundgänge', href: '/360-grad-rundgaenge-immobilien-wien' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>360° Rundgänge für Immobilien in Wien kosten zwischen €299 und €990</strong> und
          reduzieren unnötige Besichtigungstermine um bis zu 80%. Diese interaktiven virtuellen
          Touren ermöglichen potenziellen Käufern und Mietern eine realistische Besichtigung Ihrer
          Immobilie von überall auf der Welt – 24 Stunden am Tag, 7 Tage die Woche.
        </p>

        <h2>Was sind 360° Rundgänge für Immobilien?</h2>

        <p>
          Ein 360-Grad-Rundgang ist eine interaktive, virtuelle Tour durch eine Immobilie, die aus
          hochauflösenden Panoramaaufnahmen erstellt wird. Im Gegensatz zu herkömmlichen Fotos können
          Interessenten sich frei durch die Räume bewegen, in alle Richtungen schauen und die
          Immobilie aus verschiedenen Blickwinkeln erkunden – ganz so, als wären sie persönlich vor
          Ort.
        </p>

        <p>
          Die Technologie basiert auf speziellen 360°-Kameras, die den gesamten Raum in einem
          einzigen Bild erfassen. Diese Bilder werden dann zu einem nahtlosen, interaktiven Erlebnis
          zusammengefügt. Moderne 360°-Rundgänge bieten zusätzlich Hotspots mit Informationen,
          Grundrissansichten und sogar Messwerkzeuge.
        </p>

        <h3>Vorteile von virtuellen Immobilienrundgängen</h3>

        <p>
          Die Digitalisierung hat den Immobilienmarkt grundlegend verändert. Studien zeigen, dass
          Immobilienanzeigen mit virtuellen Rundgängen bis zu <strong>40% mehr Klicks</strong>{' '}
          erhalten als solche mit nur statischen Bildern. Aber die Vorteile gehen weit über höhere
          Klickzahlen hinaus:
        </p>

        <ul>
          <li>
            <strong>80% weniger unnötige Besichtigungen:</strong> Interessenten können die Immobilie
            vorab virtuell erkunden und entscheiden, ob sie wirklich passt. Das spart Ihnen als
            Makler oder Verkäufer wertvolle Zeit.
          </li>
          <li>
            <strong>24/7 Verfügbarkeit:</strong> Ihre Immobilie kann jederzeit besichtigt werden –
            auch nachts, am Wochenende oder von internationalen Interessenten in anderen Zeitzonen.
          </li>
          <li>
            <strong>Emotionale Vorbindung:</strong> Interessenten, die eine virtuelle Tour gemacht
            haben, kommen zur realen Besichtigung bereits mit einer emotionalen Verbindung zur
            Immobilie.
          </li>
          <li>
            <strong>Höhere Verkaufspreise:</strong> Professionelle Präsentation signalisiert
            Qualität und rechtfertigt höhere Preise.
          </li>
          <li>
            <strong>Kürzere Vermarktungszeit:</strong> Immobilien mit 360°-Rundgängen verkaufen sich
            durchschnittlich 31% schneller.
          </li>
        </ul>

        <h2>Wie funktioniert die Erstellung eines 360° Rundgangs?</h2>

        <p>
          Der Prozess der Erstellung eines professionellen 360°-Rundgangs ist einfach und
          unkompliziert. Wir kümmern uns um alle technischen Details, sodass Sie sich auf Ihr
          Kerngeschäft konzentrieren können.
        </p>

        <h3>Schritt 1: Terminvereinbarung und Vorbereitung</h3>

        <p>
          Nach Ihrer Anfrage vereinbaren wir einen Termin, der in Ihren Zeitplan passt. Wir geben
          Ihnen Tipps zur optimalen Vorbereitung der Immobilie: aufgeräumte Räume, gute Beleuchtung
          und eine ansprechende Präsentation. Eine gut vorbereitete Immobilie macht einen
          erheblichen Unterschied in der Qualität des Endergebnisses.
        </p>

        <h3>Schritt 2: Professionelle Aufnahme vor Ort</h3>

        <p>
          Unser Fotograf kommt mit professioneller 360°-Ausrüstung zu Ihnen. Die Aufnahme einer
          durchschnittlichen Wohnung dauert etwa 2-3 Stunden. In dieser Zeit erfassen wir jeden Raum
          aus mehreren Positionen, um ein vollständiges und immersives Erlebnis zu schaffen.
        </p>

        <h4>Unsere Ausrüstung umfasst:</h4>

        <ul>
          <li>Professionelle 360°-Kameras mit 8K-Auflösung</li>
          <li>HDR-Technologie für perfekte Belichtung in jedem Raum</li>
          <li>Spezielle Stative für verwacklungsfreie Aufnahmen</li>
          <li>Beleuchtungsausrüstung für optimale Lichtverhältnisse</li>
        </ul>

        <h3>Schritt 3: Nachbearbeitung und Veröffentlichung</h3>

        <p>
          Nach der Aufnahme beginnt die Nachbearbeitung in unserem Studio. Wir optimieren die Bilder,
          fügen die einzelnen Aufnahmen nahtlos zusammen und erstellen die interaktive Tour. Je nach
          Paket fügen wir Hotspots, Grundrisse, Messungen und Ihr Branding hinzu. Innerhalb von 24-48
          Stunden erhalten Sie einen Link zu Ihrem fertigen 360°-Rundgang.
        </p>

        <h2>Einsatzmöglichkeiten für 360° Rundgänge</h2>

        <p>
          Virtuelle Rundgänge sind vielseitig einsetzbar und bieten für verschiedene Immobilientypen
          und Zielgruppen spezifische Vorteile.
        </p>

        <h3>Für den Immobilienverkauf</h3>

        <p>
          Beim Verkauf einer Immobilie ist der erste Eindruck entscheidend. Ein 360°-Rundgang
          ermöglicht es potenziellen Käufern, die Immobilie in Ruhe zu erkunden und sich ein
          realistisches Bild zu machen. Dies führt zu qualifizierteren Anfragen und höheren
          Abschlussraten. Besonders bei hochpreisigen Immobilien ist eine professionelle Präsentation
          unerlässlich.
        </p>

        <h3>Für die Vermietung</h3>

        <p>
          Für Vermieter bedeuten leere Wohnungen Einnahmeverluste. Ein virtueller Rundgang
          beschleunigt den Vermietungsprozess erheblich, da Interessenten bereits vor der
          persönlichen Besichtigung wissen, ob die Wohnung ihren Anforderungen entspricht. Das spart
          Zeit für beide Seiten und reduziert die Leerstandszeit.
        </p>

        <h3>Für Neubauprojekte</h3>

        <p>
          Bei Neubauprojekten können 360°-Rundgänge sogar vor der Fertigstellung erstellt werden –
          durch fotorealistische 3D-Visualisierungen. Dies ermöglicht den Vorverkauf von Einheiten
          und gibt Käufern eine klare Vorstellung vom zukünftigen Zuhause.
        </p>

        <h2>360° Rundgänge vs. herkömmliche Immobilienfotos</h2>

        <p>
          Während professionelle Fotos nach wie vor wichtig sind, bieten 360°-Rundgänge eine völlig
          neue Dimension der Immobilienpräsentation:
        </p>

        <h3>Immersives Erlebnis vs. statische Bilder</h3>

        <p>
          Herkömmliche Fotos zeigen nur ausgewählte Perspektiven. Ein 360°-Rundgang ermöglicht es dem
          Betrachter, selbst zu entscheiden, was er sehen möchte. Er kann in alle Richtungen
          schauen, Details erkunden und ein echtes Gefühl für die Raumaufteilung entwickeln.
        </p>

        <h3>Transparenz schafft Vertrauen</h3>

        <p>
          Bei herkömmlichen Fotos besteht immer die Frage, was nicht gezeigt wird. Ein vollständiger
          360°-Rundgang zeigt die Immobilie so, wie sie ist – ohne versteckte Ecken. Diese
          Transparenz schafft Vertrauen bei potenziellen Käufern und reduziert Enttäuschungen bei der
          realen Besichtigung.
        </p>

        <h2>Technische Anforderungen und Kompatibilität</h2>

        <p>
          Unsere 360°-Rundgänge sind für maximale Kompatibilität optimiert und funktionieren auf
          allen modernen Geräten ohne zusätzliche Software-Installation.
        </p>

        <h3>Unterstützte Geräte und Browser</h3>

        <ul>
          <li>
            <strong>Desktop:</strong> Alle modernen Browser (Chrome, Firefox, Safari, Edge)
          </li>
          <li>
            <strong>Mobile:</strong> iOS und Android Smartphones und Tablets
          </li>
          <li>
            <strong>VR:</strong> Kompatibel mit gängigen VR-Brillen für ein noch immersiveres
            Erlebnis
          </li>
        </ul>

        <h3>Integration in Ihre Plattformen</h3>

        <p>
          Die fertigen 360°-Rundgänge können einfach in Ihre Website, Immobilienportale (willhaben,
          ImmobilienScout24) und Social-Media-Kanäle eingebettet werden. Wir liefern Ihnen alle
          notwendigen Embed-Codes und unterstützen Sie bei der Integration.
        </p>

        <h2>Preise und Pakete für 360° Rundgänge in Wien</h2>

        <p>
          Wir bieten verschiedene Pakete an, die auf unterschiedliche Bedürfnisse und Budgets
          zugeschnitten sind. Alle Pakete beinhalten professionelle Aufnahme, Nachbearbeitung und
          unbegrenztes Hosting.
        </p>

        <h3>Schnellverkauf-Paket – €299</h3>

        <p>
          Ideal für Wohnungen bis 60m². Beinhaltet einen vollständigen 360°-Rundgang mit allen
          Räumen, Grundrissansicht und 48h Lieferzeit. Perfekt für den schnellen Einstieg in die
          virtuelle Immobilienpräsentation.
        </p>

        <h3>Premium-Paket – €499</h3>

        <p>
          Für Immobilien bis 120m². Zusätzlich zum Basis-Paket erhalten Sie interaktive Hotspots mit
          Rauminformationen, Messtools und Express-Lieferung innerhalb von 24 Stunden.
        </p>

        <h3>Luxus-Paket – €990</h3>

        <p>
          Für große Immobilien und Villen. Unbegrenzte Aufnahmen, virtuelle Staging-Optionen,
          Drohnenaufnahmen des Außenbereichs und ein dedizierter Projektmanager für Ihre
          individuellen Anforderungen.
        </p>

        <h2>Warum Sie uns für Ihren 360° Rundgang wählen sollten</h2>

        <p>
          Als spezialisierter Anbieter für Immobilienvisualisierung in Wien verstehen wir die
          Anforderungen des lokalen Marktes. Unsere Erfahrung mit über 500 realisierten Projekten
          garantiert Ihnen erstklassige Qualität und zuverlässigen Service.
        </p>

        <h3>Lokale Expertise</h3>

        <p>
          Wir kennen die Wiener Bezirke und wissen, wie man die Besonderheiten jeder Immobilie
          optimal in Szene setzt – vom Altbau in der Inneren Stadt bis zum modernen Neubau in der
          Donaustadt.
        </p>

        <h3>Schnelle Lieferung</h3>

        <p>
          Zeit ist Geld im Immobiliengeschäft. Deshalb garantieren wir Ihnen eine Lieferung innerhalb
          von 24-48 Stunden nach der Aufnahme.
        </p>

        <h3>Persönlicher Service</h3>

        <p>
          Sie erhalten einen persönlichen Ansprechpartner, der Sie von der Anfrage bis zur
          Veröffentlichung begleitet. Wir sind für Sie da – auch nach der Lieferung.
        </p>

        <h2>Häufig gestellte Fragen zu 360° Rundgängen</h2>

        <h3>Wie lange ist ein 360° Rundgang verfügbar?</h3>

        <p>
          Ihre 360°-Tour wird unbegrenzt gehostet. Sie können sie so lange nutzen, wie Sie möchten –
          ohne zusätzliche Kosten.
        </p>

        <h3>Kann ich den Rundgang selbst bearbeiten?</h3>

        <p>
          Ja, auf Wunsch erhalten Sie Zugang zu unserem Editor, mit dem Sie Hotspots, Texte und
          Branding selbst anpassen können.
        </p>

        <h3>Funktioniert der Rundgang auch offline?</h3>

        <p>
          Die Standard-Version benötigt eine Internetverbindung. Für spezielle Anwendungen (z.B.
          Messen) bieten wir auch Offline-Lösungen an.
        </p>

        <h2>Jetzt 360° Rundgang anfragen</h2>

        <p>
          Bereit, Ihre Immobilienvermarktung auf das nächste Level zu heben? Kontaktieren Sie uns
          für ein unverbindliches Angebot. Wir beraten Sie gerne und finden das passende Paket für
          Ihre Anforderungen.
        </p>
      </SEOPageLayout>
    </>
  );
}
