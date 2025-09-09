import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/concatTailwind';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      'heading-sm': 'text-xl font-semibold leading-7 tracking-tight',
      'heading-md': 'text-2xl font-semibold leading-8 tracking-tight',
      'heading-lg': 'text-3xl font-semibold leading-9 tracking-tight',
      'heading-xl': 'text-4xl font-bold leading-10 tracking-tight',
      'heading-2xl': 'text-5xl font-bold leading-10 leading-tight tracking-tight',
      'heading-3xl': 'text-6xl font-bold leading-tight tracking-tight',
      'heading-4xl': 'text-7xl font-bold leading-tight tracking-tight',
      'heading-5xl': 'text-8xl font-bold leading-tight tracking-tight',
      'body-xs': 'text-xs leading-5',
      'body-sm': 'text-sm leading-6',
      'body-sm-medium': 'text-sm leading-6 font-medium',
      'body-md': 'text-base leading-7',
      'body-md-medium': 'text-base leading-7 font-medium',
      'body-lg': 'text-lg leading-7',
      'body-base': 'text-base leading-7',
      'sidebar-group': 'text-sm leading-6 font-semibold',
    },
  },
  defaultVariants: { variant: 'body-base' },
});

type As = React.ElementType;
type PolymorphicRef<T extends As> = React.ComponentPropsWithRef<T>['ref'];

type OwnProps<T extends As> = {
  component?: T;
} & VariantProps<typeof typographyVariants>;

export type TypographyProps<T extends As> = OwnProps<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof OwnProps<T> | 'ref'>;

export type TypographyVariant = VariantProps<typeof typographyVariants>['variant'];

function TypographyImpl<T extends As = 'span'>(
  { component, variant, className, ...rest }: TypographyProps<T>,
  ref: React.ForwardedRef<unknown>,
) {
  const Component = (component ?? 'span') as As;
  return (
    <Component
      ref={ref as PolymorphicRef<T>}
      className={cn(typographyVariants({ variant }), className)}
      {...rest}
    />
  );
}

type TypographyComponent = <T extends As = 'span'>(
  props: TypographyProps<T> & { ref?: PolymorphicRef<T> },
) => React.ReactElement | null;

export const Typography = React.forwardRef(TypographyImpl) as TypographyComponent;
