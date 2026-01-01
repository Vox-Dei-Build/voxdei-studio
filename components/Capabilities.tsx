import Section from "./ui/Section";

export default function Capabilities() {
  const capabilities = [
    "AI engineering & AI-enabled workflows",
    "Venture & product architecture",
    "Full-stack engineering (.NET, React)",
    "Cloud & DevOps (CI/CD, containers)",
    "Fractional CTO & technical leadership",
    "Product delivery & iteration",
  ];

  return (
    <Section id="capabilities">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Capabilities
      </h2>
      <div className="max-w-3xl mx-auto">
        <ul className="grid md:grid-cols-2 gap-4">
          {capabilities.map((capability, index) => (
            <li
              key={index}
              className="flex items-start p-4 rounded-lg bg-gray-50"
            >
              <span className="text-accent mr-3 mt-1 font-semibold">•</span>
              <span className="text-gray-700">{capability}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
