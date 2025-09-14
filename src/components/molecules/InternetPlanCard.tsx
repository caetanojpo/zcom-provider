import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';
import { HERO_PAGE_COPYWRITING } from '@/data/copywriting/hero-page.data';

function InternetPlanCard() {
  return (
    <div className="flex flex-col gap-y-[1vw] italic overflow-hidden rounded-[2vw] bg-gradient-to-r from-zcom-700 to-zcom-500 px-[4vw] pt-[2vw] pb-[3vw] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)]">
      <div className="flex items-baseline gap-[1vw]">
        <Typography
          variant={'heading-4xl'}
          className={`text-zcom-200 font-black leading-none [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]`}
          style={{ fontSize: 'clamp(4.5rem, 6.5vw, 10rem)' }}
        >
          {HERO_PAGE_COPYWRITING.speed}
        </Typography>
        <Typography
          variant={'heading-2xl'}
          className={'font-bold text-white leading-none'}
          style={{ fontSize: 'clamp(2rem, 3vw, 5.5rem)' }}
        >
          mega
        </Typography>
      </div>
      <div className="w-[50vw] sm:w-[30vw] md:w-[20vw]">
        <Typography
          variant={'heading-md'}
          className={'font-bold text-white'}
          style={{ fontSize: 'clamp(1rem, 1.5vw, 2.5rem)' }}
        >
          {HERO_PAGE_COPYWRITING.helperText}
        </Typography>
      </div>
      <div className="flex">
        <Typography
          variant="body-md"
          className={'text-white align-text-bottom font-normal'}
          style={{ fontSize: 'clamp(1rem, .5vw, 2rem)' }}
        >
          {HERO_PAGE_COPYWRITING.currencySymbol}
        </Typography>
        <div className="flex items-baseline ml-[0.25vw]">
          <Typography
            variant={'heading-2xl'}
            className={`text-zcom-200 font-black [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]`}
            style={{ fontSize: 'clamp(3rem, 5vw, 6rem)' }}
          >
            {HERO_PAGE_COPYWRITING.price}
          </Typography>
          <Typography
            variant={'heading-md'}
            className={`text-zcom-200 font-black [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]`}
            style={{ fontSize: 'clamp(2rem, 2.5vw, 5rem)' }}
          >
            {HERO_PAGE_COPYWRITING.decimalPrice}
          </Typography>
          <Typography
            variant="body-md"
            className={'text-white font-normal ml-[0.25vw]'}
            style={{ fontSize: 'clamp(1rem, .5vw, 2rem)' }}
          >
            / {HERO_PAGE_COPYWRITING.recurrence}
          </Typography>
        </div>
      </div>
      <div className="my-2">
        <TextButton href={'#'} className={'bg-zcom-200 rounded-[100px] px-[5vw] py-[1.5vw]'}>
          <Typography
            variant="heading-sm"
            className={'text-white h-full'}
            style={{ fontSize: 'clamp(1rem, 1.5vw, 2.5rem)' }}
          >
            Assine já
          </Typography>
        </TextButton>
      </div>
    </div>
  );
}

export default InternetPlanCard;
