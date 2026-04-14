interface ImagePlaceholderProps {
  label: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  aspectRatio?: string;
  shape?: "rect" | "square" | "circle";
}

export function ImagePlaceholder({
  label,
  width,
  height,
  className = "",
  aspectRatio,
  shape = "rect",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-[#F5F5F0] dark:bg-[#1F1F1F] border-2 border-dashed border-[#D4D4CD] dark:border-[#3D3D37] ${
        shape === "circle" ? "rounded-full" : "rounded-xl"
      } ${className}`}
      style={{ width, height, aspectRatio }}
      aria-label={label}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8A89E" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <span className="text-[10px] font-medium text-[#A8A89E] dark:text-[#525252] text-center leading-tight px-3 max-w-[120px]">
        {label}
      </span>
    </div>
  );
}
