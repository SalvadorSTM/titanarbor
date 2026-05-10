export const site = {
  name: "Titan Arbor Solutions",
  shortName: "Titan Arbor",
  tagline: "Professional tree care for metro Atlanta",
  published: false,
  description:
    "Locally owned tree care company in Georgia. Tree removal, trimming, pruning, stump grinding, debris hauling, disease diagnosis, and 24-hour emergency storm response.",
  url: "https://titanarbor.com",
  phonePrimary: "478-268-8020",
  phoneBackup: "803-845-8364",
  email: "diego@titanarbor.com",
  hours: "Mon–Sat, 7am–7pm · 24-hour emergency response",
  owner: {
    name: "Diego Zunun",
    role: "Owner & Lead Arborist",
    yearsExperience: 5,
  },
  legal: {
    state: "Georgia",
    entityType: "LLC",
    licensed: true,
    insured: true,
    isaCertifiedArborist: false,
    isaCandidateInProgress: true,
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: string;
  order: number;
};

export const services: Service[] = [
  {
    slug: "tree-removal",
    title: "Tree Removal",
    shortTitle: "Removal",
    summary:
      "Safe, complete removal of hazardous, dying, or unwanted trees from your property.",
    icon: "axe",
    order: 1,
  },
  {
    slug: "tree-trimming",
    title: "Tree Trimming",
    shortTitle: "Trimming",
    summary:
      "Selective branch removal to improve safety, clearance, and the natural shape of your trees.",
    icon: "scissors",
    order: 2,
  },
  {
    slug: "pruning",
    title: "Pruning",
    shortTitle: "Pruning",
    summary:
      "Targeted cuts that promote tree health, structure, and long-term growth.",
    icon: "leaf",
    order: 3,
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    shortTitle: "Stumps",
    summary:
      "Complete stump removal so you can replant, landscape, or simply reclaim the space.",
    icon: "grinder",
    order: 4,
  },
  {
    slug: "debris-hauling",
    title: "Debris Hauling",
    shortTitle: "Hauling",
    summary:
      "We clean up after every job — branches, logs, and brush hauled off so your yard is left ready.",
    icon: "truck",
    order: 5,
  },
  {
    slug: "disease-pest-diagnosis",
    title: "Disease & Pest Diagnosis",
    shortTitle: "Diagnosis",
    summary:
      "We identify what's making your tree sick and recommend a treatment path — or removal if it's too late.",
    icon: "magnifier",
    order: 6,
  },
  {
    slug: "emergency-storm-response",
    title: "Emergency Storm Response",
    shortTitle: "Storm",
    summary:
      "24-hour response for storm-damaged, fallen, or hung-up trees. Call anytime.",
    icon: "lightning",
    order: 7,
  },
];

export const serviceAreas: string[] = [
  "Atlanta",
  "Decatur",
  "Stone Mountain",
  "Sandy Springs",
  "Roswell",
  "Marietta",
  "Dunwoody",
  "Brookhaven",
  "Tucker",
  "Avondale Estates",
  "Smyrna",
  "Chamblee",
];

export function telHref(num: string): string {
  return `tel:${num.replace(/\D/g, "")}`;
}

export function mailHref(addr: string, subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${addr}${params}`;
}
