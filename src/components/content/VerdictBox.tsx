import { type ReactNode } from "react";

type VerdictType = "best" | "value" | "fast" | "neutral";

const typeConfig: Record<
  VerdictType,
  { bg: string; border: string; icon: string; label: string; textColor: string }
> = {
  best: {
    bg: "#ecfdf5",
    border: "#059669",
    icon: "★",
    label: "Notre meilleur choix",
    textColor: "#059669",
  },
  value: {
    bg: "#fffbeb",
    border: "#d97706",
    icon: "€",
    label: "Meilleur rapport qualité/prix",
    textColor: "#d97706",
  },
  fast: {
    bg: "#eff6ff",
    border: "#2563eb",
    icon: "⚡",
    label: "Le plus performant",
    textColor: "#2563eb",
  },
  neutral: {
    bg: "#f0ede6",
    border: "#e3e0d8",
    icon: "ℹ",
    label: "Notre verdict",
    textColor: "#6b7280",
  },
};

interface VerdictBoxProps {
  type?: VerdictType;
  title?: string;
  children: ReactNode;
}

export function VerdictBox({
  type = "neutral",
  title,
  children,
}: VerdictBoxProps) {
  const config = typeConfig[type];

  return (
    <div
      className="rounded-xl p-5 border-l-4"
      style={{
        backgroundColor: config.bg,
        borderLeftColor: config.border,
        borderTopColor: config.border + "30",
        borderRightColor: config.border + "20",
        borderBottomColor: config.border + "20",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: config.textColor }} aria-hidden="true">
          {config.icon}
        </span>
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: config.textColor }}
        >
          {title ?? config.label}
        </span>
      </div>
      <div className="text-sm text-[#111218] leading-relaxed">{children}</div>
    </div>
  );
}
