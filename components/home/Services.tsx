import Link from 'next/link';

/* 01 · Servicios (bento) */
export function Services() {
  return (
    <section className="section" id="servicios" aria-labelledby="servicios-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">01 · servicios</p>
            <h2 id="servicios-title">
              Qué <span className="accent">construimos</span>
            </h2>
          </div>
          <p className="section-head__desc">
            Del primer boceto al sistema en producción. Sin plantillas: arquitectura pensada para lo que tu negocio
            necesita.
          </p>
        </header>
        <ul className="bento" data-reveal-group>
          <li className="card card--green card--saas is-wide reveal">
            {' '}
            <div>
              <span className="tag">laboratorio saas</span>
              <h3>Plataformas SaaS</h3>
              <p>
                Productos digitales con modelo de negocio escalable, para quien quiere construir algo que exista más
                allá de un proyecto puntual.
              </p>
              <Link className="card__more" href="/productos">
                Ver nuestros productos <span aria-hidden="true">→</span>
              </Link>
            </div>{' '}
            <div className="card__illus" aria-hidden="true">
              <div className="dash">
                <div className="dash__side">
                  <i></i>
                  <i></i>
                  <i style={{ width: '70%' }}></i>
                  <i></i>
                  <i style={{ width: '60%' }}></i>
                </div>
                <div className="dash__main">
                  <div className="kpi">
                    <b>1,284</b>
                    <small>usuarios</small>
                  </div>
                  <div className="kpi">
                    <b>98%</b>
                    <small>uptime</small>
                  </div>
                  <div className="kpi">
                    <b>v2.4</b>
                    <small>release</small>
                  </div>
                  <div className="dash__chart">
                    <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path
                        d="M0 80 C 40 70, 60 76, 90 60 S 150 50, 180 40 S 250 20, 300 14 L300 100 L0 100Z"
                        fill="#CDE4D3"
                      />
                      <path
                        d="M0 80 C 40 70, 60 76, 90 60 S 150 50, 180 40 S 250 20, 300 14"
                        stroke="#214E3B"
                        strokeWidth="2.5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>{' '}
          </li>
          <li className="card reveal">
            {' '}
            <span className="tag">validar rápido</span>
            <h3>MVPs y productos digitales</h3>{' '}
            <p>Una primera versión funcional, con una base que aguante crecer. Rápido no significa descuidado.</p>{' '}
            <div className="card__illus versions" aria-hidden="true" style={{ marginTop: '40px' }}>
              <span>idea</span>
              <i></i>
              <span>v0.1</span>
              <i></i>
              <span className="is-on">v1.0 🚀</span>
            </div>{' '}
          </li>
          <li className="card reveal">
            {' '}
            <span className="tag">a medida</span>
            <h3>Sistemas web</h3>{' '}
            <p>Plataformas, paneles y herramientas administrativas diseñadas según la operación real de tu negocio.</p>{' '}
            <div className="card__illus browser" aria-hidden="true">
              <div className="browser__bar">
                <i></i>
                <i></i>
                <i></i>
                <span>app.tunegocio.mx</span>
              </div>
              <div className="browser__body">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
          </li>
          <li className="card card--ink card--flow is-wide reveal">
            {' '}
            <span className="tag">menos trabajo manual</span>
            <h3>Automatización de procesos</h3>{' '}
            <p>
              Identificamos tareas repetitivas dentro de tu operación y construimos la lógica para que el sistema las
              resuelva solo, con trazabilidad y control.
            </p>{' '}
            <div className="card__illus flow" aria-hidden="true">
              <span className="flow__node">
                <i style={{ background: 'var(--c-orange)', color: 'var(--c-green-ink)' }}>⚡</i>Llega un pedido
              </span>
              <span className="flow__wire"></span>
              <span className="flow__node">
                <i style={{ background: 'var(--c-mint)', color: 'var(--c-green)' }}>fx</i>Valida y asigna
              </span>
              <span className="flow__wire"></span>
              <span className="flow__node">
                <i style={{ background: '#fff', color: 'var(--c-green)' }}>✓</i>Notifica al equipo
              </span>
            </div>{' '}
          </li>
          <li className="card reveal">
            {' '}
            <span className="tag">uso interno</span>
            <h3>Herramientas internas</h3> <p>Software que se adapta a tu equipo, no al revés.</p>{' '}
            <div className="card__illus list-ui" aria-hidden="true">
              <div>
                Inventario <span className="toggle"></span>
              </div>
              <div>
                Turnos del equipo <span className="toggle"></span>
              </div>
              <div>
                Reportes semanales <span className="toggle is-off"></span>
              </div>
            </div>{' '}
          </li>
          <li className="card reveal">
            {' '}
            <h3>Diseño funcional de producto</h3>{' '}
            <p>Flujos, módulos y prototipos antes de escribir código. Evita retrabajo y aclara el rumbo.</p>{' '}
            <div className="card__illus wireframe" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <span className="cursor">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    d="M3 2l7 19 2.6-7.4L20 11z"
                    fill="#E2872C"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>{' '}
          </li>
          <li className="card card--orange reveal">
            {' '}
            <h3>¿Lo tuyo no está en la lista?</h3> <p>Si resuelve un problema real, nos interesa escucharlo.</p>{' '}
            <a className="btn btn--dark" href="#contacto">
              Platiquemos{' '}
              <span className="btn__icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>{' '}
          </li>
        </ul>
      </div>
    </section>
  );
}
