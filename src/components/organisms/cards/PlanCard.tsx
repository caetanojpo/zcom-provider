import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ZcomPlans } from '@/data/plans.data';
import PlansBenefitList from '@/components/molecules/plans/PlansBenefitList';
import PlansCTA from '@/components/molecules/plans/PlansCTA';
import PlansPriceCard from '@/components/molecules/plans/PlansPriceCard';
import { Typography } from '@/components/atoms/text/Typography';
import { useState } from 'react';

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const innerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1, y: '10%', x: '10%' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const MotionImage = motion(Image);

function PlanCard({ plan }: { plan: ZcomPlans }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.article
      className={cn(`relative flex h-fit max-w-md flex-col items-center md:max-w-md'}`)}
      aria-labelledby={`plan-${plan.title}-title`}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      animate={{ scale: isHovering ? 1.1 : 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={cn(
          'relative flex h-80 w-48 flex-col justify-end rounded-2xl bg-gradient-to-r from-zcom-500 to-zcom-700 shadow-md lg:h-110 lg:w-80',
        )}
        variants={innerVariants}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={cn(
              'absolute inset-0 -left-60 top-20 bg-subs-dark-lines bg-cover bg-no-repeat lg:-left-40 lg:top-42',
            )}
          />
        </div>

        <PlansBenefitList benefits={plan.benefits} />

        <motion.div className="relative h-full w-full" variants={imageVariants}>
          <MotionImage
            src={plan.image}
            alt={plan.alt ?? plan.title}
            fill
            className={'object-contain object-bottom'}
            animate={{ opacity: isHovering ? 0 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            priority
          />

          <MotionImage
            src={plan.imageColored}
            alt={plan.alt ?? plan.title}
            fill
            className={'object-contain object-bottom absolute inset-0'}
            loading="lazy"
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      <PlansCTA title={plan.title} ctaLink={plan.ctaLink} setIsHovering={setIsHovering} />
      <PlansPriceCard
        price={plan.price}
        decimalPrice={plan.decimalPrice}
        recurrence={plan.recurrence}
      />
      {/*PONTUALIDADE*/}
      {/*<div className="absolute z-10 bottom-[-30] flex h-8 w-40 items-center justify-center rounded-b-3xl bg-gradient-to-r from-zcom-700 to-zcom-500 text-white text-center font-medium italic lg:bottom-[-38] lg:h-10 lg:w-60">*/}
      {/*  <Typography className="text-[10px] lg:text-[16px]">{plan.extra}</Typography>*/}
      {/*</div>*/}
    </motion.article>
  );
}

export default PlanCard;
