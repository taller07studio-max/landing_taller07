import { ImageResponse } from 'next/og';
import { C, OG_CONTENT_TYPE, OG_SIZE, OgLogo, ogFonts } from '@/lib/og';

export const alt = 'Tianquiz: tu menú digital, con pedidos directo a tu WhatsApp. Un producto de Taller 07.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const PAPEL = ['#C8175F', '#F7C948', '#2E7DBA', '#15803D', '#EC8F5E'];

/* Estilo del hero de Tianquiz: papel picado, wordmark rosa y "WhatsApp." en serif */
export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: C.cream }}>
        <div style={{ display: 'flex', height: 56 }}>
          {Array.from({ length: 19 }, (_, i) => (
            <div
              key={i}
              style={{
                width: 64, height: 50, flexShrink: 0, background: PAPEL[i % PAPEL.length],
                clipPath: 'polygon(3% 0, 97% 0, 97% 80%, 88% 100%, 78% 80%, 69% 100%, 59% 80%, 50% 100%, 41% 80%, 31% 100%, 22% 80%, 12% 100%, 3% 80%)',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, padding: '44px 72px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ display: 'flex', padding: '12px 20px', borderRadius: 14, background: C.tq, color: '#fff', fontFamily: 'Bricolage', fontSize: 26, letterSpacing: 2 }}>
              TIANQUIZ
            </span>
            <span style={{ fontFamily: 'JetBrains', fontSize: 20, color: C.muted }}>un producto de taller 07</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Bricolage', fontSize: 82, lineHeight: 0.98, letterSpacing: -3.5, color: C.ink }}>
            <span>Tu menú digital, con pedidos</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 22 }}>
              <span>directo a tu</span>
              <span style={{ fontFamily: 'Instrument', fontSize: 104, letterSpacing: -1, color: C.tq }}>WhatsApp.</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 12, fontFamily: 'Inter', fontSize: 22, color: '#33433B' }}>
              {['100 % personalizado', '0 % comisiones', 'Pedidos por WhatsApp'].map((t) => (
                <span key={t} style={{ display: 'flex', padding: '10px 18px', borderRadius: 99, background: '#fff', border: '1.5px solid #DAD4CB' }}>{t}</span>
              ))}
            </div>
            <OgLogo />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
