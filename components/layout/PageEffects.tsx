'use client';

/* Efectos de página que antes vivían en scripts/main.js:
   1. Entrada al hacer scroll (.reveal): fade + 12px, escalonado 60ms dentro de [data-reveal-group].
   2. En la página principal, marca en la navegación la sección visible (aria-current).
   Se vuelven a aplicar en cada cambio de ruta. */

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)');
    document.querySelectorAll('[data-reveal-group]').forEach((group) => {
      group.querySelectorAll<HTMLElement>(':scope > .reveal').forEach((el, i) => el.style.setProperty('--i', String(i)));
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const links = [...document.querySelectorAll<HTMLAnchorElement>('.nav__links a[href^="/#"]')];
    links.forEach((a) => a.removeAttribute('aria-current'));
    if (pathname !== '/') return;
    const sections = links
      .map((a) => document.getElementById(a.getAttribute('href')!.slice(2)))
      .filter((s): s is HTMLElement => Boolean(s));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => {
            if (a.getAttribute('href') === `/#${entry.target.id}`) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, [pathname]);

  return null;
}
