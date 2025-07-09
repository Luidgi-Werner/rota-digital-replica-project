
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
    setCurrentProductSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));
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
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(products.length / 3) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {products
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((product) => (
                          <Card key={product.id} className="group hover:shadow-lg transition-shadow bg-white rounded-2xl overflow-hidden">
                            <CardContent className="p-0">
                              <div className="aspect-square bg-gray-100 rounded-t-2xl overflow-hidden">
                                <img
                                  src={product.images[0]}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 text-left">
                                  {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed text-left text-justify">
                                  {product.description}
                                </p>
                                <div className="text-center">
                                  <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-full px-6 py-2">
                                    Saiba mais
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProductSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProductSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(products.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProductSlide ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Updated with highlighted statistics */}
      <section className="py-16 bg-slate-800 text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-sm text-cyan-400 uppercase tracking-wide mb-4">
                QUEM É A LANZA
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Transformamos consultórios com{' '}
                <span className="text-cyan-400">segurança, tecnologia e excelência.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-lg leading-relaxed text-gray-300">
                <p className="mb-6">
                  Com mais de{' '}
                  <span className="bg-cyan-500 text-white px-2 py-1 rounded font-bold">+7 anos</span>{' '}
                  no mercado e{' '}
                  <span className="bg-cyan-500 text-white px-2 py-1 rounded font-bold">45 anos</span>{' '}
                  de experiência acumulada, a{' '}
                  <span className="text-white font-semibold">Lanza Medical</span>{' '}
                  desenvolve e fabrica mesas e cadeiras médicas que unem design, segurança, ergonomia e qualidade.
                </p>
                <p className="mb-8">
                  Nossos produtos são{' '}
                  <span className="bg-cyan-500 text-white px-2 py-1 rounded font-bold">100%</span>{' '}
                  certificados pela{' '}
                  <span className="text-cyan-400 font-semibold">ANVISA e INMETRO</span>, levando mais conforto e profissionalismo para clínicas em todo o Brasil.
                </p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800 rounded-full px-8 py-3">
                  Conheça nossa história
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">600+</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    CONSULTÓRIOS EQUIPADOS EM TODO O BRASIL.
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">+7 anos</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    DE MERCADO.
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">+ 3.000</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    UNIDADES ENTREGUES.
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">100%</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    DOS PRODUTOS CERTIFICADOS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-500 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
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
