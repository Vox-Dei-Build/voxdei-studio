import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users2, Compass } from "lucide-react"

const engagementModels = [
  {
    icon: Zap,
    title: "Product Sprint",
    bestFor: "MVPs, proof-of-concepts, defined feature builds",
    duration: "4-12 weeks",
    scope: "Fixed deliverables with clear acceptance criteria",
    includes: [
      "Discovery and scoping",
      "Design and development",
      "Deployment and handover",
    ],
  },
  {
    icon: Users2,
    title: "Delivery Squad",
    bestFor: "Ongoing product development, platform builds",
    duration: "3+ months",
    scope: "Dedicated team embedded in your workflow",
    includes: [
      "Product engineering",
      "Quality assurance",
      "DevOps and weekly reporting",
    ],
  },
  {
    icon: Compass,
    title: "Fractional CTO",
    bestFor: "Technical leadership, architecture review, team scaling",
    duration: "Retainer or project-based",
    scope: "Strategic technical guidance and execution oversight",
    includes: [
      "Architecture design",
      "Vendor evaluation",
      "Team mentorship",
    ],
  },
]

export function EngagementSection() {
  return (
    <section id="engagement" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Ways to Work Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the engagement model that fits your project scope, timeline, and team structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model) => {
            const Icon = model.icon
            return (
              <Card key={model.title} className="border-border hover:border-foreground/20 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{model.title}</h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Best for</p>
                      <p className="text-sm">{model.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Duration</p>
                      <p className="text-sm">{model.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Scope</p>
                      <p className="text-sm">{model.scope}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Includes</p>
                    <ul className="space-y-1">
                      {model.includes.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-foreground text-xs">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
