import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Check, Shield, Award, Users, Phone, Star, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeText } from '@/components/ui/fade-text';
const ProductDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();

  // Direct mapping between URL slugs and product IDs
  const urlToProductMapping: Record<string, string> = {
    'mesa-ginecologica-rt-2000': '1',
    'mesa-ginecologica-rt2500': '2', 
    'mesa-ginecologica-rt4000-histeroscopia': '3',
    'mesa-clinica-eletrica-trendlemburg-rt3000': '4',
    'mesa-clinica-rt5000': '5',
    'mesa-clinica-rt5000-estetic': '6',
    'mesa-clinica-rt5000-e-ic': '7',
    'mesa-clinica-rt2500-es': '8'
  };

  // Find product by URL mapping or fallback to first product
  const productId = urlToProductMapping[id || ''] || '1';
  const product = products.find(p => p.id === productId) || products[0];

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
  return <div className="py-24">
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
            <div className="max-w-md w-full relative">
              <div className="absolute -top-4 -right-4 bg-[#003250] text-white p-3 rounded-full z-10">
                <Star className="w-6 h-6" />
              </div>
              <img src={product.images[0]} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
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
            <div className="h-1 w-24 bg-[#003250] mx-auto my-[20px]"></div>
          </div>
          
          <div className="space-y-16">
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
            }} className="bg-white rounded-2xl shadow-xl border-2 border-[#003250]/10 overflow-hidden">
                  <div className="bg-[#003250] text-white p-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-white">
                        {getIconForCategory(category)}
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {category}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
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
                  }} className="border-l-4 border-[#003250] pl-6 py-3">
                          <dt className="font-semibold text-[#003250] text-base uppercase tracking-wide mb-2">
                            {key}
                          </dt>
                          <dd className="text-gray-700 text-base leading-relaxed">
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
                <p className="text-gray-300 text-sm leading-relaxed">
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
                <p className="text-gray-300 text-sm leading-relaxed">
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
    </div>;
};
export default ProductDetail;