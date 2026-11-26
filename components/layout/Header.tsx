import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/Icons';
import { MobileMenu } from './MobileMenu';
import { ProductsMenu } from './ProductsMenu';

/* Los enlaces a secciones usan "/#id" para que funcionen desde cualquier página */
export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav" aria-label="Principal">
          <Link className="logo" href="/" aria-label="Taller 07, inicio">
            taller <span className="logo__badge" aria-hidden="true">07</span>
          </Link>
          <ul className="nav__links">
            <li><Link href="/#servicios">Servicios</Link></li>
            <li><Link href="/#proceso">Proceso</Link></li>
            <ProductsMenu />
            <li><Link href="/#filosofia">Filosofía</Link></li>
            <li><Link href="/#preguntas">Preguntas</Link></li>
          </ul>
          <div className="nav__right">
            <span className="status">agenda abierta</span>
            <Link className="btn btn--dark" href="/#contacto">
              <span>Cuéntame<span className="btn__label-long"> tu proyecto</span></span>
              <span className="btn__icon" aria-hidden="true"><ArrowUpRight /></span>
            </Link>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
