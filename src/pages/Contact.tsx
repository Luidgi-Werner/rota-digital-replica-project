
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeText } from '@/components/ui/fade-text';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="inline-block bg-gray-100 rounded-full px-6 py-2 text-sm font-medium text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FALE COM A LANZA
          </motion.div>
          <FadeText
            className="text-4xl font-bold text-gray-800 mb-4"
            direction="up"
            text="Atendimento humano, técnico e rápido."
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Estamos prontos para esclarecer suas dúvidas, oferecer suporte e ajudar você a escolher o equipamento ideal para sua clínica ou consultório.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-6">
                ENTRE EM CONTATO
              </div>
              <h2 className="text-2xl font-bold text-cyan-500 mb-4">
                Nos envie uma mensagem.
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário que nossa equipe retornará em breve.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <Input placeholder="ex: Julia Santos" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu e-mail
                    </label>
                    <Input placeholder="ex: vendas@lanzamedical.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu WhatsApp
                    </label>
                    <Input placeholder="Ex: (99) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sua Empresa
                    </label>
                    <Input placeholder="Ex: Lanza Medical" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sua mensagem
                  </label>
                  <Textarea 
                    placeholder="Escreva aqui..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-[#003250] hover:bg-[#003250]/90 text-white rounded-full py-3">
                  Enviar mensagem
                </Button>
              </form>
            </motion.div>

            {/* Image and Contact Info */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/lovable-uploads/a5073c76-a239-4d98-b687-9b0c568dd488.png" 
                alt="Atendente Lanza Medical" 
                className="w-full rounded-lg shadow-lg"
              />
              
              {/* Contact notification overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-lg flex items-center space-x-3">
                <div className="bg-cyan-500 rounded-full p-2">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-800">
                    Ligue para (16) 99447-2195 ou preencha nosso formulário e entraremos em contato com você em breve.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            <motion.div 
              className="flex items-center space-x-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-[#003250] rounded-full p-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Rua Barreiros, 2524,</p>
                <p className="text-gray-600">Ribeirão Preto - SP, 14075-000.</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-[#003250] rounded-full p-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Nosso WhatsApp</p>
                <p className="text-gray-600">(16) 99447-2195</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-[#003250] rounded-full p-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Nosso E-mail</p>
                <p className="text-gray-600">vendas@lanzamedical.com.br</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
