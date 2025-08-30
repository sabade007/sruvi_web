import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomePageClient from './HomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('hero');
  
  return {
    title: "Sruvi - Modern Digital Solutions & Web Development",
    description: "Transform your business with Sruvi's cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services. Expert IT consulting and custom software solutions.",
    keywords: [
      "web development company",
      "mobile app development",
      "cloud solutions",
      "AI machine learning",
      "digital marketing services",
      "IT consulting",
      "custom software development",
      "React development",
      "Next.js development",
      "enterprise solutions",
      "digital transformation",
      "Bengaluru IT services"
    ],
    openGraph: {
      title: "Sruvi - Modern Digital Solutions & Web Development",
      description: "Transform your business with Sruvi's cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services.",
      url: 'https://incsruvi.com',
      siteName: 'Sruvi',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Sruvi - Modern Digital Solutions',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Sruvi - Modern Digital Solutions & Web Development",
      description: "Transform your business with Sruvi's cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services.",
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: 'https://incsruvi.com',
    },
  };
}

export default async function HomePage() {
  // Structured Data for Homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sruvi",
    "url": "https://incsruvi.com",
    "description": "Modern digital solutions and web development services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://incsruvi.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sruvi",
      "url": "https://incsruvi.com"
    }
  };

  // Additional structured data for services
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sruvi Services",
    "description": "Comprehensive IT services offered by Sruvi",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Web Development",
        "description": "Modern, responsive websites and web applications built with cutting-edge technologies"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile applications for iOS and Android"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Cloud Solutions",
        "description": "Scalable cloud infrastructure and DevOps solutions for modern applications"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "AI & Machine Learning",
        "description": "Intelligent solutions powered by artificial intelligence and machine learning"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Digital Marketing",
        "description": "Strategic digital marketing solutions to boost your online presence and growth"
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "IT Consulting",
        "description": "Expert guidance and strategic planning for your digital transformation journey"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
      <HomePageClient />
    </>
  );
}
