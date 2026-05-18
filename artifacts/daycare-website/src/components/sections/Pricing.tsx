import { Link } from 'wouter';
import { FadeIn } from '@/components/ui/FadeIn';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Termly Offer",
      price: "Ghc 2,500",
      period: "per term",
      description: "Structured term fees by age range.",
      features: [
        "Infants - Not Applicable (N/A)",
        "Toddlers (1-3 years): Ghc 2,500",
        "Preschool (3-5 years): Ghc 2,400",
        "Enrollment fee: Ghc 600.00"
      ],
      highlighted: false
    },
    {
      name: "Monthly Offer",
      price: "Ghc 1,300",
      period: "per month",
      description: "Monthly tuition by age range.",
      features: [
        "Infants (3-12 months): Ghc 1,300",
        "Toddlers (1-3 years): Ghc 1,100",
        "Preschool (3-5 years): Ghc 1,000",
        "Secure and nurturing care included"
      ],
      highlighted: true
    },
    {
      name: "Daily & Weekly Offer",
      price: "From Ghc 110",
      period: "per day",
      description: "Flexible daily and weekly options.",
      features: [
        "Infants: 1 day 130, 2 days 225, 3 days 310, 4 days 370, weekly 450",
        "Toddlers/Preschool: 1 day 110, 2 days 190, 3 days 260, 4 days 320, weekly 400",
        "After school program: Ghc 200 per week",
        "Late pickup after 4:00 PM: Ghc 20 per hour"
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
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Simple, Transparent Fees</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Flexible payment options are available. We accept bank transfer, mobile money, and cash.
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
                
                <Link
                  href="/contact"
                  className={`block w-full py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25'
                      : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
