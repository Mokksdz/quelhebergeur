import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparatifs hébergeurs web — Tests indépendants 2026",
  description:
    "Tous nos comparatifs d'hébergeurs web : mutualisé, WordPress, VPS, cloud. Tests en conditions réelles et avis honnêtes.",
};

export default function ComparatifsPage() {
  const articles = getAllArticles("comparatifs");

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="section-label mb-2">Guides & comparatifs</p>
        <h1
          className="text-3xl font-normal text-[#111218] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Comparatifs hébergeurs web
        </h1>
        <p className="text-lg text-[#6b7280] max-w-xl">
          Des tests approfondis pour choisir l&apos;hébergeur web adapté à votre projet. Performances, prix, support — on a tout mesuré.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-16 text-[#6b7280]">
          <p>Aucun article pour l&apos;instant. Revenez bientôt !</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/comparatifs/${article.slug}`}
              className="group bg-white border border-[#e3e0d8] rounded-xl p-5 card-hover"
            >
              <h2
                className="text-xl font-normal text-[#111218] group-hover:text-[#059669] transition-colors mb-2 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {article.title}
              </h2>
              <p className="text-sm text-[#6b7280] line-clamp-3 mb-4">
                {article.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                {article.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-[#ecfdf5] text-[#059669] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
