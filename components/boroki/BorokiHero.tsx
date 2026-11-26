import Image from 'next/image';
import type { Crumb } from '@/lib/jsonld';
import { Crumbs } from '@/components/products/Crumbs';
import { ProductLogo, StatusChip } from '@/components/products/ProductBadges';
import mascotas from '@/public/products/boroki/mascotas.jpg';
import { WaitlistForm } from './WaitlistForm';

/* Hero rosa de Boroki: logo, estado, título, lista de espera (#lista-de-espera) y mascotas con 2 globos */
export function BorokiHero({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <section className="bk-hero" aria-labelledby="bk-title">
      <div className="container">
        <Crumbs items={crumbs} />
        <div className="bk-hero__grid">
          <div>
            <div className="prod__brand" style={{ marginTop: 10 }}>
              <ProductLogo slug="boroki" decorative={false} style={{ background: 'rgba(255,255,255,.35)' }} />
              <StatusChip status="wip">en construcción</StatusChip>
            </div>
            <h1 id="bk-title">
              Algo bonito se está <span className="accent">cocinando.</span>
            </h1>
            <p className="lead">
              Boroki es la plataforma de Taller 07 para restaurantes con servicio a mesa en México: conecta a comensales,
              meseros, cocina y administración en un mismo lugar.
            </p>
            <WaitlistForm />
          </div>
          <div className="bk-hero__art">
            <Image
              src={mascotas}
              alt="Las mascotas de Boroki: tres ranitas de plastilina celebrando"
              sizes="(min-width: 1000px) 640px, 100vw"
              loading="eager"
              fetchPriority="high"
            />
            <p className="bubble bubble--a" aria-hidden="true">
              <i style={{ background: '#ECE6FA' }}>✓</i>
              <span>¡Mesa 4 lista!<small>Terraza</small></span>
            </p>
            <p className="bubble bubble--b" aria-hidden="true">
              <i style={{ background: '#FDE7DA', font: '800 .8rem var(--font-display)', color: '#B5562F' }}>3</i>
              <span>3 pedidos en cocina<small>Estación caliente</small></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
