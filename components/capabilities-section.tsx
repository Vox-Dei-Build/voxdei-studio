import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code2, Building2, Palette, Rocket, Shield } from "lucide-react"

const capabilities = [
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "AI-enabled workflows, WhatsApp commerce systems, and applied intelligence. Real AI that solves business problems.",
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    description:
      "Banking platforms, healthcare systems, and logistics infrastructure. Production software at national scale.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "React, Next.js, React Native, .NET, and Node.js. From design systems to backend APIs — complete technical delivery.",
  },
  {
    icon: Palette,
    title: "Brand & Digital",
    description:
      "Premium digital experiences for luxury brands and consumer products. Interactive, optimized, and production-ready.",
  },
  {
    icon: Rocket,
    title: "Venture Building",
    description:
      "MVP to product-market fit. Skills platforms, AgriTech systems, and commerce products built from zero to production.",
  },
  {
    icon: Shield,
    title: "Technical Leadership",
    description:
      "Architecture design, team mentorship, and fractional CTO services. Strategic technical guidance and execution.",
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From AI-powered ventures to enterprise banking platforms and premium brand experiences — we deliver
            production systems across the full technical stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <Card key={capability.title} className="border-border hover:border-accent transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
