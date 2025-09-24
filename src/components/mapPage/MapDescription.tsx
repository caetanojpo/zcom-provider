import React from 'react';
import { Typography } from '@/components/atoms/text/Typography';

const MapDescription: React.FC = () => {
  return (
    <div className="flex flex-col py-4 px-8 text-center gap-6 italic">
      <div>
        <Typography className="text-[16px] md:text-[19px] xl:text-[24px]">
          Trouxemos <span className="text-zcom-500">inovação</span> e{' '}
          <span className="text-zcom-500">qualidade</span> para nossa amada terra!
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-[12px] md:text-[13px] xl:text-[16px]">
          Nosso foco está em suprir nossa cidade, fomos{' '}
          <span className="text-zcom-500">pioneiros</span> em implementar a fibra óptica através do
          grupo <span className="text-zcom-500">Fiofibra</span> e seremos pioneiros novamente em
          trazer a Internet 5G para nossa cidade!
        </Typography>
        <Typography className="text-[12px] md:text-[13px] xl:text-[16px]">
          Nosso foco está em suprir a demanda da cidade, priorizando o melhor atendimento, serviços
          e entrega de velocidade!
        </Typography>
      </div>
    </div>
  );
};

export default MapDescription;
