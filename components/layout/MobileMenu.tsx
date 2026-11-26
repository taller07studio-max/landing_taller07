'use client';

/* Menú móvil sobre <details> nativo (funciona sin JS). Con JS: se cierra al elegir un enlace,
   con Escape, al tocar fuera y al cambiar de página */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { PRODUCTS } from '@/lib/products';
import { ProductLogo, StatusChip } from '@/components/products/ProductBadges';

export function MobileMenu() {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  useEffect(close, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        ref.current?.querySelector('summary')?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <details className="menu" ref={ref} onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
        <svg className="menu__open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
        <svg className="menu__close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </summary>
      <div className="menu__panel">
        <Link href="/#servicios" onClick={close}>Servicios</Link>
        <Link href="/#proceso" onClick={close}>Proceso</Link>
        <p className="menu__group">Productos</p>
        {PRODUCTS.map((p) => (
          <Link key={p.slug} className="menu__product" href={p.href} onClick={close}>
            <ProductLogo slug={p.slug} small />
            <span>
              <b>
                {p.name}
                {p.mobileStatusLabel && <> <StatusChip status={p.status}>{p.mobileStatusLabel}</StatusChip></>}
              </b>
              <small>{p.mobileDescription}</small>
            </span>
          </Link>
        ))}
        <Link href="/productos" onClick={close}>Todos los productos</Link>
        <Link href="/#filosofia" onClick={close}>Filosofía</Link>
        <Link href="/#preguntas" onClick={close}>Preguntas</Link>
      </div>
    </details>
  );
}
