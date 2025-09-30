'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';
import { PHONE_DATA } from '@/data/links.data';

interface FiberOpticContentProps {
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
  hidden: { opacity: 0, y: 100, scale: 0.95 }, // From bottom with slight scale
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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
      delay: 0.4, // Delay for button to appear last
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
      viewport={{ amount: 0.3 }} // Trigger on every viewport entry
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
              <span className="text-zcom-200">Sua internet vindo direto da fonte!</span>
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
            whileHover={{ scale: 1.05 }} // Glow on hover
            transition={{ duration: 0.2 }}
          >
            <TextButton
              href={PHONE_DATA.link}
              target="_blank"
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
