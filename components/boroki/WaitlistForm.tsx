'use client';

/* Lista de espera de Boroki (Formspree). Accesible: label oculta, type="email", autocomplete,
   validación con mensaje en .wait-status (role="status") y sin perder lo escrito si hay error.
   Al registrarse, el formulario se reemplaza por una confirmación que recibe el foco.
   Sin JS, el POST normal va a la misma URL de Formspree. */

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { BOROKI_WAITLIST_ENDPOINT } from '@/lib/site';
import { ArrowRight, CheckIcon } from '@/components/ui/Icons';

export function WaitlistForm() {
  const doneRef = useRef<HTMLDivElement>(null);
  const [invalid, setInvalid] = useState(false);
  const [status, setStatus] = useState<{ text: string; state?: 'error' }>({ text: '' });
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  // La confirmación recibe el foco en cuanto aparece
  useEffect(() => {
    if (email) doneRef.current?.focus();
  }, [email]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('email') as HTMLInputElement;
    input.value = input.value.trim();
    if (!input.checkValidity()) {
      setInvalid(true);
      setStatus({ text: input.value ? 'Revisa tu correo: parece incompleto.' : 'Escribe tu correo para avisarte.', state: 'error' });
      input.focus();
      return;
    }

    setInvalid(false);
    setBusy(true);
    setStatus({ text: 'Enviando…' });
    try {
      const res = await fetch(BOROKI_WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: input.value,
          _subject: 'Lista de espera · Boroki',
          origen: 'taller07 · /productos/boroki',
          _gotcha: (form.elements.namedItem('_gotcha') as HTMLInputElement).value,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEmail(input.value);
      setStatus({ text: '' });
    } catch {
      setStatus({ text: 'No pudimos registrarte. Intenta de nuevo en un momento.', state: 'error' });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {!email && (
        <form className="wait" id="lista-de-espera" action={BOROKI_WAITLIST_ENDPOINT} method="post" noValidate onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="w-email">Tu correo para avisarte del lanzamiento</label>
          <input
            id="w-email"
            name="email"
            type="email"
            placeholder="tu@restaurante.mx"
            autoComplete="email"
            inputMode="email"
            required
            aria-describedby="w-status"
            aria-invalid={invalid || undefined}
            onInput={(e) => invalid && e.currentTarget.checkValidity() && setInvalid(false)}
          />
          {/* Trampa anti-spam de Formspree */}
          <input className="sr-only" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button className="btn btn--bk" type="submit" disabled={busy} aria-busy={busy || undefined}>
            Avísame <span className="btn__icon"><ArrowRight /></span>
          </button>
        </form>
      )}
      <div ref={doneRef} id={email ? 'lista-de-espera' : undefined} className="wait-done" hidden={!email} tabIndex={-1}>
        <span className="wait-done__check" aria-hidden="true"><CheckIcon size={22} /></span>
        <div>
          <b>¡Listo, ya estás en la lista!</b>
          <p>Te escribimos a {email} cuando Boroki esté listo.</p>
        </div>
      </div>
      <p id="w-status" className="wait-status" role="status" aria-live="polite" data-state={status.state}>
        {status.text}
      </p>
      <p className="wait-note">// te escribimos solo cuando Boroki esté listo</p>
    </>
  );
}
