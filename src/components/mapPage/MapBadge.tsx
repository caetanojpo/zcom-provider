'use client';

import { motion, Variants } from 'framer-motion';
import { Icon } from '@/components/atoms/icons/Icon';
import { Typography } from '@/components/atoms/text/Typography';

export interface MapBadgeProps {
  quantity: number | string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const badgeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 50, y: -50 }, // From top-right corner
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const quantityVariants: Variants = {
  hidden: { opacity: 0, y: 50, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 50, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
  },
};

const MapBadge: React.FC<MapBadgeProps> = ({ quantity, title, icon }) => {
  return (
    <motion.div
      className="relative flex flex-col italic"
      initial="hidden"
      whileInView="visible"
      variants={badgeVariants}
    >
      <motion.div
        className="absolute left-0 top-[-27px] z-50 h-full w-full translate-x-[35%]"
        variants={iconVariants}
      >
        <Icon size="lg" icon={icon} className="hidden md:flex" />
        <Icon icon={icon} className="flex md:hidden" />
      </motion.div>
      <motion.div
        className="rounded-t-2xl bg-gradient-to-l from-zcom-500 to-zcom-700 px-8 py-3 shadow-sm drop-shadow-sm"
        variants={quantityVariants}
      >
        <Typography className="text-[30px] font-black md:text-[46px]">{quantity}</Typography>
      </motion.div>
      <motion.div
        className="absolute bottom-[-20px] left-[-10px] rounded-2xl border border-dark bg-gradient-to-l from-zcom-500 to-zcom-700 px-8 py-1 shadow-sm drop-shadow-sm md:px-14"
        variants={titleVariants}
      >
        <Typography className="text-[19px]">{title}</Typography>
      </motion.div>
    </motion.div>
  );
};

export default MapBadge;
