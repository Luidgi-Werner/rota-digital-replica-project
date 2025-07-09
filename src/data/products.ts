
import { Product, ProductCategory, Testimonial, Statistic } from '@/types/product';

export const productCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'Clínicas de Ginecologia',
    slug: 'ginecologia',
    description: 'Equipamentos especializados para ginecologia',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    name: 'Clínicas de Estética',
    slug: 'estetica',
    description: 'Soluções para procedimentos estéticos',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    name: 'Consultórios Médicos',
    slug: 'clinica',
    description: 'Equipamentos para consultórios médicos',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    name: 'Consultórios de Dermatologia',
    slug: 'dermatologia',
    description: 'Equipamentos para dermatologia',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    name: 'Clínicas de Transplante Capilar',
    slug: 'transplante',
    description: 'Equipamentos para transplante capilar',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
  }
];

export const products: Product[] = [
  // Mesas Ginecológicas
  {
    id: '1',
    name: 'Mesa Ginecológica RT 2000',
    category: 'ginecologia',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Ginecológica RT2000 foi desenvolvida para oferecer máxima eficiência em exames ginecológicos, obstétricos, procedimentos clínicos diversos e pequenas cirurgias. Seu design moderno e funcional proporciona conforto tanto ao paciente quanto ao profissional, sendo indicada também para exames de ultrassonografia, procedimentos estéticos, vasculares, entre outros.',
    specifications: {
      'Modelo': 'RT2000',
      'Categoria': 'Ginecológica',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT2000'
  },
  {
    id: '2',
    name: 'Mesa Ginecológica RT2500',
    category: 'ginecologia',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Ginecológica RT2500 foi projetada para atender com excelência a uma ampla gama de procedimentos clínicos e exames, como ginecológicos, obstétricos, coleta de materiais, exames de ultrassonografia, procedimentos vasculares e estéticos. Sua estrutura slim é ideal para consultórios com espaço reduzido, proporcionando otimização do ambiente sem abrir mão da funcionalidade e do conforto.',
    specifications: {
      'Modelo': 'RT2500',
      'Categoria': 'Ginecológica',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,59 m a 0,95 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,60 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT2500'
  },
  {
    id: '3',
    name: 'Mesa Ginecológica RT4000 Histeroscopia',
    category: 'ginecologia',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Ginecológica RT4000 foi desenvolvida para atender com excelência a uma ampla gama de procedimentos clínicos, destacando-se como a opção ideal para histeroscopia, ultrassonografia, exames ginecológicos e obstétricos e outros procedimentos especializados. Um dos principais diferenciais deste modelo é a inclinação motorizada do assento em até 25°, que proporciona o posicionamento ideal para a realização de exames de histeroscopia com muito mais conforto e eficiência.',
    specifications: {
      'Modelo': 'RT4000',
      'Categoria': 'Ginecológica Histeroscopia',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT4000'
  },
  // Mesas Clínicas
  {
    id: '4',
    name: 'Mesa Clínica Elétrica com Trendlemburg RT3000',
    category: 'clinica',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Clínica Elétrica com Trendlemburg RT3000 foi desenvolvida para atender com excelência a uma ampla gama de procedimentos clínicos, como exames de ultrassonografia, procedimentos plásticos, implantes capilares, procedimentos vasculares e outros pequenos procedimentos clínicos. Um dos principais diferenciais deste modelo é a inclinação do equipamento em até 17°, que proporciona o posicionamento ideal para procedimentos específicos.',
    specifications: {
      'Modelo': 'RT3000',
      'Categoria': 'Clínica Elétrica Trendlemburg',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT3000'
  },
  {
    id: '5',
    name: 'Mesa Clínica RT5000',
    category: 'clinica',
    price: 32000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Clínica RT5000 foi projetada para atender uma ampla gama de especialidades, oferecendo máxima funcionalidade e conforto em procedimentos de dermatologia, estética, ultrassonografia, acupuntura, massagens, tatuagens, piercings e demais aplicações clínicas. Seu design moderno, aliado à automação completa, proporciona agilidade para o profissional e bem-estar ao paciente.',
    specifications: {
      'Modelo': 'RT5000',
      'Categoria': 'Clínica',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT5000'
  },
  {
    id: '6',
    name: 'Mesa Clínica RT5000 Estetic',
    category: 'estetica',
    price: 34000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Clínica RT5000 Estetic foi desenvolvida para proporcionar máxima eficiência em procedimentos estéticos, orofaciais, de pigmentação e diversas intervenções clínicas. Seu sistema motorizado completo, aliado a um estofamento duplo conforto e apoio de pés prolongado e retrátil, garante mobilidade ideal e adaptação anatômica para múltiplas posições de trabalho.',
    specifications: {
      'Modelo': 'RT5000 Estetic',
      'Categoria': 'Estética',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,98 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT5000'
  },
  {
    id: '7',
    name: 'Mesa Clínica RT5000 E-IC',
    category: 'transplante',
    price: 36000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'Desenvolvida especialmente para atender às necessidades dos mais exigentes procedimentos de transplante capilar. A RT5000 E-IC une design ergonômico, motorização avançada e acabamento premium. Ideal para clínicas e centros médicos que buscam aliar tecnologia, conforto e segurança em um único equipamento com apoio facial exclusivo.',
    specifications: {
      'Modelo': 'RT5000 E-IC',
      'Categoria': 'Transplante Capilar',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,98 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT5000'
  },
  {
    id: '8',
    name: 'Mesa Clínica RT2500 ES',
    category: 'dermatologia',
    price: 29000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'A Mesa Clínica RT2500 ES foi projetada para atender com excelência as exigências dos profissionais da saúde e estética, especialmente em dermatologia, medicina estética e procedimentos clínicos diversos. Com design compacto, motorização de alto desempenho e acabamento ergonômico, proporciona conforto ao paciente e praticidade ao profissional.',
    specifications: {
      'Modelo': 'RT2500 ES',
      'Categoria': 'Dermatologia',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001',
      'Altura Regulável': 'de 0,59 m a 0,95 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,60 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg'
    },
    featured: true,
    inStock: true,
    model: 'RT2500'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Brenda Lança',
    date: '15 Setembro 2023',
    rating: 5,
    comment: 'Muito bem atendida!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b526?w=150&h=150&fit=crop&crop=face',
    verified: true
  },
  {
    id: '2',
    name: 'Malcom Reis',
    date: '6 Outubro 2020',
    rating: 5,
    comment: 'Excelente atendimento e produtos de qualidade!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    verified: true
  }
];

export const statistics: Statistic[] = [
  {
    id: '1',
    value: '600+',
    label: 'CONSULTÓRIOS EQUIPADOS EM TODO O BRASIL.',
    description: 'Consultórios equipados com mesas e cadeiras personalizadas'
  },
  {
    id: '2',
    value: '+45 anos',
    label: 'DE EXPERIÊNCIA NA FABRICAÇÃO DE EQUIPAMENTOS MÉDICOS CERTIFICADOS.',
    description: 'De experiência na fabricação de equipamentos médicos certificados'
  },
  {
    id: '3',
    value: '+ 3.000',
    label: 'UNIDADES ENTREGUES.',
    description: 'Equipamentos entregues em todo o Brasil'
  },
  {
    id: '4',
    value: '100%',
    label: 'DOS PRODUTOS CERTIFICADOS.',
    description: 'Todos os produtos são 100% certificados pela ANVISA e INMETRO'
  }
];
