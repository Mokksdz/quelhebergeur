import Link from "next/link";

interface RelatedArticle {
  title: string;
  href: string;
  description?: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

export function RelatedArticles({
  articles,
  title = "Articles liés",
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="border-t border-[#e3e0d8] pt-8 mt-8">
      <h3
        className="text-xl font-normal text-[#111218] mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group bg-white border border-[#e3e0d8] rounded-xl p-4 card-hover block"
          >
            <p className="text-xs text-[#059669] font-semibold uppercase tracking-wider mb-2">
              {article.category}
            </p>
            <h4 className="text-sm font-semibold text-[#111218] group-hover:text-[#059669] transition-colors leading-snug mb-1">
              {article.title}
            </h4>
            {article.description && (
              <p className="text-xs text-[#6b7280] line-clamp-2">
                {article.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
