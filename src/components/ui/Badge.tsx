import { type ReactNode } from "react";

type BadgeVariant =
  | "best"
  | "value"
  | "fast"
  | "new"
  | "default"
  | "coming-soon";

const variantConfig: Record<
  BadgeVariant,
  { style: string; icon: string; label: string }
> = {
  best: {
    style: "bg-[#059669] text-white",
    icon: "★",
    label: "Meilleur choix",
  },
  value: {
    style: "bg-[#d97706] text-white",
    icon: "€",
    label: "Meilleur rapport Q/P",
  },
  fast: {
    style: "bg-[#2563eb] text-white",
    icon: "⚡",
    label: "Le plus rapide",
  },
  new: {
    style: "bg-[#7c3aed] text-white",
    icon: "✦",
    label: "Nouveau",
  },
  default: {
    style: "bg-[#f0ede6] text-[#6b7280]",
    icon: "",
    label: "",
  },
  "coming-soon": {
    style: "bg-gray-100 text-gray-500",
    icon: "○",
    label: "Bientôt",
  },
};

interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
  className?: string;
}

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  const config = variantConfig[variant];
  const label = children ?? config.label;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.style} ${className}`}
    >
      {config.icon && <span aria-hidden="true">{config.icon}</span>}
      {label}
    </span>
  );
}
