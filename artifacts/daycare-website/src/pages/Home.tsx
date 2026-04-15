import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyUs } from '@/components/sections/WhyUs';
import { Programs } from '@/components/sections/Programs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyUs />
        <Programs />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
