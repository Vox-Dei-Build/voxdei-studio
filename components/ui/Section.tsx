import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray";
}

export default function Section({
  id,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgClass = background === "gray" ? "bg-gray-50" : "bg-white";

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
