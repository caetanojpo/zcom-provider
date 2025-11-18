import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PlansBenefitListProps = {
  benefits: string[];
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 20 }, // From bottom-right
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function PlansBenefitList({ benefits }: PlansBenefitListProps) {
  return (
    <motion.ul
      className="z-10 mt-4 mb-2 flex flex-col items-center justify-center lg:mb-4 lg:gap-1 relative"
      variants={listVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.li className="flex items-center justify-center gap-2" variants={itemVariants}>
        <div className="h-1 w-1 rounded-full bg-dark lg:h-2 lg:w-2" />
        <Typography variant="body-xs" className="italic lg:text-[14px]">
          <span className={'font-medium'}>Internet ultra rápida</span>
        </Typography>
      </motion.li>
      <motion.li className="flex items-center justify-center gap-2" variants={itemVariants}>
        <div className="h-1 w-1 rounded-full bg-dark lg:h-2 lg:w-2" />
        <Typography variant="body-xs" className="italic lg:text-[14px]">
          Instalação gratuita
        </Typography>
      </motion.li>
      {benefits.map((benefit, index) => (
        <motion.li
          key={index}
          className={`flex items-center justify-center gap-2 ${benefit.includes('horizontal') ? 'w-[95%]' : 'w-full'}   h-full mt-1`}
          variants={itemVariants}
        >
          {benefit.includes('horizontal') ? (
            <Image src={benefit} alt={''} width={200} height={200} loading="lazy" />
          ) : (
            <Image src={benefit} alt={''} width={120} height={120} loading="lazy" />
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default PlansBenefitList;
