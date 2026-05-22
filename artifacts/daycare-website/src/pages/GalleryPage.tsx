import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Gallery } from '@/components/sections/Gallery';
import { usePageMeta } from '@/hooks/use-page-meta';

type GalleryPageProps = {
  group?: 'events' | 'normal-images';
};

const galleryPageContent = {
  events: {
    title: 'Events Gallery',
    description: 'Special events and shared celebrations at Sproutville Daycare.',
    path: '/gallery/events',
  },
  'normal-images': {
    title: 'Everyday Gallery',
    description: 'Everyday classroom, learning, and play moments at Sproutville Daycare.',
    path: '/gallery/normal-images',
  },
};

export default function GalleryPage({ group }: GalleryPageProps) {
  const pageContent = group ? galleryPageContent[group] : {
    title: 'Our Gallery',
    description: 'Moments of joy, creativity, and discovery every day at Sproutville Daycare.',
    path: '/gallery',
  };

  usePageMeta({
    title: pageContent.title,
    description: pageContent.description,
    path: pageContent.path,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-secondary/10 to-white py-16 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">A Peek Inside</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{pageContent.title}</h1>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
            {pageContent.description}
          </p>
        </div>
        <Gallery group={group} />
      </main>
      <Footer />
    </div>
  );
}
