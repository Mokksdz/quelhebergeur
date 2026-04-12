import { type Hosting } from "@/lib/hostings";
import { Badge } from "@/components/ui/Badge";
import { AffiliateButton } from "./AffiliateButton";

interface ComparisonTableProps {
  hostings: Hosting[];
}

export function ComparisonTable({ hostings }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full min-w-[700px] text-sm border-collapse">
        <thead>
          <tr className="bg-[#f0ede6] border-b border-[#e3e0d8]">
            <th className="text-left px-4 py-3 font-semibold text-[#6b7280] text-xs uppercase tracking-wider">
              Hébergeur
            </th>
            <th className="text-left px-4 py-3 font-semibold text-[#6b7280] text-xs uppercase tracking-wider">
              Prix/mois
            </th>
            <th className="text-left px-4 py-3 font-semibold text-[#6b7280] text-xs uppercase tracking-wider">
              Stockage
            </th>
            <th className="text-left px-4 py-3 font-semibold text-[#6b7280] text-xs uppercase tracking-wider">
              Uptime
            </th>
            <th className="text-left px-4 py-3 font-semibold text-[#6b7280] text-xs uppercase tracking-wider">
              Support
            </th>
            <th className="text-left px-4 py-3 font-semibold text-[#6b7280] text-xs uppercase tracking-wider">
              Note
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {hostings.map((hosting, index) => (
            <tr
              key={hosting.id}
              className={`border-b border-[#e3e0d8] ${
                index % 2 === 0 ? "bg-white" : "bg-[#f8f6f1]"
              } hover:bg-[#ecfdf5] transition-colors`}
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#111218]">{hosting.name}</span>
                  {hosting.badge && <Badge variant={hosting.badge} />}
                </div>
              </td>
              <td className="px-4 py-3 font-mono font-semibold text-[#111218]">
                {hosting.pricing.starter !== null
                  ? `${hosting.pricing.starter}€`
                  : "—"}
              </td>
              <td className="px-4 py-3 text-[#6b7280]">{hosting.specs.storage}</td>
              <td className="px-4 py-3">
                <span
                  className={`font-mono font-semibold ${
                    hosting.specs.uptime >= "99.9%"
                      ? "text-[#059669]"
                      : "text-[#d97706]"
                  }`}
                >
                  {hosting.specs.uptime}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{hosting.scores.support}</span>
                  <span className="text-[#6b7280] text-xs">/10</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor:
                      hosting.scores.overall >= 8.5
                        ? "#ecfdf5"
                        : hosting.scores.overall >= 7
                          ? "#eff6ff"
                          : "#fffbeb",
                    color:
                      hosting.scores.overall >= 8.5
                        ? "#059669"
                        : hosting.scores.overall >= 7
                          ? "#2563eb"
                          : "#d97706",
                  }}
                >
                  {hosting.scores.overall.toFixed(1)}
                </span>
              </td>
              <td className="px-4 py-3">
                <AffiliateButton affiliateId={hosting.affiliateId} size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
