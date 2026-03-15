import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Gallery } from '@/components/sections/Gallery';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-secondary/10 to-white py-16 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">A Peek Inside</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Gallery</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
            Moments of joy, creativity, and discovery — every day at Bright Horizons.
          </p>
        </div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
