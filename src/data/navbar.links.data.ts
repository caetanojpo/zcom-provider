import InstagramIcon from '../../public/icons/instagram.svg';
import { SVGIcon } from '@/types/svg';

type LinksData = {
  title?: string;
  link: string;
  target?: string;
  icon?: SVGIcon;
};

export const navbarLinks: LinksData[] = [
  {
    link: 'https://www.instagram.com/zcomprovedor?igsh=MWh6eHkzYW9hb3E1ZQ%3D%3D&utm_source=qr',
    icon: InstagramIcon,
    title: 'Instagram ZCOM',
    target: '_blank',
  },
];
