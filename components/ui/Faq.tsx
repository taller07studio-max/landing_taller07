/* Preguntas frecuentes con <details> nativo. Los mismos datos alimentan el JSON-LD FAQPage,
   así el texto visible y el de Google siempre coinciden */

export interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={item.question} open={i === 0}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
