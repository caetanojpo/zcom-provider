import React from 'react';
import { Typography } from '@/components/atoms/text/Typography';
import { RecurrenceEnum } from '@/enums/Recurrence.enum';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

type PlansPriceCardProps = {
  price: string;
  decimalPrice: string;
  recurrence: RecurrenceEnum;
};

function PlansPriceCard({ price, decimalPrice, recurrence }: PlansPriceCardProps) {
  return (
    <div
      className={
        'relative flex flex-col justify-end items-center w-48 lg:w-80 h-20 lg:h-32 px-4 lg:py-2 bg-white rounded-2xl shadow-lg text-black gap-1 lg:gap-4 mt-4'
      }
    >
      <Typography variant={'body-md'} className={' font-bold italic'}>
        {PLANS_PAGE_COPYWRITING.helperPriceText}
      </Typography>
      <div className={'w-full h-fit flex justify-center relative italic'}>
        <div className={'flex items-end'}>
          <Typography variant={'body-sm'} className={'lg:text-[17px] mr-1'}>
            {PLANS_PAGE_COPYWRITING.currencySymbol}
          </Typography>
        </div>
        <div className={'flex gap-1 items-end justify-center relative'}>
          <Typography
            variant={'heading-xl'}
            className={'text-zcom-500 font-black leading-6 lg:text-[60px]'}
          >
            {price}
            <span className={'text-[18px] lg:text-[27px]'}>{decimalPrice}</span>
          </Typography>
          <Typography variant={'body-sm'} className={'lg:text-[19px]'}>
            / {recurrence}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default PlansPriceCard;
