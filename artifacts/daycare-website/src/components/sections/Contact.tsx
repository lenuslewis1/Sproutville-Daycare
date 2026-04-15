import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '@/components/ui/FadeIn';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  parentName: z.string().min(2, "Name is required"),
  childName: z.string().min(2, "Child's name is required"),
  childAge: z.string().min(1, "Child's age is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Schedule a Tour</h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We'd love to meet you and your little one! Fill out the form to schedule a personal tour of our facility and discuss enrollment options.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Location</h4>
                    <p className="text-muted-foreground">House Number 10, 2nd Aviation Loop<br/>Spintex Rd, Accra</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">055 757 7475</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 7:30 AM – 6:30 PM<br/>Breakfast Club: 6:30 – 7:30 AM<br/>After School: 6:00 – 7:00 PM<br/>Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full h-64 rounded-3xl overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=House+Number+10,+2nd+Aviation+Loop,+Spintex+Road,+Accra,+Ghana&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sproutville Daycare Location"
                />
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div>
            <FadeIn delay={200} className="h-full">
              <div className="bg-background rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/5 border border-border/50 h-full">
                
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out]">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-4">Request Sent!</h3>
                    <p className="text-lg text-muted-foreground max-w-sm">
                      Thank you for your interest in Sproutville Daycare. We will contact you within 24 hours to confirm your tour.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Enrollment Inquiry</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Parent's Name *</label>
                        <input 
                          {...register("parentName")}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          placeholder="Jane Doe"
                        />
                        {errors.parentName && <span className="text-red-500 text-xs font-medium">{errors.parentName.message}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                        <input 
                          {...register("phone")}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          placeholder="055 757 7475"
                        />
                        {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Child's Name *</label>
                        <input 
                          {...register("childName")}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          placeholder="Leo Doe"
                        />
                        {errors.childName && <span className="text-red-500 text-xs font-medium">{errors.childName.message}</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Child's Age *</label>
                        <input 
                          {...register("childAge")}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          placeholder="e.g. 2.5 years"
                        />
                        {errors.childAge && <span className="text-red-500 text-xs font-medium">{errors.childAge.message}</span>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input 
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        placeholder="jane@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Program of Interest *</label>
                      <select 
                        {...register("program")}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                      >
                        <option value="">Select a program...</option>
                        <option value="infant">Infant Care (0-12 months)</option>
                        <option value="toddler">Toddler (1-3 years)</option>
                        <option value="preschool">Preschool (3-5 years)</option>
                        <option value="afterschool">After School (5-12 years)</option>
                      </select>
                      {errors.program && <span className="text-red-500 text-xs font-medium">{errors.program.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Questions or Notes</label>
                      <textarea 
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                        placeholder="Any allergies, specific days needed, etc."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-accent text-accent-foreground font-bold text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Request a Tour'}
                    </button>
                    
                  </form>
                )}

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
