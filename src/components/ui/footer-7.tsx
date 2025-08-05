import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{
      name: string;
      href: string;
    }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [{
  title: "Páginas",
  links: [{
    name: "Início",
    href: "/"
  }, {
    name: "Produtos",
    href: "/produtos"
  }, {
    name: "Sobre Nós",
    href: "/sobre"
  }, {
    name: "Contato",
    href: "/contato"
  }]
}, {
  title: "Produtos",
  links: [{
    name: "Mesa Ginecológica RT2000",
    href: "/produto/mesa-ginecologica-rt-2000"
  }, {
    name: "Mesa Ginecológica RT2500",
    href: "/produto/mesa-ginecologica-rt2500"
  }, {
    name: "Mesa Ginecológica RT4000",
    href: "/produto/mesa-ginecologica-rt4000-histeroscopia"
  }, {
    name: "Mesa Clínica RT3000",
    href: "/produto/mesa-clinica-eletrica-trendlemburg-rt3000"
  }, {
    name: "Mesa Clínica RT5000",
    href: "/produto/mesa-clinica-rt5000"
  }, {
    name: "Mesa Clínica RT5000 Estetic",
    href: "/produto/mesa-clinica-rt5000-estetic"
  }, {
    name: "Mesa Clínica RT5000 E-IC",
    href: "/produto/mesa-clinica-rt5000-e-ic"
  }, {
    name: "Mesa Clínica RT2500 ES",
    href: "/produto/mesa-clinica-rt2500-es"
  }, {
    name: "Mesa Clínica RT5500",
    href: "/produto/mesa-clinica-rt5500"
  }]
}, {
  title: "Atendimento",
  links: [{
    name: "Suporte Técnico",
    href: "/contato"
  }, {
    name: "Vendas",
    href: "/contato"
  }, {
    name: "WhatsApp",
    href: "https://wa.me/5516994472195"
  }, {
    name: "E-mail",
    href: "mailto:vendas@lanzamedical.com.br"
  }]
}];

const defaultSocialLinks = [{
  icon: <FaInstagram className="size-5" />,
  href: "https://www.instagram.com/lanzamedical?igsh=MWJ2MTcwcGlxYXkwNA==",
  label: "Instagram"
}, {
  icon: <FaFacebook className="size-5" />,
  href: "https://www.facebook.com/share/1DxcLVZVq8/?mibextid=wwXIfr",
  label: "Facebook"
}];

const defaultLegalLinks = [{
  name: "Política de Privacidade",
  href: "#"
}, {
  name: "Termos de Uso",
  href: "#"
}];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/lovable-uploads/3a2f45ba-f563-4bd0-9e60-6e660e472b15.png",
    alt: "Lanza Medical Logo",
    title: "Lanza Medical"
  },
  sections = defaultSections,
  description = "Especialistas em equipamentos médicos de alta qualidade para consultórios e clínicas. Mais de 7 anos de experiência no mercado.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 LANZA MEDICAL. TODOS OS DIREITOS RESERVADOS.",
  legalLinks = defaultLegalLinks
}: Footer7Props) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const handleLinkClick = (href: string) => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#003250] text-white py-[28px]">
      <div className="container mx-auto px-4 py-0 my-[10px]">
        <motion.div 
          className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <motion.div className="flex w-full flex-col justify-between gap-6 lg:items-start" variants={itemVariants}>
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <Link to={logo.url} onClick={() => handleLinkClick(logo.url)}>
                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-8" />
              </Link>
            </div>
            <p className="max-w-[70%] text-sm text-gray-300">
              {description}
            </p>
            <p className="text-sm text-gray-300">
              Rua Barretos, 2524 — Vila Elisa, Ribeirão Preto — SP, 14075-000
            </p>
            <ul className="flex items-center space-x-6 text-gray-300">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-cyan-400 transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20" variants={itemVariants}>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-cyan-400 transition-colors">
                      {link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('https://wa.me') ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
                      ) : (
                        <Link to={link.href} onClick={() => handleLinkClick(link.href)}>{link.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-600 py-8 text-xs font-medium text-gray-300 md:flex-row md:items-center md:text-left" 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-cyan-400 transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};