import { Bricolage_Grotesque, Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';

/* Solo latin y solo los pesos usados (DESIGN.md §3). tokens.css toma las variables --font-*-src */
export const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-display-src', display: 'swap' });
export const accent = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-accent-src', display: 'swap' });
export const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body-src', display: 'swap' });
export const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-mono-src', display: 'swap' });

export const fontVariables = [display.variable, accent.variable, body.variable, mono.variable].join(' ');
