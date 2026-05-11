// Per-city content for /service-areas/{slug}/ landing pages.
// Each entry needs enough unique substance to avoid Google's "thin
// content" / "doorway page" penalty. Goal: ~250 words of substantive,
// place-specific tree-care content per city, written from real
// knowledge of metro Atlanta neighborhoods, soils, and species.

export type AreaDetail = {
  slug: string;
  shortHeadline: string;
  intro: string;
  commonTrees: { name: string; note: string }[];
  localIssues: { title: string; body: string }[];
  logisticsNote: string;
  topServices: ("tree-removal" | "tree-trimming" | "pruning" | "stump-grinding" | "debris-hauling" | "disease-pest-diagnosis" | "emergency-storm-response")[];
};

export const areaDetails: Record<string, AreaDetail> = {
  atlanta: {
    slug: "atlanta",
    shortHeadline: "Inside the perimeter, neighborhood by neighborhood.",
    intro:
      "Atlanta's tree canopy is one of the densest of any major U.S. city — and it's also one of the oldest. Pre-WWII neighborhoods like Inman Park, Candler Park, Virginia-Highland, and Grant Park have street trees and yard trees that are now 80 to 120 years old. Mature beauty comes with mature problems: structural decay, root conflicts with old utilities, and the fact that big trees fall on big houses.",
    commonTrees: [
      { name: "Willow oak", note: "Atlanta's signature street tree. Can exceed 80 feet; often a removal candidate when over 100 years old." },
      { name: "Water oak", note: "Fast-growing but structurally weaker than other oaks; common storm-damage species." },
      { name: "Southern magnolia", note: "Lower-maintenance; often crowded by neighboring hardwoods." },
      { name: "Tulip poplar", note: "Very tall; brittle wood; needs careful pruning around structures." },
      { name: "Eastern red cedar", note: "Drought-tolerant; common in older intown lots." },
    ],
    localIssues: [
      { title: "End-of-life mature oaks", body: "Many century-old oaks planted between 1900-1930 are reaching the end of their structural lifespan. We assess decay and recommend removal before they fail on a house." },
      { title: "Root-zone conflicts", body: "Older intown neighborhoods have shallow utility lines, concrete sidewalks, and basement walls competing for the same root space. We work around what's there." },
      { title: "Storm exposure", body: "Atlanta sits where multiple storm tracks converge. Severe thunderstorms in spring and ice events in winter both take trees down." },
    ],
    logisticsNote: "Intown access varies — alley pickups in Inman Park, narrow front-only access in Cabbagetown, normal driveway access in most of the eastside. We adapt the equipment to the site.",
    topServices: ["tree-removal", "tree-trimming", "emergency-storm-response"],
  },

  decatur: {
    slug: "decatur",
    shortHeadline: "Old-growth oaks and historic streets.",
    intro:
      "Decatur's pre-WWII neighborhoods — MAK Historic District, Oakhurst, Winnona Park — were laid out when post oaks and willow oaks were the standard street tree. Almost a century later, those trees are still here, magnificent and increasingly fragile. Tree care in Decatur is about respecting old trees and knowing when one has crossed the line into hazard.",
    commonTrees: [
      { name: "Post oak", note: "Iconic Decatur tree; many over 100 years old, many declining." },
      { name: "Willow oak", note: "Common street tree; often over 70 feet in older neighborhoods." },
      { name: "Sweetgum", note: "Tolerates urban conditions but drops messy fruit; common pruning request." },
      { name: "Eastern dogwood", note: "Understory; sensitive to drought and anthracnose." },
    ],
    localIssues: [
      { title: "Aging post oak decline", body: "Post oaks throughout Decatur are dying back from a combination of drought stress, soil compaction, and old age. We assess structural integrity before recommending removal." },
      { title: "Tight historic-district lots", body: "MAK Historic District properties often have minimal access — we may use smaller equipment or rig from above to avoid damaging old hardscape and foundations." },
      { title: "Storm cleanup", body: "Decatur's mature canopy means every significant storm produces work. We respond 24/7 for hung-up trees and structural damage." },
    ],
    logisticsNote: "Historic district properties may have tree ordinance considerations — we confirm permitting status before any removal. Oakhurst and Winnona Park have normal residential access.",
    topServices: ["tree-removal", "disease-pest-diagnosis", "pruning"],
  },

  "stone-mountain": {
    slug: "stone-mountain",
    shortHeadline: "From the lake to the park's edge.",
    intro:
      "Stone Mountain — the city, not the rock — is wrapped around one of the largest granite outcroppings in the world. The surrounding neighborhoods reflect that geography: shallower soils near the mountain, deeper alluvial pockets along the streams, and a tree mix that includes both classic pied­mont hardwoods and some species you'd expect on a Blue Ridge slope.",
    commonTrees: [
      { name: "Loblolly pine", note: "Dominant in subdivisions developed since the 1970s; vulnerable to pine bark beetle." },
      { name: "Water oak", note: "Common throughout; often planted along streets." },
      { name: "Eastern red cedar", note: "Thrives on the rocky soils near the granite outcrops." },
      { name: "Shortleaf pine", note: "Less common than loblolly but more storm-resistant." },
    ],
    localIssues: [
      { title: "Pine bark beetle pressure", body: "Heavy pine populations mean heavy beetle pressure during droughts. Once a pine shows signs of attack, the window to act is short — we can confirm and remove cleanly before the infestation spreads." },
      { title: "Shallow soils near outcrops", body: "Properties near the park's granite formations have shallower root zones. Trees here are more likely to fail in straight-line winds." },
      { title: "Park-adjacent wildlife", body: "Boring insects and woodpeckers active in dead pines — we coordinate removals to minimize secondary infestation." },
    ],
    logisticsNote: "Properties on the lake side of the park usually have boat-trailer driveways and good equipment access. Older neighborhoods west of the village have tighter lots.",
    topServices: ["tree-removal", "disease-pest-diagnosis", "emergency-storm-response"],
  },

  "sandy-springs": {
    slug: "sandy-springs",
    shortHeadline: "Mature canopies along the Chattahoochee.",
    intro:
      "Sandy Springs spans a wide arc north of the perimeter — from the Chattahoochee River bluffs in the west to the Perimeter office corridor in the east. The tree mix changes with the geography. Riverside neighborhoods have deeper soils and bigger hardwoods; upland Sandy Springs has more pines and faster-growing oaks.",
    commonTrees: [
      { name: "White oak", note: "Long-lived; the prize tree of many Sandy Springs yards." },
      { name: "Southern red oak", note: "Common throughout; somewhat susceptible to ice damage." },
      { name: "Mockernut hickory", note: "Found in older wooded lots, especially near the river." },
      { name: "American beech", note: "Riverbank species; smooth gray bark; appreciates protection from grading." },
    ],
    localIssues: [
      { title: "Hillside lot risk", body: "Many Sandy Springs lots have significant slope. Trees on slopes have asymmetric root systems and fail differently than flat-lot trees — we assess accordingly." },
      { title: "Construction damage recovery", body: "Active redevelopment in older neighborhoods often damages tree root zones during grading. We can sometimes save a tree if we're called early; once decline starts, options narrow." },
      { title: "Ice storms", body: "Sandy Springs sits at an elevation where freezing rain accumulates more than intown areas. Ice damage to southern red oaks is a known annual pattern." },
    ],
    logisticsNote: "Many properties have driveway access but steep slopes — we use winches and rigging rather than crane work where the angle prohibits it. Cul-de-sac neighborhoods are common.",
    topServices: ["tree-trimming", "pruning", "emergency-storm-response"],
  },

  roswell: {
    slug: "roswell",
    shortHeadline: "Historic district to the river.",
    intro:
      "Roswell's identity is rooted in the Chattahoochee — the mill district, Vickery Creek, the founding-era homes lining Mimosa Boulevard. The tree canopy reflects 180 years of residential history: original sourwoods and hickories alongside post-1950 subdivisions with very different planting patterns.",
    commonTrees: [
      { name: "Sourwood", note: "Native; tolerates the acidic soils common throughout Roswell; striking fall color." },
      { name: "Pignut hickory", note: "Long-lived; common in pre-1970 lots." },
      { name: "Water oak", note: "Workhorse street tree; standard removal candidate." },
      { name: "Flowering dogwood", note: "Common understory; susceptible to anthracnose and drought." },
    ],
    localIssues: [
      { title: "Historic district tree ordinance", body: "Roswell's historic district has tree-protection rules. Some removals require city approval. We confirm status before scheduling, and can document conditions for permit applications." },
      { title: "River bluff stability", body: "Properties along Vickery Creek and the river have erodible soils. Tree removal on a bluff requires more careful planning than a flat-lot job." },
      { title: "Dogwood decline", body: "Anthracnose has thinned dogwood populations across Roswell over the last 20 years. We can sometimes save individual trees with targeted care; often it's a removal." },
    ],
    logisticsNote: "Historic district properties may need permit coordination; we handle that. Newer subdivisions (Crabapple, Willow Springs) have normal residential access.",
    topServices: ["tree-removal", "disease-pest-diagnosis", "pruning"],
  },

  marietta: {
    slug: "marietta",
    shortHeadline: "From the square to East Cobb.",
    intro:
      "Marietta's footprint runs from the historic square out through Kennestone, Sprayberry, and the East Cobb subdivisions. Older lots near the square have century-old white oaks and post oaks; East Cobb has 1970s-era pines reaching the end of their lifespan now. Two different tree-care worlds in one city.",
    commonTrees: [
      { name: "White oak", note: "Highest-value tree in many Marietta yards; worth saving when structurally sound." },
      { name: "Post oak", note: "Iconic; many over 80 years old and showing decline." },
      { name: "Loblolly pine", note: "Dominant in East Cobb subdivisions; pine beetle pressure significant." },
      { name: "Southern magnolia", note: "Common around the historic square; durable but messy." },
    ],
    localIssues: [
      { title: "Aging East Cobb pines", body: "Pines planted en masse in the 1970s and 1980s are now reaching the age where storm damage and beetle attack become much more likely. Proactive removal of declining pines is the cheapest insurance against a storm-night house claim." },
      { title: "Square-adjacent tree ordinance", body: "Marietta's historic district has tree-protection rules near the square. We confirm permitting before any removal." },
      { title: "Storm corridor", body: "Cobb County sits in a corridor that routinely takes significant straight-line wind. Mature pine and weak-wood hardwoods come down regularly." },
    ],
    logisticsNote: "Square-area lots are tight; East Cobb subdivisions usually have deep driveways and good crane access if needed.",
    topServices: ["tree-removal", "emergency-storm-response", "disease-pest-diagnosis"],
  },

  dunwoody: {
    slug: "dunwoody",
    shortHeadline: "Big oaks, big yards.",
    intro:
      "Dunwoody's residential character is large lots, mature canopy, and pines — lots of pines. Subdivisions developed between the 1960s and 1980s planted heavily, and what was 30 feet of pine 40 years ago is now 80 to 100 feet of pine leaning over a house. Tree care in Dunwoody is disproportionately about managing pines.",
    commonTrees: [
      { name: "Loblolly pine", note: "Everywhere. Now mature, now vulnerable, now expensive when one falls." },
      { name: "White oak", note: "Common in older Dunwoody Club Forest lots; high-value when healthy." },
      { name: "Pignut hickory", note: "Found in older wooded properties; long-lived." },
      { name: "Eastern red cedar", note: "Older landscape plantings; drought-tolerant." },
    ],
    localIssues: [
      { title: "Aging pine inventory", body: "Most Dunwoody lots have 4-8 mature pines. As they reach 50+ years they become risk inventory. We assess them individually rather than blanket-removing — some have decades left, others should come down this season." },
      { title: "Pine bark beetle", body: "When one pine shows beetle activity, neighbors are usually next. Quick removal of infested trees slows the spread." },
      { title: "Storm exposure", body: "Tall pines and severe thunderstorms are a bad combination. Proactive removal of leaning or weakly rooted pines is the standard pre-summer precaution." },
    ],
    logisticsNote: "Large lots and wide driveways usually allow crane access — the right call for big pine removals over structures.",
    topServices: ["tree-removal", "disease-pest-diagnosis", "emergency-storm-response"],
  },

  brookhaven: {
    slug: "brookhaven",
    shortHeadline: "Towering hardwoods, classic intown.",
    intro:
      "Brookhaven blends pre-WWII intown character with newer mid-century lots. Historic Brookhaven (the original district north of Peachtree) has very mature hardwoods — willow oaks, water oaks, sweetgums — many planted between 1910 and 1940. Tree care here is largely about managing trees that are now in their second century.",
    commonTrees: [
      { name: "Willow oak", note: "The classic Brookhaven street tree; many over 80 feet and 100 years old." },
      { name: "Water oak", note: "Faster-growing, weaker-wooded; common storm-damage species." },
      { name: "Sweetgum", note: "Sturdy but messy; pruning often preferred over removal." },
      { name: "Southern magnolia", note: "Common in front yards; long-lived and steady." },
    ],
    localIssues: [
      { title: "Century-old willow oaks", body: "Many of Historic Brookhaven's signature trees are nearing or past their structural lifespan. We assess for decay (cavities, conks, basal damage) before recommending removal — the goal is to remove only what needs removing." },
      { title: "Tight intown lots", body: "Pre-war lots are narrower than they look; access for equipment matters. Sometimes a sectional dismantle is the only option even on a relatively small tree." },
      { title: "Storm cleanup", body: "Mature canopy means even moderate storms produce hung-up branches and structural damage. We respond after-hours for what can't wait." },
    ],
    logisticsNote: "Most of Brookhaven has good driveway access. Some Historic Brookhaven properties require alley-side approach or smaller equipment.",
    topServices: ["tree-removal", "tree-trimming", "emergency-storm-response"],
  },

  tucker: {
    slug: "tucker",
    shortHeadline: "Shaded residential streets.",
    intro:
      "Tucker is a mid-century residential city stitched together from 1950s and 1960s subdivisions, with a small downtown corridor anchored on Main Street. The tree canopy mix reflects its development era — lots of pines planted at the same time, lots of hardwoods that have aged at the same pace, and a fairly homogeneous tree-care profile across most of the city.",
    commonTrees: [
      { name: "Loblolly pine", note: "Common throughout; many at structural-maturity age." },
      { name: "Water oak", note: "Standard residential planting; high turnover at the 60-80 year mark." },
      { name: "Sweetgum", note: "Tolerates the clay soils common in this part of DeKalb." },
      { name: "Eastern dogwood", note: "Understory; declining where anthracnose has hit." },
    ],
    localIssues: [
      { title: "Pine inventory aging", body: "Same story as much of north DeKalb — pines planted in the post-war boom are now 60-70 years old and aging fast. Beetle and storm risk both go up sharply in that age range." },
      { title: "Ice damage", body: "Tucker sits in an elevation band that catches winter ice events more than intown Atlanta. Water oaks and pines are the typical casualties." },
      { title: "Mid-century lot constraints", body: "Lots are smaller than newer suburbs; access for crane work isn't always available. We rig from above when needed." },
    ],
    logisticsNote: "Most Tucker streets have normal residential access. Main Street corridor properties may need traffic-aware scheduling.",
    topServices: ["tree-removal", "disease-pest-diagnosis", "emergency-storm-response"],
  },

  "avondale-estates": {
    slug: "avondale-estates",
    shortHeadline: "Tudor homes under tall oaks.",
    intro:
      "Avondale Estates is one of the oldest planned communities in the South — a 1925 Tudor Revival neighborhood that hasn't changed much since. The original street trees were planted nearly 100 years ago. Many are still standing; some are not, and some are at the inflection point right now.",
    commonTrees: [
      { name: "Willow oak", note: "Original 1925-era street tree; many at end of structural lifespan." },
      { name: "Water oak", note: "Planted later but now mature; common removal candidate." },
      { name: "Eastern red cedar", note: "Period-appropriate landscape planting; long-lived and dependable." },
      { name: "Flowering dogwood", note: "Understory; struggling city-wide with anthracnose." },
    ],
    localIssues: [
      { title: "Original-planting trees aging out", body: "The street trees lining Lakeshore Drive and Clarendon Avenue were planted as a complete set in the 1920s. They're aging as a complete set too — meaning many will need removal in a similar window, requiring careful succession planning." },
      { title: "Tree ordinance", body: "Avondale Estates has a tree-protection ordinance for the historic district. We confirm permit status and can document conditions for the city's review." },
      { title: "Tight lots, old utilities", body: "1920s lot layouts have very different root-zone constraints than modern subdivisions. We coordinate with utility marking before any stump grinding or excavation." },
    ],
    logisticsNote: "Historic district streets are narrow with on-street parking; we plan equipment access to minimize disruption.",
    topServices: ["tree-removal", "pruning", "disease-pest-diagnosis"],
  },

  smyrna: {
    slug: "smyrna",
    shortHeadline: "From Market Village to the Battery.",
    intro:
      "Smyrna covers a remarkable range — Vinings' century-old oaks, the redeveloped Market Village area, the Battery (around Truist Park), and a patchwork of 1960s and 1980s subdivisions in between. The tree work varies as much as the neighborhoods do.",
    commonTrees: [
      { name: "Water oak", note: "Common across all eras of Smyrna development." },
      { name: "White oak", note: "Vinings has some genuinely magnificent old-growth white oaks." },
      { name: "Loblolly pine", note: "Standard in 1970s-1980s subdivisions; now aging." },
      { name: "Southern magnolia", note: "Common in newer plantings around the Battery and Market Village." },
    ],
    localIssues: [
      { title: "Vinings old-growth management", body: "Some Vinings yards have 150-year-old oaks. These trees need expert assessment — they're irreplaceable when healthy, and dangerous when they're not." },
      { title: "Redevelopment damage", body: "Areas around the Battery and Market Village have seen significant construction. Tree root zones get damaged during grading and may show decline years later." },
      { title: "Storm corridor", body: "Cobb County's general storm exposure applies; severe thunderstorms drop trees in Smyrna routinely." },
    ],
    logisticsNote: "Vinings has narrow streets and large estate-style lots; newer Smyrna subdivisions have standard residential access.",
    topServices: ["tree-removal", "tree-trimming", "emergency-storm-response"],
  },

  chamblee: {
    slug: "chamblee",
    shortHeadline: "Buford Highway and beyond.",
    intro:
      "Chamblee is a compact older city with a mid-century housing stock, anchored by Antique Row and the Buford Highway corridor. Lots are smaller than the bigger DeKalb suburbs, and the tree-care work reflects that — more compact removals, more pruning around utility lines, more dealing with single trees per yard rather than canopies.",
    commonTrees: [
      { name: "Water oak", note: "Standard mid-century planting; common removal candidate." },
      { name: "Loblolly pine", note: "Older Chamblee yards often have 2-4 mature pines." },
      { name: "Sweetgum", note: "Tolerates the urban-edge conditions." },
      { name: "Crape myrtle", note: "Common ornamental; needs annual structural pruning, not 'crape murder.'" },
    ],
    localIssues: [
      { title: "Power line proximity", body: "Older Chamblee streets have above-ground utilities running close to mature trees. Pruning around lines requires coordination with Georgia Power; we know when to call them first." },
      { title: "Pine bark beetle", body: "Smaller lots with mature pines means a beetle outbreak can move through a whole block. Early removal of an infested tree slows spread." },
      { title: "Buford Highway noise / traffic", body: "Properties along Buford Hwy and Peachtree need traffic-aware scheduling for any equipment-heavy work." },
    ],
    logisticsNote: "Compact lots may require sectional dismantles rather than full fells. Antique Row commercial properties scheduled for off-hours work when possible.",
    topServices: ["tree-removal", "tree-trimming", "stump-grinding"],
  },

  doraville: {
    slug: "doraville",
    shortHeadline: "Buford Highway's international district.",
    intro:
      "Doraville is the post-war working-city counterpart to Chamblee — same era, similar housing stock, similar tree mix, plus the legacy of the closed GM Doraville plant that's reshaping the city's eastern flank. Tree work in Doraville is steady, mostly mid-sized, and increasingly intersects with redevelopment.",
    commonTrees: [
      { name: "Loblolly pine", note: "Common throughout; now aging into risk territory." },
      { name: "Water oak", note: "Standard mid-century street and yard tree." },
      { name: "Eastern red cedar", note: "Drought-tolerant and common in older landscape plantings." },
      { name: "Sweetgum", note: "Persistent in this area's clay soils." },
    ],
    localIssues: [
      { title: "Aging pine populations", body: "Post-war Doraville planted heavily with pine. Most of those pines are now at risk-of-failure age. Proactive removal beats reactive cleanup after a storm." },
      { title: "Redevelopment near old GM site", body: "Construction-zone trees often lose root mass and decline 3-5 years later. If a tree's been around recent grading, we can assess what's saveable." },
      { title: "International district tight lots", body: "Older Doraville residential lots are compact; commercial parcels along Buford Hwy are even tighter. We adapt equipment to the site." },
    ],
    logisticsNote: "Residential streets allow standard truck access; commercial-corridor properties need traffic-aware scheduling and sometimes off-hours work.",
    topServices: ["tree-removal", "disease-pest-diagnosis", "emergency-storm-response"],
  },
};
