'use client';

import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';
import { cn } from '@/lib/utils';

interface Internet5GContentProps {
  className?: string;
}

const contentVariants: Variants = {
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
  hidden: { opacity: 0, y: 100, scale: 0.95, rotate: 3 }, // From bottom-right with slight rotation
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 90,
      damping: 15,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 }, // From bottom with scale
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.5, // Delay for button to appear last
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 12px rgba(0, 255, 255, 0.6)', // Cyan glow to match zcom-200
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

function Internet5GContent({ className = '' }: Internet5GContentProps) {
  return (
    <motion.section
      className={cn('flex-1 flex justify-end py-14 px-8 sm:px-10 md:px-15', className)}
      aria-label="Informações sobre Internet 5G"
      initial="hidden"
      whileInView="visible"
      variants={contentVariants}
    >
      <motion.div className="w-full md:w-[70%] max-w-4xl text-white text-end">
        <motion.div className="flex flex-col gap-6 items-end" variants={childVariants}>
          <Typography
            component="h2"
            className="text-xl sm:text-2xl font-semibold leading-7 sm:leading-8 tracking-tight"
            aria-describedby="fiber-optic-description"
          >
            O primeiro provedor de internet a trazer o{' '}
            <span className="text-zcom-200">modelo 5G</span> para nossa cidade.
          </Typography>

          <motion.div id="fiber-optic-description" className="space-y-4" variants={childVariants}>
            <Typography
              component="p"
              variant="body-lg"
              aria-label="Informação sobre a Zcom e o grupo Fiofibra"
            >
              Além de qualidade, rapidez e confiabilidade, a Zcom também permite que você tenha{' '}
              <span className="text-zcom-200">mobilidade</span> ao usar o seu plano.
            </Typography>

            <Typography
              component="p"
              variant="body-lg"
              aria-label="Garantia de qualidade do serviço"
            >
              Leve a sua internet para onde você estiver, no seu carro, sítio, viagem, onde estiver
              a Zcom estará com você nos seus{' '}
              <span className="text-zcom-200">melhores momentos</span>!
            </Typography>
          </motion.div>

          <motion.div className="my-2 h-fit w-fit" variants={buttonVariants} whileHover="hover">
            <TextButton
              href="#"
              target="_blank"
              variant="heading-md"
              className="mt-4 w-full max-w-xs rounded-4xl bg-zcom-200 px-[6dvw] py-[1.5dvh] lg:py-[1.2rem] shadow-md text-center transition-all duration-200 hover:bg-zcom-300 focus:outline-none focus:ring-2 focus:ring-zcom-200 focus:ring-offset-2 focus:ring-offset-transparent sm:mt-5"
              aria-label="Conheça nosso plano internet 5G"
            >
              Conheça
            </TextButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Internet5GContent;
