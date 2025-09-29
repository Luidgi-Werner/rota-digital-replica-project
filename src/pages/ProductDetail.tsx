import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Check, Shield, Award, Users, Phone, Star, Wrench, Heart, Camera, ArrowRight, Zap, Target, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeText } from '@/components/ui/fade-text';
import { urlToProductMapping } from '@/utils/productRoutes';
import MetaTags from '@/components/seo/MetaTags';
import ImageEditor from '@/components/admin/ImageEditor';
import { useEditableImage } from '@/hooks/useEditableImage';
import { ImageZoomDialog } from '@/components/ui/image-zoom-dialog';
const ProductDetail = () => {
  const location = useLocation();

  // Extract slug from pathname
  const slug = location.pathname.replace('/produto/', '');

  // Find product by URL mapping or fallback to first product
  const productId = urlToProductMapping[slug] || '1';
  const product = products.find(p => p.id === productId) || products[0];

  // Use synchronized image editing hook
  const { currentImage, handleImageChange } = useEditableImage({
    defaultImage: product.images[1] || product.images[0], // Use second image for product page
    imageKey: `product-${productId}-detail`
  });

  // Product-specific content and features
  const productFeatures = getProductSpecificFeatures(productId);
  const productHighlights = getProductHighlights(productId);
  const productApplications = getProductApplications(productId);

  // Group specifications by category for better organization
  const groupedSpecs = {
    'Automação e Controle': ['Automação Completa', 'Voltagem Inteligente', 'Sistema de comando', 'Sistema de Retorno', 'Motores'],
    'Características Especiais': ['Inclinação Especial', 'Trendlemburg', 'Prolongador Recolhível', 'Apoio Facial Exclusivo'],
    'Ergonomia e Conforto': ['Apoios de Coxas', 'Apoios de Pés', 'Perneira', 'Gaveta Auxiliar', 'Estofamento', 'Braços Laterais'],
    'Estrutura e Segurança': ['Estrutura'],
    'Dimensões e Capacidade': ['Altura Regulável', 'Largura útil', 'Comprimento Total', 'Peso suportado', 'Peso Líquido'],
    'Informações de Embalagem': ['Peso Bruto (embalada)', 'Dimensões da Embalagem'],
    'Certificações': ['Código INMETRO', 'Registro ANVISA/MS']
  };
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Automação e Controle':
        return <Wrench className="h-5 w-5" />;
      case 'Características Especiais':
        return <Star className="h-5 w-5" />;
      case 'Ergonomia e Conforto':
        return <Heart className="h-5 w-5" />;
      case 'Estrutura e Segurança':
        return <Shield className="h-5 w-5" />;
      case 'Certificações':
        return <Award className="h-5 w-5" />;
      default:
        return <Check className="h-5 w-5" />;
    }
  };
  return <>
    <MetaTags title={`${product.name} - Lanza Medical`} description={product.description} keywords={`${product.name}, mesa médica, equipamentos médicos, ${product.category}`} />
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
          {/* Product Image */}
          <motion.div className="flex justify-center" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
            <div className="max-w-lg w-full relative">
              <div className="absolute -top-4 -right-4 bg-[#003250] text-white p-3 rounded-full z-10">
                <Star className="w-6 h-6" />
              </div>
              {/* Mostrar ImageEditor apenas no ambiente de desenvolvimento/edição */}
              {import.meta.env.DEV && (
                <ImageEditor 
                  currentImage={currentImage} 
                  onImageChange={handleImageChange}
                  productName={product.name}
                />
              )}
              <ImageZoomDialog src={currentImage} alt={product.name}>
                <img 
                  src={currentImage} 
                  alt={product.name} 
                  className="w-full h-[500px] object-contain rounded-lg shadow-lg bg-white cursor-pointer hover:opacity-90 transition-opacity"
                />
              </ImageZoomDialog>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div className="space-y-6" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
            <div>
              <FadeText className="text-3xl font-bold text-[#003250] mb-4" direction="up" text={`${product.name} ®`} />
              <div className="border-l-4 border-[#003250] pl-4 mb-6 my-[24px] py-0">
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
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

        {/* Product Highlights */}
        <motion.div className="mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <div className="text-center mb-12">
            <FadeText className="text-3xl font-bold text-[#003250] mb-6" direction="up" text="Principais Diferenciais" />
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productHighlights.map((highlight, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-[#003250] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#003250] mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{highlight.description}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div className="mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <div className="text-center mb-12">
            <FadeText className="text-3xl font-bold text-[#003250] mb-6" direction="up" text="Aplicações Recomendadas" />
            
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productApplications.map((application, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="bg-gradient-to-br from-[#003250] to-[#004a75] text-white rounded-lg p-4 text-center">
                <div className="text-cyan-400 mb-2">{application.icon}</div>
                <p className="text-sm font-medium">{application.name}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Product Features */}
        <motion.div className="mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <div className="text-center mb-12">
            <FadeText className="text-3xl font-bold text-[#003250] mb-6" direction="up" text="Recursos Exclusivos" />
            
          </div>
          
          <div className="space-y-6">
            {productFeatures.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003250] rounded-lg p-3 text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#003250] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-3 text-justify">{feature.description}</p>
                    {feature.benefits && <ul className="space-y-1">
                        {feature.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                            <Check className="w-4 h-4 text-[#003250] mr-2 flex-shrink-0" />
                            {benefit}
                          </li>)}
                      </ul>}
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div className="mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <div className="text-center mb-16">
            <FadeText className="text-3xl font-bold text-[#003250] mb-6" direction="up" text="Especificações Técnicas Detalhadas" />
            
          </div>
          
          <div className="space-y-12">
            {Object.entries(groupedSpecs).map(([category, keys], categoryIndex) => {
              const categorySpecs = keys.reduce((acc, key) => {
                if (product.specifications[key]) {
                  acc[key] = product.specifications[key];
                }
                return acc;
              }, {} as Record<string, string>);
              if (Object.keys(categorySpecs).length === 0) return null;
              return <motion.div key={category} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: categoryIndex * 0.1
              }} className="bg-white rounded-xl shadow-lg border border-[#003250]/10 overflow-hidden">
                  <div className="bg-[#003250] text-white p-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-white">
                        {getIconForCategory(category)}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {category}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(categorySpecs).map(([key, value], index) => <motion.div key={key} initial={{
                      opacity: 0,
                      x: -10
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + index * 0.05
                    }} className="border-l-4 border-[#003250] pl-4 py-2">
                          <dt className="font-semibold text-[#003250] text-sm uppercase tracking-wide mb-1">
                            {key}
                          </dt>
                          <dd className="text-gray-700 text-sm leading-relaxed">
                            {value}
                          </dd>
                        </motion.div>)}
                    </div>
                  </div>
                </motion.div>;
            })}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div className="bg-[#003250] rounded-2xl p-8 mb-16 text-white" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <FadeText className="text-2xl font-bold mb-8 text-center text-white" direction="up" text="Segurança Incorporada" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
              <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Chave Geral Bipolar
                </h3>
                <div className="h-px bg-cyan-400 w-12 mb-3"></div>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                  Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg" initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
              <Award className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Fusível Externo de Proteção
                </h3>
                <div className="h-px bg-cyan-400 w-12 mb-3"></div>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                  Aumenta a segurança dos componentes eletrônicos.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }}>
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

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
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

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
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
        <motion.div className="text-center bg-gradient-to-r from-[#003250] to-[#004a75] text-white rounded-2xl p-12" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <FadeText className="text-3xl font-bold mb-4 text-white" direction="up" text="Pronto para equipar seu consultório?" />
          <motion.p className="text-xl text-gray-300 mb-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
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
  </>;
};

// Product-specific features
function getProductSpecificFeatures(productId: string) {
  const features = {
    '1': [
    // RT2000
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Sistema de Voltagem Inteligente',
      description: 'Comutação automática entre 127V e 220V sem necessidade de ajustes manuais.',
      benefits: ['Adaptação automática à rede elétrica', 'Proteção contra variações de tensão', 'Maior durabilidade dos componentes']
    }, {
      icon: <Settings className="w-6 h-6" />,
      title: 'Comando Duplo Opcional',
      description: 'Flexibilidade de controle através de pedal com 8 funções ou comando manual.',
      benefits: ['Controle preciso dos movimentos', 'Facilita procedimentos complexos', 'Ergonomia para o profissional']
    }],
    '2': [
    // RT2500
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Design Slim Compacto',
      description: 'Estrutura otimizada para consultórios com espaço reduzido sem perder funcionalidade.',
      benefits: ['Ideal para espaços menores', 'Mantém todas as funcionalidades', 'Design moderno e elegante']
    }, {
      icon: <Shield className="w-6 h-6" />,
      title: 'Base Versátil',
      description: 'Opções com ou sem rodízios para diferentes necessidades de instalação.',
      benefits: ['Adaptabilidade ao ambiente', 'Mobilidade quando necessário', 'Estabilidade garantida']
    }],
    '3': [
    // RT4000 Histeroscopia
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Inclinação Especial do assento para Histeroscopia',
      description: 'Inclinação motorizada do assento em até 17° especifica para procedimentos de histeroscopia.',
      benefits: ['Posicionamento ideal para histeroscopia', 'Melhor visualização para procedimentos', 'Maior precisão nos procedimentos']
    }, {
      icon: <Star className="w-6 h-6" />,
      title: 'Estrutura Robusta Premium',
      description: 'Construção reforçada para suportar procedimentos mais complexos e especializados.',
      benefits: ['Durabilidade superior', 'Estabilidade em procedimentos longos', 'Maior capacidade de carga']
    }],
    '4': [
    // RT3000 Trendlemburg
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: 'Sistema Trendlemburg Motorizado',
      description: 'Inclinação do equipamento em até 17° acionada por botões laterais para procedimentos específicos.',
      benefits: ['Melhor acesso vascular', 'Facilita procedimentos plásticos', 'Posicionamento cirúrgico ideal']
    }, {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Quatro Motores Independentes',
      description: 'Sistema de motorização com quatro moto-redutores para máxima precisão de movimento.',
      benefits: ['Movimentos mais suaves', 'Maior durabilidade', 'Controle independente de cada função']
    }],
    '5': [
    // RT5000
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Versatilidade Clínica',
      description: 'Projetada para múltiplas especialidades: dermatologia, estética, ultrassonografia e mais.',
      benefits: ['Adaptável a diversos procedimentos', 'Investimento versátil', 'Máximo aproveitamento']
    }, {
      icon: <Shield className="w-6 h-6" />,
      title: 'Braços Laterais em Alumínio',
      description: 'Estrutura em alumínio fundido com abertura lateral e longitudinal.',
      benefits: ['Material durável e leve', 'Facilita acesso ao paciente', 'Design ergonômico']
    }],
    '6': [
    // RT5000 Estetic
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: 'Prolongador Recolhível Automático',
      description: 'Extensão automática que amplia o comprimento da maca para até 1,98m.',
      benefits: ['Acomoda pacientes de qualquer altura', 'Acionamento automático', 'Otimização do espaço']
    }, {
      icon: <Star className="w-6 h-6" />,
      title: 'Estofamento Duplo Conforto',
      description: 'Revestimento em PVC cristal com PU injetado de dupla densidade, para máximo conforto.',
      benefits: ['Conforto superior para o paciente', 'Fácil higienização', 'Alta durabilidade e resistência']
    }],
    '7': [
    // RT5000 E-IC
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Apoio Facial Exclusivo',
      description: 'Apoio anatômico com descanso para braços, ideal para procedimentos em decúbito ventral.',
      benefits: ['Especializado em transplante capilar', 'Conforto em procedimentos longos', 'Acesso facilitado à área doadora']
    }, {
      icon: <Star className="w-6 h-6" />,
      title: 'Acabamento Premium',
      description: 'Design ergonômico com acabamento de alta qualidade para clínicas especializadas.',
      benefits: ['Visual profissional', 'Materiais de primeira qualidade', 'Durabilidade superior']
    }],
    '8': [
    // RT2500 ES
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Braços Biarticulados Removíveis',
      description: 'Braços laterais com sistema biarticulado, removíveis e estofados na cor.',
      benefits: ['Máxima flexibilidade de posicionamento', 'Fácil remoção quando necessário', 'Acabamento harmonioso']
    }, {
      icon: <Star className="w-6 h-6" />,
      title: 'Design Compacto Dermatológico',
      description: 'Projetada especificamente para as exigências da dermatologia e medicina estética.',
      benefits: ['Otimizada para dermatologia', 'Acesso facilitado ao paciente', 'Ergonomia específica']
    }]
  };
  return features[productId] || features['1'];
}

// Product highlights
function getProductHighlights(productId: string) {
  const highlights = {
    '1': [{
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Automação Completa',
      description: 'Elevação do encosto, assento e perneira totalmente motorizados'
    }, {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Certificação Total',
      description: 'ANVISA e INMETRO para máxima segurança'
    }, {
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Rodízios com Trava',
      description: 'Mobilidade e estabilidade em um só sistema'
    }],
    '2': [{
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Design Slim',
      description: 'Ideal para consultórios com espaço otimizado'
    }, {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Base Versátil',
      description: 'Opções com ou sem rodízios'
    }, {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Voltagem Automática',
      description: 'Comutação inteligente 127V/220V'
    }],
    '3': [{
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Histeroscopia',
      description: 'Inclinação especial até 17° para procedimentos'
    }, {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Estrutura Robusta',
      description: 'Suporte reforçado para procedimentos complexos'
    }, {
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Precisão Milimétrica',
      description: 'Ajustes precisos para cada procedimento'
    }],
    '4': [{
      icon: <ArrowRight className="w-8 h-8 text-white" />,
      title: 'Trendlemburg 17°',
      description: 'Inclinação motorizada para procedimentos específicos'
    }, {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: '4 Motores',
      description: 'Sistema motorizado independente'
    }, {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Encosto Recortado',
      description: 'Facilidade de acesso aos membros superiores'
    }],
    '5': [{
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Multi-Especialidade',
      description: 'Ideal para diversas áreas médicas'
    }, {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Braços Fundidos',
      description: 'Alumínio fundido de alta qualidade'
    }, {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: '3 Motores',
      description: 'Sistema de automação completa'
    }],
    '6': [{
      icon: <ArrowRight className="w-8 h-8 text-white" />,
      title: 'Prolongador 1,98m',
      description: 'Extensão automática para qualquer altura'
    }, {
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Duplo Conforto',
      description: 'Conforto superior em procedimentos prolongados'
    }, {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Design Inovador',
      description: 'Referência em procedimentos estéticos'
    }],
    '7': [{
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Apoio Facial',
      description: 'Exclusivo para transplante capilar'
    }, {
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Premium Quality',
      description: 'Acabamento de alta qualidade'
    }, {
      icon: <ArrowRight className="w-8 h-8 text-white" />,
      title: 'Decúbito Ventral',
      description: 'Posicionamento ideal para IC'
    }],
    '8': [{
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Braços Removíveis',
      description: 'Sistema biarticulado flexível'
    }, {
      icon: <Star className="w-8 h-8 text-white" />,
      title: 'Dermatologia',
      description: 'Especializada para pele'
    }, {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Compacta',
      description: 'Design otimizado para espaços menores'
    }]
  };
  return highlights[productId] || highlights['1'];
}

// Product applications
function getProductApplications(productId: string) {
  const applications = {
    '1': [{
      icon: <Heart className="w-6 h-6" />,
      name: 'Ginecologia'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Pequenas Cirurgias'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Coleta de Materiais'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Obstetrícia'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Procedimentos Estéticos'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Exames Clínicos'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Procedimentos Vasculares'
    }],
    '2': [{
      icon: <Heart className="w-6 h-6" />,
      name: 'Ginecologia'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Coleta de Materiais'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Estética'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Obstetrícia'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Clínica Geral'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Procedimentos Vasculares'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Consultórios Compactos'
    }],
    '3': [{
      icon: <Target className="w-6 h-6" />,
      name: 'Histeroscopia'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Ginecologia'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Procedimentos Complexos'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Cirurgias Ginecológicas'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Obstetrícia'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Endoscopia'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Procedimentos Especiais'
    }],
    '4': [{
      icon: <Wrench className="w-6 h-6" />,
      name: 'Cirurgia Plástica'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Procedimentos Vasculares'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Implantes Capilares'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Clínica Geral'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Pequenas Cirurgias'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Trendlemburg'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Medicina Estética'
    }],
    '5': [{
      icon: <Heart className="w-6 h-6" />,
      name: 'Dermatologia'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Estética'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Acupuntura'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Massagens'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Tatuagens'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Piercings'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Clínica Geral'
    }],
    '6': [{
      icon: <Star className="w-6 h-6" />,
      name: 'Procedimentos Estéticos'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Harmonização Facial'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Pigmentação'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Dermatologia'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Massagens'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Tratamentos Faciais'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Medicina Estética'
    }],
    '7': [{
      icon: <Target className="w-6 h-6" />,
      name: 'Transplante Capilar'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Implante Capilar'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'FUE'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'FUT'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Tricologia'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Micropigmentação'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Densidade Capilar'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Restauração Capilar'
    }],
    '8': [{
      icon: <Heart className="w-6 h-6" />,
      name: 'Dermatologia'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Medicina Estética'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Procedimentos Faciais'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Tratamentos de Pele'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Laser Dermatológico'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Peeling'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Botox'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Diagnóstico Dermatológico'
    }],
    '9': [{
      icon: <Heart className="w-6 h-6" />,
      name: 'Dermatologia'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Estética'
    }, {
      icon: <Camera className="w-6 h-6" />,
      name: 'Ultrassonografia'
    }, {
      icon: <Target className="w-6 h-6" />,
      name: 'Acupuntura'
    }, {
      icon: <Wrench className="w-6 h-6" />,
      name: 'Massagens'
    }, {
      icon: <Shield className="w-6 h-6" />,
      name: 'Tatuagens'
    }, {
      icon: <Star className="w-6 h-6" />,
      name: 'Piercings'
    }, {
      icon: <Heart className="w-6 h-6" />,
      name: 'Clínica Geral'
    }]
  };
  return applications[productId] || applications['1'];
}
export default ProductDetail;