
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Address */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-cyan-500 rounded transform rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded transform -rotate-45"></div>
            </div>
            <div>
              <span className="font-bold text-xl">Lanza medical</span>
              <p className="text-sm text-gray-400">
                R. Barreiros, 2524 — Vila Elisa, Ribeirão Preto — SP, 14075-000
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="text-right">
              <p className="text-sm">vendas@lanzamedical.com.br</p>
              <p className="text-sm">(16) 9 9447-2195 - WhatsApp</p>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6">
              Fale conosco agora
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 LANZA MEDICAL. TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
