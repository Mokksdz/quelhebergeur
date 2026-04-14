"use client";
import { useState, useEffect } from "react";

interface StickyMobileCTAProps {
  toolName: string;
  toolHref: string;
  score: number;
}

export function StickyMobileCTA({ toolName, toolHref, score }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t-2 border-[#059669]">
      <div
        className="bg-white dark:bg-[#1A1A14] px-4 flex items-center justify-between shadow-lg"
        style={{ height: "64px" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#059669] flex items-center justify-center text-white text-xs font-bold">
            #1
          </div>
          <div>
            <div className="font-semibold text-[#1A1A14] dark:text-white text-sm leading-tight">
              {toolName}
            </div>
            <div className="text-xs text-[#737369]">★ {score}/10</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={toolHref}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="px-4 py-2 bg-[#059669] text-white text-sm font-semibold rounded-lg hover:bg-[#047857] transition-colors"
          >
            Voir l&apos;offre →
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-[#737369] hover:text-[#1A1A14] p-1"
            aria-label="Fermer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
