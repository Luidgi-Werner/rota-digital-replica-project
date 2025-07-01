
export interface Product {
  id: string;
  name: string;
  category: 'ginecologia' | 'estetica' | 'clinica' | 'dermatologia' | 'transplante';
  price: number;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  featured: boolean;
  inStock: boolean;
  model?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
}
