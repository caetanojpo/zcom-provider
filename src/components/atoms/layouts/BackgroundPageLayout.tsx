'use client';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Image from 'next/image';

interface BackgroundPageLayoutProps {
  children: ReactNode;
  backgroundImage: string;
  backgroundAlt: string;
  className?: string;
  backgroundColor?: string; // fallback color behind image (handles transparent edges)
}

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

function BackgroundPageLayout({
  children,
  backgroundImage,
  backgroundAlt,
  className = '',
  backgroundColor = '#000',
}: BackgroundPageLayoutProps) {
  return (
    <motion.div
      className={cn('relative flex  h-full w-screen flex-col italic', className)}
      initial="hidden"
      style={{ backgroundColor }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={backgroundVariants}
    >
      <Image src={backgroundImage} alt={backgroundAlt} fill className="object-cover" priority />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default BackgroundPageLayout;
