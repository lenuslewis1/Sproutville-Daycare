import { Link } from 'wouter';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/sproutville-logo.png"
                alt="Sproutville Daycare logo"
                className="w-11 h-11 rounded-xl object-cover border border-white/20 bg-white"
              />
              <span className="font-bold text-2xl tracking-tight">
                Sproutville Daycare
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Providing a safe, nurturing, and stimulating environment where children thrive and families feel at home.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/sproutvilledaycare/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/sproutville_daycare/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Instagram size={18} /></a>
              <a href="https://x.com/sproutville_gh" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Twitter size={18} /></a>
              <a href="https://share.google/zqLoscKwQmFScLBJk" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Globe size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/' },
                { label: 'Our Programs', href: '/programs' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Programs</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70">Blossom Room (3 months – 2 yrs)</li>
              <li className="text-primary-foreground/70">Sunshine Room (2 – 3 yrs)</li>
              <li className="text-primary-foreground/70">Rainbow Room (3 – 5 yrs)</li>
              <li className="text-primary-foreground/70">Breakfast Club (6:30 – 7:30 AM)</li>
              <li className="text-primary-foreground/70">After School Club (6:00 – 7:00 PM)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={20} className="shrink-0 text-accent" />
                <span>House Number 10, 2nd Aviation Loop<br />Spintex Rd, Accra</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={20} className="shrink-0 text-accent" />
                <span>055 757 7475</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={20} className="shrink-0 text-accent" />
                <span>info@sproutvilledaycare.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Sproutville Daycare. All rights reserved.
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
