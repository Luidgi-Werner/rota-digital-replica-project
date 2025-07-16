import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

const MetaTags = ({ 
  title = "Lanza Medical - Equipamentos Médicos de Qualidade",
  description = "Lanza Medical oferece equipamentos médicos de alta qualidade para consultórios e clínicas. Mesas ginecológicas, clínicas e produtos especializados com +7 anos de experiência.",
  keywords = "equipamentos médicos, mesa ginecológica, mesa clínica, Lanza Medical, equipamentos hospitalares, instrumentos médicos",
  ogImage = "/lovable-uploads/3a2f45ba-f563-4bd0-9e60-6e660e472b15.png",
  ogUrl,
  structuredData
}: MetaTagsProps) => {
  const currentUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : '');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lanza Medical" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lanza Medical" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#003250" />
      <meta name="msapplication-TileColor" content="#003250" />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.country" content="Brazil" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default MetaTags;