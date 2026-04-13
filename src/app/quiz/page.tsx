"use client";

import { useState } from "react";
import Link from "next/link";
import { hostings } from "@/lib/hostings";
import { AffiliateButton } from "@/components/content/AffiliateButton";

const QUESTIONS = [
  {
    id: "usage",
    question: "Quel est votre projet principal ?",
    options: [
      { label: "Site vitrine ou blog perso", value: "blog", scores: { hostinger: 3, lws: 3, ionos: 2, ovh: 1, planethoster: 1 } },
      { label: "Site WordPress pour mon business", value: "wp", scores: { o2switch: 3, siteground: 3, hostinger: 2, infomaniak: 2, kinsta: 1 } },
      { label: "Boutique e-commerce", value: "ecom", scores: { siteground: 3, kinsta: 3, cloudways: 2, o2switch: 2, infomaniak: 1 } },
      { label: "Application web / dev", value: "app", scores: { hetzner: 3, cloudways: 3, infomaniak: 2, ovh: 1 } },
    ],
  },
  {
    id: "budget",
    question: "Quel budget mensuel vous convient ?",
    options: [
      { label: "Moins de 3€/mois", value: "low", scores: { ionos: 3, lws: 3, hostinger: 2 } },
      { label: "3€ à 7€/mois", value: "mid", scores: { hostinger: 3, ovh: 2, siteground: 2, o2switch: 1, hetzner: 1 } },
      { label: "7€ à 15€/mois", value: "high", scores: { o2switch: 3, infomaniak: 3, planethoster: 2, cloudways: 1 } },
      { label: "15€+ (performance avant tout)", value: "premium", scores: { kinsta: 3, cloudways: 3, siteground: 2 } },
    ],
  },
  {
    id: "priority",
    question: "Qu'est-ce qui compte le plus pour vous ?",
    options: [
      { label: "Le prix le plus bas", value: "price", scores: { ionos: 3, lws: 3, hostinger: 2, hetzner: 1 } },
      { label: "La rapidité et performance", value: "perf", scores: { kinsta: 3, siteground: 3, cloudways: 3, o2switch: 2, hetzner: 2 } },
      { label: "Le support en français", value: "support", scores: { o2switch: 3, infomaniak: 3, planethoster: 2, lws: 2 } },
      { label: "Hébergeur éthique / francophone", value: "ethical", scores: { infomaniak: 3, o2switch: 3, ovh: 2 } },
    ],
  },
  {
    id: "level",
    question: "Quel est votre niveau technique ?",
    options: [
      { label: "Débutant complet", value: "beginner", scores: { hostinger: 3, siteground: 2, ionos: 2 } },
      { label: "Je sais utiliser WordPress", value: "wp_user", scores: { o2switch: 3, hostinger: 2, planethoster: 2, infomaniak: 1 } },
      { label: "Développeur / technique", value: "dev", scores: { hetzner: 3, cloudways: 3, ovh: 2, infomaniak: 1 } },
      { label: "Je gère une équipe / agence", value: "agency", scores: { kinsta: 3, cloudways: 3, siteground: 2 } },
    ],
  },
];

type Scores = Record<string, number>;

function computeResults(answers: Record<string, string>): string[] {
  const totals: Scores = {};
  for (const [qid, val] of Object.entries(answers)) {
    const q = QUESTIONS.find((q) => q.id === qid);
    if (!q) continue;
    const opt = q.options.find((o) => o.value === val);
    if (!opt) continue;
    for (const [slug, pts] of Object.entries(opt.scores)) {
      totals[slug] = (totals[slug] || 0) + pts;
    }
  }
  return Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([slug]) => slug);
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const q = QUESTIONS[step];
  const totalSteps = QUESTIONS.length;
  const progress = (step / totalSteps) * 100;

  const choose = (val: string) => {
    const newAnswers = { ...answers, [q.id]: val };
    setAnswers(newAnswers);
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setResults(computeResults(newAnswers));
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* Hero */}
      <div className="hero-editorial py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label text-white/40 mb-3">Outil gratuit</p>
          <h1
            className="text-4xl sm:text-5xl font-normal text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Quel hébergeur<br />vous correspond ?
          </h1>
          <p className="text-[15px] text-white/55">
            4 questions pour identifier l&apos;hébergeur web idéal selon votre projet et votre budget.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {!done ? (
          <div className="bg-white border border-[#e3e0d8] rounded-2xl overflow-hidden shadow-sm">
            {/* Progress */}
            <div className="h-1 bg-[#f0ede6]">
              <div
                className="h-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg,#059669,#34d399)" }}
              />
            </div>

            <div className="p-8 sm:p-10">
              {/* Step indicator */}
              <p className="section-label mb-5">
                Question {step + 1} / {totalSteps}
              </p>

              <h2
                className="text-2xl sm:text-3xl font-normal text-[#111218] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {q.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => choose(opt.value)}
                    className="w-full text-left px-5 py-4 rounded-xl border-2 border-[#e3e0d8] bg-[#f8f6f1] hover:border-[#059669] hover:bg-[#ecfdf5] transition-all group"
                  >
                    <span className="text-[15px] font-medium text-[#111218] group-hover:text-[#059669] transition-colors">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Back */}
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-[13px] text-[#6b7280] hover:text-[#111218] transition-colors"
                >
                  ← Question précédente
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ecfdf5] text-[#059669] text-[13px] font-semibold rounded-full mb-4">
                ✓ Analyse terminée
              </span>
              <h2
                className="text-3xl font-normal text-[#111218]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nos recommandations pour vous
              </h2>
            </div>

            <div className="space-y-4">
              {results.map((slug, idx) => {
                const h = hostings.find((h) => h.id === slug);
                if (!h) return null;
                const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉";
                const label = idx === 0 ? "Recommandation principale" : idx === 1 ? "Très bon choix" : "Alternative";
                return (
                  <div
                    key={slug}
                    className={`bg-white border-2 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 ${
                      idx === 0 ? "border-[#059669]" : "border-[#e3e0d8]"
                    }`}
                  >
                    <div className="text-3xl">{medal}</div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wide mb-1">{label}</p>
                      <h3
                        className="text-xl font-normal text-[#111218] mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {h.name}
                      </h3>
                      <p className="text-[13px] text-[#6b7280] line-clamp-2">{h.verdict}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className="text-2xl font-bold tabular-nums"
                        style={{ fontFamily: "var(--font-mono)", color: "#059669" }}
                      >
                        {h.scores.overall.toFixed(1)}
                      </span>
                      <div className="flex flex-col gap-2">
                        <AffiliateButton affiliateId={h.affiliateId} size="sm" />
                        <Link
                          href={`/avis/${h.slug}`}
                          className="text-center text-[12px] text-[#6b7280] hover:text-[#059669]"
                        >
                          Voir l&apos;avis →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="px-5 py-2.5 border border-[#e3e0d8] rounded-lg text-[14px] text-[#6b7280] hover:text-[#111218] hover:border-[#111218] transition-colors"
              >
                ← Recommencer le quiz
              </button>
              <Link
                href="/comparatifs/meilleur-hebergeur-web"
                className="px-5 py-2.5 bg-[#059669] text-white rounded-lg text-[14px] font-semibold hover:bg-[#047857] transition-colors text-center"
              >
                Voir tout le comparatif →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
