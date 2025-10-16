import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  
  // Enhanced image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tapovanswisscampsofficial.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Enable modern image formats
    unoptimized: false,
    // Note: image quality is controlled per <Image> or loader, not here
  },

  // Enhanced caching headers
  headers: async () => {
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
        // Add security headers
        {
          source: "/(.*)",
          headers: [
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          ],
        },
      ];
    }
    
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

  // Rewrite missing bootstrap sourcemap to a local placeholder to avoid 404s
  rewrites: async () => {
    return [
      {
        source: "/_next/static/css/app/bootstrap.min.css.map",
        destination: "/assets/css/bootstrap.min.css.map",
      },
    ];
  },

  // Enhanced compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove unused imports
    styledComponents: false,
  },

  // Webpack configuration to handle source maps
  webpack: (config, { dev, isServer }) => {
    // In production, disable source maps to prevent 404 errors for .map files
    if (!dev) {
      config.devtool = false;
    }
    
    // Handle CSS source maps properly
    config.module.rules.forEach((rule: any) => {
      if (rule.test && rule.test.toString().includes('css')) {
        rule.use?.forEach((use: any) => {
          if (use.loader && use.loader.includes('css-loader')) {
            use.options = {
              ...use.options,
              sourceMap: dev, // Only enable source maps in development
            };
          }
        });
      }
    });

    return config;
  },


  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons', 'framer-motion'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Output configuration
  output: 'standalone',
  
  // Enable SWC minification
  swcMinify: true,
};

export default nextConfig;
