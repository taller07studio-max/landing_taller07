import { Contact } from '@/components/home/Contact';
import { FaqSection, HOME_FAQ } from '@/components/home/FaqSection';
import { Fit } from '@/components/home/Fit';
import { Hero } from '@/components/home/Hero';
import { Manifesto } from '@/components/home/Manifesto';
import { Principles } from '@/components/home/Principles';
import { Process } from '@/components/home/Process';
import { Services } from '@/components/home/Services';
import { Tapes } from '@/components/home/Tapes';
import { JsonLd } from '@/components/ui/JsonLd';
import { homeJsonLd } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Taller 07 · Desarrollo de software, SaaS y MVPs a medida',
  description:
    'Taller 07 es un estudio de desarrollo de software. Diseñamos y desarrollamos plataformas SaaS, MVPs, apps, sistemas web a medida y automatización de procesos, con criterio.',
  path: '/',
  ogTitle: 'Taller 07 · Software hecho con criterio',
  ogDescription:
    'No somos una agencia que entrega pantallas: somos un taller que construye herramientas que funcionan. SaaS, MVPs, apps y sistemas web a medida.',
  image: {
    url: '/assets/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Logotipo de Taller 07: «taller» y un sello naranja con el 07 y el texto «hecho con criterio»',
  },
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd(HOME_FAQ)} />
      <Hero />
      <Tapes />
      <Manifesto />
      <Services />
      <Process />
      <Fit />
      <Principles />
      <FaqSection />
      <Contact />
    </>
  );
}
