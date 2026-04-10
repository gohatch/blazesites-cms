import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/projects', '/clients', '/leads', '/analytics', '/billing', '/settings', '/onboarding', '/api/'],
      },
    ],
    sitemap: 'https://blazesites.com.au/sitemap.xml',
  };
}
