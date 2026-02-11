import { useEffect, useRef, useState } from 'react';
import { Check, Gamepad2, Brain, Target, TrendingUp, Award, Trophy, Medal } from 'lucide-react';

const skills = [
  { icon: Gamepad2, text: 'Preparazione tecnica avanzata' },
  { icon: Brain, text: 'Studio delle meta-strategie' },
  { icon: Target, text: 'Lettura tattica in tempo reale' },
  { icon: TrendingUp, text: 'Ottimizzazione delle meccaniche' },
  { icon: Award, text: 'Mentalità da competizione pro' },
];

const risultati = [
  { icon: Trophy, text: '🇮🇹 Ex Pro Player PES of Torino FC' },
  { icon: Medal, text: '🥈 Vice Champion of Italy - Clan TeamProItaly 3vs3 PES League' },
  { icon: Trophy, text: '🥇 x2 Team 10vs10 PES Eleven Calemun PES' },
  { icon: Trophy, text: '🥇 x1 🏆 Coppa Internazionale' },
  { icon: Trophy, text: '🥇 x2 🇮🇹 Campionati AIPC 2019' },
  { icon: Award, text: '🇮🇹 Top 16 Coverciano' },
  { icon: Award, text: '🇪🇺 Top 100 eFootball 2026' },
  { icon: Target, text: '🇪🇺 30W Consecutive eFootball 2026 - Divisione 1 Offline' },
  { icon: Target, text: '🇪🇺 Top 100 eFootball 2026 - Divisione 1 Online' },
  { icon: Target, text: '🇪🇺 30W Consecutive eFootball 2026 - Divisione 1 Online' },
];

export function ChiE() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="chi-e" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/30 via-blue-600/30 to-cyan-500/30 rounded-2xl blur-2xl opacity-50" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="/images/christian-coach.jpg" 
                  alt="Christian - eFootball Coach"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-4 shadow-2xl">
                <div className="text-3xl font-bold text-white">Top 16</div>
                <div className="text-red-200 text-sm">Italia - Coverciano</div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-red-500/50" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-red-500/50" />
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-sm font-medium tracking-wider uppercase">
                Chi è Christian
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-['Orbitron']">
              <span className="text-white">Non è un coach</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                teorico.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-white/70 text-lg leading-relaxed mb-8">
              <p>
                Christian ha militato come giocatore eFootball professionista nel{' '}
                <span className="text-red-500 font-semibold">Torino eSport Serie A</span>, 
                raggiungendo la classifica <span className="text-red-500 font-semibold">Top 16 in Italia a Coverciano</span>. 
                Tutto nel mondo eFootball, non nel calcio reale.
              </p>
              <p>
                Offre risultato assicurato per raggiungere l'obiettivo Divisione 1 e 
                preparazione per il gioco a livello professionista.
              </p>
            </div>

            {/* Skills List */}
            <div className="space-y-4 mb-10">
              <h3 className="text-white font-semibold mb-4">La sua esperienza comprende:</h3>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <skill.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {skill.text}
                  </span>
                  <Check className="w-5 h-5 text-red-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Risultati / Palmares */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-red-500" />
                Palmarès
              </h3>
              <div className="grid gap-2">
                {risultati.map((risultato, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-red-600/10 to-transparent border-l-2 border-red-500/50 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <risultato.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{risultato.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Text */}
            <p className="mt-8 text-white/60 italic">
              "Oggi trasferisce questa esperienza in un percorso di coaching strutturato 
              per player che vogliono evolvere realmente."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
