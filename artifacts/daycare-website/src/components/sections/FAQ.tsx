import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open Monday through Friday, from 7:30 AM to 6:30 PM. We also offer a Breakfast Club (6:30 – 7:30 AM) and an After School Club (6:00 – 7:00 PM) for additional wrap-around care."
    },
    {
      question: "Are meals provided?",
      answer: "Yes! We provide nutritious, chef-prepared breakfasts, lunches, and afternoon snacks. We also accommodate all dietary restrictions and allergies."
    },
    {
      question: "What is your sick child policy?",
      answer: "To protect all children, we require kids to be fever-free without medication for 24 hours before returning. Children showing symptoms of contagious illness must be kept home."
    },
    {
      question: "Do you offer government-funded places?",
      answer: "Yes! We offer 15 hours of free childcare per week for eligible 2-year-olds, and 30 hours per week for working parents of 3 and 4-year-olds. Please contact us to check your eligibility and availability."
    },
    {
      question: "Is the facility secure?",
      answer: "Security is our top priority. We have secure keypad entry, full CCTV coverage in all rooms and play areas, and strict ID checks for all authorized pickups."
    },
    {
      question: "What is the staff-to-child ratio?",
      answer: "We strictly adhere to state regulations. Infants (1:4), Toddlers (1:6), and Preschoolers (1:10), ensuring your child gets plenty of individual attention."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Got Questions?</h2>
            <p className="text-lg text-muted-foreground">Find answers to our most commonly asked questions.</p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-secondary/30 shadow-md' : 'border-border/50'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-secondary' : 'text-primary'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-background flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown size={20} className="text-primary" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
