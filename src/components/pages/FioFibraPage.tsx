import React from 'react';
import Image from 'next/image';
import { Typography } from '@/components/atoms/text/Typography';
import { COMERCIAL_WHATSAPP } from '@/data/links.data';
import Link from 'next/link';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';

function FioFibraPage() {
  return (
    <section className={'flex h-[70dvh] xl:h-screen w-full bg-zcom-700 relative text-white'}>
      <div className={'h-full w-full bg-fio-fibra-bg absolute bg-center bg-cover bg-no-repeat'} />
      <DarkOverlay />
      <div />
      <div className={'flex flex-col h-full w-full px-6 xl:px-10 z-20 justify-around'}>
        <div
          className={'flex h-fit md:h-[60px] xl:h-[85px] w-full md:w-[50%] items-center  gap-4 '}
        >
          <div className={'relative h-full w-full'}>
            <Image src={'/images/logo/logo.webp'} alt={''} fill className={'object-contain'} />
          </div>
          <div>
            <Typography className="text-zcom-500 font-black text-[24px] md:text-[48px]">
              +
            </Typography>
          </div>
          <div className={'relative h-full w-full'}>
            <Image src={'/images/logo/fiofibra.webp'} alt={''} fill className={'object-contain'} />
          </div>
        </div>
        <div
          className={
            'flex flex-col h-fit w-[70%] xl:w-[50%] italic gap-2 md:gap-6 xl:gap-8 font-medium xl:px-2'
          }
        >
          <Typography className={'text-[16px] font-medium md:text-[24px] xl:text-[28px]'}>
            Duas empresas, o mesmo <span className={'text-zcom-500'}> propósito</span>!
          </Typography>
          <Typography className={'text-[14px] md:text-[18px] xl:text-[20px]'}>
            A Zcom é uma empresa do grupo Fiofibra, a empresa responsável por fornecer toda a
            infraestrutura de fibra óptica da região.{' '}
          </Typography>
          <Typography className={'text-[14px] mt-2 md:text-[18px] xl:text-[20px]'}>
            É isso mesmo! <span className={'text-zcom-500'}>Sua internet virá direto da fonte</span>
            !
          </Typography>
        </div>
        <div className={'h-fit w-full'}>
          <Link
            href={COMERCIAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'w-[90%] md:w-[70%] xl:w-[40%] h-10 md:h-14 xl:h-12 flex justify-center items-center bg-zcom-500 rounded-4xl shadow-lg z-20 hover:scale-105  transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-zcom-200'
            }
            aria-label={`Clique aqui e conheça a Fiofibra`}
          >
            <Typography className={'italic font-bold text-[16px] md:text-[24px]'}>
              Clique aqui e conheça a Fiofibra
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FioFibraPage;
