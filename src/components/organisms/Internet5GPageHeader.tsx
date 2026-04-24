'use client';

import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import { cn } from '@/lib/utils';
import {
  ANIMATION_DURATION_STAGGER_CONTAINER,
  ANIMATION_STAGGER_SLOW,
  SPRING_STIFFNESS_FIRM,
  SPRING_DAMPING_LIGHT,
} from '@/constants/animation.constants';

interface Internet5GPageHeaderProps {
  className?: string;
}

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION_STAGGER_CONTAINER,
      ease: 'easeOut',
      staggerChildren: ANIMATION_STAGGER_SLOW,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, x: -200, rotate: -5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATION_STAGGER_CONTAINER,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_FIRM,
      damping: SPRING_DAMPING_LIGHT,
    },
  },
};

const secondChildVariants: Variants = {
  hidden: { opacity: 0, x: 200, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATION_STAGGER_CONTAINER,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_FIRM,
      damping: SPRING_DAMPING_LIGHT,
      delay: 0.3,
    },
  },
};

function Internet5GPageHeader({ className = '' }: Internet5GPageHeaderProps) {
  return (
    <motion.header
      aria-label="Cabeçalho da página de Internet 5G"
      className={cn('relative flex-shrink-0 h-32 sm:h-40 md:h-48', className)}
      initial="hidden"
      whileInView="visible"
      variants={headerVariants}
    >
      <motion.div
        className={cn(
          'w-3/4 md:w-[54%] lg:w-[35%] pb-2 pt-0 pl-14 absolute flex justify-items-start right-0 top-[40px] bg-white text-zcom-200 rounded-l-full',
        )}
        variants={childVariants}
      >
        <Typography
          component="h2"
          className="text-4xl md:text-6xl font-semibold tracking-tight"
          aria-label="Internet"
        >
          Internet
        </Typography>
      </motion.div>

      <motion.div
        className={cn(
          'w-2/3 md:w-1/2 lg:w-1/3 p-2 pl-6 absolute flex justify-items-start right-0 top-[80px] md:top-[100px] bg-zcom-200 text-white rounded-l-full',
        )}
        variants={secondChildVariants}
      >
        <Typography
          component="h1"
          className="text-6xl md:text-8xl font-semibold tracking-tight"
          aria-label="5G - Serviço de Internet de Alta Velocidade"
        >
          5G
        </Typography>
      </motion.div>
    </motion.header>
  );
}

export default Internet5GPageHeader;
