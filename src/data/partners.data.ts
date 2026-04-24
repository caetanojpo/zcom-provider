import { FIOFIBRA_WEBSITE_LINK } from '@/data/links.data';

export interface PartnerData {
  logo: string;
  link: string;
  glow: string;
}

export const partnersData: PartnerData[] = [
  {
    logo: '/images/logo/partners/fiofibra.png',
    link: FIOFIBRA_WEBSITE_LINK,
    glow: '#052d83',
  },
  {
    logo: '/images/logo/partners/blackbully.webp',
    link: 'https://www.instagram.com/blackbullycrossfit/?hl=en',
    glow: '#05a3b3',
  },
  {
    logo: '/images/logo/partners/ektech.jpg',
    link: 'https://ektech.com.br/',
    glow: '#16e77f',
  },
  {
    logo: '/images/logo/partners/link-brasil.jpg',
    link: 'https://linkbrasil.net.br/',
    glow: '#7ec6f9',
  },
  {
    logo: '/images/logo/partners/tim-brazil-jiujitsu.jpg',
    link: 'https://www.instagram.com/timbrazilianjiujitsu/',
    glow: '#d02d34',
  },
  {
    logo: '/images/logo/partners/caipira.jpg',
    link: 'https://www.instagram.com/caipirasgames/',
    glow: '#3e9496',
  },
];
