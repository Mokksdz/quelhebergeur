import { type ReactNode } from "react";

type VerdictType = "best" | "value" | "fast" | "neutral";

interface VerdictConfig {
  gradient: string;
  pill: { bg: string; text: string };
  icon: string;
  label: string;
}

const typeConfig: Record<VerdictType, VerdictConfig> = {
  best: {
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    pill: { bg: "rgba(255,255,255,0.2)", text: "#ffffff" },
    icon: "★",
    label: "Notre meilleur choix",
  },
  value: {
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    pill: { bg: "rgba(255,255,255,0.2)", text: "#ffffff" },
    icon: "€",
    label: "Meilleur rapport qualité/prix",
  },
  fast: {
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
    pill: { bg: "rgba(255,255,255,0.2)", text: "#ffffff" },
    icon: "⚡",
    label: "Le plus performant",
  },
  neutral: {
    gradient: "linear-gradient(135deg, #374151 0%, #6b7280 100%)",
    pill: { bg: "rgba(255,255,255,0.2)", text: "#ffffff" },
    icon: "ℹ",
    label: "Notre verdict",
  },
};

interface VerdictBoxProps {
  type?: VerdictType;
  title?: string;
  children: ReactNode;
}

export function VerdictBox({ type = "neutral", title, children }: VerdictBoxProps) {
  const config = typeConfig[type];

  return (
    <div className="rounded-xl overflow-hidden border border-[#e3e0d8] my-6">
      {/* Gradient header */}
      <div
        className="px-5 py-3.5 flex items-center gap-2.5"
        style={{ background: config.gradient }}
      >
        <span
          className="text-[11px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: config.pill.bg, color: config.pill.text }}
        >
          {config.icon} {title ?? config.label}
        </span>
      </div>

      {/* Content */}
      <div className="bg-white px-5 py-4 text-[14px] text-[#111218] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
