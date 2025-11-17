import WhatsAppIcon from '../../../public/icons/whatsapp.svg';
import { COMERCIAL_WHATSAPP_LINK } from '@/data/links.data';
import { COMERCIAL_PHONE } from '@/utils/constants.utils';

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
    text: COMERCIAL_PHONE[1],
    icon: WhatsAppIcon,
    link: COMERCIAL_WHATSAPP_LINK,
  },
  invoice: {
    text: '2ª via da fatura',
    link: COMERCIAL_WHATSAPP_LINK,
  },
};
