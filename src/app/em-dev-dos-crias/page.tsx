import { IMAGE_SRC } from '@/data/imageSrc.data';
import Image from 'next/image';
import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';
import { socialMediaLinks } from '@/data/links.data';
import SocialIconButton from '@/components/atoms/buttons/SocialIconButton';

export default function HomeDev() {
  return (
    // <main className="relative w-dvw h-dvh overflow-hidden text-white flex flex-col xl:flex-row items-center xl:items-start">
    //   <div
    //     aria-hidden
    //     className={cn(
    //       'absolute pointer-events-none z-10 bg-construction_bg bg-no-repeat bg-center bg-contain',
    //       'bottom-[-200px] left-[-100px] w-[120%] h-[420px]',
    //       'md:bottom-[-300px] md:left-[-200px] md:h-[600px]',
    //       'xl:bottom-[-500px] xl:left-[-650px] xl:h-[900px]',
    //     )}
    //   />
    //   <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-br from-dark to-zcom" />
    //
    //   <DarkOverlay />
    //
    // </main>
    <NavBar />
  );
}

function NavBar() {
  return (
    <div className="flex w-[95%] pl-8 pr-8 pt-2 pb-2 rounded-full bg-red-500 ml-auto mr-auto mt-5">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <Image
            src={IMAGE_SRC.navBar.logo}
            alt={NAVBAR_COPYWRITING.logoAlt}
            width={100}
            height={100}
            priority={true}
            quality={100}
          />
          <div className="flex items-center justify-between gap-3">
            <div className="text-white">Home</div>
            <span className="text-dark">|</span>
            <div className="text-white">Planos</div>
            <span className="text-dark">|</span>
            <div className="text-white">Parceiros</div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-end">
          <div className="text-white">2a via da fatura</div>
          <div className="text-white">(18) 99785-6960</div>
          {socialMediaLinks.map((item, index) => (
            <SocialIconButton
              key={index}
              name={item.title}
              target={item.target}
              icon={item.icon}
              link={item.link}
              variant="white"
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
