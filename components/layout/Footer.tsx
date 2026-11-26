import Link from 'next/link';
import { CONTACT_EMAIL, INSTAGRAM_URL } from '@/lib/site';
import { PRODUCTS } from '@/lib/products';
import { InstagramIcon } from '@/components/ui/Icons';

export function Footer() {
  return (
    <footer className="site-footer theme-ink">
      <div className="container">
        <div className="footer__top">
          <p style={{ maxWidth: '32ch' }}>Software hecho con criterio. Diseño y desarrollo de SaaS, apps y sistemas a medida.</p>
          <div className="footer__cols">
            <nav aria-labelledby="f-explora">
              <h2 id="f-explora">Explora</h2>
              <ul>
                <li><Link href="/#servicios">Servicios</Link></li>
                <li><Link href="/#proceso">Proceso</Link></li>
                <li><Link href="/#filosofia">Filosofía</Link></li>
                <li><Link href="/#preguntas">Preguntas</Link></li>
              </ul>
            </nav>
            <nav aria-labelledby="f-productos">
              <h2 id="f-productos">Productos</h2>
              <ul>
                {PRODUCTS.map((p) => (
                  <li key={p.slug}><Link href={p.href}>{p.footerLabel}</Link></li>
                ))}
                <li><Link href="/productos">Todos los productos</Link></li>
              </ul>
            </nav>
            <div>
              <h2>Contacto</h2>
              <ul>
                <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                <li><Link href="/#contacto">Cuéntame tu proyecto</Link></li>
              </ul>
              <a className="footer__social" href={INSTAGRAM_URL} target="_blank" rel="noopener me" aria-label="Instagram de Taller 07 (se abre en otra pestaña)">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <p className="footer__word" aria-hidden="true">taller<span>07</span></p>
        <div className="footer__legal">
          <span>© {new Date().getFullYear()} Taller 07</span>
          <span>hecho con criterio, no con plantillas</span>
        </div>
      </div>
    </footer>
  );
}
