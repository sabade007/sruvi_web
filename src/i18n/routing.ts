import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr', 'de', 'zh', 'hi', 'te', 'kn', 'ta', 'ml'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});