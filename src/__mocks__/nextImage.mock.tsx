import React, { JSX } from 'react';
import type { StaticImageData } from 'next/image';

export type NextImageMockProps = {
  src: string | StaticImageData;
  alt?: string;
  priority?: boolean | string;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
  quality?: number | string;
  unoptimized?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function nextImageMock({
  src,
  alt,
  priority,
  placeholder,
  sizes,
  quality,
  unoptimized,
  ...imgProps
}: NextImageMockProps): JSX.Element {
  const resolvedSrc = typeof src === 'string' ? src : ((src as StaticImageData)?.src ?? '');
  return (
    <img src={resolvedSrc} alt={alt} {...(imgProps as React.ImgHTMLAttributes<HTMLImageElement>)} />
  );
}
