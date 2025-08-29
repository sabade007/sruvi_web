'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/':
        return t('home');
      case '/services':
        return t('services');
      case '/products':
        return t('products');
      case '/blog':
        return t('blog');
      case '/contact':
        return t('contact');
      default:
        return '';
    }
  };

  const currentPage = getPageTitle(pathname);

  if (pathname === '/') return null; // Don't show breadcrumb on home page

  return (
    <div className="bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <nav className="flex items-center space-x-2 text-sm">
          <Link 
            href="/" 
            className="flex items-center text-foreground/60 hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            {t('home')}
          </Link>
          <ChevronRight className="w-4 h-4 text-foreground/40" />
          <span className="text-primary font-medium">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
}
