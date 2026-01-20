import { MetadataRoute } from 'next'
import { getAllTeamMemberSlugs } from './team/teamData'
import { getAllTentSlugs } from './tents/tentData'
import { getAllBlogSlugs } from '@/data/blogData'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tapovanswisscampsofficial.com'
  
  // Get all team member slugs
  const teamSlugs = getAllTeamMemberSlugs()
  
  // Get all tent slugs
  const tentSlugs = getAllTentSlugs()
  
  // Get all blog slugs
  const blogSlugs = getAllBlogSlugs()
  
  // Generate team member URLs
  const teamUrls = teamSlugs.map((slug) => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Generate tent URLs
  const tentUrls = tentSlugs.map((slug) => ({
    url: `${baseUrl}/tents/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Generate blog URLs
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tents`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...teamUrls,
    ...tentUrls,
    ...blogUrls,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
     {
      url: `${baseUrl}/testimonial`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
     {
      url: `${baseUrl}/booking-form`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    
  ]
}