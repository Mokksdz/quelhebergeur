import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-[#6b7280] flex-wrap">
      <Link href="/" className="hover:text-[#059669] transition-colors">
        Accueil
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <span className="text-[#e3e0d8]" aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-[#059669] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#111218] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
