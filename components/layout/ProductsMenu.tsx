'use client';

/* Menú "Productos" del header (desktop). Patrón disclosure, no role="menu":
   - Clic, Enter o Espacio abren y cierran.
   - Escape cierra y regresa el foco al botón.
   - Clic fuera o mover el foco fuera también cierra.
   - Solo con mouse (hover + pointer fino): abre al pasar por encima (80ms) y cierra al salir (180ms).
   El panel siempre está en el HTML del servidor (con hidden) para que Google rastree los enlaces. */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type FocusEvent } from 'react';
import { PRODUCTS } from '@/lib/products';
import { ProductLogo, StatusChip } from '@/components/products/ProductBadges';
import { ChevronDown } from '@/components/ui/Icons';

export function ProductsMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const canHover = useRef(false);

  useEffect(() => {
    canHover.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    return () => clearTimeout(hoverTimer.current);
  }, []);

  // Al cambiar de página el panel se cierra
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!itemRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  const onBlur = (e: FocusEvent<HTMLLIElement>) => {
    if (open && !itemRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
  };
  const hover = (next: boolean, delay: number) => {
    if (!canHover.current) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(next), delay);
  };

  const isCurrent = pathname.startsWith('/productos');

  return (
    <li ref={itemRef} onBlur={onBlur} onMouseEnter={() => hover(true, 80)} onMouseLeave={() => hover(false, 180)}>
      <button
        ref={toggleRef}
        className={`nav__toggle${isCurrent ? ' is-current' : ''}`}
        type="button"
        aria-expanded={open}
        aria-controls="menu-productos"
        onClick={() => setOpen((o) => !o)}
      >
        Productos <ChevronDown />
      </button>
      <div className="mega" id="menu-productos" hidden={!open}>
        <ul className="mega__grid" style={{ padding: 0, listStyle: 'none' }}>
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              {/* Sin encabezados dentro de las tarjetas para no romper la jerarquía de la página */}
              <Link className="mega__item" href={p.href} onClick={() => setOpen(false)}>
                <span className="mega__top">
                  <ProductLogo slug={p.slug} />
                  <StatusChip status={p.status}>{p.statusLabel}</StatusChip>
                </span>
                <strong className="mega__name">{p.name}</strong>
                <p>{p.menuDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mega__foot">
          <span aria-hidden="true">// laboratorio saas · {PRODUCTS.length} productos</span>
          <Link href="/productos" onClick={() => setOpen(false)}>Ver todos los productos →</Link>
        </div>
      </div>
    </li>
  );
}
