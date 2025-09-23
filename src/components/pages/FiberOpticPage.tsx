import BackgroundPageLayout from '@/components/atoms/layouts/BackgroundPageLayout';
import FiberOpticPageHeader from '@/components/organisms/FiberOpticPageHeader';
import FiberOpticContent from '@/components/organisms/FiberOpticContent';

function FiberOpticPage() {
  return (
    <main role="main" aria-label="Página de Internet Fibra Óptica da Zcom">
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
