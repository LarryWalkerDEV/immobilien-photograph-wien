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
  title: 'Matterport 3D Touren Wien',
  description:
    'Matterport 3D-Rundgänge und Digital Twins für Immobilien in Wien. Interaktive Dollhouse-Ansicht, präzise Messungen, professionelle Qualität. Ab €399.',
  keywords: [
    'matterport tour wien',
    'matterport 3d',
    '3d scanning immobilien',
    'matterport österreich',
    'digital twin immobilie',
    '3d tour erstellen',
    'matterport pro wien',
    'virtuelle 3d tour',
  ],
  path: '/matterport-3d-touren-wien',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Matterport 3D Touren',
    description:
      'Professionelle Matterport 3D-Rundgänge für Immobilien in Wien. Digital Twins mit Dollhouse-Ansicht und präzisen Messungen.',
    price: '399',
    url: '/matterport-3d-touren-wien',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Matterport 3D', url: '/matterport-3d-touren-wien' },
  ]),
  generateFAQSchema([
    {
      question: 'Was ist ein Matterport 3D-Rundgang?',
      answer:
        'Ein Matterport 3D-Rundgang ist ein fotorealistisches, digitales Abbild einer Immobilie. Mit der patentierten Technologie können Sie sich frei durch Räume bewegen, die Dollhouse-Ansicht nutzen und präzise Messungen durchführen.',
    },
    {
      question: 'Wie viel kostet ein Matterport Scan in Wien?',
      answer:
        'Ein Matterport 3D-Scan kostet in Wien ab €399 für Wohnungen bis 80m². Der Preis variiert je nach Größe der Immobilie und gewünschten Zusatzleistungen.',
    },
    {
      question: 'Wie lange dauert ein Matterport Scan?',
      answer:
        'Die Aufnahme vor Ort dauert je nach Größe 1-3 Stunden. Eine 100m² Wohnung ist in etwa 1,5 Stunden gescannt. Die Verarbeitung erfolgt in 24-48 Stunden.',
    },
  ]),
];

export default function PageMatterport() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Matterport 3D Touren in Wien"
        heroSubtitle="Digital Twins für Immobilien – Die modernste Technologie für virtuelle Rundgänge"
        heroImage="/assets/heroes/data-roi-driven.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Matterport 3D', href: '/matterport-3d-touren-wien' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>Matterport 3D-Touren kosten in Wien ab €399</strong> und bieten die modernste
          Technologie für virtuelle Immobilienrundgänge. Die patentierte Matterport-Technologie
          erstellt fotorealistische Digital Twins mit einzigartigen Features wie der
          Dollhouse-Ansicht, Grundrissnavigation und präzisen Vermessungstools.
        </p>

        <h2>Was ist Matterport?</h2>

        <p>
          Matterport ist der weltweit führende Anbieter für 3D-Raumerfassung und virtuelle Touren.
          Die Technologie verwendet spezielle Kameras und KI-gestützte Software, um ein
          fotorealistisches, dreidimensionales Modell von Innenräumen zu erstellen – einen
          sogenannten Digital Twin oder digitalen Zwilling.
        </p>

        <p>
          Im Gegensatz zu herkömmlichen 360°-Rundgängen, die einzelne Panoramafotos miteinander
          verknüpfen, erfasst Matterport die räumliche Struktur in drei Dimensionen. Das Ergebnis
          ist ein interaktives 3D-Modell, durch das sich Betrachter frei bewegen können – mit
          einzigartigen Funktionen, die bei keiner anderen Technologie verfügbar sind.
        </p>

        <h3>Die einzigartigen Matterport-Features</h3>

        <h4>Dollhouse-Ansicht</h4>

        <p>
          Die charakteristische Dollhouse- oder Puppenhaus-Ansicht zeigt die gesamte Immobilie als
          3D-Modell von außen. Betrachter können das Modell drehen, zoomen und einzelne Räume aus
          verschiedenen Perspektiven betrachten. Diese Vogelperspektive vermittelt sofort ein
          Verständnis für die Raumaufteilung und Proportionen.
        </p>

        <h4>Grundriss-Navigation</h4>

        <p>
          Ein automatisch generierter 2D-Grundriss ermöglicht die intuitive Navigation durch die
          Immobilie. Nutzer können direkt von Raum zu Raum springen oder sich Schritt für Schritt
          durch die Tour bewegen.
        </p>

        <h4>Measurement Mode</h4>

        <p>
          Mit dem integrierten Messwerkzeug können Interessenten präzise Abstände messen – ideal
          für die Möbelplanung oder zur Überprüfung von Raumgrößen. Die Messungen sind auf wenige
          Zentimeter genau.
        </p>

        <h4>Mattertags</h4>

        <p>
          Interaktive Informationspunkte (Mattertags) können überall im 3D-Modell platziert werden.
          Sie enthalten Texte, Bilder, Links oder Videos und heben besondere Merkmale hervor –
          beispielsweise Details zur Einbauküche oder Informationen über verwendete Materialien.
        </p>

        <h2>Wie funktioniert ein Matterport Scan?</h2>

        <p>
          Die Erstellung eines Matterport 3D-Modells folgt einem systematischen Prozess, bei dem
          hochmoderne Technologie mit professioneller Expertise kombiniert wird.
        </p>

        <h3>Die Matterport Pro2 Kamera</h3>

        <p>
          Wir verwenden die Matterport Pro2 Kamera – das Flaggschiff der Matterport-Kameras. Diese
          professionelle 3D-Kamera kombiniert:
        </p>

        <ul>
          <li>134 Megapixel Auflösung für gestochen scharfe Bilder</li>
          <li>Infrarot-Sensoren für präzise Tiefenerfassung</li>
          <li>HDR-Technologie für optimale Belichtung</li>
          <li>Automatische Kalibrierung für nahtlose Scans</li>
        </ul>

        <h3>Der Scan-Prozess</h3>

        <p>
          Bei einem Scan wird die Kamera in regelmäßigen Abständen positioniert – typischerweise
          alle 2-3 Meter. An jeder Position erfasst die Kamera automatisch ein vollständiges
          360°-Panorama plus Tiefendaten. Diese Einzelscans werden später zu einem durchgängigen
          3D-Modell zusammengefügt.
        </p>

        <h4>Zeitaufwand nach Immobiliengröße:</h4>

        <ul>
          <li>Wohnung bis 60m²: ca. 45-60 Minuten</li>
          <li>Wohnung 60-100m²: ca. 1-1,5 Stunden</li>
          <li>Wohnung 100-150m²: ca. 1,5-2 Stunden</li>
          <li>Haus/Villa ab 200m²: ca. 2-4 Stunden</li>
        </ul>

        <h3>Cloud-Verarbeitung</h3>

        <p>
          Nach der Aufnahme werden die Rohdaten in die Matterport-Cloud hochgeladen. Dort
          verarbeiten leistungsstarke Server und KI-Algorithmen die Daten: Die Einzelscans werden
          zusammengeführt, das 3D-Modell berechnet, der Grundriss generiert. Dieser Prozess dauert
          je nach Größe 12-24 Stunden.
        </p>

        <h2>Vorteile von Matterport gegenüber herkömmlichen 360°-Touren</h2>

        <p>
          Während sowohl Matterport als auch traditionelle 360°-Rundgänge virtuelle
          Immobilienbesichtigungen ermöglichen, bietet Matterport signifikante Vorteile:
        </p>

        <h3>Räumliches Verständnis</h3>

        <p>
          Die Dollhouse-Ansicht und das echte 3D-Modell vermitteln ein intuitives Verständnis der
          räumlichen Verhältnisse. Interessenten erkennen sofort, wie Räume zueinander liegen und
          wie die Wege durch die Wohnung führen.
        </p>

        <h3>Nahtlose Navigation</h3>

        <p>
          Bei herkömmlichen 360°-Touren springt man von Punkt zu Punkt. Bei Matterport bewegt man
          sich flüssig durch den Raum – fast wie beim echten Gehen. Die Übergänge sind nahtlos
          und natürlich.
        </p>

        <h3>Professionelle Messungen</h3>

        <p>
          Die integrierten Messwerkzeuge sind ein echtes Alleinstellungsmerkmal. Interessenten
          können selbstständig überprüfen, ob ihre Möbel passen – ein enormer Mehrwert, der
          Vertrauen schafft.
        </p>

        <h3>Automatisierte Grundrisse</h3>

        <p>
          Matterport generiert automatisch schematische Grundrisse (Schematic Floor Plans) und
          vermessene Grundrisse (Measured Floor Plans). Das spart Zeit und Kosten für separate
          Grundrisserstellung.
        </p>

        <h2>Einsatzbereiche für Matterport 3D-Touren</h2>

        <h3>Luxusimmobilien</h3>

        <p>
          Bei hochpreisigen Immobilien erwarten Käufer eine Premium-Präsentation. Matterport
          liefert genau das: Eine technologisch überlegene, interaktive Darstellung, die den Wert
          der Immobilie unterstreicht.
        </p>

        <h3>Internationale Käufer</h3>

        <p>
          Für Interessenten aus dem Ausland ist ein Matterport-Rundgang oft der entscheidende
          Faktor. Sie können die Immobilie intensiv erkunden, ohne nach Wien reisen zu müssen,
          und eine fundierte Entscheidung treffen.
        </p>

        <h3>Neubauprojekte</h3>

        <p>
          Musterwohnungen können mit Matterport digitalisiert und unbegrenzt oft virtuell
          besichtigt werden – auch nach Verkauf der physischen Musterwohnung.
        </p>

        <h3>Gewerbeimmobilien</h3>

        <p>
          Für Büros, Einzelhandelsflächen und Gastronomieobjekte bietet Matterport präzise
          Vermessungen und professionelle Präsentationen, die geschäftliche Entscheidungen
          unterstützen.
        </p>

        <h3>Architektur und Planung</h3>

        <p>
          Die 3D-Daten können exportiert und in CAD-Software weiterverarbeitet werden – ideal für
          Renovierungsplanung, Innenarchitektur oder Umbauvorhaben.
        </p>

        <h2>Matterport Preise in Wien</h2>

        <p>
          Unsere Matterport-Pakete sind transparent kalkuliert und bieten hervorragendes
          Preis-Leistungs-Verhältnis.
        </p>

        <h3>Basis-Paket – €399</h3>

        <p>
          Für Wohnungen bis 80m². Vollständiger Matterport-Scan, Dollhouse-Ansicht, Grundriss,
          unbegrenztes Hosting für 12 Monate.
        </p>

        <h3>Professional-Paket – €699</h3>

        <p>
          Für Objekte bis 150m². Zusätzlich: Mattertags mit Beschreibungen, vermessener Grundriss,
          Highlight-Reel Video, Premium-Hosting.
        </p>

        <h3>Enterprise-Paket – €1.199</h3>

        <p>
          Für große Objekte und kommerzielle Nutzung. Unbegrenzte Fläche, vollständige
          Anpassung, Branding-Integration, Export-Optionen für CAD, dedizierter Support.
        </p>

        <h2>Technische Integration und Export</h2>

        <h3>Website-Integration</h3>

        <p>
          Matterport-Touren lassen sich einfach in jede Website einbetten. Sie erhalten einen
          Embed-Code, der in Ihre Immobilienportale, Unternehmenswebsite oder Landingpages
          integriert werden kann.
        </p>

        <h3>Immobilienportale</h3>

        <p>
          Die meisten großen Immobilienportale (willhaben, ImmobilienScout24, Immowelt)
          unterstützen Matterport-Integration. Wir liefern Ihnen alle notwendigen Links und
          Anleitungen.
        </p>

        <h3>Datenexport</h3>

        <p>
          Für professionelle Anwendungen können die 3D-Daten in verschiedene Formate exportiert
          werden:
        </p>

        <ul>
          <li>OBJ/FBX für 3D-Modellierung</li>
          <li>E57/RCP für Punktwolken</li>
          <li>DXF für CAD-Integration</li>
          <li>PDF für Dokumentation</li>
        </ul>

        <h2>Warum Matterport mit uns?</h2>

        <h3>Zertifizierte Matterport Service Partner</h3>

        <p>
          Als offizieller Matterport Service Partner verfügen wir über die neueste Pro2-Kamera
          und regelmäßige Schulungen zu Updates und Best Practices.
        </p>

        <h3>Lokale Expertise</h3>

        <p>
          Wir kennen den Wiener Immobilienmarkt und wissen, wie Matterport-Touren optimal für die
          lokale Zielgruppe aufbereitet werden sollten.
        </p>

        <h3>Full-Service</h3>

        <p>
          Von der Aufnahme über die Nachbearbeitung bis zur Integration in Ihre Marketingkanäle –
          wir kümmern uns um alles.
        </p>

        <h2>Häufig gestellte Fragen zu Matterport</h2>

        <h3>Funktioniert Matterport auch im Außenbereich?</h3>

        <p>
          Matterport ist primär für Innenräume optimiert. Für Außenaufnahmen kombinieren wir
          Matterport mit Drohnenfotografie für ein vollständiges Bild der Immobilie.
        </p>

        <h3>Wie lange bleibt die Tour online?</h3>

        <p>
          Im Basispreis ist 12 Monate Hosting enthalten. Danach kann das Hosting verlängert oder
          die Tour auf eigenen Servern gehostet werden.
        </p>

        <h3>Kann ich die Tour später bearbeiten?</h3>

        <p>
          Ja, über das Matterport-Dashboard können Sie Mattertags hinzufügen, Texte ändern und
          Einstellungen anpassen – auch nach der Erstellung.
        </p>

        <h2>Jetzt Matterport 3D-Tour anfragen</h2>

        <p>
          Erleben Sie den Unterschied, den Matterport-Technologie für Ihre Immobilienvermarktung
          macht. Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
        </p>
      </SEOPageLayout>
    </>
  );
}
