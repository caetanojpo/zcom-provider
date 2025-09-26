import React from 'react';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import HouseIconSVG from '../../../public/icons/house.svg';
import BuildingIconSVG from '../../../public/icons/building.svg';
import MapDescription from '@/components/mapPage/MapDescription';
import MapWithPoints from '@/components/mapPage/MapWithPoints';
import MapBadge, { MapBadgeProps } from '@/components/mapPage/MapBadge';
import MapFocusHeader from '@/components/mapPage/MapFocusHeader';

const badgeData: MapBadgeProps[] = [
  {
    quantity: 893,
    title: 'Residências',
    icon: HouseIconSVG,
  },
  {
    quantity: 98,
    title: 'Empresas',
    icon: BuildingIconSVG,
  },
] as const;

const MapPage: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-8 w-screen min-h-fit bg-gradient-to-r from-zcom-500 to-dark via-z py-8 md:py-20 text-white">
      <DarkOverlay />
      <div className="z-20 h-full w-full flex flex-col gap-4 items-center justify-start ">
        <MapFocusHeader />
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex flex-col h-full  w-full md:w-[50%] md:items-center md:h-[50dvh] justify-evenly">
            <div className="flex justify-around gap-8 mt-8 md:order-2 md:justify-start md:gap-16 xl:gap-32">
              {badgeData.map((item) => (
                <MapBadge key={item.title} {...item} />
              ))}
            </div>
            <MapWithPoints className="mt-8 w-[95%] mx-auto md:hidden" />
            <MapDescription />
          </div>
          <div className="hidden md:flex h-full w-[50%] lg:w-[50%] items-center xl:items-stretch xl:py-10 justify-center absolute right-0 top-0">
            <MapWithPoints className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPage;
