import { useEffect, useRef, useState } from 'react';
import { Target, Users, Award, Rocket, Crown, Star } from 'lucide-react';

const targets = [
  {
    icon: Target,
    title: 'Player Ambiziosi',
    description: 'Chi vuole scalare le divisioni e raggiungere livelli competitivi avanzati.',
  },
  {
    icon: Users,
    title: 'Competitor Seri',
    description: 'Player che partecipano a tornei e vogliono migliorare le proprie performance.',
  },
  {
    icon: Award,
    title: 'Aspiranti Pro',
    description: 'Chi sogna di entrare nel mondo professionistico dell\'eFootball.',
  },
  {
    icon: Rocket,
    title: 'Talento da Metodo',
    description: 'Chi ha le basi ma vuole trasformare il talento in risultati concreti.',
  },
];

const stats = [
  { value: '500+', label: 'Sessioni', icon: Star },
  { value: '50+', label: 'Player Coachati', icon: Users },
  { value: '10+', label: 'Tornei Vinti', icon: Crown },
];

export function Posizionamento() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="posizionamento" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-sm font-medium tracking-wider uppercase">
              Posizionamento Premium
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-['Orbitron']">
            <span className="text-white">Non vende consigli</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              generici.
            </span>
          </h2>
          
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Offre un percorso di crescita strutturato per chi vuole davvero migliorare.
          </p>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Target Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {targets.map((target, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center mb-6 group-hover:from-red-600/30 group-hover:to-red-800/30 transition-colors">
                  <target.icon className="w-7 h-7 text-red-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-['Orbitron'] group-hover:text-red-400 transition-colors">
                  {target.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed">
                  {target.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
