/* 03 · Para quién (diff) */
export function Fit() {
  return (
    <section className="section" id="para-quien" aria-labelledby="fit-title">
      <div className="container fit">
        <div>
          <p className="eyebrow">03 · para quién</p>
          <h2 id="fit-title">
            ¿Hacemos <span className="accent">match?</span>
          </h2>
          <p className="fit__lead">Preferimos decirlo claro desde el inicio. Así se ve si encajamos o no.</p>
        </div>
        <figure className="diff reveal">
          <figcaption>
            <span>
              <b>para-quien.diff</b> · taller07
            </span>
            <span className="diff__stats" aria-hidden="true">
              <span className="add">+4</span>
              <span className="rem">−3</span>
            </span>
          </figcaption>
          <h3 className="diff__hunk">@@ encajamos bien si eres @@</h3>
          <ul className="diff__add">
            <li>Un negocio que ya opera y necesita digitalizar procesos o construir un sistema a medida.</li>
            <li>Un emprendedor que quiere construir un MVP serio, con buena base técnica y visual.</li>
            <li>Un equipo que busca un partner técnico con criterio de diseño y enfoque en negocio.</li>
            <li>Una empresa que necesita herramientas internas que realmente mejoren su operación.</li>
          </ul>
          <h3 className="diff__hunk">@@ probablemente no somos la opción si @@</h3>
          <ul className="diff__rem">
            <li>Tu criterio principal de decisión es el precio más bajo disponible.</li>
            <li>El proyecto aún no tiene objetivos claros ni definición mínima del problema.</li>
            <li>Esperas resultados complejos en tiempos irreales sin pasar por ningún proceso.</li>
          </ul>
        </figure>
      </div>
    </section>
  );
}
