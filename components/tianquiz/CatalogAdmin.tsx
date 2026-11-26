/* Administra tu catálogo: checklist y mini panel decorativo */
export function CatalogAdmin() {
  return (
    <section className="section" aria-labelledby="tq-admin">
      <div className="container panel-sec">
        <div>
          <p className="eyebrow">catálogo en línea</p>
          <h2 id="tq-admin" className="tq-sec-title">
            Administra tu catálogo <span className="accent">tú mismo.</span>
          </h2>
          <ul className="checks">
            <li>Agrega, edita y organiza productos y categorías.</li>
            <li>Cambia precios al momento, sin reimprimir nada.</li>
            <li>Marca agotados con un clic para no recibir pedidos imposibles.</li>
            <li>Todo desde el celular o la computadora.</li>
          </ul>
        </div>
        <div className="admin" aria-hidden="true">
          <div className="admin__bar">
            Mi catálogo <span>+ Nuevo producto</span>
          </div>
          <div className="admin__tabs">
            <span className="is-on">Mariscos</span>
            <span>Tacos</span>
            <span>Bebidas</span>
            <span>Postres</span>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div className="arow">
              <span className="ph" style={{ background: 'linear-gradient(135deg,#F2B25C,#C8661E)' }}></span>
              <span>
                Tacos de camarón<small>3 extras</small>
              </span>
              <span className="price">$90.00</span>
              <span className="toggle"></span>
            </div>
            <div className="arow">
              <span className="ph" style={{ background: 'linear-gradient(135deg,#7CC57A,#2F7D4A)' }}></span>
              <span>
                Aguachile verde<small>2 tamaños</small>
              </span>
              <span className="price is-edit">$185.00</span>
              <span className="toggle"></span>
            </div>
            <div className="arow is-off">
              <span className="ph" style={{ background: 'linear-gradient(135deg,#F28B6B,#B84A2E)' }}></span>
              <span>
                Tostada mixta<small>Agotado hoy</small>
              </span>
              <span className="price">$120.00</span>
              <span className="toggle is-off"></span>
            </div>
            <div className="arow">
              <span className="ph" style={{ background: 'linear-gradient(135deg,#F4EBDD,#D9C6A8)' }}></span>
              <span>
                Agua de horchata<small>Chica · Grande</small>
              </span>
              <span className="price">$35.00</span>
              <span className="toggle"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
