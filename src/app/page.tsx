import Link from "next/link";
import { hostings, getFeaturedHostings } from "@/lib/hostings";
import { getAllArticles } from "@/lib/mdx";
import { HostingCard } from "@/components/content/HostingCard";
import { ItemListJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const categories = [
  {
    id: "mutualise",
    label: "Mutualisé",
    description: "Idéal pour débuter",
    icon: "🌐",
    href: "/comparatifs/meilleur-hebergeur-web",
    count: hostings.filter((h) => h.type.includes("mutualisé")).length,
  },
  {
    id: "wordpress",
    label: "WordPress",
    description: "Optimisé WP",
    icon: "📝",
    href: "/comparatifs/meilleur-hebergeur-wordpress",
    count: hostings.filter((h) => h.type.includes("wordpress")).length,
  },
  {
    id: "vps",
    label: "VPS",
    description: "Plus de contrôle",
    icon: "⚙️",
    href: "/comparatifs/meilleur-hebergeur-web",
    count: hostings.filter((h) => h.type.includes("vps")).length,
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Scalabilité maximale",
    icon: "☁️",
    href: "/comparatifs/meilleur-hebergeur-web",
    count: hostings.filter((h) => h.type.includes("cloud")).length,
  },
  {
    id: "pas-cher",
    label: "Pas cher",
    description: "Budget < 3€/mois",
    icon: "💶",
    href: "/comparatifs/meilleur-hebergeur-pas-cher",
    count: hostings.filter((h) => (h.pricing.starter ?? 99) < 3).length,
  },
  {
    id: "professionnel",
    label: "Professionnel",
    description: "Pour les entreprises",
    icon: "🏢",
    href: "/comparatifs/meilleur-hebergeur-web",
    count: hostings.filter((h) => (h.pricing.starter ?? 0) >= 7).length,
  },
];

const trustSignals = [
  {
    icon: "🔬",
    title: "Testés en conditions réelles",
    desc: "Nos mesures sont effectuées depuis des serveurs parisiens sur 30 jours minimum.",
  },
  {
    icon: "🛡️",
    title: "100% indépendant",
    desc: "Aucun hébergeur ne paie pour sa position. Nos avis sont basés sur des critères objectifs.",
  },
  {
    icon: "🔄",
    title: "Mis à jour en 2026",
    desc: "Tous nos tests sont actualisés régulièrement pour refléter les changements tarifaires et techniques.",
  },
];

export default function HomePage() {
  const featured = getFeaturedHostings(4);
  const articles = getAllArticles().slice(0, 4);

  return (
    <>
      <ItemListJsonLd
        name="Meilleurs hébergeurs web 2026"
        items={featured.map((h) => ({
          name: h.name,
          url: `${SITE_URL}/avis/${h.slug}`,
          description: h.verdict,
        }))}
      />

      {/* HERO */}
      <section className="hero-editorial py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <p className="section-label text-[#34d399] mb-4">
              Comparatif mis à jour · Avril 2026
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Quel hébergeur web choisir en 2026 ?
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Nous avons testé 11 hébergeurs en conditions réelles. OVH, Hostinger, o2switch, Infomaniak — voici notre verdict indépendant.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/comparatifs/meilleur-hebergeur-web"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#059669] text-white font-semibold rounded-lg hover:bg-[#047857] transition-colors"
              >
                Voir le comparatif complet
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </Link>
              <Link
                href="/methodologie"
                className="inline-flex items-center gap-2 px-5 py-3 text-gray-300 border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Notre méthode
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div>
                <p className="text-2xl font-bold text-white font-mono">11</p>
                <p className="text-xs text-gray-400">hébergeurs testés</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">30j</p>
                <p className="text-xs text-gray-400">de monitoring</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">42</p>
                <p className="text-xs text-gray-400">critères évalués</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-14 px-4 bg-[#f8f6f1]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8">
            <p className="section-label mb-2">Explorer par type</p>
            <h2
              className="text-2xl font-normal text-[#111218]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quel type d&apos;hébergement vous convient ?
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group bg-white border border-[#e3e0d8] rounded-xl p-4 card-hover text-center"
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <p className="font-semibold text-sm text-[#111218] group-hover:text-[#059669] transition-colors">
                  {cat.label}
                </p>
                <p className="text-xs text-[#6b7280] mt-0.5">{cat.description}</p>
                <p className="text-xs text-[#059669] font-mono mt-1.5">
                  {cat.count} offre{cat.count > 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HOSTINGS */}
      <section className="py-14 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="section-label mb-2">Notre sélection</p>
              <h2
                className="text-2xl font-normal text-[#111218]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Les meilleurs hébergeurs en 2026
              </h2>
            </div>
            <Link
              href="/comparatifs/meilleur-hebergeur-web"
              className="text-sm text-[#059669] hover:underline hidden sm:block"
            >
              Voir tous les hébergeurs →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((hosting) => (
              <HostingCard key={hosting.id} hosting={hosting} />
            ))}
          </div>
          <Link
            href="/comparatifs/meilleur-hebergeur-web"
            className="text-sm text-[#059669] hover:underline mt-4 block sm:hidden text-center"
          >
            Voir tous les hébergeurs →
          </Link>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-14 px-4 bg-[#111218]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <p className="section-label text-[#34d399] mb-2">Notre engagement</p>
            <h2
              className="text-2xl font-normal text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Des tests honnêtes et indépendants
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{signal.icon}</div>
                <h3 className="font-semibold text-white mb-2">{signal.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT ARTICLES */}
      {articles.length > 0 && (
        <section className="py-14 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-8">
              <p className="section-label mb-2">Nos guides</p>
              <h2
                className="text-2xl font-normal text-[#111218]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Comparatifs & analyses
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className="group bg-white border border-[#e3e0d8] rounded-xl p-5 card-hover"
                >
                  <p className="text-xs text-[#059669] font-semibold uppercase tracking-wider mb-2">
                    {article.category}
                  </p>
                  <h3
                    className="text-lg font-normal text-[#111218] group-hover:text-[#059669] transition-colors mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] line-clamp-2">{article.description}</p>
                  <p className="text-xs text-[#6b7280] mt-3">
                    {article.readingTime} · {article.publishedAt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
