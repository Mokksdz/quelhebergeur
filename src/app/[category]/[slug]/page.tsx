import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { getArticleBySlug, getAllArticlePaths } from "@/lib/mdx";
import { buildMetadata, buildCanonical, getCategoryLabel, SITE_URL } from "@/lib/seo";
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

  return (
    <>
      <ReadingProgressBar />
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
            className="text-3xl sm:text-4xl font-normal text-[#111218] mt-4 mb-3 max-w-3xl leading-tight"
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
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <article className="prose prose-lg">
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
        </div>
      </div>
    </>
  );
}
