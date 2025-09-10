import React from 'react';
import { Typography } from '@/components/atoms/text/Typography';
import Link from 'next/link';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

type PlasCTAProps = {
  title: string;
  ctaLink: string;
};

function PlansCTA({ title, ctaLink }: PlasCTAProps) {
  return (
    <div className={'flex flex-col items-center'}>
      <div
        className={
          'w-40 lg:w-60 h-8 lg:h-12 flex items-center justify-center bg-white absolute z-20 bottom-28 lg:bottom-36 text-zcom-500 text-center font-bold italic rounded-t-3xl'
        }
      >
        <Typography variant={'body-md'} className={'lg:text-[24px]'}>
          {title}
        </Typography>
      </div>

      <Link
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={
          'w-48 lg:w-70 h-12 flex justify-center items-center bg-gradient-to-r from-zcom-700 to-zcom-500 rounded-4xl shadow-lg z-20 absolute bottom-16 lg:bottom-24 transform-gpu scale-115 lg:scale-135 hover:scale-120 lg:hover:scale-145 transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-zcom-200'
        }
        aria-label={`Assine o plano ${title}`}
      >
        <Typography className={'italic font-bold'} variant={'body-lg'}>
          {PLANS_PAGE_COPYWRITING.subscribe}
        </Typography>
      </Link>
    </div>
  );
}

export default PlansCTA;
