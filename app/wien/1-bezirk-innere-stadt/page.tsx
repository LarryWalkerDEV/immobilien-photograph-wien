import { Metadata } from 'next';
import { SEOPageLayout } from '@/components/seo/SEOPageLayout';
import { SchemaScript } from '@/components/seo/SchemaScript';
import {
  generatePageMetadata,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo-config';

export const metadata: Metadata = generatePageMetadata({
  title: '360° Rundgänge & Immobilienfotografie 1. Bezirk Wien',
  description:
    'Professionelle Immobilienfotografie und 360° Touren in der Inneren Stadt Wien. Luxuswohnungen, Altbauten, Beletagen perfekt präsentiert. Lokale Expertise.',
  keywords: [
    '360 rundgänge 1 bezirk',
    'immobilienfotograf innere stadt',
    'luxuswohnung fotografie wien 1',
    'altbau fotografie 1010',
    'immobilien innere stadt wien',
    'fotograf 1 bezirk wien',
    'beletage fotografie',
    'penthouse innere stadt',
  ],
  path: '/wien/1-bezirk-innere-stadt',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Rundgänge 1. Bezirk Innere Stadt',
    description:
      'Spezialisierte Immobilienfotografie und virtuelle Touren für Luxusobjekte in Wien 1. Bezirk.',
    url: '/wien/1-bezirk-innere-stadt',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wien', url: '/wien' },
    { name: '1. Bezirk', url: '/wien/1-bezirk-innere-stadt' },
  ]),
];

export default function PageBezirk1() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Rundgänge im 1. Bezirk Innere Stadt"
        heroSubtitle="Premium Immobilienfotografie für Wiens exklusivste Lage"
        heroImage="/assets/portfolio/altbau-innere-stadt.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Wien', href: '/wien/1-bezirk-innere-stadt' },
          { name: '1. Bezirk', href: '/wien/1-bezirk-innere-stadt' },
        ]}
      >
        <p>
          <strong>
            Der 1. Bezirk Innere Stadt ist das Herz Wiens und der exklusivste Immobilienstandort
            Österreichs.
          </strong>{' '}
          Mit durchschnittlichen Quadratmeterpreisen von €15.000-25.000 (und weit darüber für
          Spitzenobjekte) erfordert die Vermarktung von Immobilien in der Inneren Stadt eine
          außergewöhnlich professionelle Präsentation.
        </p>

        <h2>Immobilien in der Inneren Stadt</h2>

        <p>
          Die Innere Stadt vereint historische Pracht mit modernem Luxus. Hier finden sich
          Gründerzeit-Palais, repräsentative Beletagen, exklusive Penthouse-Wohnungen und
          hochwertig sanierte Altbauten in unmittelbarer Nähe zu Stephansdom, Staatsoper und
          Hofburg.
        </p>

        <p>
          Diese einzigartigen Immobilien verdienen eine Präsentation, die ihrem Wert entspricht.
          Professionelle 360°-Rundgänge und Fotografie sind hier kein Luxus, sondern
          Voraussetzung für eine erfolgreiche Vermarktung an anspruchsvolle Käufer.
        </p>

        <h3>Typische Immobilien im 1. Bezirk</h3>

        <ul>
          <li>
            <strong>Altbauwohnungen:</strong> Hohe Decken, Stuck, Fischgrätparkett, historische
            Details
          </li>
          <li>
            <strong>Beletagen:</strong> Repräsentative Hauptgeschoß-Wohnungen in Palais-Häusern
          </li>
          <li>
            <strong>Penthouse-Wohnungen:</strong> Dachgeschoss-Ausbauten mit Terrassen und
            Stadtblick
          </li>
          <li>
            <strong>Geschäftslokale:</strong> Premium-Einzelhandelsflächen in bester Lage
          </li>
          <li>
            <strong>Zinshäuser:</strong> Historische Renditeimmobilien mit Entwicklungspotenzial
          </li>
        </ul>

        <h2>Unsere Expertise im 1. Bezirk</h2>

        <p>
          Wir haben bereits zahlreiche Objekte in der Inneren Stadt fotografiert und verstehen die
          besonderen Anforderungen dieses Marktsegments:
        </p>

        <h3>Historische Details in Szene setzen</h3>

        <p>
          Stuck-Decken, Kassettenböden, Flügeltüren, originale Kachelöfen – diese architektonischen
          Schätze müssen richtig beleuchtet und fotografiert werden. Wir wissen, wie man
          historische Details hervorhebt, ohne den Raum überladen wirken zu lassen.
        </p>

        <h3>Hohe Räume optimal erfassen</h3>

        <p>
          Deckenhöhen von 3,5-4,5 Metern sind in Altbauten der Inneren Stadt Standard. Diese
          Proportionen richtig einzufangen erfordert spezielle Objektive und Aufnahmetechniken.
        </p>

        <h3>Anspruchsvolle Lichtverhältnisse meistern</h3>

        <p>
          Innenhof-Wohnungen, hohe Fenster, dunkle Treppenhäuser – die Lichtsituationen in
          Gründerzeitbauten sind komplex. Mit HDR-Technologie und professioneller Beleuchtung
          schaffen wir ausgewogene, einladende Bilder.
        </p>

        <h3>Internationale Käufer ansprechen</h3>

        <p>
          Viele Käufer im Premium-Segment kommen aus dem Ausland. Unsere virtuellen 360°-Rundgänge
          ermöglichen Interessenten aus aller Welt, die Immobilie intensiv zu erkunden, bevor sie
          nach Wien reisen.
        </p>

        <h2>Services für den 1. Bezirk</h2>

        <h3>360° Virtuelle Rundgänge</h3>

        <p>
          Vollständige, interaktive Touren durch Ihre Luxusimmobilie. Mit Matterport-Technologie
          für höchste Qualität, Dollhouse-Ansicht und präzisen Messtools.
        </p>

        <h3>Premium Immobilienfotografie</h3>

        <p>
          Hochwertige HDR-Fotos, die die Eleganz und den Charakter der Immobilie einfangen.
          Inkl. Twilight-Aufnahmen für besondere Atmosphäre.
        </p>

        <h3>Architektur-Dokumentation</h3>

        <p>
          Detailaufnahmen historischer Elemente, Fassadenansichten, Treppenhäuser – für eine
          vollständige Dokumentation des architektonischen Wertes.
        </p>

        <h3>Drohnenaufnahmen</h3>

        <p>
          Für Dachgeschoss-Wohnungen und zur Darstellung der Lage im historischen Zentrum.
          (Genehmigungspflichtig im Stadtgebiet – wir kümmern uns darum.)
        </p>

        <h2>Referenzprojekte Innere Stadt</h2>

        <p>
          Auf Anfrage zeigen wir Ihnen gerne Referenzprojekte aus dem 1. Bezirk. Aufgrund der
          Diskretion vieler unserer Auftraggeber präsentieren wir diese nur in persönlichen
          Gesprächen.
        </p>

        <h3>Beispielhafte Projekte:</h3>

        <ul>
          <li>Beletage am Graben – 280m², historischer Stuck, 4,2m Deckenhöhe</li>
          <li>Penthouse Kärntner Straße – Dachterrasse mit Stephansdom-Blick</li>
          <li>Altbauwohnung Kohlmarkt – vollständig saniert, 5 Zimmer</li>
          <li>Palais-Wohnung am Ring – repräsentative 450m² über zwei Etagen</li>
        </ul>

        <h2>Der Immobilienmarkt im 1. Bezirk</h2>

        <h3>Preissegment</h3>

        <p>
          Die Innere Stadt ist Wiens teuerstes Pflaster. Durchschnittliche Preise liegen bei
          €15.000-25.000 pro Quadratmeter, Spitzenobjekte erreichen €30.000+. Bei diesen
          Summen ist eine professionelle Präsentation keine Option – sie ist Pflicht.
        </p>

        <h3>Käuferstruktur</h3>

        <p>
          Der 1. Bezirk zieht eine internationale, vermögende Klientel an:
        </p>

        <ul>
          <li>Österreichische und internationale Unternehmer</li>
          <li>Diplomaten und internationale Organisationen</li>
          <li>Investoren auf der Suche nach Wertanlage</li>
          <li>Käufer von Zweitwohnsitzen</li>
        </ul>

        <h3>Besondere Herausforderungen</h3>

        <ul>
          <li>
            <strong>Diskretion:</strong> Viele Verkäufe erfolgen off-market
          </li>
          <li>
            <strong>Denkmalschutz:</strong> Einschränkungen bei Umbau und Modernisierung
          </li>
          <li>
            <strong>Internationale Vermarktung:</strong> Materialien in mehreren Sprachen
          </li>
        </ul>

        <h2>Warum lokale Expertise wichtig ist</h2>

        <p>
          Wir kennen die Innere Stadt – nicht nur die Straßenzüge, sondern auch die Besonderheiten
          der Gebäude, die besten Tageszeiten für Aufnahmen, die Geschichten hinter den Fassaden.
          Diese lokale Kenntnis fließt in jedes Projekt ein und macht den Unterschied zwischen
          guten und außergewöhnlichen Aufnahmen.
        </p>

        <h2>Jetzt Beratung für Ihr Objekt im 1. Bezirk</h2>

        <p>
          Sie vermarkten eine Immobilie in der Inneren Stadt? Kontaktieren Sie uns für ein
          persönliches Gespräch. Wir beraten Sie zur optimalen Präsentation und erstellen ein
          individuelles Angebot.
        </p>
      </SEOPageLayout>
    </>
  );
}
