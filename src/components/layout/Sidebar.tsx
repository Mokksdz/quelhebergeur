"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface SidebarProps {
  toc?: TocItem[];
  topPick?: {
    name: string;
    score: number;
    price: string;
    affiliateId: string;
    affiliateUrl: string;
  };
}

export function Sidebar({ toc = [], topPick }: SidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-15% 0% -80% 0%" }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.round((scrolled / total) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (toc.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Reading progress */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-[3px] bg-[#e3e0d8] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, background: "linear-gradient(90deg, #059669, #34d399)" }}
            />
          </div>
          <span className="text-[10px] text-[#aaa] shrink-0" style={{ fontFamily: "var(--font-mono)" }}>{progress}%</span>
        </div>

        {/* TOC */}
        <div>
          <p className="section-label mb-3">Sommaire</p>
          <nav>
            <ul className="space-y-0.5">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block text-[13px] py-1.5 px-2.5 rounded-lg transition-all ${
                      item.level === 3 ? "pl-5" : ""
                    } ${
                      activeId === item.id
                        ? "text-[#059669] bg-[#ecfdf5] font-semibold"
                        : "text-[#6b7280] hover:text-[#111218] hover:bg-[#f5f3ef]"
                    }`}
                  >
                    {activeId === item.id && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#059669] mr-1.5 mb-px align-middle" />
                    )}
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Top pick card */}
        {topPick && (
          <div className="bg-white border border-[#e3e0d8] rounded-2xl p-4 shadow-sm">
            <p className="section-label mb-3">Notre top pick</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] font-semibold text-[#111218]">{topPick.name}</span>
              <span className="text-[18px] font-bold text-[#059669]" style={{ fontFamily: "var(--font-mono)" }}>{topPick.score.toFixed(1)}</span>
            </div>
            <div className="h-[3px] bg-[#e3e0d8] rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full"
                style={{ width: `${(topPick.score / 10) * 100}%`, background: "linear-gradient(90deg, #059669, #34d399)" }}
              />
            </div>
            <p className="text-[11px] text-[#aaa] mb-3" style={{ fontFamily: "var(--font-mono)" }}>À partir de {topPick.price}</p>
            <a
              href={topPick.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="affiliate-btn block text-center px-3 py-2 bg-[#059669] text-white text-[12px] font-semibold rounded-lg"
            >
              Voir l&apos;offre →
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
