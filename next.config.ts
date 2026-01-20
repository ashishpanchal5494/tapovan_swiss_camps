import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tapovanswisscampsofficial.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year - prevents frequent re-optimization on VPS
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  headers: async () => {
    // Only apply aggressive caching in production
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: "/_next/static/:path*",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
        {
          source: "/assets/:path*",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
        {
          source: "/(.*)\.(woff2|woff|ttf|eot)",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
        {
          source: "/(.*)\.(mp4|webm)",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
        {
          source: "/(.*)\.(png|jpg|jpeg|gif|svg|webp|ico)",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
        {
          source: "/_next/image",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
      ];
    }
    
    // In development, disable caching to see changes immediately
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
