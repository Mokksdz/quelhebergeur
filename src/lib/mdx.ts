import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category?: string;
  slug?: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  readingTime?: string;
}

export interface ArticleMeta extends ArticleFrontmatter {
  readingTime: string;
  wordCount: number;
  slug: string;
  category: string;
}

export interface ArticleData {
  meta: ArticleMeta;
  content: string;
}

export function getArticleSlugs(category: string): string[] {
  const dir = path.join(contentDirectory, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(
  category: string,
  slug: string
): ArticleData | null {
  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    meta: {
      ...(data as ArticleFrontmatter),
      slug,
      category,
      readingTime: stats.text,
      wordCount: stats.words,
    },
    content,
  };
}

export function getAllArticles(category?: string): ArticleMeta[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const categories = category
    ? [category]
    : fs
        .readdirSync(contentDirectory)
        .filter((f) =>
          fs.statSync(path.join(contentDirectory, f)).isDirectory()
        );

  const articles: ArticleMeta[] = [];

  for (const cat of categories) {
    const slugs = getArticleSlugs(cat);
    for (const slug of slugs) {
      const data = getArticleBySlug(cat, slug);
      if (data) articles.push(data.meta);
    }
  }

  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllArticlePaths(): { category: string; slug: string }[] {
  const paths: { category: string; slug: string }[] = [];
  if (!fs.existsSync(contentDirectory)) return paths;

  const categories = fs
    .readdirSync(contentDirectory)
    .filter((f) => fs.statSync(path.join(contentDirectory, f)).isDirectory());

  for (const category of categories) {
    const slugs = getArticleSlugs(category);
    for (const slug of slugs) {
      paths.push({ category, slug });
    }
  }
  return paths;
}
