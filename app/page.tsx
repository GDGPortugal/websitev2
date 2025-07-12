'use client';

import About from '@/components/about';
import Banner from '@/components/banner';
import CommunityCards from '@/components/comunity';
import EventsMaps from '@/components/events';
import { Footer } from '@/components/footer';
import Galery from '@/components/galery';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Banner />
      <About />
      <CommunityCards />
      <EventsMaps />
      <Galery />
      <Footer />
    </div>
  );
}
