import Section from "./ui/Section";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <Section className="text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl mx-auto">
        AI Venture Studio building AI-enabled products, platforms, and modern
        systems — fast.
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
        We partner with enterprises and startups to design, build, and ship
        production-grade software.
      </p>
      <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
        From MVP to scale.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="#portfolio">View Our Work</Button>
        <Button href="mailto:hello@voxdei.io" variant="secondary">
          Contact Us
        </Button>
      </div>
    </Section>
  );
}
