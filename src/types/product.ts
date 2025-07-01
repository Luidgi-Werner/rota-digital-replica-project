
export interface Product {
  id: string;
  name: string;
  category: 'sinuca' | 'pebolim' | 'pingpong' | 'acessorios';
  price: number;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  featured: boolean;
  inStock: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}
