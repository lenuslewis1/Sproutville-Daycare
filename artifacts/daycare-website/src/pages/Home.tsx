import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyUs } from '@/components/sections/WhyUs';
import { Programs } from '@/components/sections/Programs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { usePageMeta } from '@/hooks/use-page-meta';

export default function Home() {
  usePageMeta({
    title: 'Where Small Steps Lead to Big Discoveries',
    description: 'Sproutville Daycare offers a warm, safe, and inspiring environment for children ages 3 months to 5 years. Nurturing confident, curious, and happy learners through love, care, and purposeful play. Now enrolling!',
    path: '/',
  });

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
