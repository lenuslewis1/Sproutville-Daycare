import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { X, ZoomIn } from 'lucide-react';

import imgReadingCircle from '@/assets/classroom-reading-1.webp';
import imgTableActivity from '@/assets/classroom-table-activity.webp';
import imgStorytimeMoment from '@/assets/caregiver-storytime-red.webp';
import imgPlayLift from '@/assets/caregiver-play-wall.webp';
import imgSmilingToddlers from '@/assets/toddlers-smiling.webp';
import imgBookTime from '@/assets/book-time-floor.webp';
import imgOutdoorPlay from '@/assets/outdoor-play-green-slide.webp';
import imgQuietReading from '@/assets/two-kids-reading-mats.webp';

interface GalleryItem {
  id: number;
  title: string;
  icon: string;
  src: string;
}

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Group Reading Time', icon: 'BOOK', src: imgReadingCircle },
    { id: 2, title: 'Table Learning', icon: 'WRITE', src: imgTableActivity },
    { id: 3, title: 'Story Time', icon: 'READ', src: imgStorytimeMoment },
    { id: 4, title: 'Active Play', icon: 'PLAY', src: imgPlayLift },
    { id: 5, title: 'Happy Moments', icon: 'SMILE', src: imgSmilingToddlers },
    { id: 6, title: 'Book Time', icon: 'BOOK', src: imgBookTime },
    { id: 7, title: 'Outdoor Fun', icon: 'OUTDOOR', src: imgOutdoorPlay },
    { id: 8, title: 'Quiet Reading', icon: 'QUIET', src: imgQuietReading },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Space</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary">A Peek Inside</h3>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="text-muted-foreground max-w-md">
              Bright, colorful, and thoroughly sanitized. Every corner of our facility is designed to inspire joy and imagination.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryItems.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 60}
              className={index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <div
                onClick={() => setSelected(item)}
                className="group relative w-full rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ height: index === 0 || index === 3 ? '100%' : undefined, minHeight: '200px' }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ minHeight: '200px' }}
                />

                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn size={32} className="text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 drop-shadow-md">
                    {item.icon} {item.title}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={e => e.stopPropagation()}
          >
            <img src={selected.src} alt={selected.title} className="w-full h-auto max-h-[80vh] object-cover" />

            <div className="absolute bottom-0 left-0 right-0 px-8 py-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-bold text-2xl drop-shadow">
                {selected.icon} {selected.title}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 hover:rotate-90 transition-all duration-300"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
