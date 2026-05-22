import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { X, ZoomIn, Images } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  src: string;
}

interface GalleryGroup {
  id: string;
  title: string;
  description: string;
  range: [number, number];
}

interface GalleryProps {
  mode?: 'preview' | 'full';
  group?: GalleryGroup['id'];
}

const fullGalleryGroups: GalleryGroup[] = [
  {
    id: "events",
    title: "Events",
    description: "Special events and shared celebrations with our children and families.",
    range: [1, 12],
  },
  {
    id: "normal-images",
    title: "Normal Images",
    description: "Everyday classroom, learning, and play moments from across the daycare.",
    range: [13, 53],
  },
];

function buildItems(start: number, end: number, prefix: string): GalleryItem[] {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const id = start + index;
    return {
      id,
      title: `${prefix} ${index + 1}`,
      src: `/gallery/sproutville-gallery-${String(id).padStart(2, '0')}.jpeg`,
    };
  });
}

export function Gallery({ mode = 'full', group }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const previewItems = buildItems(1, 8, 'Gallery');
  const visibleGalleryGroups = group
    ? fullGalleryGroups.filter((galleryGroup) => galleryGroup.id === group)
    : fullGalleryGroups;
  const visibleGalleryGroup = visibleGalleryGroups[0];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Gallery</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary">Life at Sproutville</h3>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="text-muted-foreground max-w-md">
              {mode === 'preview'
                ? 'A quick look at moments from life at Sproutville Daycare.'
                : visibleGalleryGroups.length === 1
                  ? visibleGalleryGroup.description
                  : 'Browse our images grouped into events and normal day-to-day moments.'}
            </p>
          </FadeIn>
        </div>

        {mode === 'preview' ? (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 md:gap-5">
            {previewItems.map((item, index) => (
              <FadeIn key={item.id} delay={(index % 8) * 35} className="mb-4 md:mb-5 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="group relative block w-full overflow-hidden rounded-3xl bg-muted shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
                  aria-label={`Open ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />

                  <span className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/45 group-hover:opacity-100 group-focus-visible:bg-primary/45 group-focus-visible:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
                      <ZoomIn size={24} />
                    </span>
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="space-y-14">
          {visibleGalleryGroups.map((galleryGroup, groupIndex) => {
            const items = buildItems(galleryGroup.range[0], galleryGroup.range[1], galleryGroup.title);

            return (
              <div id={galleryGroup.id} key={galleryGroup.title} className="scroll-mt-28">
                <FadeIn delay={groupIndex * 80}>
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">{galleryGroup.title}</h4>
                  <p className="text-muted-foreground mt-2 mb-6">{galleryGroup.description}</p>
                </FadeIn>

                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5">
                  {items.map((item, index) => (
                    <FadeIn key={item.id} delay={(index % 10) * 35} className="mb-4 md:mb-5 break-inside-avoid">
                      <button
                        type="button"
                        onClick={() => setSelected(item)}
                        className="group relative block w-full overflow-hidden rounded-3xl bg-muted shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
                        aria-label={`Open ${item.title}`}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading={groupIndex === 0 && index < 6 ? 'eager' : 'lazy'}
                        />

                        <span className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/45 group-hover:opacity-100 group-focus-visible:bg-primary/45 group-focus-visible:opacity-100">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
                            <ZoomIn size={24} />
                          </span>
                        </span>
                      </button>
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-black shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="mx-auto max-h-[84vh] w-auto max-w-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-gradient-to-t from-black/75 to-transparent px-6 py-5 text-white">
              <Images size={22} />
              <p className="font-bold text-lg drop-shadow">{selected.title}</p>
            </div>

            <button
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
