import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthodologie — Comment nous testons les hébergeurs",
  description:
    "Découvrez comment QuelHébergeur évalue et teste les hébergeurs web : critères, protocoles de mesure et grille de notation.",
};

const criteria = [
  {
    name: "Performance",
    weight: "30%",
    description:
      "Mesure du TTFB (Time to First Byte), temps de chargement d'une page WordPress standard, réponse serveur. Tests effectués depuis Paris sur 30 jours.",
    icon: "⚡",
  },
  {
    name: "Support client",
    weight: "20%",
    description:
      "Évaluation par tickets, chat et téléphone. Nous mesurons le temps de réponse moyen, la pertinence des réponses et la disponibilité francophone.",
    icon: "💬",
  },
  {
    name: "Rapport qualité/prix",
    weight: "20%",
    description:
      "Analyse des offres d'entrée de gamme et professionnelles, transparence sur le renouvellement, rapport fonctionnalités/prix.",
    icon: "💰",
  },
  {
    name: "Facilité d'utilisation",
    weight: "15%",
    description:
      "Prise en main du panneau de contrôle, installation WordPress en 1 clic, gestion des DNS et emails, courbe d'apprentissage.",
    icon: "🎯",
  },
  {
    name: "Fonctionnalités",
    weight: "15%",
    description:
      "SSL inclus, backups automatiques, CDN, staging, accès SSH, nombre de domaines, stockage, bande passante.",
    icon: "🔧",
  },
];

export default function MetodologiePage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="section-label mb-2">Transparence</p>
        <h1
          className="text-3xl font-normal text-[#111218] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Notre méthodologie de test
        </h1>
        <p className="text-lg text-[#6b7280]">
          Comment nous évaluons les hébergeurs web en 2026.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-[#ecfdf5] border border-[#059669]/20 rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-[#059669] mb-2">En résumé</h2>
        <p className="text-sm text-[#111218] leading-relaxed">
          Chaque hébergeur est testé pendant au moins 30 jours avec un site WordPress réel hébergé sur l&apos;offre d&apos;entrée de gamme. Nous mesurons les performances depuis Paris, contactons le support en français, et analysons la transparence tarifaire. La note globale est une moyenne pondérée de 5 critères.
        </p>
      </div>

      {/* Criteria */}
      <h2
        className="text-2xl font-normal text-[#111218] mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Les 5 critères d&apos;évaluation
      </h2>
      <div className="space-y-4 mb-10">
        {criteria.map((criterion) => (
          <div
            key={criterion.name}
            className="bg-white border border-[#e3e0d8] rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{criterion.icon}</span>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[#111218]">{criterion.name}</h3>
                <span className="text-xs px-2 py-0.5 bg-[#ecfdf5] text-[#059669] rounded-full font-mono font-semibold">
                  {criterion.weight}
                </span>
              </div>
            </div>
            <p className="text-sm text-[#6b7280] leading-relaxed ml-8">
              {criterion.description}
            </p>
          </div>
        ))}
      </div>

      {/* Technical setup */}
      <div className="prose prose-lg">
        <h2>Configuration technique</h2>
        <ul>
          <li>Serveur de monitoring : Paris, France (OVH)</li>
          <li>Site de test : WordPress 6.x + 10 plugins standards</li>
          <li>Outil de mesure : Uptime Robot + GTmetrix + mesures manuelles</li>
          <li>Fréquence : toutes les 5 minutes pour l&apos;uptime</li>
          <li>Durée minimale : 30 jours consécutifs</li>
        </ul>

        <h2>Grille de notation</h2>
        <ul>
          <li><strong>9-10</strong> : Excellent — meilleur de sa catégorie</li>
          <li><strong>7-8.9</strong> : Bon — recommandé</li>
          <li><strong>5-6.9</strong> : Moyen — acceptable avec réserves</li>
          <li><strong>Moins de 5</strong> : Insuffisant — déconseillé</li>
        </ul>

        <h2>Mise à jour des avis</h2>
        <p>
          Tous nos avis sont réévalués au minimum tous les 6 mois, ou lors de changements tarifaires ou techniques majeurs. La date de dernière mise à jour est indiquée sur chaque fiche.
        </p>
      </div>
    </div>
  );
}
