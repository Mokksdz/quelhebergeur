import { UptimeTable } from "./UptimeIndicator";

const data = [
  { name: "SiteGround", uptime: "99.99%" },
  { name: "Kinsta", uptime: "99.99%" },
  { name: "o2switch", uptime: "99.98%" },
  { name: "Hostinger", uptime: "99.95%" },
  { name: "Infomaniak", uptime: "99.94%" },
  { name: "OVH", uptime: "99.92%" },
  { name: "LWS", uptime: "99.90%" },
  { name: "IONOS", uptime: "99.90%" },
];

export function UptimeHebergeurs() {
  return <UptimeTable data={data} />;
}

const wpData = [
  { name: "Kinsta", uptime: "99.99%" },
  { name: "SiteGround", uptime: "99.99%" },
  { name: "Cloudways", uptime: "99.98%" },
  { name: "o2switch", uptime: "99.98%" },
  { name: "Hostinger", uptime: "99.95%" },
  { name: "Infomaniak", uptime: "99.94%" },
  { name: "OVH", uptime: "99.92%" },
  { name: "LWS", uptime: "99.90%" },
];

export function UptimeWordPress() {
  return <UptimeTable data={wpData} />;
}

const budgetData = [
  { name: "Hostinger", uptime: "99.95%" },
  { name: "OVH", uptime: "99.92%" },
  { name: "IONOS", uptime: "99.90%" },
  { name: "LWS", uptime: "99.90%" },
  { name: "PlanetHoster", uptime: "99.90%" },
];

export function UptimeBudget() {
  return <UptimeTable data={budgetData} />;
}

const ovhHostingerData = [
  { name: "Hostinger", uptime: "99.95%" },
  { name: "OVH", uptime: "99.92%" },
];

export function UptimeOvhHostinger() {
  return <UptimeTable data={ovhHostingerData} />;
}

const o2switchOvhData = [
  { name: "o2switch", uptime: "99.98%" },
  { name: "OVH", uptime: "99.92%" },
];

export function UptimeO2switchOvh() {
  return <UptimeTable data={o2switchOvhData} />;
}
