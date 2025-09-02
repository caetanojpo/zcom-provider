// TextButton.tsx
import Link from 'next/link';
import { Typography, typographyVariants } from '@/components/atoms/text/Typography';
import type { VariantProps } from 'class-variance-authority';

type TypographyVariant = VariantProps<typeof typographyVariants>['variant'];

type TextButtonProps = {
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  variant?: TypographyVariant;
  className?: string;
  ariaLabel?: string;
};

function TextButton({
  href,
  children,
  target = '_self',
  variant = 'body-md',
  className,
  ariaLabel,
}: TextButtonProps) {
  const label =
    ariaLabel ??
    (typeof children === 'string' && target === '_blank'
      ? `${children} — abre em nova aba`
      : undefined);

  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={
        className ??
        'inline-flex items-center justify-center rounded-full p-2 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zcom'
      }
    >
      <Typography variant={variant}>{children}</Typography>
    </Link>
  );
}

export default TextButton;
