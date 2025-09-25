import PlansPage from '@/components/pages/PlansPage';
import HeroPage from '@/components/pages/HeroPage';
import MapPage from '@/components/pages/MapPage';
import NavBar from '@/components/organisms/Navbar';
import FioFibraPage from '@/components/pages/FioFibraPage';
import FiberOpticPage from '@/components/pages/FiberOpticPage';
import PartnerPage from '@/components/pages/PartnerPage';

export default function HomeDev() {
  return (
    <main className={'overflow-hidden relative'}>
      <NavBar />
      <HeroPage />
      <FiberOpticPage />
      <PlansPage />
      <MapPage />
      <FioFibraPage />
      <PartnerPage />
    </main>
  );
}
