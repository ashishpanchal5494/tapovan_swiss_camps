/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.tapovanswisscampsofficial.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  transform: async (config, path) => {
    const today = new Date().toISOString().split("T")[0];

    const priorityMap = {
      "/": 1.0,
      "/tents": 0.9,
      "/about": 0.8,
      "/contact": 0.7,
      "/blogs": 0.9,
      "/testimonial": 0.7,
      "/faq": 0.8,
      "/privacy-policy": 0.8,
    };

    return {
      loc: `${config.siteUrl}${path}`,
      lastmod: today,
      changefreq: "weekly",
      priority: priorityMap[path] ?? 0.5,
    };
  },
};
