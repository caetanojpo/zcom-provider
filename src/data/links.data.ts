import WhatsAppIcon from '../../public/icons/whatsapp.svg';
import InstagramIcon from '../../public/icons/instagram.svg';
import { SVGIcon } from '@/types/svg';
import { COMERCIAL_PHONE } from '@/utils/constants.utils';

type LinksData = {
  title?: string;
  link: string;
  target?: string;
  icon?: SVGIcon;
  text?: string;
};

export const COMERCIAL_WHATSAPP_LINK: string = 'https://wa.me/5518996660018';
export const INSTAGRAM_LINK: string =
  'https://www.instagram.com/zcomprovedor?igsh=MWh6eHkzYW9hb3E1ZQ%3D%3D&utm_source=qr';

export const ZCOM_TV_ANDROID_LINK: string =
  'https://play.google.com/store/apps/details?id=br.com.zcomprovedor.tv.mobile';
export const ZCOM_TV_IOS_LINK: string = 'https://apps.apple.com/br/app/zcomtv/id6754389903';

export const socialMediaLinks: LinksData[] = [
  {
    link: COMERCIAL_WHATSAPP_LINK,
    icon: WhatsAppIcon,
    title: 'WhatsApp ZCOM',
    target: '_blank',
  },
  {
    link: INSTAGRAM_LINK,
    icon: InstagramIcon,
    title: 'Instagram ZCOM',
    target: '_blank',
  },
];

export const PHONE_DATA: LinksData = {
  title: 'whatsapp',
  target: '_blank',
  text: COMERCIAL_PHONE[1],
  icon: WhatsAppIcon,
  link: COMERCIAL_WHATSAPP_LINK,
};

export const INSTAGRAM_DATA: LinksData = {
  title: 'instagram',
  target: '_blank',
  text: '@zcom.internet',
  icon: InstagramIcon,
  link: INSTAGRAM_LINK,
};
