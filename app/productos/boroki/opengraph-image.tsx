import { ImageResponse } from 'next/og';
import { C, OG_CONTENT_TYPE, OG_SIZE, OgChip, OgLogo, ogAsset, ogFonts } from '@/lib/og';

export const alt = 'Boroki: algo bonito se está cocinando. Sistema para restaurantes de Taller 07, próximamente.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/* Estilo del hero de Boroki: fondo rosa, "cocinando." en serif y las ranitas */
export default async function Image() {
  const [fonts, mascotas] = await Promise.all([ogFonts(), ogAsset('boroki-mascotas.jpg', 'image/jpeg')]);
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: C.bkPink }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 560, padding: '64px 0 56px 72px' }}>
          <div style={{ display: 'flex' }}>
            <OgChip live={false}>en construcción</OgChip>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Bricolage', fontSize: 84, lineHeight: 0.95, letterSpacing: -4, color: C.bkInk }}>
            <span>Algo bonito</span>
            <span>se está</span>
            <span style={{ fontFamily: 'Instrument', fontSize: 108, letterSpacing: -1, color: C.bkAccent }}>cocinando.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <OgLogo color={C.bkInk} />
            <span style={{ fontFamily: 'JetBrains', fontSize: 18, color: C.bkText }}>sistema para restaurantes</span>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: 40 }}>
          <img src={mascotas} width={620} height={463} alt="" style={{ borderRadius: 36 }} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
