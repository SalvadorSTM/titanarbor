export const site = {
  name: "Titan Arbor Solutions",
  shortName: "Titan Arbor",
  tagline: "Professional tree care for metro Atlanta",
  published: true,
  description:
    "Locally owned tree care company in Georgia. Tree removal, trimming, pruning, stump grinding, debris hauling, disease diagnosis, and 24-hour emergency storm response.",
  url: "https://titanarbor.com",
  quoteUrl: "https://clienthub.getjobber.com/hubs/7da855e7-9b31-44ee-bec8-2e8fbe6d7d51/public/requests/4723910/new",
  phonePrimary: "478-266-8020",
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
    stateAbbr: "GA",
    city: "Atlanta",
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

export type County = "Fulton" | "DeKalb" | "Cobb";

export type ServiceArea = {
  name: string;
  slug: string;
  blurb: string;
  county: County;
};

export const serviceAreas: ServiceArea[] = [
  { name: "Atlanta", slug: "atlanta", blurb: "Inside the perimeter, neighborhood by neighborhood.", county: "Fulton" },
  { name: "Sandy Springs", slug: "sandy-springs", blurb: "Mature canopies along the Chattahoochee.", county: "Fulton" },
  { name: "Roswell", slug: "roswell", blurb: "Historic district to the river.", county: "Fulton" },
  { name: "Decatur", slug: "decatur", blurb: "Old-growth oaks and historic streets.", county: "DeKalb" },
  { name: "Stone Mountain", slug: "stone-mountain", blurb: "From the lake to the park's edge.", county: "DeKalb" },
  { name: "Dunwoody", slug: "dunwoody", blurb: "Big oaks, big yards.", county: "DeKalb" },
  { name: "Brookhaven", slug: "brookhaven", blurb: "Towering hardwoods, classic intown.", county: "DeKalb" },
  { name: "Tucker", slug: "tucker", blurb: "Shaded residential streets.", county: "DeKalb" },
  { name: "Avondale Estates", slug: "avondale-estates", blurb: "Tudor homes under tall oaks.", county: "DeKalb" },
  { name: "Chamblee", slug: "chamblee", blurb: "Buford Highway and beyond.", county: "DeKalb" },
  { name: "Doraville", slug: "doraville", blurb: "Buford Highway's international district.", county: "DeKalb" },
  { name: "Marietta", slug: "marietta", blurb: "From the square to East Cobb.", county: "Cobb" },
  { name: "Smyrna", slug: "smyrna", blurb: "From Market Village to the Battery.", county: "Cobb" },
];

export const counties: { name: County; blurb: string }[] = [
  { name: "Fulton", blurb: "Atlanta and the northern Fulton suburbs along GA-400." },
  { name: "DeKalb", blurb: "From intown Decatur out to Stone Mountain and the eastern perimeter." },
  { name: "Cobb", blurb: "Marietta, Smyrna, and the western metro on the other side of the Chattahoochee." },
];

export function telHref(num: string): string {
  return `tel:${num.replace(/\D/g, "")}`;
}

export function mailHref(addr: string, subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${addr}${params}`;
}
