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
  title: 'Matterport vs. 360° Foto: Der Unterschied erklärt',
  description:
    'Was ist der Unterschied zwischen Matterport 3D-Touren und einfachen 360° Fotos? Vergleich von Technologie, Qualität, Kosten und Anwendungsfällen.',
  keywords: [
    'matterport vs 360',
    'unterschied matterport',
    '360 foto vs 3d tour',
    'matterport alternative',
    'virtuelle tour vergleich',
    'was ist matterport',
    '3d scan immobilie',
    'matterport oder 360',
  ],
  path: '/faq/unterschied-matterport-360-foto',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Matterport vs. 360°', url: '/faq/unterschied-matterport-360-foto' },
  ]),
  generateFAQSchema([
    {
      question: 'Was ist der Unterschied zwischen Matterport und einem 360° Foto?',
      answer:
        'Matterport ist ein vollständiger 3D-Scan mit freier Navigation durch den Raum, während ein 360° Foto nur die Ansicht von einem festen Standpunkt zeigt. Matterport erfasst die komplette Raumgeometrie für maßstabsgetreue Messungen und Dollhouse-Ansichten.',
    },
    {
      question: 'Ist Matterport besser als 360° Fotos?',
      answer:
        'Für die meisten Immobilienvermarktungen ja. Matterport bietet immersivere Erfahrung, professionellere Optik und zusätzliche Features (3D-Grundriss, Messungen). Einfache 360° Fotos sind günstiger und ausreichend für einfache Dokumentation.',
    },
    {
      question: 'Was kostet Matterport im Vergleich zu 360° Fotos?',
      answer:
        'Matterport-Scans kosten typischerweise €400-€900 für eine Standardwohnung, während einfache 360° Foto-Touren bei €150-€300 beginnen. Der Preisunterschied wird durch die überlegene Qualität und Features gerechtfertigt.',
    },
    {
      question: 'Kann man 360° Fotos mit dem Smartphone machen?',
      answer:
        'Ja, mit Apps wie Google Street View oder speziellen 360°-Kameras (Ricoh Theta, Insta360). Die Qualität ist jedoch deutlich schlechter als professionelle Aufnahmen. Für private Dokumentation ausreichend, für Verkauf nicht empfohlen.',
    },
    {
      question: 'Was ist die Dollhouse-Ansicht bei Matterport?',
      answer:
        'Die Dollhouse-Ansicht zeigt die gesamte Immobilie als 3D-Modell von außen – wie ein aufgeschnittenes Puppenhaus. Betrachter können die Raumaufteilung auf einen Blick erfassen und die relative Lage der Räume zueinander verstehen.',
    },
  ]),
];

export default function PageFAQMatterportVs360() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="Matterport vs. 360° Foto: Der Unterschied"
        heroSubtitle="3D-Scan vs. Panorama-Bild – welche Technologie ist die richtige für Ihre Immobilie?"
        heroImage="/assets/portfolio/neubau-balkon.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq/unterschied-matterport-360-foto' },
          { name: 'Matterport vs. 360°', href: '/faq/unterschied-matterport-360-foto' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>
            Der Hauptunterschied: Matterport ist ein vollständiger 3D-Scan mit freier Navigation,
            während ein 360° Foto nur die Ansicht von einem festen Standpunkt zeigt.
          </strong>{' '}
          Matterport erfasst die komplette Raumgeometrie und ermöglicht es, sich frei durch die
          Immobilie zu bewegen, Abstände zu messen und die Wohnung aus der Vogelperspektive zu
          betrachten (Dollhouse-View). Ein 360° Foto ist ein einzelnes Panoramabild, das man
          drehen kann, aber nicht verlassen.
        </p>

        <h2>Die Technologien im Überblick</h2>

        <h3>Was ist ein 360° Foto?</h3>

        <p>
          Ein 360° Foto (auch Panorama oder Sphärenfoto genannt) ist eine Aufnahme, die den
          gesamten Raum von einem Standpunkt aus zeigt – 360 Grad horizontal und idealerweise
          180 Grad vertikal. Der Betrachter kann sich im Bild „umschauen", indem er es dreht
          oder neigt.
        </p>

        <h4>Wie wird ein 360° Foto erstellt?</h4>

        <ul>
          <li>
            <strong>Spezialkamera:</strong> Eine 360°-Kamera (z.B. Ricoh Theta, Insta360) nimmt
            mit mehreren Objektiven gleichzeitig auf
          </li>
          <li>
            <strong>Stitching:</strong> Mehrere Einzelbilder werden zu einem nahtlosen Panorama
            zusammengefügt
          </li>
          <li>
            <strong>Smartphone:</strong> Auch mit Smartphone-Apps möglich (Google Street View),
            aber geringere Qualität
          </li>
        </ul>

        <h4>Was ein 360° Foto kann:</h4>

        <ul>
          <li>Raum aus einem Blickwinkel komplett zeigen</li>
          <li>Einfache Einbettung in Websites</li>
          <li>Günstige Erstellung möglich</li>
          <li>Schnelle Ladezeiten</li>
        </ul>

        <h4>Was ein 360° Foto nicht kann:</h4>

        <ul>
          <li>Freie Bewegung durch den Raum</li>
          <li>Maßstabsgetreue Messungen</li>
          <li>Vogelperspektive (Dollhouse)</li>
          <li>Automatische Grundriss-Erstellung</li>
        </ul>

        <h3>Was ist Matterport?</h3>

        <p>
          Matterport ist eine 3D-Scanning-Technologie, die komplette Räume dreidimensional
          erfasst. Das Ergebnis ist ein begehbares 3D-Modell der Immobilie, durch das sich
          Betrachter frei bewegen können.
        </p>

        <h4>Wie funktioniert Matterport?</h4>

        <ul>
          <li>
            <strong>LiDAR + Kameras:</strong> Die Matterport Pro-Kamera kombiniert Infrarot-Tiefensensoren
            mit hochauflösenden Kameras
          </li>
          <li>
            <strong>Mehrere Scan-Punkte:</strong> Die Kamera wird an verschiedenen Stellen im Raum
            positioniert (alle 2-3 Meter)
          </li>
          <li>
            <strong>Cloud-Verarbeitung:</strong> Die Software fügt die Scans zu einem nahtlosen
            3D-Modell zusammen
          </li>
          <li>
            <strong>Dollhouse + Floorplan:</strong> Automatische Generierung von 3D-Ansicht und
            Grundriss
          </li>
        </ul>

        <h4>Was Matterport kann:</h4>

        <ul>
          <li>Freie Navigation durch die gesamte Immobilie</li>
          <li>Nahtlose Übergänge zwischen Räumen</li>
          <li>Maßstabsgetreue Messungen im 3D-Modell</li>
          <li>Dollhouse-Ansicht (3D-Vogelperspektive)</li>
          <li>Automatischer 2D-Grundriss</li>
          <li>Einbettung von Text, Bildern, Videos (Hotspots)</li>
          <li>VR-Kompatibilität</li>
        </ul>

        <h4>Einschränkungen von Matterport:</h4>

        <ul>
          <li>Höhere Kosten als einfache 360° Fotos</li>
          <li>Längere Aufnahmezeit vor Ort</li>
          <li>Größere Datenmenge = längere Ladezeit</li>
          <li>Spezielle Hardware erforderlich</li>
        </ul>

        <h2>Direkter Vergleich: Matterport vs. 360° Foto</h2>

        <h3>Navigation</h3>

        <ul>
          <li>
            <strong>360° Foto:</strong> Statisch. Sie können sich umschauen, aber nicht bewegen.
            Um den nächsten Raum zu sehen, müssen Sie zu einem anderen 360° Foto wechseln (per
            Klick auf Pfeil oder Miniaturansicht).
          </li>
          <li>
            <strong>Matterport:</strong> Dynamisch. Sie bewegen sich frei durch die Immobilie, als
            würden Sie durch die Räume gehen. Nahtlose Übergänge, keine harten Schnitte.
          </li>
        </ul>

        <h3>Immersion</h3>

        <ul>
          <li>
            <strong>360° Foto:</strong> Mittel. Sie sehen den Raum, aber das Gefühl, „dort zu
            sein", ist begrenzt.
          </li>
          <li>
            <strong>Matterport:</strong> Hoch. Die freie Bewegung schafft ein Gefühl der
            physischen Präsenz. Besonders in VR-Brillen sehr immersiv.
          </li>
        </ul>

        <h3>Informationsgehalt</h3>

        <ul>
          <li>
            <strong>360° Foto:</strong> Zeigt, wie ein Raum aussieht.
          </li>
          <li>
            <strong>Matterport:</strong> Zeigt, wie ein Raum aussieht UND wie groß er ist, wie
            Räume zusammenhängen, wie man sich durch die Wohnung bewegt.
          </li>
        </ul>

        <h3>Zusatzfunktionen</h3>

        <ul>
          <li>
            <strong>360° Foto:</strong> Kaum. Höchstens Hotspots mit Textinfos.
          </li>
          <li>
            <strong>Matterport:</strong> Viele: Messungen, Grundriss, Dollhouse, Tags, Guided
            Tours, MatterPak (CAD-Export).
          </li>
        </ul>

        <h3>Kosten</h3>

        <ul>
          <li>
            <strong>360° Foto:</strong> €150-€300 für eine verlinkte Tour aus mehreren 360° Fotos.
          </li>
          <li>
            <strong>Matterport:</strong> €400-€900 für einen vollständigen 3D-Scan.
          </li>
        </ul>

        <h3>Aufnahmezeit</h3>

        <ul>
          <li>
            <strong>360° Foto:</strong> 5-10 Minuten pro Raum mit einfacher Kamera.
          </li>
          <li>
            <strong>Matterport:</strong> 45-90 Minuten für eine komplette Wohnung (je nach Größe).
          </li>
        </ul>

        <h2>Wann ist welche Technologie die richtige?</h2>

        <h3>360° Fotos sind ausreichend für:</h3>

        <ul>
          <li>
            <strong>Dokumentation:</strong> Ist-Zustand für Versicherung, Übergabe, Archiv
          </li>
          <li>
            <strong>Geringes Budget:</strong> Wenn Kosten wichtiger sind als Premium-Erlebnis
          </li>
          <li>
            <strong>Einfache Objekte:</strong> Kleine Wohnungen ohne komplexe Raumaufteilung
          </li>
          <li>
            <strong>Schnelle Erstellung:</strong> Wenn Zeit sehr knapp ist
          </li>
          <li>
            <strong>Ergänzung:</strong> Als Teil eines größeren Medienpakets neben Fotos
          </li>
        </ul>

        <h3>Matterport ist die bessere Wahl für:</h3>

        <ul>
          <li>
            <strong>Verkauf/Vermietung:</strong> Wenn maximale Wirkung auf Interessenten wichtig ist
          </li>
          <li>
            <strong>Hochpreisige Immobilien:</strong> Luxusobjekte, bei denen Käufer Premium-Präsentation
            erwarten
          </li>
          <li>
            <strong>Komplexe Grundrisse:</strong> Wenn Raumaufteilung schwer aus Fotos zu verstehen
            ist
          </li>
          <li>
            <strong>Internationale Käufer:</strong> Die vor dem Kauf nicht persönlich besichtigen können
          </li>
          <li>
            <strong>Neubauten vor Fertigstellung:</strong> Mit 3D-Visualisierung statt physischer
            Besichtigung
          </li>
          <li>
            <strong>Architektur/Bau:</strong> Wo maßstabsgetreue Dokumentation wichtig ist
          </li>
        </ul>

        <h2>Die Dollhouse-Ansicht: Matterports Killer-Feature</h2>

        <p>
          Ein Feature, das Matterport von 360° Fotos fundamental unterscheidet, ist die
          Dollhouse-Ansicht (Puppenhausansicht):
        </p>

        <h3>Was ist die Dollhouse-Ansicht?</h3>

        <p>
          Das 3D-Modell der gesamten Immobilie wird von außen gezeigt – wie ein aufgeschnittenes
          Puppenhaus. Sie sehen alle Räume, ihre Größenverhältnisse und wie sie zueinander liegen.
        </p>

        <h3>Warum ist das wichtig?</h3>

        <ul>
          <li>
            <strong>Orientierung:</strong> Käufer verstehen sofort, wie die Wohnung geschnitten ist
          </li>
          <li>
            <strong>Einzigartigkeit:</strong> Dieses Feature gibt es nur bei 3D-Scans, nicht bei
            Fotos
          </li>
          <li>
            <strong>Wow-Effekt:</strong> Die Dollhouse-Ansicht beeindruckt und differenziert von
            der Konkurrenz
          </li>
          <li>
            <strong>Planungsgrundlage:</strong> Käufer können Möblierung und Nutzung besser
            planen
          </li>
        </ul>

        <h2>Qualitätsunterschiede bei 360° Aufnahmen</h2>

        <p>
          Nicht alle 360° Lösungen sind gleich. Es gibt erhebliche Qualitätsunterschiede:
        </p>

        <h3>Smartphone 360° (z.B. Google Street View App)</h3>

        <ul>
          <li>Kostenlos</li>
          <li>Niedrige Auflösung, sichtbare Stitching-Fehler</li>
          <li>Ungeeignet für professionelle Nutzung</li>
        </ul>

        <h3>Consumer 360° Kameras (Ricoh Theta, Insta360 One)</h3>

        <ul>
          <li>€300-€500</li>
          <li>Ordentliche Qualität für Social Media</li>
          <li>Für professionelle Immobilienfotografie grenzwertig</li>
        </ul>

        <h3>Professionelle 360° Kameras (Insta360 Pro, Kandao Obsidian)</h3>

        <ul>
          <li>€3.000-€8.000</li>
          <li>Hohe Auflösung, gute Dynamik</li>
          <li>Für professionelle 360° Touren geeignet</li>
        </ul>

        <h3>Matterport Pro2/Pro3</h3>

        <ul>
          <li>€4.000-€6.000</li>
          <li>3D-Scan mit LiDAR + 4K-Fotos</li>
          <li>Höchste Qualität, meiste Features</li>
        </ul>

        <h2>Kombinierte Lösung: Das Beste aus beiden Welten</h2>

        <p>
          In der Praxis kombinieren wir oft beide Technologien für optimale Ergebnisse:
        </p>

        <ul>
          <li>
            <strong>Matterport-Scan:</strong> Vollständige 3D-Tour mit Dollhouse und Grundriss
          </li>
          <li>
            <strong>Zusätzliche 360° Highlights:</strong> Spezielle Perspektiven (z.B. Balkon mit
            Ausblick) als eigenständige 360° Fotos
          </li>
          <li>
            <strong>HDR-Fotos:</strong> Klassische Standbilder für Portale und Print
          </li>
        </ul>

        <h2>Unsere Empfehlung</h2>

        <p>
          Für die Vermarktung von Immobilien in Wien empfehlen wir in den meisten Fällen
          Matterport. Die höheren Kosten werden durch bessere Ergebnisse mehr als gerechtfertigt:
        </p>

        <ul>
          <li>49% mehr Anfragen</li>
          <li>31% schnellerer Verkauf</li>
          <li>Professionelleres Image</li>
          <li>Differenzierung von Mitbewerbern</li>
        </ul>

        <p>
          Für reine Dokumentation, sehr kleine Budgets oder Objekte im unteren Preissegment
          können einfache 360° Touren eine kostengünstige Alternative sein.
        </p>

        <h2>Preise im Vergleich</h2>

        <h3>Einfache 360° Tour – ab €190</h3>

        <ul>
          <li>5-8 verlinkte 360° Fotos</li>
          <li>Navigation per Hotspot</li>
          <li>Hosting für 12 Monate</li>
        </ul>

        <h3>Matterport Essential – ab €490</h3>

        <ul>
          <li>Vollständiger 3D-Scan</li>
          <li>Freie Navigation</li>
          <li>Dollhouse + Grundriss</li>
          <li>Hosting für 12 Monate</li>
        </ul>

        <h3>Matterport Premium – ab €790</h3>

        <ul>
          <li>Alles aus Essential</li>
          <li>HDR-Fotos inklusive</li>
          <li>Benutzerdefinierte Tags</li>
          <li>Guided Tour (automatische Führung)</li>
          <li>24 Monate Hosting</li>
        </ul>

        <h2>Jetzt beraten lassen</h2>

        <p>
          Nicht sicher, welche Technologie für Ihre Immobilie die richtige ist? Kontaktieren Sie
          uns für eine kostenlose Beratung. Wir empfehlen die Lösung, die für Ihr spezifisches
          Objekt und Budget am besten passt.
        </p>
      </SEOPageLayout>
    </>
  );
}
