import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const contattiInfo = [
  {
    icon: Phone,
    title: 'Telefono',
    value: '391 138 4215',
    link: 'tel:3911384215',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@riccardomazzetti.it',
    link: 'mailto:info@riccardomazzetti.it',
  },
  {
    icon: MapPin,
    title: 'Indirizzo',
    value: 'Via Crema 3, Ripalta Arpina (CR)',
    link: 'https://maps.google.com/?q=Via+Crema+3+Ripalta+Arpina',
  },
  {
    icon: Clock,
    title: 'Orari',
    value: 'Lun-Ven: 8:00 - 19:00',
    link: null,
  },
];

export function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: '',
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulazione invio form
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        messaggio: '',
        privacy: false,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#e67e22] font-semibold text-sm tracking-wider uppercase mb-4">
            Contatti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a3d62] mb-6">
            Richiedi un Preventivo Gratuito
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Compila il form per richiedere una consulenza gratuita e senza impegno. 
            Ti ricontatterò entro 24 ore.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#0a3d62] to-[#1a5f9e] rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Informazioni di Contatto</h3>
              <p className="text-white/80 mb-8">
                Sono a tua disposizione per qualsiasi informazione sui servizi di sicurezza. 
                Contattami per una consulenza gratuita.
              </p>

              <div className="space-y-6">
                {contattiInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#e67e22]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white font-medium hover:text-[#e67e22] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner Badge */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-[#0a3d62] font-bold text-xs text-center">VERISURE<br/>PARTNER</span>
                  </div>
                  <div>
                    <div className="font-bold">Partner Ufficiale Verisure</div>
                    <div className="text-white/60 text-sm">Tecnologia di ultima generazione</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a3d62] mb-4">
                    Richiesta Inviata!
                  </h3>
                  <p className="text-gray-600">
                    Grazie per avermi contattato. Ti ricontatterò entro 24 ore.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo nome"
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cognome">Cognome *</Label>
                      <Input
                        id="cognome"
                        name="cognome"
                        value={formData.cognome}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo cognome"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="La tua email"
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo telefono"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="messaggio">Messaggio</Label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      placeholder="Descrivi le tue esigenze di sicurezza..."
                      rows={4}
                      className="bg-white resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, privacy: checked as boolean })
                      }
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      Accetto la <a href="#" className="text-[#e67e22] hover:underline">Privacy Policy</a> e 
                      autorizzo il trattamento dei miei dati personali per ricevere informazioni 
                      sui servizi offerti.
                    </Label>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    INVIA RICHIESTA
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
