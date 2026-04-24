'use client';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Image from 'next/image';
import {
  ANIMATION_DURATION_BACKGROUND_SLOW,
  ANIMATION_SCALE_OVERSHOOT,
  SPRING_STIFFNESS_SOFT,
  SPRING_DAMPING_MEDIUM,
  VIEWPORT_ANIMATE_ONCE,
  VIEWPORT_AMOUNT_DEFAULT,
} from '@/constants/animation.constants';
import { DEFAULT_BACKGROUND_COLOR } from '@/constants/ui.constants';

interface BackgroundPageLayoutProps {
  children: ReactNode;
  backgroundImage: string;
  backgroundAlt: string;
  className?: string;
  backgroundColor?: string;
}

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: ANIMATION_SCALE_OVERSHOOT },
  visible: {
    opacity: 1,
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

function BackgroundPageLayout({
  children,
  backgroundImage,
  backgroundAlt,
  className = '',
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
}: BackgroundPageLayoutProps) {
  return (
    <motion.div
      className={cn('relative flex  h-full w-screen flex-col italic', className)}
      initial="hidden"
      style={{ backgroundColor }}
      whileInView="visible"
      viewport={{ once: VIEWPORT_ANIMATE_ONCE, amount: VIEWPORT_AMOUNT_DEFAULT }}
      variants={backgroundVariants}
    >
      <Image src={backgroundImage} alt={backgroundAlt} fill className="object-cover" priority />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default BackgroundPageLayout;
