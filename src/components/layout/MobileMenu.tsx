"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Comparatifs", href: "/comparatifs" },
  { label: "Avis", href: "/avis" },
  { label: "VS", href: "/vs" },
  { label: "Actualités", href: "/actualites" },
  { label: "Méthodo", href: "/methodologie" },
  { label: "Quiz", href: "/quiz" },
  { label: "Comparateur", href: "/comparer" },
  { label: "À propos", href: "/a-propos" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#737369] dark:text-[#8A8A8A] hover:text-[#1A1A14] dark:hover:text-white transition-colors"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#FAFAF8] dark:bg-[#0A0A0A] border-b border-[#E8E8E3] dark:border-[#2E2E2E] shadow-lg z-50">
          <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-[14px] font-medium text-[#737369] dark:text-[#8A8A8A] hover:text-[#059669] dark:hover:text-[#059669] hover:bg-[#ecfdf5] dark:hover:bg-[#059669]/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-[#E8E8E3] dark:border-[#2E2E2E]">
              <Link
                href="/comparatifs/meilleur-hebergeur-web"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#059669] text-white text-[13px] font-semibold rounded-lg hover:bg-[#047857] transition-colors"
              >
                Top hébergeurs 2026
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
