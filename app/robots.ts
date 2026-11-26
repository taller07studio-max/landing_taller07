import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

/* Todo el sitio es indexable */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
