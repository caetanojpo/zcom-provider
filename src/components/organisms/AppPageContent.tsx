'use client';

import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { ZCOM_TV_ANDROID_LINK, ZCOM_TV_IOS_LINK } from '@/data/links.data';

interface AppPageContentProps {
  className?: string;
}

const appData = [
  {
    image: '/images/app/apple.webp',
    name: 'Apple',
    link: ZCOM_TV_IOS_LINK,
  },
  {
    image: '/images/app/android.webp',
    name: 'Play Store',
    link: ZCOM_TV_ANDROID_LINK,
  },
];

const contentVariants: Variants = {
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
  hidden: { opacity: 0, y: 100, scale: 0.95, rotate: 3 }, // From bottom-right with slight rotation
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 90,
      damping: 15,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 }, // From bottom with scale
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.5, // Delay for button to appear last
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const linkVariants: Variants = {
  initial: {
    scale: 1,
    filter: 'drop-shadow(0px 0px 0px rgba(59, 130, 246, 0))', // Cor base azul (invisível)
  },
  hover: {
    scale: 1.05, // Efeito de scale
    filter: 'drop-shadow(0px 4px 12px rgba(59, 130, 246, 0.5))', // Glow azul normal
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95, // Efeito ao clicar
  },
};

function AppPageContent({ className = '' }: AppPageContentProps) {
  return (
    <motion.section
      className={cn(
        'flex-1 flex mt-35 sm:mt-40 xl:mt-45 py-14 px-8 sm:px-10 md:px-15 z-40',
        className,
      )}
      aria-label="Informações sobre Internet 5G"
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

          {/* --- ATUALIZADO --- */}
          <motion.div className="my-2 h-full w-full flex gap-4 mt-8 relative  ">
            {appData.map((app) => (
              <motion.div
                key={app.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={'cursor-pointer'}
              >
                <Link href={app.link} target={'_blank'} className={'w-fit flex h-fit'}>
                  <Image src={app.image} alt={app.name} width={160} height={160} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {/* --- FIM DA ATUALIZAÇÃO --- */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AppPageContent;
