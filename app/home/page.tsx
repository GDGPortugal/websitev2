import About from '@/components/about';
import Banner from '@/components/banner';
import CommunityCards from '@/components/comunity';
import PortugalMap from '@/components/mapgdg';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <CommunityCards />
      <PortugalMap />
    </>
  );
}
