'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import AppPageHeader from '@/components/organisms/AppPageHeader';
import AppPageContent from '@/components/organisms/AppPageContent';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import {
  ANIMATION_DURATION_BACKGROUND_SLOW,
  ANIMATION_DURATION_STAGGER_CONTAINER,
  ANIMATION_STAGGER_DEFAULT,
  ANIMATION_SCALE_OVERSHOOT,
  SPRING_STIFFNESS_SOFT,
  SPRING_STIFFNESS_MEDIUM,
  SPRING_DAMPING_MEDIUM,
} from '@/constants/animation.constants';
import { SECTION_ID_APP } from '@/constants/sections.constants';

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: ANIMATION_STAGGER_DEFAULT,
    },
  },
};

const zoioVariants: Variants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION_BACKGROUND_SLOW,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_SOFT,
      damping: SPRING_DAMPING_MEDIUM,
    },
  },
};

const phoneVariants: Variants = {
  hidden: { opacity: 0, x: 100, scale: ANIMATION_SCALE_OVERSHOOT, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATION_BACKGROUND_SLOW,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_MEDIUM,
      damping: SPRING_DAMPING_MEDIUM,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION_STAGGER_CONTAINER,
      ease: 'easeOut',
    },
  },
};

function AppPage() {
  return (
    <motion.main
      id={SECTION_ID_APP}
      aria-label="Página do APP da Zcom"
      className={cn(
        'relative bg-gradient-to-l from-dark via-zcom-700 to-zcom-500 flex h-full w-full',
        'min-h-[100dvh]',
        '[@media(min-height:800px)]:min-h-[80dvh]',
        'xl:h-[100dvh]',
        'justify-end overflow-hidden z-100',
      )}
      initial="hidden"
      whileInView="visible"
      variants={pageVariants}
    >
      <DarkOverlay />
      <motion.div
        className="hidden xl:flex absolute bottom-[-20dvh] left-[-26dvw]  h-full w-full z-0"
        aria-hidden="true"
        variants={zoioVariants}
      >
        <Image
          src={IMAGE_SRC.app.zoio}
          alt="Pessoa chamada Zoio "
          fill
          sizes="(min-width: 1280px) 100vw, 1px"
          priority
          className="object-contain scale-155"
        />
      </motion.div>

      <motion.div
        className="w-full xl:w-[60%] flex flex-col h-full justify-around"
        variants={contentVariants}
      >
        <AppPageHeader />
        <AppPageContent />
      </motion.div>

      <motion.div
        className={cn(
          'flex absolute h-full w-full z-20',
          'bottom-[-34dvh]',
          'sm:bottom-[-28dvh]',
          'md:bottom-[-24dvh]',
          'lg:bottom-[-18dvh]',
          'xl:bottom-[-14dvh]',
          'right-[-32dvw]',
          'xl:right-[-40dvw]',
          '2xl:right-[-36dvw]',
        )}
        aria-hidden="true"
        variants={phoneVariants}
      >
        <Image
          src={IMAGE_SRC.app.phone}
          alt="Celular com o aplicativo ZCOM TV"
          fill
          sizes="(min-width: 1280px) 60vw, 70vw"
          priority
          className="object-contain scale-50 lg:scale-75 xl:scale-70 2xl:scale-100"
        />
      </motion.div>
    </motion.main>
  );
}

export default AppPage;
