import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const galleryLinks = [
  { name: 'Events', href: '/gallery/events' },
  { name: 'Normal Images', href: '/gallery/normal-images' },
];

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
    { name: 'Schedule a Tour', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  const isGalleryActive = isActive('/gallery');
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
            <img
              src="/sproutville-logo.png"
              alt="Sproutville Daycare logo"
              className="w-11 h-11 rounded-xl object-cover border border-border/60 shadow-sm"
            />
            <span className="font-bold text-xl tracking-tight text-primary">
              Sproutville Daycare
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                link.name === 'Gallery' ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                          isGalleryActive
                            ? 'text-accent font-semibold'
                            : 'text-foreground/80 hover:text-accent'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={15} aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="min-w-44 rounded-xl border-border bg-white p-1.5 shadow-xl">
                      {galleryLinks.map((galleryLink) => (
                        <DropdownMenuItem key={galleryLink.name} asChild className="cursor-pointer rounded-lg p-0">
                          <Link
                            href={galleryLink.href}
                            className={`block w-full px-3 py-2 text-sm font-medium ${
                              isGalleryActive
                                ? 'text-primary'
                                : 'text-foreground/80'
                            }`}
                          >
                            {galleryLink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
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
                )
              ))}
            </div>
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
            link.name === 'Gallery' ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-lg p-2 text-base font-medium transition-colors ${
                      isGalleryActive
                        ? 'bg-secondary/10 text-accent font-semibold'
                        : 'text-foreground hover:bg-secondary/5 hover:text-accent'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[calc(100vw-2rem)] rounded-xl border-border bg-white p-1.5 shadow-xl">
                  {galleryLinks.map((galleryLink) => (
                    <DropdownMenuItem key={galleryLink.name} asChild className="cursor-pointer rounded-lg p-0">
                      <Link
                        href={galleryLink.href}
                        className="block w-full px-3 py-2.5 text-base font-medium text-foreground"
                      >
                        {galleryLink.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
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
            )
          ))}
        </div>
      )}
    </nav>
  );
}
