'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import {
  ANIMATION_DURATION_BACKGROUND_SLOW,
  MAP_POINT_PULSE_DURATION,
  MAP_POINT_MAX_RANDOM_DELAY,
} from '@/constants/animation.constants';

interface Point {
  top: string;
  left: string;
}

const points: Point[] = [
  { top: '20%', left: '50%' },
  { top: '45%', left: '35%' },
  { top: '28%', left: '45%' },
  { top: '32%', left: '50%' },
  { top: '55%', left: '55%' },
  { top: '60%', left: '60%' },
  { top: '65%', left: '50%' },
  { top: '80%', left: '55%' },
  { top: '85%', left: '40%' },
  { top: '87%', left: '48%' },
  { top: '88%', left: '55%' },
];

const mapVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: '10%', y: '-10%' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: ANIMATION_DURATION_BACKGROUND_SLOW, ease: 'easeOut' },
  },
};

const pointVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.3, 1],
    transition: {
      duration: MAP_POINT_PULSE_DURATION,
      ease: 'easeOut',
      delay: Math.random() * MAP_POINT_MAX_RANDOM_DELAY,
      repeat: Infinity,
      repeatType: 'loop',
      times: [0, 0.5, 1],
    },
  },
};

const MapWithPoints: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      className={`relative w-full aspect-[1/1] xl:aspect-[10/5] ${className}`}
      initial="hidden"
      whileInView="visible"
      variants={mapVariants}
    >
      <Image
        src={IMAGE_SRC.map.candidoMota}
        alt="Mapa de Cândido Mota"
        fill
        priority
        className="object-contain pointer-events-none"
      />

      <div className="absolute inset-0">
        {points.map((p, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: p.top, left: p.left }}
            variants={pointVariants}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute h-5 w-5 rounded-full bg-blue-500 opacity-30 blur-md"></span>
              <span className="absolute h-4 w-4 rounded-full bg-blue-400 opacity-70 blur-[2px]"></span>
              <span className="relative h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"></span>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MapWithPoints;
