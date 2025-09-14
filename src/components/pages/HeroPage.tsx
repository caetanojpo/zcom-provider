'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/components/organisms/Navbar';
import Image from 'next/image';
import InternetPlanCard from '@/components/molecules/InternetPlanCard';

function HeroPage() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={'h-dvh bg-gradient-to-br from-dark via-zcom-700 to-zcom-500 relative'}>
      <div
        className={`absolute bottom-0 left-0 z-20 w-[75vw] h-[75vh] transform transition-all duration-1000 ease-out
    ${animationStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <Image src="/images/hero/lines-hero.webp" alt="Decorative lines" fill priority />
      </div>

      <div
        className={`absolute bottom-0 left-[-135px] w-[69vw] h-[69vh] transform transition-all duration-1000 ease-out delay-300
    ${animationStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <Image src="/images/hero/family-in-couch-hero.webp" alt="Family on couch" fill priority />
      </div>

      <div
        className={'min-h-[100vh] w-[100vw] flex flex-col items-end px-[5vw] py-[5vh] gap-[6vh]'}
      >
        <NavBar />
        <div className="w-[30vw] flex-shrink-0 hidden md:block z-20">
          <Image
            src="/images/logo/logo.webp"
            alt="ZCOM Logo"
            width={400}
            height={400}
            className="w-full object-contain"
          />
        </div>
        <div className="w-full sm:w-auto flex-shrink-0 z-20">
          <InternetPlanCard />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
