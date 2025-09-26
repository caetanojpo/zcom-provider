import PlansPage from '@/components/pages/PlansPage';
import HeroPage from '@/components/pages/HeroPage';
import MapPage from '@/components/pages/MapPage';
import NavBar from '@/components/organisms/Navbar';
import FioFibraPage from '@/components/pages/FioFibraPage';
import FiberOpticPage from '@/components/pages/FiberOpticPage';
import Internet5GPage from '@/components/pages/Internet5GPage';
import PartnerPage from '@/components/pages/PartnerPage';
import Footer from '@/components/organisms/Footer';

export default function HomeDev() {
  return (
    <main className={'overflow-hidden relative'}>
      <NavBar />
      <HeroPage />
      <FiberOpticPage />
      <Internet5GPage />
      <PlansPage />
      <MapPage />
      <FioFibraPage />
      <PartnerPage />
      <Footer />
    </main>
  );
}
