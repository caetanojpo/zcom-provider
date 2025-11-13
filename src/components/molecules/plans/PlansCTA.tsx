import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import Link from 'next/link';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

type PlansCTAProps = {
  title: string;
  ctaLink: string;
  // 1. Definir o tipo da nova prop
  setIsHovering: (isHovering: boolean) => void;
};

const ctaVariants: Variants = {
  hidden: { opacity: 0 }, // From bottom-left
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function PlansCTA({ title, ctaLink, setIsHovering }: PlansCTAProps) {
  // 2. Receber a prop
  return (
    <motion.div
      className="flex flex-col items-center"
      variants={ctaVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/*... (código comentado permanece o mesmo) ...*/}

      <Link
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        // 3. Adicionar os manipuladores de evento
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="absolute z-30 bottom-18 lg:bottom-16 flex h-12 w-48 scale-115 items-center justify-center rounded-4xl bg-gradient-to-r from-zcom-700 to-zcom-500 shadow-lg transition-all duration-150 ease-in-out hover:scale-120 focus:outline-none focus-visible:ring-4 focus-visible:ring-zcom-200 lg:bottom-24 lg:scale-135 lg:hover:scale-145 lg:w-70"
        aria-label={`Assine o plano ${title}`}
      >
        <Typography className="italic font-bold" variant="body-lg">
          {PLANS_PAGE_COPYWRITING.subscribe}
        </Typography>
      </Link>
    </motion.div>
  );
}

export default PlansCTA;
