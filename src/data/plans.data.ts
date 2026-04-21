import { DataStorageEnum } from '@/enums/DataStorage.enum';
import { RecurrenceEnum } from '@/enums/Recurrence.enum';
import { COMERCIAL_WHATSAPP_LINK } from '@/data/links.data';

export interface ZcomPlans {
  id: number;
  speed: number;
  dataStorage: DataStorageEnum;
  benefits: string[];
  title: string;
  planTitle: string;
  planSubtitle: string;
  price: string;
  decimalPrice: string;
  recurrence: RecurrenceEnum;
  ctaLink: string;
  image: string;
  imageColored: string;
  alt: string;
  cover: boolean;
  extra: string;
}

export const zcomPlans: ZcomPlans[] = [
  {
    id: 1,
    speed: 450,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcomtv.webp'],
    title: 'Internet 450 mega',
    planTitle: 'WiFi 6 Premium',
    planSubtitle: '(comodata)',
    price: '89',
    decimalPrice: '.99',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP_LINK,
    image: '/images/subs/zoio-450-bw.png',
    imageColored: '/images/subs/zoio-450.png',
    alt: 'Internet 450 mega',
    cover: false,
    extra: 'Pontualidade R$99,99',
  },
  {
    id: 2,
    speed: 700,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcomtv.webp'],
    title: 'Internet 700 mega',
    planTitle: 'WiFi 6 Premium',
    planSubtitle: '(comodata)',
    price: '99',
    decimalPrice: '.99',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP_LINK,
    image: '/images/subs/zoio-700-bw.png',
    imageColored: '/images/subs/zoio-700.png',
    alt: 'Internet 700 mega',
    cover: false,
    extra: 'Pontualidade R$109,99',
  },
  {
    id: 3,
    speed: 1000,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcomtv.webp'],
    title: 'Internet 1000 mega',
    planTitle: 'WiFi 6 Premium',
    planSubtitle: '(comodata)',
    price: '129',
    decimalPrice: '.99',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP_LINK,
    image: '/images/subs/zoio-900-bw.png',
    imageColored: '/images/subs/zoio-900.png',
    alt: 'Internet 1000 mega',
    cover: true,
    extra: 'Pontualidade R$139,99',
  },
  {
    id: 4,
    speed: 1000,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcomtv.webp'],
    title: 'Internet 1000 mega + 800 upload',
    planTitle: 'WiFi 6 Premium',
    planSubtitle: '(comodata)',
    price: '149',
    decimalPrice: '.99',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP_LINK,
    image: '/images/subs/zoio-1000-bw.png',
    imageColored: '/images/subs/zoio-1000.png',
    alt: 'Internet 1000 mega + 800 upload',
    cover: true,
    extra: 'Pontualidade R$159,99',
  },
];
