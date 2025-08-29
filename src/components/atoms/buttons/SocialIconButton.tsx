import Link from 'next/link';
import { Icon, IconProps } from '@/components/atoms/icons/Icon';
import { CircleQuestionMark } from 'lucide-react';
import { SVGIcon } from '@/types/svg';

type SocialIconButtonProps = {
  name?: string;
  link: string;
  target?: string;
  icon?: SVGIcon;
} & Omit<IconProps, 'icon'>;

function SocialIconButton({ name, link, target, icon, variant, size }: SocialIconButtonProps) {
  const label = name ? `${name} — abre em nova aba` : 'Abrir link externo';

  return (
    <Link
      href={link}
      target={target ?? '_blank'}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full p-2 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zcom"
    >
      <Icon icon={icon ?? CircleQuestionMark} variant={variant} size={size} aria-hidden={false} />
    </Link>
  );
}

export default SocialIconButton;
