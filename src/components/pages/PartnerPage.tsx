'use client';
import React from 'react';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { Typography } from '@/components/atoms/text/Typography';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { InstagramIcon, MousePointer } from 'lucide-react';
import IconTextButton from '@/components/atoms/buttons/IconTextButton';
import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';

function PartnerPage() {
  const clients = [
    {
      logo: '/images/logo/partners/alvaresagricola.webp',
      link: '',
    },
    {
      logo: '/images/logo/partners/blackbully.webp',
      link: '',
    },
    {
      logo: '/images/logo/partners/casadiconti.webp',
      link: '',
    },
    {
      logo: '/images/logo/partners/coopermota.webp',
      link: '',
    },
    {
      logo: '/images/logo/partners/gigantevermelho.webp',
      link: '',
    },
    {
      logo: '/images/logo/partners/saldaterra.webp',
      link: '',
    },
  ];

  return (
    <section className="h-full  w-full bg-gradient-to-l from-zcom-700 to-zcom-500 relative">
      <DarkOverlay />
      <div className="flex flex-col gap-10 w-full h-full p-6 xl:px-10 z-20 justify-around items-center">
        {/* Header */}
        <div className="flex flex-col w-full z-20 relative items-center justify-center mt-14 md:mt-20">
          <div className="flex bg-white w-fit h-fit px-2 py-2 md:p-4 rounded-4xl absolute top-[-40px] md:top-[-50px]">
            <Typography className="text-zcom-500 font-bold italic md:text-[30px]">
              Nossos parceiros e clientes
            </Typography>
          </div>
          <div className="bg-gradient-to-r from-zcom-700 to-zcom-500 w-full xl:w-[70%] h-fit py-8 md:px-4 z-30 rounded-[50px] md:rounded-[80px] shadow-md">
            {/* Mobile Grid: 3 cols, 2 rows */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 md:hidden px-4">
              {clients.map((client, index) => (
                <div key={index} className="flex justify-center items-center ">
                  <Image
                    src={client.logo}
                    alt=""
                    width={100}
                    height={100}
                    className="object-contain "
                  />
                </div>
              ))}
            </div>

            <div className="hidden md:block h-full w-full ">
              <Carousel
                opts={{
                  align: 'center',
                  loop: true,
                }}
                plugins={[Autoplay({ delay: 2000 })]} // Autoplay every 2 seconds
              >
                <CarouselContent>
                  {clients.map((client, index) => (
                    <CarouselItem key={index} className="basis-1/5 xl:basis-1/6">
                      <div className="flex justify-center items-center h-full">
                        <Image
                          src={client.logo}
                          alt=""
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <IconTextButton
          link={''}
          icon={MousePointer}
          size={'xs'}
          textClassName={' ml-[-8px] text-white italic font-bold text-[12px]'}
          text={'Venha fazer parte desse time de parceiros!'}
          className={
            'w-fit h-fit bg-gradient-to-r from-zcom-700 shadow-md to-zcom-500 z-20 rounded-4xl p-2 flex md:hidden'
          }
        />
        <IconTextButton
          link={''}
          icon={MousePointer}
          size={'md'}
          textClassName={'text-white italic font-bold text-[20px]'}
          text={'Venha fazer parte desse time de parceiros!'}
          className={
            'w-fit h-fit bg-gradient-to-r from-zcom-700 shadow-md to-zcom-500 z-20 rounded-4xl p-2 px-4 hidden md:flex'
          }
        />
        <div className={'z-20 flex gap-4'}>
          <IconTextButton
            name={NAVBAR_COPYWRITING.phone.name}
            target={NAVBAR_COPYWRITING.phone.target}
            icon={NAVBAR_COPYWRITING.phone.icon}
            link={NAVBAR_COPYWRITING.phone.link}
            text={''}
            variant="white"
            size="md"
            textVariant="body-xs"
            textClassName="text-white"
            gap="xs"
          />
          <IconTextButton
            name={NAVBAR_COPYWRITING.phone.name}
            target={NAVBAR_COPYWRITING.phone.target}
            icon={InstagramIcon}
            link={NAVBAR_COPYWRITING.phone.link}
            text={''}
            variant="white"
            size="md"
            textVariant="body-xs"
            textClassName="text-white"
            gap="xs"
          />
        </div>
      </div>
    </section>
  );
}

export default PartnerPage;
