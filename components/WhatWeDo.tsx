import Section from "./ui/Section";

export default function WhatWeDo() {
  const whatWeBuild = [
    "AI-enabled products and platforms",
    "Modern web and mobile applications",
    "Cloud infrastructure and DevOps pipelines",
    "E-commerce and marketplace systems",
    "Enterprise integrations and APIs",
    "Custom business platforms",
  ];

  const howWeBuild = [
    "Fractional CTO services",
    "Technical architecture and system design",
    "Full-stack development (.NET, React, Node.js)",
    "Cloud and DevOps (AWS, Azure, CI/CD)",
    "AI engineering and integration",
    "Product delivery and launch support",
  ];

  return (
    <Section id="what-we-do" background="gray">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        What We Do
      </h2>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">What We Build</h3>
          <ul className="space-y-3">
            {whatWeBuild.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">How We Build</h3>
          <ul className="space-y-3">
            {howWeBuild.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
