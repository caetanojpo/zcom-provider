import React from 'react';
import { Typography } from '@/components/atoms/text/Typography';

const MapFocusHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[20%]">
      <div className="flex bg-white w-[50%] md:max-w-[280px] h-full text-zcom-500 font-bold rounded-tr-2xl md:rounded-tr-4xl items-center justify-end">
        <Typography className="text-[18px] md:text-[30px] mr-6">Nosso foco é</Typography>
      </div>
      <div className="flex w-[65%] md:max-w-[380px] p-2 rounded-tr-4xl rounded-br-4xl bg-gradient-to-l from-zcom-500 to-dark h-full text-white font-bold items-center justify-end">
        <Typography className="text-[23px] md:text-[40px] mr-6">Cândido Mota</Typography>
      </div>
    </div>
  );
};

export default MapFocusHeader;
