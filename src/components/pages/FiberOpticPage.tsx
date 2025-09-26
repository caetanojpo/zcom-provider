'use client';

import BackgroundPageLayout from '@/components/atoms/layouts/BackgroundPageLayout';
import FiberOpticPageHeader from '@/components/organisms/FiberOpticPageHeader';
import FiberOpticContent from '@/components/organisms/FiberOpticContent';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';

function FiberOpticPage() {
  return (
    <main
      role="main"
      aria-label="Página de Internet Fibra Óptica da Zcom"
      className="z-100 relative bg-gradient-to-r from-dark via-zcom-700 to-zcom-500" // Static gradient to prevent white flash
    >
      <DarkOverlay />
      <BackgroundPageLayout
        backgroundImage="/images/fibra/lines-fibra.webp"
        backgroundAlt="Linhas decorativas em tons de azul representando conexões de fibra óptica"
      >
        <FiberOpticPageHeader />
        <FiberOpticContent />
      </BackgroundPageLayout>
    </main>
  );
}

export default FiberOpticPage;
