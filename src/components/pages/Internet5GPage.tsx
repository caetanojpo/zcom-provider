'use client';

import { motion, Variants } from 'framer-motion';
import Internet5GPageHeader from '@/components/organisms/Internet5GPageHeader';
import Internet5GContent from '@/components/organisms/Internet5GContent';
import Image from 'next/image';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { cn } from '@/lib/utils';

// const sectionVariants: Variants = {
// 	hidden: { opacity: 0, scale: 0.98 },
// 	visible: {
// 		opacity: 1,
// 		scale: 1,
// 		transition: {
// 			duration: 0.8,
// 			ease: 'easeOut',
// 			staggerChildren: 0.3,
// 		},
// 	},
// };

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1, rotate: 2 }, // Subtle rotation for dynamic entry
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 90,
      damping: 20,
    },
  },
};

function Internet5GPage() {
  return (
    <motion.main
      id={'5g'}
      aria-label="Página de Internet 5G da Zcom"
      className={cn(
        'relative bg-gradient-to-r from-dark via-zcom-700 to-zcom-500 flex h-full w-full xl:h-[100dvh] justify-end',
      )}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="absolute w-full h-full">
        <Image
          src="/images/5g/bg-5g.webp" // Replace with actual path for bg-bg-5g
          alt="Fundo decorativo para Internet 5G"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <DarkOverlay />

      <motion.div
        className="hidden xl:flex absolute bottom-[-3dvh] left-[-33dvw] h-full w-full z-20"
        aria-hidden="true"
        variants={backgroundVariants}
      >
        <Image
          src="/images/5g/lines-5g.webp"
          alt="Linhas decorativas representando conexões 5G"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </motion.div>
      <div className="z-20 w-full xl:w-[60%] flex flex-col">
        <Internet5GPageHeader />
        <Internet5GContent />
      </div>
    </motion.main>
  );
}

export default Internet5GPage;
