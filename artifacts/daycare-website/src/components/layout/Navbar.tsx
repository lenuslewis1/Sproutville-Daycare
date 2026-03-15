import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Sun } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  const isHome = location === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || !isHome
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent text-white p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Sun size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">
              Bright Horizons
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-accent font-semibold'
                      : 'text-foreground/80 hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule a Tour
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium p-2 rounded-lg transition-colors ${
                isActive(link.href)
                  ? 'text-accent bg-secondary/10 font-semibold'
                  : 'text-foreground hover:text-accent hover:bg-secondary/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-center w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl"
          >
            Schedule a Tour
          </Link>
        </div>
      )}
    </nav>
  );
}
