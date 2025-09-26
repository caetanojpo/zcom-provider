'use client';

import BackgroundPageLayout from '@/components/atoms/layouts/BackgroundPageLayout';
import Internet5GPageHeader from '@/components/organisms/Internet5GPageHeader';
import Internet5GContent from '@/components/organisms/Internet5GContent';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Internet5GPage() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main role="main" aria-label="Página de Internet Fibra Óptica da Zcom" className={'relative'}>
      <BackgroundPageLayout
        backgroundImage="/images/5g/bg-5g.webp"
        backgroundAlt="Linhas decorativas em tons de azul representando conexões de fibra óptica"
        backgroundColor="#0b1f39"
      >
        <div
          className={`hidden md:block absolute bottom-[50px] left-[-135px] w-[50vw] h-[80vh] transform transition-all duration-1000 ease-out delay-300
    ${animationStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
          <Image
            src="/images/5g/woman-chair-5g.webp"
            alt="Mulher feliz aproveitando internet de alta velocidade em seu celular"
            fill
            priority
          />
        </div>
        <div
          className={`hidden md:block absolute bottom-0 left-[-200px] w-[75vw] h-[75vh] transform transition-all duration-1000 ease-out
    ${animationStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          aria-hidden="true"
        >
          <Image src="/images/5g/lines-5g.webp" alt="" fill priority />
        </div>

        <div className={'z-10'}>
          <Internet5GPageHeader />
          <Internet5GContent />
        </div>
      </BackgroundPageLayout>
    </main>
  );
}

export default Internet5GPage;
