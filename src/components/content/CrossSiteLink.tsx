interface CrossSiteLinkProps {
  siteName: string;
  title: string;
  href: string;
}

export function CrossSiteLink({ siteName, title, href }: CrossSiteLinkProps) {
  return (
    <aside className="my-6 rounded-xl border border-[#e3e0d8] bg-[#faf9f7] px-4 py-3.5 flex items-start gap-3">
      <span className="text-lg shrink-0 mt-0.5" aria-hidden="true">📎</span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold text-[#aaa] uppercase tracking-wider mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Sur {siteName}</p>
        <a href={href} target="_blank" rel="noopener" className="text-[14px] font-medium text-[#111218] hover:text-[#059669] transition-colors leading-snug" style={{ fontFamily: "var(--font-display)" }}>{title}</a>
        <p className="text-[12px] text-[#6b7280] mt-0.5">→ Lire le comparatif</p>
      </div>
    </aside>
  );
}
