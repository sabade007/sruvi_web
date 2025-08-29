import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function ContactPage() {
  const t = useTranslations('contact');
  
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb />
                    <div className="pt-20">
        {/* Contact Section */}
        <Contact />
       </div>
      <Footer />
    </div>
  );
}
