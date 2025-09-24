import React from 'react';
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

const MapWithPoints: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[1/1] xl:aspect-[10/5] ${className}`}>
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
          <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
            <span className="relative flex items-center justify-center">
              {/* Glow difuso externo */}
              <span className="absolute h-5 w-5 rounded-full bg-blue-500 opacity-30 blur-md"></span>

              {/* Anel médio */}
              <span className="absolute h-4 w-4 rounded-full bg-blue-400 opacity-70 blur-[2px]"></span>

              {/* Miolo branco brilhante */}
              <span className="relative h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapWithPoints;
