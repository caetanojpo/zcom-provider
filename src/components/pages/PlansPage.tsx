import React from 'react';
import { Typography } from '@/components/atoms/text/Typography';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { zcomPlans } from '@/data/plans.data';
import PlanCard from '@/components/organisms/cards/PlanCard';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

function PlansPage() {
  return (
    <section
      className={
        'flex flex-col gap-8 w-screen min-h-screen bg-gradient-to-r from-zcom-500 to-dark via-z p-8 text-white relative '
      }
    >
      <div
        className={
          'absolute inset-0 bg-subs-lines lg:bg-subs-lines-desk bg-cover lg:bg-no-repeat lg:bg-[position:calc(50%_-_600px)_10px] lg:top-10 bg-center '
        }
        aria-hidden
      />
      <DarkOverlay percentage={20} />

      <header className={'flex justify-center items-center'}>
        <div
          className={
            'flex justify-center items-center bg-gradient-to-r from-zcom-700 to-zcom-500 p-2 rounded-3xl shadow-lg relative my-4 px-6 lg:px-8 '
          }
        >
          <Typography className={'font-bold text-xl lg:text-[28px] italic'}>
            {PLANS_PAGE_COPYWRITING.pageTitle}
          </Typography>
        </div>
      </header>

      <section
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-start justify-center lg:mt-16"
        aria-label="Planos zcom"
      >
        {zcomPlans.map((plan, index) => (
          <div key={index} className="flex justify-center">
            <PlanCard plan={plan} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default PlansPage;
