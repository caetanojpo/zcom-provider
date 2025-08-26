import WhatsAppIcon from '../../public/icons/whatsapp.svg';
import InstagramIcon from '../../public/icons/instagram.svg';
import { SVGIcon } from '@/types/svg';

type Links = {
  title?: string;
  link: string;
  target?: string;
  icon?: SVGIcon;
};

export const socialMediaLinks: Links[] = [
  {
    link: 'https://wa.me/5518996660018',
    icon: WhatsAppIcon,
    title: 'WhatsApp ZCOM',
    target: '_blank',
  },
  {
    link: 'https://www.instagram.com/zcomprovedor?igsh=MWh6eHkzYW9hb3E1ZQ%3D%3D&utm_source=qr',
    icon: InstagramIcon,
    title: 'Instagram ZCOM',
    target: '_blank',
  },
];
