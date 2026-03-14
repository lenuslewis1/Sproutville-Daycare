import { Sun, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent text-white p-2 rounded-xl">
                <Sun size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Bright Horizons
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Providing a safe, nurturing, and stimulating environment where children thrive and families feel at home.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Programs', 'Gallery', 'Testimonials', 'Pricing', 'FAQ'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-primary-foreground/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Programs</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70">Infant Care (0-12 mo)</li>
              <li className="text-primary-foreground/70">Toddler (1-3 yrs)</li>
              <li className="text-primary-foreground/70">Preschool (3-5 yrs)</li>
              <li className="text-primary-foreground/70">After School (5-12 yrs)</li>
              <li className="text-primary-foreground/70">Summer Camp</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={20} className="shrink-0 text-accent" />
                <span>123 Sunshine Lane<br />San Francisco, CA 94110</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={20} className="shrink-0 text-accent" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={20} className="shrink-0 text-accent" />
                <span>hello@brighthorizons.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Bright Horizons Day Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
