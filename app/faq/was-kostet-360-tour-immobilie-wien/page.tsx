import { Metadata } from 'next';
import { SEOPageLayout } from '@/components/seo/SEOPageLayout';
import { SchemaScript } from '@/components/seo/SchemaScript';
import {
  generatePageMetadata,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Was kostet eine 360° Tour für Immobilien in Wien? Preise 2024',
  description:
    '360° Rundgänge für Immobilien in Wien kosten zwischen €290-€990. Komplette Preisübersicht, Faktoren, Vergleich der Anbieter. Transparente Kalkulation.',
  keywords: [
    '360 tour immobilie kosten',
    'matterport preise wien',
    'virtuelle tour preis',
    '360 rundgang kosten',
    'immobilien 360 tour preis',
    '3d tour immobilie kosten',
    'virtuelle besichtigung preis',
    'was kostet matterport',
  ],
  path: '/faq/was-kostet-360-tour-immobilie-wien',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Kosten 360° Tour', url: '/faq/was-kostet-360-tour-immobilie-wien' },
  ]),
  generateFAQSchema([
    {
      question: 'Was kostet eine 360° Tour für eine Immobilie in Wien?',
      answer:
        'Eine professionelle 360° Tour für Immobilien in Wien kostet zwischen €290 und €990, abhängig von der Größe der Immobilie und dem gewünschten Leistungsumfang. Eine Standardwohnung (60-100m²) kostet durchschnittlich €490, ein Einfamilienhaus €690-€990.',
    },
    {
      question: 'Welche Faktoren beeinflussen den Preis einer 360° Tour?',
      answer:
        'Die wichtigsten Preisfaktoren sind: Quadratmeterzahl der Immobilie, Anzahl der Räume, gewünschte Zusatzleistungen (Grundriss, Drohne, Video), Bearbeitungszeit und Anfahrtsweg. Komplexe Objekte mit vielen Ebenen kosten mehr.',
    },
    {
      question: 'Ist eine 360° Tour günstiger als ein Makler?',
      answer:
        'Ja, deutlich. Eine 360° Tour kostet einmalig €290-€990, während Maklerprovisionen 3-4% des Verkaufspreises betragen. Bei einer €400.000 Immobilie sind das €12.000-16.000 Provision vs. ca. €500 für professionelle Visualisierung.',
    },
    {
      question: 'Gibt es versteckte Kosten bei 360° Touren?',
      answer:
        'Bei seriösen Anbietern nicht. Achten Sie auf Pauschalpreise, die alle Leistungen enthalten: Aufnahme, Bearbeitung, Hosting, Nutzungsrechte. Fragen Sie nach, ob Hosting-Gebühren anfallen (sollten im ersten Jahr inklusive sein).',
    },
    {
      question: 'Lohnt sich die Investition in eine 360° Tour?',
      answer:
        'Ja. Studien zeigen, dass Immobilien mit 360° Touren 49% mehr qualifizierte Anfragen erhalten und 31% schneller verkauft werden. Die Investition von €490 kann einen Mehrerlös von €5.000-15.000 durch höhere Verkaufspreise und weniger Preisverhandlungen ermöglichen.',
    },
  ]),
];

export default function PageFAQKosten() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Was kostet eine 360° Tour für Immobilien in Wien?"
        heroSubtitle="Transparente Preisübersicht: Von €290 bis €990 – alle Faktoren erklärt"
        heroImage="/assets/portfolio/modern-loft-mariahilf.jpg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq/was-kostet-360-tour-immobilie-wien' },
          { name: 'Kosten 360° Tour', href: '/faq/was-kostet-360-tour-immobilie-wien' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>
            Eine professionelle 360° Tour für Immobilien in Wien kostet zwischen €290 und €990.
          </strong>{' '}
          Der genaue Preis hängt von der Größe der Immobilie, der Anzahl der Räume und dem
          gewünschten Leistungsumfang ab. Eine durchschnittliche Wohnung (80m²) kostet etwa €490,
          ein Einfamilienhaus €690-€990. Die Investition amortisiert sich durch schnelleren
          Verkauf und höhere Verkaufspreise.
        </p>

        <h2>Preisübersicht: 360° Touren nach Immobilientyp</h2>

        <p>
          Die folgende Tabelle gibt einen Überblick über typische Preise für verschiedene
          Immobilientypen in Wien:
        </p>

        <h3>Wohnungen</h3>

        <ul>
          <li>
            <strong>Studio/1-Zimmer (bis 40m²):</strong> €290-€390
          </li>
          <li>
            <strong>2-Zimmer-Wohnung (40-70m²):</strong> €390-€490
          </li>
          <li>
            <strong>3-Zimmer-Wohnung (70-100m²):</strong> €490-€590
          </li>
          <li>
            <strong>4+ Zimmer/Penthouse (100-150m²):</strong> €590-€790
          </li>
          <li>
            <strong>Luxus-Penthouse (150m²+):</strong> €790-€1.290
          </li>
        </ul>

        <h3>Häuser</h3>

        <ul>
          <li>
            <strong>Reihenhaus (100-150m²):</strong> €590-€790
          </li>
          <li>
            <strong>Einfamilienhaus (150-250m²):</strong> €790-€990
          </li>
          <li>
            <strong>Villa (250m²+):</strong> €990-€1.890
          </li>
          <li>
            <strong>Mehrfamilienhaus (mehrere Einheiten):</strong> Auf Anfrage
          </li>
        </ul>

        <h3>Gewerbeimmobilien</h3>

        <ul>
          <li>
            <strong>Büro/Geschäftslokal (bis 200m²):</strong> €590-€990
          </li>
          <li>
            <strong>Große Gewerbeflächen (200m²+):</strong> €990-€1.890
          </li>
          <li>
            <strong>Lagerhallen/Produktionsstätten:</strong> Auf Anfrage
          </li>
        </ul>

        <h2>Was ist im Preis enthalten?</h2>

        <p>
          Bei seriösen Anbietern sollten folgende Leistungen im Pauschalpreis enthalten sein:
        </p>

        <h3>Grundleistungen (immer inklusive)</h3>

        <ul>
          <li>
            <strong>Vor-Ort-Aufnahme:</strong> Professionelle Erfassung aller Räume mit
            Matterport-Kamera oder vergleichbarer Technologie
          </li>
          <li>
            <strong>Nachbearbeitung:</strong> Optimierung der Bilder, Entfernung von Störelementen,
            Farbkorrektur
          </li>
          <li>
            <strong>Hosting:</strong> Mindestens 12 Monate Hosting der Tour auf Anbieter-Server
          </li>
          <li>
            <strong>Einbettungscode:</strong> iFrame-Code zur Integration auf Ihrer Website oder
            Immobilienportalen
          </li>
          <li>
            <strong>Nutzungsrechte:</strong> Uneingeschränkte Nutzung für Vermarktungszwecke
          </li>
          <li>
            <strong>Teilen-Funktion:</strong> Direktlink zum Teilen per E-Mail oder Social Media
          </li>
        </ul>

        <h3>Optionale Zusatzleistungen (Aufpreis)</h3>

        <ul>
          <li>
            <strong>3D-Grundriss:</strong> +€90-€150
          </li>
          <li>
            <strong>Möblierter 3D-Grundriss:</strong> +€150-€250
          </li>
          <li>
            <strong>Professionelle HDR-Fotos (zusätzlich):</strong> +€150-€290
          </li>
          <li>
            <strong>Drohnenaufnahmen:</strong> +€190-€390
          </li>
          <li>
            <strong>Video-Rundgang:</strong> +€290-€490
          </li>
          <li>
            <strong>Virtual Staging (leere Räume möblieren):</strong> +€50-€100 pro Raum
          </li>
          <li>
            <strong>Express-Lieferung (24h):</strong> +€100-€150
          </li>
        </ul>

        <h2>Welche Faktoren beeinflussen den Preis?</h2>

        <h3>1. Größe der Immobilie</h3>

        <p>
          Der wichtigste Preisfaktor ist die Quadratmeterzahl. Größere Immobilien erfordern mehr
          Aufnahmepunkte, längere Aufnahmezeit und aufwendigere Nachbearbeitung. Die meisten
          Anbieter staffeln ihre Preise in Quadratmeter-Stufen.
        </p>

        <h3>2. Anzahl der Räume und Ebenen</h3>

        <p>
          Eine 100m²-Wohnung auf einer Ebene ist schneller erfasst als ein 100m²-Haus mit Keller,
          Erdgeschoss und Obergeschoss. Jede zusätzliche Ebene erhöht den Aufwand.
        </p>

        <h3>3. Komplexität der Architektur</h3>

        <p>
          Verwinkelte Grundrisse, viele Durchgänge oder besondere architektonische Elemente
          erfordern mehr Aufnahmepunkte für ein nahtloses Ergebnis.
        </p>

        <h3>4. Außenbereich</h3>

        <p>
          Gärten, Terrassen und Balkone werden oft separat berechnet, da sie spezielle
          Aufnahmetechniken erfordern (Tageslicht, Wetter).
        </p>

        <h3>5. Anfahrtsweg</h3>

        <p>
          Bei Adressen außerhalb Wiens oder in entlegenen Bezirken kann eine Anfahrtspauschale
          anfallen. In Wien selbst ist die Anfahrt meist inklusive.
        </p>

        <h3>6. Lieferzeit</h3>

        <p>
          Standard-Lieferzeit beträgt 48-72 Stunden. Express-Lieferung innerhalb von 24 Stunden
          kostet einen Aufpreis von €100-€150.
        </p>

        <h2>Preisvergleich: 360° Tour vs. andere Marketing-Maßnahmen</h2>

        <h3>360° Tour vs. Maklerprovision</h3>

        <p>
          Die Maklerprovision in Wien beträgt typischerweise 3-4% des Verkaufspreises. Bei einer
          Immobilie von €400.000 sind das €12.000-€16.000. Eine 360° Tour mit professionellen
          Fotos kostet dagegen einmalig €490-€790. Selbst mit allen Zusatzleistungen bleibt man
          unter €1.500 – ein Bruchteil der Maklerkosten.
        </p>

        <h3>360° Tour vs. professionelle Fotos allein</h3>

        <p>
          Professionelle Immobilienfotos kosten €200-€400 für eine Standardwohnung. Eine 360° Tour
          mit Fotos im Paket kostet €490-€690. Der Mehrwert der virtuellen Begehbarkeit
          rechtfertigt den Aufpreis von €200-€300 deutlich.
        </p>

        <h3>360° Tour vs. Video-Rundgang</h3>

        <p>
          Ein professioneller Video-Rundgang kostet €500-€1.000. Die 360° Tour bietet mehr
          Interaktivität (der Betrachter bestimmt selbst, was er sieht) bei ähnlichem oder
          geringerem Preis.
        </p>

        <h2>Return on Investment: Lohnt sich die Investition?</h2>

        <p>
          Die Frage „Lohnt sich das?" ist berechtigt. Hier die Zahlen, die für eine Investition
          sprechen:
        </p>

        <h3>Messbare Vorteile</h3>

        <ul>
          <li>
            <strong>49% mehr Anfragen:</strong> Immobilien mit 360° Touren erhalten fast 50% mehr
            qualifizierte Interessenten
          </li>
          <li>
            <strong>31% schnellerer Verkauf:</strong> Die durchschnittliche Vermarktungszeit
            reduziert sich um fast ein Drittel
          </li>
          <li>
            <strong>95% Fernbesichtigungen:</strong> Interessenten können vorselektieren, ohne
            vor Ort zu sein
          </li>
          <li>
            <strong>4-9% höherer Verkaufspreis:</strong> Professionelle Präsentation rechtfertigt
            höhere Preisvorstellungen
          </li>
        </ul>

        <h3>Rechenbeispiel</h3>

        <p>
          Verkaufspreis der Immobilie: €350.000
        </p>

        <ul>
          <li>Investition in 360° Tour + Fotos: €590</li>
          <li>Potenzieller Mehrerlös (5% von €350.000): €17.500</li>
          <li>Zeitersparnis: 2-3 Monate weniger auf dem Markt</li>
          <li>
            <strong>ROI: 2.866%</strong> (€17.500 / €590)
          </li>
        </ul>

        <p>
          Selbst wenn der tatsächliche Mehrerlös nur 1% beträgt (€3.500), ist das immer noch
          ein ROI von fast 500%.
        </p>

        <h2>Worauf Sie bei Preisvergleichen achten sollten</h2>

        <h3>Versteckte Kosten vermeiden</h3>

        <p>
          Fragen Sie vor der Buchung nach:
        </p>

        <ul>
          <li>
            <strong>Hosting-Gebühren:</strong> Wie lange ist Hosting inklusive? Was kostet es danach?
          </li>
          <li>
            <strong>Änderungen:</strong> Sind nachträgliche Anpassungen im Preis enthalten?
          </li>
          <li>
            <strong>Nutzungsrechte:</strong> Dürfen Sie die Tour unbegrenzt nutzen?
          </li>
          <li>
            <strong>Download-Möglichkeit:</strong> Können Sie die Fotos/Daten herunterladen?
          </li>
          <li>
            <strong>Portabilität:</strong> Was passiert, wenn der Anbieter sein Geschäft aufgibt?
          </li>
        </ul>

        <h3>Qualitätsunterschiede</h3>

        <p>
          Nicht alle 360° Touren sind gleich. Achten Sie auf:
        </p>

        <ul>
          <li>
            <strong>Kamera-Technologie:</strong> Matterport Pro2/Pro3 liefert die beste Qualität
          </li>
          <li>
            <strong>Nachbearbeitung:</strong> Werden Bilder professionell optimiert?
          </li>
          <li>
            <strong>Hosting-Qualität:</strong> Schnelle Ladezeiten, mobile Optimierung?
          </li>
          <li>
            <strong>Erfahrung:</strong> Wie viele Immobilien hat der Anbieter bereits erfasst?
          </li>
        </ul>

        <h2>Unsere Preise im Detail</h2>

        <h3>Essential-Paket – €490</h3>

        <p>
          Für Wohnungen bis 100m²:
        </p>

        <ul>
          <li>Matterport 360° Rundgang</li>
          <li>15-20 HDR-Fotos</li>
          <li>Hosting für 12 Monate</li>
          <li>Einbettungscode für Websites</li>
          <li>Lieferung in 48 Stunden</li>
        </ul>

        <h3>Premium-Paket – €990</h3>

        <p>
          Für Wohnungen und Häuser bis 200m²:
        </p>

        <ul>
          <li>Alles aus Essential</li>
          <li>3D-Grundriss</li>
          <li>25-35 HDR-Fotos</li>
          <li>Drohnenaufnahmen (wenn möglich)</li>
          <li>24 Monate Hosting</li>
          <li>Lieferung in 24 Stunden</li>
        </ul>

        <h3>Luxury-Paket – €1.890</h3>

        <p>
          Für Villen und Luxusimmobilien:
        </p>

        <ul>
          <li>Alles aus Premium</li>
          <li>Unbegrenzte Fotos</li>
          <li>Video-Rundgang</li>
          <li>Twilight-Aufnahmen</li>
          <li>Möblierter 3D-Grundriss</li>
          <li>36 Monate Hosting</li>
          <li>Persönlicher Ansprechpartner</li>
        </ul>

        <h2>Häufige Fragen zu Preisen</h2>

        <h3>Gibt es Mengenrabatte?</h3>

        <p>
          Ja. Makler und Bauträger mit regelmäßigem Bedarf erhalten Sonderkonditionen. Bei 5+
          Aufträgen pro Monat sind 15-25% Rabatt üblich. Kontaktieren Sie uns für ein
          individuelles Angebot.
        </p>

        <h3>Was kostet eine Tour für eine leere Wohnung?</h3>

        <p>
          Der Grundpreis ist gleich. Optional kann Virtual Staging hinzugebucht werden (€50-€100
          pro Raum), um die leeren Räume virtuell zu möblieren.
        </p>

        <h3>Kann ich die Tour später erweitern?</h3>

        <p>
          Ja, aber es ist günstiger, alle Leistungen von Anfang an zu buchen. Nachträgliche
          Erweiterungen erfordern oft einen erneuten Vor-Ort-Termin.
        </p>

        <h3>Was passiert nach Ablauf des Hostings?</h3>

        <p>
          Sie können das Hosting verlängern (€99-€149/Jahr) oder die Tour-Daten herunterladen und
          selbst hosten.
        </p>

        <h2>Jetzt unverbindlich Preis anfragen</h2>

        <p>
          Erhalten Sie ein kostenloses Angebot für Ihre Immobilie. Schicken Sie uns Adresse,
          Quadratmeter und gewünschte Leistungen – wir antworten innerhalb von 24 Stunden mit
          einem transparenten Festpreis.
        </p>
      </SEOPageLayout>
    </>
  );
}
