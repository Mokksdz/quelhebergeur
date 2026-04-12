import { affiliateLinks } from "@/lib/affiliates";

interface AffiliateButtonProps {
  affiliateId: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  showSubtext?: boolean;
}

const ExternalArrow = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow shrink-0" aria-hidden="true">
    <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" />
  </svg>
);

export function AffiliateButton({ affiliateId, size = "md", className = "", label, showSubtext = false }: AffiliateButtonProps) {
  const affiliate = affiliateLinks[affiliateId];
  if (!affiliate) return null;

  const sizeClasses = size === "sm" ? "px-3.5 py-1.5 text-[13px]" : size === "lg" ? "px-6 py-3 text-[15px]" : "px-5 py-2.5 text-[14px]";

  return (
    <div className={showSubtext ? "flex flex-col items-start gap-1" : ""}>
      <a
        href={affiliate.url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={`affiliate-btn inline-flex items-center justify-center gap-2 font-semibold bg-[#059669] text-white rounded-lg hover:bg-[#047857] ${sizeClasses} ${className}`}
      >
        {label ?? affiliate.cta}
        <ExternalArrow />
      </a>
      {showSubtext && (
        <span className="text-[11px] text-[#6b7280]" style={{ fontFamily: "var(--font-mono)" }}>Voir l&apos;offre actuelle</span>
      )}
    </div>
  );
}
