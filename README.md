# landing_taller07

Landing de Taller 07 (https://www.taller07.com). Sitio estático: HTML, CSS y JS sin framework.

## URL del sitio

La URL base vive en un solo lugar: la variable de entorno `SITE_URL`
(por defecto `https://www.taller07.com`, definido en `build.mjs`).
Los archivos fuente usan el marcador `{{SITE_URL}}` (canonical, Open Graph,
JSON-LD, `robots.txt` y `sitemap.xml`) y el build lo reemplaza.

La única excepción es la redirección de `taller07.vercel.app` en `vercel.json`,
porque Vercel lee ese archivo antes del build.

## Build y vista previa

```sh
node build.mjs                 # genera dist/
python3 -m http.server -d dist 8077   # abre http://localhost:8077
```

Vercel ejecuta `node build.mjs` y publica `dist/` en cada push a `main`.
