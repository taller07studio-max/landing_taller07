import { BorokiHero } from '@/components/boroki/BorokiHero';
import { ComingSoon } from '@/components/boroki/ComingSoon';
import { CtaBand } from '@/components/products/CtaBand';
import { ArrowUpRight } from '@/components/ui/Icons';
import { JsonLd } from '@/components/ui/JsonLd';
import { borokiJsonLd, type Crumb } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';
import { BOROKI_SOCIAL, BOROKI_URL } from '@/lib/site';

/* Ficha corta: presenta Boroki y manda a boroki.com (no copia su contenido, PRODUCTOS.md §1) */
const META = {
  title: 'Boroki: sistema para restaurantes, próximamente | Taller 07',
  description:
    'Boroki es la plataforma en construcción de Taller 07 para restaurantes con servicio a mesa: menú y pedidos desde el celular, cuentas claras y cocina coordinada.',
};
const CRUMBS: Crumb[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Boroki', href: '/productos/boroki' },
];

export const metadata = pageMetadata({ ...META, path: '/productos/boroki' });

const SOCIAL = [
  {
    href: BOROKI_SOCIAL.instagram,
    label: '@borokiapp',
    network: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    href: BOROKI_SOCIAL.facebook,
    label: 'Boroki',
    network: 'Facebook',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
      </svg>
    ),
  },
  {
    href: BOROKI_SOCIAL.tiktok,
    label: '@borokiapp',
    network: 'TikTok',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
        <path d="M16 3c.3 2.3 1.7 3.8 4 4v3.2a7.6 7.6 0 0 1-4-1.2v6.5A5.5 5.5 0 1 1 10.5 10v3.3a2.3 2.3 0 1 0 2.3 2.2V3z" />
      </svg>
    ),
  },
];

export default function BorokiPage() {
  return (
    <>
      <JsonLd data={borokiJsonLd(META, CRUMBS)} />
      <BorokiHero crumbs={CRUMBS} />
      <ComingSoon />
      <section style={{ paddingBottom: 'var(--section-y)' }} aria-labelledby="bk-social">
        <div className="container">
          <CtaBand
            variant="bk"
            titleId="bk-social"
            eyebrow="síguele la pista"
            title={<>Mientras se cocina, <span className="accent">acompáñanos.</span></>}
            action={
              <a className="btn btn--bk btn--lg" href={BOROKI_URL} target="_blank" rel="noopener">
                Visitar boroki.com <span className="btn__icon"><ArrowUpRight /></span>
              </a>
            }
          >
            <ul className="social">
              {SOCIAL.map((s) => (
                <li key={s.network}>
                  <a href={s.href} target="_blank" rel="noopener">
                    <span aria-hidden="true">{s.icon}</span>
                    {s.label}
                    <span className="sr-only"> en {s.network}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CtaBand>
        </div>
      </section>
    </>
  );
}
