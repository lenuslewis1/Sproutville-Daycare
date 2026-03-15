import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Programs } from '@/components/sections/Programs';
import { WhyUs } from '@/components/sections/WhyUs';

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-secondary/10 to-white py-16 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Programs</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
            Thoughtfully designed programs that nurture every stage of your child's development.
          </p>
        </div>
        <Programs />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
