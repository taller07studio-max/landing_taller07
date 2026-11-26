import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Crumb } from '@/lib/jsonld';

/* Migas de navegación. Los mismos datos generan el BreadcrumbList del JSON-LD */
export function Crumbs({ items, style }: { items: Crumb[]; style?: CSSProperties }) {
  return (
    <nav className="crumbs" aria-label="Ruta de navegación" style={style}>
      <ol>
        {items.map((c, i) =>
          i === items.length - 1 ? (
            <li key={c.href} aria-current="page">{c.name}</li>
          ) : (
            <li key={c.href}><Link href={c.href}>{c.name}</Link></li>
          ),
        )}
      </ol>
    </nav>
  );
}
