import { Link } from 'wouter';
import { FadeIn } from '@/components/ui/FadeIn';
import heroImage from '@/assets/hero-children.png';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Decorative CSS Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[120px]" />
        
        {/* SVG Decorative Shapes */}
        <svg className="absolute top-[20%] right-[15%] w-24 h-24 text-accent/20 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" />
        </svg>
        <svg className="absolute bottom-[20%] left-[10%] w-16 h-16 text-secondary/30 animate-[bounce_4s_ease-in-out_infinite]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg className="absolute top-[40%] left-[5%] w-12 h-12 text-primary/10 animate-[pulse_6s_ease-in-out_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
          <rect x="20" y="20" width="60" height="60" rx="10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 border border-secondary/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                </span>
                Now enrolling for Fall 2025
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-balance leading-[1.1] mb-6 text-primary">
                Where Little <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Minds Grow</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl text-balance">
                Providing a safe, nurturing, and stimulating environment where your children can thrive, learn, and discover the world with joy.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent text-accent-foreground text-center font-bold text-lg rounded-2xl shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/programs"
                  className="px-8 py-4 bg-white text-primary text-center font-bold text-lg rounded-2xl shadow-lg shadow-black/5 border border-border/50 hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-300"
                >
                  Explore Programs
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image in Animated Blob */}
          <FadeIn delay={400} direction="left" className="hidden lg:flex justify-center items-center relative">
            <div className="w-[480px] h-[520px] relative">
              {/* Blob border glow */}
              <div
                className="absolute inset-0 animate-[blob_8s_ease-in-out_infinite] shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #1a3a5c)',
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  padding: '6px',
                }}
              >
                <div
                  className="w-full h-full overflow-hidden animate-[blob_8s_ease-in-out_infinite]"
                  style={{ borderRadius: 'inherit' }}
                >
                  <img
                    src={heroImage}
                    alt="Happy children learning and playing at Bright Horizons Day Care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Element 1 */}
              <div className="absolute top-6 -right-6 bg-white p-3 rounded-2xl shadow-xl animate-bounce z-10" style={{ animationDuration: '3s' }}>
                <span className="text-3xl">🎨</span>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute bottom-16 -left-6 bg-white p-3 rounded-2xl shadow-xl animate-bounce z-10" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <span className="text-3xl">🧩</span>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-4 -right-8 bg-white px-5 py-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3 z-10">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-white" />
                </div>
                <span className="font-bold text-sm text-primary">200+ Families</span>
              </div>
            </div>

            <style>{`
              @keyframes blob {
                0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
                34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
                67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
              }
            `}</style>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
