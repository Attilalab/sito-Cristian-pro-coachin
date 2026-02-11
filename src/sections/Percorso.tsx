import { Phone, ClipboardCheck, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Primo Contatto',
    description: 'Chiamami o compila il form per richiedere un sopralluogo gratuito. Valuteremo insieme le tue esigenze di sicurezza.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Sopralluogo e Progettazione',
    description: 'Visito il sito per analizzare i punti critici e progettare un sistema di sicurezza su misura per te.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installazione Professionale',
    description: 'Installazione rapida e pulita da parte di tecnici qualificati, con formazione sull\'uso del sistema.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Attivazione e Monitoraggio',
    description: 'Il tuo sistema è ora attivo e collegato alla centrale operativa per una protezione continua 24/7.',
  },
];

export function Percorso() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#e67e22] font-semibold text-sm tracking-wider uppercase mb-4">
            Come Funziona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a3d62] mb-6">
            Il Percorso verso la Sicurezza
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Un processo semplice e trasparente per garantirti la massima protezione 
            in pochi giorni
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#e67e22] to-[#e67e22]/30" />
              )}
              
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Number */}
                <div className="text-5xl font-bold text-[#e67e22]/20 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-[#0a3d62] rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#0a3d62] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0a3d62] to-[#1a5f9e] rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Pronto a proteggere ciò che ami?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contattami ora per una consulenza gratuita e senza impegno. 
              Valuteremo insieme la soluzione più adatta alle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:3911384215"
                className="inline-flex items-center justify-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                CHIAMA ORA: 391 138 4215
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
