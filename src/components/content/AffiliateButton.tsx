import { affiliateLinks } from "@/lib/affiliates";

interface AffiliateButtonProps {
  affiliateId: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AffiliateButton({
  affiliateId,
  size = "md",
  className = "",
}: AffiliateButtonProps) {
  const affiliate = affiliateLinks[affiliateId];
  if (!affiliate) return null;

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-xs"
      : size === "lg"
        ? "px-6 py-3 text-base"
        : "px-4 py-2 text-sm";

  return (
    <a
      href={affiliate.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-flex items-center gap-2 font-semibold bg-[#059669] text-white rounded-lg hover:bg-[#047857] transition-colors ${sizeClasses} ${className}`}
    >
      {affiliate.cta}
      <svg
        viewBox="0 0 16 16"
        width="12"
        height="12"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </a>
  );
}
