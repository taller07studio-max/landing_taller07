import type { ReactNode } from 'react';

/* Banda final de cada página de producto: título, texto opcional, contenido extra y una acción.
   variant: "tq" (rosa Tianquiz), "bk" (crema Boroki) o "idea" (verde, en /productos) */
export function CtaBand({
  variant,
  titleId,
  eyebrow,
  title,
  text,
  children,
  action,
}: {
  variant: 'tq' | 'bk' | 'idea';
  titleId: string;
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
  action: ReactNode;
}) {
  const className = variant === 'idea' ? 'idea theme-green' : `band band--${variant}`;
  return (
    <div className={className}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={titleId} className={variant === 'bk' ? 'title-bk' : undefined}>{title}</h2>
        {text && <p>{text}</p>}
        {children}
      </div>
      {action}
    </div>
  );
}
