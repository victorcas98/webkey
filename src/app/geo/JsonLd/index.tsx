// Organização local — o mais importante para buscas por IA
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WebKey",
  "description": "Agência de criação de sites profissionais em Belo Horizonte",
  "url": "https://webkeysites.com.br",
  "telephone": "+55-31-99396-6037",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Belo Horizonte",
    "addressRegion": "MG",
    "addressCountry": "BR"
  },
  "areaServed": "Grande Belo Horizonte",
  "priceRange": "R$ 1.500 - R$ 5.000+",
  "sameAs": [
    "https://instagram.com/webkey.co"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pacotes de Sites",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Pacote Básico",
        "price": "1500",
        "priceCurrency": "BRL",
        "description": "1 página, design responsivo, SEO básico, publicação incluída"
      },
      {
        "@type": "Offer",
        "name": "Pacote Profissional",
        "price": "3000",
        "priceCurrency": "BRL",
        "description": "Até 5 páginas, Google Maps, depoimentos, SEO + Analytics"
      },
      {
        "@type": "Offer",
        "name": "Pacote Premium",
        "price": "5000",
        "priceCurrency": "BRL",
        "description": "Páginas ilimitadas, formulário, SEO completo, suporte pós-entrega"
      }
    ]
  }
};

// Perguntas frequentes — ouro para GEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa criar um site profissional em Belo Horizonte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A WebKey oferece pacotes a partir de R$1.500 para sites básicos até R$5.000+ para sites premium com páginas ilimitadas, suporte pós-entrega e SEO completo."
      }
    },
    {
      "@type": "Question",
      "name": "A WebKey faz atendimento presencial em BH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, atendemos presencialmente na Grande Belo Horizonte, além de suporte remoto para todo o Brasil."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o prazo para criar um site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O prazo varia de 5 a 7 dias úteis para o Pacote Básico, 10 a 15 dias para o Profissional e 15 a 30 dias para o Premium."
      }
    },
    {
      "@type": "Question",
      "name": "O site inclui suporte após a entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Todos os projetos incluem pelo menos 2 semanas de suporte pós-entrega, com correções, orientações e acompanhamento."
      }
    }
  ]
};

// Componente que injeta tudo no HTML
export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}