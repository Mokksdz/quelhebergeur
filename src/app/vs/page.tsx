import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Versus — Comparaisons directes d'hébergeurs 2026",
  description:
    "Comparaisons directes entre hébergeurs : OVH vs Hostinger, o2switch vs OVH et plus. Qui gagne vraiment ?",
};

export default function VsPage() {
  const articles = getAllArticles("vs");

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="section-label mb-2">Comparaisons directes</p>
        <h1
          className="text-3xl font-normal text-[#111218] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Versus hébergeurs
        </h1>
        <p className="text-lg text-[#6b7280] max-w-xl">
          Hésitez-vous entre deux hébergeurs ? Nos comparaisons directes vous donnent une réponse claire et argumentée.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-16 text-[#6b7280]">
          <p>Aucun versus pour l&apos;instant. Revenez bientôt !</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/vs/${article.slug}`}
              className="group bg-white border border-[#e3e0d8] rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#e3e0d8]">vs</span>
              </div>
              <h2
                className="text-xl font-normal text-[#111218] group-hover:text-[#059669] transition-colors mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {article.title}
              </h2>
              <p className="text-sm text-[#6b7280] line-clamp-2 mb-4">
                {article.description}
              </p>
              <p className="text-xs text-[#6b7280]">
                {article.readingTime} · {article.updatedAt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
