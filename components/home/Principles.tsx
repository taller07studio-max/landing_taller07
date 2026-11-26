/* 04 · Lo que creemos */
export function Principles() {
  return (
    <section className="section principles theme-green" id="filosofia" aria-labelledby="prin-title">
      <div className="container">
        <p className="eyebrow">04 · lo que creemos</p>
        <h2 id="prin-title">
          Menos <span className="smoke">humo.</span>
          <br />
          Más <span className="accent">criterio.</span>
        </h2>
        <ol className="cards-tilt" data-reveal-group>
          <li className="pcard reveal">
            <span className="pcard__n" aria-hidden="true">
              I
            </span>
            <div>
              <h3>Entender antes de construir</h3>
              <p>El software debe resolver problemas reales, no solo verse moderno.</p>
            </div>
          </li>
          <li className="pcard reveal">
            <span className="pcard__n" aria-hidden="true">
              II
            </span>
            <div>
              <h3>Diseñar con intención</h3>
              <p>Diseño, experiencia y desarrollo deben trabajar juntos.</p>
            </div>
          </li>
          <li className="pcard reveal">
            <span className="pcard__n" aria-hidden="true">
              III
            </span>
            <div>
              <h3>Desarrollar con estructura</h3>
              <p>La claridad en requerimientos evita retrabajo, costo innecesario y frustración.</p>
            </div>
          </li>
          <li className="pcard reveal">
            <span className="pcard__n" aria-hidden="true">
              IV
            </span>
            <div>
              <h3>Iterar con criterio</h3>
              <p>Cada sistema debe tener una razón clara para existir.</p>
            </div>
          </li>
          <li className="pcard reveal">
            <span className="pcard__n" aria-hidden="true">
              V
            </span>
            <div>
              <h3>Priorizar utilidad y escalabilidad real</h3>
              <p>Construir bien desde el inicio vale más que improvisar rápido.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
