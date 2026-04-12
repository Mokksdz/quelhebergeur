import { getAllArticlePaths } from "@/lib/mdx";
import { hostings } from "@/lib/hostings";
import { SITE_URL } from "@/lib/seo";

export function GET() {
  const paths = getAllArticlePaths();
  const now = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: SITE_URL, priority: "1.0" },
    { url: `${SITE_URL}/comparatifs`, priority: "0.9" },
    { url: `${SITE_URL}/vs`, priority: "0.8" },
    { url: `${SITE_URL}/avis`, priority: "0.8" },
    { url: `${SITE_URL}/methodologie`, priority: "0.6" },
    { url: `${SITE_URL}/a-propos`, priority: "0.5" },
  ];

  const hostingPages = hostings.map((h) => ({
    url: `${SITE_URL}/avis/${h.slug}`,
    priority: "0.7",
  }));

  const articlePages = paths.map(({ category, slug }) => ({
    url: `${SITE_URL}/${category}/${slug}`,
    priority: "0.8",
  }));

  const allPages = [...staticPages, ...hostingPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
