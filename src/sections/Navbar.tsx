import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#chi-e', label: 'CHI È' },
  { href: '#metodo', label: 'IL METODO' },
  { href: '#posizionamento', label: 'PER CHI' },
  { href: '#contatti', label: 'CONTATTI' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-lg transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-red-500/50 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg tracking-wider font-['Orbitron']">
                CHRISTIAN
              </span>
              <span className="block text-xs text-red-500 tracking-[0.3em]">
                COACH
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="relative px-4 py-2 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('#contatti')}
              className="relative bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-2 overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">PRENOTA ORA</span>
              <span className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-red-500 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="block py-3 px-4 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button 
              onClick={() => scrollToSection('#contatti')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
            >
              PRENOTA ORA
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
