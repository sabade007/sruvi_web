import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { locales } from '../../../i18n';
import { Providers } from "../../components/providers";
import MobilePerformanceOptimizer from "../../components/MobilePerformanceOptimizer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://incsruvi.com'),
  title: {
    default: "Sruvi - Modern Digital Solutions & Web Development",
    template: "%s | Sruvi"
  },
  description: "Transform your business with Sruvi's cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services. Expert IT consulting and custom software solutions.",
  keywords: [
    "web development",
    "mobile app development", 
    "cloud solutions",
    "AI machine learning",
    "digital marketing",
    "IT consulting",
    "software development",
    "custom software",
    "React development",
    "Next.js development",
    "enterprise solutions",
    "digital transformation"
  ],
  authors: [{ name: "Sruvi Team" }],
  creator: "Sruvi",
  publisher: "Sruvi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://incsruvi.com',
    siteName: 'Sruvi',
    title: 'Sruvi - Modern Digital Solutions & Web Development',
    description: 'Transform your business with Sruvi\'s cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sruvi - Modern Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sruvi - Modern Digital Solutions & Web Development',
    description: 'Transform your business with Sruvi\'s cutting-edge web development, mobile apps, cloud solutions, and AI-powered digital services.',
    images: ['/og-image.jpg'],
    creator: '@sruvi',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://incsruvi.com',
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
      'de': '/de',
      'hi': '/hi',
      'kn': '/kn',
      'ml': '/ml',
      'ta': '/ta',
      'te': '/te',
      'zh': '/zh',
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  // Structured Data for Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sruvi",
    "url": "https://incsruvi.com",
    "logo": "https://incsruvi.com/logo.png",
    "description": "Modern digital solutions and web development services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 99, 3rd floor, PoornaPragna Layout Kathriguppe",
      "addressLocality": "Bengaluru",
      "postalCode": "560070",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9731171611",
      "contactType": "customer service",
      "email": "hello@incsruvi.com"
    },
    "sameAs": [
      "https://twitter.com/sruvi",
      "https://linkedin.com/company/sruvi",
      "https://facebook.com/sruvi"
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <MobilePerformanceOptimizer>
              {children}
            </MobilePerformanceOptimizer>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
