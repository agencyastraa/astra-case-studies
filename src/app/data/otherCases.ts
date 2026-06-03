export interface OtherCase {
  id: string;
  tab: string;
  tabIndustry: string;
  clientName: string;
  clientTag: string;
  problem: string;
  heroNum: string;
  heroLabel: string;
  metrics: [{ val: string; key: string }, { val: string; key: string }];
  details: { key: string; val: string }[];
}

export const otherCases: OtherCase[] = [
  {
    id: "idaca",
    tab: "IDACA",
    tabIndustry: "Medical Imaging",
    clientName: "IDACA",
    clientTag: "Medical Imaging · 9 Locations · USA",
    problem:
      "A 9-location medical imaging network generating $809K/month but stuck — unable to identify which locations, services, or campaigns were actually driving revenue. Budget spread evenly with no data to justify reallocation. Growth flatlined for 6+ months.",
    heroNum: "$1.12M",
    heroLabel: "Monthly revenue in 90 days — up from $809K",
    metrics: [
      { val: "+38%", key: "Revenue growth" },
      { val: "Day 60", key: "$1M/month milestone" },
    ],
    details: [
      { key: "Ad spend", val: "$10K → $14K/mo" },
      { key: "Timeline", val: "90 days" },
      { key: "Channel", val: "Meta Ads" },
    ],
  },
  {
    id: "tu-proyecto-fitness",
    tab: "Tu Proyecto Fitness",
    tabIndustry: "Gym B2B",
    clientName: "Tu Proyecto Fitness",
    clientTag: "Gym · B2B High Ticket · LATAM",
    problem:
      "A B2B gym consulting business with a strong high-ticket offer but no system to attract qualified leads at scale. Relying entirely on word-of-mouth and sporadic campaigns with no funnel structure. The product was strong — the entry point into the funnel was the problem.",
    heroNum: "38x",
    heroLabel: "ROAS — $6K spend → $230K revenue",
    metrics: [
      { val: "$200K+", key: "Single client value" },
      { val: "2 months", key: "Timeline" },
    ],
    details: [
      { key: "Ad spend", val: "$6K total" },
      { key: "Channel", val: "Meta Ads" },
      { key: "Key insight", val: "3D design as funnel entry point" },
    ],
  },
  {
    id: "xcore",
    tab: "Xcore.fit",
    tabIndustry: "Gym SaaS",
    clientName: "Xcore.fit",
    clientTag: "Gym SaaS · 12 Countries",
    problem:
      "A gym management SaaS in 12 countries with no scalable acquisition system. New clients came entirely from referrals and in-person travel by the sales team. Growth was capped by human capacity — no way to reach new markets without getting on a plane.",
    heroNum: "8–12",
    heroLabel: "New gyms/month across multiple countries simultaneously",
    metrics: [
      { val: "$5K", key: "Monthly ad spend" },
      { val: "12", key: "Countries active" },
    ],
    details: [
      { key: "Previous model", val: "Referrals + travel" },
      { key: "Now", val: "Automated + chatbot qualified" },
      { key: "Revenue model", val: "Monthly subscription — compounding MRR" },
    ],
  },
];
