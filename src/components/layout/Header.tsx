"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Comparatifs", href: "/comparatifs" },
  { label: "Versus", href: "/vs" },
  { label: "Avis", href: "/avis" },
  { label: "Méthode", href: "/methodologie" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#f8f6f1]/92 backdrop-blur-md border-b border-[#e3e0d8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[58px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#111218] text-white text-xs font-bold tracking-tight shadow-sm group-hover:bg-[#059669] transition-colors duration-200">
              Q
            </span>
            <span
              className="text-[17px] font-normal text-[#111218] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              QuelHébergeur
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-[13.5px] font-medium rounded-lg transition-colors ${
                    active
                      ? "text-[#059669] bg-[#ecfdf5]"
                      : "text-[#6b7280] hover:text-[#111218]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Link
              href="/comparatifs/meilleur-hebergeur-web"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#059669] text-white text-[13px] font-semibold rounded-lg hover:bg-[#047857] transition-colors duration-200"
            >
              Top hébergeurs
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
