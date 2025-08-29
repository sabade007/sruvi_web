'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const switchLocale = (newLocale: string) => {
    // Navigate to the new locale using the routing-aware router
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="bg-background/80 backdrop-blur-xl border border-divider/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 rounded-full"
          size="sm"
        >
          <Globe className="w-4 h-4 mr-2" />
          {currentLanguage.code.toUpperCase()}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Language selection"
        onAction={(key) => switchLocale(key as string)}
        className="bg-background/95 backdrop-blur-xl border-divider"
      >
        {languages.map((language) => (
          <DropdownItem 
            key={language.code} 
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
