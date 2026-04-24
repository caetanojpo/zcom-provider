import React from 'react';
import { DARK_OVERLAY_DEFAULT_PERCENTAGE } from '@/constants/ui.constants';

type DarkOverlayProps = {
  percentage?: number;
};

function DarkOverlay({ percentage = DARK_OVERLAY_DEFAULT_PERCENTAGE }: DarkOverlayProps) {
  return (
    <div
      data-testid="dark-overlay"
      className={`absolute inset-0 pointer-events-none`}
      style={{ backgroundColor: `rgba(0, 0, 0, ${percentage / 100})` }}
    />
  );
}

export default DarkOverlay;
