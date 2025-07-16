
import { Footer7 } from '@/components/ui/footer-7';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Footer7 />
      {/* Legal Links */}
      <div className="bg-primary/5 border-t py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Lanza Medical. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <Link to="/legal/politica-privacidade" className="hover:text-primary">
                Política de Privacidade
              </Link>
              <Link to="/legal/termos-uso" className="hover:text-primary">
                Termos de Uso
              </Link>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
