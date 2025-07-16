import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqData = [
    {
      question: "Quais são os diferenciais dos produtos Lanza Medical?",
      answer: "Nossos produtos são desenvolvidos com tecnologia de ponta, materiais de alta qualidade e seguem rigorosos padrões de segurança. Oferecemos garantia estendida e suporte técnico especializado."
    },
    {
      question: "Como posso solicitar um orçamento?",
      answer: "Você pode solicitar um orçamento através da nossa página de contato, WhatsApp ou telefone. Nossa equipe comercial entrará em contato em até 24 horas."
    },
    {
      question: "Vocês oferecem instalação e treinamento?",
      answer: "Sim, oferecemos instalação profissional e treinamento completo para uso seguro dos equipamentos. Nossos técnicos são certificados e altamente qualificados."
    },
    {
      question: "Qual o prazo de entrega dos produtos?",
      answer: "O prazo varia conforme o produto e localização. Geralmente entre 15 a 30 dias úteis. Consulte nossa equipe para prazos específicos."
    },
    {
      question: "Vocês atendem todo o Brasil?",
      answer: "Sim, atendemos todo o território nacional com nossa rede de distribuição e assistência técnica."
    },
    {
      question: "Como funciona a garantia dos produtos?",
      answer: "Oferecemos garantia de 12 meses contra defeitos de fabricação, com possibilidade de extensão. A garantia inclui reposição de peças e mão de obra."
    },
    {
      question: "Posso financiar a compra?",
      answer: "Sim, trabalhamos com diversas opções de financiamento e parcelamento. Consulte nossa equipe comercial para as melhores condições."
    },
    {
      question: "Vocês fazem manutenção preventiva?",
      answer: "Oferecemos contratos de manutenção preventiva para garantir o funcionamento ideal dos equipamentos e prolongar sua vida útil."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Perguntas Frequentes | Lanza Medical</title>
        <meta name="description" content="Encontre respostas para as principais dúvidas sobre produtos e serviços da Lanza Medical. Equipamentos médicos de qualidade." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Encontre respostas rápidas para suas principais dúvidas sobre nossos produtos e serviços
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Não encontrou sua resposta?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas suas dúvidas e ajudar você a escolher a melhor solução
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Entre em Contato
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;