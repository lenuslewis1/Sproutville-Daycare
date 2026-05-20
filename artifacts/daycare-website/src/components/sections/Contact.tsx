import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactFormState {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  parentName: '',
  childName: '',
  childAge: '',
  email: '',
  phone: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onChange = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Unable to send request right now.');
      }

      setIsSubmitted(true);
      setForm(INITIAL_FORM);
    } catch (error) {
      setSubmitError('We could not send your request. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Schedule a Tour</h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We would love to meet you and your little one. Complete the form and it will be sent directly to our email.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Location</h4>
                    <a
                      href="https://maps.google.com/?q=Sproutville+Daycare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline-offset-2 hover:underline"
                    >
                      Sproutville Daycare
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">Daycare Line: 0302812077<br />Mobile Line: 0557577475</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email & Digital Address</h4>
                    <a href="mailto:sproutvilledaycare@gmail.com" className="text-muted-foreground underline-offset-2 hover:underline">sproutvilledaycare@gmail.com</a>
                    <p className="text-muted-foreground">GZ-190-9708</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 6:30 AM to 3:00 PM<br />After school care: 4:00 PM to 6:00 PM<br />Sat-Sun: Closed<br />Public holidays: Closed</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 rounded-3xl overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=Sproutville+Daycare&output=embed&z=16"
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

          <div>
            <FadeIn delay={200} className="h-full">
              <div className="bg-background rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/5 border border-border/50 h-full">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <h3 className="text-3xl font-bold text-primary mb-4">Request Sent!</h3>
                    <p className="text-lg text-muted-foreground max-w-sm mb-8">
                      Thank you. Your form entry has been sent and we will contact you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Request a Tour</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Parent&apos;s Name *</label>
                      <input
                        name="parentName"
                        required
                        value={form.parentName}
                        onChange={(e) => onChange('parentName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <input
                        name="phone"
                        required
                        value={form.phone}
                        onChange={(e) => onChange('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        placeholder="055 757 7475"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Child&apos;s Name *</label>
                      <input
                        name="childName"
                        required
                        value={form.childName}
                        onChange={(e) => onChange('childName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        placeholder="Leo Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Child&apos;s Age *</label>
                      <input
                        name="childAge"
                        required
                        value={form.childAge}
                        onChange={(e) => onChange('childAge', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        placeholder="e.g. 2.5 years"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address *</label>
                    <input
                      name="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => onChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Questions or Notes</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => onChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                      placeholder="Any allergies, specific days needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent text-accent-foreground font-bold text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Request a Tour'}
                  </button>
                  {submitError && (
                    <p className="text-sm font-medium text-red-600 text-center">{submitError}</p>
                  )}
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
