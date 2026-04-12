interface SpeedEntry {
  name: string;
  ttfb: number; // ms
}

interface SpeedBenchmarkProps {
  data: SpeedEntry[];
  title?: string;
}

export function SpeedBenchmark({
  data,
  title = "Benchmark TTFB (Time to First Byte)",
}: SpeedBenchmarkProps) {
  const maxTtfb = Math.max(...data.map((d) => d.ttfb));

  const getColor = (ttfb: number) => {
    if (ttfb <= 200) return "#059669";
    if (ttfb <= 400) return "#2563eb";
    if (ttfb <= 700) return "#d97706";
    return "#dc2626";
  };

  const getLabel = (ttfb: number) => {
    if (ttfb <= 200) return "Excellent";
    if (ttfb <= 400) return "Bon";
    if (ttfb <= 700) return "Moyen";
    return "Lent";
  };

  const sorted = [...data].sort((a, b) => a.ttfb - b.ttfb);

  return (
    <div className="bg-white border border-[#e3e0d8] rounded-xl p-5">
      <p className="section-label mb-4">{title}</p>
      <div className="space-y-3">
        {sorted.map((entry) => {
          const pct = (entry.ttfb / maxTtfb) * 100;
          const color = getColor(entry.ttfb);
          return (
            <div key={entry.name} className="flex items-center gap-3">
              <span className="w-28 text-sm text-[#111218] font-medium shrink-0">
                {entry.name}
              </span>
              <div className="flex-1 bg-[#f0ede6] rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
              <span
                className="font-mono text-sm font-semibold w-16 text-right"
                style={{ color }}
              >
                {entry.ttfb}ms
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full w-20 text-center hidden sm:block"
                style={{ backgroundColor: color + "18", color }}
              >
                {getLabel(entry.ttfb)}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-[#6b7280] mt-4">
        Mesures effectuées depuis Paris en avril 2026 — moyenne sur 7 jours.
      </p>
    </div>
  );
}
