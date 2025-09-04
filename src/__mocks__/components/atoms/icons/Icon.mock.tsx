import { JSX } from 'react';

export const mockIcon = (props: {
  className?: string;
  'aria-hidden'?: boolean;
  size?: string;
  variant?: string;
}): JSX.Element => {
  let mockClassName = 'inline-block select-none';

  switch (props.size) {
    case 'xs':
      mockClassName += ' w-5 h-5';
      break;
    case 'sm':
      mockClassName += ' w-6 h-6';
      break;
    case 'md':
      mockClassName += ' w-10 h-10';
      break;
    case 'lg':
      mockClassName += ' w-12 h-12';
      break;
    case 'xl':
      mockClassName += ' w-16 h-16 xl:w-32 xl:h-32';
      break;
    case 'xxl':
      mockClassName += ' w-32 h-32';
      break;
    default:
      mockClassName += ' w-10 h-10';
  }

  switch (props.variant) {
    case 'default':
      mockClassName += ' text-zcom hover:text-white';
      break;
    case 'white':
      mockClassName += ' text-white hover:text-zcom';
      break;
    default:
      mockClassName += ' text-zcom hover:text-white';
  }

  const finalClassName = props.className ? `${mockClassName} ${props.className}` : mockClassName;

  return <svg data-testid="icon" className={finalClassName} aria-hidden={props['aria-hidden']} />;
};

export default mockIcon;
