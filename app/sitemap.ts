import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

/* lastModified: fecha del despliegue (el sitemap se genera en el build). Prioridades: PRODUCTOS.md §6 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl('/'), lastModified, priority: 1 },
    { url: absoluteUrl('/productos'), lastModified, priority: 0.7 },
    { url: absoluteUrl('/productos/tianquiz'), lastModified, priority: 0.9 },
    { url: absoluteUrl('/productos/boroki'), lastModified, priority: 0.5 },
  ];
}
