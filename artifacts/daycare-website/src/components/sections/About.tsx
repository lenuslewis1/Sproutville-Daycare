import { FadeIn } from '@/components/ui/FadeIn';
import { Heart, ShieldCheck, Smile } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      value: "2024",
      label: "Established",
      description: "Proudly serving families since 2024."
    },
    {
      icon: <Heart size={32} className="text-accent" />,
      value: "7+",
      label: "Certified Staff",
      description: "Passionate and highly trained educators."
    },
    {
      icon: <Smile size={32} className="text-primary" />,
      value: "30+",
      label: "Happy Families",
      description: "A community built on love and trust."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">A Second Home for Your Child</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Sproutville Daycare, we believe that early childhood is a magical time of discovery. Our mission is to partner with parents to provide a safe, inclusive, and stimulating environment that fosters independence, creativity, and a lifelong love of learning.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-background rounded-3xl p-8 border border-border/50 shadow-lg shadow-black/5 hover:-translate-y-2 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-extrabold text-primary mb-2">{stat.value}</h4>
                <div className="text-xl font-bold text-foreground mb-3">{stat.label}</div>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
