
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Shield, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeText } from '@/components/ui/fade-text';
import { useToast } from '@/hooks/use-toast';
import { sanitizeInput, validateEmail, validatePhone, formRateLimiter } from '@/utils/security';
import MetaTags from '@/components/seo/MetaTags';
import ImageEditor from '@/components/admin/ImageEditor';
import { useEditableImage } from '@/hooks/useEditableImage';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  // Hook para gerenciar a imagem editável da seção de contato
  const { currentImage: contactImage, handleImageChange: handleContactImageChange } = useEditableImage({
    defaultImage: '/lovable-uploads/7224090e-9f26-4035-b16b-0d3382359b52.png',
    imageKey: 'contact-hero-image'
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappError, setWhatsappError] = useState('');
  const { toast } = useToast();

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

  const handleInputChange = (field: string, value: string) => {
    // For phone field, only allow numbers and format
    if (field === 'phone') {
      // Verifica se contém apenas números, parênteses, espaços e hífen
      const hasInvalidChars = /[^0-9()\s-]/.test(value);
      
      if (hasInvalidChars) {
        setWhatsappError('Por favor, digite apenas números');
        return;
      }
      
      setWhatsappError('');
      const formattedValue = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [field]: sanitizeInput(formattedValue)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: sanitizeInput(value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const userIP = 'user-ip'; // In production, get actual IP
    if (!formRateLimiter.isAllowed(userIP)) {
      const remainingTime = Math.ceil(formRateLimiter.getRemainingTime(userIP) / 60000);
      toast({
        title: "Muitas tentativas",
        description: `Aguarde ${remainingTime} minutos antes de enviar novamente.`,
        variant: "destructive"
      });
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Nome, e-mail e mensagem são obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive"
      });
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um telefone válido.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || '',
            company: formData.company || null,
            message: formData.message
          }
        ]);

      if (error) throw error;
      
      toast({
        title: "Mensagem enviada!",
        description: "Retornaremos em breve. Obrigado pelo contato!"
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MetaTags 
        title="Contato | Lanza Medical - Equipamentos Médicos"
        description="Entre em contato com a Lanza Medical. Atendimento técnico especializado em equipamentos médicos. Telefone: (16) 99392-4529"
        keywords="contato lanza medical, suporte técnico, equipamentos médicos contato"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 text-center py-[65px]">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="inline-block bg-gray-100 rounded-full px-6 py-2 text-sm font-medium text-gray-700 mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            FALE COM A LANZA
          </motion.div>
          <FadeText className="text-4xl font-bold text-gray-800 mb-4" direction="up" text="Atendimento humano, técnico e rápido." />
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            Estamos prontos para esclarecer suas dúvidas, oferecer suporte e ajudar você a escolher o equipamento ideal para sua clínica ou consultório.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-[15px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div className="bg-gray-50 rounded-lg p-8" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <div className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-6">
                ENTRE EM CONTATO
              </div>
              <h2 className="text-2xl font-bold text-cyan-500 mb-4">
                Nos envie uma mensagem.
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário que nossa equipe retornará em breve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input 
                      placeholder="ex: Julia Santos" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu e-mail *
                    </label>
                    <Input 
                      type="email"
                      placeholder="ex: contato@empresa.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu WhatsApp
                    </label>
                    <div className="space-y-1">
                      <Input 
                        placeholder="Ex: (16) 99999-9999" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        maxLength={15}
                        className={whatsappError ? 'border-2 border-red-500' : ''}
                      />
                      {whatsappError && (
                        <div className="flex items-center gap-1 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
                          <AlertCircle className="w-4 h-4" />
                          <span>{whatsappError}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sua Empresa
                    </label>
                    <Input 
                      placeholder="Ex: Clínica Médica" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sua mensagem *
                  </label>
                  <Textarea 
                    placeholder="Descreva sua necessidade, dúvidas ou interesse em nossos produtos..." 
                    rows={6} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Proteção de Dados</p>
                    <p>
                      Seus dados são protegidos conforme a LGPD. Utilizamos apenas para responder sua solicitação. 
                      Consulte nossa <a href="/legal/politica-privacidade" className="underline hover:no-underline">Política de Privacidade</a>.
                    </p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#003250] hover:bg-[#003250]/90 text-white rounded-full py-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </motion.div>

            {/* Image and Contact Info */}
            <motion.div className="relative" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <div className="relative">
                {/* Mostrar ImageEditor apenas no ambiente de desenvolvimento/edição */}
                {import.meta.env.DEV && (
                  <ImageEditor 
                    currentImage={contactImage} 
                    onImageChange={handleContactImageChange}
                    productName="Imagem Atendente Contato"
                  />
                )}
                <img src={contactImage} alt="Atendente Lanza Medical" className="w-full rounded-lg shadow-lg object-fill" />
              
                {/* Contact notification overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-lg flex items-center space-x-3">
                  <div className="bg-cyan-500 rounded-full p-2">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">
                      Ligue para (16) 3771-2980 ou preencha nosso formulário e entraremos em contato com você em breve.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          staggerChildren: 0.1
        }}>
            <motion.div className="flex items-center space-x-4" variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0
            }
          }}>
              <div className="bg-[#003250] rounded-full p-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Rua Barretos, 2524,</p>
                <p className="text-gray-600">Ribeirão Preto - SP, 14075-000.</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition-opacity" variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0
            }
          }} onClick={() => window.open('https://wa.me/5516994472195', '_blank')}>
              <div className="bg-[#003250] rounded-full p-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Nosso WhatsApp</p>
                <p className="text-gray-600">(16) 99447-2195</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition-opacity" variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0
            }
          }} onClick={() => window.open('mailto:vendas@lanzamedical.com.br', '_blank')}>
              <div className="bg-[#003250] rounded-full p-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Nossos E-mails</p>
                <p className="text-gray-600">vendas@lanzamedical.com.br</p>
                <p className="text-gray-600">assistenciatecnica@lanzamedical.com.br</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
