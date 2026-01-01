import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const hoverClasses = hover
    ? "hover:shadow-lg hover:border-accent"
    : "";

  return (
    <div
      className={`border border-gray-200 rounded-lg p-6 md:p-8 bg-white transition-all duration-200 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
