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
  title: '360° Rundgänge & Immobilienfotografie 22. Bezirk Donaustadt',
  description:
    'Professionelle Immobilienfotografie und 360° Touren in der Donaustadt und Seestadt Wien. Neubauprojekte, moderne Wohnungen. Schnell wachsender Bezirk.',
  keywords: [
    'neubau seestadt fotografie',
    '360 rundgang donaustadt',
    'immobilienfotograf 22 bezirk',
    'seestadt aspern fotografie',
    'neubauwohnung wien 22',
    'immobilien donaustadt',
    'moderne wohnung fotografie',
    '1220 wien immobilien',
  ],
  path: '/wien/22-bezirk-donaustadt-seestadt',
});

const schemas = [
  generateLocalBusinessSchema(),
  generateServiceSchema({
    name: '360° Rundgänge 22. Bezirk Donaustadt',
    description:
      'Spezialisierte Immobilienfotografie für Neubauprojekte in Wien Donaustadt und Seestadt.',
    url: '/wien/22-bezirk-donaustadt-seestadt',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wien', url: '/wien' },
    { name: '22. Bezirk', url: '/wien/22-bezirk-donaustadt-seestadt' },
  ]),
];

export default function PageBezirk22() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <SEOPageLayout
        heroTitle="360° Rundgänge im 22. Bezirk Donaustadt"
        heroSubtitle="Wiens Wachstumsbezirk: Seestadt, Neubauprojekte und moderne Architektur"
        heroImage="/assets/portfolio/neubau-balkon.png"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Wien', href: '/wien/22-bezirk-donaustadt-seestadt' },
          { name: '22. Bezirk', href: '/wien/22-bezirk-donaustadt-seestadt' },
        ]}
      >
        <p>
          <strong>
            Der 22. Bezirk Donaustadt ist Wiens größter und am schnellsten wachsender Bezirk.
          </strong>{' '}
          Mit der Seestadt Aspern entsteht hier eines der größten Stadtentwicklungsprojekte
          Europas. Moderne Neubauten, innovative Architektur und zeitgemäßes Wohnen prägen
          den Charakter – und erfordern eine zeitgemäße Präsentation.
        </p>

        <h2>Der Immobilienmarkt in der Donaustadt</h2>

        <p>
          Die Donaustadt bietet eine einzigartige Mischung aus urbanem Wohnen, Natur am Wasser
          und modernen Neubauprojekten. Der Bezirk zieht vor allem junge Familien, Erstbezieher
          und Investoren an, die von der Entwicklungsdynamik profitieren wollen.
        </p>

        <h3>Typische Immobilien im 22. Bezirk</h3>

        <ul>
          <li>
            <strong>Neubauwohnungen:</strong> Moderne Projekte mit Smart-Home, Balkon, Tiefgarage
          </li>
          <li>
            <strong>Seestadt-Wohnungen:</strong> Innovative Architektur im neuen Stadtteil
          </li>
          <li>
            <strong>Reihenhäuser:</strong> Familienfreundliche Neubauten in Wohnanlagen
          </li>
          <li>
            <strong>Dachgeschoss-Wohnungen:</strong> Ausgebaute Dachböden mit Terrassen
          </li>
          <li>
            <strong>Anlegerwohnungen:</strong> Renditestarke Objekte für Investoren
          </li>
        </ul>

        <h2>Seestadt Aspern: Europas größtes Stadtentwicklungsprojekt</h2>

        <p>
          Die Seestadt ist das Vorzeigeprojekt urbaner Entwicklung in Wien. Auf 240 Hektar
          entstehen Wohnungen für 20.000 Menschen, dazu Arbeitsplätze, Schulen, Parks und
          ein künstlicher See. Die Architektur ist modern, nachhaltig und innovativ.
        </p>

        <h3>Besonderheiten der Seestadt-Fotografie</h3>

        <p>
          Die moderne Architektur der Seestadt erfordert einen entsprechenden Fotografie-Ansatz:
        </p>

        <ul>
          <li>
            <strong>Klare Linien:</strong> Moderne Architektur mit präzisen Perspektiven
            einfangen
          </li>
          <li>
            <strong>Lichtdurchflutet:</strong> Große Fensterflächen optimal nutzen
          </li>
          <li>
            <strong>Smart Features:</strong> Moderne Ausstattung dokumentieren
          </li>
          <li>
            <strong>Umgebung:</strong> See, Parks und Infrastruktur als Selling Points
          </li>
        </ul>

        <h2>Unsere Services für die Donaustadt</h2>

        <h3>360° Rundgänge für Neubauwohnungen</h3>

        <p>
          Virtuelle Touren sind ideal für moderne Wohnungen: Sie zeigen die offenen Grundrisse,
          die Raumaufteilung und das Lichtkonzept besser als statische Fotos.
        </p>

        <h3>Effiziente Fotografie für Bauträger</h3>

        <p>
          Wir arbeiten regelmäßig mit Bauträgern zusammen, die mehrere Einheiten in einem
          Projekt vermarkten. Unsere Workflows sind auf Effizienz und Konsistenz optimiert.
        </p>

        <h3>Drohnenaufnahmen für Projekte</h3>

        <p>
          Luftaufnahmen von Neubauprojekten zeigen die Dimensionen, die Lage und die
          Außenanlagen. Ideal für die Gesamtvermarktung von Wohnanlagen.
        </p>

        <h3>Schnelle Lieferung</h3>

        <p>
          In der Donaustadt entstehen laufend neue Projekte. Wir garantieren schnelle
          Lieferzeiten, damit Sie Ihre Wohnungen zeitnah listen können.
        </p>

        <h2>Vorteile der Donaustadt für Immobilienkäufer</h2>

        <p>
          Die Donaustadt bietet zahlreiche Vorteile, die wir in unserer Fotografie hervorheben:
        </p>

        <ul>
          <li>
            <strong>U2-Anbindung:</strong> Direkte U-Bahn-Verbindung in die Stadt
          </li>
          <li>
            <strong>Natur:</strong> Donauinsel, Lobau, Alte Donau in unmittelbarer Nähe
          </li>
          <li>
            <strong>Infrastruktur:</strong> Einkaufszentren, Schulen, Kindergärten
          </li>
          <li>
            <strong>Wachstum:</strong> Wertsteigerungspotenzial durch Stadtentwicklung
          </li>
          <li>
            <strong>Moderne Standards:</strong> Energieeffiziente Neubauten
          </li>
        </ul>

        <h2>Preise in der Donaustadt</h2>

        <p>
          Im Vergleich zu innerstädtischen Bezirken bietet die Donaustadt attraktive Preise
          bei modernen Standards:
        </p>

        <ul>
          <li>Neubauwohnungen: €4.500-6.500 pro m²</li>
          <li>Seestadt: €5.000-7.000 pro m²</li>
          <li>Reihenhäuser: €400.000-700.000</li>
        </ul>

        <h3>Käuferstruktur</h3>

        <ul>
          <li>Junge Familien auf Wohnungssuche</li>
          <li>Erstbezieher und Aufsteiger</li>
          <li>Anleger für Mietwohnungen</li>
          <li>Unternehmen für Mitarbeiter-Wohnungen</li>
        </ul>

        <h2>Zusammenarbeit mit Bauträgern</h2>

        <p>
          Wir sind erfahren in der Zusammenarbeit mit Bauträgern und Projektentwicklern in der
          Donaustadt. Unsere Services umfassen:
        </p>

        <ul>
          <li>Fotografie aller Wohnungstypen eines Projekts</li>
          <li>3D-Visualisierungen vor Fertigstellung</li>
          <li>Virtuelle Touren für Musterwohnungen</li>
          <li>Baufortschritts-Dokumentation</li>
          <li>Drohnenaufnahmen des Gesamtprojekts</li>
        </ul>

        <h3>Mengenrabatte für Projekte</h3>

        <p>
          Bei mehreren Einheiten bieten wir attraktive Projektpreise. Kontaktieren Sie uns
          für ein individuelles Angebot.
        </p>

        <h2>Case Study: Neubauanlage Seestadt</h2>

        <p>
          Für einen Bauträger in der Seestadt haben wir die komplette Vermarktung von 85
          Wohnungen in 6 verschiedenen Typen unterstützt:
        </p>

        <ul>
          <li>360°-Rundgänge aller 6 Wohnungstypen</li>
          <li>Professionelle Fotos der Musterwohnungen</li>
          <li>Drohnenaufnahmen des Gesamtprojekts</li>
          <li>3D-Grundrisse aller Typen</li>
          <li>Video für Social Media Marketing</li>
        </ul>

        <h3>Ergebnis:</h3>

        <p>
          Alle 85 Wohnungen waren innerhalb von 6 Monaten nach Fertigstellung verkauft –
          3 Monate schneller als vom Bauträger geplant.
        </p>

        <h2>Jetzt Ihr Donaustadt-Projekt starten</h2>

        <p>
          Sie vermarkten Immobilien in der Donaustadt oder Seestadt? Kontaktieren Sie uns
          für effiziente, professionelle Visualisierung. Wir verstehen den dynamischen Markt
          und liefern schnell.
        </p>
      </SEOPageLayout>
    </>
  );
}
