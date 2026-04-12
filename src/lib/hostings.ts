export interface Hosting {
  id: string;
  name: string;
  slug: string;
  type: string[];
  pricing: { starter: number | null; pro: number | null; free_trial: boolean };
  specs: {
    storage: string;
    bandwidth: string;
    domains: number;
    ssl: boolean;
    backup: string;
    uptime: string;
    datacenter: string[];
  };
  scores: {
    performance: number;
    support: number;
    prix: number;
    facilite: number;
    fonctionnalites: number;
    overall: number;
  };
  pros: string[];
  cons: string[];
  verdict: string;
  affiliateId: string;
  lastTested: string;
  badge?: "best" | "value" | "fast" | null;
}

export const hostings: Hosting[] = [
  {
    id: "hostinger",
    name: "Hostinger",
    slug: "hostinger",
    type: ["mutualisé", "wordpress", "cloud"],
    pricing: { starter: 2.99, pro: 5.99, free_trial: false },
    specs: {
      storage: "100 Go SSD",
      bandwidth: "Illimitée",
      domains: 1,
      ssl: true,
      backup: "Hebdomadaire",
      uptime: "99.9%",
      datacenter: ["France", "Pays-Bas", "Lituanie"],
    },
    scores: {
      performance: 9.0,
      support: 8.5,
      prix: 9.8,
      facilite: 9.2,
      fonctionnalites: 8.8,
      overall: 9.1,
    },
    pros: [
      "Tarif imbattable à 2.99€/mois",
      "Interface hPanel très intuitive",
      "Performance solide (LiteSpeed)",
      "Installation WordPress en 1 clic",
      "SSL gratuit inclus",
    ],
    cons: [
      "Support limité en français",
      "Renouvellement plus cher",
      "Pas de datacenter exclusivement français",
    ],
    verdict:
      "Hostinger est notre choix numéro 1 pour le rapport qualité-prix. Idéal pour les débutants et les petits projets qui veulent une solution performante sans se ruiner.",
    affiliateId: "hostinger",
    lastTested: "2026-04-01",
    badge: "best",
  },
  {
    id: "ovh",
    name: "OVH",
    slug: "ovh",
    type: ["mutualisé", "wordpress", "vps", "dédié"],
    pricing: { starter: 3.99, pro: 7.99, free_trial: false },
    specs: {
      storage: "100 Go SSD",
      bandwidth: "Illimitée",
      domains: 1,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.9%",
      datacenter: ["France", "Canada"],
    },
    scores: {
      performance: 8.2,
      support: 7.5,
      prix: 8.0,
      facilite: 7.5,
      fonctionnalites: 8.5,
      overall: 8.0,
    },
    pros: [
      "Datacenter en France",
      "Gamme complète (mutualisé au dédié)",
      "Hébergeur français historique",
      "Prix compétitifs",
      "Bonne réputation pour la conformité RGPD",
    ],
    cons: [
      "Interface vieillissante",
      "Support parfois lent",
      "Performances variables selon offres",
    ],
    verdict:
      "OVH reste la référence française avec ses datacenters hexagonaux. Excellent choix pour les entreprises soucieuses de la souveraineté des données.",
    affiliateId: "ovh",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "o2switch",
    name: "o2switch",
    slug: "o2switch",
    type: ["mutualisé", "wordpress"],
    pricing: { starter: 7.99, pro: 7.99, free_trial: false },
    specs: {
      storage: "Illimitée",
      bandwidth: "Illimitée",
      domains: 999,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.98%",
      datacenter: ["France"],
    },
    scores: {
      performance: 9.2,
      support: 9.5,
      prix: 7.5,
      facilite: 8.8,
      fonctionnalites: 9.3,
      overall: 9.0,
    },
    pros: [
      "Support client exceptionnel (FR)",
      "Performances excellentes",
      "Hébergement illimité (sites, domaines, emails)",
      "Datacenter 100% en France",
      "Uptime remarquable (99.98%)",
    ],
    cons: [
      "Tarif unique plus élevé",
      "Pas d'offre d'entrée de gamme",
      "Interface cPanel standard",
    ],
    verdict:
      "o2switch est l'hébergeur français par excellence. Son support client exceptionnel et ses performances en font le choix idéal pour les professionnels exigeants.",
    affiliateId: "o2switch",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "infomaniak",
    name: "Infomaniak",
    slug: "infomaniak",
    type: ["mutualisé", "wordpress", "cloud"],
    pricing: { starter: 6.75, pro: 13.75, free_trial: false },
    specs: {
      storage: "100 Go SSD",
      bandwidth: "Illimitée",
      domains: 1,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.9%",
      datacenter: ["Suisse"],
    },
    scores: {
      performance: 8.8,
      support: 9.0,
      prix: 7.0,
      facilite: 8.5,
      fonctionnalites: 9.0,
      overall: 8.7,
    },
    pros: [
      "Hébergeur éthique certifié",
      "Datacenter en Suisse (confidentialité)",
      "Excellent support francophone",
      "Aucune publicité, 100% indépendant",
      "Engagement environnemental fort",
    ],
    cons: [
      "Tarifs plus élevés que la concurrence",
      "Datacenter hors UE (Suisse)",
      "Moins de fonctionnalités avancées",
    ],
    verdict:
      "Infomaniak est le choix éthique par excellence. Hébergeur suisse indépendant, il séduit les entreprises qui cherchent fiabilité, confidentialité et engagement écologique.",
    affiliateId: "infomaniak",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "lws",
    name: "LWS",
    slug: "lws",
    type: ["mutualisé", "wordpress"],
    pricing: { starter: 1.99, pro: 4.99, free_trial: false },
    specs: {
      storage: "50 Go SSD",
      bandwidth: "Illimitée",
      domains: 1,
      ssl: true,
      backup: "Hebdomadaire",
      uptime: "99.9%",
      datacenter: ["France"],
    },
    scores: {
      performance: 7.5,
      support: 7.8,
      prix: 9.5,
      facilite: 8.0,
      fonctionnalites: 7.5,
      overall: 7.8,
    },
    pros: [
      "Prix d'entrée très bas (1.99€/mois)",
      "Datacenter en France",
      "Support téléphonique en français",
      "Bonne disponibilité",
    ],
    cons: [
      "Performances moyennes",
      "Stockage limité sur l'entrée de gamme",
      "Interface vieillissante",
    ],
    verdict:
      "LWS est le choix budget avec datacenter français. Idéal pour les petits projets cherchant un hébergeur hexagonal à prix minimal.",
    affiliateId: "lws",
    lastTested: "2026-04-01",
    badge: "value",
  },
  {
    id: "siteground",
    name: "SiteGround",
    slug: "siteground",
    type: ["mutualisé", "wordpress", "cloud"],
    pricing: { starter: 3.99, pro: 7.99, free_trial: false },
    specs: {
      storage: "10 Go SSD",
      bandwidth: "Illimitée",
      domains: 1,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.99%",
      datacenter: ["France", "Pays-Bas", "Singapour"],
    },
    scores: {
      performance: 9.3,
      support: 9.2,
      prix: 7.5,
      facilite: 9.0,
      fonctionnalites: 9.0,
      overall: 9.0,
    },
    pros: [
      "Performance WordPress exceptionnelle",
      "Support 24/7 ultra-réactif",
      "Sécurité avancée incluse",
      "Technologie SG Optimizer",
      "Uptime 99.99%",
    ],
    cons: [
      "Stockage limité sur entrée de gamme",
      "Renouvellement très cher",
      "Rapport qualité-prix à surveiller",
    ],
    verdict:
      "SiteGround excelle pour WordPress avec des performances top et un support irréprochable. Attention aux tarifs de renouvellement élevés.",
    affiliateId: "siteground",
    lastTested: "2026-04-01",
    badge: "fast",
  },
  {
    id: "cloudways",
    name: "Cloudways",
    slug: "cloudways",
    type: ["cloud", "wordpress", "vps"],
    pricing: { starter: 11, pro: 22, free_trial: true },
    specs: {
      storage: "25 Go SSD",
      bandwidth: "1 To",
      domains: 999,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.99%",
      datacenter: ["France", "USA", "Singapore", "Australie"],
    },
    scores: {
      performance: 9.5,
      support: 8.8,
      prix: 6.5,
      facilite: 8.0,
      fonctionnalites: 9.5,
      overall: 8.8,
    },
    pros: [
      "Performance cloud exceptionnelle",
      "Choix du fournisseur cloud (AWS, GCP, DO)",
      "Essai gratuit 3 jours",
      "Scalabilité facile",
      "Monitoring intégré",
    ],
    cons: [
      "Tarif élevé pour débutants",
      "Courbe d'apprentissage",
      "Facturation complexe",
    ],
    verdict:
      "Cloudways est la solution cloud managée parfaite pour les agences et développeurs. Performance maximale mais tarif plus élevé justifié par la puissance.",
    affiliateId: "cloudways",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "kinsta",
    name: "Kinsta",
    slug: "kinsta",
    type: ["wordpress", "cloud"],
    pricing: { starter: 24, pro: 45, free_trial: false },
    specs: {
      storage: "10 Go SSD",
      bandwidth: "25 Go CDN",
      domains: 1,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.9%",
      datacenter: ["France", "35 localisations"],
    },
    scores: {
      performance: 9.8,
      support: 9.5,
      prix: 5.0,
      facilite: 9.3,
      fonctionnalites: 9.8,
      overall: 9.2,
    },
    pros: [
      "Meilleure performance WordPress du marché",
      "Support expert WordPress 24/7",
      "Infrastructure Google Cloud",
      "Tableau de bord My Kinsta excellent",
      "35 datacenters mondiaux",
    ],
    cons: [
      "Tarif premium très élevé",
      "Uniquement WordPress",
      "Limites de visiteurs strictes",
    ],
    verdict:
      "Kinsta est le Rolls-Royce de l'hébergement WordPress. Performance et support irréprochables pour les sites à fort trafic, si le budget n'est pas un problème.",
    affiliateId: "kinsta",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "hetzner",
    name: "Hetzner",
    slug: "hetzner",
    type: ["vps", "dédié", "cloud"],
    pricing: { starter: 4.15, pro: 12.9, free_trial: false },
    specs: {
      storage: "40 Go NVMe",
      bandwidth: "20 To",
      domains: 999,
      ssl: false,
      backup: "Optionnel",
      uptime: "99.9%",
      datacenter: ["Allemagne", "Finlande"],
    },
    scores: {
      performance: 9.2,
      support: 7.5,
      prix: 9.5,
      facilite: 7.0,
      fonctionnalites: 8.5,
      overall: 8.5,
    },
    pros: [
      "Rapport performance/prix exceptionnel",
      "Serveurs NVMe ultra-rapides",
      "Infrastructure européenne fiable",
      "Large bande passante incluse",
      "Idéal pour développeurs",
    ],
    cons: [
      "Demande des compétences techniques",
      "Support moins disponible",
      "Pas d'hébergement mutualisé",
      "SSL non inclus par défaut",
    ],
    verdict:
      "Hetzner est le choix des développeurs avertis cherchant une puissance maximale pour un budget minimal. VPS et serveurs dédiés de haute qualité.",
    affiliateId: "hetzner",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "ionos",
    name: "IONOS",
    slug: "ionos",
    type: ["mutualisé", "wordpress", "vps"],
    pricing: { starter: 1, pro: 4, free_trial: false },
    specs: {
      storage: "50 Go SSD",
      bandwidth: "Illimitée",
      domains: 1,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.99%",
      datacenter: ["France", "Allemagne"],
    },
    scores: {
      performance: 7.8,
      support: 7.0,
      prix: 9.8,
      facilite: 8.0,
      fonctionnalites: 7.5,
      overall: 7.5,
    },
    pros: [
      "Prix d'appel imbattable (1€/mois)",
      "Domaine offert la première année",
      "Datacenter en France",
      "SSL gratuit",
      "Uptime 99.99% garanti",
    ],
    cons: [
      "Renouvellement beaucoup plus cher",
      "Support qualité variable",
      "Performances moyennes",
      "Engagement requis",
    ],
    verdict:
      "IONOS attire par son prix d'entrée 1€/mois, mais attention au renouvellement. Bon pour commencer un projet à moindre coût.",
    affiliateId: "ionos",
    lastTested: "2026-04-01",
    badge: null,
  },
  {
    id: "planethoster",
    name: "PlanetHoster",
    slug: "planethoster",
    type: ["mutualisé", "wordpress", "cloud"],
    pricing: { starter: 3.99, pro: 9.99, free_trial: false },
    specs: {
      storage: "Illimitée",
      bandwidth: "Illimitée",
      domains: 999,
      ssl: true,
      backup: "Quotidien",
      uptime: "99.9%",
      datacenter: ["France", "Canada"],
    },
    scores: {
      performance: 8.5,
      support: 8.8,
      prix: 8.0,
      facilite: 8.5,
      fonctionnalites: 8.8,
      overall: 8.5,
    },
    pros: [
      "Hébergement illimité (sites, domaines)",
      "Support francophone excellent",
      "Datacenters France et Canada",
      "Bonne performance globale",
      "Technologie HybridCloud",
    ],
    cons: [
      "Moins connu que les grandes marques",
      "Interface HPanel perfectible",
      "Prix de renouvellement en hausse",
    ],
    verdict:
      "PlanetHoster offre un excellent hébergement illimité avec support francophone. Bonne alternative à o2switch pour un tarif légèrement inférieur.",
    affiliateId: "planethoster",
    lastTested: "2026-04-01",
    badge: null,
  },
];

export function getHostingById(id: string): Hosting | undefined {
  return hostings.find((h) => h.id === id);
}

export function getHostingBySlug(slug: string): Hosting | undefined {
  return hostings.find((h) => h.slug === slug);
}

export function getHostingsByType(type: string): Hosting[] {
  return hostings.filter((h) => h.type.includes(type));
}

export function getFeaturedHostings(count = 4): Hosting[] {
  return hostings
    .filter((h) => h.badge)
    .concat(hostings.filter((h) => !h.badge))
    .slice(0, count);
}
