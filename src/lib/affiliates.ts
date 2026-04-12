export interface AffiliateLink {
  id: string;
  name: string;
  url: string;
  cta: string;
}

export const affiliateLinks: Record<string, AffiliateLink> = {
  hostinger: {
    id: "hostinger",
    name: "Hostinger",
    url: "#",
    cta: "Voir l'offre Hostinger",
  },
  ovh: {
    id: "ovh",
    name: "OVH",
    url: "#",
    cta: "Voir l'offre OVH",
  },
  o2switch: {
    id: "o2switch",
    name: "o2switch",
    url: "#",
    cta: "Voir l'offre o2switch",
  },
  infomaniak: {
    id: "infomaniak",
    name: "Infomaniak",
    url: "#",
    cta: "Voir l'offre Infomaniak",
  },
  lws: {
    id: "lws",
    name: "LWS",
    url: "#",
    cta: "Voir l'offre LWS",
  },
  siteground: {
    id: "siteground",
    name: "SiteGround",
    url: "#",
    cta: "Voir l'offre SiteGround",
  },
  cloudways: {
    id: "cloudways",
    name: "Cloudways",
    url: "#",
    cta: "Voir l'offre Cloudways",
  },
  kinsta: {
    id: "kinsta",
    name: "Kinsta",
    url: "#",
    cta: "Voir l'offre Kinsta",
  },
  hetzner: {
    id: "hetzner",
    name: "Hetzner",
    url: "#",
    cta: "Voir l'offre Hetzner",
  },
  ionos: {
    id: "ionos",
    name: "IONOS",
    url: "#",
    cta: "Voir l'offre IONOS",
  },
  planethoster: {
    id: "planethoster",
    name: "PlanetHoster",
    url: "#",
    cta: "Voir l'offre PlanetHoster",
  },
  scaleway: {
    id: "scaleway",
    name: "Scaleway",
    url: "#",
    cta: "Voir l'offre Scaleway",
  },
};

export function getAffiliateLink(id: string): AffiliateLink | null {
  return affiliateLinks[id] ?? null;
}
