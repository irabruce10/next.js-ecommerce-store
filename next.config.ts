import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    typedRoutes: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      // fakestoreapi.com assets
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
      // pexels.com images
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        // allow any path under /
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
