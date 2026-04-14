"use client";
import { useState, useEffect } from "react";

interface ScrollToastProps {
  toolName: string;
  toolHref: string;
}

export function ScrollToast({ toolName, toolHref }: ScrollToastProps) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const key = `scroll-toast-${typeof window !== "undefined" ? window.location.pathname : ""}`;
    if (sessionStorage.getItem(key)) return;
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.6) {
        setShow(true);
        sessionStorage.setItem(key, "1");
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (show) {
      const t = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(t);
    }
  }, [show]);

  if (!show || dismissed) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)]"
      style={{ animation: "slide-up 0.3s ease-out" }}
    >
      <div className="flex items-center gap-3 bg-[#1A1A14] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10">
        <span className="text-sm text-white/70">💡 Notre choix #1 :</span>
        <a
          href={toolHref}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="font-semibold text-sm hover:underline"
          style={{ color: "#059669" }}
        >
          {toolName} →
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="ml-1 text-white/40 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2 2l8 8M10 2L2 10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
