import { Typography } from '@/components/atoms/text/Typography';

interface FiberOpticPageHeaderProps {
  className?: string;
}

function FiberOpticPageHeader({ className = '' }: FiberOpticPageHeaderProps) {
  return (
    <header
      role="banner"
      aria-label="Cabeçalho da página de Internet Fibra Óptica"
      className={`relative flex-shrink-0 h-32 sm:h-40 md:h-48 ${className}`}
    >
      <div
        className={
          'w-[200px] sm:w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/4 pb-2 pt-0 pr-9 md:pr-14 lg:pr-10 absolute flex justify-end left-[-20px] top-[40px] bg-white text-zcom-200 rounded-4xl'
        }
        role="presentation"
      >
        <Typography
          component="h2"
          className="text-2xl md:text-5xl font-semibold tracking-tight"
          aria-label="Internet"
        >
          Internet
        </Typography>
      </div>

      <div
        className={
          'w-[300px] md:w-3/4 lg:w-[55%] xl:w-[40%] p-2 pr-6 md:p-6 md:pr-14 lg:pr-16 top-[70px] md:top-[90px] absolute flex justify-end left-[-50px] bg-zcom-200 text-white rounded-full'
        }
        role="presentation"
      >
        <Typography
          component="h1"
          className="text-3xl md:text-6xl font-semibold tracking-tight"
          aria-label="Fibra Óptica - Serviço de Internet de Alta Velocidade"
        >
          Fibra Óptica
        </Typography>
      </div>
    </header>
  );
}

export default FiberOpticPageHeader;
