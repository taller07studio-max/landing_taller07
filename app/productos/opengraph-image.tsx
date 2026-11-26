import { ImageResponse } from 'next/og';
import { C, OG_CONTENT_TYPE, OG_SIZE, OgChip, OgEyebrow, OgLogo, ogFonts } from '@/lib/og';

export const alt = 'Productos SaaS de Taller 07: Software que también operamos. Tianquiz en producción y Boroki en construcción.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/* Estilo del hero de /productos: crema, título verde con acento en serif y la ventana git log */
export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: C.cream, padding: '64px 72px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <OgEyebrow color={C.orangeInk}>productos · laboratorio saas</OgEyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Bricolage', fontSize: 88, lineHeight: 0.94, letterSpacing: -4, color: C.green }}>
            <span>Software que</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 26 }}>
              <span>también</span>
              <span style={{ fontFamily: 'Instrument', fontSize: 108, letterSpacing: -1, color: C.orangeDisplay }}>operamos.</span>
            </div>
          </div>
          <OgLogo />
        </div>
        <div
          style={{
            display: 'flex', flexDirection: 'column', gap: 18, alignSelf: 'center', width: 280, padding: 26, marginRight: 8,
            borderRadius: 26, background: C.greenInk, transform: 'rotate(2deg)', boxShadow: '0 40px 80px -30px rgba(16,41,31,.7)',
          }}
        >
          <div style={{ display: 'flex', gap: 8 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 12, height: 12, borderRadius: 12, background: '#2F5A47' }} />)}
          </div>
          <span style={{ fontFamily: 'JetBrains', fontSize: 18, color: '#86A898' }}>$ git log productos</span>
          <OgChip live>tianquiz</OgChip>
          <OgChip live={false}>boroki</OgChip>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
