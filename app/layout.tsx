import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { PageEffects } from '@/components/layout/PageEffects';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { fontVariables } from './fonts';
import '@/styles/tokens.css';
import '@/styles/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  icons: {
    icon: { url: '/assets/favicon.svg', type: 'image/svg+xml' },
    apple: '/assets/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = { themeColor: '#F4F2EE' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: el script de abajo agrega la clase "js" antes de hidratar
    <html lang="es-MX" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Activa las animaciones de entrada solo cuando hay JS (sin JS todo queda visible) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <PageEffects />
      </body>
    </html>
  );
}
