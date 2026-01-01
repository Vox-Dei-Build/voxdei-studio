import Section from "./ui/Section";
import Card from "./ui/Card";

interface Project {
  name: string;
  description: string;
  category: string;
  placeholder?: boolean;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      name: "Pasella",
      description:
        "WhatsApp-native commerce platform enabling conversational shopping experiences for emerging markets.",
      category: "Commerce",
    },
    {
      name: "Loomelo",
      description:
        "Skills development and learning platform connecting professionals with training opportunities.",
      category: "EdTech",
    },
    {
      name: "Koekie Farm",
      description:
        "Regenerative agriculture management system tracking sustainability metrics and farm operations.",
      category: "AgriTech",
    },
    {
      name: "BackaBuddy",
      description:
        "Crowdfunding platform enabling social impact campaigns and personal fundraising across Africa.",
      category: "Fintech",
    },
    {
      name: "RoomKing",
      description:
        "Rental marketplace platform connecting property owners with verified tenants.",
      category: "PropTech",
    },
    {
      name: "[ADD PROJECT]",
      description: "",
      category: "",
      placeholder: true,
    },
    {
      name: "[ADD PROJECT]",
      description: "",
      category: "",
      placeholder: true,
    },
    {
      name: "[ADD PROJECT]",
      description: "",
      category: "",
      placeholder: true,
    },
  ];

  return (
    <Section id="portfolio" background="gray">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Our Work
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            hover={!project.placeholder}
            className={project.placeholder ? "border-dashed bg-gray-50" : ""}
          >
            {project.placeholder ? (
              <div className="flex items-center justify-center min-h-[160px] text-gray-500 font-medium">
                {project.name}
              </div>
            ) : (
              <>
                <div className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href="#case-studies"
                  className="text-accent hover:text-accent-hover font-medium inline-flex items-center"
                >
                  View case study →
                </a>
              </>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
