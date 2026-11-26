import { WhatsAppIcon } from '@/components/ui/Icons';

/* Celular con un menú digital de DEMOSTRACIÓN ("Tu restaurante"). Decorativo: aria-hidden.
   No usar nombres de clientes reales sin permiso (PRODUCTOS.md §5). */

export const DEMO_MENU = [
  { name: 'Tacos de camarón', detail: 'Tortilla de maíz, col, chipotle', price: '$90', photo: 'linear-gradient(135deg,#F2B25C,#C8661E)' },
  { name: 'Aguachile verde', detail: 'Camarón, pepino, cebolla morada', price: '$185', photo: 'linear-gradient(135deg,#7CC57A,#2F7D4A)' },
  { name: 'Tostada mixta', detail: 'Pulpo, camarón y callo', price: '$120', photo: 'linear-gradient(135deg,#F28B6B,#B84A2E)' },
  { name: 'Agua de horchata', detail: 'Grande · 1 L', price: '$35', photo: 'linear-gradient(135deg,#F4EBDD,#D9C6A8)' },
];

export const DEMO_CATEGORIES = ['Mariscos', 'Tacos', 'Bebidas', 'Postres'];

export function Phone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__screen">
        <div className="phone__notch" />
        <div className="m-cover" />
        <div className="m-head">
          <span className="av">TU</span>
          <div>
            <b>Tu restaurante</b>
            <small>● Abierto · recibe pedidos</small>
          </div>
        </div>
        <div className="m-tabs">
          {DEMO_CATEGORIES.map((c, i) => (
            <span key={c} className={i === 0 ? 'is-on' : undefined}>{c}</span>
          ))}
        </div>
        {DEMO_MENU.map((item) => (
          <div className="m-item" key={item.name}>
            <div className="ph" style={{ background: item.photo }} />
            <div>
              <b>{item.name}</b>
              <small>{item.detail}</small>
              <em>{item.price}</em>
            </div>
            <span className="add">+</span>
          </div>
        ))}
        <div className="m-cart">
          <span><WhatsAppIcon /> Enviar pedido</span>
          <i>3 · $215</i>
        </div>
      </div>
    </div>
  );
}
