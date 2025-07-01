
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa/Localização */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nossa Localização</h3>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">Mapa Interativo</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Endereço:</strong> Rua das Mesas, 123 - Centro</p>
                  <p><strong>Cidade:</strong> São Paulo - SP</p>
                  <p><strong>CEP:</strong> 01234-567</p>
                  <p><strong>Telefone:</strong> (11) 99999-9999</p>
                  <p><strong>Email:</strong> contato@rotadigitalco.com.br</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6">Entre em Contato</h3>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu nome"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="email"
                      placeholder="Seu email"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Assunto"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <textarea
                    placeholder="Sua mensagem"
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">RD</span>
              </div>
              <span className="font-bold text-lg">Rota Digital</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Rota Digital. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Mesas de qualidade desde 2010
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
