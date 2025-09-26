import { Typography } from '@/components/atoms/text/Typography';

interface Internet5GPageHeaderProps {
  className?: string;
}

function Internet5GPageHeader({ className = '' }: Internet5GPageHeaderProps) {
  return (
    <header
      role="banner"
      aria-label="Cabeçalho da página de Internet Fibra Óptica"
      className={`relative flex-shrink-0 h-32 sm:h-40 md:h-48 ${className}`}
    >
      <div
        className={
          'w-3/4 md:w-[54%] lg:w-[35%] pb-2 pt-0 pl-14 absolute flex justify-items-start right-0 top-[40px] bg-white text-zcom-200 rounded-l-full'
        }
        role="presentation"
      >
        <Typography
          component="h2"
          className="text-4xl md:text-6xl font-semibold tracking-tight"
          aria-label="Internet"
        >
          Internet
        </Typography>
      </div>

      <div
        className={
          'w-2/3 md:w-1/2 lg:w-1/3 p-2 pl-6 absolute flex justify-items-start right-0 top-[80px] md:top-[100px] bg-zcom-200 text-white rounded-l-full'
        }
        role="presentation"
      >
        <Typography
          component="h1"
          className="text-6xl md:text-8xl font-semibold tracking-tight"
          aria-label="Fibra Óptica - Serviço de Internet de Alta Velocidade"
        >
          5G
        </Typography>
      </div>
    </header>
  );
}

export default Internet5GPageHeader;
