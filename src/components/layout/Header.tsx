import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Menu, MoveRight, X, Shield, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin, isViewer, signOut } = useAuth();
  const navigationItems = [{
    title: "Início",
    href: "/"
  }, {
    title: "Produtos",
    description: "Conheça nossa linha completa de mesas clínicas e ginecológicas.",
    items: [{
      title: "Todos os Produtos",
      href: "/produtos"
    }, {
      title: "Mesa Ginecológica RT 2000",
      href: "/produto/mesa-ginecologica-rt-2000"
    }, {
      title: "Mesa Ginecológica RT2500",
      href: "/produto/mesa-ginecologica-rt2500"
    }, {
      title: "Mesa Ginecológica RT4000 Histeroscopia",
      href: "/produto/mesa-ginecologica-rt4000-histeroscopia"
    }, {
      title: "Mesa Clínica Elétrica com Trendlemburg RT3000",
      href: "/produto/mesa-clinica-eletrica-trendlemburg-rt3000"
    }, {
      title: "Mesa Clínica RT5000",
      href: "/produto/mesa-clinica-rt5000"
    }, {
      title: "Mesa Clínica RT5000 Estetic",
      href: "/produto/mesa-clinica-rt5000-estetic"
    }, {
      title: "Mesa Clínica RT5000 E-IC",
      href: "/produto/mesa-clinica-rt5000-e-ic"
    }, {
      title: "Mesa Clínica RT2500 ES",
      href: "/produto/mesa-clinica-rt2500-es"
    }, {
      title: "Mesa Clínica RT5500",
      href: "/produto/mesa-clinica-rt5500"
    }]
  }, {
    title: "Sobre nós",
    href: "/sobre"
  }, {
    title: "Contato",
    href: "/contato"
  }];
  return <header className="w-full z-40 fixed top-0 left-0" style={{
    backgroundColor: '#003250'
  }}>
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        {/* Desktop Navigation */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map(item => <NavigationMenuItem key={item.title}>
                  {item.href ? <NavigationMenuLink asChild>
                      <Link to={item.href}>
                        <Button variant="ghost" className="text-white bg-transparent">{item.title}</Button>
                      </Link>
                    </NavigationMenuLink> : <>
                      <NavigationMenuTrigger className="font-medium text-sm text-slate-50 bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[320px] p-4">
                        <div className="flex flex-col text-sm gap-2">
                           {item.items?.map(subItem => 
                             <Link key={subItem.title} to={subItem.href} className="flex flex-row justify-start items-center hover:bg-muted py-2 px-4 rounded w-full">
                               <span>{subItem.title}</span>
                             </Link>
                           )}
                          <Button size="sm" className="mt-4 w-full" asChild>
                            <a href="https://wa.me/5516994472195" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                          </Button>
                        </div>
                      </NavigationMenuContent>
                    </>}
                </NavigationMenuItem>)}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex lg:justify-center">
          <Link to="/" className="flex items-center">
            {/* Desktop Logo */}
            <img 
              src="/lovable-uploads/3a2f45ba-f563-4bd0-9e60-6e660e472b15.png" 
              alt="Lanza Medical Logo" 
              className="h-10 lg:h-8 hidden md:block object-contain" 
            />
            {/* Mobile Logo - Large */}
            <img 
              src="/lovable-uploads/2306f352-c1d4-4ff7-ac19-523c563bfd91.png" 
              alt="Lanza Medical Logo" 
              className="h-14 md:hidden object-contain" 
            />
          </Link>
        </div>

        {/* CTA and Auth Buttons */}
        <div className="flex justify-end w-full gap-2">
          {user ? (
            <>
              {(isAdmin || isViewer) && (
                <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-white hover:bg-white/10" asChild>
                  <Link to="/admin">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Link>
                </Button>
              )}
              <Button onClick={signOut} variant="ghost" size="sm" className="hidden lg:inline-flex text-white hover:bg-white/10">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-white hover:bg-white/10" asChild>
              <Link to="/auth">Login</Link>
            </Button>
          )}
          <Button className="hidden md:inline bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
            <a href="https://wa.me/5516994472195" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-white/10">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
                    {isOpen && <div className="absolute top-20 border-t flex flex-col w-full right-0 shadow-lg py-4 container gap-8" style={{
          backgroundColor: '#003250',
          borderColor: 'rgba(255,255,255,0.2)'
        }}>
              {navigationItems.map(item => <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? <Link to={item.href} className="flex justify-between items-center" onClick={() => setIsOpen(false)}>
                        <span className="text-lg text-white">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-white/60" />
                      </Link> : <p className="text-lg text-white">{item.title}</p>}
                    {item.items && item.items.map(subItem => <Link key={subItem.title} to={subItem.href} className="flex justify-start items-center" onClick={() => setIsOpen(false)}>
                          <span className="text-white/80">
                            {subItem.title}
                          </span>
                        </Link>)}
                  </div>
                </div>)}
              
              <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                {user ? (
                  <>
                    {(isAdmin || isViewer) && (
                      <Button variant="ghost" className="w-full text-white hover:bg-white/10 mb-2" asChild>
                        <Link to="/admin" onClick={() => setIsOpen(false)}>
                          <Shield className="h-4 w-4 mr-2" />
                          Admin
                        </Link>
                      </Button>
                    )}
                    <Button onClick={() => { signOut(); setIsOpen(false); }} variant="ghost" className="w-full text-white hover:bg-white/10 mb-2">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </Button>
                  </>
                ) : (
                  <Button variant="ghost" className="w-full text-white hover:bg-white/10 mb-2" asChild>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
                  </Button>
                )}
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
                  <a href="https://wa.me/5516994472195" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                </Button>
              </div>
            </div>}
        </div>
      </div>
    </header>;
};
export default Header;
