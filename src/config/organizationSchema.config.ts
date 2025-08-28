import { LOGO, SITE_URL, TYOU_URL } from '@/utils/constants.utils';

export const organizationSchemaConfig = {
  '@context': 'https://schema.org',
  '@type': 'InternetServiceProvider',
  name: 'ZCOM',
  url: SITE_URL,
  logo: LOGO,
  description:
    'ZCOM — Provedor de internet em Cândido Mota (SP). Planos de fibra residenciais e empresariais, suporte 24/7.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Agenlo Pipolo, 666',
    addressLocality: 'Cândido Mota',
    addressRegion: 'SP',
    postalCode: '19880-007',
    addressCountry: 'BR',
  },
  telephone: '+55-18-99666-0018',
  sameAs: ['https://www.instagram.com/zcomprovedor'],
  openingHours: 'Mo-Fr 08:00-18:00',
  publisher: {
    '@type': 'Organization',
    name: 'T_YOU Tecnologia',
    url: TYOU_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo-tyou.png`,
    },
  },
  creator: {
    '@type': 'Organization',
    name: 'T_YOU Tecnologia',
    url: TYOU_URL,
  },
};
