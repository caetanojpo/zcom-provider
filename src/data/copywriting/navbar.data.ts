import WhatsAppIcon from '../../../public/icons/whatsapp.svg';
import { COMERCIAL_WHATSAPP } from '@/data/links.data';

export const NAVBAR_COPYWRITING = {
  logoAlt: 'Logo da empresa ZCOM',
  mainSection: [
    {
      text: 'Home',
      link: '#home',
    },
    {
      text: 'Fibra',
      link: '#fibra',
    },
    {
      text: '5G',
      link: '#5g',
    },
    {
      text: 'Planos',
      link: '#plans',
    },
    {
      text: 'FioFibra',
      link: '#fioFibra',
    },
    {
      text: 'Parceiros',
      link: '#partner',
    },
  ],
  phone: {
    name: 'whatsapp',
    target: '_blank',
    text: '(18) 99785-6960',
    icon: WhatsAppIcon,
    link: COMERCIAL_WHATSAPP,
  },
  invoice: {
    text: '2ª via da fatura',
    link: COMERCIAL_WHATSAPP,
  },
};
