// SEO Configuration and Helper Functions

export const SEO_CONFIG = {
  site: {
    name: 'Sruvi',
    url: 'https://incsruvi.com',
    description: 'Transform your business with Sruvi\'s cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services.',
    logo: 'https://incsruvi.com/logo.png',
    email: 'hello@incsruvi.com',
    phone: '+91-9731171611',
    address: {
      street: 'No 99, 3rd floor, PoornaPragna Layout Kathriguppe',
      city: 'Bengaluru',
      postalCode: '560070',
      country: 'India'
    }
  },
  social: {
    twitter: '@sruvi',
    facebook: 'sruvi',
    linkedin: 'company/sruvi',
    instagram: 'sruvi'
  },
  defaultMeta: {
    title: 'Sruvi - Modern Digital Solutions & Web Development',
    description: 'Transform your business with Sruvi\'s cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services.',
    keywords: [
      'web development',
      'mobile app development',
      'cloud solutions',
      'AI machine learning',
      'digital marketing',
      'IT consulting',
      'software development',
      'custom software',
      'React development',
      'Next.js development',
      'enterprise solutions',
      'digital transformation'
    ],
    author: 'Sruvi Team',
    robots: 'index, follow',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  }
};

// Helper function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website'
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}) {
  const fullTitle = title.includes('Sruvi') ? title : `${title} | Sruvi`;
  const fullDescription = description || SEO_CONFIG.defaultMeta.description;
  const fullKeywords = [...SEO_CONFIG.defaultMeta.keywords, ...keywords];
  const fullUrl = url ? `${SEO_CONFIG.site.url}${url}` : SEO_CONFIG.site.url;
  const fullImage = image ? `${SEO_CONFIG.site.url}${image}` : `${SEO_CONFIG.site.url}/og-image.jpg`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: SEO_CONFIG.site.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: SEO_CONFIG.social.twitter,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// Helper function to generate organization structured data
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.site.name,
    "url": SEO_CONFIG.site.url,
    "logo": SEO_CONFIG.site.logo,
    "description": SEO_CONFIG.site.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.site.address.street,
      "addressLocality": SEO_CONFIG.site.address.city,
      "postalCode": SEO_CONFIG.site.address.postalCode,
      "addressCountry": SEO_CONFIG.site.address.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SEO_CONFIG.site.phone,
      "contactType": "customer service",
      "email": SEO_CONFIG.site.email,
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    "sameAs": [
      `https://twitter.com/${SEO_CONFIG.social.twitter}`,
      `https://linkedin.com/${SEO_CONFIG.social.linkedin}`,
      `https://facebook.com/${SEO_CONFIG.social.facebook}`,
      `https://instagram.com/${SEO_CONFIG.social.instagram}`
    ],
    "foundingDate": "2019",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "geoRadius": "50000"
    }
  };
}

// Helper function to generate service structured data
export function generateServiceStructuredData(service: {
  name: string;
  description: string;
  url: string;
  provider: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider,
      "url": SEO_CONFIG.site.url
    },
    "url": service.url,
    "serviceType": service.name,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };
}

// Helper function to generate local business structured data
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEO_CONFIG.site.name,
    "description": SEO_CONFIG.site.description,
    "url": SEO_CONFIG.site.url,
    "telephone": SEO_CONFIG.site.phone,
    "email": SEO_CONFIG.site.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.site.address.street,
      "addressLocality": SEO_CONFIG.site.address.city,
      "postalCode": SEO_CONFIG.site.address.postalCode,
      "addressCountry": SEO_CONFIG.site.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };
}

// Helper function to generate article structured data
export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  url: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "url": article.url,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.site.name,
      "logo": {
        "@type": "ImageObject",
        "url": SEO_CONFIG.site.logo
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "image": article.image ? `${SEO_CONFIG.site.url}${article.image}` : undefined,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${SEO_CONFIG.site.url}${crumb.url}`
    }))
  };
}

// Helper function to generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Helper function to generate review structured data
export function generateReviewStructuredData(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Organization",
      "name": SEO_CONFIG.site.name
    },
    "ratingValue": averageRating,
    "reviewCount": reviews.length,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
}
