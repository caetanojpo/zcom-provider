import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ZcomPlans } from '@/data/plans.data';
import PlansSpeedBadge from '@/components/molecules/plans/PlansSpeedBadge';
import PlansBenefitList from '@/components/molecules/plans/PlansBenefitList';
import PlansCTA from '@/components/molecules/plans/PlansCTA';
import PlansPriceCard from '@/components/molecules/plans/PlansPriceCard';

function PlanCard({ plan }: { plan: ZcomPlans }) {
  return (
    <article
      className={`flex flex-col items-center h-fit w-full max-w-xs md:max-w-md relative ${plan.id === 2 && 'lg:scale-108 2xl:scale-115'}`}
      aria-labelledby={`plan-${plan.title}-title`}
    >
      <div
        className={`relative w-48 lg:w-80 h-80 lg:h-110 flex flex-col justify-end bg-gradient-to-r from-zcom-500 to-zcom-700 shadow-md rounded-2xl `}
      >
        <div className={'absolute inset-0 pointer-events-none overflow-hidden'}>
          <div
            className={
              'absolute inset-0 bg-subs-dark-lines bg-cover bg-no-repeat -left-60 lg:-left-40 top-20 lg:top-42'
            }
          />
        </div>

        <PlansSpeedBadge title={plan.title} speed={plan.speed} dataStorage={plan.dataStorage} />
        <PlansBenefitList benefits={plan.benefits} />

        <div className={'w-full h-[60%] relative'}>
          <Image
            src={plan.image}
            alt={plan.alt ?? plan.title}
            fill
            className={cn(plan.cover ? 'object-cover' : 'object-contain', 'object-bottom')}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      </div>

      <PlansCTA title={plan.title} ctaLink={plan.ctaLink} />
      <PlansPriceCard
        price={plan.price}
        decimalPrice={plan.decimalPrice}
        recurrence={plan.recurrence}
      />
    </article>
  );
}

export default PlanCard;
