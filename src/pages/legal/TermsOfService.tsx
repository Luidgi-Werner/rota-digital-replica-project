import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertCircle, Users, CreditCard, Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Lanza Medical</title>
        <meta name="description" content="Termos de Uso do site e serviços da Lanza Medical. Conheça seus direitos e responsabilidades." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Termos de Uso
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Condições gerais de uso do site e serviços da Lanza Medical
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Aceitação dos Termos
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    Ao acessar e utilizar o site da Lanza Medical, você concorda em cumprir e estar sujeito aos 
                    seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, 
                    não deve utilizar nosso site.
                  </p>
                  <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Informações da Empresa
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Razão Social:</strong> Lanza Medical Equipamentos Médicos Ltda.</p>
                    <p><strong>CNPJ:</strong> [CNPJ da empresa]</p>
                    <p><strong>Endereço:</strong> [Endereço completo]</p>
                    <p><strong>E-mail:</strong> contato@lanzamedical.com.br</p>
                    <p><strong>Telefone:</strong> (11) 99999-9999</p>
                  </div>
                </CardContent>
              </Card>

              {/* Site Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-primary" />
                    Uso do Site
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <h3>Uso Permitido:</h3>
                  <ul>
                    <li>Consultar informações sobre produtos e serviços</li>
                    <li>Solicitar orçamentos e entrar em contato</li>
                    <li>Navegar pelas páginas do site</li>
                    <li>Compartilhar conteúdo através das redes sociais</li>
                  </ul>
                  
                  <h3>Uso Proibido:</h3>
                  <ul>
                    <li>Utilizar o site para atividades ilegais ou não autorizadas</li>
                    <li>Tentar obter acesso não autorizado a sistemas ou dados</li>
                    <li>Transmitir vírus, malware ou código malicioso</li>
                    <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                    <li>Interferir no funcionamento normal do site</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Propriedade Intelectual
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    Todo o conteúdo do site da Lanza Medical, incluindo mas não limitado a textos, imagens, 
                    logotipos, ícones, fotografias, vídeos, gráficos, software e sua organização, é de 
                    propriedade exclusiva da Lanza Medical ou de seus licenciadores.
                  </p>
                  
                  <h3>Direitos Autorais:</h3>
                  <ul>
                    <li>O conteúdo é protegido pelas leis de direitos autorais</li>
                    <li>É proibida a reprodução sem autorização expressa</li>
                    <li>Uso comercial não autorizado é vedado</li>
                    <li>Marcas registradas são de propriedade de seus respectivos donos</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Products and Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-primary" />
                    Produtos e Serviços
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <h3>Informações sobre Produtos:</h3>
                  <ul>
                    <li>As especificações estão sujeitas a alterações sem aviso prévio</li>
                    <li>Preços podem variar conforme configuração e localização</li>
                    <li>Disponibilidade pode variar por região</li>
                    <li>Imagens podem diferir do produto final</li>
                  </ul>
                  
                  <h3>Orçamentos e Propostas:</h3>
                  <ul>
                    <li>Orçamentos têm validade limitada conforme especificado</li>
                    <li>Preços finais podem incluir impostos e frete</li>
                    <li>Condições comerciais sujeitas à aprovação</li>
                    <li>Entrega sujeita à confirmação de estoque</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Privacy and Data */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Privacidade e Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    O tratamento de dados pessoais coletados através do site é regido por nossa 
                    <a href="/legal/politica-privacidade" className="text-primary hover:underline"> Política de Privacidade</a>, 
                    que faz parte integrante destes Termos de Uso.
                  </p>
                  
                  <h3>Cookies:</h3>
                  <ul>
                    <li>Utilizamos cookies para melhorar a experiência do usuário</li>
                    <li>Você pode gerenciar cookies através das configurações do navegador</li>
                    <li>Alguns recursos podem não funcionar sem cookies habilitados</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Limitations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-primary" />
                    Limitações de Responsabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <h3>Disponibilidade do Site:</h3>
                  <ul>
                    <li>O site pode ficar indisponível por manutenção ou problemas técnicos</li>
                    <li>Não garantimos funcionamento ininterrupto</li>
                    <li>Informações podem conter erros ou estar desatualizadas</li>
                  </ul>
                  
                  <h3>Limitações:</h3>
                  <ul>
                    <li>Não nos responsabilizamos por danos indiretos ou consequenciais</li>
                    <li>Responsabilidade limitada ao valor do produto ou serviço</li>
                    <li>Não garantimos resultados específicos</li>
                    <li>Usuário assume riscos de uso do site</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Links and Third Parties */}
              <Card>
                <CardHeader>
                  <CardTitle>Links para Sites de Terceiros</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo 
                    conteúdo, políticas de privacidade ou práticas desses sites. O acesso a links 
                    externos é por sua conta e risco.
                  </p>
                </CardContent>
              </Card>

              {/* Changes */}
              <Card>
                <CardHeader>
                  <CardTitle>Alterações nos Termos</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                    As alterações entrarão em vigor imediatamente após sua publicação no site. 
                    O uso continuado do site após as modificações constitui aceitação dos novos termos.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle>Lei Aplicável e Jurisdição</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será 
                    resolvida nos tribunais competentes do Brasil, renunciando a qualquer outro foro, 
                    por mais privilegiado que seja.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;