import type { Crumb } from '@/lib/jsonld';
import { TIANQUIZ_WHATSAPP_URL } from '@/lib/site';
import { Crumbs } from '@/components/products/Crumbs';
import { Phone } from '@/components/products/Phone';
import { ProductLogo } from '@/components/products/ProductBadges';
import { WaChat } from '@/components/products/WaChat';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { PapelPicado } from './PapelPicado';

/* Hero de Tianquiz: papel picado, migas, H1 con la palabra clave principal, CTA a WhatsApp,
   píldoras de confianza y el celular con el menú y el chat del pedido */
export function TianquizHero({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <section className="tq-hero" aria-labelledby="tq-title">
      <PapelPicado />
      <div className="container">
        <div className="tq-hero__grid">
          <div>
            <Crumbs items={crumbs} style={{ marginTop: 20 }} />
            <div className="tq-brand">
              <ProductLogo slug="tianquiz" />
              <small>un producto de taller 07</small>
            </div>
            <h1 id="tq-title">
              Tu menú digital, con pedidos directo a tu <span className="accent">WhatsApp.</span>
            </h1>
            <p className="lead">
              Menú digital y tienda en línea <b>100 % personalizados</b> para tu restaurante. Tus clientes eligen desde
              el celular, el pedido te llega ordenado por WhatsApp y tú <b>administras tu catálogo</b> desde un panel.
              Sin comisiones.
            </p>
            <div className="hero__ctas">
              <a className="btn btn--wa btn--lg" href={TIANQUIZ_WHATSAPP_URL} target="_blank" rel="noopener">
                Quiero mi menú digital <span className="btn__icon"><WhatsAppIcon /></span>
              </a>
              <a className="btn btn--ghost btn--lg" href="#como-funciona">Ver cómo funciona</a>
            </div>
            <ul className="trust">
              <li><b aria-hidden="true">⏱</b> Lista en menos de un día</li>
              <li><b>0 %</b> comisiones por venta</li>
              <li><b aria-hidden="true">✦</b> Hecho a tu medida</li>
            </ul>
          </div>
          <div className="tq-stage">
            <Phone />
            <WaChat />
            <p className="tagstk" aria-hidden="true">
              Tu marca, tus colores<small>// sin plantillas</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
