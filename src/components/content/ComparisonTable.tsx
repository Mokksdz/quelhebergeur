import Link from "next/link";
import { type Hosting } from "@/lib/hostings";
import { AffiliateButton } from "./AffiliateButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface ComparisonTableProps {
  hostings: Hosting[];
}

function MiniBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = Math.min(100, (value / max) * 100);
  const color = pct >= 80 ? "#059669" : pct >= 60 ? "#2563eb" : "#d97706";
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-14 h-[3px] bg-[#e3e0d8] rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-[11px] font-bold tabular-nums" style={{ color, fontFamily: "var(--font-mono)" }}>
        {value}
      </span>
    </div>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 8.5 ? "#059669" : score >= 7 ? "#2563eb" : "#d97706";
  const bg = score >= 8.5 ? "#ecfdf5" : score >= 7 ? "#eff6ff" : "#fffbeb";
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[13px] font-bold tabular-nums"
      style={{ color, background: bg, fontFamily: "var(--font-mono)" }}
    >
      {score.toFixed(1)}
    </span>
  );
}

const BADGE_LABELS: Record<string, string> = {
  best:  "★ Meilleur",
  value: "€ Prix",
  fast:  "⚡ Rapide",
};

export function ComparisonTable({ hostings }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-xl border border-[#e3e0d8]">
      <table className="w-full min-w-[760px] text-sm border-collapse">
        <thead>
          <tr className="bg-[#f0ede6]">
            <th className="text-left px-4 py-3 font-bold text-[#6b7280] text-[10px] uppercase tracking-widest border-b border-[#e3e0d8]" style={{ fontFamily: "var(--font-mono)" }}>
              Hébergeur
            </th>
            <th className="text-left px-4 py-3 font-bold text-[#6b7280] text-[10px] uppercase tracking-widest border-b border-[#e3e0d8]" style={{ fontFamily: "var(--font-mono)" }}>
              Prix/mois
            </th>
            <th className="text-left px-4 py-3 font-bold text-[#6b7280] text-[10px] uppercase tracking-widest border-b border-[#e3e0d8]" style={{ fontFamily: "var(--font-mono)" }}>
              Perf.
            </th>
            <th className="text-left px-4 py-3 font-bold text-[#6b7280] text-[10px] uppercase tracking-widest border-b border-[#e3e0d8]" style={{ fontFamily: "var(--font-mono)" }}>
              Support
            </th>
            <th className="text-left px-4 py-3 font-bold text-[#6b7280] text-[10px] uppercase tracking-widest border-b border-[#e3e0d8]" style={{ fontFamily: "var(--font-mono)" }}>
              Uptime
            </th>
            <th className="text-left px-4 py-3 font-bold text-[#6b7280] text-[10px] uppercase tracking-widest border-b border-[#e3e0d8]" style={{ fontFamily: "var(--font-mono)" }}>
              Note
            </th>
            <th className="px-4 py-3 border-b border-[#e3e0d8]"></th>
          </tr>
        </thead>
        <tbody>
          {hostings.map((hosting, index) => (
            <tr
              key={hosting.id}
              className={`border-b border-[#e3e0d8] last:border-0 hover:bg-[#ecfdf5] transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-[#f8f6f1]"
              }`}
            >
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-[#9ca3af] tabular-nums w-5 shrink-0" style={{ fontFamily: "var(--font-mono)" }}>
                    #{index + 1}
                  </span>
                  <ImagePlaceholder label={`Logo ${hosting.name}`} shape="square" className="w-7 h-7 shrink-0 mr-2 inline-flex" />
                  <Link
                    href={`/avis/${hosting.slug}`}
                    className="font-semibold text-[#111218] hover:text-[#059669] transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontSize: "15px" }}
                  >
                    {hosting.name}
                  </Link>
                  {hosting.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{
                      background: hosting.badge === "best" ? "#ecfdf5" : hosting.badge === "value" ? "#fef3c7" : "#ede9fe",
                      color: hosting.badge === "best" ? "#059669" : hosting.badge === "value" ? "#92400e" : "#6d28d9",
                    }}>
                      {BADGE_LABELS[hosting.badge]}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3.5">
                <span className="font-bold text-[#111218] tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
                  {hosting.pricing.starter !== null ? `${hosting.pricing.starter}€` : "—"}
                </span>
              </td>
              <td className="px-4 py-3.5">
                <MiniBar value={hosting.scores.performance} />
              </td>
              <td className="px-4 py-3.5">
                <MiniBar value={hosting.scores.support} />
              </td>
              <td className="px-4 py-3.5">
                <span
                  className="font-bold tabular-nums text-[12px]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: hosting.specs.uptime >= "99.9%" ? "#059669" : "#d97706",
                  }}
                >
                  {hosting.specs.uptime}
                </span>
              </td>
              <td className="px-4 py-3.5">
                <ScoreBadge score={hosting.scores.overall} />
              </td>
              <td className="px-4 py-3.5">
                <AffiliateButton affiliateId={hosting.affiliateId} size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
