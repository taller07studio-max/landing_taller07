/* Productos del laboratorio SaaS: alimentan el menú del header, el menú móvil y el footer */

export type ProductStatus = 'live' | 'wip';

export interface Product {
  slug: 'tianquiz' | 'boroki';
  name: string;
  href: string;
  status: ProductStatus;
  statusLabel: string;      // chip del menú desplegable y de las tarjetas
  menuDescription: string;  // menú desplegable (desktop)
  mobileDescription: string;
  mobileStatusLabel?: string;
  footerLabel: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'tianquiz',
    name: 'Tianquiz',
    href: '/productos/tianquiz',
    status: 'live',
    statusLabel: 'en producción',
    menuDescription: 'Menú digital y tienda en línea con pedidos por WhatsApp.',
    mobileDescription: 'Menú digital · pedidos por WhatsApp',
    footerLabel: 'Tianquiz · menú digital',
  },
  {
    slug: 'boroki',
    name: 'Boroki',
    href: '/productos/boroki',
    status: 'wip',
    statusLabel: 'en construcción',
    menuDescription: 'Sistema para restaurantes con servicio a mesa.',
    mobileDescription: 'Sistema para restaurantes',
    mobileStatusLabel: 'pronto',
    footerLabel: 'Boroki',
  },
];
