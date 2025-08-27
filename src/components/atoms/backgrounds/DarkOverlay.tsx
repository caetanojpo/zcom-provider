import React from 'react';

type DarkOverlayProps = {
  percentage?: number;
};

function DarkOverlay({ percentage = 30 }: DarkOverlayProps) {
  return (
    <div
      data-testid="dark-overlay"
      className={`absolute inset-0 pointer-events-none`}
      style={{ backgroundColor: `rgba(0, 0, 0, ${percentage / 100})` }}
    />
  );
}

export default DarkOverlay;
