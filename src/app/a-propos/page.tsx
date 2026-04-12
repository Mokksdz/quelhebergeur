import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — QuelHébergeur",
  description:
    "QuelHébergeur est un comparatif indépendant d'hébergeurs web géré par VECTAR OÜ depuis l'Estonie.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1
        className="text-3xl font-normal text-[#111218] mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        À propos de QuelHébergeur
      </h1>

      <div className="prose prose-lg">
        <p>
          <strong>QuelHébergeur</strong> est un comparatif indépendant créé pour aider les entrepreneurs, freelances et développeurs francophones à choisir leur hébergeur web en toute connaissance de cause.
        </p>

        <h2>Notre mission</h2>
        <p>
          Nous testons les hébergeurs web en conditions réelles depuis des serveurs basés en France. Notre objectif est de vous donner des informations objectives, vérifiables et actualisées — sans parti pris commercial.
        </p>

        <h2>Comment nous évaluons</h2>
        <p>
          Chaque hébergeur est évalué selon 5 critères principaux :
        </p>
        <ul>
          <li><strong>Performance</strong> : TTFB, temps de chargement, réponse serveur</li>
          <li><strong>Support</strong> : réactivité, qualité des réponses, disponibilité</li>
          <li><strong>Prix</strong> : rapport qualité-prix, transparence tarifaire</li>
          <li><strong>Facilité</strong> : interface, installation, prise en main</li>
          <li><strong>Fonctionnalités</strong> : outils inclus, SSL, backups, etc.</li>
        </ul>

        <h2>Transparence sur les liens affiliés</h2>
        <p>
          Ce site contient des liens affiliés. Si vous cliquez sur un lien et souscrivez à une offre, nous percevons une commission de l&apos;hébergeur. Cela ne change rien à notre évaluation : nos avis restent basés sur des critères objectifs et nos tests sont conduits indépendamment.
        </p>

        <h2>À propos de VECTAR OÜ</h2>
        <p>
          QuelHébergeur est géré par <strong>VECTAR OÜ</strong>, une société enregistrée en Estonie. Nous gérons plusieurs sites de comparaison dans le secteur tech pour le marché francophone.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question, correction ou partenariat : contact via le site Comparia.fr.
        </p>
      </div>
    </div>
  );
}
