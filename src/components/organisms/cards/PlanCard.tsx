import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ZcomPlans } from '@/data/plans.data';
import PlansSpeedBadge from '@/components/molecules/plans/PlansSpeedBadge';
import PlansBenefitList from '@/components/molecules/plans/PlansBenefitList';
import PlansCTA from '@/components/molecules/plans/PlansCTA';
import PlansPriceCard from '@/components/molecules/plans/PlansPriceCard';

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
  hidden: { opacity: 0, scale: 1.1, y: '10%', x: '10%' }, // From bottom-right corner
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

function PlanCard({ plan }: { plan: ZcomPlans }) {
  return (
    <motion.article
      className={cn(
        `relative flex h-fit max-w-xs flex-col items-center md:max-w-md ${plan.id === 2 && 'lg:scale-108 2xl:scale-115'}`,
      )}
      aria-labelledby={`plan-${plan.title}-title`}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
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

        <PlansSpeedBadge title={plan.title} speed={plan.speed} dataStorage={plan.dataStorage} />
        <PlansBenefitList benefits={plan.benefits} />

        <motion.div className="relative h-[60%] w-full" variants={imageVariants}>
          <Image
            src={plan.image}
            alt={plan.alt ?? plan.title}
            fill
            className={cn(plan.cover ? 'object-cover' : 'object-contain', 'object-bottom')}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <PlansCTA title={plan.title} ctaLink={plan.ctaLink} />
      <PlansPriceCard
        price={plan.price}
        decimalPrice={plan.decimalPrice}
        recurrence={plan.recurrence}
      />
    </motion.article>
  );
}

export default PlanCard;
