'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import InternetPlanCard from '@/components/molecules/InternetPlanCard';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import {
  ANIMATION_STAGGER_DEFAULT,
  ANIMATION_STAGGER_SLOW,
  ANIMATION_SCALE_OVERSHOOT,
  ANIMATION_DURATION_BACKGROUND,
  VIEWPORT_ANIMATE_ONCE,
  VIEWPORT_AMOUNT_DEFAULT,
  SPRING_STIFFNESS_FIRM,
} from '@/constants/animation.constants';
import { HERO_LOGO_SIZE } from '@/constants/ui.constants';
import { SECTION_ID_HERO } from '@/constants/sections.constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_STAGGER_DEFAULT,
      delayChildren: ANIMATION_STAGGER_SLOW,
      type: 'spring',
      damping: 20,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 120, x: 60, rotate: 5 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { duration: ANIMATION_DURATION_BACKGROUND, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: ANIMATION_SCALE_OVERSHOOT,
    y: '25%',
    x: '-25%',
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: [0.4, 0.0, 0.2, 1.0] },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: -60, x: 60, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1.0],
      type: 'spring',
      stiffness: SPRING_STIFFNESS_FIRM,
    },
  },
};

function HeroPage() {
  return (
    <motion.section
      id={SECTION_ID_HERO}
      aria-label="Seção principal com ofertas de planos de internet"
      className={cn(
        'relative flex h-full min-h-[100dvh] w-screen items-end bg-gradient-to-r from-dark via-zcom-700 to-zcom-500  xl:h-[100dvh] xl:items-start overflow-hidden',
      )}
      initial="hidden"
      whileInView="visible"
    >
      <DarkOverlay />
      <motion.div
        className="absolute bottom-[-20dvh] left-0 h-full w-full xl:left-[-15dvw]"
        aria-hidden="true"
        variants={imageVariants}
      >
        <Image
          src={IMAGE_SRC.hero.background}
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
          variants={containerVariants}
        >
          <motion.div className="z-20 hidden w-[28vw] xl:block" variants={logoVariants}>
            <Image
              src={IMAGE_SRC.brand.logoWebp}
              alt="Logo da ZCOM Provedor de Internet"
              width={HERO_LOGO_SIZE}
              height={HERO_LOGO_SIZE}
              className="w-full object-contain"
            />
          </motion.div>

          <motion.section
            className="z-20 flex h-full w-full items-end justify-end sm:w-auto xl:h-fit"
            aria-label="Preços dos planos de internet"
            variants={childVariants}
            viewport={{ once: VIEWPORT_ANIMATE_ONCE, amount: VIEWPORT_AMOUNT_DEFAULT }}
          >
            <InternetPlanCard />
          </motion.section>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroPage;
