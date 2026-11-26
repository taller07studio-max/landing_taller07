/* #como-funciona: así te llega cada pedido (3 pasos) */
export function HowItWorks() {
  return (
    <section className="section theme-sand" id="como-funciona" aria-labelledby="tq-flow">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">pedidos por whatsapp</p>
            <h2 id="tq-flow" className="tq-sec-title">
              Así te llega <span className="accent">cada pedido.</span>
            </h2>
          </div>
          <p className="section-head__desc">
            Se acabaron las fotos del menú una por una y los pedidos a medias por chat.
          </p>
        </header>
        <ol className="flow3">
          <li>
            <span className="n" aria-hidden="true">
              1
            </span>
            <h3>Tu cliente abre tu menú</h3>
            <p>Desde un enlace en tu Instagram, tu WhatsApp o un código QR en la mesa.</p>
          </li>
          <li>
            <span className="n" aria-hidden="true">
              2
            </span>
            <h3>Elige y personaliza</h3>
            <p>Ve fotos y precios, escoge opciones y extras y arma su pedido.</p>
          </li>
          <li>
            <span className="n n--wa" aria-hidden="true">
              3
            </span>
            <h3>Te llega por WhatsApp</h3>
            <p>Un mensaje claro y ordenado, con productos, extras y total. Tú solo confirmas.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
