'use client';

import { motion, Variants } from 'framer-motion';
import Internet5GPageHeader from '@/components/organisms/Internet5GPageHeader';
import Internet5GContent from '@/components/organisms/Internet5GContent';
import Image from 'next/image';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { cn } from '@/lib/utils';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import {
  ANIMATION_DURATION_BACKGROUND,
  ANIMATION_SCALE_OVERSHOOT,
  SPRING_STIFFNESS_MEDIUM,
  SPRING_DAMPING_MEDIUM,
} from '@/constants/animation.constants';
import { SECTION_ID_5G } from '@/constants/sections.constants';

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: ANIMATION_SCALE_OVERSHOOT, rotate: 2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATION_BACKGROUND,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_MEDIUM,
      damping: SPRING_DAMPING_MEDIUM,
    },
  },
};

function Internet5GPage() {
  return (
    <motion.main
      id={SECTION_ID_5G}
      aria-label="Página de Internet 5G da Zcom"
      className={cn(
        'relative bg-gradient-to-r from-dark via-zcom-700 to-zcom-500 flex h-full w-full xl:h-[100dvh] justify-end',
      )}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="absolute w-full h-full">
        <Image
          src={IMAGE_SRC.internet5G.background}
          alt="Fundo decorativo para Internet 5G"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <DarkOverlay />

      <motion.div
        className="hidden xl:flex absolute bottom-[-3dvh] left-[-33dvw] h-full w-full z-20"
        aria-hidden="true"
        variants={backgroundVariants}
      >
        <Image
          src={IMAGE_SRC.internet5G.decorativeLines}
          alt="Linhas decorativas representando conexões 5G"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </motion.div>
      <div className="z-20 w-full xl:w-[60%] flex flex-col">
        <Internet5GPageHeader />
        <Internet5GContent />
      </div>
    </motion.main>
  );
}

export default Internet5GPage;
