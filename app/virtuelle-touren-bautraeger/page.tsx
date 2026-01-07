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
  title: 'Virtuelle Touren für Bauträger Wien',
  description:
    'Virtuelle Rundgänge und 3D-Visualisierungen für Neubauprojekte in Wien. Vorverkauf steigern, Off-Plan Marketing, Musterwohnung digitalisieren.',
  keywords: [
    'neubau vermarktung',
    'bauträger visualisierung',
    'off-plan marketing',
    'vorverkauf immobilien',
    'neubau 360 tour',
    'bauträger marketing',
    'musterwohnung virtuell',
    '3d visualisierung neubau',
  ],
  path: '/virtuelle-touren-bautraeger',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: 'Virtuelle Touren für Bauträger',
    description:
      'Spezialisierte 360°-Touren und 3D-Visualisierungen für Neubauprojekte. Steigern Sie Ihren Vorverkauf mit modernster Technologie.',
    price: '2490',
    url: '/virtuelle-touren-bautraeger',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Bauträger', url: '/virtuelle-touren-bautraeger' },
  ]),
  generateFAQSchema([
    {
      question: 'Können virtuelle Touren für noch nicht gebaute Wohnungen erstellt werden?',
      answer:
        'Ja, mit fotorealistischen 3D-Visualisierungen können wir virtuelle Rundgänge erstellen, bevor die erste Wand steht. Basierend auf Architekturplänen erstellen wir begehbare 3D-Modelle.',
    },
    {
      question: 'Wie steigern virtuelle Touren den Vorverkauf?',
      answer:
        'Käufer können Wohnungen virtuell besichtigen, verschiedene Ausstattungsvarianten sehen und emotionale Kaufentscheidungen treffen – auch wenn das Gebäude noch im Bau ist. Das beschleunigt Vorverkäufe erheblich.',
    },
    {
      question: 'Was kostet ein virtueller Rundgang für ein Neubauprojekt?',
      answer:
        'Preise für Bauträger-Projekte beginnen bei €2.490 pro Wohnungstyp für 3D-visualisierte Rundgänge. Für komplette Projektkonfigurationen mit allen Wohnungstypen bieten wir Projektpauschalen an.',
    },
  ]),
];

export default function PageBautraeger() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Virtuelle Touren für Bauträger und Projektentwickler"
        heroSubtitle="Verkaufen Sie Wohnungen, bevor sie gebaut sind – mit 3D-Visualisierungen und virtuellen Rundgängen"
        heroImage="/assets/portfolio/neubau-balkon.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Bauträger', href: '/virtuelle-touren-bautraeger' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>
            Virtuelle Touren für Neubauprojekte ermöglichen den Verkauf von Wohnungen vor
            Fertigstellung
          </strong>{' '}
          und steigern die Vorverkaufsquote um durchschnittlich 40%. Mit fotorealistischen
          3D-Visualisierungen können Interessenten durch noch nicht gebaute Wohnungen "gehen" und
          Kaufentscheidungen treffen – ein entscheidender Vorteil für Bauträger und Projektentwickler.
        </p>

        <h2>Die Herausforderung: Wohnungen verkaufen, die noch nicht existieren</h2>

        <p>
          Als Bauträger stehen Sie vor einer einzigartigen Herausforderung: Sie müssen Käufer für
          Wohnungen begeistern, die sie nicht besichtigen können – weil sie noch nicht gebaut sind.
          Pläne und technische Zeichnungen überzeugen aber nur die wenigsten Menschen. Die meisten
          Käufer brauchen eine emotionale Vorstellung davon, wie ihr zukünftiges Zuhause aussehen
          und sich anfühlen wird.
        </p>

        <p>
          Hier kommen virtuelle Touren und 3D-Visualisierungen ins Spiel: Sie machen das Unsichtbare
          sichtbar und verwandeln abstrakte Pläne in erlebbare Räume.
        </p>

        <h3>Warum der Vorverkauf so wichtig ist</h3>

        <p>
          Ein hoher Vorverkaufsgrad ist entscheidend für den Erfolg eines Neubauprojekts:
        </p>

        <ul>
          <li>
            <strong>Finanzierung:</strong> Banken verlangen oft 30-50% Vorverkauf für die
            Baufinanzierung
          </li>
          <li>
            <strong>Cashflow:</strong> Frühe Zahlungen von Käufern verbessern die Liquidität
          </li>
          <li>
            <strong>Risikominimierung:</strong> Weniger Unsicherheit über die Vermarktung
          </li>
          <li>
            <strong>Preisgestaltung:</strong> Früher Verkaufserfolg ermöglicht Preisanpassungen für
            spätere Einheiten
          </li>
        </ul>

        <h2>Unsere Lösungen für Bauträger</h2>

        <h3>3D-Visualisierte Virtuelle Rundgänge</h3>

        <p>
          Wir erstellen fotorealistische, begehbare 3D-Touren auf Basis Ihrer Architekturpläne.
          Interessenten können sich durch die zukünftige Wohnung bewegen, Räume erkunden und ein
          Gefühl für Proportionen und Lichtverhältnisse bekommen.
        </p>

        <h4>Was wir liefern:</h4>

        <ul>
          <li>
            <strong>Fotorealistische Qualität:</strong> Moderne 3D-Engines erzeugen Bilder, die von
            echten Fotos kaum zu unterscheiden sind
          </li>
          <li>
            <strong>Interaktive Navigation:</strong> Frei bewegbar wie bei einem echten
            Matterport-Scan
          </li>
          <li>
            <strong>Ausstattungsvarianten:</strong> Verschiedene Böden, Küchen, Badezimmer zum
            Durchschalten
          </li>
          <li>
            <strong>Hotspots mit Informationen:</strong> Details zu Materialien, Maßen, Ausstattung
          </li>
        </ul>

        <h3>Innenraum-Renderings</h3>

        <p>
          Einzelne, hochwertige Bilder der wichtigsten Räume für Print-Exposés, Websites und
          Werbematerialien. Perfekt für den ersten Eindruck.
        </p>

        <h3>Außenansicht-Visualisierungen</h3>

        <p>
          Zeigen Sie, wie das fertige Gebäude im Kontext aussehen wird: Fassade, Eingangsbereich,
          Außenanlagen, Tiefgarage. Mit realistischer Umgebung, Bepflanzung und Tageslichtsimulation.
        </p>

        <h3>Luftbild-Visualisierungen</h3>

        <p>
          Vogelperspektive-Darstellungen des gesamten Projekts – ideal für größere Wohnanlagen, um
          die Dimensionen und das Zusammenspiel der Gebäude zu zeigen.
        </p>

        <h3>Musterwohnung-Digitalisierung</h3>

        <p>
          Wenn eine physische Musterwohnung existiert, digitalisieren wir sie mit Matterport. So
          bleibt sie auch nach dem Verkauf als virtuelle Referenz verfügbar.
        </p>

        <h2>Der Projektkonfigurator</h2>

        <p>
          Für größere Projekte bieten wir einen interaktiven Online-Konfigurator:
        </p>

        <h3>Funktionen:</h3>

        <ul>
          <li>Übersicht aller verfügbaren Einheiten</li>
          <li>Filter nach Größe, Stockwerk, Preis, Ausrichtung</li>
          <li>Direkter Zugang zur virtuellen Tour jeder Einheit</li>
          <li>Ausstattungsoptionen konfigurieren</li>
          <li>Preis in Echtzeit berechnen</li>
          <li>Anfrage-Formular direkt im Konfigurator</li>
        </ul>

        <p>
          Der Konfigurator wird in Ihre Projekt-Website integriert und ermöglicht Interessenten eine
          selbstständige Exploration des gesamten Angebots.
        </p>

        <h2>Fallstudie: Neubauprojekt Seestadt</h2>

        <p>
          Ein Bauträger in der Seestadt Wien stand vor der Herausforderung, 120 Wohnungen vor
          Baubeginn zu vermarkten. Die Lösung:
        </p>

        <ul>
          <li>3D-Rundgänge für jeden der 8 Wohnungstypen</li>
          <li>Interaktiver Projektkonfigurator</li>
          <li>Außenvisualisierungen des fertigen Komplexes</li>
          <li>Virtual Reality Präsentation für Verkaufsgespräche</li>
        </ul>

        <h3>Ergebnis:</h3>

        <ul>
          <li>
            <strong>65% Vorverkaufsquote</strong> vor Baubeginn (Ziel war 50%)
          </li>
          <li>
            <strong>40% weniger Vor-Ort-Termine</strong> durch virtuelle Vorqualifizierung
          </li>
          <li>
            <strong>Internationale Käufer:</strong> 15% der Käufer besichtigten nur virtuell vor dem
            Kauf
          </li>
          <li>
            <strong>Höhere Abschlussquote:</strong> Interessenten kamen besser vorbereitet zu
            Terminen
          </li>
        </ul>

        <h2>Der Ablauf für Ihr Projekt</h2>

        <h3>1. Briefing und Planung</h3>

        <p>
          Wir analysieren Ihre Architekturpläne, besprechen Ihr Projekt und definieren gemeinsam
          den Umfang: Welche Wohnungstypen sollen visualisiert werden? Welche Ausstattungsvarianten?
          Welche zusätzlichen Materialien werden benötigt?
        </p>

        <h3>2. Material-Zusammenstellung</h3>

        <p>
          Sie liefern uns die notwendigen Unterlagen:
        </p>

        <ul>
          <li>Architekturpläne (DWG, PDF)</li>
          <li>Materialauswahl und Ausstattungslisten</li>
          <li>Referenzbilder für Stil und Atmosphäre</li>
          <li>Branding-Richtlinien für einheitliches Erscheinungsbild</li>
        </ul>

        <h3>3. 3D-Modellierung</h3>

        <p>
          Unsere 3D-Spezialisten erstellen detailgetreue Modelle der Wohnungen auf Basis der Pläne.
          Jedes Detail wird sorgfältig modelliert – von Sockelleisten bis Lichtschaltern.
        </p>

        <h3>4. Texturierung und Rendering</h3>

        <p>
          Materialien, Oberflächen und Beleuchtung werden hinzugefügt. Die fertigen Szenen werden
          mit fotorealistischer Qualität gerendert.
        </p>

        <h3>5. Interaktive Tour erstellen</h3>

        <p>
          Die Renderings werden zu einer interaktiven, begehbaren Tour zusammengefügt. Navigation,
          Hotspots und Ausstattungsoptionen werden implementiert.
        </p>

        <h3>6. Review und Anpassungen</h3>

        <p>
          Sie erhalten Zwischenversionen zur Abstimmung. Änderungen und Korrekturen sind im Preis
          enthalten.
        </p>

        <h3>7. Lieferung und Integration</h3>

        <p>
          Die fertigen Touren werden gehostet und können in Ihre Website, Exposés und
          Verkaufspräsentationen integriert werden.
        </p>

        <h2>Preismodelle für Bauträger</h2>

        <h3>Pro Wohnungstyp – ab €2.490</h3>

        <p>
          Vollständiger 3D-Rundgang eines Wohnungstyps mit Standard-Ausstattung. Ideal für kleinere
          Projekte oder den Einstieg.
        </p>

        <h3>Projekt-Paket – ab €12.000</h3>

        <p>
          Für mittelgroße Projekte (bis 50 Einheiten). Enthält:
        </p>

        <ul>
          <li>Bis zu 6 Wohnungstyp-Rundgänge</li>
          <li>Außenvisualisierung</li>
          <li>Projektkonfigurator (Basis)</li>
          <li>Print-Renderings für Exposé</li>
        </ul>

        <h3>Enterprise-Paket – auf Anfrage</h3>

        <p>
          Für Großprojekte und Wohnanlagen. Individuelle Kalkulation basierend auf:
        </p>

        <ul>
          <li>Anzahl der Wohnungstypen</li>
          <li>Anzahl der Ausstattungsvarianten</li>
          <li>Umfang der Außenvisualisierungen</li>
          <li>Zusätzliche Services (VR, Konfigurator Premium, Animation)</li>
        </ul>

        <h2>Zusätzliche Services für Bauträger</h2>

        <h3>Virtual Reality Erlebnis</h3>

        <p>
          Unsere 3D-Touren können für VR-Brillen aufbereitet werden. Ideal für Verkaufsgespräche
          und Messen – Interessenten tauchen vollständig in ihr zukünftiges Zuhause ein.
        </p>

        <h3>Baufortschritts-Dokumentation</h3>

        <p>
          Regelmäßige Drohnenaufnahmen und Fotos dokumentieren den Baufortschritt. Perfekt für
          Updates an Käufer und für Ihre Marketing-Kommunikation.
        </p>

        <h3>Marketing-Material-Produktion</h3>

        <p>
          Exposé-Design, Broschüren, Social-Media-Content aus einem Guss – abgestimmt auf die
          virtuellen Touren.
        </p>

        <h2>Warum Bauträger mit uns arbeiten</h2>

        <h3>Spezialisierung</h3>

        <p>
          Wir verstehen die spezifischen Anforderungen von Bauträgern und Projektentwicklern –
          von der Finanzierungsrelevanz des Vorverkaufs bis zur Integration in Ihre
          Verkaufsprozesse.
        </p>

        <h3>Qualität</h3>

        <p>
          Unsere Visualisierungen sind fotorealistisch und verkaufsfördernd. Sie repräsentieren Ihr
          Projekt auf höchstem Niveau.
        </p>

        <h3>Zuverlässigkeit</h3>

        <p>
          Wir halten Termine und Budgets ein. Bei Bauprojekten zählt jeder Tag – wir liefern
          pünktlich.
        </p>

        <h3>Full Service</h3>

        <p>
          Von der ersten Visualisierung bis zur Matterport-Tour der fertigen Wohnung – ein
          Partner für alle Phasen.
        </p>

        <h2>Jetzt Ihr Projekt besprechen</h2>

        <p>
          Kontaktieren Sie uns für ein unverbindliches Strategiegespräch. Wir analysieren Ihr
          Projekt und entwickeln ein maßgeschneidertes Konzept für maximalen Vorverkaufserfolg.
        </p>
      </SEOPageLayout>
    </>
  );
}
