import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, CheckSquare, AlertTriangle } from "lucide-react"

const deliveryPillars = [
  {
    icon: Users,
    title: "Structured Engagement",
    points: [
      "Dedicated delivery lead for every engagement",
      "Documented scope, acceptance criteria, and success metrics",
      "Change control process for scope adjustments",
    ],
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    points: [
      "Weekly status reports with progress, risks, and blockers",
      "Sprint reviews with working software demonstrations",
      "Accessible project dashboards",
    ],
  },
  {
    icon: CheckSquare,
    title: "Quality Assurance",
    points: [
      "Code review on every merge",
      "Automated testing in CI/CD pipeline",
      "Staged environments: Development, Staging, Production",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    points: [
      "Early warning escalation for timeline or scope risks",
      "Contingency planning for critical path items",
      "Post-delivery support and handover documentation",
    ],
  },
]

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            How We Deliver
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise projects require more than talented engineers. We operate with the governance, transparency, and accountability your procurement and delivery teams expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveryPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
                      <ul className="space-y-2">
                        {pillar.points.map((point, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-foreground mt-1.5 text-xs">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
