"use client";

import { useState } from "react";
import Link from "next/link";
import { hostings, type Hosting } from "@/lib/hostings";
import { AffiliateButton } from "@/components/content/AffiliateButton";

const CRITERIA = [
  { key: "performance",     label: "Performance" },
  { key: "support",         label: "Support" },
  { key: "prix",            label: "Rapport prix" },
  { key: "facilite",        label: "Facilité d'usage" },
  { key: "fonctionnalites", label: "Fonctionnalités" },
  { key: "overall",         label: "Note globale" },
] as const;

type CriterionKey = (typeof CRITERIA)[number]["key"];

function ScoreRow({ label, a, b }: { label: string; a: number; b: number }) {
  const better = a > b ? "a" : b > a ? "b" : "tie";
  const maxVal = Math.max(a, b, 6);

  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#f0ede6] last:border-0">
      <span className="text-[12px] text-[#6b7280] w-28 sm:w-36 shrink-0">{label}</span>

      {/* Left bar */}
      <div className="flex-1 flex items-center justify-end gap-2">
        <span
          className="text-[13px] font-bold tabular-nums"
          style={{ fontFamily: "var(--font-mono)", color: better === "a" ? "#059669" : "#6b7280" }}
        >
          {a.toFixed(1)}
        </span>
        <div className="w-20 sm:w-28 h-2 bg-[#f0ede6] rounded-full overflow-hidden flex justify-end">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${(a / maxVal) * 100}%`,
              background: better === "a" ? "#059669" : "#94a3b8",
            }}
          />
        </div>
      </div>

      {/* VS badge */}
      <div className="shrink-0 w-6 text-center text-[10px] font-bold text-[#9ca3af]">vs</div>

      {/* Right bar */}
      <div className="flex-1 flex items-center gap-2">
        <div className="w-20 sm:w-28 h-2 bg-[#f0ede6] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${(b / maxVal) * 100}%`,
              background: better === "b" ? "#059669" : "#94a3b8",
            }}
          />
        </div>
        <span
          className="text-[13px] font-bold tabular-nums"
          style={{ fontFamily: "var(--font-mono)", color: better === "b" ? "#059669" : "#6b7280" }}
        >
          {b.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

function HostingSelector({
  value,
  onChange,
  exclude,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  exclude: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wide text-[#6b7280] mb-2">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#e3e0d8] rounded-lg px-3 py-2.5 text-[14px] text-[#111218] bg-white focus:outline-none focus:border-[#059669] cursor-pointer"
      >
        {hostings
          .filter((h) => h.id !== exclude)
          .map((h) => (
            <option key={h.id} value={h.id}>
              {h.name} — {h.scores.overall.toFixed(1)}/10
            </option>
          ))}
      </select>
    </div>
  );
}

export default function ComparerPage() {
  const [idA, setIdA] = useState("hostinger");
  const [idB, setIdB] = useState("o2switch");

  const ha = hostings.find((h) => h.id === idA)!;
  const hb = hostings.find((h) => h.id === idB)!;

  // Count wins per hosting
  const winsA = CRITERIA.filter((c) => ha.scores[c.key as CriterionKey] > hb.scores[c.key as CriterionKey]).length;
  const winsB = CRITERIA.filter((c) => hb.scores[c.key as CriterionKey] > ha.scores[c.key as CriterionKey]).length;
  const winner: "a" | "b" | "tie" = winsA > winsB ? "a" : winsB > winsA ? "b" : "tie";

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* Hero */}
      <div className="hero-editorial py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-white/40 mb-3">Outil gratuit</p>
          <h1
            className="text-4xl sm:text-5xl font-normal text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comparez deux hébergeurs
          </h1>
          <p className="text-[15px] text-white/55">
            Sélectionnez deux hébergeurs pour les comparer côte à côte sur tous les critères.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Selectors */}
        <div className="bg-white border border-[#e3e0d8] rounded-xl p-5 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <HostingSelector value={idA} onChange={setIdA} exclude={idB} label="Hébergeur A" />
          <div className="hidden sm:flex items-end justify-center pb-2">
            <span
              className="text-[13px] font-bold text-[#6b7280]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              VS
            </span>
          </div>
          <HostingSelector value={idB} onChange={setIdB} exclude={idA} label="Hébergeur B" />
        </div>

        {/* Winner banner */}
        {winner !== "tie" && (
          <div
            className="rounded-xl p-5 mb-8 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg,#111218,#064e3b)" }}
          >
            <span className="text-3xl">🏆</span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-white/40 mb-0.5">Vainqueur global</p>
              <p
                className="text-[22px] font-normal text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {winner === "a" ? ha.name : hb.name}
              </p>
              <p className="text-[13px] text-white/50">
                {winner === "a" ? winsA : winsB} critères remportés sur {CRITERIA.length}
              </p>
            </div>
          </div>
        )}

        {/* Score comparison */}
        <div className="bg-white border border-[#e3e0d8] rounded-xl overflow-hidden mb-6">
          {/* Header row */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-[#e3e0d8] bg-[#f8f6f1]">
            <span className="w-28 sm:w-36 shrink-0" />
            <div className="flex-1 text-right">
              <p
                className="text-[15px] font-normal text-[#111218]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {ha.name}
              </p>
              <p className="text-[11px] text-[#6b7280]">{ha.type.join(" · ")}</p>
            </div>
            <div className="w-6" />
            <div className="flex-1">
              <p
                className="text-[15px] font-normal text-[#111218]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {hb.name}
              </p>
              <p className="text-[11px] text-[#6b7280]">{hb.type.join(" · ")}</p>
            </div>
          </div>

          <div className="px-5">
            {CRITERIA.map((c) => (
              <ScoreRow
                key={c.key}
                label={c.label}
                a={ha.scores[c.key as CriterionKey]}
                b={hb.scores[c.key as CriterionKey]}
              />
            ))}
          </div>
        </div>

        {/* Specs comparison */}
        <div className="bg-white border border-[#e3e0d8] rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-[#e3e0d8] bg-[#f8f6f1]">
            <p className="section-label">Spécifications techniques</p>
          </div>
          <div className="divide-y divide-[#f0ede6]">
            {[
              { label: "Prix de départ", a: ha.pricing.starter !== null ? `${ha.pricing.starter}€/mois` : "Sur devis", b: hb.pricing.starter !== null ? `${hb.pricing.starter}€/mois` : "Sur devis" },
              { label: "Stockage", a: ha.specs.storage, b: hb.specs.storage },
              { label: "Bande passante", a: ha.specs.bandwidth, b: hb.specs.bandwidth },
              { label: "Domaines", a: ha.specs.domains === 999 ? "Illimité" : String(ha.specs.domains), b: hb.specs.domains === 999 ? "Illimité" : String(hb.specs.domains) },
              { label: "Uptime garanti", a: ha.specs.uptime, b: hb.specs.uptime },
              { label: "Sauvegardes", a: ha.specs.backup, b: hb.specs.backup },
              { label: "Datacenters", a: ha.specs.datacenter.join(", "), b: hb.specs.datacenter.join(", ") },
              { label: "SSL gratuit", a: ha.specs.ssl ? "✓ Oui" : "✗ Non", b: hb.specs.ssl ? "✓ Oui" : "✗ Non" },
              { label: "Essai gratuit", a: ha.pricing.free_trial ? "✓ Oui" : "✗ Non", b: hb.pricing.free_trial ? "✓ Oui" : "✗ Non" },
            ].map(({ label, a, b }) => (
              <div key={label} className="flex px-5 py-3 text-[13px]">
                <span className="text-[#6b7280] w-36 shrink-0">{label}</span>
                <span className="flex-1 font-medium text-[#111218]">{a}</span>
                <span className="flex-1 font-medium text-[#111218]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pros/Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[{ h: ha, side: "A" }, { h: hb, side: "B" }].map(({ h }) => (
            <div key={h.id} className="bg-white border border-[#e3e0d8] rounded-xl p-5">
              <h3
                className="text-lg font-normal text-[#111218] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {h.name}
              </h3>
              <div className="mb-3">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#059669] mb-2">Points forts</p>
                <ul className="space-y-1.5">
                  {h.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-[#374151]">
                      <span className="text-[#059669] mt-0.5 shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#dc2626] mb-2">Points faibles</p>
                <ul className="space-y-1.5">
                  {h.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[13px] text-[#374151]">
                      <span className="text-[#dc2626] mt-0.5 shrink-0">✗</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[ha, hb].map((h) => (
            <div key={h.id} className="bg-white border border-[#e3e0d8] rounded-xl p-4 flex flex-col gap-3">
              <p
                className="text-[15px] font-normal text-[#111218]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Choisir {h.name}
              </p>
              {h.pricing.starter !== null && (
                <p className="text-[13px] text-[#6b7280]">
                  À partir de <strong className="text-[#111218]">{h.pricing.starter}€/mois</strong>
                </p>
              )}
              <AffiliateButton affiliateId={h.affiliateId} size="sm" className="justify-center" />
              <Link href={`/avis/${h.slug}`} className="text-center text-[12px] text-[#6b7280] hover:text-[#059669]">
                Lire l&apos;avis complet →
              </Link>
            </div>
          ))}
        </div>

        {/* Quiz cross-link */}
        <div className="text-center py-8 border-t border-[#e3e0d8]">
          <p className="text-[14px] text-[#6b7280] mb-3">Vous ne savez pas encore lequel choisir ?</p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111218] text-white text-[14px] font-semibold rounded-lg hover:bg-[#059669] transition-colors"
          >
            Faire le quiz — trouver mon hébergeur →
          </Link>
        </div>
      </div>
    </div>
  );
}
