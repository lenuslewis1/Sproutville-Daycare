import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';
import { usePageMeta } from '@/hooks/use-page-meta';

export default function ContactPage() {
  usePageMeta({
    title: 'Get in Touch',
    description: 'Schedule a tour, ask questions, or start your enrollment journey at Sproutville Daycare today. We\'d love to meet you and your little one!',
    path: '/contact',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-secondary/10 to-white py-16 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">We'd Love to Meet You</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Get in Touch</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
            Schedule a tour, ask questions, or start your enrollment journey today.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
