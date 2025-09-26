'use client';

import Image from 'next/image';
import InternetPlanCard from '@/components/molecules/InternetPlanCard';

function HeroPage() {
  return (
    <section
      aria-label="Seção principal com ofertas de planos de internet"
      className={
        'bg-gradient-to-br from-dark via-zcom-700 to-zcom-500 relative w-screen min-h-[85dvh] lg:min-h-[70dvh] h-full xl:h-[95dvh] flex items-end xl:items-start'
      }
    >
      <div
        className={`absolute bottom-[-20dvh] left-0 xl:left-[-15dvw] w-[100%] h-full  `}
        aria-hidden="true"
      >
        <Image
          src="/images/hero/family-in-couch-hero.webp"
          alt="Família feliz aproveitando internet de alta velocidade em casa"
          fill
          priority
          className={'object-cover xl:object-contain'}
        />
      </div>

      <div
        id="main-content"
        className={'w-full h-full flex flex-col items-end justify-between px-[5vw] py-[5vh] z-20 '}
      >
        <div className={'h-full w-full flex flex-col items-end justify-end xl:justify-evenly '}>
          <div className="w-[28vw]  hidden xl:block z-20">
            <Image
              src="/images/logo/logo.webp"
              alt="Logo da ZCOM Provedor de Internet"
              width={400}
              height={400}
              className="w-full object-contain"
            />
          </div>

          <section
            className="w-full h-full xl:h-fit flex items-end justify-end sm:w-auto  z-20"
            aria-label="Preços dos planos de internet"
          >
            <InternetPlanCard />
          </section>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
