import { MetadataRoute } from 'next'


export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.tapovanswisscampsofficial.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
