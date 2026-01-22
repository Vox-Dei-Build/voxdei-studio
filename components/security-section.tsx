import { Shield, Key, Server, FileSearch, AlertCircle } from "lucide-react"

const securityPractices = [
  {
    icon: Key,
    title: "Access Control",
    description: "Role-based access; credentials managed via environment variables, never stored in code.",
  },
  {
    icon: Server,
    title: "Environment Separation",
    description: "Isolated development, staging, and production environments with controlled deployments.",
  },
  {
    icon: Shield,
    title: "Data Handling",
    description: "POPIA-aware data practices; we minimize collection, retention, and never share client data across projects.",
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description: "Defined escalation path for security concerns with post-incident review and remediation.",
  },
  {
    icon: FileSearch,
    title: "Audit Trail",
    description: "Version control on all code changes; deployment logs maintained for compliance requirements.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Intro */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Security & Privacy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We build software that handles sensitive data responsibly. While we're not ISO-certified, we follow industry-standard practices and work within your compliance framework.
                </p>
                <p>
                  Our approach prioritizes secure defaults, minimal data footprint, and clear accountability—aligned with POPIA requirements and enterprise security expectations.
                </p>
              </div>
            </div>

            {/* Right: Practices */}
            <div className="space-y-4">
              {securityPractices.map((practice) => {
                const Icon = practice.icon
                return (
                  <div
                    key={practice.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border"
                  >
                    <div className="shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{practice.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
