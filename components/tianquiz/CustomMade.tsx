/* Hecho a la medida de tu negocio: 3 tarjetas */
export function CustomMade() {
  return (
    <section className="section" style={{ paddingTop: '40px' }} aria-labelledby="tq-custom">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">personalizado</p>
            <h2 id="tq-custom" className="tq-sec-title">
              Hecho a la medida <span className="accent">de tu negocio.</span>
            </h2>
          </div>
          <p className="section-head__desc">
            No es una plantilla que llenas solo: diseñamos y configuramos tu menú contigo para que se vea y funcione
            como tu restaurante.
          </p>
        </header>
        <ul className="custom">
          <li className="card">
            <div className="swatches" aria-hidden="true">
              <i style={{ background: '#3B2417' }}></i>
              <i style={{ background: '#F7C948' }}></i>
              <i style={{ background: '#C8175F' }}></i>
              <i style={{ background: '#F4EBDD', border: '1px solid var(--c-line)' }}></i>
            </div>
            <h3>Tu identidad visual</h3>
            <p>Tu logo, tus colores y tus fotos. Cada tienda tiene su propia identidad, no la de una app.</p>
          </li>
          <li className="card">
            <div className="extras" aria-hidden="true">
              <span>Chico</span>
              <span className="is-on">Grande</span>
              <span className="is-on">+ Aguacate</span>
              <span>Sin cebolla</span>
              <span>+ Queso</span>
            </div>
            <h3>Opciones y extras</h3>
            <p>Tamaños, ingredientes y variantes para que el pedido llegue exactamente como lo quiere tu cliente.</p>
          </li>
          <li className="card">
            <div className="extras" aria-hidden="true">
              <span className="is-on">Mariscos</span>
              <span>Tacos</span>
              <span>Bebidas</span>
              <span>Postres</span>
              <span>Combos</span>
            </div>
            <h3>Tu menú, organizado</h3>
            <p>Categorías y subcategorías, fotos, precios y descripciones que hacen antojo.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
