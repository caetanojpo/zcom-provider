import React from 'react';
import Image from 'next/image';
import { Typography } from '@/components/atoms/text/Typography';

function FioFibraPage(props) {
  return (
    <section className={'flex flex-col h-[70dvh] w-full bg-zcom-700'}>
      <div className={'flex h-[20%] w-full items-center gap-4'}>
        <div className={'relative h-full w-[25%]'}>
          <Image src={'/images/logo/logo.webp'} alt={''} fill className={'object-contain'} />
        </div>
        <div>
          <Typography className="text-zcom-500 text-[24px]">+</Typography>
        </div>
        <div className={'relative h-full w-[25%]'}>
          <Image src={'/images/logo/fiofibra.webp'} alt={''} fill className={'object-contain'} />
        </div>
      </div>
    </section>
  );
}

export default FioFibraPage;
