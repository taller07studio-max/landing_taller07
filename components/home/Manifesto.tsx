/* Manifiesto: por qué existimos */
export function Manifesto() {
  return (
    <section className="section manifesto theme-green" aria-label="Por qué existimos">
      <div className="container">
        <p className="eyebrow">// por qué existimos</p>
        <blockquote className="reveal">
          {' '}
          El software debe resolver problemas reales. Una interfaz bonita sin lógica de negocio sólida es{' '}
          <span className="strike">
            maquillaje
            <svg viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M4 36 C 60 20, 120 44, 180 26 S 270 30, 296 22"
                stroke="#E2872C"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
          . <span className="accent">Construir bien desde el inicio vale más que improvisar rápido.</span>{' '}
        </blockquote>
        <p className="manifesto__sig">
          <b aria-hidden="true">07</b>Taller 07 · principios de trabajo
        </p>
      </div>
      <span className="watermark" aria-hidden="true">
        07
      </span>
    </section>
  );
}
