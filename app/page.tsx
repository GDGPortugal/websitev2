import CommunityCards from '@/components/comunity';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import Galery from '@/components/galery';
import Banner from '@/components/banner';
import About from '@/components/about';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Banner />
      <About />
      <CommunityCards />
      <Galery />
      <Footer />
    </div>
  );
}
