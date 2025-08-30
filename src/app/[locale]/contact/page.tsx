import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: [
      'contact Sruvi',
      'web development contact',
      'mobile app development contact',
      'IT consulting contact',
      'Bengaluru IT services',
      'software development contact'
    ],
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: 'https://incsruvi.com/contact',
      siteName: 'Sruvi',
      images: [
        {
          url: '/contact-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact Sruvi - Get In Touch',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
      images: ['/contact-og.jpg'],
    },
    alternates: {
      canonical: 'https://incsruvi.com/contact',
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  
  // Structured Data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Sruvi",
    "description": "Get in touch with Sruvi for web development, mobile apps, cloud solutions, and IT consulting services.",
    "url": "https://incsruvi.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sruvi",
      "url": "https://incsruvi.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9731171611",
          "contactType": "customer service",
          "email": "hello@incsruvi.com",
          "availableLanguage": ["English", "Hindi", "Kannada"],
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No 99, 3rd floor, PoornaPragna Layout Kathriguppe",
        "addressLocality": "Bengaluru",
        "postalCode": "560070",
        "addressCountry": "IN"
      },
      "openingHours": [
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
      <div className="min-h-screen">
        <Header />
        <Breadcrumb />
        <div className="pt-20">
          {/* Contact Section */}
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
