# landing_taller07

Sitio de Taller 07 (https://www.taller07.com): landing y sección de productos (Tianquiz y Boroki).
Next.js (App Router) con páginas estáticas, CSS global con tokens y sin librerías de UI.

## Desarrollo

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción (lo mismo que corre Vercel)
npm run typecheck
```

Vercel despliega cada push a `main`.

## Estructura

```
app/                      rutas, metadata, sitemap, robots e imágenes Open Graph
  page.tsx                página principal
  productos/              /productos, /productos/tianquiz, /productos/boroki
components/
  layout/                 header (menú Productos, menú móvil), footer, efectos de página
  home/                   una sección por componente + formulario de contacto
  products/               compartidos: teléfono, chat de WhatsApp, banda final, migas, logos y estado
  productos/ tianquiz/ boroki/   secciones de cada página
  ui/                     íconos, FAQ, JSON-LD
lib/
  site.ts                 SITE_URL y datos del sitio (correo, redes, formularios, WhatsApp)
  products.ts             productos del menú y del footer
  jsonld.ts               datos estructurados de cada página
  metadata.ts             title, description, canonical, Open Graph y Twitter
  og.tsx, og-fonts/, og-assets/   base de las imágenes Open Graph
styles/                   tokens.css, styles.css (todo el sitio), products.css (páginas de productos)
public/                   íconos, imágenes, verificación de Google y manifest
```

## URL del sitio

`SITE_URL` vive en `lib/site.ts` (por defecto `https://www.taller07.com`) y se puede sobrescribir
con la variable de entorno `SITE_URL` en Vercel. Canonical, Open Graph, JSON-LD, sitemap, robots y la
redirección de `taller07.vercel.app` salen de ahí.
