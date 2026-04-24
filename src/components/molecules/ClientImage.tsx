'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  ANIMATION_DURATION_ELEMENT,
  ANIMATION_DURATION_HOVER,
  SPRING_STIFFNESS_MEDIUM,
  SPRING_DAMPING_LIGHT,
  VIEWPORT_ANIMATE_ONCE,
  VIEWPORT_AMOUNT_ELEMENT,
  HOVER_BRIGHTNESS_FILTER,
  GLOW_BOX_SHADOW,
} from '@/constants/animation.constants';
import { DEFAULT_GLOW_COLOR, CLIENT_IMAGE_SIZE } from '@/constants/ui.constants';

interface ClientImageProps {
  src: string;
  link: string;
  alt?: string;
  glowColor?: string;
  className?: string;
}

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION_ELEMENT,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_MEDIUM,
      damping: SPRING_DAMPING_LIGHT,
    },
  },
  hover: {
    filter: HOVER_BRIGHTNESS_FILTER,
    boxShadow: GLOW_BOX_SHADOW,
    transition: {
      duration: ANIMATION_DURATION_HOVER,
      ease: 'easeOut',
    },
  },
};

function ClientImage({
  src,
  link,
  alt = '',
  glowColor = DEFAULT_GLOW_COLOR,
  className = '',
}: ClientImageProps) {
  return (
    <motion.a
      className={cn('flex h-22 w-22 items-center justify-center rounded-full', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: VIEWPORT_ANIMATE_ONCE, amount: VIEWPORT_AMOUNT_ELEMENT }}
      variants={imageVariants}
      whileHover="hover"
      style={{ '--glow-color': glowColor } as React.CSSProperties}
      href={link}
      target="_blank"
    >
      <Image
        src={src}
        alt={alt}
        width={CLIENT_IMAGE_SIZE}
        height={CLIENT_IMAGE_SIZE}
        className="object-contain w-full h-full rounded-full"
      />
    </motion.a>
  );
}

export default ClientImage;
