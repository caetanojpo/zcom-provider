'use client';

import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';

const descriptionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const MapDescription: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-6 px-8 py-4 text-center italic"
      initial="hidden"
      whileInView="visible"
      variants={descriptionVariants}
    >
      <motion.div variants={childVariants}>
        <Typography className="text-[16px] md:text-[19px] xl:text-[24px]">
          Trouxemos <span className="text-zcom-500">inovação</span> e{' '}
          <span className="text-zcom-500">qualidade</span> para nossa amada terra!
        </Typography>
      </motion.div>
      <motion.div className="flex flex-col gap-4" variants={childVariants}>
        <Typography className="text-[12px] md:text-[13px] xl:text-[16px]">
          Nosso foco está em suprir nossa cidade, fomos{' '}
          <span className="text-zcom-500">pioneiros</span> em implementar a fibra óptica através do
          grupo <span className="text-zcom-500">Fiofibra</span> e seremos pioneiros novamente em
          trazer a Internet ultra rápida para nossa cidade!
        </Typography>
        <Typography className="text-[12px] md:text-[13px] xl:text-[16px]">
          Nosso foco está em suprir a demanda da cidade, priorizando o melhor atendimento, serviços
          e entrega de velocidade!
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export default MapDescription;
