import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import Link from 'next/link';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

type PlansCTAProps = {
  title: string;
  ctaLink: string;
};

const ctaVariants: Variants = {
  hidden: { opacity: 0 }, // From bottom-left
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function PlansCTA({ title, ctaLink }: PlansCTAProps) {
  return (
    <motion.div className="flex flex-col items-center" variants={ctaVariants}>
      <div className="absolute z-20 bottom-28 flex h-8 w-40 items-center justify-center rounded-t-3xl bg-white text-zcom-500 text-center font-bold italic lg:bottom-36 lg:h-12 lg:w-60">
        <Typography variant="body-md" className="lg:text-[24px]">
          {title}
        </Typography>
      </div>

      <Link
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 bottom-16 flex h-12 w-48 scale-115 items-center justify-center rounded-4xl bg-gradient-to-r from-zcom-700 to-zcom-500 shadow-lg transition-all duration-150 ease-in-out hover:scale-120 focus:outline-none focus-visible:ring-4 focus-visible:ring-zcom-200 lg:bottom-24 lg:scale-135 lg:hover:scale-145 lg:w-70"
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
