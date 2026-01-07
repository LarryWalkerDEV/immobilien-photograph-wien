import { Metadata } from 'next';

export const siteConfig = {
  name: 'Immobilien-Photograph Wien',
  url: 'https://immobilien-photograph.wien',
  description: '360° Virtuelle Rundgänge & Professionelle Immobilienfotografie in Wien',
  address: {
    street: 'Raaber-Bahn-Gasse 11',
    city: 'Wien',
    postalCode: '1100',
    country: 'AT',
  },
  phone: '+43 1 234 5678',
  email: 'info@immobilien-photograph.wien',
  social: {
    facebook: 'https://facebook.com/immobilienphotographwien',
    instagram: 'https://instagram.com/immobilienphotographwien',
    linkedin: 'https://linkedin.com/company/immobilien-photograph-wien',
  },
};

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  image,
}: {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || '/og-default.jpg';

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'de_AT',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}

// Schema.org structured data generators
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.1706,
      longitude: 16.3834,
    },
    areaServed: [
      { '@type': 'City', name: 'Wien' },
      { '@type': 'AdministrativeArea', name: 'Niederösterreich' },
    ],
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Wien',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    }),
    url: `${siteConfig.url}${service.url}`,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
