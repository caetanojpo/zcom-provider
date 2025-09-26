'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Typography } from '@/components/atoms/text/Typography';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { InstagramIcon, MousePointer } from 'lucide-react';
import IconTextButton from '@/components/atoms/buttons/IconTextButton';
import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import Link from 'next/link';
import ClientImage from '@/components/molecules/ClientImage';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: 50 }, // From top-right corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const carouselVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function PartnerPage() {
  const clients = [
    {
      logo: '/images/logo/partners/alvaresagricola.webp',
      link: '#1B5EBA',
      glow: '#1B5EBA',
    },
    {
      logo: '/images/logo/partners/blackbully.webp',
      link: '#1C242C',
      glow: '#05a3b3',
    },
    {
      logo: '/images/logo/partners/casadiconti.webp',
      link: '',
      glow: '#052d83',
    },
    {
      logo: '/images/logo/partners/coopermota.webp',
      link: '',
      glow: '#0c6635',
    },
    {
      logo: '/images/logo/partners/gigantevermelho.webp',
      link: '',
      glow: '#d02d34',
    },
    {
      logo: '/images/logo/partners/saldaterra.webp',
      link: '',
      glow: '#0c3304',
    },
  ];

  return (
    <motion.section
      className={cn('relative h-full w-full bg-gradient-to-r from-dark to-zcom-500')}
      initial="hidden"
      whileInView="visible"
    >
      <DarkOverlay />
      <div className="z-20 flex h-full w-full flex-col items-center justify-around gap-10 p-6 xl:px-10">
        {/* Header */}
        <motion.div
          className="relative z-20 mt-14 flex w-full flex-col items-center justify-center md:mt-20"
          variants={headerVariants}
        >
          <div className="absolute top-[-40px] flex h-fit w-fit rounded-4xl bg-white px-2 py-2 md:top-[-50px] md:p-4">
            <Typography className="italic font-bold text-zcom-500 md:text-[30px]">
              Nossos parceiros e clientes
            </Typography>
          </div>
          <div className="z-30 h-fit w-full rounded-[50px] bg-gradient-to-r from-zcom-700 to-zcom-500 shadow-md md:rounded-[80px] xl:w-[70%]">
            {/* Mobile Grid: 3 cols, 2 rows */}
            <motion.div
              className="grid grid-cols-3 grid-rows-2 gap-4 px-4 md:hidden"
              variants={carouselVariants}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  variants={gridItemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={client.link} className={'h-full w-full py-4'}>
                    <Image
                      src={client.logo}
                      alt=""
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="hidden h-full w-full md:block">
              <Carousel
                opts={{
                  align: 'center',
                  loop: true,
                }}
                plugins={[Autoplay({ delay: 2000 })]} // Autoplay every 2 seconds
              >
                <CarouselContent className={'flex py-8 items-center justify-center'}>
                  {clients.map((client, index) => (
                    <CarouselItem key={index} className="basis-1/7 ">
                      <ClientImage link={client.link} src={client.logo} glowColor={client.glow} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={buttonVariants} className={'z-20'}>
          <IconTextButton
            link=""
            icon={MousePointer}
            size="xs"
            textClassName="ml-[-8px] italic font-bold text-[12px] text-white"
            text="Venha fazer parte desse time de parceiros!"
            className="flex h-fit w-fit rounded-4xl bg-gradient-to-r from-zcom-700 to-zcom-500 p-2 shadow-md md:hidden"
          />
        </motion.div>

        <motion.div variants={buttonVariants} className={'z-20'}>
          <IconTextButton
            link=""
            icon={MousePointer}
            size="md"
            textClassName="italic font-bold text-[20px] text-white"
            text="Venha fazer parte desse time de parceiros!"
            className="hidden h-fit w-fit rounded-4xl bg-gradient-to-r from-zcom-700 to-zcom-500 p-2 px-4 shadow-md md:flex"
          />
        </motion.div>

        <motion.div className="z-20 flex gap-4" variants={buttonVariants}>
          <IconTextButton
            name={NAVBAR_COPYWRITING.phone.name}
            target={NAVBAR_COPYWRITING.phone.target}
            icon={NAVBAR_COPYWRITING.phone.icon}
            link={NAVBAR_COPYWRITING.phone.link}
            text=""
            variant="white"
            size="md"
            textVariant="body-xs"
            textClassName="text-white"
            gap="xs"
          />
          <IconTextButton
            name={NAVBAR_COPYWRITING.phone.name}
            target={NAVBAR_COPYWRITING.phone.target}
            icon={InstagramIcon}
            link={NAVBAR_COPYWRITING.phone.link}
            text=""
            variant="white"
            size="md"
            textVariant="body-xs"
            textClassName="text-white"
            gap="xs"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PartnerPage;
