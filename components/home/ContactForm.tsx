'use client';

/* Formulario-frase de contacto (Formspree).
   - Con JS: envía por fetch en JSON, valida, anuncia errores con aria-live y no pierde lo escrito.
     Al enviar, los campos se reemplazan por un panel de confirmación que recibe el foco.
   - Sin JS: el POST normal va a la misma URL de Formspree. */

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { flushSync } from 'react-dom';
import { CONTACT_EMAIL, CONTACT_ENDPOINT } from '@/lib/site';
import { ArrowRight, CheckIcon } from '@/components/ui/Icons';

type Field = 'nombre' | 'correo';
const MESSAGES: Record<Field, string> = {
  nombre: 'Falta tu nombre.',
  correo: 'Revisa tu correo: parece incompleto.',
};

interface Sent {
  nombre: string;
  correo: string;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const [invalid, setInvalid] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<{ text: string; state?: 'error' }>({ text: '' });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState<Sent | null>(null);

  // Cuando aparece la confirmación, recibe el foco (los lectores de pantalla la anuncian) y queda a la vista
  useEffect(() => {
    if (!sent) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    doneRef.current?.focus({ preventScroll: true });
    doneRef.current?.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
  }, [sent]);

  const showDone = (data: Sent) => {
    setSent(data);
    setStatus({ text: '' });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = form.elements.namedItem('nombre') as HTMLInputElement;
    const correo = form.elements.namedItem('correo') as HTMLInputElement;
    nombre.value = nombre.value.trim();
    correo.value = correo.value.trim();

    const errors = ([['nombre', nombre], ['correo', correo]] as const).filter(([, input]) => !input.checkValidity());
    setInvalid(Object.fromEntries(errors.map(([k]) => [k, true])));
    if (errors.length) {
      setStatus({ text: errors.map(([k]) => MESSAGES[k]).join(' '), state: 'error' });
      errors[0][1].focus();
      return;
    }

    const data = new FormData(form);
    const d = {
      nombre: nombre.value,
      correo: correo.value,
      tipo: String(data.get('tipo')),
      etapa: String(data.get('etapa')),
      detalle: String(data.get('detalle') || '').trim(),
      _gotcha: String(data.get('_gotcha') || ''),
    };

    setBusy(true);
    setStatus({ text: 'Enviando…' });
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // email y _replyto: "Responder" en el correo va directo al cliente. _subject: asunto del aviso
        body: JSON.stringify({ ...d, email: d.correo, _replyto: d.correo, _subject: `Proyecto: ${d.tipo} (${d.etapa}) · ${d.nombre}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      showDone({ nombre: d.nombre, correo: d.correo });
    } catch {
      // No se borra lo escrito: se puede reintentar
      setStatus({ text: `No pudimos enviarlo. Intenta de nuevo o escríbenos a ${CONTACT_EMAIL}.`, state: 'error' });
    } finally {
      setBusy(false);
    }
  };

  const clearInvalid = (field: Field) => (e: { currentTarget: HTMLInputElement }) => {
    if (invalid[field] && e.currentTarget.checkValidity()) setInvalid((prev) => ({ ...prev, [field]: false }));
  };

  // flushSync: los campos vuelven a mostrarse antes de mover el foco al primero
  const reset = () => {
    flushSync(() => setSent(null));
    (formRef.current?.elements.namedItem('nombre') as HTMLInputElement | null)?.focus();
  };

  return (
    <form
      ref={formRef}
      className={`madlib${sent ? ' is-sent' : ''}`}
      action={CONTACT_ENDPOINT}
      method="post"
      noValidate
      onSubmit={onSubmit}
    >
      <span className="madlib__badge" aria-hidden="true">{sent ? '// enviado ✓' : '// 30 segundos'}</span>
      <div className="madlib__sentence">
        Hola, soy{' '}
        <label className="sr-only" htmlFor="f-nombre">Tu nombre</label>
        <input id="f-nombre" name="nombre" type="text" autoComplete="name" placeholder="tu nombre" required aria-describedby="f-status" aria-invalid={invalid.nombre || undefined} onInput={clearInvalid('nombre')} style={{ '--w': '8ch' } as CSSProperties} />{' '}
        y mi correo es{' '}
        <label className="sr-only" htmlFor="f-correo">Tu correo electrónico</label>
        <input id="f-correo" name="correo" type="email" autoComplete="email" inputMode="email" placeholder="tu@correo.com" required aria-describedby="f-status" aria-invalid={invalid.correo || undefined} onInput={clearInvalid('correo')} style={{ '--w': '12ch' } as CSSProperties} />. Quiero construir{' '}
        <fieldset>
          <legend className="sr-only">¿Qué quieres construir?</legend>
          {['un SaaS', 'un sistema web', 'una app', 'un MVP', 'una automatización'].map((v) => (
            <label className="chip" key={v}>
              <input type="radio" name="tipo" value={v} defaultChecked={v === 'un sistema web'} />
              <span>{v}</span>
            </label>
          ))}
        </fieldset>{' '}
        y ahora mismo está en etapa de{' '}
        <fieldset>
          <legend className="sr-only">¿En qué etapa está tu proyecto?</legend>
          {['idea', 'validación', 'ya opera'].map((v) => (
            <label className="chip" key={v}>
              <input type="radio" name="etapa" value={v} defaultChecked={v === 'idea'} />
              <span>{v}</span>
            </label>
          ))}
        </fieldset>
      </div>
      <label className="sr-only" htmlFor="f-detalle">Cuéntanos un poco más</label>
      <textarea id="f-detalle" name="detalle" rows={3} placeholder="Cuéntanos un poco más… (opcional)" />
      {/* Trampa anti-spam de Formspree: las personas no la ven ni la llenan */}
      <input className="sr-only" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="madlib__foot">
        <small>sin compromiso · te respondemos por correo</small>
        <button className="btn btn--dark btn--lg" type="submit" disabled={busy} aria-busy={busy || undefined}>
          Enviar mensaje <span className="btn__icon" aria-hidden="true"><ArrowRight /></span>
        </button>
        <p id="f-status" className="madlib__status" role="status" aria-live="polite" data-state={status.state}>
          {status.text}
        </p>
      </div>

      {/* Confirmación: reemplaza los campos al enviar y recibe el foco */}
      <div ref={doneRef} className="madlib__done" hidden={!sent} tabIndex={-1} aria-labelledby="f-done-title">
        <span className="madlib__check" aria-hidden="true"><CheckIcon /></span>
        <h3 id="f-done-title">
          Mensaje <span className="accent">enviado.</span>
        </h3>
        <p>
          Gracias, <b>{sent?.nombre}</b>. Ya tenemos tu mensaje: lo revisamos y te respondemos a <b>{sent?.correo}</b>.
        </p>
        <button className="btn btn--ghost" type="button" onClick={reset}>Enviar otro mensaje</button>
      </div>
    </form>
  );
}
