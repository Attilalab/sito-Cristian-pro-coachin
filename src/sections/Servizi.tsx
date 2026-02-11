import { Target, Clock, Trophy, Gamepad2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const piani = [
  {
    icon: Target,
    title: 'Coaching per Obiettivi',
    description: 'Percorso personalizzato basato sui tuoi obiettivi specifici: raggiungere Divisione 1, migliorare il ranking, prepararti per tornei.',
    prezzo: 'Su misura',
    prezzoLabel: 'Preventivo personalizzato',
    features: [
      'Analisi del tuo profilo e obiettivi',
      'Piano di allenamento dedicato',
      'Sessioni teoriche e pratiche',
      'Analisi replay post-partita',
      'Supporto continuo via chat',
    ],
    cta: 'Richiedi Preventivo',
    popular: true,
  },
  {
    icon: Clock,
    title: 'Coaching a Ore',
    description: 'Sessioni flessibili da prenotare quando vuoi. Ideale per chi ha esigenze specifiche o vuole provare il servizio.',
    prezzo: '25€',
    prezzoLabel: 'a partire da /ora',
    features: [
      'Sessione 1-to-1 live',
      'Analisi gameplay in diretta',
      'Consigli personalizzati',
      'Esercizi pratici',
      'Domande e risposte',
    ],
    cta: 'Prenota Ora',
    popular: false,
  },
];

export function Servizi() {
  const scrollToContatti = () => {
    const element = document.querySelector('#contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servizi" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 font-semibold text-sm tracking-wider uppercase mb-4">
            Tariffario
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-['Orbitron']">
            Scegli il tuo percorso
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Due modalità per raggiungere i tuoi obiettivi: un percorso completo su misura 
            oppure sessioni flessibili a ore.
          </p>
        </div>

        {/* Piani Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {piani.map((piano, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                piano.popular 
                  ? 'bg-gradient-to-br from-red-600/20 to-blue-600/20 border-2 border-red-500/50' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {piano.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Consigliato
                  </span>
                </div>
              )}

              {/* Icona */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                piano.popular ? 'bg-red-600' : 'bg-white/10'
              }`}>
                <piano.icon className="w-8 h-8 text-white" />
              </div>

              {/* Titolo */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {piano.title}
              </h3>

              {/* Descrizione */}
              <p className="text-white/60 mb-6">
                {piano.description}
              </p>

              {/* Prezzo */}
              <div className="mb-8">
                <div className="text-4xl font-bold text-white mb-1">
                  {piano.prezzo}
                </div>
                <div className="text-white/50 text-sm">
                  {piano.prezzoLabel}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {piano.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      piano.popular ? 'bg-red-600/20' : 'bg-white/10'
                    }`}>
                      <ArrowRight className={`w-3 h-3 ${piano.popular ? 'text-red-500' : 'text-white/60'}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                onClick={scrollToContatti}
                className={`w-full py-6 font-semibold ${
                  piano.popular 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {piano.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            * I prezzi a ore partono da 25€. Il costo può variare in base al livello e alle esigenze specifiche.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 rounded-3xl p-8 lg:p-12 border border-white/10">
            <Gamepad2 className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Orbitron']">
              Non sai quale scegliere?
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Contattami per una consulenza gratuita. Analizzeremo il tuo livello attuale 
              e ti consiglierò il percorso più adatto a te.
            </p>
            <Button 
              onClick={scrollToContatti}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Inizia Ora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
