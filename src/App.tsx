
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/security/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/:category" element={<Products />} />
              
              {/* Individual Product Routes */}
              <Route path="/produto/mesa-ginecologica-rt-2000" element={<ProductDetail />} />
              <Route path="/produto/mesa-ginecologica-rt2500" element={<ProductDetail />} />
              <Route path="/produto/mesa-ginecologica-rt4000-histeroscopia" element={<ProductDetail />} />
              <Route path="/produto/mesa-clinica-eletrica-trendlemburg-rt3000" element={<ProductDetail />} />
              <Route path="/produto/mesa-clinica-rt5000" element={<ProductDetail />} />
              <Route path="/produto/mesa-clinica-rt5000-estetic" element={<ProductDetail />} />
              <Route path="/produto/mesa-clinica-rt5000-e-ic" element={<ProductDetail />} />
              <Route path="/produto/mesa-clinica-rt2500-es" element={<ProductDetail />} />
              
              {/* Generic fallback route for products */}
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Legal Pages */}
              <Route path="/legal/politica-privacidade" element={<PrivacyPolicy />} />
              <Route path="/legal/termos-uso" element={<TermsOfService />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
