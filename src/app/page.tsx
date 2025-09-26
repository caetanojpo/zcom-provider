import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';
import { Icon } from '@/components/atoms/icons/Icon';
import { socialMediaLinks } from '@/data/links.data';
import { cn } from '@/lib/utils';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import SocialIconButton from '@/components/atoms/buttons/SocialIconButton';
import { CONSTRUCTION_PAGE_COPYWRITING } from '@/data/copywriting/construction-page.data';
import { IMAGE_SRC } from '@/data/imageSrc.data';

export default function Home() {
  return (
    <main className="relative w-dvw h-dvh overflow-hidden text-white flex flex-col xl:flex-row items-center xl:items-start">
      <div
        aria-hidden
        className={cn(
          'absolute pointer-events-none z-10 bg-construction-bg bg-no-repeat bg-center bg-contain',
          'bottom-[-200px] left-[-100px] w-[120%] h-[420px]',
          'md:bottom-[-300px] md:left-[-200px] md:h-[600px]',
          'xl:bottom-[-500px] xl:left-[-650px] xl:h-[900px]',
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-br from-dark to-zcom-500" />
      <DarkOverlay />
      <section className="relative w-full h-[40dvh] xl:h-[70dvh] z-20 flex items-center justify-center xl:justify-start xl:order-2">
        <Image
          src={IMAGE_SRC.constructionPage.underConstructionSign}
          alt={CONSTRUCTION_PAGE_COPYWRITING.underConstructionSignAlt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 60vw, (max-width: 1280px) 40vw, 33vw"
          className="object-contain h-full absolute top-0 left-16 md:static md:w-auto"
          priority={true}
          quality={100}
        />
      </section>
      <section className="w-full h-[50dvh] xl:h-dvh z-20 flex flex-col items-center justify-center gap-6 px-6 md:px-12 xl:px-32 2xl:px-64">
        <div className="relative w-full h-fit flex items-center justify-center xl:justify-start">
          <Icon icon={AlertTriangle} size="xl" variant="default" aria-hidden />
        </div>

        <div className="w-full max-w-3xl text-center xl:text-left">
          <h1
            data-testid={'mainText'}
            className="text-2xl md:text-4xl lg:text-3xl 2xl:text-4xl font-semibold tracking-tight italic"
          >
            {CONSTRUCTION_PAGE_COPYWRITING.mainText.prefix}
            <span className="text-zcom">{CONSTRUCTION_PAGE_COPYWRITING.mainText.highlight}</span>
            {CONSTRUCTION_PAGE_COPYWRITING.mainText.sufix}
          </h1>

          <div className="mt-4 text-sm md:text-base text-white">
            <p data-testid={'firstText'}>{CONSTRUCTION_PAGE_COPYWRITING.firstText}</p>
            <p data-testid={'secondText'} className="mt-2">
              {CONSTRUCTION_PAGE_COPYWRITING.secondText}
            </p>
            <p data-testid={'thirdText'} className="mt-10">
              {CONSTRUCTION_PAGE_COPYWRITING.thirdText}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center xl:justify-start gap-4">
            {socialMediaLinks.map((item, index) => (
              <SocialIconButton
                key={index}
                name={item.title}
                target={item.target}
                icon={item.icon}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
