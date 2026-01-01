import Section from "./ui/Section";

export default function Studio() {
  return (
    <Section id="studio" background="gray">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        AI Venture Studio
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p>
          We operate as a venture studio focused on AI-enabled product
          development. This means we combine technical execution with product
          thinking — we build what works, ship fast, and iterate based on real
          usage.
        </p>
        <p>
          Our approach is hands-on and builder-focused. We work embedded with
          your team or as a standalone technical partner. We handle
          architecture, development, deployment, and handoff. You get
          production-ready systems without the overhead of managing a large
          development team.
        </p>
        <p>
          We ship software that runs in production, generates revenue, and
          scales with your business.
        </p>
      </div>
    </Section>
  );
}
