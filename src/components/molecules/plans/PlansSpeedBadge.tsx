import React from 'react';
import { cn } from '@/lib/concatTailwind';
import { Typography } from '@/components/atoms/text/Typography';

type PlansSpeedBadgeProps = {
  title: string;
  speed: number;
  dataStorage: string;
};

function PlansSpeedBadge({ title, speed, dataStorage }: PlansSpeedBadgeProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center absolute top-0 lg:-top-2 left-1/2 -translate-x-1/2 text-center z-20',
        'px-2',
      )}
    >
      <Typography
        id={`plan-${title}-title`}
        variant={'heading-3xl'}
        className={`text-zcom-200 lg:text-[80px] textLetterSoft font-black italic leading-3 lg:leading-8`}
      >
        {speed}
      </Typography>
      <Typography variant={'heading-xl'} className={'font-bold italic lg:text-5xl'}>
        {dataStorage}
      </Typography>
    </div>
  );
}

export default PlansSpeedBadge;
