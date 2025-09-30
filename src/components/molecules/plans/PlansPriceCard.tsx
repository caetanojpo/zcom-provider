import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/atoms/text/Typography';
import { RecurrenceEnum } from '@/enums/Recurrence.enum';
import { PLANS_PAGE_COPYWRITING } from '@/data/copywriting/plans-page.data';

type PlansPriceCardProps = {
  price: string;
  decimalPrice: string;
  recurrence: RecurrenceEnum;
};

const priceVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: 50 }, // From bottom-right
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

function PlansPriceCard({ price, decimalPrice, recurrence }: PlansPriceCardProps) {
  return (
    <motion.div
      className="relative mt-8 md:mt-4 flex h-20 w-48 flex-col items-center justify-end gap-1 rounded-2xl bg-white px-4 py-2 shadow-lg text-black lg:h-32 lg:w-80 lg:gap-4"
      variants={priceVariants}
    >
      <div>
        <Typography variant="body-md" className="italic font-bold">
          {PLANS_PAGE_COPYWRITING.helperPriceText}
        </Typography>
      </div>
      <div className="relative flex h-fit w-full justify-center italic">
        <div className="flex items-end">
          <Typography variant="body-sm" className="mr-1 lg:text-[17px]">
            {PLANS_PAGE_COPYWRITING.currencySymbol}
          </Typography>
        </div>
        <div className="relative flex items-end justify-center gap-1">
          <Typography
            variant="heading-xl"
            className="font-black leading-6 text-zcom-500 lg:text-[60px]"
          >
            {price}
            <span className="text-[18px] lg:text-[27px]">{decimalPrice}</span>
          </Typography>
          <Typography variant="body-sm" className="lg:text-[19px]">
            / {recurrence}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
}

export default PlansPriceCard;
