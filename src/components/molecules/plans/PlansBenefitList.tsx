import React from 'react';
import { Typography } from '@/components/atoms/text/Typography';

type PlansBenefitListProps = {
  benefits: string[];
};

function PlansBenefitList({ benefits }: PlansBenefitListProps) {
  return (
    <ul className={'flex flex-col items-center justify-center lg:mb-4 lg:gap-1 mt-4 z-10'}>
      {benefits.map((benefit, index) => (
        <li key={index} className={'flex justify-center items-center gap-2'}>
          <div className={'h-1 w-1 lg:h-2 lg:w-2  rounded-full bg-dark'} />
          <Typography variant={'body-xs'} className={'italic lg:text-[14px]'}>
            {benefit}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default PlansBenefitList;
