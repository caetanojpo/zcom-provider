'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ClientImageProps {
  src: string;
  link: string;
  alt?: string;
  glowColor?: string; // Customizable glow color
  className?: string;
}

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // From bottom
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 90,
      damping: 15,
    },
  },
  hover: {
    filter: 'brightness(1.2) contrast(1.1)', // Subtle brightness/contrast boost
    boxShadow: '0 0 15px 3px var(--glow-color)', // Glow effect using CSS variable
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

function ClientImage({
  src,
  link,
  alt = '',
  glowColor = '#00FFFF', // Default to cyan (zcom-200)
  className = '',
}: ClientImageProps) {
  return (
    <motion.a
      className={cn('flex h-10 w-10 p items-center justify-center rounded-full', className)}
      whileHover="hover"
      style={{ '--glow-color': glowColor } as React.CSSProperties} // Pass glow color as CSS variable
      href={link}
      target={`_blank`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.a>
  );
}

export default ClientImage;
