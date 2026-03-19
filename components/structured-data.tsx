export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vox Dei Studio",
    alternateName: "Vox Dei",
    url: "https://studio.voxdei.io",
    logo: "https://studio.voxdei.io/logo-vd.png",
    description:
      "Senior venture and product partner for founders and operators building AI-native products, operational systems, and mobile-first platforms.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressRegion: "South Africa",
    },
    sameAs: ["https://github.com/orgs/Vox-Dei-Build"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business",
      email: "hello@voxdei.io",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Senior Product and Venture Delivery",
    provider: {
      "@type": "Organization",
      name: "Vox Dei Studio",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Studio Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-native Product Development",
            description: "Designing and shipping AI-native products, workflows, and operational systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Operational Platform Builds",
            description: "Building internal and customer-facing software systems with senior execution and enterprise discipline.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Launch Partner",
            description: "Helping founders and teams shape, build, and launch serious digital products.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Partner",
            description: "Senior technical partnership across product judgment, architecture, delivery, and execution oversight.",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vox Dei Studio",
    url: "https://studio.voxdei.io",
    description:
      "Credible products for serious teams. Vox Dei Studio helps founders and operators build AI-native products, operational systems, and mobile-first platforms.",
    publisher: {
      "@type": "Organization",
      name: "Vox Dei Studio",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}
