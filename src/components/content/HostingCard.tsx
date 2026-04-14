import Link from "next/link";
import { type Hosting } from "@/lib/hostings";
import { AffiliateButton } from "./AffiliateButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface HostingCardProps {
  hosting: Hosting;
  rank?: number;
}

function ScoreRing({ score }: { score: number }) {
  const s = Number(score);
  if (isNaN(s)) return null;
  const circumference = 2 * Math.PI * 28;
  const progress = circumference - (circumference * s) / 10;
  const color = s >= 8.5 ? "#059669" : s >= 7 ? "#2563eb" : "#d97706";
  const glowClass = s >= 8.5 ? "ring-glow-green" : s >= 7 ? "ring-glow-blue" : "ring-glow-amber";

  return (
    <div className={`relative w-16 h-16 shrink-0 ${glowClass}`}>
      <svg viewBox="0 0 70 70" className="w-full h-full -rotate-90">
        <circle cx="35" cy="35" r="28" fill="none" stroke="#e3e0d8" strokeWidth="6" />
        <circle
          cx="35" cy="35" r="28"
          fill="none" stroke={color} strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[15px] font-bold leading-none" style={{ color, fontFamily: "var(--font-mono)" }}>
          {s.toFixed(1)}
        </span>
        <span className="text-[9px] text-[#6b7280] leading-none">/10</span>
      </div>
    </div>
  );
}

const BADGE_STYLES: Record<string, { label: string; bg: string; text: string }> = {
  best:  { label: "Meilleur choix", bg: "#ecfdf5", text: "#059669" },
  value: { label: "Meilleur prix",  bg: "#fef3c7", text: "#92400e" },
  fast:  { label: "Plus rapide",    bg: "#ede9fe", text: "#6d28d9" },
};

export function HostingCard({ hosting, rank }: HostingCardProps) {
  const badge = hosting.badge ? BADGE_STYLES[hosting.badge] : null;

  return (
    <div className="bg-white border border-[#e3e0d8] rounded-xl overflow-hidden card-hover flex flex-col">
      {/* Rank ribbon */}
      {rank && rank <= 3 && (
        <div
          className="px-4 py-1.5 flex items-center gap-2"
          style={{
            background: rank === 1 ? "linear-gradient(90deg,#059669,#34d399)" :
                        rank === 2 ? "linear-gradient(90deg,#2563eb,#60a5fa)" :
                                    "linear-gradient(90deg,#7c3aed,#a78bfa)",
          }}
        >
          <span className="text-white text-[11px] font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
            #{rank} — {rank === 1 ? "Notre recommandation" : rank === 2 ? "Excellent rapport" : "Très bien noté"}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <ImagePlaceholder label={`Logo ${hosting.name}`} shape="square" className="w-12 h-12 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {rank && rank > 3 && (
                <span
                  className="text-[10px] font-bold text-[#6b7280] tabular-nums"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  #{rank}
                </span>
              )}
              <h3
                className="text-[19px] font-normal text-[#111218] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {hosting.name}
              </h3>
              {badge && (
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: badge.bg, color: badge.text }}
                >
                  {badge.label}
                </span>
              )}
            </div>
            <p className="text-[12px] text-[#6b7280]">
              {hosting.type.join(" · ")}
            </p>
          </div>
          </div>
          <ScoreRing score={hosting.scores.overall} />
        </div>

        {/* Score bars */}
        <div className="bg-[#f8f6f1] rounded-lg p-3.5 space-y-2.5">
          {[
            { key: "performance", label: "Perf." },
            { key: "support",     label: "Support" },
            { key: "prix",        label: "Prix" },
            { key: "facilite",    label: "Facilité" },
          ].map(({ key, label }) => {
            const val = hosting.scores[key as keyof typeof hosting.scores];
            const pct = (val / 10) * 100;
            const color = pct >= 80 ? "#059669" : pct >= 60 ? "#2563eb" : "#d97706";
            return (
              <div key={key} className="flex items-center gap-2">
                <span className="text-[10px] text-[#6b7280] w-14 shrink-0" style={{ fontFamily: "var(--font-mono)" }}>
                  {label}
                </span>
                <div className="flex-1 h-1.5 bg-[#e3e0d8] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, background: color }}
                  />
                </div>
                <span className="text-[10px] font-bold text-[#111218] w-6 text-right tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
                  {val}
                </span>
              </div>
            );
          })}
        </div>

        {/* Specs row */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { label: "Stockage",     value: hosting.specs.storage.replace(" SSD","").replace(" NVMe","") },
            { label: "Uptime",       value: hosting.specs.uptime, green: true },
            { label: "Domaines",     value: hosting.specs.domains === 999 ? "∞" : String(hosting.specs.domains) },
            { label: "À partir de",  value: hosting.pricing.starter !== null ? `${hosting.pricing.starter}€` : "Devis" },
          ].map(({ label, value, green }) => (
            <div key={label} className="bg-[#f8f6f1] rounded-lg py-2 px-1">
              <p className="text-[9px] text-[#6b7280] mb-0.5">{label}</p>
              <p className={`text-[12px] font-semibold ${green ? "text-[#059669]" : "text-[#111218]"}`}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <p className="text-[13px] text-[#6b7280] leading-relaxed line-clamp-2">
          {hosting.verdict}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-1">
          <AffiliateButton affiliateId={hosting.affiliateId} size="sm" className="flex-1 justify-center" />
          <Link
            href={`/avis/${hosting.slug}`}
            className="text-[13px] text-[#6b7280] hover:text-[#059669] transition-colors whitespace-nowrap"
          >
            Avis complet →
          </Link>
        </div>
      </div>
    </div>
  );
}
