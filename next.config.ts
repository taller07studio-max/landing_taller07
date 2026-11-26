import type { NextConfig } from 'next';
import { SITE_URL } from './lib/site';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },

  async redirects() {
    return [
      { source: '/taller07', destination: '/', permanent: true },
      // El dominio viejo de Vercel manda todo al dominio principal
      { source: '/:path*', has: [{ type: 'host', value: 'taller07.vercel.app' }], destination: `${SITE_URL}/:path*`, permanent: true },
    ];
  },

  async headers() {
    return [
      { source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }] },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
