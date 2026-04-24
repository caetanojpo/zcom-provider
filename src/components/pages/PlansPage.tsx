'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/text/Typography';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { zcomPlans } from '@/data/plans.data';
import PlanCard from '@/components/organisms/cards/PlanCard';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';
import {
  ANIMATION_DURATION_BACKGROUND_SLOW,
  ANIMATION_DURATION_PRICE_CARD,
  VIEWPORT_ANIMATE_ONCE,
  VIEWPORT_AMOUNT_DEFAULT,
  PLAN_CARD_STAGGER_DELAY_MULTIPLIER,
} from '@/constants/animation.constants';
import { SECTION_ID_PLANS } from '@/constants/sections.constants';

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: '-10%', y: '-10%' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: ANIMATION_DURATION_BACKGROUND_SLOW, ease: 'easeOut' },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: 50 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: ANIMATION_DURATION_PRICE_CARD, ease: 'easeOut' },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function PlansPage() {
  return (
    <motion.section
      id={SECTION_ID_PLANS}
      className={cn(
        'relative flex min-h-screen w-screen flex-col gap-8 bg-gradient-to-r from-dark via-zcom-700 to-zcom-500 z-40 p-8 text-white',
      )}
      initial="hidden"
      whileInView="visible"
    >
      <DarkOverlay />
      <motion.div
        className={cn(
          'absolute inset-0 bg-subs-lines bg-center bg-cover lg:bg-subs-lines-desk lg:bg-no-repeat lg:bg-[position:calc(50%_-_600px)_10px] lg:top-10',
        )}
        aria-hidden
        variants={backgroundVariants}
      />

      <motion.header className="flex items-center justify-center" variants={headerVariants}>
        <div
          className={cn(
            'relative my-4 flex items-center justify-center rounded-3xl bg-gradient-to-r from-zcom-700 to-zcom-500 p-2 px-6 shadow-lg lg:px-8',
          )}
        >
          <Typography className="italic font-bold text-xl lg:text-[28px]">
            {PLANS_PAGE_COPYWRITING.pageTitle}
          </Typography>
        </div>
      </motion.header>

      <section
        className="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-start justify-center  mb-8 2xl:mb-0"
        aria-label="Planos zcom"
      >
        {zcomPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            transition={{ delay: index * PLAN_CARD_STAGGER_DELAY_MULTIPLIER }}
            viewport={{ once: VIEWPORT_ANIMATE_ONCE, amount: VIEWPORT_AMOUNT_DEFAULT }}
          >
            <PlanCard plan={plan} />
          </motion.div>
        ))}
      </section>

      <motion.footer
        className="flex flex-col items-center justify-center gap-1 pb-8 text-center"
        variants={headerVariants}
      >
        <div
          className={cn(
            'relative my-4 flex items-center justify-center rounded-3xl bg-gradient-to-r from-zcom-700 to-zcom-500 p-2 px-6 shadow-lg lg:px-8',
          )}
        >
          <Typography className="font-bold italic text-lg lg:text-xl">
            {PLANS_PAGE_COPYWRITING.footerPunctuality}
          </Typography>
        </div>
        <Typography className="text-md lg:text-lg opacity-80 md:w-[50%] lg:w-[40%] 2xl:w-[25%]">
          {PLANS_PAGE_COPYWRITING.footerPrize}
        </Typography>
      </motion.footer>
    </motion.section>
  );
}

export default PlansPage;
