"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const featuredPartners = [
  {
    name: "Darkies in Tech",
    logo: "/logos/darkiesintech.svg",
    description:
      "A vetted community for POC founders, investors & ecosystem builders operating within the South African tech ecosystem. Bridging access gaps and facilitating collaboration to transform the tech landscape.",
    url: "https://www.darkiesintech.com/",
    logoBg: "bg-black",
    stats: [
      { label: "Members", value: "450+" },
      { label: "Jobs Created", value: "3,187" },
      { label: "Funds Raised", value: "R5.8B+" },
    ],
  },
  {
    name: "The Delta",
    logo: "/logos/thedelta.png",
    description:
      "Building launchpads for generational companies. A venture platform designed to nurture transformational enterprises and support the creation of significant, long-term businesses.",
    url: "https://www.thedelta.io/",
    stats: [
      { label: "Founders", value: "1200+" },
      { label: "Ventures Launched", value: "20+" },
      { label: "Raised by Ventures", value: "€1.5B+" },
    ],
  },
]

export function FeaturedPartnersSection() {
  return (
    <section className="py-20 bg-background" aria-label="Strategic ecosystem partnerships">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Ecosystem Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with ecosystem leaders to build transformative ventures and support the next generation of founders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredPartners.map((partner) => (
            <Card
              key={partner.name}
              className="group hover:border-accent transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => window.open(partner.url, "_blank")}
              role="article"
              aria-label={`${partner.name} partnership details`}
            >
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <div className={`relative h-16 w-32 flex items-center rounded-md px-3 ${partner.logoBg || ""}`}>
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} - Strategic partner logo`}
                      fill
                      className="object-contain object-left p-2"
                    />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {partner.description}
                </p>

                {partner.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    {partner.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-lg font-bold text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
