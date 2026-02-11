import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: '', email: '', messaggio: '' });
    }, 3000);
  };

  return (
    <section 
      id="contatti" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quote Section */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block">
            {/* Quote Marks */}
            <div className="absolute -top-8 -left-8 text-8xl text-red-500/20 font-serif">"</div>
            <div className="absolute -bottom-16 -right-8 text-8xl text-red-500/20 font-serif">"</div>
            
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-['Orbitron']">
              Nel competitivo non vince
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-cyan-500">
                chi gioca di più.
              </span>
              <br />
              Vince chi{' '}
              <span className="relative">
                <span className="relative z-10 text-red-500">capisce di più.</span>
                <span className="absolute -inset-1 bg-red-500/20 blur-lg rounded-lg" />
              </span>
            </blockquote>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-red-500/50" />
            <span className="text-red-500 text-sm tracking-wider">CHRISTIAN</span>
            <div className="w-12 h-px bg-red-500/50" />
          </div>
        </div>

        {/* Contact Form */}
        <div 
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-blue-600/30 to-cyan-500/30 rounded-2xl blur-xl" />
            
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-['Orbitron']">
                  Inizia il tuo percorso
                </h3>
                <p className="text-white/60">
                  Prenota una sessione di valutazione gratuita
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Richiesta inviata!</h4>
                  <p className="text-white/60">Ti contatterò presto per fissare la sessione.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Nome</label>
                      <Input
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Il tuo nome"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-red-500 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="La tua email"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-red-500 focus:ring-red-500/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Messaggio</label>
                    <Textarea
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      placeholder="Raccontami i tuoi obiettivi..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-red-500 focus:ring-red-500/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      INVIA RICHIESTA
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              )}

              {/* Alternative Contacts */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-center text-white/40 text-sm mb-4">Oppure contattami su</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600/20 hover:border-red-500/50 border border-transparent transition-all"
                  >
                    <Mail className="w-5 h-5 text-white/60" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600/20 hover:border-green-500/50 border border-transparent transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-white/60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
