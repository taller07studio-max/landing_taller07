import type { Metadata } from 'next';
import { SITE_NAME } from './site';

/* Metadata por página: title, description, canonical, Open Graph y Twitter.
   Las URLs relativas se vuelven absolutas con metadataBase (SITE_URL, en app/layout.tsx).
   Las rutas con opengraph-image.tsx / twitter-image.tsx agregan la imagen solas;
   la página principal pasa la suya en `image`. */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  image,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'es_MX',
      url: path,
      title: ogTitle,
      description: ogDescription,
      ...(image && { images: [image] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      ...(image && { images: [image.url] }),
    },
  };
}
