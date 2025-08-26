import React from 'react';

type DarkOverlayProps = {
  percentage?: number;
};

function DarkOverlay({ percentage = 40 }: DarkOverlayProps) {
  return <div className={`absolute inset-0 bg-black/${percentage} pointer-events-none`} />;
}

export default DarkOverlay;