import { SpeedBenchmark } from "./SpeedBenchmark";

const data = [
  { name: "Kinsta", ttfb: 155 },
  { name: "Hostinger", ttfb: 180 },
  { name: "SiteGround", ttfb: 195 },
  { name: "o2switch", ttfb: 210 },
  { name: "Infomaniak", ttfb: 245 },
  { name: "OVH", ttfb: 280 },
  { name: "IONOS", ttfb: 320 },
  { name: "LWS", ttfb: 350 },
];

export function SpeedBenchmarkHebergeurs() {
  return (
    <SpeedBenchmark
      data={data}
      title="TTFB moyen sur 30 jours (Paris → hébergeur)"
    />
  );
}

const wpData = [
  { name: "Kinsta", ttfb: 155 },
  { name: "Cloudways", ttfb: 185 },
  { name: "SiteGround", ttfb: 195 },
  { name: "Hostinger", ttfb: 220 },
  { name: "o2switch", ttfb: 235 },
  { name: "Infomaniak", ttfb: 260 },
  { name: "OVH", ttfb: 295 },
  { name: "LWS", ttfb: 380 },
];

export function SpeedBenchmarkWordPress() {
  return (
    <SpeedBenchmark
      data={wpData}
      title="TTFB WordPress sur 30 jours (Paris)"
    />
  );
}

const budgetData = [
  { name: "Hostinger", ttfb: 180 },
  { name: "PlanetHoster", ttfb: 265 },
  { name: "OVH", ttfb: 280 },
  { name: "IONOS", ttfb: 320 },
  { name: "LWS", ttfb: 350 },
];

export function SpeedBenchmarkBudget() {
  return (
    <SpeedBenchmark
      data={budgetData}
      title="TTFB comparé des hébergeurs budget (Paris)"
    />
  );
}

const ovhHostingerData = [
  { name: "Hostinger", ttfb: 180 },
  { name: "OVH", ttfb: 280 },
];

export function SpeedBenchmarkOvhHostinger() {
  return (
    <SpeedBenchmark
      data={ovhHostingerData}
      title="OVH vs Hostinger — TTFB mesuré depuis Paris"
    />
  );
}

const o2switchOvhData = [
  { name: "o2switch", ttfb: 210 },
  { name: "OVH", ttfb: 280 },
];

export function SpeedBenchmarkO2switchOvh() {
  return (
    <SpeedBenchmark
      data={o2switchOvhData}
      title="o2switch vs OVH — TTFB depuis Paris"
    />
  );
}
