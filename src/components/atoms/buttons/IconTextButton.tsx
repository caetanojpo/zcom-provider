import Link from 'next/link';
import { Icon, IconProps } from '@/components/atoms/icons/Icon';
import { CircleQuestionMark } from 'lucide-react';
import { SVGIcon } from '@/types/svg';
import { Typography, TypographyVariant } from '@/components/atoms/text/Typography';
import { cn } from '@/lib/concatTailwind';

type IconTextButtonProps = {
  name?: string;
  link: string;
  target?: string;
  icon?: SVGIcon;
  text: string;
  textVariant?: TypographyVariant;
  textClassName?: string;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
} & Omit<IconProps, 'icon'>;

const gapVariants = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
};

function IconTextButton({ 
  name, 
  link, 
  target, 
  icon, 
  text,
  textVariant = 'body-sm',
  textClassName,
  gap = 'md',
  className,
  variant, 
  size 
}: IconTextButtonProps) {
  const label = name ? `${name} — abre em nova aba` : 'Abrir link externo';

  return (
    <Link
      href={link}
      target={target ?? '_blank'}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={cn(
        "inline-flex items-center transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zcom",
        gapVariants[gap],
        className
      )}
    >
      <div className="inline-flex items-center justify-center rounded-full p-1">
        <Icon icon={icon ?? CircleQuestionMark} variant={variant} size={size} aria-hidden={false} />
      </div>
      <Typography variant={textVariant} className={textClassName}>
        {text}
      </Typography>
    </Link>
  );
}

export default IconTextButton;
