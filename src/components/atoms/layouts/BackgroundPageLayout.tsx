import { ReactNode } from 'react';

interface BackgroundPageLayoutProps {
  children: ReactNode;
  backgroundImage: string;
  backgroundAlt: string;
  className?: string;
}

function BackgroundPageLayout({
  children,
  backgroundImage,
  backgroundAlt,
  className = '',
}: BackgroundPageLayoutProps) {
  return (
    <div
      className={`min-h-screen w-screen bg-cover bg-center flex flex-col italic ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      role="img"
      aria-label={backgroundAlt}
    >
      {children}
    </div>
  );
}

export default BackgroundPageLayout;
