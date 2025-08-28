import { LOGO, SITE_URL, TYOU_URL } from '@/utils/constants.utils';
import { Metadata } from 'next';

export const metadataConfig: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ZCOM — Provedor de Internet em Cândido Mota',
    template: '%s | ZCOM',
  },
  description:
    'ZCOM — Provedor de internet em Cândido Mota (SP). Planos de fibra para residências e empresas, instalação rápida, suporte 24/7 e infraestrutura local dedicada.',
  keywords: [
    'ZCOM',
    'provedor de internet',
    'internet fibra',
    'internet Cândido Mota',
    'internet residencial',
    'internet empresarial',
    'provedor local',
  ],
  authors: [
    { name: 'ZCOM', url: SITE_URL },
    { name: 'T_YOU Tecnologia', url: TYOU_URL },
  ],
  publisher: 'T_YOU Tecnologia',
  applicationName: 'ZCOM',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0E46B9' }],
  },

  openGraph: {
    title: 'ZCOM — Provedor de Internet em Cândido Mota',
    description:
      'Planos de fibra em Cândido Mota (SP). Instalação rápida, suporte 24/7 e soluções para residências e empresas.',
    url: SITE_URL,
    siteName: 'ZCOM',
    images: [
      {
        url: LOGO,
        width: 1200,
        height: 630,
        alt: 'Logo ZCOM — Provedor de Internet em Cândido Mota',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZCOM — Provedor de Internet em Cândido Mota',
    description:
      'Planos de fibra para residências e empresas em Cândido Mota — instalação rápida e suporte 24/7.',
    images: [LOGO],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
