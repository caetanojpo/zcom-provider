import React from 'react';
import { SVGIcon } from '@/types/svg';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: SVGIcon;
  sizePx?: number;
  decorative?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconSVG,
  className = '',
  sizePx,
  decorative = true,
  ...props
}) => {
  const ariaHidden = decorative ? true : (props['aria-hidden'] ?? false);

  return (
    <IconSVG
      {...props}
      className={`inline-block align-middle ${className}`}
      style={sizePx ? { width: sizePx, height: sizePx, ...props.style } : props.style}
      aria-hidden={ariaHidden}
      focusable="false"
    />
  );
};
