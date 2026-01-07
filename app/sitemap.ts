import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://immobilien-photograph.wien';
  const currentDate = new Date().toISOString();

  // Core pages with highest priority
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/360-grad-rundgaenge-immobilien-wien', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/immobilienfotografie-wien', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/drohnenaufnahmen-immobilien-wien', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/3d-grundriss-visualisierung', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/matterport-3d-touren-wien', priority: 0.9, changeFrequency: 'weekly' as const },
  ];

  // Target audience pages
  const audiencePages = [
    { url: '/360-rundgaenge-immobilienmakler', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/virtuelle-touren-bautraeger', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/immobilienfotografie-privatverkauf', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/luxusimmobilien-fotografie-wien', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/immobilien-marketing-komplettpaket', priority: 0.85, changeFrequency: 'weekly' as const },
  ];

  // Vienna district pages (local SEO)
  const districtPages = [
    { url: '/wien/1-bezirk-innere-stadt', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/wien/7-bezirk-neubau', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/wien/13-bezirk-hietzing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/wien/19-bezirk-doebling', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/wien/22-bezirk-donaustadt-seestadt', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  // FAQ/LLM-optimized pages
  const faqPages = [
    { url: '/faq/was-kostet-360-tour-immobilie-wien', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/faq/immobilie-schneller-verkaufen-360-tour', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/faq/warum-makler-professionelle-fotos', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/faq/unterschied-matterport-360-foto', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/faq/360-tour-willhaben-integration', priority: 0.75, changeFrequency: 'monthly' as const },
  ];

  // Conversion pages
  const conversionPages = [
    { url: '/preise-pakete', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/kontakt', priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  // Legal pages
  const legalPages = [
    { url: '/impressum', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/agb', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Variant pages (for client selection)
  const variantPages = [
    { url: '/variant-a', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/variant-b', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/variant-c', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/variant-d', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const allPages = [
    ...corePages,
    ...audiencePages,
    ...districtPages,
    ...faqPages,
    ...conversionPages,
    ...legalPages,
    ...variantPages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
