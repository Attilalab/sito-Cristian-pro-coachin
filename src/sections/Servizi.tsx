import { Shield, Video, ClipboardCheck, Lock, Home, Building2 } from 'lucide-react';

const servizi = [
  {
    icon: Shield,
    title: 'Impianti di Allarme',
    description: 'Sistemi di allarme anti-intrusione per casa e ufficio con sensori volumetrici, perimetrali e connessione diretta alla centrale operativa.',
    image: '/images/servizio-allarme.jpg',
  },
  {
    icon: Video,
    title: 'Videosorveglianza',
    description: 'Telecamere HD e 4K con visione notturna, registrazione cloud e accesso remoto da smartphone per un controllo totale 24/7.',
    image: '/images/servizio-videosorveglianza.jpg',
  },
  {
    icon: ClipboardCheck,
    title: 'Progettazione e Validazione',
    description: 'Analisi dei rischi, progettazione su misura e validazione tecnica degli impianti di sicurezza per normative vigenti.',
    image: '/images/servizio-progettazione.jpg',
  },
  {
    icon: Lock,
    title: 'Controllo Accessi',
    description: 'Sistemi di gestione accessi con badge, biometrici e intercom per un controllo completo degli ingressi.',
    image: '/images/servizio-controllo-accessi.jpg',
  },
];

const aree = [
  {
    icon: Home,
    title: 'Sicurezza Privata',
    description: 'Proteggi la tua casa e la tua famiglia con sistemi all\'avanguardia.',
    image: '/images/casa-sicura.jpg',
  },
  {
    icon: Building2,
    title: 'Sicurezza Commerciale',
    description: 'Soluzioni personalizzate per negozi, uffici e attività commerciali.',
    image: '/images/commerciale-sicuro.jpg',
  },
];

export function Servizi() {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#e67e22] font-semibold text-sm tracking-wider uppercase mb-4">
            I Nostri Servizi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a3d62] mb-6">
            Soluzioni di Sicurezza Complete
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Dalla progettazione all'installazione, offriamo servizi di sicurezza 
            completi per la protezione di ambienti residenziali e commerciali.
          </p>
        </div>

        {/* Servizi Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {servizi.map((servizio, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={servizio.image} 
                  alt={servizio.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-[#e67e22] rounded-xl flex items-center justify-center mb-3">
                    <servizio.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3d62] mb-3">
                  {servizio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servizio.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Aree di intervento */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0a3d62] mb-4">
              Sicurezza per ogni esigenza
            </h3>
            <p className="text-gray-600">
              Soluzioni personalizzate sia per il settore privato che commerciale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aree.map((area, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/90 via-[#0a3d62]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#e67e22] rounded-lg flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{area.title}</h4>
                  </div>
                  <p className="text-white/90">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
