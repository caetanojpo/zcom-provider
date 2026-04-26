'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ZcomPlans } from '@/data/plans.data';
import PlansBenefitList from '@/components/molecules/plans/PlansBenefitList';
import PlansCTA from '@/components/molecules/plans/PlansCTA';
import PlansPriceCard from '@/components/molecules/plans/PlansPriceCard';
import { useState } from 'react';
import {
  ANIMATION_DURATION_HOVER,
  ANIMATION_DURATION_ELEMENT,
  ANIMATION_DURATION_BACKGROUND,
  ANIMATION_STAGGER_FAST,
  ANIMATION_DELAY_CHILDREN_DEFAULT,
  ANIMATION_SCALE_OVERSHOOT,
  VIEWPORT_ANIMATE_ONCE,
  VIEWPORT_AMOUNT_DEFAULT,
} from '@/constants/animation.constants';

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_STAGGER_FAST,
      delayChildren: ANIMATION_DELAY_CHILDREN_DEFAULT,
    },
  },
};

const innerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION_ELEMENT, ease: 'easeOut' },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: ANIMATION_SCALE_OVERSHOOT, y: '10%', x: '10%' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: { duration: ANIMATION_DURATION_BACKGROUND, ease: 'easeOut' },
  },
};

const MotionImage = motion.create(Image);

function PlanCard({ plan }: { plan: ZcomPlans }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.article
      className={cn('relative flex h-fit max-w-md flex-col items-center')}
      aria-labelledby={`plan-${plan.title}-title`}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      animate={{ scale: isHovering ? ANIMATION_SCALE_OVERSHOOT : 1 }}
      transition={{ duration: ANIMATION_DURATION_HOVER, ease: 'easeInOut' }}
      viewport={{ once: VIEWPORT_ANIMATE_ONCE, amount: VIEWPORT_AMOUNT_DEFAULT }}
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

        <PlansBenefitList
          benefits={plan.benefits}
          planTitle={plan.planTitle}
          planSubtitle={plan.planSubtitle}
        />

        <motion.div className="relative h-full w-full" variants={imageVariants}>
          <MotionImage
            src={plan.image}
            alt={plan.alt ?? plan.title}
            fill
            sizes="(min-width: 1024px) 320px, 192px"
            className={'object-contain object-bottom'}
            animate={{ opacity: isHovering ? 0 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            priority
          />

          <MotionImage
            src={plan.imageColored}
            alt={plan.alt ?? plan.title}
            fill
            sizes="(min-width: 1024px) 320px, 192px"
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
    </motion.article>
  );
}

export default PlanCard;
