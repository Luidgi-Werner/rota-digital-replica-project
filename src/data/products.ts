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
    description: 'A Mesa Ginecológica RT2000 foi desenvolvida para oferecer máxima eficiência em exames ginecológicos, obstétricos, procedimentos clínicos diversos e pequenas cirurgias.',
    specifications: {
      'Modelo': 'RT2000',
      'Categoria': 'Ginecológica',
      'Certificação': 'ANVISA e INMETRO',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
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
    description: 'Projetada para atender com excelência a uma ampla gama de procedimentos clínicos e exames, como ginecológicos, obstétricos, coleta de materiais.',
    specifications: {
      'Modelo': 'RT2500',
      'Categoria': 'Ginecológica',
      'Certificação': 'ANVISA e INMETRO'
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
    description: 'A Mesa Ginecológica RT4000 é a opção ideal para histeroscopia, ultrassonografia, exames ginecológicos e obstétricos.',
    specifications: {
      'Modelo': 'RT4000',
      'Categoria': 'Ginecológica Histeroscopia',
      'Certificação': 'ANVISA e INMETRO'
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
    description: 'Foi desenvolvida para atender com excelência procedimentos clínicos, exames de ultrassonografia, procedimentos plásticos, implantes capilares.',
    specifications: {
      'Modelo': 'RT3000',
      'Categoria': 'Clínica Elétrica Trendlemburg',
      'Certificação': 'ANVISA e INMETRO'
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
    description: 'Projetada para oferecer funcionalidade e conforto em diversas especialidades, como dermatologia, estética, ultrassonografia.',
    specifications: {
      'Modelo': 'RT5000',
      'Categoria': 'Clínica',
      'Certificação': 'ANVISA e INMETRO'
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
    description: 'Versão estética da RT5000, ideal para procedimentos de beleza e estética médica.',
    specifications: {
      'Modelo': 'RT5000 Estetic',
      'Categoria': 'Estética',
      'Certificação': 'ANVISA e INMETRO'
    },
    featured: false,
    inStock: true,
    model: 'RT5000'
  },
  {
    id: '7',
    name: 'Mesa Clínica RT5000 E-IC',
    category: 'clinica',
    price: 36000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'Mesa clínica avançada com recursos especializados para procedimentos complexos.',
    specifications: {
      'Modelo': 'RT5000 E-IC',
      'Categoria': 'Clínica Avançada',
      'Certificação': 'ANVISA e INMETRO'
    },
    featured: false,
    inStock: true,
    model: 'RT5000'
  },
  {
    id: '8',
    name: 'Mesa Clínica RT2500 ES',
    category: 'estetica',
    price: 29000,
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    description: 'Mesa clínica especializada para procedimentos estéticos e de bem-estar.',
    specifications: {
      'Modelo': 'RT2500 ES',
      'Categoria': 'Estética Especializada',
      'Certificação': 'ANVISA e INMETRO'
    },
    featured: false,
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
