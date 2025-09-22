import { Typography } from '@/components/atoms/text/Typography';
import TextButton from '@/components/atoms/buttons/TextButton';

interface FiberOpticContentProps {
  className?: string;
}

function FiberOpticContent({ className = '' }: FiberOpticContentProps) {
  return (
    <section
      className={`flex-1 flex px-12 py-14 sm:px-6 md:px-8 lg:px-12 ${className}`}
      aria-label="Informações sobre Internet Fibra Óptica"
    >
      <div className="w-full md:w-1/2 lg:1/3 max-w-4xl text-white">
        <div className="flex flex-col justify-start gap-6">
          <Typography
            component="h2"
            className="text-xl sm:text-2xl font-semibold leading-7 sm:leading-8 tracking-tight"
            aria-describedby="fiber-optic-description"
          >
            <span className="text-zcom-200">Rapidez</span> e{' '}
            <span className="text-zcom-200">conexão</span> de confiança, a sua melhor opção em
            internet fibra óptica
          </Typography>

          <div id="fiber-optic-description" className="space-y-4">
            <Typography
              component="p"
              variant="body-lg"
              aria-label="Informação sobre a Zcom e o grupo Fiofibra"
            >
              A Zcom faz parte do grupo Fiofibra, o maior implementador de fibra óptica da região.{' '}
              <span className="text-zcom-200">Sua internet vindo direto da Fonte!</span>
            </Typography>

            <Typography
              component="p"
              variant="body-lg"
              aria-label="Garantia de qualidade do serviço"
            >
              Qualidade, desde a implementação da estrutura, até a conexão ao seu computador e
              celular
            </Typography>
          </div>

          <TextButton
            href="#"
            target="_blank"
            variant="heading-md"
            className="bg-zcom-200 px-4 py-2 rounded-4xl text-center w-full max-w-xs mt-4 sm:mt-5 focus:outline-none focus:ring-2 focus:ring-zcom-200 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 hover:bg-zcom-300"
            aria-label="Saiba mais sobre nossos planos de Internet Fibra Óptica"
          >
            Saiba mais
          </TextButton>
        </div>
      </div>
    </section>
  );
}

export default FiberOpticContent;
