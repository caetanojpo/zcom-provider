import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';

interface Internet5GContentProps {
  className?: string;
}

function Internet5GContent({ className = '' }: Internet5GContentProps) {
  return (
    <section
      className={`flex-1 flex justify-end py-14 px-8 sm:px-10 md:px-15 ${className}`}
      aria-label="Informações sobre Internet 5G"
    >
      <div className="w-full md:w-1/2 lg:1/3 max-w-4xl text-white text-end">
        <div className="flex flex-col gap-6 items-end">
          <Typography
            component="h2"
            className="text-xl sm:text-2xl font-semibold leading-7 sm:leading-8 tracking-tight"
            aria-describedby="fiber-optic-description"
          >
            O primeiro provedor de internet a trazer o{' '}
            <span className="text-zcom-200">modelo 5G</span> para nossa cidade.
          </Typography>

          <div id="fiber-optic-description" className="space-y-4">
            <Typography
              component="p"
              variant="body-lg"
              aria-label="Informação sobre a Zcom e o grupo Fiofibra"
            >
              Além de qualidade, rapidez e confiabilidade, a Zcom também permite que você tenha{' '}
              <span className="text-zcom-200">mobilidade</span> ao usar o seu plano.
            </Typography>

            <Typography
              component="p"
              variant="body-lg"
              aria-label="Garantia de qualidade do serviço"
            >
              Leve a sua internet para onde você estiver, no seu carro, sítio, viagem, onde estiver
              a Zcom estará com você nos seu{' '}
              <span className="text-zcom-200">melhores momentos</span>!
            </Typography>
          </div>

          <TextButton
            href="#"
            target="_blank"
            variant="heading-md"
            className="bg-zcom-200 px-4 py-2 rounded-4xl text-center w-full max-w-xs mt-4 sm:mt-5 focus:outline-none focus:ring-2 focus:ring-zcom-200 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 hover:bg-zcom-300"
            aria-label="Conheça sobre nossos planos de Internet 5G"
          >
            Conheça
          </TextButton>
        </div>
      </div>
    </section>
  );
}

export default Internet5GContent;
