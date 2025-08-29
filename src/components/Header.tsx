'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from 'react';
import Logoicon from '@/assets/logoiconsvg.svg';

export default function Header() {
  const t = useTranslations('header');
  const navigation = useTranslations('navigation');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', href: '/', label: navigation('home') },
    { key: 'services', href: '/services', label: navigation('services') },
    { key: 'products', href: '/products', label: navigation('products') },
    { key: 'blog', href: '/blog', label: navigation('blog') },
    { key: 'contact', href: '/contact', label: navigation('contact') },
  ];

         return (
     <div className="fixed top-0 z-50 w-full transition-all duration-300">
       <div className={`transition-all duration-300 ${
         isScrolled 
           ? 'mx-4 mt-4' 
           : 'mx-0 mt-0'
       }`}>
                   <div className="max-w-5xl mx-auto w-full">
            <Navbar 
              isBordered={isScrolled}
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'bg-background/80 backdrop-blur-xl border-divider shadow-2xl rounded-2xl' 
                  : 'bg-transparent border-transparent'
              }`}
            >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2 font-bold text-inherit text-xl">
          <img src={Logoicon.src} alt="Sruvi Logo" className="w-8 h-8" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sruvi
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link 
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-all duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            href="/contact" 
            className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            size="sm"
          >
            {t('contactButton')}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-xl">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link 
              href={item.href}
              className="w-full text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
                 ))}
       </NavbarMenu>
            </Navbar>
          </div>
       </div>
      </div>
     );
   }
