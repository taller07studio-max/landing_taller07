/* Comparativa contra menú en PDF y apps de delivery (tabla accesible) */
export function Comparison() {
  return (
    <section className="section" aria-labelledby="tq-cmp">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">comparativa</p>
            <h2 id="tq-cmp" className="tq-sec-title">
              ¿Por qué no un PDF <span className="accent">o una app?</span>
            </h2>
          </div>
        </header>
        <div className="cmp-wrap" role="region" aria-labelledby="tq-cmp" tabIndex={0}>
          <table className="cmp">
            <caption className="sr-only">Comparativa entre Tianquiz, un menú en PDF y las apps de delivery</caption>
            <thead>
              <tr>
                <td></td>
                <th scope="col" className="is-tq">
                  Tianquiz
                </th>
                <th scope="col">Menú en PDF o fotos</th>
                <th scope="col">Apps de delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Comisión por venta</th>
                <td className="is-tq">0 %</td>
                <td>No aplica</td>
                <td>Comisión por cada pedido</td>
              </tr>
              <tr>
                <th scope="row">Pedido ordenado</th>
                <td className="is-tq">Sí, directo a tu WhatsApp</td>
                <td>No, se pide a mano por chat</td>
                <td>Sí, dentro de la app</td>
              </tr>
              <tr>
                <th scope="row">Cambiar precios o agotados</th>
                <td className="is-tq">Al momento, desde tu panel</td>
                <td>Rehacer el archivo</td>
                <td>Desde la app de la plataforma</td>
              </tr>
              <tr>
                <th scope="row">Tu marca y tus clientes</th>
                <td className="is-tq">Tuyos</td>
                <td>Tuyos</td>
                <td>Compartidos con la plataforma</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
