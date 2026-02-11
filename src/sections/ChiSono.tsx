import { Award, CheckCircle, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const competenze = [
  'Progettazione impianti di sicurezza',
  'Validazione tecnica sistemi antintrusione',
  'Installazione e manutenzione',
  'Consulenza personalizzata',
  'Integrazione sistemi Verisure',
  'Sicurezza commerciale e privata',
];

const numeri = [
  { value: '8+', label: 'Anni di esperienza' },
  { value: '500+', label: 'Installazioni completate' },
  { value: '100%', label: 'Clienti soddisfatti' },
  { value: '24/7', label: 'Supporto tecnico' },
];

export function ChiSono() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="chi-sono" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/riccardo-mazzetti.jpg" 
                alt="Riccardo Mazzetti"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/60 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#e67e22] text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">8+</div>
              <div className="text-sm opacity-90">Anni di<br/>esperienza</div>
            </div>

            {/* Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-[#e67e22]" />
                <div>
                  <div className="font-bold text-[#0a3d62]">Verisure</div>
                  <div className="text-xs text-gray-500">Partner Ufficiale</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="inline-block text-[#e67e22] font-semibold text-sm tracking-wider uppercase mb-4">
              Chi Sono
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a3d62] mb-6">
              Riccardo Mazzetti
            </h2>
            
            <p className="text-xl text-gray-600 mb-2">
              Esperto in Sicurezza e Tecnico Specializzato
            </p>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#e67e22]" />
                <span>Via Crema 3, Ripalta Arpina (CR)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e67e22]" />
                <span>391 138 4215</span>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Da oltre 8 anni mi occupo di sicurezza, progettazione e validazione di impianti 
                di sicurezza sia per il settore commerciale che privato. La mia missione è 
                proteggere ciò che più conta per i miei clienti: famiglie, case e attività.
              </p>
              <p>
                Come principale fornitore Verisure Italia, offro soluzioni all'avanguardia 
                con tecnologia di ultima generazione, supportata da un servizio di monitoraggio 
                professionale 24 ore su 24, 7 giorni su 7.
              </p>
              <p>
                Ogni progetto inizia con un'analisi approfondita delle esigenze specifiche, 
                seguita da una progettazione su misura e un'installazione impeccabile. 
                Il mio impegno non si ferma all'installazione: garantisco assistenza 
                continua e manutenzione preventiva.
              </p>
            </div>

            {/* Competenze */}
            <div className="mb-8">
              <h3 className="font-bold text-[#0a3d62] mb-4">Competenze principali:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {competenze.map((competenza, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#e67e22] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{competenza}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('#contatti')}
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              PRENOTA CONSULENZA GRATUITA
            </Button>
          </div>
        </div>

        {/* Numbers */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {numeri.map((numero, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#e67e22] mb-2">
                {numero.value}
              </div>
              <div className="text-gray-600 text-sm">{numero.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
