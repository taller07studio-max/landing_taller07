import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Product, ProductStatus } from '@/lib/products';
import borokiLogo from '@/public/products/boroki/logo.png';

/* Estado tipo versión: "en producción" (verde) o "en construcción" (naranja) */
export function StatusChip({ status, children }: { status: ProductStatus; children: string }) {
  return <span className={`status-chip status-chip--${status}`}>{children}</span>;
}

/* Logo de producto. Tianquiz es un wordmark de texto PROVISIONAL; Boroki usa su logo original.
   decorative: true cuando el nombre ya está escrito al lado (menú, tarjetas). */
export function ProductLogo({
  slug,
  small = false,
  decorative = true,
  style,
}: {
  slug: Product['slug'];
  small?: boolean;
  decorative?: boolean;
  style?: CSSProperties;
}) {
  const size = small ? ' plogo--sm' : '';
  if (slug === 'tianquiz') {
    return (
      <span className={`plogo plogo--tq${size}`} aria-hidden="true" style={style}>
        {small ? 'TQ' : 'TIANQUIZ'}
      </span>
    );
  }
  return (
    <span className={`plogo plogo--bk${size}`} aria-hidden={decorative || undefined} style={style}>
      <Image src={borokiLogo} alt={decorative ? '' : 'Boroki'} sizes={small ? '56px' : '72px'} />
    </span>
  );
}
