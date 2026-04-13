"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchEntry {
  title: string;
  href: string;
  category: string;
  desc: string;
}

const SEARCH_INDEX: SearchEntry[] = [
  { title: "Meilleur hébergeur web 2026", href: "/comparatifs/meilleur-hebergeur-web", category: "Comparatif", desc: "Notre classement des meilleurs hébergeurs testés" },
  { title: "Meilleur hébergeur WordPress", href: "/comparatifs/meilleur-hebergeur-wordpress", category: "Comparatif", desc: "Top hébergeurs optimisés pour WordPress" },
  { title: "Hébergeur pas cher", href: "/comparatifs/meilleur-hebergeur-pas-cher", category: "Comparatif", desc: "Les meilleures offres d'entrée de gamme" },
  { title: "OVH vs Hostinger", href: "/vs/ovh-vs-hostinger", category: "Versus", desc: "Comparaison détaillée OVH contre Hostinger" },
  { title: "o2switch vs OVH", href: "/vs/o2switch-vs-ovh", category: "Versus", desc: "Quel hébergeur français choisir ?" },
  { title: "Avis Hostinger", href: "/avis/hostinger", category: "Avis", desc: "Test complet Hostinger — notre note : 9.1/10" },
  { title: "Avis o2switch", href: "/avis/o2switch", category: "Avis", desc: "Test complet o2switch — notre note : 9.0/10" },
  { title: "Avis Infomaniak", href: "/avis/infomaniak", category: "Avis", desc: "Test complet Infomaniak — notre note : 8.7/10" },
  { title: "Avis OVH", href: "/avis/ovh", category: "Avis", desc: "Test complet OVH — notre note : 8.0/10" },
  { title: "Avis SiteGround", href: "/avis/siteground", category: "Avis", desc: "Test complet SiteGround — notre note : 9.0/10" },
  { title: "Avis Kinsta", href: "/avis/kinsta", category: "Avis", desc: "Test complet Kinsta — notre note : 9.2/10" },
  { title: "Quiz — trouver mon hébergeur", href: "/quiz", category: "Outil", desc: "4 questions pour trouver l'hébergeur idéal" },
  { title: "Comparateur côte à côte", href: "/comparer", category: "Outil", desc: "Comparez deux hébergeurs en détail" },
  { title: "Notre méthodologie", href: "/methodologie", category: "Page", desc: "Comment on note et teste les hébergeurs" },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Comparatif: { bg: "#ecfdf5", text: "#059669" },
  Versus:     { bg: "#ede9fe", text: "#6d28d9" },
  Avis:       { bg: "#fff7ed", text: "#c2410c" },
  Outil:      { bg: "#fef9c3", text: "#854d0e" },
  Page:       { bg: "#f1f5f9", text: "#475569" },
};

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = query.length < 1
    ? SEARCH_INDEX.slice(0, 6)
    : SEARCH_INDEX.filter(
        (e) =>
          e.title.toLowerCase().includes(query.toLowerCase()) ||
          e.desc.toLowerCase().includes(query.toLowerCase()) ||
          e.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setCursor(0);
    }
  }, [open]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && results[cursor]) {
      window.location.href = results[cursor].href;
      setOpen(false);
    }
  };

  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#f0ede6] border border-[#e3e0d8] rounded-lg text-[12px] text-[#6b7280] hover:border-[#059669] hover:text-[#059669] transition-colors group"
      aria-label="Rechercher"
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="6.5" cy="6.5" r="5" />
        <path d="M10.5 10.5L14 14" />
      </svg>
      <span>Rechercher…</span>
      <kbd className="ml-1 text-[10px] bg-white border border-[#e3e0d8] rounded px-1 py-0.5 font-mono group-hover:border-[#059669]/30">⌘K</kbd>
    </button>
  );

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-[#111218]/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-x-4 top-[15vh] z-50 max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl border border-[#e3e0d8] overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#e3e0d8]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round">
              <circle cx="6.5" cy="6.5" r="5" />
              <path d="M10.5 10.5L14 14" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setCursor(0); }}
              onKeyDown={handleKey}
              placeholder="Rechercher un hébergeur, comparatif, avis…"
              className="flex-1 text-[14px] text-[#111218] placeholder-[#9ca3af] bg-transparent outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-[#9ca3af] hover:text-[#111218] text-[18px] leading-none">×</button>
            )}
          </div>

          {/* Results */}
          <ul ref={listRef} className="py-2 max-h-[340px] overflow-y-auto">
            {results.length === 0 && (
              <li className="px-4 py-6 text-center text-[13px] text-[#9ca3af]">
                Aucun résultat pour «&nbsp;{query}&nbsp;»
              </li>
            )}
            {results.map((entry, i) => {
              const col = CATEGORY_COLORS[entry.category] || CATEGORY_COLORS["Page"];
              return (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                      i === cursor ? "bg-[#ecfdf5]" : "hover:bg-[#f8f6f1]"
                    }`}
                  >
                    <span
                      className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded"
                      style={{ background: col.bg, color: col.text }}
                    >
                      {entry.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#111218] truncate">{entry.title}</p>
                      <p className="text-[11px] text-[#9ca3af] truncate">{entry.desc}</p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round">
                      <path d="M1 8h14M9 2l6 6-6 6" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hint bar */}
          <div className="border-t border-[#e3e0d8] px-4 py-2 flex items-center gap-4 text-[11px] text-[#9ca3af]">
            <span><kbd className="font-mono">↑↓</kbd> naviguer</span>
            <span><kbd className="font-mono">↵</kbd> ouvrir</span>
            <span><kbd className="font-mono">Esc</kbd> fermer</span>
          </div>
        </div>
      </div>
    </>
  );
}
