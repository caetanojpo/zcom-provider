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

interface AppPageHeaderProps {
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

function AppPageHeader({ className = '' }: AppPageHeaderProps) {
  return (
    <motion.header
      aria-label="Cabeçalho da página do APP da ZCOM"
      className={cn('relative mt-10 xl:mt-50', className)}
      initial="hidden"
      whileInView="visible"
      variants={headerVariants}
    >
      <motion.div
        className={cn(
          'w-full py-4 pl-14 absolute flex flex-col italic leading-12 xl:leading-20 justify-items-start right-0  bg-zcom-200 text-white rounded-l-full z-10',
        )}
        variants={childVariants}
      >
        <Typography
          component="h2"
          className="text-[2rem] xl:text-[4rem] font-semibold tracking-tight"
          aria-label="Internet"
        >
          Baixe <span className={'text-dark'}>nosso</span>
        </Typography>
        <Typography
          component="h2"
          className="text-[3rem] xl:text-[5.5rem]  font-semibold tracking-tight"
          aria-label="Internet"
        >
          Aplicativo
        </Typography>
      </motion.div>

      <motion.div
        className={cn(
          'w-[95%] p-12 xl:p-20 absolute flex justify-items-start right-0 top-[50px] bg-white rounded-l-full',
        )}
        variants={secondChildVariants}
      ></motion.div>
    </motion.header>
  );
}

export default AppPageHeader;
