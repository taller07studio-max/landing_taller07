import { CtaBand } from '@/components/products/CtaBand';
import { BusinessTypes } from '@/components/tianquiz/BusinessTypes';
import { CatalogAdmin } from '@/components/tianquiz/CatalogAdmin';
import { Comparison } from '@/components/tianquiz/Comparison';
import { CustomMade } from '@/components/tianquiz/CustomMade';
import { HowItWorks } from '@/components/tianquiz/HowItWorks';
import { TianquizFaq, TIANQUIZ_FAQ } from '@/components/tianquiz/TianquizFaq';
import { TianquizHero } from '@/components/tianquiz/TianquizHero';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { JsonLd } from '@/components/ui/JsonLd';
import { tianquizJsonLd, type Crumb } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';
import { TIANQUIZ_WHATSAPP_URL } from '@/lib/site';

/* Página principal de SEO para "menú digital para restaurantes" (PRODUCTOS.md §1 y §6) */
const META = {
  title: 'Menú digital con pedidos por WhatsApp | Tianquiz',
  description:
    'Menú digital y tienda en línea 100 % personalizados para tu restaurante. Recibe pedidos por WhatsApp y administra tu catálogo desde un panel. Sin comisiones.',
};
const CRUMBS: Crumb[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Tianquiz', href: '/productos/tianquiz' },
];

export const metadata = pageMetadata({ ...META, path: '/productos/tianquiz' });

export default function TianquizPage() {
  return (
    <>
      <JsonLd data={tianquizJsonLd(META, CRUMBS, TIANQUIZ_FAQ)} />
      <TianquizHero crumbs={CRUMBS} />
      <CustomMade />
      <HowItWorks />
      <CatalogAdmin />
      <BusinessTypes />
      <Comparison />
      <TianquizFaq />
      <section style={{ paddingBottom: 'var(--section-y)' }} aria-labelledby="tq-cta">
        <div className="container">
          <CtaBand
            variant="tq"
            titleId="tq-cta"
            title={<>¿Listo para tu <span className="accent">menú digital?</span></>}
            text="Cuéntanos de tu negocio por WhatsApp y en menos de un día tienes tu primera versión."
            action={
              <a className="btn btn--lg" href={TIANQUIZ_WHATSAPP_URL} target="_blank" rel="noopener">
                Escríbenos por WhatsApp <span className="btn__icon"><WhatsAppIcon /></span>
              </a>
            }
          />
        </div>
      </section>
    </>
  );
}
