
import { Button } from '@/components/ui/button';
import { FadeText } from '@/components/ui/fade-text';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { useEffect, useState, useRef } from 'react';
import { Target, Eye, Heart, Star, Award, Shield } from 'lucide-react';

const About = () => {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 md:py-16 px-4"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <img 
                src="/lovable-uploads/e616c2e1-cf16-45d2-b9c5-a3716fd6eaee.png" 
                alt="Fábrica Lanza Medical"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-6 md:p-8 text-white order-1 lg:order-2"
            >
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <FadeText text="NOSSA HISTÓRIA" className="text-white" />
              </div>
              <FadeText 
                text="Mais de 45 anos de experiência que se transformam em soluções para seu consultório."
                className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
              />
              <FadeText 
                text="A LANZA MEDICAL está sediada em Ribeirão Preto, cidade reconhecida por abrigar o maior polo de empresas do setor de saúde no Brasil. Fundada com o propósito de oferecer ao mercado produtos médicos de alta qualidade a um preço justo, a empresa nasceu da visão e da ampla experiência de seu fundador, que dedicou mais de 45 anos à atuação em algumas das maiores e mais respeitadas empresas dos setores Médico e Odontológico, sempre com foco em projetos, engenharia e desenvolvimento de produtos."
                className="text-base md:text-lg leading-relaxed"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">
                {statsInView && <NumberFlow value={600} />}+
              </div>
              <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider">
                CONSULTÓRIOS EQUIPADOS EM TODO O BRASIL
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">
                +{statsInView && <NumberFlow value={7} />} anos
              </div>
              <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider">
                DE MERCADO
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">
                + {statsInView && <NumberFlow value={3000} />}
              </div>
              <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider">
                UNIDADES ENTREGUES
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">
                {statsInView && <NumberFlow value={100} />}%
              </div>
              <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider">
                DOS PRODUTOS CERTIFICADOS
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Story Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <FadeText 
                text="Fundada em 2018, a Lanza Medical iniciou suas atividades desenvolvendo e fabricando produtos médicos, introduzindo no mercado equipamentos de alta qualidade, design inovador e segurança. Após anos de dedicação e estudos, em 2024 a empresa reformulou seus conceitos, modernizou processos e iniciou o registro de sua linha de produtos odontológicos."
                className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base"
              />
              <FadeText 
                text="Produtos diferenciados, testados e aprovados por profissionais de alta competência, refletem a busca incessante da Lanza Medical pela excelência em todas as suas ações. Desde a sua fundação, a empresa opera de acordo com os mais altos padrões de qualidade e segurança, mantendo certificações essenciais, como o registro na ANVISA e o selo do INMETRO, que garantem aos nossos clientes confiança, segurança e conformidade com as normas nacionais."
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              />
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <img 
                src="/lovable-uploads/4d08fe92-445d-4559-b206-2dada47f7c5e.png" 
                alt="Equipe completa Lanza Medical" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <FadeText 
                  text="Missão" 
                  className="text-xl md:text-2xl font-bold text-gray-800"
                />
              </div>
              <FadeText 
                text="Desenvolver e oferecer produtos médicos e odontológicos de alta qualidade e segurança, promovendo a saúde e o bem-estar. Priorizamos a melhoria contínua e a inovação dos produtos e processos, sempre com o compromisso com a excelência e a satisfação de nossos clientes e parceiros."
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              />
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <FadeText 
                  text="Visão" 
                  className="text-xl md:text-2xl font-bold text-gray-800"
                />
              </div>
              <FadeText 
                text="Ser referência na fabricação de produtos médicos e odontológicos de alta qualidade, inovadores e acessíveis, dentro das melhores práticas de fabricação e construindo um futuro sólido com base na ética, na segurança e na valorização das pessoas."
                className="text-gray-700 leading-relaxed text-sm md:text-base"
              />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <FadeText 
                text="Valores" 
                className="text-xl md:text-2xl font-bold text-gray-800"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Star, text: "Qualidade" },
                { icon: Award, text: "Inovação com propósito" },
                { icon: Shield, text: "Honestidade" },
                { icon: Heart, text: "Atendimento com excelência" },
                { icon: Target, text: "Tradição e continuidade" },
                { icon: Eye, text: "Responsabilidade regulatória" }
              ].map((value, index) => (
                <motion.div 
                  key={value.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group"
                >
                  <value.icon className="h-5 w-5 text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-cyan-600 font-medium text-sm">{value.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
