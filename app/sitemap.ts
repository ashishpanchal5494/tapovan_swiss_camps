// app/sitemap.ts
import { MetadataRoute } from "next";

// 👇 Helper to escape XML-reserved characters
function escapeXmlUrl(url: string): string {
  return url.replace(/&/g, "&amp;");
}

const blogData = [
  { id: 1, slug: "camping-in-rishikesh" },
  { id: 2, slug: "rafting-in-rishikesh" },
  { id: 3, slug: "bungeeJumping-in-rishikesh" },
  { id: 4, slug: "bikeRent-in-rishikesh" },
];

const baseUrl = "https://www.tapovanswisscampsofficial.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString();

  // 📝 Blog pages
  const blogPages: MetadataRoute.Sitemap = blogData.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 📄 Static + Tent detail pages (escaped where needed)
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: today, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: today, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/booking-form`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/testimonial`, lastModified: today, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/tents`, lastModified: today, changeFrequency: "yearly", priority: 0.9 },

    // Tent details (⚠ Escaped URLs)
    {
      url: escapeXmlUrl(`${baseUrl}/tents/1?id=1&title=Luxury+AC+Tent&mainPrice=9995&price=7495&image=assets%2Fimg%2Froom%2FACTent1.webp&beds=5&baths=1&adults=5&checkIn=&checkOut=&perHeadPrice=1499&description=Experience+unparalleled+comfort+in+our+Luxury+AC+Tents...&metaDescription=Stay+in+a+luxury+AC+tent+in+Tapovan+Rishikesh...`),
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: escapeXmlUrl(`${baseUrl}/tents/2?id=2&title=Luxury+Cooler+Tent&mainPrice=7495&price=5995&image=assets%2Fimg%2Froom%2FcoolerTent1.webp&beds=5&baths=1&adults=5&checkIn=&checkOut=&perHeadPrice=1199&description=Stay+cool+and+comfortable+in+our+Luxury+Cooler+Tents...&metaDescription=Book+luxury+cooler+tents+in+Tapovan+Rishikesh...`),
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: escapeXmlUrl(`${baseUrl}/tents/3?id=3&title=Ordinary+Tent&mainPrice=5995&price=4995&image=assets%2Fimg%2Froom%2FordinaryTent1.webp&beds=3&baths=&adults=5&checkIn=&checkOut=&perHeadPrice=999&description=For+the+authentic+camping+enthusiasts...&metaDescription=Budget+tents+for+camping+in+Tapovan+Rishikesh...`),
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.9,
    },

    // Other static
    { url: `${baseUrl}/team`, lastModified: today, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: today, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: today, changeFrequency: "yearly", priority: 0.8 },
  ];

  return [...staticPages, ...blogPages];
}
