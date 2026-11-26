import type { Crumb } from '@/lib/jsonld';
import { Crumbs } from '@/components/products/Crumbs';

/* Hero de /productos: migas, título y una ventana `git log` decorativa */
export function ProductosHero({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <section className="p-hero" aria-labelledby="p-title">
      <div className="container p-hero__grid">
        <div>
          <Crumbs items={crumbs} />
          <p className="eyebrow" style={{ marginTop: 34 }}>productos · laboratorio saas</p>
          <h1 id="p-title">
            Software que
            <br />
            también <span className="accent">operamos.</span>
          </h1>
          <p className="lead">
            Además de construir para clientes, diseñamos, lanzamos y mantenemos nuestros propios productos SaaS. Lo que
            aprendemos aquí lo aplicamos en cada proyecto.
          </p>
        </div>
        <div className="gitlog" aria-hidden="true">
          <div className="window">
            <div className="window__bar"><i /><i /><i /><span>~/taller07/productos</span></div>
            <pre>
              <code>
                <span className="tok-c">$ git log --oneline productos</span>
                {'\n'}
                <span className="tok-k">a7c21f</span> <span className="tok-f">tianquiz</span>{'  '}
                <span className="tok-s">● en producción</span>
                {'\n'}
                <span className="tok-k">f03b9e</span> <span className="tok-f">boroki</span>{'    '}
                <span className="tok-k">◐ en construcción</span>
                {'\n'}
                <span className="tok-k">······</span> <span className="tok-c">¿el siguiente? lo construimos contigo</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
