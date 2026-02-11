import { Gamepad2, Facebook, Mail } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#chi-e', label: 'Chi è' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#metodo', label: 'Il Metodo' },
  { href: '#contatti', label: 'Contatti' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="font-bold text-xl tracking-wider font-['Orbitron']">
                  CHRISTIAN
                </span>
                <span className="block text-xs text-red-500 tracking-[0.3em]">
                  eFOOTBALL COACH
                </span>
              </div>
            </div>
            
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              Ex giocatore professionista Torino eSport. Formazione d'élite per player 
              competitivi che vogliono trasformare il talento in risultati concreti.
            </p>

            {/* Social Link - Solo Facebook */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-600/20 hover:border-red-500/50 border border-transparent transition-all group"
              >
                <Facebook className="w-5 h-5 text-white/60 group-hover:text-red-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6 font-['Orbitron']">Navigazione</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/60 hover:text-red-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 font-['Orbitron']">Contatti</h4>
            <div className="space-y-4">
              <a 
                href="tel:393485943885"
                className="flex items-center gap-3 text-white/60 hover:text-red-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <span className="text-lg">📱</span>
                </div>
                <span>39 348 594 3885</span>
              </a>
              <a 
                href="mailto:christian@efootballcoach.it"
                className="flex items-center gap-3 text-white/60 hover:text-red-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>christian@efootballcoach.it</span>
              </a>
            </div>

            {/* Torino Badge */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/20">
              <div className="text-xs text-red-400 mb-1">Ex Giocatore</div>
              <div className="font-bold text-white font-['Orbitron']">TORINO eSPORT</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Christian - eFootball Coach. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-red-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
