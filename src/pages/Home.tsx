import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Check, AlertCircle } from 'lucide-react';
import { Gallery6 } from '@/components/ui/gallery6';
import { products, productCategories, testimonials, statistics } from '@/data/products';
import { useState } from 'react';
import { AnimatedNumber } from '@/components/ui/number-flow';
import { productIdToSlugMapping } from '@/utils/productRoutes';
import { Testimonial } from '@/components/ui/testimonial-card';
import ImageEditor from '@/components/admin/ImageEditor';
import { useEditableImage } from '@/hooks/useEditableImage';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [whatsappValue, setWhatsappValue] = useState('');
  const [whatsappError, setWhatsappError] = useState('');
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: ''
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const { toast } = useToast();

  // Hook para gerenciar a imagem editável da seção principal
  const { currentImage: heroImage, handleImageChange: handleHeroImageChange } = useEditableImage({
    defaultImage: '/lovable-uploads/804e528c-e805-4a8d-af03-35d5c627d580.png',
    imageKey: 'home-hero-image'
  });

  // Função para formatar o número de telefone
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Formata o número
    if (numbers.length >= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    } else if (numbers.length >= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else if (numbers.length >= 2) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length > 0) {
      return `(${numbers}`;
    }
    return numbers;
  };

  // Handler para o campo WhatsApp
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Verifica se contém apenas números, parênteses, espaços e hífen
    const hasInvalidChars = /[^0-9()\s-]/.test(value);
    
    if (hasInvalidChars) {
      setWhatsappError('Por favor, digite apenas números');
      return;
    }
    
    setWhatsappError('');
    const formattedValue = formatPhoneNumber(value);
    setWhatsappValue(formattedValue);
    setLeadFormData(prev => ({ ...prev, phone: formattedValue }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!leadFormData.name || !leadFormData.email || !leadFormData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmittingLead(true);

    try {
      const { error } = await supabase
        .from('lead_submissions')
        .insert([
          {
            name: leadFormData.name,
            email: leadFormData.email,
            phone: leadFormData.phone
          }
        ]);

      if (error) throw error;

      // Enviar dados para Google Sheets (não bloqueia o fluxo se falhar)
      try {
        await supabase.functions.invoke('send-to-sheets', {
          body: {
            name: leadFormData.name,
            email: leadFormData.email,
            phone: leadFormData.phone,
            specialty: leadFormData.specialty
          }
        });
        console.log('Lead enviado para Google Sheets com sucesso');
      } catch (sheetsError) {
        console.error('Erro ao enviar para Google Sheets:', sheetsError);
        // Não exibe erro ao usuário pois o lead foi salvo no banco
      }

      toast({
        title: "Cadastro realizado!",
        description: "Em breve entraremos em contato!"
      });

      // Reset form
      setLeadFormData({
        name: '',
        email: '',
        phone: '',
        specialty: ''
      });
      setWhatsappValue('');
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const nextProductSlide = () => {
    setCurrentProductSlide(prev => (prev + 1) % products.length);
  };
  const prevProductSlide = () => {
    setCurrentProductSlide(prev => (prev - 1 + products.length) % products.length);
  };
  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentProductSlide + i) % products.length;
      visibleProducts.push(products[index]);
    }
    return visibleProducts;
  };

  // Custom texts for each product
  const productTexts = {
    '1': {
      title: 'RT2000 Ginecológica',
      description: 'A Mesa Ginecológica RT2000 foi desenvolvida para oferecer máxima eficiência em exames ginecológicos, obstétricos, procedimentos clíni..'
    },
    '2': {
      title: 'RT2500 Ginecológica',
      description: 'Projetada para atender com excelência a uma ampla gama de procedimentos clínicos e exames, como ginecológicos, obstétricos, coleta de materiais, exames de ultrassonografia, procedimentos vasculares e estéticos.'
    },
    '3': {
      title: 'RT4000 Ginecológica',
      description: 'A Mesa Ginecológica RT4000 é a opção ideal para histeroscopia, ultrassonografia, exames ginecológicos e obstétricos e outros..'
    },
    '4': {
      title: 'RT3000 Trendelenburg',
      description: 'Foi desenvolvida para atender com excelência a uma ampla gama de procedimentos clínicos, como exames de ultrassonografia, procedimentos plásticos, implantes capilares, procedimentos vasculares e outros pequenos procedimentos clínicos.'
    },
    '5': {
      title: 'RT5000 Clínica',
      description: 'Projetada para oferecer funcionalidade e conforto em diversas especialidades, como dermatologia, estética, ultrassonografia, acupuntura, massagens, tatuagens, piercings e outras aplicações clínicas.'
    },
    '6': {
      title: 'RT5000 Estetic',
      description: 'A Mesa Clínica RT5000 Estetic foi desenvolvida para proporcionar máxima eficiência em procedimentos estéticos, orofaciais, de pigmentação e diversas intervenções clínicas.'
    },
    '7': {
      title: 'RT5000 Estetic – IC',
      description: 'A Mesa Clínica RT5000 Estetic Desenvolvida especialmente para atender às necessidades dos mais exigentes procedimentos de transplante capilar.'
    },
    '8': {
      title: 'RT2500 ES',
      description: 'A Mesa Clínica RT2500 ES foi projetada para atender com excelência as exigências dos profissionais da saúde e estética, especialmente em dermatologia, medicina estética e procedimentos clínicos diversos.'
    }
  };
  return <div className="font-jost">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/35" style={{
        backgroundImage: `url('/lovable-uploads/2c149fee-e0b7-4b2d-8618-e0f52e59297b.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5
      }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Sua clínica merece uma estrutura que reflita seu nível profissional.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                  Mesas e cadeiras médicas personalizadas, certificadas pela ANVISA e Inmetro. 
                  Mais conforto, segurança e autoridade para você e seu paciente.
                </p>
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full sm:w-auto"
                  asChild
                >
                  <Link to="/contato">
                    Saiba mais agora
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div id="hero-form" className="bg-cyan-500 rounded-2xl p-6 md:p-8 shadow-2xl mx-auto w-full max-w-md lg:max-w-none">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Ganhe o bordado da sua marca na sua mesa,
                </h3>
                <p className="text-cyan-100 text-base md:text-lg font-medium">
                  exclusivo para quem se cadastra pelo site.
                </p>
              </div>
              
              <form onSubmit={handleLeadSubmit} className="space-y-3 md:space-y-4">
                <Input 
                  placeholder="Nome" 
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-10 md:h-12 rounded-lg text-sm md:text-base"
                  value={leadFormData.name}
                  onChange={(e) => setLeadFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
                <Input 
                  type="email" 
                  placeholder="E-mail" 
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-10 md:h-12 rounded-lg text-sm md:text-base"
                  value={leadFormData.email}
                  onChange={(e) => setLeadFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
                <div className="space-y-1">
                  <Input 
                    placeholder="WhatsApp" 
                    className={`bg-white border-0 text-gray-900 placeholder:text-gray-500 h-10 md:h-12 rounded-lg text-sm md:text-base ${whatsappError ? 'border-2 border-red-500' : ''}`}
                    value={whatsappValue}
                    onChange={handleWhatsAppChange}
                    maxLength={15}
                    required
                  />
                  {whatsappError && (
                    <div className="flex items-center gap-1 text-red-600 text-xs md:text-sm bg-red-50 px-3 py-2 rounded-lg">
                      <AlertCircle className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{whatsappError}</span>
                    </div>
                  )}
                </div>
                <Input 
                  placeholder="Especialidade" 
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-10 md:h-12 rounded-lg text-sm md:text-base"
                  value={leadFormData.specialty}
                  onChange={(e) => setLeadFormData(prev => ({ ...prev, specialty: e.target.value }))}
                />
                <Button 
                  type="submit"
                  disabled={isSubmittingLead}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white h-10 md:h-12 rounded-lg font-semibold text-sm md:text-lg disabled:opacity-50"
                >
                  {isSubmittingLead ? "Enviando..." : "Quero meu presente exclusivo"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 w-full max-w-sm sm:max-w-lg lg:max-w-none">
              {productCategories.map(category => <Link 
                key={category.id} 
                to={`/produtos?category=${encodeURIComponent(category.slug)}`} 
                className="flex items-center space-x-2 md:space-x-3 bg-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm hover:shadow-md transition-shadow text-center justify-center"
              >
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                    {category.name}
                  </span>
                </Link>)}
            </div>
          </div>
        </div>
      </section>

      {/* New Second Section - Three Column Layout */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Card - Diferencial */}
            <Card className="bg-cyan-500 text-white p-6 md:p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="mb-4 md:mb-6">
                  <Badge variant="secondary" className="bg-cyan-400 text-white mb-3 md:mb-4 text-xs px-2 md:px-3 py-1">
                    DIFERENCIAIS
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">
                    Alta performance,<br />
                    segurança e personalização.
                  </h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">600+</h4>
                    <p className="text-cyan-100 text-sm md:text-base">
                      Consultórios equipados com mesas e cadeiras personalizadas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">+45 Anos</h4>
                    <p className="text-cyan-100 text-sm md:text-base">
                      De experiência na fabricação de equipamentos médicos certificados.
                    </p>
                  </div>
                </div>
                <Button className="mt-4 md:mt-6 bg-slate-800 hover:bg-slate-900 text-white rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto" asChild>
                  <Link to="/contato">
                    Fale agora com a Lanza
                    <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Center Image */}
            <Card className="bg-white p-0 rounded-2xl overflow-hidden h-full relative order-first lg:order-none">
              <CardContent className="p-0 h-full">
                {/* Mostrar ImageEditor apenas no ambiente de desenvolvimento/edição */}
                {import.meta.env.DEV && (
                  <ImageEditor 
                    currentImage={heroImage} 
                    onImageChange={handleHeroImageChange}
                    productName="Imagem Principal Home"
                  />
                )}
                <img src={heroImage} alt="Lanza Medical" className="w-full h-64 md:h-full object-cover" />
              </CardContent>
            </Card>

            {/* Right Card - Certificação */}
            <Card className="bg-slate-800 text-white p-6 md:p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="mb-4 md:mb-6">
                  <Badge variant="secondary" className="bg-slate-700 text-white mb-3 md:mb-4 text-xs px-2 md:px-3 py-1">
                    CERTIFICAÇÃO
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">
                    Todos os produtos certificados pela{' '}
                    <span className="text-cyan-400">ANVISA</span> e{' '}
                    <span className="text-cyan-400">INMETRO</span>.
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  Garantia de segurança, qualidade e conformidade. 
                  Todos os nossos produtos são desenvolvidos e 
                  fabricados seguindo rigorosos padrões técnicos.
                </p>
                <Button asChild className="bg-white text-slate-800 hover:bg-gray-100 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto">
                  <Link to="/contato">
                    Solicitar meu orçamento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <Gallery6 heading="Soluções para cada especialidade." subheading="MESAS CLÍNICAS E GINECOLÓGICAS" items={products.map(product => {
      const productText = productTexts[product.id] || {
        title: product.name,
        description: product.description
      };
      return {
        id: product.id,
        title: productText.title,
        summary: productText.description,
        url: `/produto/${productIdToSlugMapping[product.id]}`,
        image: product.images[0]
      };
    })} />

      {/* About Section - Quem é Lanza */}
      <section className="py-16 text-white relative" style={{
      backgroundColor: '#003250'
    }}>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-700"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title */}
              <div>
                <Badge variant="secondary" className="bg-slate-700 text-white mb-6 text-xs px-3 py-1 uppercase tracking-wide">
                  QUEM É A LANZA
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Transformamos consultórios com segurança,{' '}
                  <span className="text-cyan-500">tecnologia e excelência.</span>
                </h2>
              </div>
              
              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="text-lg leading-relaxed text-gray-300">
                  <p className="mb-6 text-justify">
                    Com mais de{' '}
                    <span className="font-bold">+7 anos</span>{' '}
                    no mercado e{' '}
                    <span className="font-bold">45 anos</span>{' '}
                    de experiência acumulada, a{' '}
                    <span className="text-white font-semibold">Lanza Medical</span>{' '}
                    desenvolve e fabrica mesas e cadeiras médicas que unem design, segurança, ergonomia e qualidade.
                  </p>
                  <p className="text-justify">
                    Nossos produtos são{' '}
                    <span className="font-bold">100%</span>{' '}
                    certificados pela{' '}
                    <span className="text-cyan-400 font-semibold">ANVISA e INMETRO</span>, levando mais conforto e profissionalismo para clínicas em todo o Brasil.
                  </p>
                </div>
                
                <div>
                  <Button asChild className="bg-white text-slate-800 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
                    <Link to="/sobre">
                      Conheça nossa história
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-4 md:p-6 shadow-sm mb-3 md:mb-4 w-full">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-1 md:mb-2 whitespace-nowrap">
                  <AnimatedNumber value={600} className="inline" />+
                </div>
                <div className="text-xs md:text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  CONSULTÓRIOS EQUIPADOS EM TODO O BRASIL.
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-4 md:p-6 shadow-sm mb-3 md:mb-4 w-full">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-1 md:mb-2 whitespace-nowrap">
                  +<AnimatedNumber value={7} className="inline" />&nbsp;anos
                </div>
                <div className="text-xs md:text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  DE MERCADO.
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-4 md:p-6 shadow-sm mb-3 md:mb-4 w-full">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-1 md:mb-2 whitespace-nowrap">
                  +<AnimatedNumber value={3000} className="inline" />
                </div>
                <div className="text-xs md:text-xs text-gray-600 uppercase tracking-wide leading-tight">
                  UNIDADES ENTREGUES.
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-lg p-4 md:p-6 shadow-sm mb-3 md:mb-4 w-full">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-1 md:mb-2 whitespace-nowrap">
                  <AnimatedNumber value={100} className="inline" />%
                </div>
                <div className="text-xs md:text-xs text-gray-600 uppercase tracking-wide leading-tight">
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

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  name={testimonial.name}
                  role={testimonial.date}
                  testimonial={testimonial.comment}
                  rating={testimonial.rating}
                  image={testimonial.name === 'Brenda Lança' ? '/lovable-uploads/brenda-lanca-avatar.jpg' : testimonial.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;