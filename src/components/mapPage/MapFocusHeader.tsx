'use client';

import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';

const headerVariants: Variants = {
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
  hidden: { opacity: 0, y: -50, x: 50 }, // From top-right corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const MapFocusHeader: React.FC = () => {
  return (
    <motion.div
      className="flex h-[20%] w-full flex-col"
      initial="hidden"
      whileInView="visible"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex h-full w-[50%] items-center justify-end rounded-tr-2xl bg-white text-zcom-500 font-bold md:max-w-[280px] md:rounded-tr-4xl"
        variants={childVariants}
      >
        <Typography className="mr-6 text-[18px] md:text-[30px]">Nosso foco é</Typography>
      </motion.div>
      <motion.div
        className="flex h-full w-[65%] items-center justify-end rounded-br-4xl rounded-tr-4xl bg-gradient-to-l from-zcom-500 to-dark p-2 text-white font-bold md:max-w-[380px]"
        variants={childVariants}
      >
        <Typography className="mr-6 text-[23px] md:text-[40px]">Cândido Mota</Typography>
      </motion.div>
    </motion.div>
  );
};

export default MapFocusHeader;
