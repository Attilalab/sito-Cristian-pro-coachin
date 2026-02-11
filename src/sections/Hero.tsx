import { useEffect, useRef, useState } from 'react';
import { Trophy, Target, Zap, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Trophy, text: 'Ex pro Torino eSport' },
    { icon: Target, text: 'Formazione d\'élite' },
    { icon: Zap, text: 'Approccio competitivo' },
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-efootball.jpg" 
          alt="eFootball Arena"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/90" />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              right: '-100%',
              animation: `slideLine ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-sm font-medium tracking-wider">
              PROFESSIONAL eFOOTBALL COACH
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block text-white font-['Orbitron'] tracking-tight">
              CHRISTIAN
            </span>
          </h1>

          {/* Highlander Name */}
          <div 
            className={`mb-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              HIGHLANDER
            </span>
            <div className="mt-1 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-red-500/50" />
              <span className="text-white/40 text-xs tracking-widest uppercase">Nome in gioco</span>
              <div className="h-px w-8 bg-red-500/50" />
            </div>
          </div>

          {/* Subtitle */}
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-cyan-500 font-['Orbitron'] transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            eFOOTBALL COACH
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Ex giocatore eSport professionista del <span className="text-red-500 font-semibold">Torino</span>. 
            Formazione d'élite per player competitivi. Esperienza diretta nel circuito competitivo.
          </p>

          {/* Features */}
          <div 
            className={`flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-white/60"
              >
                <feature.icon className="w-5 h-5 text-red-500" />
                <span className="text-sm tracking-wide">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              onClick={() => scrollToSection('#contatti')}
              className="relative group bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                PRENOTA UNA SESSIONE
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-gradient" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#metodo')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm"
            >
              SCOPRI IL METODO
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* CSS Animations */}
      <style>{`
        @keyframes slideLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
