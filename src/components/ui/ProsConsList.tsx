interface ProsConsListProps {
  pros: string[];
  cons: string[];
}

export function ProsConsList({ pros, cons }: ProsConsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-[#ecfdf5] border border-[#059669]/20 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-[#059669] mb-3 flex items-center gap-1.5">
          <span>✓</span> Points forts
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#111218]">
              <span className="text-[#059669] shrink-0 mt-0.5">+</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 border border-red-200/60 rounded-xl p-4">
        <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-1.5">
          <span>✗</span> Points faibles
        </h4>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#111218]">
              <span className="text-red-500 shrink-0 mt-0.5">-</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
