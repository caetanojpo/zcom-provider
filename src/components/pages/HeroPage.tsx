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
      delayChildren: 0.4, // Slightly increased delay for smoother entry
      type: 'spring', // Use spring for more dynamic feel
      damping: 20, // Adjust damping for fluidity
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 120, x: 60, rotate: 5 }, // Added slight rotation for dynamism, increased offset for more movement
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }, // Custom cubic bezier for smooth, fluid ease-in-out
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1, y: '25%', x: '-25%', filter: 'blur(5px)' }, // Added scale up and blur for depth and fluidity
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: [0.4, 0.0, 0.2, 1.0] }, // Longer duration with ease for cinematic feel
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: -60, x: 60, scale: 0.9, rotate: -5 }, // From top-right with scale down and rotation for dynamism
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0], type: 'spring', stiffness: 100 }, // Spring for bouncy entrance
  },
};

function HeroPage() {
  return (
    <motion.section
      id={'hero'}
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
          variants={containerVariants} // Nested container for staggering logo and card
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
