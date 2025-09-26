'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/text/Typography';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { zcomPlans } from '@/data/plans.data';
import PlanCard from '@/components/organisms/cards/PlanCard';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: '-10%', y: '-10%' }, // From top-left corner
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: 50 }, // From top-right
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left
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
      className={cn(
        'relative flex min-h-screen w-screen flex-col gap-8 bg-gradient-to-r from-dark via-zcom-700 to-zcom-500  via-z p-8 text-white',
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
        className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 items-start justify-center lg:mt-16"
        aria-label="Planos zcom"
      >
        {zcomPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
          >
            <PlanCard plan={plan} />
          </motion.div>
        ))}
      </section>
    </motion.section>
  );
}

export default PlansPage;
