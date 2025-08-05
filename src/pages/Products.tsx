
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { products, productCategories } from '@/data/products';
import { Search, Star, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeText } from '@/components/ui/fade-text';
import { getProductUrl } from '@/utils/productRoutes';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Get category from URL params on page load
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                         product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeText
            className="text-4xl font-bold text-gray-900 mb-4"
            direction="up"
            text="Nossos Produtos"
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descubra nossa linha completa de equipamentos médicos de alta qualidade
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              size="sm"
              className={selectedCategory === 'all' ? 'bg-[#003250] hover:bg-[#003250]/90' : ''}
            >
              Todos
            </Button>
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.slug)}
                size="sm"
                className={selectedCategory === category.slug ? 'bg-[#003250] hover:bg-[#003250]/90' : ''}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#003250]/20 h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="aspect-video overflow-hidden rounded-t-lg relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#003250] text-white p-2 rounded-full">
                        <Star className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 bg-[#003250]/10 text-[#003250] text-xs rounded-full capitalize font-medium">
                        <Award className="w-3 h-3 mr-1" />
                        {product.category}
                      </span>
                      {product.inStock && (
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          <Zap className="w-3 h-3 mr-1" />
                          Disponível
                        </span>
                      )}
                    </div>
                    
                    <div className="border-l-4 border-[#003250]/20 pl-4 mb-4 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <Button asChild className="w-full bg-[#003250] hover:bg-[#003250]/90">
                        <Link to={getProductUrl(product.id)}>
                          <span>Ver Detalhes</span>
                          <Star className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Nenhum produto encontrado para os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
