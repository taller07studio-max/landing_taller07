import { Faq, type FaqItem } from '@/components/ui/Faq';

/* Texto idéntico al del JSON-LD FAQPage (PRODUCTOS.md §6): ambos salen de aquí */
export const TIANQUIZ_FAQ: FaqItem[] = [
  {
    question: '¿Qué es un menú digital con pedidos por WhatsApp?',
    answer:
      'Es la carta de tu restaurante en una página web que tus clientes abren desde el celular. Ahí ven fotos, precios y descripciones, eligen lo que quieren y envían el pedido ya ordenado a tu WhatsApp.',
  },
  {
    question: '¿Cómo hago un menú digital para mi restaurante?',
    answer:
      'Con Tianquiz no lo haces solo: nos cuentas de tu negocio, nosotros lo construimos con tu marca y tu primera versión queda lista en menos de un día.',
  },
  {
    question: '¿Cobran comisión por cada pedido?',
    answer: 'No. Tianquiz no cobra comisiones por venta ni es un marketplace: los pedidos y los clientes son tuyos.',
  },
  {
    question: '¿Puedo cambiar precios o marcar platillos agotados?',
    answer: 'Sí. Desde tu panel administras productos, categorías, precios y disponibilidad al momento.',
  },
  {
    question: '¿Sirve si no tengo restaurante?',
    answer:
      'Sí. Funciona como tienda en línea para cafeterías, boutiques, florerías, regalos y decoración, artesanos y cualquier negocio que venda por WhatsApp.',
  },
  {
    question: '¿Necesito saber programar?',
    answer: 'No. Nosotros lo construimos y configuramos; tú solo administras tu catálogo.',
  },
];

/* Preguntas sobre menú digital (la primera abierta) */
export function TianquizFaq() {
  return (
    <section className="section" id="preguntas" style={{ paddingTop: 0 }} aria-labelledby="tq-faq">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">preguntas</p>
            <h2 id="tq-faq" className="tq-sec-title">
              Preguntas sobre <span className="accent">menú digital.</span>
            </h2>
          </div>
        </header>
        <Faq items={TIANQUIZ_FAQ} />
      </div>
    </section>
  );
}
