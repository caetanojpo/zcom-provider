import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import Image from 'next/image';
import {
  ANIMATION_STAGGER_ITEMS,
  ANIMATION_STAGGER_FAST,
  ANIMATION_DELAY_CHILDREN_DEFAULT,
  ANIMATION_DURATION_ELEMENT,
  VIEWPORT_ANIMATE_ONCE,
  VIEWPORT_AMOUNT_DEFAULT,
} from '@/constants/animation.constants';
import { BENEFIT_IMAGE_SIZE } from '@/constants/ui.constants';

type PlansBenefitListProps = {
  benefits: string[];
  planTitle: string;
  planSubtitle: string;
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_STAGGER_ITEMS,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: ANIMATION_DURATION_ELEMENT, ease: 'easeOut' },
  },
};

function PlansBenefitList({ benefits, planTitle, planSubtitle }: PlansBenefitListProps) {
  return (
    <motion.div
      className="z-10 mt-4 mb-2 flex flex-col items-center justify-center lg:mb-4 lg:gap-1 relative"
      variants={listVariants}
      viewport={{ once: VIEWPORT_ANIMATE_ONCE, amount: VIEWPORT_AMOUNT_DEFAULT }}
    >
      <motion.div
        className="flex flex-col items-center text-center leading-tight italic"
        variants={itemVariants}
      >
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 mr-1 rounded-full bg-dark lg:h-2 lg:w-2" />
          <Typography variant="body-sm" className="font-bold lg:text-[18px]">
            {planTitle}
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <Typography variant="body-xs" className="lg:text-[13px]">
            {planSubtitle}
          </Typography>
        </div>
      </motion.div>

      <motion.div className="flex items-center justify-center gap-1 mt-1" variants={itemVariants}>
        <div className="h-1 w-1 mr-1 rounded-full bg-dark lg:h-2 lg:w-2" />
        <Typography variant="body-xs" className="italic lg:text-[13px]">
          Instalação gratuita
        </Typography>
      </motion.div>

      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center mt-1 w-[70%]"
          variants={itemVariants}
        >
          <Image
            src={benefit}
            alt=""
            width={BENEFIT_IMAGE_SIZE}
            height={BENEFIT_IMAGE_SIZE}
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default PlansBenefitList;
