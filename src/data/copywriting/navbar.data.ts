import WhatsAppIcon from '../../../public/icons/whatsapp.svg';
import { COMERCIAL_WHATSAPP } from '@/data/links.data';

export const NAVBAR_COPYWRITING = {
  logoAlt: 'Logo da empresa ZCOM',
  mainSection: [
    {
      text: 'Home',
      link: '#Home',
    },
    {
      text: 'Planos',
      link: '#Planos',
    },
    {
      text: 'Parceiros',
      link: '#Parceiros',
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
