import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, FileText, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Lanza Medical</title>
        <meta name="description" content="Política de Privacidade da Lanza Medical em conformidade com a LGPD. Saiba como protegemos seus dados pessoais." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Política de Privacidade
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Compromisso com a proteção dos seus dados pessoais conforme a LGPD
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
                    <Shield className="h-6 w-6 text-primary" />
                    Introdução
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    A Lanza Medical está comprometida com a proteção da privacidade e dos dados pessoais dos seus usuários. 
                    Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                    em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                  </p>
                  <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-6 w-6 text-primary" />
                    Dados Coletados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <h3>Dados Pessoais que Coletamos:</h3>
                  <ul>
                    <li><strong>Dados de Identificação:</strong> nome, e-mail, telefone</li>
                    <li><strong>Dados Profissionais:</strong> empresa, cargo, especialidade médica</li>
                    <li><strong>Dados de Navegação:</strong> endereço IP, cookies, páginas visitadas</li>
                    <li><strong>Dados de Comunicação:</strong> mensagens enviadas através de formulários</li>
                  </ul>
                  
                  <h3>Como Coletamos:</h3>
                  <ul>
                    <li>Formulários de contato e orçamento</li>
                    <li>Cookies e tecnologias similares</li>
                    <li>Interações com nossos canais de atendimento</li>
                    <li>Participação em eventos e feiras</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-6 w-6 text-primary" />
                    Uso dos Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>Utilizamos seus dados pessoais para:</p>
                  <ul>
                    <li>Responder às suas solicitações de contato e orçamentos</li>
                    <li>Fornecer informações sobre produtos e serviços</li>
                    <li>Melhorar a experiência de navegação no site</li>
                    <li>Enviar comunicações comerciais (com seu consentimento)</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                    <li>Prevenir fraudes e garantir a segurança</li>
                  </ul>
                  
                  <h3>Base Legal para o Tratamento:</h3>
                  <ul>
                    <li>Consentimento do titular</li>
                    <li>Execução de contrato</li>
                    <li>Legítimo interesse</li>
                    <li>Cumprimento de obrigação legal</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-6 w-6 text-primary" />
                    Compartilhamento de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>Seus dados podem ser compartilhados apenas nas seguintes situações:</p>
                  <ul>
                    <li>Com prestadores de serviços que nos auxiliam (sob rigorosos contratos de confidencialidade)</li>
                    <li>Por determinação legal ou ordem judicial</li>
                    <li>Para proteção de direitos, propriedade ou segurança</li>
                    <li>Com seu consentimento expresso</li>
                  </ul>
                  
                  <p><strong>Não vendemos, alugamos ou comercializamos seus dados pessoais.</strong></p>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Segurança dos Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
                  <ul>
                    <li>Criptografia de dados em trânsito e em repouso</li>
                    <li>Controles de acesso rigorosos</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Treinamento regular da equipe</li>
                    <li>Auditorias periódicas de segurança</li>
                  </ul>
                </CardContent>
              </Card>

              {/* User Rights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Seus Direitos
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>Conforme a LGPD, você tem os seguintes direitos:</p>
                  <ul>
                    <li><strong>Confirmação da existência de tratamento</strong></li>
                    <li><strong>Acesso aos dados</strong></li>
                    <li><strong>Correção de dados incompletos, inexatos ou desatualizados</strong></li>
                    <li><strong>Anonimização, bloqueio ou eliminação</strong></li>
                    <li><strong>Portabilidade dos dados</strong></li>
                    <li><strong>Eliminação dos dados tratados com consentimento</strong></li>
                    <li><strong>Informação sobre compartilhamento</strong></li>
                    <li><strong>Revogação do consentimento</strong></li>
                  </ul>
                  
                  <p>Para exercer seus direitos, entre em contato conosco através dos canais disponíveis na seção de contato.</p>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    Retenção de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>Mantemos seus dados pessoais pelo tempo necessário para:</p>
                  <ul>
                    <li>Cumprir as finalidades para as quais foram coletados</li>
                    <li>Atender obrigações legais e regulamentares</li>
                    <li>Exercer direitos em processos administrativos ou judiciais</li>
                  </ul>
                  
                  <p>Após esse período, os dados serão eliminados ou anonimizados de forma segura.</p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Contato - Encarregado de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Para dúvidas sobre esta Política de Privacidade ou exercício de direitos:</p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong>E-mail:</strong> privacidade@lanzamedical.com.br</p>
                    <p><strong>Telefone:</strong> (11) 99999-9999</p>
                    <p><strong>Endereço:</strong> [Endereço da empresa]</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;