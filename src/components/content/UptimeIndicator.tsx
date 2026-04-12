interface UptimeIndicatorProps {
  uptime: string;
  name: string;
}

function parseUptime(uptime: string): number {
  return parseFloat(uptime.replace("%", "")) || 0;
}

export function UptimeIndicator({ uptime, name }: UptimeIndicatorProps) {
  const value = parseUptime(uptime);
  const color =
    value >= 99.95
      ? "#059669"
      : value >= 99.9
        ? "#2563eb"
        : value >= 99.5
          ? "#d97706"
          : "#dc2626";
  const label =
    value >= 99.95
      ? "Excellent"
      : value >= 99.9
        ? "Très bon"
        : value >= 99.5
          ? "Correct"
          : "Insuffisant";

  return (
    <div className="flex items-center gap-3">
      <div
        className="w-2.5 h-2.5 rounded-full pulse-dot"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-[#6b7280]">{name}</span>
      <span className="font-mono text-sm font-semibold" style={{ color }}>
        {uptime}
      </span>
      <span
        className="text-xs px-2 py-0.5 rounded-full"
        style={{
          backgroundColor: color + "18",
          color,
        }}
      >
        {label}
      </span>
    </div>
  );
}

interface UptimeTableProps {
  data: Array<{ name: string; uptime: string }>;
}

export function UptimeTable({ data }: UptimeTableProps) {
  return (
    <div className="bg-white border border-[#e3e0d8] rounded-xl p-5 space-y-3">
      <p className="section-label">Disponibilité mesurée</p>
      {data.map((item) => (
        <UptimeIndicator key={item.name} {...item} />
      ))}
    </div>
  );
}
