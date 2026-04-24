import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/text/Typography';
import { ANIMATION_DURATION_ELEMENT } from '@/constants/animation.constants';

type PlansSpeedBadgeProps = {
  title: string;
  speed: number;
  dataStorage: string;
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: -50 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: ANIMATION_DURATION_ELEMENT, ease: 'easeOut' },
  },
};

function PlansSpeedBadge({ title, speed, dataStorage }: PlansSpeedBadgeProps) {
  return (
    <motion.div
      className={cn(
        'absolute -top-2 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center justify-center px-2 text-center lg:-top-2',
      )}
      variants={badgeVariants}
    >
      <Typography
        id={`plan-${title}-title`}
        variant="heading-3xl"
        className="font-black italic leading-3 text-zcom-200 textLetterSoft lg:leading-8 lg:text-[80px]"
      >
        {speed}
      </Typography>
      <Typography variant="heading-xl" className="italic font-bold lg:text-5xl">
        {dataStorage}
      </Typography>
    </motion.div>
  );
}

export default PlansSpeedBadge;
