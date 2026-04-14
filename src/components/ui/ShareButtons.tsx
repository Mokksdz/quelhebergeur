"use client";
import { useState } from "react";

export function ShareButtons({ title, url }: { title: string; url?: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl =
    url ?? (typeof window !== "undefined" ? window.location.href : "");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-[#737369] font-medium">Partager :</span>
      <button
        onClick={copyLink}
        className="px-3 py-1.5 text-xs font-medium border border-[#E8E8E3] dark:border-[#2E2E2E] rounded-lg text-[#737369] hover:border-[#059669] hover:text-[#059669] transition-colors"
      >
        {copied ? "✓ Copié !" : "Copier le lien"}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 text-xs font-medium border border-[#E8E8E3] dark:border-[#2E2E2E] rounded-lg text-[#737369] hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors"
      >
        Twitter/X
      </a>
      <a
        href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 text-xs font-medium border border-[#E8E8E3] dark:border-[#2E2E2E] rounded-lg text-[#737369] hover:border-[#0077B5] hover:text-[#0077B5] transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 text-xs font-medium border border-[#E8E8E3] dark:border-[#2E2E2E] rounded-lg text-[#737369] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
      >
        WhatsApp
      </a>
    </div>
  );
}
