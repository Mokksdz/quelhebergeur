"use client";
import { useEffect, useState } from "react";
import { hostings } from "@/lib/hostings";
import { affiliateLinks } from "@/lib/affiliates";

const ACCENT = "#059669";

const topTools = [...hostings]
  .sort((a, b) => b.scores.overall - a.scores.overall)
  .slice(0, 3)
  .map((h, i) => ({
    rank: i + 1,
    name: h.name,
    score: h.scores.overall,
    href: affiliateLinks[h.affiliateId]?.url ?? "#",
  }));

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-intent-shown")) return;
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    }
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  if (!show || dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={() => setDismissed(true)}
    >
      <div
        className="bg-white dark:bg-[#141414] rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
        style={{ animation: "slide-up 0.3s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 text-[#737369] hover:text-[#1A1A14] transition-colors"
          aria-label="Fermer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2 2l12 12M14 2L2 14" />
          </svg>
        </button>

        <p className="text-[11px] font-bold text-[#737369] uppercase tracking-widest mb-2">
          Avant de partir
        </p>
        <h2
          className="text-xl font-extrabold text-[#1A1A14] dark:text-white mb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Notre top 3 hébergeurs
        </h2>
        <p className="text-sm text-[#737369] mb-5">
          Testés et sélectionnés par l&apos;équipe QuelHébergeur.
        </p>

        <div className="space-y-2 mb-4">
          {topTools.map((tool) => (
            <a
              key={tool.rank}
              href={tool.href}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl border border-[#E8E8E3] hover:border-[#059669] hover:bg-[#ecfdf5] transition-all group"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: ACCENT }}
              >
                #{tool.rank}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[#1A1A14] dark:text-white text-sm leading-tight">
                  {tool.name}
                </div>
                <div className="text-xs text-[#737369]">
                  Score : {tool.score}/10
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-[#737369] group-hover:text-[#059669] flex-shrink-0 transition-colors"
              >
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          ))}
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="w-full text-sm text-[#737369] hover:text-[#1A1A14] transition-colors"
        >
          Non merci, je pars quand même
        </button>
      </div>
    </div>
  );
}
