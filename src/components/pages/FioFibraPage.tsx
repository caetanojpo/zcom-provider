'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Typography } from '@/components/atoms/text/Typography';
import { COMERCIAL_WHATSAPP } from '@/data/links.data';
import Link from 'next/link';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { cn } from '@/lib/utils';

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

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: '-10%', y: '-10%' }, // From top-left corner
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: 50 }, // From top-right corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

function FioFibraPage() {
  return (
    <motion.section
      id={'fioFibra'}
      className={cn(
        'relative flex h-[70dvh] w-full flex-col bg-gradient-to-r from-dark to-zcom-500 text-white xl:h-screen',
      )}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="absolute h-full w-full bg-fio-fibra-bg bg-cover bg-center bg-no-repeat" />
      <DarkOverlay />
      <div />
      <div className="z-20 flex h-full w-full flex-col justify-around px-6 xl:px-10">
        <motion.div
          className="flex h-fit w-full items-center gap-4 md:h-[60px] md:w-[50%] xl:h-[85px]"
          variants={logoVariants}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/logo/logo.webp"
              alt="Logo da ZCOM"
              fill
              className="object-contain"
            />
          </div>
          <Typography className="font-black text-[24px] text-zcom-500 md:text-[48px]">+</Typography>
          <div className="relative h-full w-full">
            <Image
              src="/images/logo/fiofibra.webp"
              alt="Logo da Fiofibra"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex h-fit w-[70%] flex-col gap-2 italic font-medium md:gap-6 xl:w-[50%] xl:gap-8 xl:px-2"
          variants={textVariants}
        >
          <Typography className="text-[16px] font-medium md:text-[24px] xl:text-[28px]">
            Duas empresas, o mesmo <span className="text-zcom-500"> propósito</span>!
          </Typography>
          <Typography className="text-[14px] md:text-[18px] xl:text-[20px]">
            A Zcom é uma empresa do grupo Fiofibra, a empresa responsável por fornecer toda a
            infraestrutura de fibra óptica da região.
          </Typography>
          <Typography className="text-[14px] md:text-[18px] xl:text-[20px]">
            É isso mesmo! <span className="text-zcom-500">Sua internet virá direto da fonte</span>!
          </Typography>
        </motion.div>
        <motion.div className="h-fit w-full" variants={ctaVariants}>
          <Link
            href="https://fiofibra.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-8 sm:py-0 sm:px-0 flex h-10 w-[90%] items-center justify-center rounded-4xl bg-zcom-500 shadow-lg transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-zcom-200 md:h-14 md:w-[70%] xl:h-12 xl:w-[40%]"
            aria-label="Clique aqui e conheça a Fiofibra"
          >
            <Typography className="italic font-bold text-[16px] md:text-[24px]">
              Clique aqui e conheça a Fiofibra
            </Typography>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FioFibraPage;
