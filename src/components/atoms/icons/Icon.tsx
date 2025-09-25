import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { SVGIcon } from '@/types/svg';
import { cn } from '@/lib/utils';

export const iconVariants = cva('inline-block select-none', {
  variants: {
    size: {
      xs: 'w-5 h-5',
      sm: 'w-6 h-6',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16 xl:w-32 xl:h-32',
      xxl: 'w-32 h-32',
    },
    variant: {
      default: 'text-zcom-500 hover:text-white',
      primary: 'text-white hover:text-zcom-500',
      white: 'text-white hover:text-white',
      lightZcom: 'text-zcom-200 hover:text-white',
      iconFooter: 'text-blue-600',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'className' | 'style' | 'width' | 'height' | 'color'>,
    VariantProps<typeof iconVariants> {
  icon: SVGIcon;
  decorative?: boolean;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconSVG,
  variant,
  size,
  decorative = true,
  className,
  ...props
}) => {
  const ariaHidden = decorative ? true : (props['aria-hidden'] ?? false);

  return (
    <IconSVG
      data-testid="icon"
      {...props}
      aria-hidden={ariaHidden}
      focusable="false"
      className={cn(iconVariants({ variant, size }), className)}
    />
  );
};
