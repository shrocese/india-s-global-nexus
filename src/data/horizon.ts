/**
 * Level II dual-track and Level III horizon content per partner.
 * Editorial drafts — to be reviewed and replaced by the editor.
 */
export interface Horizon {
  convergence: string[];
  friction: string[];
  retrospective: string[];
  outlook: string[];
}

export interface Dispatch {
  slug: string;
  partner: string;
  title: string;
  dek: string;
  date: string;
  minutes: number;
}

/** The editor's own bylined essays. Empty until the first is published. */
export const DISPATCHES: Dispatch[] = [];

export const HORIZON: Record<string, Horizon> = {
  "european-union": {
    convergence: ["Largest goods trade partner; FTA, investment and GI talks", "Trade and Technology Council, IMEC, clean energy"],
    friction: ["Carbon border tax (CBAM) and deforestation rules", "Russia sanctions versus India's energy imports"],
    retrospective: ["Leaders set a deadline to conclude the free trade agreement.", "The full Commission's visit to Delhi lifted the relationship's profile.", "CBAM reporting obligations began to bite on Indian exporters."],
    outlook: ["Whether the FTA is signed and ratified.", "CBAM's definitive phase and any accommodation for India.", "Security and defence dialogue with the EU as an institution."],
  },
  "united-states": {
    convergence: ["Indo-Pacific balance and the QUAD", "Critical and emerging technology, defence co-production"],
    friction: ["Tariffs and market access", "Immigration and visa regimes; India's Russia ties"],
    retrospective: ["Trade negotiations dominated the agenda, with tariff pressure testing goodwill.", "Defence and technology cooperation continued below the political noise.", "Visa policy changes became a direct concern for Indian students and professionals."],
    outlook: ["Whether a first-tranche trade deal is concluded.", "Next QUAD leaders' summit and its deliverables.", "Progress on jet engine and semiconductor co-production."],
  },
  china: {
    convergence: ["Multilateral overlap in BRICS and SCO", "Trade volume and supply-chain dependence"],
    friction: ["The unsettled Line of Actual Control", "China–Pakistan alignment and a widening trade deficit"],
    retrospective: ["Disengagement at friction points eased the military standoff.", "Flights, pilgrimages and some visas resumed incrementally.", "The trade deficit with China widened further."],
    outlook: ["Special Representatives talks on boundary questions.", "Calibrated easing of investment screening.", "Brahmaputra dam construction and water-data sharing."],
  },
  russia: {
    convergence: ["Defence platforms and spares", "Discounted crude and nuclear energy"],
    friction: ["Payment settlement and a lopsided trade balance", "Russia's deepening dependence on China"],
    retrospective: ["Oil imports kept Russia among India's top suppliers.", "Annual summit diplomacy continued despite Western pressure.", "Indian nationals recruited into Russian forces became a consular issue."],
    outlook: ["Remaining S-400 deliveries.", "Rupee–rouble settlement mechanisms.", "Kudankulam units and further nuclear cooperation."],
  },
  pakistan: {
    convergence: ["Kartarpur corridor", "Nuclear installations list exchange"],
    friction: ["Cross-border terrorism", "Jammu and Kashmir; Indus Waters Treaty held in abeyance"],
    retrospective: ["Military hostilities followed the Pahalgam attack before a ceasefire understanding.", "India placed the Indus Waters Treaty in abeyance.", "Trade and travel links remained suspended."],
    outlook: ["Stability of the ceasefire along the Line of Control.", "Arbitration and diplomacy around the Indus waters.", "Any back-channel contact, with low expectations."],
  },
  bangladesh: {
    convergence: ["Connectivity, power trade and the 2015 land boundary settlement", "Shared rivers and border management"],
    friction: ["Political transition in Dhaka since 2024", "Ganga treaty renewal, Teesta waters, border incidents"],
    retrospective: ["Relations were recalibrated with the interim government.", "Trade restrictions and visa curbs were applied on both sides.", "Concerns over minority safety featured in India's statements."],
    outlook: ["Bangladesh's elections and the new government's posture.", "Negotiations ahead of the Ganga treaty's 2026 expiry.", "Rail and energy connectivity projects."],
  },
  japan: {
    convergence: ["Infrastructure finance and the high-speed rail", "QUAD and Indo-Pacific maritime security"],
    friction: ["Slow project execution", "Trade imbalance under CEPA"],
    retrospective: ["Summit-level commitments set a large private investment target.", "Semiconductor and critical-minerals cooperation expanded.", "High-speed rail rolling-stock decisions moved forward."],
    outlook: ["Delivery on the investment target.", "Defence equipment and technology transfer.", "Skilled-worker mobility schemes."],
  },
  "united-arab-emirates": {
    convergence: ["CEPA and local-currency trade", "Energy, investment and the diaspora"],
    friction: ["Labour welfare cases", "Balancing ties across the Gulf rivalries"],
    retrospective: ["Trade under CEPA continued to grow.", "UAE sovereign funds expanded India investments.", "IMEC corridor discussions continued despite regional conflict."],
    outlook: ["Movement on the India–Middle East–Europe corridor.", "Strategic petroleum reserve arrangements.", "UPI and RuPay integration across the Emirates."],
  },
  france: {
    convergence: ["Defence: Rafale, submarines, engines", "Space, civil nuclear and the Indian Ocean"],
    friction: ["Pace of technology-transfer negotiations", "EU-level trade and carbon-border rules"],
    retrospective: ["The Rafale-Marine deal was concluded.", "Horizon 2047 roadmap guided cooperation.", "AI and digital cooperation gained prominence."],
    outlook: ["Fighter-engine co-development decisions.", "Jaitapur nuclear project progress.", "Year of Innovation events and research exchanges."],
  },
  nepal: {
    convergence: ["Open border and Gorkha regiments", "Hydropower exports and cross-border power trade"],
    friction: ["Kalapani–Lipulekh map dispute", "Political volatility in Kathmandu"],
    retrospective: ["Youth-led protests forced a change of government.", "India expanded power purchases from Nepal.", "Lipulekh trade route reopening drew Nepalese objection."],
    outlook: ["Elections and the incoming government's foreign policy.", "Long-term power-trade agreement implementation.", "Boundary dialogue, if revived."],
  },
  "sri-lanka": {
    convergence: ["Economic lifeline during the 2022 crisis", "Energy, ports and the Trincomalee hub"],
    friction: ["Fishermen disputes in the Palk Strait", "Chinese research vessels and port access"],
    retrospective: ["A first India–Sri Lanka defence cooperation MoU was signed.", "Energy hub and grid-interconnection projects advanced.", "Fishermen arrests continued to strain Tamil Nadu politics."],
    outlook: ["Debt restructuring follow-through.", "Grid interconnection and pipeline feasibility.", "Joint management of the fisheries dispute."],
  },
};
