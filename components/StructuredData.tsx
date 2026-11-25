import { BUSINESS_NAME, CITY, INSTAGRAM, SITE_URL, STATE, WHATSAPP, faq, services } from "@/lib/site";

/** Dados estruturados para o Google: empresa local (serviço em Franca/SP) e perguntas frequentes. */
export default function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#empresa`,
    name: BUSINESS_NAME,
    description:
      "Limpeza e higienização de estofados em Franca/SP e região: sofás, poltronas, cadeiras, tapetes, bancos de carro e couro. Atendimento no local do cliente.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-jg.png`,
    image: [`${SITE_URL}/opengraph-image.jpg`, `${SITE_URL}/jefferson-hero-hd.jpg`],
    telephone: `+${WHATSAPP}`,
    address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: STATE, addressCountry: "BR" },
    areaServed: [
      { "@type": "City", name: `${CITY}, ${STATE}` },
      { "@type": "AdministrativeArea", name: `Região de ${CITY}, ${STATE}` },
    ],
    sameAs: [INSTAGRAM],
    contactPoint: { "@type": "ContactPoint", telephone: `+${WHATSAPP}`, contactType: "customer service", availableLanguage: "Portuguese" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Limpeza e higienização de estofados",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Limpeza e higienização de ${s.name.toLowerCase()}`, description: s.text, areaServed: `${CITY}, ${STATE}` },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      {[business, faqPage].map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}
