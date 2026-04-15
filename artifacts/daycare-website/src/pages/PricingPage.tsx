import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { usePageMeta } from '@/hooks/use-page-meta';

export default function PricingPage() {
  usePageMeta({
    title: 'Pricing Plans',
    description: 'Sproutville Daycare offers flexible, transparent pricing plans with no hidden fees — designed to fit your family\'s needs and budget. View our rates and FAQ.',
    path: '/pricing',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-secondary/10 to-white py-16 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Transparent & Simple</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Pricing Plans</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
            Flexible options to fit your family's needs, with no hidden fees.
          </p>
        </div>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
