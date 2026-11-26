/* 02 · Proceso */
export function Process() {
  return (
    <section className="section theme-sand" id="proceso" aria-labelledby="proceso-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">02 · proceso</p>
            <h2 id="proceso-title">
              Cómo <span className="accent">trabajamos</span>
            </h2>
          </div>
          <p className="section-head__desc">
            Un proceso claro para que sepas exactamente en qué etapa está tu proyecto en cada momento.
          </p>
        </header>
        <div className="branch" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M20 70 H1180" stroke="#214E3B" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <path
              d="M940 70 C 980 70, 990 18, 1040 18 H1120 C 1160 18, 1170 70, 1180 70"
              stroke="#E2872C"
              strokeWidth="3"
              fill="none"
              strokeDasharray="7 7"
              vectorEffect="non-scaling-stroke"
            />
            <g fill="#E7E0D8" stroke="#214E3B" strokeWidth="3">
              <circle cx="143" cy="70" r="13" />
              <circle cx="448" cy="70" r="13" />
              <circle cx="754" cy="70" r="13" />
            </g>
            <circle cx="1059" cy="70" r="15" fill="#E2872C" stroke="#E7E0D8" strokeWidth="4" />
            <text x="1074" y="10" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#9A4C0A">
              iterar ↺
            </text>
            <text x="20" y="108" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#52615A">
              main
            </text>
          </svg>
        </div>
        <ol className="steps" data-reveal-group>
          <li className="step reveal">
            <span className="step__num" aria-hidden="true">
              01
            </span>
            <p className="step__commit" aria-hidden="true">
              <b>a1f3c</b>git commit -m
            </p>
            <h3>Entender</h3>
            <p>
              Antes de proponer, escuchamos. El problema real, el contexto del negocio y qué debe resolver el sistema.
              Sin suposiciones.
            </p>
          </li>
          <li className="step reveal">
            <span className="step__num" aria-hidden="true">
              02
            </span>
            <p className="step__commit" aria-hidden="true">
              <b>b72e9</b>git commit -m
            </p>
            <h3>Diseñar</h3>
            <p>
              Estructura, flujos y lógica funcional con intención. El diseño no es decoración: es la arquitectura que
              hace que el producto funcione.
            </p>
          </li>
          <li className="step reveal">
            <span className="step__num" aria-hidden="true">
              03
            </span>
            <p className="step__commit" aria-hidden="true">
              <b>c90d4</b>git commit -m
            </p>
            <h3>Desarrollar</h3>
            <p>
              Código limpio, con estructura y enfoque en escalabilidad. Nada de software que solo funciona en
              condiciones ideales.
            </p>
          </li>
          <li className="step step--current reveal">
            <span className="step__num" aria-hidden="true">
              04
            </span>
            <p className="step__commit" aria-hidden="true">
              <b>d3b18</b>git commit -m
            </p>
            <h3>Iterar</h3>
            <p>
              Ajustamos con criterio según lo que se aprende en uso real. El objetivo no es cerrar tickets: es que el
              producto cumpla su propósito.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
