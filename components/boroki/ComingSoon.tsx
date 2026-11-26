/* Lo que viene: 4 tarjetas de funciones en desarrollo */
export function ComingSoon() {
  return (
    <section className="section" aria-labelledby="bk-soon">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">lo que viene</p>
            <h2 id="bk-soon" className="tq-sec-title title-bk">
              Del primer antojo al <span className="accent">último «qué rico».</span>
            </h2>
          </div>
          <p className="section-head__desc">
            Funciones en desarrollo. Las ilustraciones son conceptuales y pueden cambiar antes del lanzamiento.
          </p>
        </header>
        <ul className="soon">
          <li className="card">
            <span className="ic" style={{ background: '#FDE7DA' }} aria-hidden="true">
              📱
            </span>
            <h3>Tu antojo, a la mano</h3>
            <p>El comensal ve el menú con un QR y, si el restaurante lo permite, envía su pedido desde el celular.</p>
          </li>
          <li className="card">
            <span className="ic" style={{ background: '#ECE6FA' }} aria-hidden="true">
              🧾
            </span>
            <h3>La cuenta, con claridad</h3>
            <p>Consumos individuales y compartidos: cada quien sabe qué le toca pagar.</p>
          </li>
          <li className="card">
            <span className="ic" style={{ background: '#DDF1F6' }} aria-hidden="true">
              🤝
            </span>
            <h3>Servicio híbrido</h3>
            <p>Pedir desde el celular es opcional: el mesero puede seguir tomando la orden como siempre.</p>
          </li>
          <li className="card">
            <span className="ic" style={{ background: '#FCE4E8' }} aria-hidden="true">
              🔔
            </span>
            <h3>Un equipo en la misma sintonía</h3>
            <p>Mesas, comandas y seguimiento del servicio en un solo lugar.</p>{' '}
            <div className="kds" aria-hidden="true">
              <div style={{ background: '#FDEBD7' }}>
                <b>Por preparar</b>
                <span>Mesa 2 · 3 platillos</span>
              </div>
              <div style={{ background: '#FFF3B8' }}>
                <b>En preparación</b>
                <span>Mesa 4 · aguachile</span>
              </div>
              <div style={{ background: '#E3F5EA' }}>
                <b>Listo</b>
                <span>Mesa 7 · postres</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
