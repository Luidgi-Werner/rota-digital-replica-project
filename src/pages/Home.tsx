
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { products, productCategories, testimonials, statistics } from '@/data/products';
import { useState } from 'react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % products.length);
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentProductSlide + i) % products.length;
      visibleProducts.push(products[index]);
    }
    return visibleProducts;
  };

  return (
    <div className="font-jost">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Sua clínica merece uma estrutura que reflita seu nível profissional.
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Mesas e cadeiras médicas personalizadas, certificadas pela ANVISA e Inmetro. 
                  Mais conforto, segurança e autoridade para você e seu paciente.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-3 text-lg font-semibold">
                  Saiba mais agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-cyan-500 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ganhe o bordado da sua marca na sua mesa,
                </h3>
                <p className="text-cyan-100 text-lg font-medium">
                  exclusivo para quem se cadastra pelo site.
                </p>
              </div>
              
              <form className="space-y-4">
                <Input
                  placeholder="Nome"
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg"
                />
                <Input
                  placeholder="WhatsApp"
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg"
                />
                <Input
                  placeholder="Especialidade"
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg"
                />
                <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white h-12 rounded-lg font-semibold text-lg">
                  Quero meu presente exclusivo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {productCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/produtos/${category.slug}`}
                  className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Check className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Second Section - Three Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Card - Diferencial */}
            <Card className="bg-cyan-500 text-white p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Badge variant="secondary" className="bg-cyan-400 text-white mb-4 text-xs px-3 py-1">
                    DIFERENCIAIS
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    Alta performance,<br />
                    segurança e personalização.
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">600+</h4>
                    <p className="text-cyan-100">
                      Consultórios equipados com mesas e cadeiras personalizadas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">+45 Anos</h4>
                    <p className="text-cyan-100">
                      De experiência na fabricação de equipamentos médicos certificados.
                    </p>
                  </div>
                </div>
                <Button className="mt-6 bg-slate-800 hover:bg-slate-900 text-white rounded-full px-6 py-3">
                  Fale agora com a Lanza
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Center Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Espaço para<br />
                  adicionar foto
                </p>
              </div>
            </div>

            {/* Right Card - Certificação */}
            <Card className="bg-slate-800 text-white p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Badge variant="secondary" className="bg-slate-700 text-white mb-4 text-xs px-3 py-1">
                    CERTIFICAÇÃO
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    Todos os produtos certificados pela{' '}
                    <span className="text-cyan-400">ANVISA</span> e{' '}
                    <span className="text-cyan-400">INMETRO</span>.
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Garantia de segurança, qualidade e conformidade. 
                  Todos os nossos produtos são desenvolvidos e 
                  fabricados seguindo rigorosos padrões técnicos.
                </p>
                <Button className="bg-white text-slate-800 hover:bg-gray-100 rounded-full px-6 py-3">
                  Solicitar meu orçamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
              MESAS CLÍNICAS E GINECOLÓGICAS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-8">
              Soluções para cada especialidade.
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {getVisibleProducts().map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow bg-white rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gray-100 rounded-t-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 text-left">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed text-left">
                          {product.description}
                        </p>
                        <div className="text-center">
                          <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-full px-6 py-2 text-sm">
                            Saiba mais
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProductSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProductSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-1">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentProductSlide ? 'bg-slate-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Quem é Lanza */}
      <section className="py-16 bg-slate-800 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-700"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <Badge variant="secondary" className="bg-slate-700 text-white mb-4 text-xs px-3 py-1 uppercase tracking-wide">
                QUEM É A LANZA
              </Badge>
            </div>
            
            <div className="bg-slate-700 rounded-3xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
                  Transformamos consultórios com{' '}
                  <span className="text-cyan-400">segurança, tecnologia</span> e{' '}
                  <span className="text-cyan-400">excelência.</span>
                </h2>
                
                <div className="text-lg leading-relaxed text-gray-300 text-center max-w-4xl mx-auto mb-8">
                  <p className="mb-6">
                    Com mais de{' '}
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full font-bold">+7 anos</span>{' '}
                    no mercado e{' '}
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full font-bold">45 anos</span>{' '}
                    de experiência acumulada, a{' '}
                    <span className="text-white font-semibold">Lanza Medical</span>{' '}
                    desenvolve e fabrica mesas e cadeiras médicas que unem design, segurança, ergonomia e qualidade.
                  </p>
                  <p>
                    Nossos produtos são{' '}
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full font-bold">100%</span>{' '}
                    certificados pela{' '}
                    <span className="text-cyan-400 font-semibold">ANVISA e INMETRO</span>, levando mais conforto e profissionalismo para clínicas em todo o Brasil.
                  </p>
                </div>
                
                <div className="text-center">
                  <Button className="bg-white text-slate-800 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
                    Conheça nossa história
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-6 shadow-sm mb-4">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                  600+
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  CONSULTÓRIOS EQUIPADOS EM TODO O BRASIL.
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-6 shadow-sm mb-4">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                  +7 anos
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  DE MERCADO.
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-6 shadow-sm mb-4">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                  + 3.000
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  UNIDADES ENTREGUES.
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-6 shadow-sm mb-4">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                  100%
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  DOS PRODUTOS CERTIFICADOS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
              QUEM ESCOLHE A LANZA, RECOMENDA.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-gray-400 hover:text-gray-600"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex space-x-8">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={testimonial.id}
                    className={`w-80 transition-all duration-300 ${
                      index === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.date}</p>
                        </div>
                        <div className="ml-auto">
                          <Badge variant="secondary" className="bg-blue-500 text-white">
                            G
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        {testimonial.verified && (
                          <Badge variant="secondary" className="ml-2 text-xs bg-blue-500 text-white">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-700">{testimonial.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-gray-400 hover:text-gray-600"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
