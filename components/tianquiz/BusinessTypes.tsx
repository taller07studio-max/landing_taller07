/* No solo para restaurantes: tienda en línea para otros giros */
export function BusinessTypes() {
  return (
    <section className="section theme-green" aria-labelledby="tq-biz">
      <div className="container">
        <p className="eyebrow">tienda en línea</p>
        <h2 id="tq-biz" className="tq-sec-title">
          No solo para <span className="accent">restaurantes.</span>
        </h2>
        <p style={{ marginTop: '18px', maxWidth: '52ch', color: 'var(--c-on-green)', fontSize: '1.08rem' }}>
          Si tus clientes pueden elegir un producto y pedirlo por WhatsApp, Tianquiz funciona como tu tienda en línea.
        </p>
        <ul className="biz">
          <li className="is-main">
            <span aria-hidden="true">🍽</span>Restaurantes y cafeterías
          </li>
          <li>
            <span aria-hidden="true">👗</span>Boutiques
          </li>
          <li>
            <span aria-hidden="true">🌸</span>Florerías
          </li>
          <li>
            <span aria-hidden="true">🎁</span>Regalos y decoración
          </li>
          <li>
            <span aria-hidden="true">🎨</span>Artesanos
          </li>
        </ul>
      </div>
    </section>
  );
}
