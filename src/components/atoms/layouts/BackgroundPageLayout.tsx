import { ReactNode } from 'react';

interface BackgroundPageLayoutProps {
  children: ReactNode;
  backgroundImage: string;
  backgroundAlt: string;
  className?: string;
  backgroundColor?: string; // fallback color behind image (handles transparent edges)
}

function BackgroundPageLayout({
  children,
  backgroundImage,
  backgroundAlt,
  className = '',
  backgroundColor = '#000',
}: BackgroundPageLayoutProps) {
  return (
    <div
      className={`min-h-dvh min-h-screen w-full bg-cover bg-center flex flex-col italic ${className}`}
      style={{ backgroundColor, backgroundImage: `url('${backgroundImage}')` }}
      role="img"
      aria-label={backgroundAlt}
    >
      {children}
    </div>
  );
}

export default BackgroundPageLayout;
