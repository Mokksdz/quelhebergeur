interface RatingProps {
  score: number;
  max?: number;
  showNumber?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
}

function ScoreBar({ score, max = 10 }: { score: number; max?: number }) {
  const pct = Math.min(100, (score / max) * 100);
  const gradientColor =
    pct >= 80
      ? "linear-gradient(90deg, #059669, #34d399)"
      : pct >= 60
        ? "linear-gradient(90deg, #2563eb, #60a5fa)"
        : "linear-gradient(90deg, #d97706, #fbbf24)";

  return (
    <div className="w-full bg-[#f0ede6] rounded-full overflow-hidden h-2">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: gradientColor }}
        role="progressbar"
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
}

export function Rating({
  score,
  max = 10,
  showNumber = true,
  size = "md",
  label,
}: RatingProps) {
  const numericScore = Number(Number(score).toFixed(1));
  const textSize =
    size === "sm"
      ? "text-sm"
      : size === "lg"
        ? "text-2xl font-bold"
        : "text-base font-semibold";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <span className="text-xs text-[#6b7280] uppercase tracking-wide">
          {label}
        </span>
      )}
      <div className="flex items-center gap-2">
        {showNumber && (
          <span className={`text-[#111218] ${textSize} tabular-nums`}>
            {numericScore}
            <span className="text-[#6b7280] text-xs font-normal">/{max}</span>
          </span>
        )}
        <div className="flex-1 min-w-[60px]">
          <ScoreBar score={score} max={max} />
        </div>
      </div>
    </div>
  );
}

export function OverallScore({ score }: { score: number }) {
  const s = Number(score);
  if (isNaN(s)) return null;
  const circumference = 2 * Math.PI * 32;
  const progress = circumference - (circumference * s) / 10;
  const color = s >= 8.5 ? "#059669" : s >= 7 ? "#2563eb" : "#d97706";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="#e3e0d8"
            strokeWidth="7"
          />
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold font-mono" style={{ color }}>
            {s.toFixed(1)}
          </span>
          <span className="text-xs text-[#6b7280] leading-none">/10</span>
        </div>
      </div>
    </div>
  );
}
