/* ==========================================================================
   Taller 07 · Comportamiento de la landing
   1. Menú móvil   2. Enlace activo   3. Entrada al hacer scroll
   4. Formulario de contacto   5. Año del footer
   Todo es mejora progresiva: sin JS la página se lee y navega completa.
   ========================================================================== */

(() => {
  /* ---------- 1. Menú móvil: se cierra al elegir, con Escape o al tocar fuera ---------- */
  const menu = document.querySelector('.menu');
  if (menu) {
    const summary = menu.querySelector('summary');
    const close = () => { menu.open = false; };
    menu.addEventListener('toggle', () => {
      summary.setAttribute('aria-label', menu.open ? 'Cerrar menú' : 'Abrir menú');
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.open) { close(); summary.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (menu.open && !menu.contains(e.target)) close();
    });
  }

  /* ---------- 2. Enlace activo en la navegación según la sección visible ---------- */
  const navLinks = [...document.querySelectorAll('.nav__links a')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- 3. Entrada al hacer scroll: fade + 12px, escalonado 60ms ---------- */
  const reveals = document.querySelectorAll('.reveal');
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll(':scope > .reveal').forEach((el, i) => el.style.setProperty('--i', i));
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- 4. Formulario de contacto ---------- */
  const form = document.querySelector('form.madlib');
  if (form) {
    const status = form.querySelector('.madlib__status');
    const button = form.querySelector('button[type="submit"]');
    const fields = {
      nombre: form.elements.nombre,
      correo: form.elements.correo,
    };
    const messages = {
      nombre: 'Falta tu nombre.',
      correo: 'Revisa tu correo: parece incompleto.',
    };

    const setStatus = (text, state) => {
      status.textContent = text;
      if (state) status.dataset.state = state; else delete status.dataset.state;
    };

    const validate = () => {
      const errors = [];
      Object.entries(fields).forEach(([key, input]) => {
        input.value = input.value.trim();
        const ok = input.checkValidity();
        input.setAttribute('aria-invalid', String(!ok));
        if (!ok) errors.push(key);
      });
      return errors;
    };

    // Al corregir un campo se quita su marca de error
    Object.values(fields).forEach((input) => {
      input.addEventListener('input', () => {
        if (input.getAttribute('aria-invalid') === 'true' && input.checkValidity()) {
          input.removeAttribute('aria-invalid');
        }
      });
    });

    const payload = () => {
      const data = new FormData(form);
      return {
        nombre: data.get('nombre'),
        correo: data.get('correo'),
        tipo: data.get('tipo'),
        etapa: data.get('etapa'),
        detalle: (data.get('detalle') || '').trim(),
      };
    };

    const openMailto = (d) => {
      const subject = `Proyecto: ${d.tipo} (${d.etapa}) · ${d.nombre}`;
      const body = [
        `Hola, soy ${d.nombre} y mi correo es ${d.correo}.`,
        `Quiero construir ${d.tipo} y ahora mismo está en etapa de ${d.etapa}.`,
        d.detalle ? `\n${d.detalle}` : '',
      ].join('\n');
      window.location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errors = validate();
      if (errors.length) {
        setStatus(errors.map((k) => messages[k]).join(' '), 'error');
        fields[errors[0]].focus();
        return;
      }

      const d = payload();
      const endpoint = form.dataset.endpoint;

      if (!endpoint) {
        openMailto(d);
        setStatus('Abrimos tu app de correo con el mensaje listo. Solo dale enviar.', 'success');
        return;
      }

      button.setAttribute('aria-busy', 'true');
      button.disabled = true;
      setStatus('Enviando…');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(d),
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        setStatus(`¡Listo, ${d.nombre}! Recibimos tu mensaje y te respondemos por correo.`, 'success');
      } catch {
        // No se borra lo escrito: el usuario puede reintentar
        setStatus(`No pudimos enviarlo. Intenta de nuevo o escríbenos a ${form.dataset.mailto}.`, 'error');
      } finally {
        button.removeAttribute('aria-busy');
        button.disabled = false;
      }
    });
  }

  /* ---------- 5. Año del footer ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
