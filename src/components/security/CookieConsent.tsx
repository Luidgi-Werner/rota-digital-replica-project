import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie, Shield, Info } from 'lucide-react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('lanza-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set('lanza-cookie-consent', 'all', { expires: 365 });
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    Cookies.set('lanza-cookie-consent', 'essential', { expires: 365 });
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set('lanza-cookie-consent', 'rejected', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl shadow-lg border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">
                Uso de Cookies e Privacidade
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar sua experiência. 
                Seus dados são protegidos conforme a LGPD.
              </p>

              {showDetails && (
                <div className="bg-muted/50 rounded-lg p-4 mb-4 text-sm">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4" />
                        Cookies Essenciais
                      </h4>
                      <p className="text-muted-foreground">
                        Necessários para o funcionamento básico do site, como navegação e acesso a áreas seguras.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium flex items-center gap-2 mb-2">
                        <Info className="h-4 w-4" />
                        Cookies Analíticos
                      </h4>
                      <p className="text-muted-foreground">
                        Nos ajudam a entender como você interage com o site para melhorarmos a experiência.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button onClick={handleAcceptAll} size="sm" className="bg-primary">
                  Aceitar Todos
                </Button>
                <Button onClick={handleAcceptEssential} variant="outline" size="sm">
                  Apenas Essenciais
                </Button>
                <Button 
                  onClick={() => setShowDetails(!showDetails)} 
                  variant="ghost" 
                  size="sm"
                >
                  {showDetails ? 'Ocultar' : 'Mais Informações'}
                </Button>
              </div>
            </div>
            <Button 
              onClick={handleReject} 
              variant="ghost" 
              size="sm" 
              className="p-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;