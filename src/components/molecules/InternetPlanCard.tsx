import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';
import { HERO_PAGE_COPYWRITING } from '@/data/copywriting/hero-page.data';
import { COMERCIAL_WHATSAPP } from '@/data/links.data';

function InternetPlanCard() {
  return (
    <section
      aria-labelledby="plan-heading"
      className="flex flex-col gap-[5px]  italic rounded-[1.5rem] bg-gradient-to-r from-zcom-700 to-zcom-500 pl-[1.5rem] lg:pr-[1.5rem] py-[2dvh] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)] w-fit"
    >
      <h2 id="plan-heading" className="sr-only">
        Oferta de Plano de Internet
      </h2>

      <div
        className="flex items-baseline gap-[5px]"
        aria-label={`Velocidade da internet: ${HERO_PAGE_COPYWRITING.speed} megabits por segundo`}
      >
        <Typography
          className={`text-[48px] lg:text-[88px] text-zcom-200 font-black leading-none [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]`}
          aria-hidden="true"
        >
          {HERO_PAGE_COPYWRITING.speed}
        </Typography>
        <Typography
          className={
            'text-[28px] lg:text-[48px] font-bold text-white leading-none [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]'
          }
          aria-hidden="true"
        >
          mega
        </Typography>
      </div>
      <div className="w-[80%]">
        <Typography className={'text-[12px] lg:text-[24px] xl:text-[20px] font-bold text-white'}>
          {HERO_PAGE_COPYWRITING.helperText}
        </Typography>
      </div>
      <div
        className="flex relative"
        aria-label={`Preço mensal: ${HERO_PAGE_COPYWRITING.currencySymbol}${HERO_PAGE_COPYWRITING.price},${HERO_PAGE_COPYWRITING.decimalPrice} por ${HERO_PAGE_COPYWRITING.recurrence}`}
      >
        <Typography
          className={'text-[10px] lg:text-[22px] text-white ' + '' + ' font-normal'}
          aria-hidden="true"
        >
          {HERO_PAGE_COPYWRITING.currencySymbol}
        </Typography>
        <div className="flex items-baseline ml-[0.25vw] leading-8 lg:leading-16">
          <Typography
            className={`text-[32px] lg:text-[64px] text-zcom-200 font-black [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]`}
            aria-hidden="true"
          >
            {HERO_PAGE_COPYWRITING.price}
          </Typography>
          <Typography
            className={`text-[20px] lg:text-[48px] text-zcom-200 font-black [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]`}
            aria-hidden="true"
          >
            {HERO_PAGE_COPYWRITING.decimalPrice}
          </Typography>
          <Typography
            variant="body-lg"
            className={'text-[16px] lg:text-[32px] text-white font-normal ml-[0.25vw]'}
            aria-hidden="true"
          >
            / {HERO_PAGE_COPYWRITING.recurrence}
          </Typography>
        </div>
      </div>
      <div className="my-2 hover:scale-105 ease-in-out duration-150">
        <TextButton
          href={COMERCIAL_WHATSAPP}
          variant={'heading-sm'}
          className={
            'text-white bg-zcom-200 rounded-[100px] px-[6dvw] py-[1.5dvh] lg:py-[1.2rem] shadow-md '
          }
          ariaLabel={`Assinar plano de internet de ${HERO_PAGE_COPYWRITING.speed} mega por ${HERO_PAGE_COPYWRITING.currencySymbol}${HERO_PAGE_COPYWRITING.price},${HERO_PAGE_COPYWRITING.decimalPrice} por ${HERO_PAGE_COPYWRITING.recurrence}`}
        >
          Assine já
        </TextButton>
      </div>
    </section>
  );
}

export default InternetPlanCard;
