import type { Metadata } from "next";
import type { ArticleMeta } from "./mdx";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hebergeur.vectarlab.tech";
export const SITE_NAME = "QuelHébergeur";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;

export function buildMetadata(
  meta: Partial<ArticleMeta> & { title: string; description: string },
  canonical?: string
): Metadata {
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const ogImage = meta.image ? `${SITE_URL}${meta.image}` : DEFAULT_OG_IMAGE;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    comparatifs: "Comparatifs",
    vs: "Versus",
    avis: "Avis",
    guides: "Guides",
    alternatives: "Alternatives",
  };
  return labels[category] ?? category;
}

export function buildCanonical(category: string, slug: string): string {
  return `/${category}/${slug}`;
}
