import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  images: {
    domains: ['tapovanswisscampsofficial.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },

};

export default nextConfig;
