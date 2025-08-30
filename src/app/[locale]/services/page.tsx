import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServicesPageClient from './ServicesPageClient';


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('services.meta');
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'web development services',
      'mobile app development',
      'cloud solutions',
      'AI machine learning services',
      'digital marketing',
      'IT consulting',
      'custom software development',
      'React development',
      'Next.js development',
      'enterprise solutions'
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://incsruvi.com/services',
      siteName: 'Sruvi',
      images: [
        {
          url: '/services-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Sruvi Services - Comprehensive IT Solutions',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/services-og.jpg'],
    },
    alternates: {
      canonical: 'https://incsruvi.com/services',
    },
  };
}

export default async function ServicesPage() {
  const t = await getTranslations('services');
  
  // Structured Data for Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sruvi IT Services",
    "description": "Comprehensive IT solutions including web development, mobile apps, cloud solutions, AI & machine learning, digital marketing, and IT consulting.",
    "provider": {
      "@type": "Organization",
      "name": "Sruvi",
      "url": "https://incsruvi.com"
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
      "Cloud Solutions",
      "AI & Machine Learning",
      "Digital Marketing",
      "IT Consulting"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Modern, responsive websites and web applications built with cutting-edge technologies"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Cloud Solutions",
            "description": "Scalable cloud infrastructure and DevOps solutions for modern applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning", 
            "description": "Intelligent solutions powered by artificial intelligence and machine learning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Strategic digital marketing solutions to boost your online presence and growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting",
            "description": "Expert guidance and strategic planning for your digital transformation journey"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ServicesPageClient/>
    </>
  );
}
