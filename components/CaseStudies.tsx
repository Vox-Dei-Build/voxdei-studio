"use client";

import { useState } from "react";
import Section from "./ui/Section";

interface CaseStudy {
  title: string;
  context: string;
  whatWeBuilt: string[];
  ourRole: string[];
  outcome: string[];
}

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      title: "Pasella — WhatsApp Commerce Platform",
      context:
        "Emerging market retailer needed to reach customers where they already spend time — on WhatsApp. Existing e-commerce platforms required app downloads and data-heavy experiences unsuitable for the target market.",
      whatWeBuilt: [
        "WhatsApp Business API integration with conversational commerce flow",
        "Product catalog management and inventory sync",
        "Payment gateway integration for mobile money and cards",
        "Order management and fulfillment tracking",
        "Analytics dashboard for merchant insights",
      ],
      ourRole: [
        "Technical architecture and platform design",
        "Full-stack development (.NET backend, React admin)",
        "WhatsApp API integration and conversation design",
        "Cloud infrastructure setup (AWS)",
        "Payment provider integrations",
      ],
      outcome: [
        "[ADD METRICS HERE]",
        "Platform launched and processing transactions",
        "Merchant onboarding pipeline operational",
      ],
    },
    {
      title: "BackaBuddy — Crowdfunding Platform Rebuild",
      context:
        "Established crowdfunding platform needed technical modernization to support growth, improve performance, and enable new features. Legacy codebase limited development velocity and scalability.",
      whatWeBuilt: [
        "Rebuilt platform on modern .NET architecture",
        "Campaign creation and management system",
        "Multi-currency payment processing",
        "Social sharing and email notification system",
        "Admin dashboard for campaign moderation",
        "Donor management and tax receipt generation",
      ],
      ourRole: [
        "Platform architecture and migration strategy",
        "Full-stack development (.NET, React)",
        "Payment gateway integration (multiple providers)",
        "Database migration and optimization",
        "Cloud infrastructure (Azure) and CI/CD setup",
      ],
      outcome: [
        "[ADD METRICS HERE]",
        "Platform performance improved significantly",
        "Development velocity increased for new features",
        "Infrastructure costs reduced",
      ],
    },
    {
      title: "RoomKing — Rental Marketplace Platform",
      context:
        "Property management startup required a two-sided marketplace connecting landlords with verified tenants, including automated screening, lease management, and payment processing.",
      whatWeBuilt: [
        "Property listing and search platform",
        "Tenant verification and background check integration",
        "Application and lease workflow system",
        "Integrated payment processing for deposits and rent",
        "Communication system between landlords and tenants",
        "Mobile-responsive interface",
      ],
      ourRole: [
        "Product architecture and feature planning",
        "Full-stack development (.NET, React)",
        "Third-party integrations (verification services, payments)",
        "Cloud deployment and infrastructure",
        "Launch support and iteration",
      ],
      outcome: [
        "[ADD METRICS HERE]",
        "Platform launched in target market",
        "Active landlord and tenant user base",
      ],
    },
    {
      title: "Loomelo — Skills Development Platform",
      context:
        "EdTech startup needed a platform to match professionals with relevant training programs, track skill development, and provide employer-recognized certifications.",
      whatWeBuilt: [
        "User profile and skills assessment system",
        "Training program catalog and recommendation engine",
        "Learning management system integration",
        "Progress tracking and certification issuance",
        "Employer dashboard for team skill development",
      ],
      ourRole: [
        "Platform architecture and technical planning",
        "Full-stack development (.NET, React)",
        "Third-party LMS integrations",
        "Cloud infrastructure setup",
        "Product iteration and feature development",
      ],
      outcome: [
        "[ADD METRICS HERE]",
        "Platform launched with initial user cohort",
        "Training partnerships established",
      ],
    },
    {
      title: "Koekie Farm — Regenerative Agriculture Platform",
      context:
        "Agricultural operation needed a system to track regenerative farming practices, monitor sustainability metrics, and provide transparency to stakeholders about environmental impact.",
      whatWeBuilt: [
        "Farm operation management dashboard",
        "Sustainability metrics tracking and reporting",
        "Crop rotation and soil health monitoring",
        "Data collection and analytics system",
        "Stakeholder reporting interface",
      ],
      ourRole: [
        "System architecture and database design",
        "Full-stack development (.NET, React)",
        "Data visualization and reporting",
        "Cloud hosting and deployment",
      ],
      outcome: [
        "[ADD METRICS HERE]",
        "Operational system tracking farm activities",
        "Sustainability reporting automated",
      ],
    },
  ];

  return (
    <Section id="case-studies">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Selected Case Studies
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 md:p-8 bg-white transition-all duration-200 ${
              openIndex === index
                ? "border-accent shadow-md"
                : "border-gray-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {study.title}
              </h3>
              <span
                className={`text-2xl text-accent transition-transform duration-200 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                    Context
                  </h4>
                  <p className="text-gray-700">{study.context}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                    What We Built
                  </h4>
                  <ul className="space-y-2">
                    {study.whatWeBuilt.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                    Our Role
                  </h4>
                  <ul className="space-y-2">
                    {study.ourRole.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                    Outcome
                  </h4>
                  <ul className="space-y-2">
                    {study.outcome.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
