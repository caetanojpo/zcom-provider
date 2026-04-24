'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';
import { PHONE_DATA } from '@/data/links.data';
import {
  ANIMATION_DURATION_STAGGER_CONTAINER,
  ANIMATION_DURATION_PRICE_CARD,
  ANIMATION_STAGGER_DEFAULT,
  SPRING_STIFFNESS_FIRM,
  SPRING_DAMPING_LIGHT,
  VIEWPORT_AMOUNT_DEFAULT,
} from '@/constants/animation.constants';
import { LINK_TARGET_BLANK } from '@/constants/ui.constants';

interface FiberOpticContentProps {
  className?: string;
}

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION_STAGGER_CONTAINER,
      ease: 'easeOut',
      staggerChildren: ANIMATION_STAGGER_DEFAULT,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION_PRICE_CARD,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_FIRM,
      damping: SPRING_DAMPING_LIGHT,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION_PRICE_CARD,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_FIRM,
      damping: SPRING_DAMPING_LIGHT,
      delay: 0.4,
    },
  },
};

function FiberOpticContent({ className = '' }: FiberOpticContentProps) {
  return (
    <motion.section
      className={cn('flex flex-1 px-12 py-14 sm:px-6 md:px-8 lg:px-12', className)}
      aria-label="Informações sobre Internet Fibra Óptica"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: VIEWPORT_AMOUNT_DEFAULT }}
      variants={contentVariants}
    >
      <div className="w-full max-w-4xl text-white md:w-1/2 lg:w-1/3">
        <motion.div className="flex flex-col justify-start gap-6" variants={childVariants}>
          <Typography
            component="h2"
            className="text-xl font-semibold leading-7 tracking-tight sm:text-2xl sm:leading-8"
            aria-describedby="fiber-optic-description"
          >
            <span className="text-zcom-200">Rapidez</span> e{' '}
            <span className="text-zcom-200">conexão</span> de confiança, a sua melhor opção em
            internet fibra óptica
          </Typography>

          <motion.div id="fiber-optic-description" className="space-y-4" variants={childVariants}>
            <Typography
              component="p"
              variant="body-lg"
              aria-label="Informação sobre a Zcom e o grupo Fiofibra"
            >
              A Zcom faz parte do grupo Fiofibra, o maior implementador de fibra óptica da região.{' '}
              <span className="text-zcom-200 font-bold">Sua internet vindo direto da fonte!</span>
            </Typography>

            <Typography
              component="p"
              variant="body-lg"
              aria-label="Garantia de qualidade do serviço"
            >
              Qualidade, desde a implementação da estrutura, até a conexão ao seu computador e
              celular
            </Typography>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            className="my-2 h-fit w-fit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <TextButton
              href={PHONE_DATA.link}
              target={LINK_TARGET_BLANK}
              variant="heading-md"
              className="mt-4 w-full max-w-xs rounded-4xl bg-zcom-200 px-[6dvw] py-[1.5dvh] lg:py-[1.2rem] shadow-md text-center transition-all duration-200 hover:bg-zcom-300 focus:outline-none focus:ring-2 focus:ring-zcom-200 focus:ring-offset-2 focus:ring-offset-transparent sm:mt-5"
              aria-label="Saiba mais sobre nossos planos de Internet Fibra Óptica"
            >
              Saiba mais
            </TextButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FiberOpticContent;
