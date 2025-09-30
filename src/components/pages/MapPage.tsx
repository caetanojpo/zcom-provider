'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
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

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const mapVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: '10%', y: '-10%' }, // From top-right corner
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const MapPage: React.FC = () => {
  return (
    <motion.section
      id={'map'}
      className={cn(
        'relative flex min-h-fit w-screen flex-col gap-8 bg-gradient-to-r from-dark to-zcom-500 py-8 text-white md:py-20',
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <DarkOverlay />
      <div className="z-20 flex h-full w-full flex-col items-center justify-start gap-4">
        <MapFocusHeader />
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="flex h-full w-full flex-col justify-evenly md:h-[50dvh] md:w-[50%] md:items-center">
            <motion.div
              className="mt-8 flex justify-around gap-8 md:order-2 md:gap-16 md:justify-start xl:gap-32"
              variants={childVariants}
            >
              {badgeData.map((item, index) => (
                <MapBadge key={item.title} {...item} />
              ))}
            </motion.div>
            <motion.div className="mx-auto mt-8 w-[95%] md:hidden" variants={mapVariants}>
              <MapWithPoints className="w-full" />
            </motion.div>
            <MapDescription />
          </div>
          <motion.div
            className="absolute right-0 top-0 hidden h-full w-[50%] items-center justify-center md:flex lg:w-[50%] xl:items-stretch xl:py-10"
            variants={mapVariants}
          >
            <MapWithPoints className="w-full" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MapPage;
