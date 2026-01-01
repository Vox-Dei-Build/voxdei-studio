import Section from "./ui/Section";

export default function WhyUs() {
  const reasons = [
    {
      title: "Speed and focus",
      description:
        "We ship production-grade systems in weeks, not quarters. Small team, direct communication, no account management layers.",
    },
    {
      title: "Technical depth",
      description:
        "We handle the full stack — from architecture to deployment. Modern patterns, proven tools, no experimental rewrites.",
    },
    {
      title: "Product ownership",
      description:
        "We think like builders, not contractors. We help shape what gets built, not just execute tickets.",
    },
    {
      title: "Transparent delivery",
      description:
        "You see the system evolve daily. Working software in staging from week one. No surprises at the end.",
    },
    {
      title: "Practical AI integration",
      description:
        "We build AI features that solve real problems — not AI for its own sake. Integration with proven models, not custom ML infrastructure unless required.",
    },
  ];

  return (
    <Section id="why-us">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Why Enterprises Work With Us
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="border-l-4 border-accent bg-white p-6 rounded-r-lg"
          >
            <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
            <p className="text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
