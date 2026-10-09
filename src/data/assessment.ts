/**
 * Editorial assessment layer, per partner. Drafts for the editor to review.
 * - pillars: dual-track (convergence / friction) + a one-line verdict per Core Pillar
 * - synthesis: Level II closing verdict on the long arc (history up to today)
 * - net: Level III verdict on the present moment
 * - past / next: four points each, always in order Strength, Opportunity, Weakness, Threat
 */
export type PillarKey = "political" | "economic" | "tech" | "society" | "global";

export interface PillarTrack {
  verdict: string;
  up: string[];
  down: string[];
}

export interface Sowt {
  strength: string;
  opportunity: string;
  weakness: string;
  threat: string;
}

export interface Assessment {
  pillars: Record<PillarKey, PillarTrack>;
  synthesis: { phrase: string; line: string; credit?: string };
  net: { phrase: string; line: string; credit?: string };
  past: Sowt;
  next: Sowt;
}

const t = (verdict: string, up: string[], down: string[]): PillarTrack => ({ verdict, up, down });

export const ASSESSMENT: Record<string, Assessment> = {
  "united-states": {
    pillars: {
      political: t("Broad alignment, no alliance", ["QUAD and a shared Indo-Pacific balance against coercion", "Foundational defence pacts (LEMOA, COMCASA, BECA) in force"], ["India's strategic autonomy and Russia ties", "Washington's episodic pressure on trade and sanctions"]),
      economic: t("Largest market, recurring tariff fights", ["India's largest export market with a large surplus", "Deep two-way investment and services trade"], ["Tariff escalation and market-access disputes", "No comprehensive trade agreement yet"]),
      tech: t("Most cooperative, slowest to deliver", ["iCET/TRUST framework, semiconductors, space (NISAR, Artemis Accords)", "GE F414 engine co-production agreed in principle"], ["Delays in technology transfer and in delivery of F404 engines for Tejas", "Export-control friction on dual-use items"]),
      society: t("The strongest people-to-people bridge", ["Largest Indian student population abroad", "Influential, high-income diaspora"], ["H-1B and visa restrictions", "Episodes of hate crime and deportation optics"]),
      global: t("Converge on Indo-Pacific, diverge on Russia", ["Freedom of navigation, counter-terrorism, Indo-Pacific order"], ["Ukraine war, climate finance and WTO positions"]),
    },
    synthesis: { phrase: "From estranged democracies to engaged ones", line: "Cold War distance and the 1998 sanctions gave way, after the 2008 nuclear deal, to the widest defence and technology bandwidth India holds with any state.", credit: "After Dennis Kux, Estranged Democracies (1993)" },
    net: { phrase: "From engaged to restrained democracies", line: "The partnership endures, but tariff pressure and transactional politics have made both capitals more guarded about what they promise.", credit: "After Sanjaya Baru" },
    past: { strength: "Defence and technology work continued beneath the political noise.", opportunity: "A first-tranche trade deal came within reach.", weakness: "Tariff escalation dented trust and exporter confidence.", threat: "Visa and immigration curbs hit students and professionals." },
    next: { strength: "Institutional ties now outlast any single administration.", opportunity: "Closing a trade deal and delivering F414 co-production.", weakness: "Delivery timelines on engines and transfers keep slipping.", threat: "Sanctions pressure over Russian oil purchases." },
  },
  "european-union": {
    pillars: {
      political: t("Rising but still thin on security", ["Strategic partnership since 2004; Trade and Technology Council", "Shared interest in a multipolar, rules-based order"], ["EU security role in Asia remains limited", "Divergence over Russia"]),
      economic: t("Largest goods partner, FTA unfinished", ["India's largest trading partner in goods", "FTA, investment and GI talks relaunched in 2022"], ["CBAM carbon border tax and deforestation rules", "Standards and agriculture sticking points"]),
      tech: t("Promising, early-stage", ["TTC working groups on semiconductors, AI, clean tech", "Horizon Europe research links"], ["Data-adequacy and privacy-regime gaps"]),
      society: t("Growing mobility, uneven by member state", ["Fast-growing student and skilled-worker flows", "Migration and mobility partnerships with several states"], ["Fragmented visa regimes across 27 members"]),
      global: t("Aligned on multilateralism, split on Ukraine", ["Climate action, WTO reform, connectivity (IMEC)"], ["Russia sanctions and energy purchases"]),
    },
    synthesis: { phrase: "From distant market to deliberate partner", line: "Long treated as a trade bureaucracy, the EU became a strategic interlocutor as both sides sought to reduce dependence on China." },
    net: { phrase: "Racing a self-imposed deadline", line: "Both sides have staked credibility on concluding the FTA; carbon rules are the test of whether partnership survives regulation." },
    past: { strength: "The full Commission's Delhi visit lifted the relationship's profile.", opportunity: "Leaders set a deadline to conclude the FTA.", weakness: "Agriculture and standards remained unresolved.", threat: "CBAM reporting began to bite on Indian steel and aluminium." },
    next: { strength: "Shared interest in diversifying away from China.", opportunity: "Signing the FTA and launching IMEC projects.", weakness: "Ratification across member states is slow.", threat: "CBAM's definitive phase raises costs for exporters." },
  },
  china: {
    pillars: {
      political: t("Strategic rivalry with managed contact", ["Leader-level channels and Special Representatives talks", "Both resist Western pressure on internal affairs"], ["Unsettled Line of Actual Control; Galwan 2020", "China–Pakistan alignment"]),
      economic: t("Deep dependence, deep deficit", ["Large trade volume; key inputs for pharma and electronics"], ["Trade deficit near $85 B", "Investment screening (Press Note 3) and app bans"]),
      tech: t("Near-zero cooperation", ["Limited academic exchange"], ["Beijing blocks battery and EV firms from sharing technology with Indian partners", "Indian curbs on Chinese telecom and apps"]),
      society: t("Thin and cautious", ["Kailash Mansarovar pilgrimage and flights resuming"], ["Visa restrictions and almost no journalists in either capital"]),
      global: t("Overlap in forums, rivalry in substance", ["BRICS, SCO, climate positions on developed-country obligations"], ["UNSC reform, terror listings, Indian Ocean presence"]),
    },
    synthesis: { phrase: "From Panchsheel to permanent rivalry", line: "The 1962 war broke the brotherhood of the 1950s; Galwan in 2020 ended the hope that trade could make the border quiet." },
    net: { phrase: "A thaw without trust", line: "Disengagement and resumed flights eased tension, but neither side has altered its long-term threat assessment." },
    past: { strength: "Disengagement at friction points eased the military standoff.", opportunity: "Flights, pilgrimages and some visas resumed.", weakness: "The trade deficit widened further.", threat: "Infrastructure build-up along the LAC continued." },
    next: { strength: "Working channels exist at every level.", opportunity: "Calibrated easing of investment screening.", weakness: "No agreed boundary framework.", threat: "The Brahmaputra mega-dam and water-data sharing." },
  },
  russia: {
    pillars: {
      political: t("Time-tested, slowly hollowing", ["Annual summits and the 'special and privileged' partnership", "Consistent support at the UN"], ["Russia's deepening dependence on China"]),
      economic: t("Oil-led boom, lopsided", ["Discounted crude made Russia a top supplier"], ["Huge deficit and payment-settlement problems"]),
      tech: t("Legacy defence depth", ["S-400, BrahMos, nuclear submarines, Kudankulam"], ["Delayed deliveries and spares since 2022"]),
      society: t("Warm memory, small numbers", ["Medical students and cultural goodwill"], ["Indians recruited into Russian forces"]),
      global: t("Multipolar convergence, war divergence", ["BRICS, SCO, opposition to unilateral sanctions"], ["India will not endorse the war in Ukraine"]),
    },
    synthesis: { phrase: "From the 1971 treaty to a hedge", line: "The Soviet Union was India's guarantor in the Cold War; today Russia is a hedge India keeps because no one else offers the same mix of arms and energy." },
    net: { phrase: "Kept close, at a price", line: "India protects the relationship under Western pressure, while the trade imbalance and China factor limit its depth." },
    past: { strength: "Summit diplomacy continued despite sanctions.", opportunity: "Discounted oil eased India's import bill.", weakness: "Rupee-rouble balances piled up unused.", threat: "Secondary sanctions on buyers of Russian oil." },
    next: { strength: "Defence dependence keeps both invested.", opportunity: "Remaining S-400 deliveries and nuclear units.", weakness: "Settlement mechanisms remain improvised.", threat: "Russia's tilt toward Beijing." },
  },
  pakistan: {
    pillars: {
      political: t("Adversarial, frozen", ["Nuclear-installations list exchanged every January"], ["Cross-border terrorism; Pahalgam and Operation Sindoor (2025)", "No structured dialogue"]),
      economic: t("Negligible", ["Informal trade via third countries"], ["Direct trade suspended since 2019"]),
      tech: t("None", [], ["No cooperation of any kind"]),
      society: t("Shared culture, sealed borders", ["Kartarpur corridor for Sikh pilgrims"], ["Visas and travel largely halted"]),
      global: t("Opposed in most forums", ["Both in SCO"], ["Kashmir at the UN; Pakistan's China and terror-sanctuary nexus"]),
    },
    synthesis: { phrase: "Partition's unfinished argument", line: "Four wars and decades of terrorism have kept the relationship hostage to 1947; every thaw has ended in an attack." },
    net: { phrase: "Deterrence over dialogue", line: "After the 2025 hostilities, India's posture is punitive deterrence and diplomatic isolation of Pakistan." },
    past: { strength: "A ceasefire understanding held after hostilities.", opportunity: "Kartarpur stayed open as a humanitarian channel.", weakness: "No diplomatic channel beyond military hotlines.", threat: "Terror infrastructure across the Line of Control." },
    next: { strength: "India's deterrence credibility is higher.", opportunity: "Back-channel contact, with low expectations.", weakness: "Indus Waters Treaty in abeyance invites legal fights.", threat: "Another major attack triggering escalation." },
  },
  bangladesh: {
    pillars: {
      political: t("Recalibrating after 2024", ["1971 legacy and land-boundary settlement (2015)"], ["Political transition in Dhaka; extradition and minority concerns"]),
      economic: t("Largest South Asian partner, cooling", ["India's biggest trade partner in South Asia; power exports"], ["Mutual trade and transit restrictions"]),
      tech: t("Connectivity-led", ["Rail, power-grid and port links"], ["Projects slowed after 2024"]),
      society: t("Deep kinship, rising suspicion", ["Medical tourism and shared Bengali culture"], ["Visa curbs and border killings"]),
      global: t("Usually aligned", ["South Asian, climate and BIMSTEC positions"], ["Dhaka's outreach to China and Pakistan"]),
    },
    synthesis: { phrase: "From liberation to connectivity", line: "India's role in 1971 created the bond; the 2015 boundary settlement and grids made it a model neighbourhood partnership." },
    net: { phrase: "A partnership reset", line: "Since 2024 both sides are relearning each other, with trade curbs and rhetoric testing old habits." },
    past: { strength: "Power supplies and core trade continued.", opportunity: "Working contacts with the interim government.", weakness: "Trade and visa curbs on both sides.", threat: "Minority-safety incidents inflaming opinion." },
    next: { strength: "Geography makes each indispensable.", opportunity: "Engaging the elected government.", weakness: "Ganga treaty renewal due in 2026.", threat: "Third-country influence in Dhaka." },
  },
  japan: {
    pillars: {
      political: t("Special strategic partnership", ["QUAD, 2+2 dialogue and annual summits"], ["Japan's caution on defence exports"]),
      economic: t("Capital-rich, trade-light", ["Largest source of official development finance; high-speed rail"], ["Trade imbalance under CEPA"]),
      tech: t("Steady, practical", ["Semiconductors, critical minerals, digital partnership"], ["Slow project execution"]),
      society: t("Small but growing", ["Skilled-worker schemes for Indian talent"], ["Language barriers and a small diaspora"]),
      global: t("Closely aligned", ["Indo-Pacific order, UNSC reform (G4)"], ["Nuclear non-proliferation nuances"]),
    },
    synthesis: { phrase: "From goodwill to strategic weight", line: "Post-war goodwill and Japan's aid became, after 2014, a security-and-infrastructure partnership against coercion in Asia." },
    net: { phrase: "Delivery is the test", line: "Commitments are large; the question is whether rail, chips and investment arrive on schedule." },
    past: { strength: "A large private investment target was set.", opportunity: "Semiconductor and minerals cooperation expanded.", weakness: "High-speed rail kept slipping.", threat: "Japanese firms' caution over Indian regulation." },
    next: { strength: "Political consensus in both capitals.", opportunity: "Defence equipment and technology transfer.", weakness: "Execution capacity on mega-projects.", threat: "Regional security shocks diverting attention." },
  },
  "united-arab-emirates": {
    pillars: {
      political: t("Comprehensive strategic partnership", ["Leader-level trust; counter-terror cooperation"], ["Balancing Gulf rivalries"]),
      economic: t("Fastest-growing, CEPA-driven", ["CEPA (2022), rupee-dirham trade, sovereign investment"], ["Oil-price exposure"]),
      tech: t("Fintech and energy", ["UPI/RuPay links, strategic petroleum reserves"], ["Limited deep-tech cooperation"]),
      society: t("The largest Indian community abroad", ["~3.5 M Indians; Hindu temple in Abu Dhabi"], ["Labour welfare cases"]),
      global: t("Pragmatically aligned", ["IMEC, I2U2, energy transition"], ["Different lines on Gaza and regional conflicts"]),
    },
    synthesis: { phrase: "From remittances to strategic depth", line: "A labour-and-oil relationship turned after 2015 into one of India's most productive partnerships." },
    net: { phrase: "Momentum intact", line: "CEPA and investment keep growing even as regional war complicates corridor plans." },
    past: { strength: "Trade under CEPA continued to grow.", opportunity: "Sovereign funds expanded India investments.", weakness: "Labour-welfare issues persisted.", threat: "Regional conflict stalling IMEC." },
    next: { strength: "Leader-level trust.", opportunity: "IMEC corridor projects.", weakness: "Trade still oil-heavy.", threat: "Gulf security shocks." },
  },
  france: {
    pillars: {
      political: t("India's most reliable Western partner", ["Strategic partnership since 1998; backed India after Pokhran"], ["Few — differences mostly at EU level"]),
      economic: t("Modest trade, big contracts", ["Defence and aerospace orders"], ["Trade volumes remain small"]),
      tech: t("Most willing to share", ["Rafale, Scorpène submarines, fighter-engine talks, space"], ["Slow technology-transfer negotiations"]),
      society: t("Growing", ["Student target of 30,000 by 2030"], ["Language barrier"]),
      global: t("Strategically aligned", ["Indian Ocean, climate (ISA), AI governance"], ["EU carbon-border rules"]),
    },
    synthesis: { phrase: "The partner that did not sanction", line: "France stood apart in 1998 and has since been India's steadiest supplier of high technology." },
    net: { phrase: "Steady and ambitious", line: "Horizon 2047 sets the course; engines and nuclear power are the next proofs." },
    past: { strength: "The Rafale-Marine deal was concluded.", opportunity: "AI and digital cooperation gained prominence.", weakness: "Engine co-development still undecided.", threat: "EU-level trade rules." },
    next: { strength: "Political trust at the top.", opportunity: "Fighter-engine co-development.", weakness: "Jaitapur nuclear project stalled.", threat: "Budget pressures in Paris." },
  },
  nepal: {
    pillars: {
      political: t("Close but prickly", ["Open border, Gorkha regiments"], ["Kalapani-Lipulekh map dispute", "Political volatility in Kathmandu"]),
      economic: t("Deep dependence on India", ["India is Nepal's largest trading partner; power exports to India"], ["Perceptions of the 2015 blockade"]),
      tech: t("Hydropower-led", ["Cross-border power lines"], ["Slow project execution"]),
      society: t("Roti-beti ties", ["Millions of Nepalis work in India"], ["Nationalist sentiment against India"]),
      global: t("Mostly aligned", ["South Asian positions"], ["Nepal's BRI engagement"]),
    },
    synthesis: { phrase: "Kinship without ease", line: "The 1950 treaty and open border bind the two, while sovereignty anxieties in Kathmandu keep the relationship sensitive." },
    net: { phrase: "Waiting on Kathmandu", line: "After youth-led protests, India waits for a stable government to resume big-ticket work." },
    past: { strength: "India expanded power purchases.", opportunity: "Long-term power-trade agreement.", weakness: "Lipulekh route objections.", threat: "Government collapse after protests." },
    next: { strength: "Economic interdependence.", opportunity: "Hydropower investment.", weakness: "Boundary dialogue stalled.", threat: "Anti-India mobilisation in elections." },
  },
  "sri-lanka": {
    pillars: {
      political: t("Trust rebuilt after 2022", ["First defence cooperation MoU"], ["Chinese research vessels and port access"]),
      economic: t("India as lifeline", ["~$4 B support during the 2022 crisis"], ["Debt overhang"]),
      tech: t("Energy-led", ["Trincomalee energy hub, grid interconnection"], ["Project delays"]),
      society: t("Deep but sensitive", ["Buddhist and Tamil links"], ["Fishermen disputes in the Palk Strait"]),
      global: t("Mostly aligned", ["Indian Ocean security"], ["Balancing China"]),
    },
    synthesis: { phrase: "From intervention to lifeline", line: "The IPKF years left scars; India's 2022 rescue rebuilt goodwill." },
    net: { phrase: "Delivery over declarations", line: "Energy and defence agreements now need execution." },
    past: { strength: "Defence MoU signed.", opportunity: "Energy hub projects advanced.", weakness: "Fishermen arrests continued.", threat: "Chinese vessel visits." },
    next: { strength: "Goodwill from 2022.", opportunity: "Grid interconnection.", weakness: "Debt restructuring.", threat: "Renewed China leverage." },
  },
};
