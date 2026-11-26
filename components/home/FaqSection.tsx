import { Faq, type FaqItem } from '@/components/ui/Faq';

/* Mismo texto que alimenta el JSON-LD FAQPage de la página principal */
export const HOME_FAQ: FaqItem[] = [
  {
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'Depende de la complejidad, el alcance y el tiempo involucrado. No publicamos tarifas fijas porque cada proyecto tiene sus propias variables. Lo primero es entender bien lo que necesitas y de ahí proponer algo con sentido.',
  },
  {
    question: '¿Cuánto dura un proyecto típico?',
    answer:
      'Un MVP bien definido puede estar listo en 6 a 10 semanas. Un sistema más complejo puede tomar varios meses. Lo más importante es que sepas exactamente en qué etapa está tu proyecto en cada momento.',
  },
  {
    question: '¿Trabajan con proyectos desde cero o solo con productos existentes?',
    answer:
      'Ambos. Podemos ayudarte a definir y construir algo nuevo, o tomar un sistema existente que necesita estructura, mejoras o nuevas funcionalidades. El punto de partida no importa; el proceso sí.',
  },
  {
    question: '¿Qué tecnologías usan?',
    answer:
      'Trabajamos principalmente con Next.js, React, Node.js y bases de datos relacionales o no relacionales según lo que el proyecto necesite. La elección tecnológica siempre está al servicio del problema, no al revés.',
  },
  {
    question: '¿También hacen diseño o solo desarrollo?',
    answer:
      'Hacemos los dos, y es parte de lo que nos diferencia. Diseño funcional, estructura de flujos, UI y desarrollo van juntos en nuestro proceso. No entregamos código sin pensar en la experiencia, ni diseños que no se puedan construir.',
  },
  {
    question: '¿Puedo contactarlos si mi idea todavía no está definida del todo?',
    answer:
      'Sí. Parte de nuestro trabajo es ayudarte a aclarar el problema antes de proponer una solución. Si tienes una necesidad clara aunque el "cómo" todavía no, podemos conversar.',
  },
];

/* 05 · Preguntas */
export function FaqSection() {
  return (
    <section className="section" id="preguntas" aria-labelledby="faq-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">05 · preguntas</p>
            <h2 id="faq-title">
              Lo que <span className="accent">siempre</span> nos preguntan
            </h2>
          </div>
        </header>
        <Faq items={HOME_FAQ} />
      </div>
    </section>
  );
}
