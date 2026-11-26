/* Hero: título con cursores, banco de trabajo decorativo y CTAs */
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <p className="hero__meta">
            <code>~/taller07</code> estudio de desarrollo de software · est. 2024
            <span className="caret" aria-hidden="true"></span>
          </p>
          <h1 id="hero-title" className="hero__title">
            {' '}
            <span className="hero__word">
              Software
              <span className="cursor cursor--design" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3 2l7 19 2.6-7.4L20 11z"
                    fill="#E2872C"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>diseño</span>
              </span>
            </span>
            <br />
            hecho con
            <br />
            <span className="hero__word">
              <span className="accent">criterio.</span>
              <span className="cursor cursor--code" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3 2l7 19 2.6-7.4L20 11z"
                    fill="#214E3B"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>código</span>
              </span>
            </span>{' '}
          </h1>
          <p className="hero__lead">
            Diseñamos y desarrollamos sistemas, SaaS y productos digitales con intención real.{' '}
            <strong>
              No somos una agencia que entrega pantallas: somos un taller que construye herramientas que funcionan.
            </strong>
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary btn--lg" href="#contacto">
              Cuéntame tu proyecto{' '}
              <span className="btn__icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>{' '}
            </a>
            <a className="btn btn--ghost btn--lg" href="#proceso">
              Ver cómo trabajamos
            </a>
          </div>
        </div>
        <div className="bench" aria-hidden="true">
          <div className="window">
            <div className="window__bar">
              <i></i>
              <i></i>
              <i></i>
              <span>taller07.config.ts</span>
            </div>
            <pre>
              <code>
                <span className="tok-c">{'// cada proyecto empieza aquí'}</span>
                {'\n'}
                <span className="tok-k">{'export default'}</span> <span className="tok-f">{'construir'}</span>
                {'({\n  problema: '}
                <span className="tok-s">{'"real"'}</span>
                {',\n  diseño:   '}
                <span className="tok-s">{'"con intención"'}</span>
                {',\n  código:   '}
                <span className="tok-s">{'"limpio y escalable"'}</span>
                {',\n  humo:     '}
                <span className="tok-k">{'false'}</span>
                {',\n})'}
              </code>
            </pre>
          </div>
          <div className="mini-ui">
            <div className="mini-ui__head">
              Panel de operación <small>● en vivo</small>
            </div>
            <div className="bars">
              <i style={{ height: '40%' }}></i>
              <i style={{ height: '55%' }}></i>
              <i style={{ height: '48%' }}></i>
              <i style={{ height: '70%' }}></i>
              <i style={{ height: '62%' }}></i>
              <i className="is-on" style={{ height: '92%' }}></i>
              <i style={{ height: '76%' }}></i>
            </div>
            <div className="toggle-row">
              Automatizar reportes <span className="toggle"></span>
            </div>
            <div className="toggle-row">
              Alertas al equipo <span className="toggle is-off"></span>
            </div>
          </div>
          <div className="sticker">
            <svg viewBox="0 0 128 128">
              <defs>
                <path id="sticker-path" d="M64,64 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
              </defs>
              <text
                fontFamily="JetBrains Mono, monospace"
                fontSize="10.5"
                fontWeight="600"
                fill="#10291F"
                letterSpacing="2.2"
              >
                <textPath href="#sticker-path">HECHO CON CRITERIO · TALLER 07 · </textPath>
              </text>
            </svg>
            <b>07</b>
          </div>
          <p className="note">Rápido no significa descuidado ✍️</p>
        </div>
      </div>
    </section>
  );
}
