"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface SidebarProps {
  toc?: TocItem[];
}

export function Sidebar({ toc = [] }: SidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

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
      { rootMargin: "-20% 0% -80% 0%" }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-20">
        <p className="section-label mb-3">Sommaire</p>
        <nav>
          <ul className="space-y-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm py-1 px-2 rounded transition-colors ${
                    item.level === 3 ? "pl-4" : ""
                  } ${
                    activeId === item.id
                      ? "text-[#059669] bg-[#ecfdf5] font-medium"
                      : "text-[#6b7280] hover:text-[#111218]"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
