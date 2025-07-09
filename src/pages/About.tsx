
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/19966cb9-b1e1-4c8a-8218-1babc7f6401b.png" 
                alt="Equipe Lanza Medical" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="bg-cyan-500 rounded-lg p-8 text-white">
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                NOSSA HISTÓRIA
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Mais de 45 anos de experiência que se transformam em soluções para seu consultório.
              </h2>
              <p className="text-lg leading-relaxed">
                A LANZA MEDICAL está sediada em Ribeirão Preto, cidade reconhecida por abrigar o maior polo de empresas do setor de saúde no Brasil. Fundada com o propósito de oferecer ao mercado produtos médicos de alta qualidade a um preço justo, a empresa nasceu da visão e da ampla experiência de seu fundador, que dedicou mais de 45 anos à atuação em algumas das maiores e mais respeitadas empresas dos setores Médico e Odontológico, sempre com foco em projetos, engenharia e desenvolvimento de produtos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">600+</div>
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                CONSULTÓRIOS EQUIPADOS EM TODO O BRASIL
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">+7 anos</div>
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                DE MERCADO
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">+ 3.000</div>
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                UNIDADES ENTREGUES
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">100%</div>
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                DOS PRODUTOS CERTIFICADOS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Fundada em 2018, a Lanza Medical iniciou suas atividades desenvolvendo e fabricando produtos médicos, introduzindo no mercado equipamentos de alta qualidade, design inovador e segurança. Após anos de dedicação e estudos, em 2024 a empresa reformulou seus conceitos, modernizou processos e iniciou o registro de sua linha de produtos odontológicos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Produtos diferenciados, testados e aprovados por profissionais de alta competência, refletem a busca incessante da Lanza Medical pela excelência em todas as suas ações. Desde a sua fundação, a empresa opera de acordo com os mais altos padrões de qualidade e segurança, mantendo certificações essenciais, como o registro na ANVISA e o selo do INMETRO, que garantem aos nossos clientes confiança, segurança e conformidade com as normas nacionais.
              </p>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/66e2cbb6-1e36-4cb1-ba1a-f86b4d3f1894.png" 
                alt="Equipe completa Lanza Medical" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Desenvolver e oferecer produtos médicos e odontológicos de alta qualidade e segurança, promovendo a saúde e o bem-estar. Priorizamos a melhoria contínua e a inovação dos produtos e processos, sempre com o compromisso com a excelência e a satisfação de nossos clientes e parceiros.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser referência na fabricação de produtos médicos e odontológicos de alta qualidade, inovadores e acessíveis, dentro das melhores práticas de fabricação e construindo um futuro sólido com base na ética, na segurança e na valorização das pessoas.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Valores</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-cyan-500 font-medium">Qualidade</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-cyan-500 font-medium">Inovação com propósito</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-cyan-500 font-medium">Honestidade</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-cyan-500 font-medium">Atendimento com excelência</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-cyan-500 font-medium">Tradição e continuidade</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-cyan-500 font-medium">Responsabilidade regulatória</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
