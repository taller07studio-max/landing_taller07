/* ==========================================================================
   Taller 07 · Datos estructurados (JSON-LD)
   Base: seo/jsonld-*.json del kit de productos, con SITE_URL en lugar del dominio de ejemplo.
   La organización usa el mismo @id en todas las páginas (#organizacion, el que ya publicaba
   la landing). Sin offers, aggregateRating ni reseñas: no hay precios ni calificaciones reales.
   ========================================================================== */

import type { FaqItem } from '@/components/ui/Faq';
import { absoluteUrl, BOROKI_SOCIAL, BOROKI_URL, CONTACT_EMAIL, INSTAGRAM_URL, SITE_NAME } from './site';

export interface Crumb {
  name: string;
  href: string;
}

const ORG_ID = absoluteUrl('/#organizacion');
const orgRef = { '@id': ORG_ID };

function organization(extra: object = {}) {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/assets/icon-512.png'),
    image: absoluteUrl('/assets/og-image.jpg'),
    email: CONTACT_EMAIL,
    sameAs: [INSTAGRAM_URL],
    ...extra,
  };
}

const faqPage = (items: FaqItem[], id: string) => ({
  '@type': 'FAQPage',
  '@id': id,
  inLanguage: 'es-MX',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export const breadcrumbList = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.href) })),
});

const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

/* ---------- Aplicaciones ---------- */
const tianquizApp = (withFeatures = false) => ({
  '@type': 'SoftwareApplication',
  '@id': absoluteUrl('/productos/tianquiz#app'),
  name: 'Tianquiz',
  url: absoluteUrl('/productos/tianquiz'),
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Menú digital y tienda en línea personalizados con pedidos por WhatsApp y administración de catálogo.',
  inLanguage: 'es-MX',
  areaServed: { '@type': 'Country', name: 'México' },
  publisher: orgRef,
  ...(withFeatures && {
    featureList: [
      'Menú digital personalizado con tu marca',
      'Pedidos estructurados por WhatsApp',
      'Opciones y extras (tamaños, ingredientes, variantes)',
      'Panel para administrar productos, categorías, precios y disponibilidad',
      'Sin comisiones por venta',
    ],
  }),
});

const borokiApp = () => ({
  '@type': 'SoftwareApplication',
  '@id': absoluteUrl('/productos/boroki#app'),
  name: 'Boroki',
  url: BOROKI_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Plataforma en desarrollo para restaurantes con servicio a mesa en México: conecta a comensales, meseros, cocina y administración.',
  inLanguage: 'es-MX',
  publisher: orgRef,
  sameAs: [BOROKI_URL, BOROKI_SOCIAL.instagram, BOROKI_SOCIAL.facebook, BOROKI_SOCIAL.tiktok],
});

const webPage = (path: string, name: string, description: string, aboutId: string) => ({
  '@type': 'WebPage',
  '@id': absoluteUrl(`${path}#page`),
  url: absoluteUrl(path),
  name,
  description,
  inLanguage: 'es-MX',
  isPartOf: { '@id': absoluteUrl('/#sitio') },
  about: { '@id': aboutId },
});

/* ---------- Páginas ---------- */
export function homeJsonLd(faq: FaqItem[]) {
  const service = (name: string, description: string) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, description } });
  return graph(
    organization({
      alternateName: 'Taller 07 Studio',
      slogan: 'Software hecho con criterio.',
      description: 'Estudio de desarrollo de software. Diseñamos y desarrollamos sistemas, SaaS y productos digitales con intención real.',
      foundingDate: '2024',
      contactPoint: { '@type': 'ContactPoint', contactType: 'ventas', email: CONTACT_EMAIL, availableLanguage: 'es' },
      knowsLanguage: 'es',
      knowsAbout: ['Desarrollo de software a medida', 'Plataformas SaaS', 'MVP', 'Sistemas web', 'Automatización de procesos', 'Diseño de producto', 'Next.js', 'React', 'Node.js'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios',
        itemListElement: [
          service('Plataformas SaaS', 'Productos digitales con modelo de negocio escalable.'),
          service('MVPs y productos digitales', 'Una primera versión funcional, con una base que aguante crecer.'),
          service('Sistemas web a medida', 'Plataformas, paneles y herramientas administrativas según la operación real de tu negocio.'),
          service('Automatización de procesos', 'Lógica para que el sistema resuelva tareas repetitivas, con trazabilidad y control.'),
          service('Herramientas internas', 'Software que se adapta a tu equipo, no al revés.'),
          service('Diseño funcional de producto', 'Flujos, módulos y prototipos antes de escribir código.'),
        ],
      },
    }),
    { '@type': 'WebSite', '@id': absoluteUrl('/#sitio'), url: absoluteUrl('/'), name: SITE_NAME, inLanguage: 'es-MX', publisher: orgRef },
    faqPage(faq, absoluteUrl('/#preguntas')),
  );
}

export function productosJsonLd(meta: { title: string; description: string }, crumbs: Crumb[]) {
  return graph(
    organization(),
    {
      '@type': 'CollectionPage',
      '@id': absoluteUrl('/productos#page'),
      url: absoluteUrl('/productos'),
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': absoluteUrl('/#sitio') },
      inLanguage: 'es-MX',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [tianquizApp(), borokiApp()].map((app, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@id': app['@id'] } })),
      },
    },
    tianquizApp(),
    borokiApp(),
    breadcrumbList(crumbs),
  );
}

export function tianquizJsonLd(meta: { title: string; description: string }, crumbs: Crumb[], faq: FaqItem[]) {
  const app = tianquizApp(true);
  return graph(
    organization(),
    app,
    webPage('/productos/tianquiz', meta.title, meta.description, app['@id']),
    faqPage(faq, absoluteUrl('/productos/tianquiz#preguntas')),
    breadcrumbList(crumbs),
  );
}

export function borokiJsonLd(meta: { title: string; description: string }, crumbs: Crumb[]) {
  const app = borokiApp();
  return graph(organization(), app, webPage('/productos/boroki', meta.title, meta.description, app['@id']), breadcrumbList(crumbs));
}
