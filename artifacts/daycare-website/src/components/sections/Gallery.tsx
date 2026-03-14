import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { X, ZoomIn } from 'lucide-react';

export function Gallery() {
  const [selected, setSelected] = useState<{id: number, title: string, color: string, icon: string} | null>(null);

  const galleryItems = [
    { id: 1, title: 'Arts & Crafts', color: 'from-blue-400 to-indigo-500', icon: '🎨' },
    { id: 2, title: 'Story Time', color: 'from-teal-400 to-emerald-500', icon: '📚' },
    { id: 3, title: 'Outdoor Play', color: 'from-orange-400 to-coral-500', icon: '☀️' },
    { id: 4, title: 'Music & Dance', color: 'from-purple-400 to-pink-500', icon: '🎵' },
    { id: 5, title: 'Building Blocks', color: 'from-red-400 to-rose-500', icon: '🧱' },
    { id: 6, title: 'Nap Time', color: 'from-indigo-400 to-blue-500', icon: '💤' },
    { id: 7, title: 'Sensory Play', color: 'from-emerald-400 to-teal-500', icon: '👐' },
    { id: 8, title: 'Lunch Time', color: 'from-amber-400 to-orange-500', icon: '🍎' },
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

        {/* CSS Grid Gallery using purely styled Divs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 50} className={index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""}>
              <div 
                onClick={() => setSelected(item)}
                className={`group relative w-full h-48 md:h-full min-h-[200px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${item.color}`}
              >
                {/* Abstract subtle pattern overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                {/* Big Background Icon */}
                <div className="absolute -bottom-4 -right-4 text-8xl md:text-9xl opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                  {item.icon}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn size={32} className="text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 animate-in fade-in duration-300" 
          onClick={() => setSelected(null)}
        >
          <div 
            className={`relative w-full max-w-4xl aspect-video rounded-[2rem] bg-gradient-to-br ${selected.color} flex flex-col items-center justify-center shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden`} 
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, white 2px, transparent 0)', backgroundSize: '48px 48px' }}></div>
            
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-6 right-6 p-3 bg-black/20 text-white rounded-full hover:bg-black/40 hover:rotate-90 transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>

            <span className="text-8xl md:text-[12rem] mb-6 drop-shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
              {selected.icon}
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white text-center px-4 drop-shadow-lg relative z-10">
              {selected.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
