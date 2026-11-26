import Link from 'next/link';
import { CtaBand } from '@/components/products/CtaBand';
import { BorokiCard, TianquizCard } from '@/components/productos/ProductCards';
import { ProductosHero } from '@/components/productos/ProductosHero';
import { ArrowRight } from '@/components/ui/Icons';
import { JsonLd } from '@/components/ui/JsonLd';
import { productosJsonLd, type Crumb } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

const META = {
  title: 'Productos SaaS de Taller 07: Tianquiz y Boroki',
  description:
    'Además de construir software para clientes, en Taller 07 creamos y operamos productos SaaS propios: Tianquiz, menú digital con pedidos por WhatsApp, y Boroki.',
};
const CRUMBS: Crumb[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
];

export const metadata = pageMetadata({ ...META, path: '/productos' });

export default function ProductosPage() {
  return (
    <>
      <JsonLd data={productosJsonLd(META, CRUMBS)} />
      <ProductosHero crumbs={CRUMBS} />
      <section style={{ paddingBottom: 'var(--section-y)' }} aria-label="Nuestros productos">
        <div className="container">
          <TianquizCard />
          <BorokiCard />
          <CtaBand
            variant="idea"
            titleId="idea-title"
            eyebrow="¿tienes una idea de saas?"
            title={<>El siguiente producto <span className="accent">puede ser el tuyo.</span></>}
            text="Validamos, diseñamos y construimos plataformas SaaS con modelo de negocio escalable."
            action={
              <Link className="btn btn--primary btn--lg" href="/#contacto">
                Platiquemos <span className="btn__icon"><ArrowRight /></span>
              </Link>
            }
          />
        </div>
      </section>
    </>
  );
}
