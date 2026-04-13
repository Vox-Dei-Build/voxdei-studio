export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vox Dei Studio",
    alternateName: "Vox Dei",
    url: "https://studio.voxdei.io",
    logo: "https://studio.voxdei.io/logo-vd.png",
    description:
      "Senior product judgment, strategy, and AI-native execution in one senior team — for founders and operators building things that have to hold.",
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
    serviceType: "Senior Product Strategy, AI Orchestration, Design and Engineering",
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
            name: "Studio Sprint",
            description: "Repositioning, validation, focused product slices, strategy work, and high-stakes resets — delivered in 4 to 8 weeks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Launch Partner",
            description: "A senior partner driving product judgment, delivery quality, and momentum through go-live, across 8 to 16 weeks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Partner",
            description: "Ongoing senior judgment across architecture, AI orchestration, delivery pressure, and product evolution.",
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
      "Senior product judgment, strategy, and AI-native execution. Vox Dei Studio combines product thinking, AI orchestration, design, and engineering in one senior team.",
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
