import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';

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
      className="z-10 mt-4 flex flex-col items-center justify-center lg:mb-4 lg:gap-1"
      variants={listVariants}
    >
      {benefits.map((benefit, index) => (
        <motion.li
          key={index}
          className="flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          <div className="h-1 w-1 rounded-full bg-dark lg:h-2 lg:w-2" />
          <Typography variant="body-xs" className="italic lg:text-[14px]">
            {benefit}
          </Typography>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default PlansBenefitList;
