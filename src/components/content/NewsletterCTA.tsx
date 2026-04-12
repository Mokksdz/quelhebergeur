"use client";

import { useState } from "react";

interface NewsletterCTAProps {
  variant?: "inline" | "section";
  className?: string;
  accentColor?: string;
}

export function NewsletterCTA({ variant = "inline", className = "", accentColor = "#059669" }: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`newsletter-cta flex items-center gap-3 ${className}`}>
        <span className="text-2xl">✅</span>
        <div>
          <p className="font-semibold text-[#111218] text-[15px]">C&apos;est noté !</p>
          <p className="text-[13px] text-[#6b7280]">Vous recevrez notre prochaine sélection très bientôt.</p>
        </div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <section className={`bg-[#111218] rounded-3xl px-8 py-10 text-center ${className}`}>
        <p className="section-label text-white/40 mb-3">Newsletter mensuelle</p>
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Le top 3 hébergeurs du mois.
        </h2>
        <p className="text-[14px] text-white/50 mb-6 max-w-sm mx-auto">
          Chaque mois, notre sélection + les meilleures promos hébergement. 100% gratuit.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#059669] text-[14px] transition-colors"
          />
          <button
            type="submit"
            className="affiliate-btn px-5 py-2.5 text-white font-semibold rounded-lg text-[14px] shrink-0"
            style={{ background: accentColor }}
          >
            S&apos;abonner
          </button>
        </form>
        <p className="text-[11px] text-white/25 mt-3" style={{ fontFamily: "var(--font-mono)" }}>Pas de spam · Désabonnement en 1 clic</p>
      </section>
    );
  }

  return (
    <div className={`newsletter-cta ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1">
          <p className="font-semibold text-[#111218] text-[15px] mb-1">📬 Recevez notre top 3 hébergeurs mensuel</p>
          <p className="text-[13px] text-[#6b7280]">Les meilleurs hébergeurs + les meilleures promos, chaque mois. Gratuit.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto shrink-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="flex-1 sm:w-48 px-3.5 py-2 rounded-lg border border-[#e3e0d8] bg-white text-[13px] focus:outline-none focus:border-[#059669] transition-colors"
          />
          <button type="submit" className="affiliate-btn px-4 py-2 text-white font-semibold rounded-lg text-[13px] shrink-0" style={{ background: accentColor }}>
            S&apos;abonner
          </button>
        </form>
      </div>
    </div>
  );
}
