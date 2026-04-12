import Link from "next/link";
import { hostings } from "@/lib/hostings";
import { OverallScore } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis hébergeurs web — Tests & évaluations 2026",
  description:
    "Nos avis détaillés sur les meilleurs hébergeurs web : Hostinger, OVH, o2switch, Infomaniak et plus encore.",
};

export default function AvisPage() {
  const sorted = [...hostings].sort(
    (a, b) => b.scores.overall - a.scores.overall
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="section-label mb-2">Évaluations</p>
        <h1
          className="text-3xl font-normal text-[#111218] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Avis hébergeurs web 2026
        </h1>
        <p className="text-lg text-[#6b7280] max-w-xl">
          {sorted.length} hébergeurs évalués et notés selon 5 critères : performance, support, prix, facilité et fonctionnalités.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((hosting, index) => (
          <Link
            key={hosting.id}
            href={`/avis/${hosting.slug}`}
            className="group bg-white border border-[#e3e0d8] rounded-xl p-5 card-hover"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs text-[#6b7280] font-mono">#{index + 1}</span>
                  <h2
                    className="text-lg font-normal text-[#111218] group-hover:text-[#059669] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {hosting.name}
                  </h2>
                  {hosting.badge && <Badge variant={hosting.badge} />}
                </div>
                <p className="text-xs text-[#6b7280]">{hosting.type.join(" · ")}</p>
              </div>
              <OverallScore score={hosting.scores.overall} />
            </div>

            <p className="text-sm text-[#6b7280] line-clamp-2 mb-4">
              {hosting.verdict}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#111218]">
                {hosting.pricing.starter !== null
                  ? `À partir de ${hosting.pricing.starter}€/mois`
                  : "Sur devis"}
              </p>
              <span className="text-xs text-[#059669] font-medium group-hover:underline">
                Voir l&apos;avis →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
