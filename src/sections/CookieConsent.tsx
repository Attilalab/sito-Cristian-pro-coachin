import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#e67e22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-[#e67e22]" />
            </div>
            <div>
              <h4 className="font-bold text-[#0a3d62] mb-1">
                Utilizziamo i cookie
              </h4>
              <p className="text-gray-600 text-sm max-w-xl">
                Questo sito utilizza cookie tecnici necessari al funzionamento e cookie 
                di terze parti per migliorare l'esperienza utente. 
                <a href="#" className="text-[#e67e22] hover:underline ml-1">
                  Leggi la Cookie Policy
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <Button 
              onClick={onDecline}
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <X className="w-4 h-4 mr-2" />
              Rifiuta
            </Button>
            <Button 
              onClick={onAccept}
              className="flex-1 sm:flex-none bg-[#e67e22] hover:bg-[#d35400] text-white"
            >
              Accetta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
