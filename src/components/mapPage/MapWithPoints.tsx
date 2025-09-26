'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface Point {
  top: string;
  left: string;
}

const points: Point[] = [
  { top: '20%', left: '50%' }, // topo direito
  { top: '45%', left: '35%' }, // meio acima
  { top: '28%', left: '45%' },
  { top: '32%', left: '50%' },
  { top: '55%', left: '55%' }, // meio direita
  { top: '60%', left: '60%' }, // canto direito inferior
  { top: '65%', left: '50%' }, // meio esquerda
  { top: '80%', left: '55%' }, // canto esquerdo baixo
  { top: '85%', left: '40%' },
  { top: '87%', left: '48%' },
  { top: '88%', left: '55%' },
];

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

const pointVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [1, 0.5, 1], // Pulsing opacity for blinking effect
    scale: [1, 1.3, 1], // Slight scale pulse to enhance blinking
    transition: {
      duration: 1.3,
      ease: 'easeOut',
      delay: Math.random() * 0.5, // Random initial delay for varied blinking
      repeat: Infinity, // Continuous blinking
      repeatType: 'loop',
      times: [0, 0.5, 1], // Timing for opacity and scale keyframes
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
      {/* MAPA BASE */}
      <Image
        src="/images/map/cm-map.webp"
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
              {/* Glow difuso externo */}
              <span className="absolute h-5 w-5 rounded-full bg-blue-500 opacity-30 blur-md"></span>

              {/* Anel médio */}
              <span className="absolute h-4 w-4 rounded-full bg-blue-400 opacity-70 blur-[2px]"></span>

              {/* Miolo branco brilhante */}
              <span className="relative h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"></span>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MapWithPoints;
