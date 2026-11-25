/* ==========================================================================
   Taller 07 · Build del sitio estático
   Copia el sitio a dist/ y reemplaza los marcadores:
     {{SITE_URL}}  URL base del sitio (canonical, Open Graph, JSON-LD, robots, sitemap)
     {{LASTMOD}}   fecha del último commit que tocó index.html (sitemap)
   La URL base sale de la variable de entorno SITE_URL; si no existe, se usa
   DEFAULT_SITE_URL. Es el único lugar donde vive el dominio.
   Uso: node build.mjs            (o SITE_URL=https://otro.dominio node build.mjs)
   ========================================================================== */

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const DEFAULT_SITE_URL = 'https://www.taller07.com';
const SITE_URL = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
const OUT = 'dist';

// Archivos y carpetas que se publican tal cual
const STATIC = ['assets', 'styles', 'scripts', 'site.webmanifest', 'google077217a6ceb37867.html'];
// Archivos con marcadores
const TEMPLATES = ['index.html', 'robots.txt', 'sitemap.xml'];

const lastmod = (() => {
  try {
    const date = execSync('git log -1 --format=%cs -- index.html', { encoding: 'utf8' }).trim();
    if (date) return date;
  } catch { /* sin git en el entorno: se usa la fecha de hoy */ }
  return new Date().toISOString().slice(0, 10);
})();

if (!/^https:\/\/[^/\s]+$/.test(SITE_URL)) {
  throw new Error(`SITE_URL inválida: "${SITE_URL}". Debe ser https://dominio sin ruta.`);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT);
STATIC.forEach((path) => cpSync(path, `${OUT}/${path}`, { recursive: true }));

TEMPLATES.forEach((file) => {
  const html = readFileSync(file, 'utf8')
    .replaceAll('{{SITE_URL}}', SITE_URL)
    .replaceAll('{{LASTMOD}}', lastmod);
  const leftover = html.match(/\{\{[A-Z_]+\}\}/);
  if (leftover) throw new Error(`${file}: marcador sin reemplazar ${leftover[0]}`);
  writeFileSync(`${OUT}/${file}`, html);
});

// El JSON-LD debe seguir siendo JSON válido después del reemplazo
const jsonLd = readFileSync(`${OUT}/index.html`, 'utf8').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
JSON.parse(jsonLd[1]);

console.log(`✓ dist/ generado · SITE_URL=${SITE_URL} · lastmod=${lastmod}`);
