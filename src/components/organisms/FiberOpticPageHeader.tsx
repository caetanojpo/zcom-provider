'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/text/Typography';

interface FiberOpticPageHeaderProps {
  className?: string;
}

const headerVariants: Variants = {
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

const childVariants: Variants = {
  hidden: { opacity: 0, x: -150 }, // Slide in from far left
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const secondChildVariants: Variants = {
  hidden: { opacity: 0, x: 150 }, // Slide in from far right
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.2, // Slight delay for staggered effect
    },
  },
};

function FiberOpticPageHeader({ className = '' }: FiberOpticPageHeaderProps) {
  return (
    <motion.header
      aria-label="Cabeçalho da página de Internet Fibra Óptica"
      className={cn('relative h-32 flex-shrink-0 sm:h-40 md:h-48', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // Trigger on every viewport entry
      variants={headerVariants}
    >
      <motion.div
        className={cn(
          'absolute left-[-20px] top-[40px] flex w-[200px] justify-end rounded-4xl bg-white pb-2 pr-9 pt-0 text-zcom-200  mdMini:w-1/2 mdMini:pr-14 lg:w-1/3 lg:pr-10 xl:w-1/4',
        )}
        variants={childVariants}
      >
        <Typography
          component="h2"
          className="text-2xl font-semibold tracking-tight md:text-5xl"
          aria-label="Internet"
        >
          Internet
        </Typography>
      </motion.div>

      <motion.div
        className={cn(
          'absolute left-[-50px] top-[70px] flex w-[300px] justify-end rounded-full bg-zcom-200 p-2 pr-6 text-white md:top-[90px] md:w-3/4 md:p-6 md:pr-14 lg:w-[55%] lg:pr-16 xl:w-[40%]',
        )}
        variants={secondChildVariants}
      >
        <Typography
          component="h1"
          className="text-3xl font-semibold tracking-tight md:text-6xl"
          aria-label="Fibra Óptica - Serviço de Internet de Alta Velocidade"
        >
          Fibra Óptica
        </Typography>
      </motion.div>
    </motion.header>
  );
}

export default FiberOpticPageHeader;
