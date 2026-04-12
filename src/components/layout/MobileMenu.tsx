"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Comparatifs", href: "/comparatifs" },
  { label: "Versus", href: "/vs" },
  { label: "Avis", href: "/avis" },
  { label: "Méthode", href: "/methodologie" },
  { label: "À propos", href: "/a-propos" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#6b7280] hover:text-[#111218] transition-colors"
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
        <div className="absolute top-[58px] left-0 right-0 bg-[#f8f6f1] border-b border-[#e3e0d8] shadow-lg z-50">
          <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-[14px] font-medium text-[#6b7280] hover:text-[#059669] hover:bg-[#ecfdf5] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-[#e3e0d8]">
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
