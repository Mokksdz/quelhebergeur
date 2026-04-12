interface ProsConsListProps {
  pros: string[];
  cons: string[];
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" stroke="#059669" strokeOpacity="0.3" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#059669"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-draw"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" stroke="#dc2626" strokeOpacity="0.3" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="#dc2626"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="check-draw"
      />
    </svg>
  );
}

export function ProsConsList({ pros = [], cons = [] }: ProsConsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
      <div className="bg-[#ecfdf5] border border-[#059669]/20 rounded-xl p-5">
        <h4 className="text-[13px] font-semibold text-[#059669] mb-4 flex items-center gap-2 uppercase tracking-wide">
          <CheckIcon />
          Points forts
        </h4>
        <ul className="space-y-3">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#111218] leading-snug">
              <span className="shrink-0 mt-0.5"><CheckIcon /></span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 border border-red-200/60 rounded-xl p-5">
        <h4 className="text-[13px] font-semibold text-red-600 mb-4 flex items-center gap-2 uppercase tracking-wide">
          <CrossIcon />
          Points faibles
        </h4>
        <ul className="space-y-3">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#111218] leading-snug">
              <span className="shrink-0 mt-0.5"><CrossIcon /></span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
