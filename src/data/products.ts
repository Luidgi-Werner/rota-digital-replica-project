
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
    name: 'Mesa Ginecológica RT2000',
    category: 'ginecologia',
    price: 25000,
    images: [
      '/lovable-uploads/6a4c2d3d-6267-4ff8-b4f0-16f77cba4443.png'
    ],
    description: 'A Mesa Ginecológica RT2000 foi desenvolvida para oferecer máxima eficiência em exames ginecológicos, obstétricos, procedimentos clínicos diversos e pequenas cirurgias. Seu design moderno e funcional proporciona conforto tanto ao paciente quanto ao profissional, sendo indicada também para exames de ultrassonografia, procedimentos estéticos, vasculares, entre outros. Com estrutura totalmente motorizada, permite ajuste automático dos principais movimentos – elevação do encosto, assento e perneira – por meio de pedal de controle ou controle manual multifuncional com até 8 comandos, incluindo função de volta à posição inicial (zero) e memorização de posição de trabalho.',
    specifications: {
      'Modelo': 'RT2000',
      'Categoria': 'Ginecológica - Versatilidade, Conforto e Alta Performance',
      'Automação Completa': 'Elevação do assento, encosto e movimentação da perneira com acionamento elétrico.',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Apoios de Coxas': 'Reguláveis horizontalmente (até 320 mm), verticalmente (até 420 mm), acolchoados e revestidos em PVC cristal, removíveis',
      'Apoios de Pés': 'Ajustes longitudinais de até 320 mm, com estofamento no mesmo padrão, removíveis',
      'Braços Laterais': 'Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado',
      'Encosto e Assento': 'Estrutura em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Gaveta Auxiliar em Inox': 'Facilita a coleta de amostras e organização de instrumentos durante os exames',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Suporte para Colposcópio, Iluminação Foco de LED, Mocho com ajuste a gás, Trendlemburg',
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
      '/lovable-uploads/4cdd858d-2c31-416b-90ea-413b62b8cc03.png'
    ],
    description: 'A Mesa Ginecológica RT2500 foi projetada para atender com excelência a uma ampla gama de procedimentos clínicos e exames, como ginecológicos, obstétricos, coleta de materiais, exames de ultrassonografia, procedimentos vasculares e estéticos. Sua estrutura slim é ideal para consultórios com espaço reduzido, proporcionando otimização do ambiente sem abrir mão da funcionalidade e do conforto. Com design ergonômico e recursos de automação de última geração, este modelo oferece mobilidade e adaptação ideal às necessidades dos consultórios modernos.',
    specifications: {
      'Modelo': 'RT2500',
      'Categoria': 'Ginecológica - Tecnologia, Conforto e Precisão nos Procedimentos',
      'Automação Completa': 'Elevação do assento, encosto e movimentação da perneira com acionamento elétrico',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, com opções com ou sem rodízios, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Apoios de Coxas': 'Reguláveis horizontalmente (até 320 mm), verticalmente (até 420 mm), acolchoados e revestidos em PVC cristal, removíveis',
      'Apoios de Pés': 'Ajustes longitudinais de até 320 mm, com estofamento no mesmo padrão, removíveis',
      'Braços Laterais': 'Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado',
      'Encosto e Assento': 'Estrutura em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Gaveta Auxiliar em Inox': 'Facilita a coleta de amostras e organização de instrumentos durante os exames',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,59 m a 0,95 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,60 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Suporte para Colposcópio, Iluminação Foco de LED, Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
    },
    featured: true,
    inStock: true,
    model: 'RT2500'
  },
  {
    id: '3',
    name: 'Mesa Ginecológica RT4000 Histereoscopia',
    category: 'ginecologia',
    price: 45000,
    images: [
      '/lovable-uploads/5a5c347c-1e9a-46a1-8c3c-070ee88f25e7.png'
    ],
    description: 'A Mesa Ginecológica RT4000 foi desenvolvida para atender com excelência a uma ampla gama de procedimentos clínicos, destacando-se como a opção ideal para histeroscopia, ultrassonografia, exames ginecológicos e obstétricos e outros procedimentos especializados. Sua estrutura robusta e motorização completa garantem segurança, durabilidade e conforto tanto para o paciente quanto para o profissional de saúde. Com diferenciais voltados para especialidades que exigem precisão, a RT4000 oferece soluções práticas e modernas para clínicas e consultórios de alto padrão.',
    specifications: {
      'Modelo': 'RT4000',
      'Categoria': 'Ginecológica Histeroscopia - Precisão e Conforto em Procedimentos de Alta Exigência',
      'Destaque Histeroscopia': 'Inclinação especial do assento em até 17° para procedimentos',
      'Automação Completa': 'Elevação do assento, encosto, perneira e inclinação do assento, com acionamento elétrico',
      'Inclinação do Assento': 'Chapa de apoio motorizada com ângulo de até 17°',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Quatro moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Apoios de Coxas': 'Reguláveis horizontalmente (até 320 mm), verticalmente (até 420 mm), acolchoados e revestidos em PVC cristal, removíveis',
      'Apoios de Pés': 'Ajustes longitudinais de até 320 mm, com estofamento no mesmo padrão, removíveis',
      'Braços Laterais': 'Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado',
      'Encosto e Assento': 'Estrutura em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Gaveta Auxiliar em Inox': 'Facilita a coleta de amostras e organização de instrumentos durante os exames',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Suporte para Colposcópio, Iluminação Foco de LED, Mocho com ajuste a gás, Trendlemburg',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
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
      '/lovable-uploads/b6e02e60-54cc-4b85-a932-bf7df1158c26.png'
    ],
    description: 'A Mesa Clínica Elétrica com Trendlemburg RT3000 foi desenvolvida para atender com excelência a uma ampla gama de procedimentos clínicos, como exames de ultrassonografia, procedimentos plásticos, implantes capilares, procedimentos específicos e outros pequenos procedimentos clínicos. Sua estrutura robusta e motorização completa garantem segurança, durabilidade e conforto tanto para o paciente quanto para o profissional de saúde. Com estrutura totalmente motorizada, permite ajuste automático dos principais movimentos – elevação, descida, encosto, perneira e inclinação do assento (posição Trendlemburg com ângulo de até 17°).',
    specifications: {
      'Modelo': 'RT3000',
      'Categoria': 'Clínica Elétrica - Alta Performance para procedimentos com trendlemburg',
      'Destaque Trendlemburg': 'Inclinação do equipamento em até 17°, que proporciona o posicionamento ideal para procedimentos específicos',
      'Automação Completa': 'Elevação do assento, encosto, perneira e inclinação do assento, com acionamento elétrico',
      'Inclinação do Equipamento': 'Inclinação do assento em 17º acionada por botões laterais, facilitando procedimentos específicos',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Quatro moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Encosto Recortado': 'Facilidade de acesso aos membros superiores',
      'Encosto e Assento': 'Encosto recortado em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
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
      '/lovable-uploads/b82ec86f-80d0-4a4a-b6fa-d415c623bbe3.png'
    ],
    description: 'A Mesa Clínica RT5000 foi projetada para atender uma ampla gama de especialidades, oferecendo máxima funcionalidade e conforto em procedimentos de dermatologia, estética, ultrassonografia, acupuntura, massagens, tatuagens, piercings e demais aplicações clínicas. Seu design moderno, aliado à automação completa, proporciona agilidade para o profissional e bem-estar ao paciente. Com estrutura totalmente motorizada, permite ajuste automático dos principais movimentos – elevação, descida, encosto e perneira.',
    specifications: {
      'Modelo': 'RT5000',
      'Categoria': 'Clínica - Eficiência, Conforto e Versatilidade para Procedimentos Diversificados',
      'Automação Completa': 'Elevação do assento, encosto e movimentação da perneira com acionamento elétrico',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Braços Laterais': 'Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado',
      'Encosto e Assento': 'Encosto em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,70 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
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
      '/lovable-uploads/7e4203d6-6146-4fce-96ae-064af23694ef.png'
    ],
    description: 'A Mesa Clínica RT5000 Estetic foi desenvolvida para proporcionar máxima eficiência em procedimentos estéticos, orofaciais, de pigmentação e diversas intervenções clínicas. Com design moderno e robusto, alia ergonomia, conforto e praticidade para o profissional e o paciente, adaptando-se com excelência às exigências de especialidades como dermatologia, estética, ultrassonografia, massagens, acupuntura, tatuagens e muito mais. Seu sistema motorizado completo, aliado a um estofamento duplo conforto e apoio de pés prolongado e retrátil, garante mobilidade ideal e adaptação anatômica para múltiplas posições de trabalho.',
    specifications: {
      'Modelo': 'RT5000 Estetic',
      'Categoria': 'Estética - Conforto, Precisão e Versatilidade para Procedimentos Estéticos e Clínicos',
      'Automação Completa': 'Elevação do assento, encosto e movimentação da perneira com acionamento elétrico',
      'Prolongador Recolhível de Apoio para Pés': 'Extensão automática que amplia o comprimento da maca para até 1,98m',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Braços Laterais': 'Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado',
      'Encosto e Assento': 'Encosto recortado em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Estofamento Duplo Conforto': 'Revestimento em PVC cristal com PU injetado de dupla densidade, para máximo conforto\n•	Conforto superior para o paciente\n•	Fácil higienização\n•	Alta durabilidade e resistência',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,98 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
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
      '/lovable-uploads/0f430539-ab4b-4fe4-b41b-15b9fe0b17a0.png'
    ],
    description: 'A Mesa Clínica RT5000 E-IC foi desenvolvida especialmente para atender às necessidades dos mais exigentes procedimentos de transplante capilar. A RT5000 E-IC une design ergonômico, motorização avançada e acabamento premium. Ideal para clínicas e centros médicos que buscam aliar tecnologia, conforto e segurança em um único equipamento. Seu sistema de motorização com três moto-redutores garante movimentos suaves e silenciosos, proporcionando ajustes precisos para o posicionamento ideal do paciente e conforto prolongado durante longos procedimentos.',
    specifications: {
      'Modelo': 'RT5000 E-IC',
      'Categoria': 'Transplante Capilar - Conforto, Tecnologia e Precisão para Procedimentos de Alta Performance',
      'Automação Completa': 'Elevação, inclinação do encosto e movimentação da perneira com acionamento elétrico',
      'Apoio Facial Exclusivo': 'Apoio anatômico com descanso para braços, ideal para procedimentos em decúbito ventral, proporcionando conforto ao paciente e flexibilidade ao profissional',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Braços Laterais': 'Com abertura lateral e longitudinal, estrutura em alumínio fundido e réguas em aço cromado',
      'Encosto e Assento': 'Encosto recortado em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Estofamento Duplo Conforto': 'Revestido em PVC cristal, com apoio de cabeça anatômico ajustável e uso também para procedimentos faciais',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Apoio de Cabeça Anatômico': 'Estofado e revestido com PVC cristal, com ajustes personalizados',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,65 m a 1,05 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,98 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
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
      '/lovable-uploads/b4d448bc-a5b2-46f0-82e3-162870a64890.png'
    ],
    description: 'A Mesa Clínica RT2500 ES foi projetada para atender com excelência as exigências dos profissionais da saúde e estética, especialmente em dermatologia, medicina estética e procedimentos clínicos diversos. Com design compacto, motorização de alto desempenho e acabamento ergonômico, proporciona conforto ao paciente e praticidade ao profissional. Com estrutura totalmente motorizada, permite ajuste automático dos principais movimentos – elevação, descida, encosto e perneira.',
    specifications: {
      'Modelo': 'RT2500 ES',
      'Categoria': 'Dermatologia - Precisão para Procedimentos Dermatológicos e Clínicos',
      'Automação Completa': 'Elevação, inclinação do encosto e movimentação da perneira com acionamento elétrico',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 8 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, com opções com ou sem rodízios, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Três moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Braços Laterais': 'Biarticulados, removíveis e estofado na cor',
      'Encosto e Assento': 'Encosto recortado em alma de aço, com carenagem em PSAI na cor gelo padrão e acabamento em pintura epóxi',
      'Estofamento Duplo Conforto': 'Revestido em PVC cristal, com apoio de cabeça anatômico ajustável e uso também para procedimentos faciais',
      'Perneira Rebatível Motorizada': 'Facilita a conversão entre as posições de cadeira e maca',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,59 m a 0,95 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,60 m',
      'Peso suportado': 'até 250 kg',
      'Peso Líquido': '120 kg',
      'Peso Bruto (embalada)': '130 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '81890340001'
    },
    featured: true,
    inStock: true,
    model: 'RT2500'
  },
  {
    id: '9',
    name: 'Mesa Clínica RT5500',
    category: 'clinica',
    price: 35000,
    images: [
      '/lovable-uploads/6d50fbf1-07fc-471a-b7e1-68da52f4583c.png'
    ],
    description: 'Mesa Clínica RT5500 – Versatilidade, Conforto e Acessibilidade para Atendimentos Humanizados. A Mesa Clínica RT5500 foi especialmente desenvolvida para proporcionar acessibilidade e conforto, sendo ideal para diversas especialidades como dermatologia, estética, ultrassonografia, massagens, acupuntura, tatuagens, piercings e procedimentos clínicos em geral. Seu grande diferencial está na altura mínima ultrabaixa de apenas 58 cm, permitindo fácil acesso para idosos, gestantes, cadeirantes e crianças, sem a necessidade de escadas ou esforço físico. Conta com automação inteligente dos movimentos, estrutura robusta e comandos intuitivos, proporcionando segurança ao paciente e agilidade ao profissional.',
    specifications: {
      'Modelo': 'RT5500',
      'Categoria': 'Versatilidade, Conforto e Acessibilidade para Atendimentos Humanizados',
      'Altura Ultrabaixa': 'Apenas 0,58 m de altura mínima – ideal para acessibilidade',
      'Automação Completa': 'Elevação, inclinação do encosto e elevação do assento com acionamento elétrico',
      'Voltagem Inteligente': 'Placa eletrônica com comutação automática entre 127V e 220V',
      'Sistema de comando': 'Opcional entre controle por pedal com 5 funções (posição memorizável de trabalho, retorno automático à posição zero e acionadores removíveis para assepsia) ou comando manual',
      'Sistema de Retorno à Posição Inicial': 'Praticidade no reposicionamento com um único comando',
      'Estrutura Robusta e Higiênica': 'Base tubular com pintura epóxi de alta resistência, montada sobre quatro rodízios com travas, que facilitam o deslocamento e a assepsia do equipamento',
      'Motores': 'Dois moto-redutores elétricos isentos de óleo, garantindo precisão e durabilidade',
      'Suporte para Lençol de Papel': 'Tubular em aço com mola para troca fácil do rolo',
      'Encosto e Assento': 'Estruturados em alma de aço com carenagem em PSAI na cor gelo padrão',
      'Estofamento Anatômico': 'PU injetado com revestimento em PVC cristal para maior durabilidade e facilidade de higienização',
      'Apoio de Cabeça Estofado': 'Anatômico, revestido em PVC cristal, proporcionando conforto adicional',
      'Suporte para Lençol de Papel (Detalhes)': 'Tubular em aço com sistema de mola para facilitar a substituição do rolo',
      'Chave Geral Bipolar': 'Permite o desligamento total do sistema, prevenindo riscos em caso de falhas elétricas',
      'Fusível Externo de Proteção': 'Aumenta a segurança dos componentes eletrônicos',
      'Altura Regulável': 'de 0,58 m a 0,95 m',
      'Largura útil': '0,60 m',
      'Comprimento Total': '1,95 m',
      'Peso suportado': 'até 200 kg',
      'Peso Líquido': '90 kg',
      'Peso Bruto (embalada)': '120 kg',
      'Dimensões da Embalagem (paletizada)': '1,45 m (C) x 0,80 m (L) x 0,90 m (A)',
      'Acessórios Opcionais': 'Mocho com ajuste a gás',
      'Código INMETRO': '19.06010',
      'Registro ANVISA/MS': '8189034000'
    },
    featured: true,
    inStock: true,
    model: 'RT5500'
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
