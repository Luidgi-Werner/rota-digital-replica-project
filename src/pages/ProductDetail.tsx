
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Check, Shield, Award, Users } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Convert URL slug to product ID for lookup
  const productSlug = id?.replace(/-/g, ' ').toLowerCase();
  const product = products.find(p => 
    p.name.toLowerCase().includes(productSlug?.split('-')[0] || '') ||
    p.model?.toLowerCase() === productSlug?.split('-')[1]
  ) || products[0]; // Fallback to first product

  const technicalFeatures = [
    {
      title: "Automação Completa",
      description: "Elevação, inclinação do encosto e movimentação da perneira com acionamento elétrico."
    },
    {
      title: "Voltagem Inteligente",
      description: "Placa eletrônica com comutação automática entre 127V e 220V."
    },
    {
      title: "Sistema de comando",
      description: "Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionamento para assepsia) ou comando manual."
    },
    {
      title: "Sistema de Retorno à Posição Inicial",
      description: "Praticidade no reposicionamento com um único comando."
    },
    {
      title: "Estrutura Robusta e Higiênica",
      description: "Base tubular com pintura epóxi de alta resistência, com opções com ou sem rodízios, que facilitam o deslocamento e a assepsia do equipamento."
    },
    {
      title: "Motores",
      description: "Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade."
    },
    {
      title: "Suporte para Lençol de Papel",
      description: "Tubular em aço com mola para troca fácil do rolo."
    }
  ];

  const comfortFeatures = [
    {
      title: "Apoios de Coxas",
      description: "Reguláveis horizontalmente (até 320 mm), verticalmente (até 420 mm), em PVC cristal, removíveis."
    },
    {
      title: "Apoios de Pés",
      description: "Ajustes longitudinais de até 320 mm, com estofamento no mesmo padrão, removíveis."
    },
    {
      title: "Braços Laterais",
      description: "Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado."
    },
    {
      title: "Encosto e Assento",
      description: "Estrutura em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi."
    },
    {
      title: "Perneira Rebatível Motorizada",
      description: "Facilita a conversão entre as posições de cadeira e maca."
    },
    {
      title: "Apoio de Cabeça Anatômico",
      description: "Estofado e revestido com PVC cristal, com ajustes personalizados."
    },
    {
      title: "Gaveta Auxiliar em Inox",
      description: "Facilita a coleta de amostras e organização de instrumentos durante os exames."
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-cyan-500 mb-4">
                {product.name} ®
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm">
                  <span className="font-semibold text-slate-800">Código INMETRO:</span> {product.specifications['Código INMETRO'] || '19.06010'}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-slate-800">Registro ANVISA/MS:</span> {product.specifications['Registro ANVISA/MS'] || '81890340001'}
                </p>
              </div>
              <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-full px-8 py-3">
                Fale agora com a Lanza
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Destaques Técnicos da {product.model}
            </h2>
            <div className="space-y-4">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}:
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Conforto e Ergonomia Ajustáveis
            </h2>
            <div className="space-y-4">
              {comfortFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}:
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Segurança Incorporada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-slate-800 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Chave Geral Bipolar:
                </h3>
                <p className="text-gray-600 text-sm">
                  Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-slate-800 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fusível Externo de Proteção:
                </h3>
                <p className="text-gray-600 text-sm">
                  Aumenta a segurança dos componentes eletrônicos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-cyan-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Check className="w-6 h-6" />
                  <span>ANVISA</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Certificado pela Agência Nacional de Vigilância Sanitária
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Check className="w-6 h-6" />
                  <span>INMETRO</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Certificado pelo Instituto Nacional de Metrologia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-gray-900">
                  <Users className="w-6 h-6" />
                  <span>600+</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Consultórios equipados em todo o Brasil
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-slate-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para equipar seu consultório?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e descubra como a Lanza Medical pode transformar seu espaço.
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-3 text-lg">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
