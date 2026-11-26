/* ==========================================================================
   Taller 07 · Datos del sitio
   SITE_URL es la única fuente de la URL base: canonical, Open Graph, JSON-LD,
   sitemap, robots y redirecciones salen de aquí. En Vercel se puede
   sobrescribir con la variable de entorno SITE_URL.
   ========================================================================== */

export const SITE_URL = (process.env.SITE_URL || 'https://www.taller07.com').replace(/\/+$/, '');

/** URL absoluta a partir de una ruta del sitio ("/productos" → "https://…/productos"). */
export const absoluteUrl = (path = '/') => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const SITE_NAME = 'Taller 07';
export const CONTACT_EMAIL = 'taller07studio@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/taller07studio/';

/* Formularios (Formspree) */
export const CONTACT_ENDPOINT = 'https://formspree.io/f/xkjrkenw';
export const BOROKI_WAITLIST_ENDPOINT = 'https://formspree.io/f/mzeroylr';

/* Tianquiz: botón de WhatsApp con mensaje prellenado */
export const TIANQUIZ_WHATSAPP_URL =
  'https://wa.me/526672155579?text=Hola%2C%20quiero%20mi%20men%C3%BA%20digital%20con%20Tianquiz';

/* Boroki: sitio y redes propias */
export const BOROKI_URL = 'https://boroki.com/';
export const BOROKI_SOCIAL = {
  instagram: 'https://www.instagram.com/borokiapp/',
  facebook: 'https://www.facebook.com/profile.php?id=61595674786354',
  tiktok: 'https://www.tiktok.com/@borokiapp',
};
