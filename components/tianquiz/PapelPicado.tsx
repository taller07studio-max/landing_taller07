/* Guirnalda de papel picado arriba del hero de Tianquiz ("tianguis"). Decorativa */
const COLORS = ['#C8175F', '#F7C948', '#2E7DBA', '#15803D', '#EC8F5E'];
const FLAGS = 30;

export function PapelPicado() {
  return (
    <div className="papel" aria-hidden="true">
      {Array.from({ length: FLAGS }, (_, i) => (
        <svg key={i} width="64" height="62" viewBox="0 0 64 62">
          <path d="M2 0h60v46l-6 6-6-6-6 6-6-6-6 6-6-6-6 6-6-6-6 6-6-6z" fill={COLORS[i % COLORS.length]} />
          <circle cx="32" cy="20" r="6" fill="#F4F2EE" />
          <path d="M14 30h8M42 30h8M22 12l4 4M42 12l-4 4" stroke="#F4F2EE" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}
