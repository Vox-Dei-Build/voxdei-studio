import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  const baseClasses =
    "inline-block px-8 py-3.5 rounded-lg font-medium transition-all duration-200 border-2";

  const variantClasses = {
    primary:
      "bg-accent border-accent text-white hover:bg-accent-hover hover:border-accent-hover",
    secondary:
      "border-gray-300 text-gray-900 hover:border-accent hover:text-accent",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </a>
  );
}
