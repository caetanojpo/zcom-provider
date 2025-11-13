import { DataStorageEnum } from '@/enums/DataStorage.enum';
import { RecurrenceEnum } from '@/enums/Recurrence.enum';
import { COMERCIAL_WHATSAPP } from '@/data/links.data';

export interface ZcomPlans {
  id: number;
  speed: number;
  dataStorage: DataStorageEnum;
  benefits: string[];
  title: string;
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
    title: '',
    price: '89',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/zoio-450-bw.png',
    imageColored: '/images/subs/zoio-450.png',
    alt: 'Internet 450 mega',
    cover: false,
    extra: 'Pontualidade R$99,90',
  },
  {
    id: 2,
    speed: 700,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcomtv.webp', '/images/subs/deezer-playkids-horizontal.webp'],
    title: '',
    price: '99',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/zoio-700-bw.png',
    imageColored: '/images/subs/zoio-700.png',
    alt: 'Internet 700 mega',
    cover: false,
    extra: 'Pontualidade R$109,90',
  },
  {
    id: 3,
    speed: 900,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcom-disney-horizontal.webp'],
    title: '',
    price: '129',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/zoio-900-bw.png',
    imageColored: '/images/subs/zoio-900.png',
    alt: 'Internet 900 mega',
    cover: true,
    extra: 'Pontualidade R$139,90',
  },
  {
    id: 4,
    speed: 1000,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['/images/subs/zcom-zprime-horizontal.webp', '/images/subs/streamings.webp'],
    title: '',
    price: '149',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/zoio-1000-bw.png',
    imageColored: '/images/subs/zoio-1000.png',
    alt: 'Internet 1000 mega',
    cover: true,
    extra: 'Pontualidade R$159,90',
  },
];
