import Link from "next/link";

const colNavigation = [
  { label: "Meilleur hébergeur web", href: "/comparatifs/meilleur-hebergeur-web" },
  { label: "Hébergeur WordPress", href: "/comparatifs/meilleur-hebergeur-wordpress" },
  { label: "Hébergeur pas cher", href: "/comparatifs/meilleur-hebergeur-pas-cher" },
  { label: "Hébergeur éthique", href: "/comparatifs/meilleur-hebergeur-ethique" },
  { label: "Tous les comparatifs", href: "/comparatifs" },
];

const colRessources = [
  { label: "Avis Hostinger", href: "/avis/hostinger" },
  { label: "Avis o2switch", href: "/avis/o2switch" },
  { label: "Avis Infomaniak", href: "/avis/infomaniak" },
  { label: "Avis SiteGround", href: "/avis/siteground" },
  { label: "Quiz — trouver mon hébergeur", href: "/quiz" },
  { label: "Méthodologie", href: "/methodologie" },
];

const colReseau = [
  { emoji: "⚡", name: "Comparia", href: "https://comparia.vectarlab.tech" },
  { emoji: "📊", name: "ComparaCompta", href: "https://compta.vectarlab.tech" },
  { emoji: "🏦", name: "ComparaBanque", href: "https://banque.vectarlab.tech" },
  { emoji: "📧", name: "CompareMailing", href: "https://mailing.vectarlab.tech" },
  { emoji: "🛒", name: "QuelleBoutique", href: "https://boutique.vectarlab.tech" },
  { emoji: "🔒", name: "QuelVPN", href: "https://vpn.vectarlab.tech" },
];

const colLegal = [
  { label: "À propos", href: "/a-propos" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Comparateur côte à côte", href: "/comparer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A14] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

        {/* Top — logo + 4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#059669] text-white text-xs font-bold group-hover:bg-[#047857] transition-colors">
                Q
              </span>
              <span
                className="text-[17px] font-semibold text-white/90"
                style={{ fontFamily: "var(--font-display)" }}
              >
                QuelHébergeur
              </span>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed mb-5">
              Comparateur indépendant d&apos;hébergeurs web. Tests réels, notes objectives, sans conflit d&apos;intérêt.
            </p>
            <div className="flex flex-wrap gap-2">
              {["✓ Indépendant", "🔬 Tests réels", "🇫🇷 Français"].map((b) => (
                <span
                  key={b}
                  className="text-[11px] text-white/35 bg-white/5 border border-white/8 px-2 py-1 rounded-md font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Col 1 — Navigation */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {colNavigation.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/45 hover:text-white/80 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Ressources */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Ressources
            </p>
            <ul className="space-y-2.5">
              {colRessources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/45 hover:text-white/80 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Réseau Compara */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Réseau Compara
            </p>
            <ul className="space-y-2.5">
              {colReseau.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-white/45 hover:text-white/80 transition-colors"
                  >
                    <span className="text-sm">{l.emoji}</span>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Légal */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Légal
            </p>
            <ul className="space-y-2.5">
              {colLegal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/45 hover:text-white/80 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Suggestion strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/8 rounded-xl px-5 py-4 mb-10 bg-white/3">
          <div>
            <p className="text-[13px] font-semibold text-white/70 mb-0.5">Un hébergeur ou une comparaison manque ?</p>
            <p className="text-[12px] text-white/35">Suggérez-le — on l&apos;intègre à notre planning.</p>
          </div>
          <a
            href="mailto:contact@quelhebergeur.fr?subject=Suggestion"
            className="shrink-0 text-[13px] font-semibold text-[#34d399] hover:text-[#6ee7b7] transition-colors whitespace-nowrap"
          >
            Nous écrire →
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[12px] text-white/25">
            © {year} Un site du réseau Compara — par VECTAR OÜ 🇪🇪
          </p>
          <p className="text-[11px] text-white/20 max-w-xs sm:text-right">
            Contient des liens affiliés · Commission possible sans coût pour vous · Nos notes restent indépendantes
          </p>
        </div>
      </div>
    </footer>
  );
}
