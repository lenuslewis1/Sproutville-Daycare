import { FadeIn } from '@/components/ui/FadeIn';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Part-Time",
      price: "$800",
      period: "per month",
      description: "Perfect for flexible schedules.",
      features: [
        "3 Days a Week",
        "8:00 AM - 1:00 PM",
        "Nutritious Lunch Included",
        "Basic Arts & Crafts",
        "Daily Progress Updates"
      ],
      highlighted: false
    },
    {
      name: "Full-Time",
      price: "$1,200",
      period: "per month",
      description: "Our most popular comprehensive care.",
      features: [
        "5 Days a Week",
        "7:30 AM - 5:30 PM",
        "All Meals & Snacks Included",
        "Full Curriculum Access",
        "Daily Progress Updates",
        "1 Free Date-Night Care/mo"
      ],
      highlighted: true
    },
    {
      name: "Premium Care",
      price: "$1,600",
      period: "per month",
      description: "Extended hours & premium perks.",
      features: [
        "5 Days a Week",
        "6:30 AM - 6:30 PM",
        "All Meals & Snacks Included",
        "Full Curriculum Access",
        "Live CCTV Stream Access",
        "Weekly Extracurriculars (Dance/Music)",
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Tuition</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Simple, Transparent Pricing</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No hidden fees. All enrollment plans include learning materials and essential care items. Sibling discounts available.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 150} className="h-full">
              <div 
                className={`relative h-full flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10 border-none' 
                    : 'bg-background text-foreground border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h4 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                  {plan.name}
                </h4>
                <p className={`text-sm font-medium mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className={`text-lg font-medium ml-2 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className={`shrink-0 ${plan.highlighted ? 'text-accent' : 'text-secondary'}`} />
                      <span className={`font-medium ${plan.highlighted ? 'text-primary-foreground/90' : 'text-foreground/80'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25'
                      : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Enroll Now
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
