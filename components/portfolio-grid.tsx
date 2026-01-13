"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";

const projectCategories = [
  {
    name: "Enterprise & Scale Platforms",
    description: "Production systems for enterprise clients",
    projects: [
      {
        title: "FNB Home Loans",
        category: "Financial Services",
        location: "South Africa",
        description:
          "Large-scale enterprise banking platform serving national customers with React-based design system and scalable frontend architecture.",
        tags: ["Enterprise", "Banking", "Design System"],
        image: "screenshots/fnb.png",
        link: "https://www.fnb.co.za/home-loans/index.html",
        responsibilities: [
          "Frontend architecture design",
          "React design system",
          "Team mentorship",
          "Accessibility (W3C)",
        ],
      },
      {
        title: "United Exports",
        category: "Fruit Logistics",
        location: "International",
        description:
          "A fruit business established in 2002 that evolved into a vertically integrated model spanning production through packaging and delivery.",
        tags: ["Logistics", "Supply Chain", "Ops"],
        image: "screenshots/unitedexports.png",
        link: "https://united-exports.com/",
        responsibilities: [
          "Supply chain systems",
          "Production tracking",
          "Logistics platform",
        ],
      },
      {
        title: "Bright Africa",
        category: "Risk & Advisory",
        location: "Africa",
        description:
          "Enterprise platforms supporting planning, analytics, and advisory services with complex data visualization.",
        tags: ["Enterprise", "Analytics", "Platform"],
        image: "screenshots/brightafrica.png",
        link: "https://brightafrica.riscura.com/",
        responsibilities: [
          "Frontend development",
          "Backend integration",
          "UI/UX implementation",
        ],
      },
      {
        title: "BrightPlan",
        category: "Planning Platform",
        location: "USA",
        description:
          "Financial planning and advisory platform with sophisticated risk modeling and analytics capabilities.",
        tags: ["Enterprise", "Planning", "Frontend"],
        image: "screenshots/brightplan.png",
        link: "https://www.brightplan.com/",
        responsibilities: [
          "Platform development",
          "System integration",
          "Production delivery",
        ],
      },
      {
        title: "Duram",
        category: "Manufacturing",
        location: "South Africa",
        description:
          "Digital systems supporting industrial manufacturing operations with web platform development.",
        tags: ["Industrial", "Manufacturing", "Web"],
        image: "screenshots/duram.png",
        link: "https://www.duram.co.za/",
        responsibilities: [
          "Web platform development",
          "System integration",
          "UI engineering",
        ],
      },
      {
        title: "Linphone",
        category: "Communications",
        location: "International",
        description:
          "Open-source SIP communication platform with cross-platform development and VoIP integration.",
        tags: ["VoIP", "Open Source", "Platform"],
        image: "screenshots/linphone.png",
        link: "https://www.linphone.org/home/",
        responsibilities: [
          "Frontend development",
          "Platform optimization",
          "Production delivery",
        ],
      },
    ],
  },
  {
    name: "Venture Builds & AI Products",
    description: "AI-enabled platforms and product ventures",
    projects: [
      {
        title: "Andrual AI",
        category: "AI Workspace",
        location: "Germany",
        description:
          "AI platform for independent real estate agents: lead qualification + automations typically reserved for large franchises, helping agents stay independent and keep more commission.",
        tags: ["AI CRM", "Real Estate", "Automation"],
        image: "screenshots/andrual.png",
        link: "https://www.andrual.com/",
        responsibilities: [
          "AI CRM development",
          "Lead qualification systems",
          "Agent automation",
        ],
      },
      {
        title: "RoomKing",
        category: "PropTech",
        location: "South Africa",
        description:
          "Rental marketplace platform connecting property owners with verified tenants across South Africa.",
        tags: ["Marketplace", "PropTech", "Platform"],
        image: "screenshots/roomking.png",
        link: "https://roomking.com/za",
        responsibilities: [
          "Platform development",
          "Verification systems",
          "User experience",
        ],
      },
      {
        title: "Pasella",
        category: "WhatsApp Commerce",
        location: "South Africa",
        description:
          "AI-enabled commerce workflows. Platform enabling merchants to sell products, run promotions, and accept payments directly via WhatsApp.",
        tags: ["AI", "Commerce", "WhatsApp", "Payments"],
        image: "screenshots/pasella.png",
        link: "https://pasella.co/",
        responsibilities: [
          "Product & system architecture",
          "Full-stack development",
          "AI-assisted automation",
        ],
      },
      {
        title: "Loomelo",
        category: "Skills Platform",
        location: "South Africa",
        description:
          "Platform dedicated to equipping young adults with job-ready skills, delivered conveniently through WhatsApp with a clear 'discover → learn → connect → apply' journey.",
        tags: ["Education", "WhatsApp", "Pathways"],
        image: "screenshots/loomelo.png",
        link: "https://www.loomelo.co.za/",
        responsibilities: [
          "End-to-end technical leadership",
          "WhatsApp integration",
          "Learning pathway design",
        ],
      },
      {
        title: "BackaBuddy",
        category: "Crowdfunding",
        location: "Africa",
        description:
          "A South African crowdfunding platform for online campaigns supporting causes and organisations, with a 'how it works' flow designed for fundraising outcomes.",
        tags: ["Payments", "Fundraising", "Platform"],
        image: "screenshots/backabuddy.png",
        link: "https://www.backabuddy.co.za/",
        responsibilities: [
          "Platform development",
          "Payment integration",
          "Campaign systems",
        ],
      },
      {
        title: "Doctorly",
        category: "Healthcare",
        location: "Germany",
        description:
          "Cloud-based, user-friendly practice management software in Germany for medical professionals.",
        tags: ["Healthcare", "SaaS", "Frontend"],
        image: "screenshots/doctorly.png",
        link: "https://www.doctorly.de/praxissoftware",
        responsibilities: [
          "Senior frontend engineering",
          "Scalable UI systems",
          "Cross-functional collaboration",
        ],
      },
    ],
  },
  {
    name: "Brand & Digital Products",
    description: "High-quality digital experiences for global brands",
    projects: [
      {
        title: "Platinum Seed",
        category: "Digital Agency",
        location: "South Africa",
        description:
          "Digital products, platforms & innovation work including CMS, microsites, web and mobile apps with full-stack development.",
        tags: ["Full-Stack", "Mobile", "CMS"],
        image: "screenshots/platinumseed.png",
        link: "https://www.platinumseed.com/",
        responsibilities: [
          "Full-stack development",
          "React Native apps",
          "REST API design",
          "Introduced AR to company",
        ],
      },
      {
        title: "Rémy Martin Collection",
        category: "Luxury Brand",
        location: "France",
        description:
          "Premium brand experience for Rémy Martin VS Collection with interactive frontend and optimizations.",
        tags: ["Brand", "Interactive", "Frontend"],
        image: "screenshots/remymartin.png",
        link: "https://www.remymartin.com/collection/vs/",
        responsibilities: [
          "Frontend engineering",
          "Interactive experiences",
          "Performance optimization",
        ],
      },
      {
        title: "Skin Renewal",
        category: "Health & Beauty",
        location: "South Africa",
        description:
          "Digital platform for skin care and aesthetic treatments with booking system and content management.",
        tags: ["E-commerce", "Booking", "Frontend"],
        image: "screenshots/skinrenewal.png",
        link: "https://www.skinrenewal.co.za/",
        responsibilities: [
          "Frontend development",
          "Cross-browser optimization",
          "Production delivery",
        ],
      },
      {
        title: "Rhino Tears",
        category: "Conservation Wine",
        location: "South Africa",
        description:
          "Anti-poaching wine initiative launched in 2014 to raise funds for conservation efforts in South Africa's national parks. Proceeds support ranger equipment, training, and related conservation projects.",
        tags: ["Conservation", "Social Impact", "E-commerce"],
        image: "screenshots/rhinotears.png",
        link: "https://www.rhinotears.co.za/age-gateway/",
        responsibilities: [
          "Frontend engineering",
          "Age verification",
          "Brand experience",
        ],
      },
      {
        title: "Russian Bear",
        category: "Beverage Brand",
        location: "South Africa",
        description:
          "Brand platform for Russian Bear with interactive product showcase and brand story.",
        tags: ["Brand", "Frontend", "Interactive"],
        image: "screenshots/russianbear.png",
        link: "https://russianbear.co.za/",
        responsibilities: [
          "Frontend development",
          "Interactive features",
          "Cross-browser support",
        ],
      },
      {
        title: "Koekie Food Security",
        category: "Regenerative AgriTech",
        location: "South Africa",
        description:
          "Regenerative agriculture venture producing ethical sheep, premium wool and lucerne using regenerative practices.",
        tags: ["Agri", "Ops Systems", "Sustainability"],
        image: "screenshots/koekie.png",
        link: "https://koekie.co.za/",
        responsibilities: [
          "System architecture",
          "Operations tracking",
          "Regenerative data modeling",
        ],
      },
      {
        title: "True Blue CW",
        category: "Digital Platform",
        location: "USA",
        description:
          "Digital platform development with modern frontend architecture and user experience design.",
        tags: ["Platform", "Frontend", "Web"],
        image: "screenshots/trueblue.png",
        link: "https://truebluecw.com/",
        responsibilities: [
          "Platform engineering",
          "Frontend architecture",
          "Production systems",
        ],
      },
    ],
  },
];

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-grade systems built for real businesses. From AI-enabled
            ventures to enterprise platforms and premium brand experiences.
          </p>
        </div>

        <div className="space-y-20">
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <div className="mb-10">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, index) => (
                  <Card
                    key={project.title}
                    className="group overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer h-full flex flex-col p-0"
                    onClick={() =>
                      project.link && window.open(project.link, "_blank")
                    }
                  >
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Globe className="w-3 h-3" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                        {project.link && (
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        )}
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
