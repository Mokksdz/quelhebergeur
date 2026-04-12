import Link from "next/link";

const footerLinks = {
  comparatifs: [
    { label: "Meilleur hébergeur web", href: "/comparatifs/meilleur-hebergeur-web" },
    { label: "Hébergeur WordPress", href: "/comparatifs/meilleur-hebergeur-wordpress" },
    { label: "Hébergeur pas cher", href: "/comparatifs/meilleur-hebergeur-pas-cher" },
  ],
  versus: [
    { label: "OVH vs Hostinger", href: "/vs/ovh-vs-hostinger" },
    { label: "o2switch vs OVH", href: "/vs/o2switch-vs-ovh" },
  ],
  site: [
    { label: "À propos", href: "/a-propos" },
    { label: "Méthodologie", href: "/methodologie" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#111218] text-white mt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#059669] text-white text-xs font-bold">
                Q
              </span>
              <span
                className="text-[17px] font-normal text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                QuelHébergeur
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Comparatif indépendant des meilleurs hébergeurs web francophones. Tests réels, avis honnêtes.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              © {new Date().getFullYear()} VECTAR OÜ — Tallinn, Estonia
            </p>
          </div>

          {/* Comparatifs */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Comparatifs
            </h3>
            <ul className="space-y-2">
              {footerLinks.comparatifs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#059669] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Versus */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Versus
            </h3>
            <ul className="space-y-2">
              {footerLinks.versus.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#059669] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Le site
            </h3>
            <ul className="space-y-2">
              {footerLinks.site.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#059669] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            Ce site contient des liens affiliés. Nos tests sont menés de façon indépendante.
          </p>
          <p className="text-xs text-gray-500">
            Mis à jour en avril 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
