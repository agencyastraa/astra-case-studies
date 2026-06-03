export interface OtherCase {
  id: string;
  tab: string;
  tabIndustry: string;
  clientName: string;
  clientTag: string;
  logo?: string;
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
    clientTag: "Medical Imaging · 9 Locations",
    logo: "/logo-idaca.png",
    problem:
      "A 9-location medical imaging network generating $809K/month but completely stuck. They had no visibility into which locations, services, or campaigns were actually driving revenue. Budget was spread evenly across everything with no data to justify moving it. Growth had flatlined for 6 months.",
    heroNum: "$1.12M",
    heroLabel: "Monthly revenue in 90 days, up from $809K",
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
    clientTag: "Gym · B2B High Ticket",
    logo: "/logo-tuproyectofitness.png",
    problem:
      "A B2B gym consulting business with a strong high-ticket offer and no system to bring in qualified leads at scale. Everything came through word-of-mouth and occasional campaigns with no real funnel behind them. The offer wasn't the problem. Getting the right people to see it was.",
    heroNum: "38x",
    heroLabel: "ROAS — $6K in spend, $230K in revenue",
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
    logo: "/logo-xcore.png",
    problem:
      "A gym management SaaS operating in 12 countries with no scalable way to bring in new clients. Every new customer came through referrals or the sales team traveling in person. Growth was limited to whatever the team could physically reach.",
    heroNum: "8–12",
    heroLabel: "New gyms per month across multiple countries simultaneously",
    metrics: [
      { val: "$5K", key: "Monthly ad spend" },
      { val: "12", key: "Countries active" },
    ],
    details: [
      { key: "Previous model", val: "Referrals + travel" },
      { key: "Now", val: "Automated + chatbot qualified" },
      { key: "Revenue model", val: "Monthly subscription, compounding MRR" },
    ],
  },
];
