import Link from "next/link";
import { type Hosting } from "@/lib/hostings";
import { OverallScore } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { AffiliateButton } from "./AffiliateButton";

interface HostingCardProps {
  hosting: Hosting;
}

export function HostingCard({ hosting }: HostingCardProps) {
  return (
    <div className="bg-white border border-[#e3e0d8] rounded-xl p-5 card-hover flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3
              className="text-lg font-normal text-[#111218]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {hosting.name}
            </h3>
            {hosting.badge && (
              <Badge variant={hosting.badge} />
            )}
          </div>
          <p className="text-sm text-[#6b7280]">
            {hosting.type.join(" · ")}
          </p>
        </div>
        <OverallScore score={hosting.scores.overall} />
      </div>

      {/* Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#f8f6f1] rounded-lg p-3 text-center">
          <p className="text-xs text-[#6b7280] mb-1">Stockage</p>
          <p className="text-sm font-semibold text-[#111218]">{hosting.specs.storage}</p>
        </div>
        <div className="bg-[#f8f6f1] rounded-lg p-3 text-center">
          <p className="text-xs text-[#6b7280] mb-1">Uptime</p>
          <p className="text-sm font-semibold text-[#059669]">{hosting.specs.uptime}</p>
        </div>
        <div className="bg-[#f8f6f1] rounded-lg p-3 text-center">
          <p className="text-xs text-[#6b7280] mb-1">Domaines</p>
          <p className="text-sm font-semibold text-[#111218]">
            {hosting.specs.domains === 999 ? "Illimité" : hosting.specs.domains}
          </p>
        </div>
        <div className="bg-[#f8f6f1] rounded-lg p-3 text-center">
          <p className="text-xs text-[#6b7280] mb-1">À partir de</p>
          <p className="text-sm font-semibold text-[#111218]">
            {hosting.pricing.starter !== null
              ? `${hosting.pricing.starter}€/mois`
              : "Sur devis"}
          </p>
        </div>
      </div>

      {/* Verdict */}
      <p className="text-sm text-[#6b7280] leading-relaxed line-clamp-2">
        {hosting.verdict}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto">
        <AffiliateButton affiliateId={hosting.affiliateId} size="sm" className="flex-1 justify-center" />
        <Link
          href={`/avis/${hosting.slug}`}
          className="text-sm text-[#6b7280] hover:text-[#059669] transition-colors"
        >
          Voir l&apos;avis →
        </Link>
      </div>
    </div>
  );
}
