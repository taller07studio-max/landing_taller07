/* ==========================================================================
   Taller 07 · Base de las imágenes Open Graph (1200×630) de cada página.
   Se generan en el build con next/og. Las fuentes son TTF locales (lib/og-fonts)
   para no depender de la red durante el build.
   ========================================================================== */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/* Mismos valores que tokens.css (next/og no lee CSS) */
export const C = {
  green: '#214E3B',
  greenInk: '#10291F',
  orange: '#E2872C',
  orangeDisplay: '#BC6411',
  orangeInk: '#9A4C0A',
  cream: '#F4F2EE',
  ink: '#14211B',
  muted: '#52615A',
  tq: '#C8175F',
  bkPink: '#E2A8B2',
  bkInk: '#3A1E2A',
  bkAccent: '#8A3420',
  bkText: '#5A2F3D',
};

const font = (file: string) => readFile(join(process.cwd(), 'lib/og-fonts', file));

export async function ogFonts() {
  const [display, accent, mono, body] = await Promise.all([
    font('bricolage-800.ttf'),
    font('instrument-serif-italic.ttf'),
    font('jetbrains-mono-600.ttf'),
    font('inter-600.ttf'),
  ]);
  return [
    { name: 'Bricolage', data: display, weight: 800 as const, style: 'normal' as const },
    { name: 'Instrument', data: accent, weight: 400 as const, style: 'italic' as const },
    { name: 'JetBrains', data: mono, weight: 600 as const, style: 'normal' as const },
    { name: 'Inter', data: body, weight: 600 as const, style: 'normal' as const },
  ];
}

export async function ogAsset(file: string, mime: string) {
  const data = await readFile(join(process.cwd(), 'lib/og-assets', file));
  return `data:${mime};base64,${data.toString('base64')}`;
}

/* Firma común: logo de Taller 07 (texto + sello 07) */
export function OgLogo({ color = C.green }: { color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontFamily: 'Bricolage', fontSize: 40, letterSpacing: -1, color }}>taller</span>
      <span
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 52,
          background: C.orange, color: C.greenInk, fontFamily: 'Bricolage', fontSize: 22, letterSpacing: -1,
        }}
      >
        07
      </span>
    </div>
  );
}

/* Etiqueta mono con raya, como .eyebrow */
export function OgEyebrow({ children, color }: { children: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'JetBrains', fontSize: 22, color, textTransform: 'uppercase' }}>
      <span style={{ width: 34, height: 3, background: color }} />
      {children}
    </div>
  );
}

/* Chip de estado: "en producción" / "en construcción" */
export function OgChip({ children, live }: { children: string; live: boolean }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px', borderRadius: 99,
        background: live ? '#E3F5EA' : '#FDEBD7', color: live ? '#1B6B42' : C.orangeInk,
        fontFamily: 'JetBrains', fontSize: 20,
      }}
    >
      <span style={{ width: 11, height: 11, borderRadius: 11, background: live ? '#3DBE7A' : C.orange }} />
      {children}
    </div>
  );
}
