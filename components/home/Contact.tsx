import { ContactForm } from './ContactForm';

/* 06 · Contacto */
export function Contact() {
  return (
    <section className="section contact theme-orange" id="contacto" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">06 · contacto</p>
          <h2 id="contact-title">
            Construyamos algo <span className="accent">bien hecho.</span>
          </h2>
          <p className="contact__lead">
            No necesitas tener todo listo. Cuéntanos qué estás construyendo o qué problema necesitas resolver. De ahí
            partimos.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
