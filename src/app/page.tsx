import Link from "next/link";
import { hostings, getFeaturedHostings } from "@/lib/hostings";
import { getAllArticles } from "@/lib/mdx";
import { HostingCard } from "@/components/content/HostingCard";
import { NewsletterCTA } from "@/components/content/NewsletterCTA";
import { ItemListJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuelHébergeur — Comparatif hébergeurs web en 2026",
  description: "Comparatif indépendant des meilleurs hébergeurs web en 2026. OVH, Hostinger, Infomaniak, o2switch : lequel choisir ? Tests, avis et prix actualisés.",
  alternates: { canonical: SITE_URL },
};

const categories = [
  { num: "01", label: "Hébergement mutualisé", icon: "🌐", href: "/comparatifs/meilleur-hebergeur-web", sub: "Hostinger · OVH · o2switch · Infomaniak", count: 11, live: true },
  { num: "02", label: "Hébergement WordPress", icon: "🔷", href: "/comparatifs/meilleur-hebergeur-wordpress", sub: "Kinsta · SiteGround · o2switch", count: 7, live: true },
  { num: "03", label: "Hébergement pas cher", icon: "💶", href: "/comparatifs/meilleur-hebergeur-pas-cher", sub: "IONOS · LWS · Hostinger · PlanetHoster", count: 8, live: true },
  { num: "04", label: "VPS & Cloud", icon: "☁️", href: "/comparatifs/meilleur-hebergeur-vps", sub: "Hetzner · DigitalOcean · Scaleway · OVH", count: 0, live: false },
  { num: "05", label: "Hébergement e-commerce", icon: "🛒", href: "/comparatifs/meilleur-hebergeur-ecommerce", sub: "SiteGround · WooCommerce · Shopify", count: 0, live: false },
  { num: "06", label: "Hébergement email", icon: "📧", href: "/comparatifs/meilleur-hebergeur-email", sub: "Infomaniak · ProtonMail · Google Workspace", count: 0, live: false },
];

const top3Picks = [
  { name: "o2switch", score: 9.0, icon: "🇫🇷", verdict: "Hébergement mutualisé illimité, support FR exceptionnel, tout inclus.", price: "7.99€/mois", badge: "Choix #1", isBest: true, href: "/avis/avis-o2switch" },
  { name: "Hostinger", score: 9.1, icon: "⚡", verdict: "Le meilleur rapport qualité/prix du marché. Ultra-rapide, abordable.", price: "dès 2.99€/mois", badge: "Meilleur prix", isBest: false, href: "/avis/avis-hostinger" },
  { name: "Infomaniak", score: 8.8, icon: "🌿", verdict: "Hébergeur suisse éthique, 100% énergies renouvelables, très fiable.", price: "6.75€/mois", badge: "Éco-friendly", isBest: false, href: "/avis/avis-infomaniak" },
];

const trustBarItems = ["Hostinger", "OVH", "o2switch", "Infomaniak", "SiteGround", "Hetzner", "DigitalOcean", "Kinsta", "Scaleway", "LWS", "IONOS", "PlanetHoster", "Cloudways"];

export default function HomePage() {
  const featured = getFeaturedHostings(3);
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      <ItemListJsonLd
        name="Meilleurs hébergeurs web 2026"
        items={featured.map((h) => ({ name: h.name, url: `${SITE_URL}/avis/${h.slug}`, description: h.verdict }))}
      />

      {/* HERO */}
      <section className="hero-editorial">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 max-w-2xl pb-14 lg:pb-20">
              <p className="anim-fade-up section-label text-white/35 mb-5">
                Comparateur hébergement · Indépendant · Actualisé avril 2026
              </p>
              <h1
                className="anim-fade-up anim-delay-1 text-[42px] sm:text-[58px] lg:text-[66px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quel hébergeur web{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  choisir en 2026 ?
                </span>
              </h1>
              <p className="anim-fade-up anim-delay-2 text-[16px] text-white/50 leading-relaxed mb-8 max-w-md">
                Nous avons mesuré le TTFB, l&apos;uptime et le support de 11 hébergeurs en conditions réelles.
                OVH, Hostinger, o2switch, Infomaniak — voici notre verdict sans concession.
              </p>
              <div className="anim-fade-up anim-delay-3 flex flex-wrap gap-2 mb-8">
                {[
                  { icon: "🔍", text: "11 hébergeurs testés" },
                  { icon: "📅", text: "Mis à jour avril 2026" },
                  { icon: "🛡️", text: "100% indépendant" },
                ].map((b) => (
                  <span key={b.text} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/70 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">
                    <span aria-hidden="true">{b.icon}</span>{b.text}
                  </span>
                ))}
              </div>
              <div className="anim-fade-up anim-delay-4 flex flex-wrap gap-3">
                <Link href="/comparatifs/meilleur-hebergeur-web" className="affiliate-btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#059669] text-white text-[14px] font-semibold rounded-lg">
                  Voir le comparatif
                  <svg className="btn-arrow" viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
                </Link>
                <Link href="/quiz" className="glass inline-flex items-center gap-2 px-5 py-2.5 text-white text-[14px] font-semibold rounded-lg">
                  ✦ Quiz — mon hébergeur idéal
                </Link>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="hidden lg:block w-[300px] shrink-0 pb-16">
              <div className="glass rounded-2xl p-5">
                <p className="section-label text-white/30 mb-4">Top hébergeurs 2026</p>
                <div className="space-y-4">
                  {[{ name: "o2switch", score: 9.0 }, { name: "Hostinger", score: 9.1 }, { name: "Infomaniak", score: 8.8 }, { name: "OVH", score: 8.2 }].map((h, i) => (
                    <div key={h.name} className="flex items-center gap-3">
                      <span className="text-white/20 text-[11px] w-4 shrink-0" style={{ fontFamily: "var(--font-mono)" }}>0{i + 1}</span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-[13px] font-semibold text-white">{h.name}</span>
                          <span className="text-[12px] font-bold text-emerald-300" style={{ fontFamily: "var(--font-mono)" }}>{h.score.toFixed(1)}</span>
                        </div>
                        <div className="h-[3px] bg-white/8 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${(h.score / 10) * 100}%`, background: "linear-gradient(90deg, #059669, #34d399)" }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/comparatifs/meilleur-hebergeur-web" className="block mt-5 text-center text-[12px] font-semibold text-emerald-400/70 hover:text-emerald-300 transition-colors border-t border-white/8 pt-4">
                  Comparatif complet →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 bg-gradient-to-b from-transparent to-[#FAFAF8]" />
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1A1A14] dark:bg-[#0A0A0A] py-12 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "80+", label: "hébergeurs testés" },
            { value: "25 000+", label: "lecteurs/mois" },
            { value: "Chaque semaine", label: "mises à jour" },
            { value: "100%", label: "indépendant" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP 3 PICKS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <p className="section-label mb-2">Sélection éditoriale</p>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#1A1A14]" style={{ fontFamily: "var(--font-display)" }}>
            Notre top 3 des hébergeurs web
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {top3Picks.map((pick) => (
            <div key={pick.name} className={`group relative bg-white border rounded-2xl p-5 card-hover overflow-hidden ${pick.isBest ? "border-[#059669]/30 shadow-[0_0_0_1px_rgba(5,150,105,0.1),0_4px_20px_rgba(5,150,105,0.08)]" : "border-[#E8E8E3]"}`}>
              {pick.isBest && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#059669] to-[#34d399]" />}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl" aria-hidden="true">{pick.icon}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${pick.isBest ? "badge-best bg-[#059669] text-white" : "bg-[#F5F5F0] text-[#737369]"}`} style={{ fontFamily: "var(--font-mono)" }}>{pick.badge}</span>
                </div>
                <span className={`text-[20px] font-bold ${pick.isBest ? "text-[#059669]" : "text-[#374151]"}`} style={{ fontFamily: "var(--font-mono)" }}>{pick.score.toFixed(1)}</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#1A1A14] mb-2" style={{ fontFamily: "var(--font-display)" }}>{pick.name}</h3>
              <p className="text-[13px] text-[#737369] leading-relaxed mb-3 line-clamp-2">{pick.verdict}</p>
              <p className="text-[12px] text-[#aaa] mb-4" style={{ fontFamily: "var(--font-mono)" }}>{pick.price}</p>
              <Link href={pick.href} className="block text-center px-3 py-1.5 border border-[#E8E8E3] rounded-lg text-[12px] font-medium text-[#374151] hover:border-[#059669] hover:text-[#059669] transition-all">
                Voir l&apos;avis complet →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="bg-[#F5F5F0] border-y border-[#E8E8E3] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Catégories</p>
              <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#1A1A14]" style={{ fontFamily: "var(--font-display)" }}>
                Quel type d&apos;hébergement ?
              </h2>
            </div>
            <Link href="/comparatifs" className="hidden sm:flex items-center gap-1 text-[13px] text-[#737369] hover:text-[#059669] transition-colors font-medium">Tout voir →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const card = (
                <div className={`group bg-white border border-[#E8E8E3] rounded-2xl p-5 card-hover flex items-start gap-4 ${!cat.live ? "opacity-55 cursor-default" : "cursor-pointer"}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: "#05966912" }}>
                    <span aria-hidden="true">{cat.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className={`text-[15px] font-semibold tracking-tight transition-colors ${cat.live ? "text-[#1A1A14] group-hover:text-[#059669]" : "text-[#888]"}`} style={{ fontFamily: "var(--font-display)" }}>{cat.label}</h3>
                      {cat.count > 0 ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0" style={{ background: "#05966914", color: "#059669", fontFamily: "var(--font-mono)" }}>{cat.count} testés</span>
                      ) : (
                        <span className="text-[10px] font-semibold bg-[#F5F5F0] text-[#aaa] px-2 py-0.5 rounded-full shrink-0" style={{ fontFamily: "var(--font-mono)" }}>Bientôt</span>
                      )}
                    </div>
                    <p className="text-[12px] text-[#aaa] truncate">{cat.sub}</p>
                  </div>
                </div>
              );
              return cat.live ? <Link key={cat.num} href={cat.href}>{card}</Link> : <div key={cat.num}>{card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      {articles.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Derniers articles</p>
              <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#1A1A14]" style={{ fontFamily: "var(--font-display)" }}>Fraîchement publiés</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {articles[0] && (
              <Link href={`/${articles[0].category}/${articles[0].slug}`} className="group col-span-1 bg-white border border-[#E8E8E3] rounded-2xl p-6 card-hover block">
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669]" style={{ fontFamily: "var(--font-mono)" }}>{articles[0].category}</span>
                <h3 className="text-[20px] font-semibold leading-snug tracking-tight text-[#1A1A14] mt-3 mb-3 group-hover:text-[#059669] transition-colors" style={{ fontFamily: "var(--font-display)" }}>{articles[0].title}</h3>
                <p className="text-[14px] text-[#737369] line-clamp-3 leading-relaxed mb-4">{articles[0].description}</p>
                <div className="flex justify-between text-[12px] text-[#aaa] border-t border-[#F5F5F0] pt-4">
                  <time dateTime={articles[0].publishedAt}>{new Date(articles[0].publishedAt).toLocaleDateString("fr-FR", { month: "long", day: "numeric" })}</time>
                  <span className="text-[#059669] font-semibold">Lire l&apos;article →</span>
                </div>
              </Link>
            )}
            <div className="flex flex-col gap-5">
              {articles.slice(1, 3).map((a) => (
                <Link key={a.slug} href={`/${a.category}/${a.slug}`} className="group bg-white border border-[#E8E8E3] rounded-2xl p-5 card-hover block">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669]" style={{ fontFamily: "var(--font-mono)" }}>{a.category}</span>
                  <h3 className="text-[15px] font-semibold leading-snug text-[#1A1A14] mt-2 mb-1.5 group-hover:text-[#059669] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>{a.title}</h3>
                  <p className="text-[13px] text-[#737369] line-clamp-2">{a.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED HOSTINGS */}
      {featured.length > 0 && (
        <section className="border-t border-[#E8E8E3] py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label mb-2">Comparatif vedette</p>
                <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#1A1A14]" style={{ fontFamily: "var(--font-display)" }}>Meilleurs hébergeurs mutualisés</h2>
              </div>
              <Link href="/comparatifs/meilleur-hebergeur-web" className="hidden sm:flex items-center gap-1 text-[13px] text-[#737369] hover:text-[#059669] transition-colors font-medium">Comparatif complet →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featured.map((h, i) => <HostingCard key={h.id} hosting={h} rank={i + 1} />)}
            </div>
          </div>
        </section>
      )}

      {/* TRUST BAR */}
      <section className="border-y border-[#E8E8E3] py-8 overflow-hidden bg-white">
        <p className="section-label text-center mb-5">Hébergeurs comparés</p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...trustBarItems, ...trustBarItems].map((name, i) => (
              <div key={i} className="inline-flex items-center justify-center mx-8 text-[14px] font-semibold text-[#aaa] hover:text-[#059669] transition-colors cursor-default whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterCTA variant="section" accentColor="#059669" />
      </section>

      {/* MÉTHODE */}
      <section className="border-t border-[#E8E8E3] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label mb-3">Notre méthode</p>
              <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#1A1A14] mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Pourquoi faire confiance à QuelHébergeur ?
              </h2>
              <p className="text-[15px] text-[#737369] leading-relaxed mb-6">
                Chaque hébergeur est testé pendant 30 jours minimum avec monitoring d&apos;uptime, mesures de TTFB et tests de support. Nous testons avec de vraies applications WordPress, PrestaShop et statiques.
              </p>
              <Link href="/methodologie" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#059669] hover:underline underline-offset-4">
                Lire notre méthode complète →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "30j", unit: "", label: "de monitoring par hébergeur", color: "border-emerald-100 bg-emerald-50" },
                { val: "0", unit: "€", label: "reçu pour une bonne note", color: "border-blue-100 bg-blue-50" },
                { val: "11", unit: "+", label: "hébergeurs comparés", color: "border-orange-100 bg-orange-50" },
                { val: "42", unit: "", label: "critères mesurés objectivement", color: "border-violet-100 bg-violet-50" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border ${s.color} p-5`}>
                  <div className="text-[32px] font-bold text-[#1A1A14] leading-none mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                    {s.val}{s.unit && <span className="text-[18px] text-[#737369] ml-0.5">{s.unit}</span>}
                  </div>
                  <p className="text-[12px] text-[#737369] leading-snug mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
