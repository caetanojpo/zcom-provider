'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import InternetPlanCard from '@/components/molecules/InternetPlanCard';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: 50 }, // From bottom-right corner for fluidity
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, y: '20%', x: '-20%' }, // From bottom-left corner
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
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

function HeroPage() {
  return (
    <motion.section
      aria-label="Seção principal com ofertas de planos de internet"
      className={cn(
        'relative flex h-full min-h-[100dvh] w-screen items-end bg-gradient-to-r from-dark via-zcom-700 to-zcom-500 lg:min-h-[70dvh] xl:h-[100dvh] xl:items-start overflow-hidden',
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <DarkOverlay />
      <motion.div
        className="absolute bottom-[-20dvh] left-0 h-full w-full xl:left-[-15dvw]"
        aria-hidden="true"
        variants={imageVariants}
      >
        <Image
          src="/images/hero/family-in-couch-hero.webp"
          alt="Família feliz aproveitando internet de alta velocidade em casa"
          fill
          priority
          className="object-cover xl:object-contain"
          sizes="100vw"
        />
      </motion.div>

      <div
        id="main-content"
        className="z-20 flex h-full w-full flex-col items-end justify-between px-[5vw] py-[5vh]"
      >
        <motion.div
          className="flex h-full w-full flex-col items-end justify-end xl:justify-evenly"
          variants={childVariants}
        >
          <motion.div className="z-20 hidden w-[28vw] xl:block" variants={logoVariants}>
            <Image
              src="/images/logo/logo.webp"
              alt="Logo da ZCOM Provedor de Internet"
              width={400}
              height={400}
              className="w-full object-contain"
            />
          </motion.div>

          <motion.section
            className="z-20 flex h-full w-full items-end justify-end sm:w-auto xl:h-fit"
            aria-label="Preços dos planos de internet"
            variants={childVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <InternetPlanCard />
          </motion.section>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroPage;
