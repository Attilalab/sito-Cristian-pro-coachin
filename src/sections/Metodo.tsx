import { useEffect, useRef, useState } from 'react';
import { Search, Settings, Trophy, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analisi Tecnico-Tattica',
    description: 'Studio dettagliato delle partite: movimenti, build-up, gestione spazi, scelte difensive e offensive.',
    image: '/images/metodo-analisi.jpg',
    details: [
      'Analisi replay partite',
      'Identificazione pattern di gioco',
      'Studio delle decisioni critiche',
      'Valutazione posizionamento',
    ],
    color: 'from-red-600 to-red-800',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Ottimizzazione Meccaniche',
    description: 'Perfezionamento di timing, pressione, istruzioni avanzate e gestione del ritmo partita.',
    image: '/images/metodo-meccaniche.jpg',
    details: [
      'Timing dei passaggi',
      'Pressione difensiva',
      'Istruzioni avanzate',
      'Gestione del ritmo',
    ],
    color: 'from-blue-600 to-blue-800',
  },
  {
    number: '03',
    icon: Trophy,
    title: 'Preparazione Competitiva',
    description: 'Allenamento mentale e strategico per tornei, competizioni online e circuiti ufficiali.',
    image: '/images/metodo-competitivo.jpg',
    details: [
      'Preparazione mentale',
      'Gestione dello stress',
      'Strategie torneo',
      'Analisi avversari',
    ],
    color: 'from-cyan-600 to-cyan-800',
  },
];

export function Metodo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
      id="metodo" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/5 via-blue-600/5 to-cyan-500/5 rounded-full blur-[150px]" />
      </div>

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
              Il Metodo
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-['Orbitron']">
            <span className="text-white">Un percorso</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-cyan-500">
              strutturato in 3 fasi
            </span>
          </h2>
        </div>

        {/* Steps Navigation */}
        <div 
          className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xs opacity-60 mr-2">{step.number}</span>
              <span className="hidden sm:inline">{step.title}</span>
              {activeStep === index && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-400" />
              )}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${activeStep === index ? 'block' : 'hidden'}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative group">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    
                    {/* Step Number Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-['Orbitron']">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <ChevronRight className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`} style={{ color: index === 0 ? '#ef4444' : index === 1 ? '#3b82f6' : '#06b6d4' }} />
                        <span className="text-white/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-red-500/50 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white rotate-180" />
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-red-500/50 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
