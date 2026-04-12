import { SITE_URL } from "@/lib/seo";

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
