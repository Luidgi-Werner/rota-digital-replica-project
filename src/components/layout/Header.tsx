import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Menu, MoveRight, X } from 'lucide-react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [{
    title: "Início",
    href: "/"
  }, {
    title: "Produtos",
    description: "Conheça nossa linha completa de mesas clínicas e ginecológicas.",
    items: [{
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
    }]
  }, {
    title: "Empresa",
    description: "Saiba mais sobre a Lanza Medical e nossa trajetória.",
    items: [{
      title: "Sobre nós",
      href: "/sobre"
    }, {
      title: "Contato",
      href: "/contato"
    }]
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
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10" asChild>
                              <Link to="/contato">Fale Conosco</Link>
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map(subItem => <NavigationMenuLink key={subItem.title} asChild className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded">
                                <Link to={subItem.href} className="flex flex-row justify-between items-center w-full">
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                              </NavigationMenuLink>)}
                          </div>
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
            <img src="/lovable-uploads/3a2f45ba-f563-4bd0-9e60-6e660e472b15.png" alt="Lanza Medical Logo" className="h-8 object-contain" />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end w-full gap-4">
          <Button className="hidden md:inline bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
            <Link to="/contato">Fale Conosco</Link>
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
                    {item.items && item.items.map(subItem => <Link key={subItem.title} to={subItem.href} className="flex justify-between items-center" onClick={() => setIsOpen(false)}>
                          <span className="text-white/80">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1 text-white" />
                        </Link>)}
                  </div>
                </div>)}
            </div>}
        </div>
      </div>
    </header>;
};
export default Header;