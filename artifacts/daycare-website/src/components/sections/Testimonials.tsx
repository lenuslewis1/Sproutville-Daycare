import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Parent of 3-year-old",
      quote: "Leaving my daughter for the first time was terrifying, but the teachers at Bright Horizons made the transition so smooth. She comes home every day excited to tell me what she learned."
    },
    {
      id: 2,
      name: "David Chen",
      role: "Parent of infant & preschooler",
      quote: "The facility is exceptionally clean, the security protocols are top-notch, and the curriculum is genuinely engaging. It's the best investment we've made for our children's early years."
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Parent of 5-year-old",
      quote: "My son's confidence and vocabulary have exploded since he started here. The staff truly cares about each child's individual development. We couldn't be happier!"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Parent of 2-year-old",
      quote: "From the nutritious meals to the incredible outdoor play area, everything is designed perfectly for toddlers. The daily updates through their app keep us connected all day."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">What Parents Say</h3>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div 
            className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl shadow-black/5 p-8 md:p-16 relative border border-border/50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="absolute top-8 left-8 text-secondary/10 w-24 h-24 rotate-180" />
            
            <div className="relative z-10 min-h-[200px] flex flex-col justify-center items-center text-center">
              <div className="flex gap-1 text-yellow-400 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="currentColor" size={24} />
                ))}
              </div>
              
              <div className="overflow-hidden relative w-full">
                {/* Pure React Crossfade */}
                {testimonials.map((test, index) => (
                  <div
                    key={test.id}
                    className={`transition-all duration-700 absolute inset-0 flex items-center justify-center ${
                      index === currentIndex 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 translate-x-8 absolute'
                    }`}
                  >
                    <p className="text-xl md:text-3xl font-medium text-primary leading-relaxed">
                      "{test.quote}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <div className="font-bold text-lg text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground text-sm font-medium">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-accent' 
                      : 'w-3 h-3 bg-muted hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
