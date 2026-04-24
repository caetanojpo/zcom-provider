'use client';

import BackgroundPageLayout from '@/components/atoms/layouts/BackgroundPageLayout';
import FiberOpticPageHeader from '@/components/organisms/FiberOpticPageHeader';
import FiberOpticContent from '@/components/organisms/FiberOpticContent';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import { SECTION_ID_FIBER } from '@/constants/sections.constants';

function FiberOpticPage() {
  return (
    <main
      id={SECTION_ID_FIBER}
      role="main"
      aria-label="Página de Internet Fibra Óptica da Zcom"
      className="z-100 relative bg-gradient-to-r from-dark via-zcom-700 to-zcom-500 h-full w-full xl:h-[100dvh]"
    >
      <DarkOverlay />
      <BackgroundPageLayout
        backgroundImage={IMAGE_SRC.fiberOptic.decorativeLines}
        backgroundAlt="Linhas decorativas em tons de azul representando conexões de fibra óptica"
      >
        <FiberOpticPageHeader />
        <FiberOpticContent />
      </BackgroundPageLayout>
    </main>
  );
}

export default FiberOpticPage;
