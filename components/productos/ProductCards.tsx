import Image from 'next/image';
import Link from 'next/link';
import { ProductLogo, StatusChip } from '@/components/products/ProductBadges';
import { Phone } from '@/components/products/Phone';
import { WaChat } from '@/components/products/WaChat';
import { ArrowRight } from '@/components/ui/Icons';
import mascotas from '@/public/products/boroki/mascotas.jpg';

/* Tarjeta de Tianquiz: celular con el menú, chat del pedido y 4 beneficios */
export function TianquizCard() {
  return (
    <article className="prod prod--tq" aria-labelledby="prod-tq">
      <div className="prod__visual">
        <div className="phone-wrap"><Phone /></div>
        <div className="wa-wrap"><WaChat /></div>
      </div>
      <div className="prod__body">
        <div className="prod__brand">
          <ProductLogo slug="tianquiz" />
          <StatusChip status="live">en producción</StatusChip>
        </div>
        <h2 id="prod-tq">Tianquiz</h2>
        <p className="tagline">Menú digital y tienda en línea con pedidos por WhatsApp.</p>
        <ul>
          <li>Menú 100 % personalizado con tu marca: lo configuramos contigo.</li>
          <li>Tus clientes eligen y el pedido te llega ordenado a WhatsApp.</li>
          <li>Administras productos, precios y disponibilidad desde tu panel.</li>
          <li>Sin comisiones por venta.</li>
        </ul>
        <div className="prod__ctas">
          <Link className="btn btn--tq btn--lg" href="/productos/tianquiz">
            Conocer Tianquiz <span className="btn__icon"><ArrowRight /></span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* Tarjeta de Boroki: mascotas, 3 beneficios y lista de espera */
export function BorokiCard() {
  return (
    <article className="prod prod--bk" aria-labelledby="prod-bk">
      <div className="prod__visual">
        <Image
          src={mascotas}
          alt="Las mascotas de Boroki: tres ranitas de plastilina junto al logo"
          sizes="(min-width: 1000px) 620px, 112vw"
          loading="lazy"
        />
      </div>
      <div className="prod__body">
        <div className="prod__brand">
          <ProductLogo slug="boroki" decorative={false} />
          <StatusChip status="wip">en construcción</StatusChip>
        </div>
        <h2 id="prod-bk">Boroki</h2>
        <p className="tagline">Sistema para restaurantes con servicio a mesa.</p>
        <ul>
          <li>Menú y pedidos desde el celular del comensal.</li>
          <li>Cuentas individuales y compartidas, claras para todos.</li>
          <li>Mesas, comandas y cocina en la misma sintonía.</li>
        </ul>
        <div className="prod__ctas">
          <Link className="btn btn--bk btn--lg" href="/productos/boroki">
            Conocer Boroki <span className="btn__icon"><ArrowRight /></span>
          </Link>
          <Link className="btn btn--ghost btn--lg" href="/productos/boroki#lista-de-espera">Avísame cuando esté listo</Link>
        </div>
      </div>
    </article>
  );
}
