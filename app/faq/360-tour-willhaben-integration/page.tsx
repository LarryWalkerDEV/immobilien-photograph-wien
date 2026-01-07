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
  title: '360° Tour auf willhaben einbinden – Anleitung 2024',
  description:
    'So binden Sie eine 360° Tour oder virtuellen Rundgang auf willhaben ein. Schritt-für-Schritt Anleitung für Immobilienanzeigen mit Matterport und anderen Anbietern.',
  keywords: [
    '360 tour willhaben',
    'virtuelle tour willhaben',
    'willhaben 360 grad',
    'matterport willhaben',
    '3d tour willhaben einbinden',
    'willhaben rundgang',
    'immobilien tour willhaben',
    'willhaben virtuelle besichtigung',
  ],
  path: '/faq/360-tour-willhaben-integration',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
    { name: 'willhaben Integration', url: '/faq/360-tour-willhaben-integration' },
  ]),
  generateFAQSchema([
    {
      question: 'Kann man eine 360° Tour auf willhaben einbinden?',
      answer:
        'Ja, willhaben unterstützt die Integration von virtuellen Touren. Sie können einen Link zur Tour im Beschreibungstext einfügen oder bei Immobilienanzeigen das spezielle Feld "Virtuelle Tour" nutzen, das bei gewerblichen Inseraten verfügbar ist.',
    },
    {
      question: 'Wie füge ich eine Matterport-Tour bei willhaben hinzu?',
      answer:
        'Kopieren Sie den Share-Link Ihrer Matterport-Tour und fügen Sie ihn im Feld "Virtuelle Tour/Video" ein (bei gewerblichen Inseraten) oder integrieren Sie ihn prominent im Beschreibungstext mit einem Hinweis wie "➡️ Virtuelle Besichtigung: [Link]".',
    },
    {
      question: 'Werden 360° Touren direkt in willhaben angezeigt?',
      answer:
        'Nein, willhaben bettet externe Touren nicht direkt ein. Interessenten klicken auf den Link und werden zur Tour weitergeleitet (öffnet in neuem Tab). Die Tour wird nicht im willhaben-Inserat selbst abgespielt.',
    },
    {
      question: 'Welche Portale unterstützen 360° Tour-Einbettung in Österreich?',
      answer:
        'willhaben, ImmobilienScout24.at und derStandard/Immo unterstützen Links zu virtuellen Touren. Direkte iFrame-Einbettung ist meist nur auf eigenen Websites oder spezialisierten Plattformen möglich.',
    },
    {
      question: 'Erhöht eine 360° Tour die Sichtbarkeit auf willhaben?',
      answer:
        'Ja. Anzeigen mit virtuellen Touren erhalten mehr Klicks und längere Verweildauer. willhaben hebt Inserate mit zusätzlichen Medien (Videos, Touren) in den Suchergebnissen teilweise hervor.',
    },
  ]),
];

export default function PageFAQWillhabenIntegration() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Tour auf willhaben einbinden"
        heroSubtitle="Schritt-für-Schritt Anleitung: Virtuelle Rundgänge in Ihre Immobilienanzeige integrieren"
        heroImage="/assets/portfolio/altbau-innere-stadt.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq/360-tour-willhaben-integration' },
          { name: 'willhaben Integration', href: '/faq/360-tour-willhaben-integration' },
        ]}
      >
        {/* Direct Answer for LLM/Featured Snippet */}
        <p>
          <strong>
            Um eine 360° Tour auf willhaben einzubinden, fügen Sie den Share-Link Ihrer Tour
            im Feld „Virtuelle Tour/Video" ein (bei gewerblichen Inseraten) oder integrieren
            Sie ihn prominent im Beschreibungstext.
          </strong>{' '}
          willhaben zeigt die Tour nicht direkt im Inserat an – Interessenten klicken auf den
          Link und werden zur externen Tour weitergeleitet. Diese Integration erhöht die
          Klickrate um bis zu 49% und die Anfragequote deutlich.
        </p>

        <h2>willhaben und virtuelle Touren: Die Grundlagen</h2>

        <p>
          willhaben ist mit über 9 Millionen Besuchern pro Monat Österreichs größtes
          Immobilienportal. Eine professionelle Präsentation auf dieser Plattform ist
          entscheidend für den Verkaufserfolg. Hier erfahren Sie, wie Sie Ihre 360° Tour
          optimal integrieren.
        </p>

        <h3>Was willhaben technisch unterstützt</h3>

        <ul>
          <li>
            <strong>Links zu virtuellen Touren:</strong> Ja, als URL im Text oder im dedizierten
            Feld (gewerbliche Inserate)
          </li>
          <li>
            <strong>Direkte iFrame-Einbettung:</strong> Nein, externe Inhalte werden nicht direkt
            eingebettet
          </li>
          <li>
            <strong>Video-Upload:</strong> Ja, für bestimmte Kategorien
          </li>
          <li>
            <strong>Matterport-Integration:</strong> Per Link, nicht nativ
          </li>
        </ul>

        <h3>Privat vs. Gewerblich inserieren</h3>

        <p>
          willhaben unterscheidet zwischen privaten und gewerblichen Inseraten:
        </p>

        <ul>
          <li>
            <strong>Private Inserate:</strong> Link zur Tour im Beschreibungstext einfügen
          </li>
          <li>
            <strong>Gewerbliche Inserate (Makler):</strong> Zusätzliches Feld „Virtuelle Tour/Video"
            verfügbar
          </li>
        </ul>

        <h2>Schritt-für-Schritt: 360° Tour bei willhaben einbinden</h2>

        <h3>Schritt 1: Share-Link Ihrer Tour kopieren</h3>

        <p>
          Zunächst benötigen Sie den Link zu Ihrer virtuellen Tour. Je nach Anbieter:
        </p>

        <h4>Bei Matterport:</h4>

        <ol>
          <li>Öffnen Sie Ihre Tour im Matterport-Dashboard</li>
          <li>Klicken Sie auf „Share" (Teilen)</li>
          <li>Kopieren Sie den „Share Link" (Format: https://my.matterport.com/show/?m=...)</li>
        </ol>

        <h4>Bei anderen Anbietern:</h4>

        <ul>
          <li>
            <strong>Kuula:</strong> „Share" → Link kopieren
          </li>
          <li>
            <strong>Ricoh Tours:</strong> Über Dashboard → „Link teilen"
          </li>
          <li>
            <strong>Eigenes Hosting:</strong> Direkte URL Ihrer Tour-Seite
          </li>
        </ul>

        <h3>Schritt 2a: Für gewerbliche Inserate (Makler)</h3>

        <ol>
          <li>Erstellen Sie ein neues Immobilieninserat oder bearbeiten Sie ein bestehendes</li>
          <li>Scrollen Sie zum Bereich „Medien" oder „Zusätzliche Informationen"</li>
          <li>Suchen Sie das Feld „Virtuelle Tour" oder „Video-Link"</li>
          <li>Fügen Sie den kopierten Link ein</li>
          <li>Speichern Sie das Inserat</li>
        </ol>

        <h3>Schritt 2b: Für private Inserate</h3>

        <ol>
          <li>Erstellen Sie ein neues Inserat oder bearbeiten Sie ein bestehendes</li>
          <li>Im Beschreibungsfeld, fügen Sie den Link prominent ein</li>
          <li>Verwenden Sie eine klare Beschriftung</li>
        </ol>

        <h4>Beispiel-Formulierung:</h4>

        <p>
          „Diese Wohnung bietet 85m² Wohnfläche in zentraler Lage...
        </p>

        <p>
          <strong>➡️ VIRTUELLE BESICHTIGUNG:</strong><br />
          Erkunden Sie die Wohnung vorab in unserem 360°-Rundgang:<br />
          [Hier Link einfügen]
        </p>

        <p>
          Ausstattung: ..."
        </p>

        <h3>Schritt 3: Optimale Platzierung im Text</h3>

        <p>
          Platzieren Sie den Tour-Link so, dass er nicht übersehen wird:
        </p>

        <ul>
          <li>
            <strong>Am Anfang:</strong> Direkt nach der ersten Beschreibung
          </li>
          <li>
            <strong>Mit Hervorhebung:</strong> Emojis (➡️ 🏠 🔍) oder GROSSBUCHSTABEN
          </li>
          <li>
            <strong>Mit Kontext:</strong> Erklären Sie kurz, was die Tour zeigt
          </li>
          <li>
            <strong>Wiederholung:</strong> Optional auch am Ende des Textes nochmal
          </li>
        </ul>

        <h2>Best Practices für maximale Wirkung</h2>

        <h3>Titelbild optimieren</h3>

        <p>
          Das Titelbild entscheidet, ob Nutzer auf Ihr Inserat klicken. Tipps:
        </p>

        <ul>
          <li>Wählen Sie das beste Foto der Immobilie als Hauptbild</li>
          <li>Verwenden Sie ein professionelles Foto, nicht das Tour-Thumbnail</li>
          <li>Helligkeit und Farben sollten ansprechend sein</li>
        </ul>

        <h3>Text-Hinweis auf die Tour</h3>

        <p>
          Im Titel des Inserats können Sie auf die Tour hinweisen:
        </p>

        <ul>
          <li>„3-Zimmer-Wohnung mit VIRTUELLER TOUR | Zentrale Lage"</li>
          <li>„Penthouse 120m² | 360° BESICHTIGUNG VERFÜGBAR"</li>
        </ul>

        <p>
          Achtung: willhaben kann zu werbliche Titel ablehnen. Testen Sie, was akzeptiert wird.
        </p>

        <h3>Alle Fotos plus Tour</h3>

        <p>
          Die virtuelle Tour ersetzt Fotos nicht – sie ergänzt sie:
        </p>

        <ul>
          <li>Laden Sie trotzdem 15-20 hochwertige Fotos hoch</li>
          <li>Nutzer, die nicht auf den Tour-Link klicken, sehen sonst nichts</li>
          <li>Fotos werden in Suchergebnissen angezeigt, Touren nicht</li>
        </ul>

        <h2>Andere Immobilienportale in Österreich</h2>

        <p>
          Neben willhaben sollten Sie Ihre Tour auch auf anderen Portalen integrieren:
        </p>

        <h3>ImmobilienScout24.at</h3>

        <ul>
          <li>Unterstützt Links zu virtuellen Touren</li>
          <li>Für gewerbliche Kunden: Eigenes Feld für Tour-URL</li>
          <li>Integration ähnlich wie bei willhaben</li>
        </ul>

        <h3>derStandard.at/Immobilien</h3>

        <ul>
          <li>Link im Beschreibungstext möglich</li>
          <li>Premium-Inserate können zusätzliche Medien einbinden</li>
        </ul>

        <h3>Immowelt.at</h3>

        <ul>
          <li>Unterstützt 360°-Tour-Links</li>
          <li>Für Makler: Direkte Integration in Exposé-Software</li>
        </ul>

        <h3>Eigene Website</h3>

        <p>
          Auf Ihrer eigenen Website können Sie die Tour direkt einbetten (iFrame). Das bietet:
        </p>

        <ul>
          <li>Nahtlose Integration im Design</li>
          <li>Keine Weiterleitung nötig</li>
          <li>Volle Kontrolle über die Präsentation</li>
        </ul>

        <h2>Tracking: Wissen, wer Ihre Tour ansieht</h2>

        <h3>Matterport Analytics</h3>

        <p>
          Matterport bietet detaillierte Statistiken:
        </p>

        <ul>
          <li>Anzahl der Tour-Aufrufe</li>
          <li>Durchschnittliche Verweildauer</li>
          <li>Welche Räume am meisten betrachtet werden</li>
          <li>Von welcher Quelle die Besucher kommen</li>
        </ul>

        <h3>UTM-Parameter nutzen</h3>

        <p>
          Um zu sehen, wie viele willhaben-Nutzer Ihre Tour aufrufen, fügen Sie UTM-Parameter
          zum Link hinzu:
        </p>

        <p>
          <code>https://my.matterport.com/show/?m=XXXXX&utm_source=willhaben&utm_medium=listing</code>
        </p>

        <p>
          So können Sie in den Statistiken sehen, wie viel Traffic von willhaben kommt.
        </p>

        <h2>Häufige Fragen zur willhaben-Integration</h2>

        <h3>Wird die Tour direkt im Inserat abgespielt?</h3>

        <p>
          Nein. willhaben bettet externe Inhalte nicht direkt ein. Nutzer klicken auf den Link
          und werden zur Tour weitergeleitet (öffnet meist in neuem Tab).
        </p>

        <h3>Kann ich ein Tour-Thumbnail als Foto hochladen?</h3>

        <p>
          Ja, Sie können einen Screenshot oder das Thumbnail Ihrer Tour als eines der Bilder
          hochladen. Beschriften Sie es mit „Virtuelle Tour verfügbar" im Bild selbst.
        </p>

        <h3>Akzeptiert willhaben alle Tour-Anbieter?</h3>

        <p>
          willhaben akzeptiert Links zu allen gängigen Tour-Anbietern:
        </p>

        <ul>
          <li>Matterport</li>
          <li>Kuula</li>
          <li>3DVista</li>
          <li>Ricoh Tours</li>
          <li>Eigene Hosting-Lösungen</li>
        </ul>

        <h3>Was, wenn der Link nicht funktioniert?</h3>

        <p>
          Stellen Sie sicher, dass:
        </p>

        <ul>
          <li>Der Link öffentlich zugänglich ist (nicht passwortgeschützt)</li>
          <li>Das Hosting aktiv ist (nicht abgelaufen)</li>
          <li>Der Link vollständig kopiert wurde (keine abgeschnittenen Zeichen)</li>
        </ul>

        <h2>Vorteile einer Tour auf willhaben</h2>

        <h3>Mehr Aufmerksamkeit</h3>

        <p>
          Inserate mit virtuellen Touren heben sich von der Masse ab. In einer Ergebnisliste
          mit 50 Wohnungen fällt das Inserat mit „Virtuelle Tour verfügbar" auf.
        </p>

        <h3>Bessere Vorselektion</h3>

        <p>
          Interessenten, die die Tour gesehen haben, wissen bereits genau, was sie erwartet.
          Weniger „Nur mal gucken"-Besichtigungen, mehr ernsthafte Interessenten.
        </p>

        <h3>Internationale Reichweite</h3>

        <p>
          willhaben wird auch von Suchenden aus dem Ausland genutzt. Diese können die Immobilie
          virtuell besichtigen, ohne anreisen zu müssen.
        </p>

        <h3>Messbar bessere Performance</h3>

        <p>
          Statistiken zeigen:
        </p>

        <ul>
          <li>49% mehr Anfragen bei Inseraten mit Tour</li>
          <li>95% der Nutzer, die eine Tour ansehen, haben ernsthaftes Interesse</li>
          <li>31% schnellerer Verkauf</li>
        </ul>

        <h2>Unsere Unterstützung</h2>

        <p>
          Wir helfen Ihnen nicht nur bei der Erstellung der 360° Tour, sondern auch bei der
          optimalen Integration:
        </p>

        <ul>
          <li>Bereitstellung des optimierten Share-Links</li>
          <li>Textvorlagen für willhaben-Beschreibung</li>
          <li>Thumbnail-Bild für Ihre Fotogalerie</li>
          <li>Anleitung für verschiedene Portale</li>
        </ul>

        <h2>Jetzt Tour erstellen lassen</h2>

        <p>
          Bereit für mehr Anfragen auf willhaben? Kontaktieren Sie uns für eine professionelle
          360° Tour, die Sie auf allen Immobilienportalen einsetzen können.
        </p>
      </SEOPageLayout>
    </>
  );
}
