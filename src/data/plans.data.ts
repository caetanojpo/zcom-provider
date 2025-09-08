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
  alt: string;
  cover: boolean;
}

export const zcomPlans: ZcomPlans[] = [
  {
    id: 1,
    speed: 300,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['Roteador incluso', 'Instalação gratuita', 'Internet 5G'],
    title: 'Plano 5G',
    price: '139',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/woman-subs.webp',
    alt: 'Mulher representando assinatura de plano',
    cover: false,
  },
  {
    id: 2,
    speed: 400,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['Roteador incluso', 'Instalação gratuita', '100% fibra óptica'],
    title: 'Plano residência',
    price: '99',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/woman-center-subs.webp',
    alt: 'Mulher no centro, destaque plano',
    cover: false,
  },
  {
    id: 3,
    speed: 700,
    dataStorage: DataStorageEnum.MEGA,
    benefits: ['Roteador incluso', 'Instalação gratuita', '100% fibra óptica'],
    title: 'Plano empresa',
    price: '119',
    decimalPrice: '.90',
    recurrence: RecurrenceEnum.Monthly,
    ctaLink: COMERCIAL_WHATSAPP,
    image: '/images/subs/group-subs.webp',
    alt: 'Grupo de pessoas assinando plano',
    cover: true,
  },
];
