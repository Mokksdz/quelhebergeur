"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";
import { SearchModal } from "./SearchModal";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Comparatifs", href: "/comparatifs" },
  { label: "Avis", href: "/avis" },
  { label: "VS", href: "/vs" },
  { label: "Actualités", href: "/actualites" },
  { label: "Méthodo", href: "/methodologie" },
];

const networkSites = [
  { emoji: "⚡", name: "Comparia", desc: "Outils IA", href: "https://comparia.vectarlab.tech" },
  { emoji: "🌐", name: "QuelHébergeur", desc: "Hébergement", href: "https://hebergeur.vectarlab.tech", current: true },
  { emoji: "📊", name: "ComparaCompta", desc: "Comptabilité", href: "https://compta.vectarlab.tech" },
  { emoji: "🏦", name: "ComparaBanque", desc: "Banques", href: "https://banque.vectarlab.tech" },
  { emoji: "📧", name: "CompareMailing", desc: "Emailing", href: "https://mailing.vectarlab.tech" },
  { emoji: "🛒", name: "QuelleBoutique", desc: "E-commerce", href: "https://boutique.vectarlab.tech" },
  { emoji: "🔒", name: "QuelVPN", desc: "VPN", href: "https://vpn.vectarlab.tech" },
];

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = document.cookie.match(/theme=([^;]+)/)?.[1];
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.cookie = `theme=${next ? "dark" : "light"};path=/;max-age=31536000`;
  }
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center w-8 h-8 rounded-lg text-[#737369] hover:text-[#1A1A14] dark:text-[#8A8A8A] dark:hover:text-white hover:bg-[#F5F5F0] dark:hover:bg-[#1F1F1F] transition-colors"
      aria-label={dark ? "Mode clair" : "Mode sombre"}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          <circle cx="8" cy="8" r="3.5"/>
          <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M11.89 4.11l1.06-1.06M3.05 12.95l1.06-1.06"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      )}
    </button>
  );
}

function NetworkDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative hidden md:block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[#737369] hover:text-[#1A1A14] dark:text-[#8A8A8A] dark:hover:text-white rounded-lg hover:bg-[#F5F5F0] dark:hover:bg-[#1F1F1F] transition-colors border border-[#E8E8E3] dark:border-[#2E2E2E]"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>Réseau Compara</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l3 3 3-3"/>
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#141414] border border-[#E8E8E3] dark:border-[#2E2E2E] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] z-50 overflow-hidden">
          <div className="p-1">
            {networkSites.map((site) => (
              <a
                key={site.name}
                href={site.href}
                target={site.current ? undefined : "_blank"}
                rel={site.current ? undefined : "noopener noreferrer"}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  site.current
                    ? "bg-[#ecfdf5] dark:bg-[#059669]/10 text-[#059669]"
                    : "text-[#1A1A14] dark:text-[#F5F5F5] hover:bg-[#F5F5F0] dark:hover:bg-[#1F1F1F]"
                }`}
              >
                <span className="text-base w-5 text-center shrink-0">{site.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold leading-none">{site.name}</span>
                    {site.current && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#059669] text-white leading-none">actuel</span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#737369] dark:text-[#8A8A8A]">{site.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const saved = document.cookie.match(/announcement_v3=dismissed/);
    if (!saved) setDismissed(false);
  }, []);

  function dismiss() {
    setDismissed(true);
    document.cookie = "announcement_v3=dismissed;path=/;max-age=2592000";
  }

  if (dismissed) return null;

  return (
    <div className="bg-[#059669] text-white text-[12px] font-medium py-2 px-4 flex items-center justify-center gap-3 relative">
      <span>
        Nouveau comparatif VPS disponible —{" "}
        <Link href="/comparatifs/meilleur-hebergeur-vps" className="underline underline-offset-2 font-semibold hover:no-underline">
          Voir le classement
        </Link>
      </span>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M11 3L3 11M3 3l8 8"/>
        </svg>
      </button>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header className="bg-[#FAFAF8]/92 dark:bg-[#0A0A0A]/92 backdrop-blur-md border-b border-[#E8E8E3] dark:border-[#2E2E2E]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#1A1A14] dark:bg-[#059669] text-white text-xs font-bold tracking-tight shadow-sm group-hover:bg-[#059669] dark:group-hover:bg-[#047857] transition-colors duration-200">
                Q
              </span>
              <span
                className="text-[17px] font-semibold text-[#1A1A14] dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                QuelHébergeur
              </span>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-[13.5px] font-medium rounded-lg transition-colors ${
                      active
                        ? "text-[#059669] bg-[#ecfdf5] dark:bg-[#059669]/10"
                        : "text-[#737369] dark:text-[#8A8A8A] hover:text-[#1A1A14] dark:hover:text-white hover:bg-[#F5F5F0] dark:hover:bg-[#1F1F1F]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <NetworkDropdown />
              <DarkModeToggle />
              <SearchModal />
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
    </div>
  );
}
