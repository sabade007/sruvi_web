import { MetadataRoute } from 'next'
import { locales } from '../../i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://incsruvi.com'
  
  // Static pages for each locale
  const staticPages = [
    '',
    '/services',
    '/products', 
    '/blog',
    '/contact',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generate entries for each locale and page
  locales.forEach(locale => {
    staticPages.forEach(page => {
      const url = page === '' ? `/${locale}` : `/${locale}${page}`
      sitemapEntries.push({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      })
    })
  })

  // Add additional important pages
  sitemapEntries.push(
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  )

  return sitemapEntries
}
