import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonianze = [
  {
    name: 'Marco Bianchi',
    role: 'Proprietario di casa',
    location: 'Cremona',
    text: 'Riccardo è stato impeccabile dalla prima consulenza all\'installazione. Il sistema di allarme Verisure ci dà una tranquillità incredibile, soprattutto quando siamo in vacanza. Professionale, puntuale e sempre disponibile per qualsiasi domanda.',
    rating: 5,
  },
  {
    name: 'Laura Rossi',
    role: 'Titolare negozio',
    location: 'Crema',
    text: 'Ho affidato a Riccardo la sicurezza del mio negozio e non potrei essere più soddisfatta. Le telecamere e l\'allarme funzionano perfettamente, e il monitoraggio 24/7 mi fa sentire protetta. Consigliatissimo!',
    rating: 5,
  },
  {
    name: 'Giuseppe Ferrari',
    role: 'Amministratore condominio',
    location: 'Ripalta Arpina',
    text: 'Abbiamo installato un sistema di videosorveglianza per il nostro condominio. Riccardo ha progettato una soluzione perfetta per le nostre esigenze, con ottimo rapporto qualità-prezzo. Servizio professionale e cordiale.',
    rating: 5,
  },
  {
    name: 'Anna Verdi',
    role: 'Libera professionista',
    location: 'Casaletto Vaprio',
    text: 'Dopo un tentativo di furto in casa, ho contattato Riccardo per mettere in sicurezza la mia abitazione. Mi ha guidato nella scelta del sistema più adatto e l\'installazione è stata rapidissima. Ora dormo sonni tranquilli!',
    rating: 5,
  },
];

export function Testimonianze() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonianza = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonianze.length);
  };

  const prevTestimonianza = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonianze.length) % testimonianze.length);
  };

  return (
    <section id="testimonianze" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#e67e22] font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonianze
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a3d62] mb-6">
            Cosa Dicono i Miei Clienti
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            La soddisfazione dei miei clienti è la mia migliore referenza. 
            Ecco alcune delle esperienze condivise.
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {testimonianze.map((testimonianza, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonianza.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#e67e22] text-[#e67e22]" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#e67e22]/20" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonianza.text}
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0a3d62] to-[#1a5f9e] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonianza.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[#0a3d62]">{testimonianza.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonianza.role} - {testimonianza.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonianze[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#e67e22] text-[#e67e22]" />
              ))}
            </div>
            
            <div className="relative mb-6">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#e67e22]/20" />
              <p className="text-gray-700 leading-relaxed pl-6">
                {testimonianze[currentIndex].text}
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0a3d62] to-[#1a5f9e] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {testimonianze[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-bold text-[#0a3d62]">{testimonianze[currentIndex].name}</div>
                <div className="text-sm text-gray-500">
                  {testimonianze[currentIndex].role} - {testimonianze[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevTestimonianza}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#0a3d62]" />
            </button>
            <button 
              onClick={nextTestimonianza}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#0a3d62]" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonianze.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#e67e22]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-[#0a3d62] mb-1">500+</div>
            <div className="text-gray-600 text-sm">Clienti soddisfatti</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-[#0a3d62] mb-1">4.9/5</div>
            <div className="text-gray-600 text-sm">Valutazione media</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-[#0a3d62] mb-1">100%</div>
            <div className="text-gray-600 text-sm">Raccomandano</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-[#0a3d62] mb-1">24h</div>
            <div className="text-gray-600 text-sm">Tempo di risposta</div>
          </div>
        </div>
      </div>
    </section>
  );
}
