'use client';

import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { ZCOM_TV_ANDROID_LINK, ZCOM_TV_IOS_LINK } from '@/data/links.data';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import {
  ANIMATION_DURATION_STAGGER_CONTAINER,
  ANIMATION_DURATION_PRICE_CARD,
  ANIMATION_DURATION_HOVER,
  ANIMATION_STAGGER_DEFAULT,
  SPRING_STIFFNESS_MEDIUM,
  SPRING_DAMPING_LIGHT,
} from '@/constants/animation.constants';
import { APP_STORE_BADGE_SIZE, LINK_TARGET_BLANK } from '@/constants/ui.constants';

interface AppPageContentProps {
  className?: string;
}

const appData = [
  {
    image: IMAGE_SRC.app.appleBadge,
    name: 'Apple',
    link: ZCOM_TV_IOS_LINK,
  },
  {
    image: IMAGE_SRC.app.androidBadge,
    name: 'Play Store',
    link: ZCOM_TV_ANDROID_LINK,
  },
];

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION_STAGGER_CONTAINER,
      ease: 'easeOut',
      staggerChildren: ANIMATION_STAGGER_DEFAULT,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95, rotate: 3 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATION_PRICE_CARD,
      ease: 'easeOut',
      type: 'spring',
      stiffness: SPRING_STIFFNESS_MEDIUM,
      damping: SPRING_DAMPING_LIGHT,
    },
  },
};

const linkVariants: Variants = {
  initial: {
    scale: 1,
    filter: 'drop-shadow(0px 0px 0px rgba(59, 130, 246, 0))',
  },
  hover: {
    scale: 1.05,
    filter: 'drop-shadow(0px 4px 12px rgba(59, 130, 246, 0.5))',
    transition: {
      duration: ANIMATION_DURATION_HOVER,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

function AppPageContent({ className = '' }: AppPageContentProps) {
  return (
    <motion.section
      className={cn(
        'flex-1 flex mt-35 sm:mt-40 xl:mt-45 py-14 px-8 sm:px-10 md:px-15 z-40',
        className,
      )}
      aria-label="Informações sobre o aplicativo ZCOM TV"
      initial="hidden"
      whileInView="visible"
      variants={contentVariants}
    >
      <motion.div className="w-full text-white text-justify">
        <motion.div className="flex flex-col  italic" variants={childVariants}>
          <Typography
            component="h2"
            className="text-xl sm:text-2xl font-semibold leading-7 sm:leading-8 tracking-tight"
            aria-describedby="fiber-optic-description"
          >
            Assista à 171 canais e
          </Typography>

          <motion.div id="fiber-optic-description" className="space-y-4" variants={childVariants}>
            <Typography
              component="p"
              variant="body-lg"
              aria-label="Informação sobre a Zcom e o grupo Fiofibra"
            >
              + de 2500 filmes
            </Typography>

            <Typography
              component="p"
              variant="body-lg"
              aria-label="Garantia de qualidade do serviço"
            >
              Tudo na palma da sua mão!
            </Typography>
          </motion.div>

          <motion.div className="my-2 h-full w-full flex gap-4 mt-8 relative">
            {appData.map((app) => (
              <motion.div
                key={app.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="cursor-pointer"
              >
                <Link href={app.link} target={LINK_TARGET_BLANK} className="w-fit flex h-fit">
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={APP_STORE_BADGE_SIZE}
                    height={APP_STORE_BADGE_SIZE}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AppPageContent;
