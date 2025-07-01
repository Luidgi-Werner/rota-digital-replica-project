
import { Product, ProductCategory } from '@/types/product';

export const productCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'Mesas de Sinuca',
    slug: 'sinuca',
    description: 'Mesas profissionais de sinuca com a melhor qualidade',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    name: 'Mesas de Pebolim',
    slug: 'pebolim',
    description: 'Pebolins resistentes para diversão garantida',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    name: 'Mesas de Ping Pong',
    slug: 'pingpong',
    description: 'Tênis de mesa oficial para competições',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    name: 'Acessórios',
    slug: 'acessorios',
    description: 'Tacos, bolas e acessórios para seus jogos',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Mesa de Sinuca Profissional Premium',
    category: 'sinuca',
    price: 4500,
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    ],
    description: 'Mesa de sinuca profissional com tampo em madeira nobre e panos importados.',
    specifications: {
      'Dimensões': '2,84m x 1,42m x 0,85m',
      'Material': 'Madeira Maciça',
      'Pano': 'Importado Premium',
      'Tabelas': 'Borracha Natural'
    },
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Mesa de Pebolim Residencial',
    category: 'pebolim',
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop'
    ],
    description: 'Pebolim ideal para residências com estrutura resistente.',
    specifications: {
      'Dimensões': '1,20m x 0,70m x 0,90m',
      'Material': 'MDF Reforçado',
      'Jogadores': '22 Bonecos',
      'Peso': '45kg'
    },
    featured: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Mesa de Ping Pong Oficial',
    category: 'pingpong',
    price: 2800,
    images: [
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop'
    ],
    description: 'Mesa de tênis de mesa com padrão oficial de competição.',
    specifications: {
      'Dimensões': '2,74m x 1,52m x 0,76m',
      'Material': 'MDP 18mm',
      'Rede': 'Oficial ITTF',
      'Dobrável': 'Sim'
    },
    featured: false,
    inStock: true
  }
];
