export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vox Dei Studio",
    alternateName: "Vox Dei",
    url: "https://www.voxdei.studio",
    logo: "https://www.voxdei.studio/logo-v.png",
    description:
      "AI Venture Studio building AI-enabled products, platforms, and modern systems — fast. We partner with enterprises and startups to design, build, and ship production-grade software.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressRegion: "South Africa",
    },
    sameAs: [
      "https://github.com/orgs/Vox-Dei-Build",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business",
      email: "hello@voxdei.io",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Venture Studio & Software Development",
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
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Product Development",
            description:
              "Building AI-enabled products and platforms for startups and enterprises",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Platform Development",
            description:
              "Large-scale enterprise software and platform development with modern architecture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Venture Building",
            description:
              "End-to-end venture building from concept to production-grade systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Development",
            description:
              "Complete software development with React, Next.js, TypeScript, and modern tech stack",
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.voxdei.studio",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://www.voxdei.studio/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://www.voxdei.studio/#about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://www.voxdei.studio/#contact",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vox Dei Studio",
    url: "https://www.voxdei.studio",
    description:
      "AI Venture Studio building AI-enabled products, platforms, and modern systems — fast.",
    publisher: {
      "@type": "Organization",
      name: "Vox Dei Studio",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
