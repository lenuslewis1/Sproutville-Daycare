import { FadeIn } from '@/components/ui/FadeIn';
import { Users, Camera, TreePine, BookOpen, Heart, GraduationCap } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: <GraduationCap className="text-accent" size={28} />,
      title: "EYFS Framework",
      description: "Our curriculum is fully grounded in the Early Years Foundation Stage framework, supporting every area of your child's development."
    },
    {
      icon: <Heart className="text-secondary" size={28} />,
      title: "Daily Parent Updates",
      description: "Stay connected with your child's day through regular updates, photos, and milestone tracking shared directly with you."
    },
    {
      icon: <Users className="text-blue-500" size={28} />,
      title: "Low Child-to-Staff Ratio",
      description: "Ensuring your child receives the personalised attention and care they deserve every single day."
    },
    {
      icon: <Camera className="text-green-500" size={28} />,
      title: "CCTV & Secure Entry",
      description: "State-of-the-art security systems and strict pickup protocols for complete peace of mind."
    },
    {
      icon: <BookOpen className="text-purple-500" size={28} />,
      title: "Purposeful Play",
      description: "We use play as the primary vehicle for learning — communication, literacy, physical development, and creativity all through joyful activity."
    },
    {
      icon: <TreePine className="text-red-500" size={28} />,
      title: "Outdoor Play Areas",
      description: "Nature-inspired outdoor spaces designed for safe exploration, physical development, and a love of the outdoors."
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Sproutville Daycare Difference</h3>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              We go above and beyond standard childcare. Every aspect of Sproutville is intentionally designed to nurture confident, curious, and happy learners — and to give families complete peace of mind.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-primary-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
