import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import { getArticleBySlug, getAllArticlePaths, getAllArticles } from "@/lib/mdx";
import { buildMetadata, buildCanonical, getCategoryLabel, SITE_URL } from "@/lib/seo";
import { hostings } from "@/lib/hostings";
import { affiliateLinks } from "@/lib/affiliates";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ComparisonTable } from "@/components/content/ComparisonTable";
import { AllHostingsTable } from "@/components/content/AllHostingsTable";
import { VerdictBox } from "@/components/content/VerdictBox";
import { SpeedBenchmark } from "@/components/content/SpeedBenchmark";
import {
  SpeedBenchmarkHebergeurs,
  SpeedBenchmarkWordPress,
  SpeedBenchmarkBudget,
  SpeedBenchmarkOvhHostinger,
  SpeedBenchmarkO2switchOvh,
} from "@/components/content/SpeedBenchmarkHebergeurs";
import { UptimeTable } from "@/components/content/UptimeIndicator";
import {
  UptimeHebergeurs,
  UptimeWordPress,
  UptimeBudget,
  UptimeOvhHostinger,
  UptimeO2switchOvh,
} from "@/components/content/UptimeHebergeurs";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { ProsConsList } from "@/components/ui/ProsConsList";
import { OverallScore } from "@/components/ui/Rating";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { ClientScrollToast } from "@/components/ui/ClientScrollToast";
import { NewsletterCTA } from "@/components/content/NewsletterCTA";
import { CrossSiteLink } from "@/components/content/CrossSiteLink";

const topHosting = [...hostings].sort(
  (a, b) => b.scores.overall - a.scores.overall
)[0];

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

const mdxComponents = {
  ComparisonTable,
  AllHostingsTable,
  VerdictBox,
  SpeedBenchmark,
  SpeedBenchmarkHebergeurs,
  SpeedBenchmarkWordPress,
  SpeedBenchmarkBudget,
  SpeedBenchmarkOvhHostinger,
  SpeedBenchmarkO2switchOvh,
  UptimeTable,
  UptimeHebergeurs,
  UptimeWordPress,
  UptimeBudget,
  UptimeOvhHostinger,
  UptimeO2switchOvh,
  AffiliateButton,
  ProsConsList,
  OverallScore,
  CrossSiteLink,
};

export async function generateStaticParams() {
  return getAllArticlePaths();
}

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) return {};
  return buildMetadata(article.meta, buildCanonical(category, slug));
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) notFound();

  const { meta, content } = article;
  const canonical = buildCanonical(category, slug);

  // Get related articles (same category, excluding current)
  const allArticles = getAllArticles(category).filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <ReadingProgressBar />
      <ClientScrollToast
        toolName={topHosting.name}
        toolHref={affiliateLinks[topHosting.affiliateId]?.url ?? "#"}
      />
      <ArticleJsonLd
        title={meta.title}
        description={meta.description}
        url={`${SITE_URL}${canonical}`}
        publishedAt={meta.publishedAt}
        updatedAt={meta.updatedAt}
        author={meta.author}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: SITE_URL },
          { name: getCategoryLabel(category), url: `${SITE_URL}/${category}` },
          { name: meta.title, url: `${SITE_URL}${canonical}` },
        ]}
      />

      {/* Article header */}
      <div className="bg-[#ecfdf5] border-b border-[#e3e0d8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs
            items={[
              { label: getCategoryLabel(category), href: `/${category}` },
              { label: meta.title },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl font-semibold text-[#111218] mt-4 mb-3 max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            {meta.title}
          </h1>
          <p className="text-lg text-[#6b7280] max-w-2xl mb-4">
            {meta.description}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[#6b7280]">
            <span>Par {meta.author}</span>
            <span>·</span>
            <span>Mis à jour le {meta.updatedAt}</span>
            <span>·</span>
            <span>{meta.readingTime}</span>
          </div>
          <div className="mt-4">
            <ShareButtons title={meta.title} />
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <article className="prose prose-lg">
            <p className="text-xs text-[#737369] italic mb-4 border-l-2 border-[#E8E8E3] pl-3 not-prose">
              ℹ️ Cet article contient des liens affiliés. QuelHébergeur perçoit une commission si vous souscrivez via nos liens, sans coût supplémentaire pour vous.
            </p>
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>

          {/* Newsletter CTA */}
          <div className="mt-12">
            <NewsletterCTA variant="inline" />
          </div>

          {/* Vous aimerez aussi */}
          {allArticles.length > 0 && (
            <div className="mt-12 pt-10 border-t border-[#e3e0d8]">
              <p className="section-label mb-4">Vous aimerez aussi</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {allArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/${a.category}/${a.slug}`}
                    className="group bg-white border border-[#e3e0d8] rounded-xl p-4 card-hover block"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669]" style={{ fontFamily: "var(--font-mono)" }}>
                      {a.category}
                    </span>
                    <h3 className="text-[14px] font-semibold leading-snug text-[#111218] mt-2 group-hover:text-[#059669] transition-colors line-clamp-3" style={{ fontFamily: "var(--font-display)" }}>
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
