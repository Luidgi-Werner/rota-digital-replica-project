
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Check, Shield, Award, Users, Phone, Star, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeText } from '@/components/ui/fade-text';

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
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Product Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-md w-full relative">
              <div className="absolute -top-4 -right-4 bg-[#003250] text-white p-3 rounded-full z-10">
                <Star className="w-6 h-6" />
              </div>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <FadeText
                className="text-3xl font-bold text-[#003250] mb-4"
                direction="up"
                text={`${product.name} ®`}
              />
              <div className="border-l-4 border-[#003250] pl-4 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#003250]" />
                  <span className="font-semibold text-[#003250]">Código INMETRO:</span>
                  <span className="text-gray-700">{product.specifications['Código INMETRO'] || '19.06010'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#003250]" />
                  <span className="font-semibold text-[#003250]">Registro ANVISA/MS:</span>
                  <span className="text-gray-700">{product.specifications['Registro ANVISA/MS'] || '81890340001'}</span>
                </div>
              </div>
              
              <Button asChild className="bg-[#003250] hover:bg-[#003250]/90 text-white rounded-full px-8 py-3">
                <Link to="/contato">
                  <Phone className="w-4 h-4 mr-2" />
                  Fale agora com a Lanza
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Features */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Wrench className="w-8 h-8 text-[#003250]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Destaques Técnicos da {product.model}
              </h2>
            </div>
            <div className="space-y-4">
              {technicalFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border-l-4 border-[#003250]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-[#003250] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-[#003250]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Conforto e Ergonomia Ajustáveis
              </h2>
            </div>
            <div className="space-y-4">
              {comfortFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border-l-4 border-[#003250]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-[#003250] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div 
          className="bg-[#003250] rounded-2xl p-8 mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FadeText
            className="text-2xl font-bold mb-8 text-center text-white"
            direction="up"
            text="Segurança Incorporada"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Chave Geral Bipolar
                </h3>
                <div className="h-px bg-cyan-400 w-12 mb-3"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Award className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Fusível Externo de Proteção
                </h3>
                <div className="h-px bg-cyan-400 w-12 mb-3"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Aumenta a segurança dos componentes eletrônicos.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-cyan-500 text-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Check className="w-6 h-6" />
                    <span>ANVISA</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-px bg-white/30 w-16 mx-auto mb-3"></div>
                  <p className="text-sm">
                    Certificado pela Agência Nacional de Vigilância Sanitária
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#003250] text-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Check className="w-6 h-6" />
                    <span>INMETRO</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-px bg-white/30 w-16 mx-auto mb-3"></div>
                  <p className="text-sm">
                    Certificado pelo Instituto Nacional de Metrologia
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gray-100 border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2 text-gray-900">
                    <Users className="w-6 h-6" />
                    <span>600+</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-px bg-gray-400 w-16 mx-auto mb-3"></div>
                  <p className="text-sm text-gray-600">
                    Consultórios equipados em todo o Brasil
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-[#003250] to-[#004a75] text-white rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FadeText
            className="text-3xl font-bold mb-4 text-white"
            direction="up"
            text="Pronto para equipar seu consultório?"
          />
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Entre em contato conosco e descubra como a Lanza Medical pode transformar seu espaço.
          </motion.p>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-3 text-lg">
            <Link to="/contato">
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
