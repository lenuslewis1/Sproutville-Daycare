import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mrs Richwell Abban",
    role: "Parent at Sproutville Daycare",
    image: "/testimonials/mrs-richwell-abban.jpeg",
    quote: "Sproutville Day Care has been more than just a school for my son; it has truly been a second home. From the tender age of 7 months until now, the staff have gone above and beyond, nurturing him with love, patience, and excellence. One of my most cherished memories is watching him take his very first steps at Sproutville, a milestone forever etched in my heart. As a working mother with a naturally cautious spirit, I was surprised at how quickly I came to trust them. That trust has only grown stronger over time. Sproutville is, without question, the best place to entrust your child. I still recall my anxious calls on his very first day, yet by the second day I was so comfortable that I even forgot I had a baby at school. Aside from the priceless care they provide, my only recommendation is that Sproutville consider offering meals, as many other day cares do. Beyond that, they remain unmatched in the love and dedication they show to every child."
  },
  {
    id: 2,
    name: "Mr. And Mrs. Deoyela",
    role: "Parent at Sproutville Daycare",
    image: "/testimonials/mrs-phyllis-deoyela.jpeg",
    quote: "Dear friends, on this special day, as we celebrate the one year anniversary of this great school, we would like to express our profound gratitude to the entire teaching and non-teaching staff for the wonderful job they are doing. We can attest to the positive childhood development our child has gained after being enrolled in this school. Together, we are proud as parents to be part of this journey so far."
  },
  {
    id: 3,
    name: "The Amoahs",
    role: "Parents at Sproutville Daycare",
    image: "/testimonials/the-amoahs.jpeg",
    quote: "As parents, we would first like to express our heartfelt gratitude to the management of Sproutville Day Care. Our experience with this day care has been nothing short of outstanding. Your love, dedication, and patience are truly remarkable, and we are grateful for the impact you have made on our child's early education. We could not have chosen a better learning environment than Sproutville Day Care."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
            className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-black/5 p-5 md:p-8 lg:p-10 relative border border-border/50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="absolute top-8 left-8 text-secondary/10 w-20 h-20 rotate-180" />

            <div className="relative z-10">
              <div className="flex gap-1 text-yellow-400 mb-6 justify-center md:justify-start md:pl-[calc(35%+2rem)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="currentColor" size={24} />
                ))}
              </div>

              <div className="grid md:grid-cols-[35%_1fr] gap-8 lg:gap-12 items-center">
                <div className="mx-auto w-full max-w-[260px] md:max-w-none">
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                    <img
                      src={currentTestimonial.image}
                      alt={`${currentTestimonial.name}, ${currentTestimonial.role}`}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <p className="text-base md:text-lg lg:text-xl font-medium text-primary leading-relaxed">
                    "{currentTestimonial.quote}"
                  </p>

                  <div className="mt-8">
                    <div className="font-bold text-lg text-foreground">{currentTestimonial.name}</div>
                    <div className="text-muted-foreground text-sm font-medium">{currentTestimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
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
