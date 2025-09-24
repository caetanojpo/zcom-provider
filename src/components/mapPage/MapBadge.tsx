import React from 'react';
import { Icon } from '@/components/atoms/icons/Icon';
import { Typography } from '@/components/atoms/text/Typography';

export interface MapBadgeProps {
  quantity: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MapBadge: React.FC<MapBadgeProps> = ({ quantity, title, icon }) => {
  return (
    <div className="relative flex flex-col italic">
      <div className="h-full w-full absolute top-[-27px] left-0 translate-x-[35%] z-50">
        <Icon size="lg" icon={icon} className="hidden md:flex" />
        <Icon icon={icon} className="flex md:hidden" />
      </div>
      <div className="bg-gradient-to-l from-zcom-500 to-zcom-700 py-3 px-8 rounded-t-2xl drop-shadow-sm shadow-sm">
        <Typography className="text-[30px] md:text-[46px] font-black">{quantity}</Typography>
      </div>
      <div className="bg-gradient-to-l from-zcom-500 to-zcom-700 py-1 px-8 md:px-6 rounded-2xl absolute bottom-[-20px] left-[-10px] drop-shadow-sm shadow-sm border border-dark">
        <Typography className="text-[12px] md:text-[19px]">{title}</Typography>
      </div>
    </div>
  );
};

export default MapBadge;
