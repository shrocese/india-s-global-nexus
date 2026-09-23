import type { Macro, Partner, Source } from "./types";

/** India is the fixed reference point of every comparison in this atlas. */
export const INDIA: Macro = {
  capital: "New Delhi",
  headOfState: "President (ceremonial); Prime Minister heads government",
  system: "Federal parliamentary republic",
  population: "1.44 B",
  medianAge: "28.8",
  hdi: "0.685",
  gdp: "$3.91 T",
  gdpPerCapita: "$2,730",
  territory: "3,287,263 km²",
  currency: "Indian rupee (INR)",
};

export const INDIA_COORD = { lat: 28.61, lng: 77.21, city: "New Delhi" };

const mea: Source = {
  label: "MEA bilateral briefs",
  url: "https://www.mea.gov.in/bilateral-documents.htm",
};
const wb: Source = { label: "World Bank open data", url: "https://data.worldbank.org" };
const undp: Source = {
  label: "UNDP Human Development Report",
  url: "https://hdr.undp.org/data-center",
};
const commerce: Source = {
  label: "Dept. of Commerce trade statistics",
  url: "https://tradestat.commerce.gov.in",
};

export const PARTNERS: Partner[] = [
  {
    code: "US",
    slug: "united-states",
    name: "United States",
    formalName: "United States of America",
    region: "Americas",
    lat: 38.9,
    lng: -77.04,
    temperature: "Cooperative",
    headline: "From estrangement to the widest strategic bandwidth India holds.",
    summary:
      "The relationship moved from Cold War distance to a defence, technology and diaspora partnership that now touches almost every sector. Trade is India's largest bilateral flow; friction persists on tariffs, immigration and Russia policy.",
    macro: {
      capital: "Washington, D.C.",
      headOfState: "President (head of state and government)",
      system: "Federal presidential republic",
      population: "341 M",
      medianAge: "38.9",
      hdi: "0.938",
      gdp: "$29.2 T",
      gdpPerCapita: "$85,800",
      territory: "9,833,517 km²",
      currency: "US dollar (USD)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$77.5 B",
      imports: "$42.2 B",
      balanceNote: "Surplus in India's favour",
      topExports: ["Pharmaceuticals", "Engineering goods", "Gems & jewellery", "Petroleum products", "Textiles"],
      topImports: ["Crude oil & LNG", "Aircraft & parts", "Coal", "Almonds & agri", "Medical instruments"],
    },
    diaspora: {
      total: "4.8 M persons of Indian origin",
      students: "~330,000",
      workers: "~1.1 M in employment",
      note: "The single largest Indian-origin community by income and political weight.",
    },
    vitals: [
      { label: "Time difference", value: "IST −10:30 (EST)" },
      { label: "INR / USD", value: "₹87.4", live: true },
      { label: "Trade balance", value: "+$35.3 B", live: true },
      { label: "Visa", value: "Prior visa required" },
    ],
    timeline: [
      { era: "pre", year: "1794", title: "First consular post", detail: "The United States appoints a consul at Calcutta, its earliest official presence in India." },
      { era: "pre", year: "1893", title: "Vivekananda in Chicago", detail: "The World's Parliament of Religions opens a durable cultural channel between the two societies." },
      { era: "pre", year: "1942", title: "Roosevelt presses London", detail: "Washington urges Britain towards Indian self-government, complicating wartime alliance politics." },
      { era: "post", year: "1949", title: "Nehru's first visit", detail: "Establishes non-alignment as the frame for early Indo-US contact." },
      { era: "post", year: "1971", title: "Bangladesh crisis low point", detail: "The US tilt toward Pakistan and the Indo-Soviet treaty push relations to their coldest." },
      { era: "post", year: "1998", title: "Pokhran-II sanctions", detail: "Nuclear tests trigger sanctions, followed by the Talbott–Singh dialogue that resets ties." },
      { era: "post", year: "2008", title: "Civil nuclear agreement", detail: "The 123 Agreement ends India's nuclear isolation and unlocks broader cooperation." },
      { era: "post", year: "2016", title: "Major Defence Partner", detail: "India receives a designation held by no other non-treaty ally." },
      { era: "post", year: "2023", title: "iCET launched", detail: "The critical and emerging technology initiative covers semiconductors, AI, space and jet engines." },
    ],
    pillars: {
      political: [
        {
          topic: "Strategic architecture",
          points: [
            { text: "The QUAD anchors Indo-Pacific coordination, meeting at leader level since 2021.", source: mea },
            { text: "The 2+2 ministerial dialogue pairs foreign and defence ministers on a regular cycle.", source: mea },
          ],
        },
        {
          topic: "Points of friction",
          points: [
            { text: "India's continued Russian energy and defence purchases remain the principal irritant.", source: mea },
            { text: "Trade remedies, tariff disputes and visa policy recur in every administration.", source: commerce },
          ],
        },
      ],
      geographical: [
        {
          topic: "Maritime theatre",
          points: [
            { text: "Cooperation is concentrated in the Indian Ocean and western Pacific rather than any shared border.", source: mea },
            { text: "Exercise Malabar has grown from a bilateral drill into a four-navy undertaking.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Trade and investment",
          points: [
            { text: "The United States is India's largest single-country trading partner in goods and services combined.", source: commerce },
            { text: "American FDI concentrates in technology services, retail and financial services.", source: wb },
          ],
        },
      ],
      tech: [
        {
          topic: "Critical technology",
          points: [
            { text: "iCET covers semiconductors, quantum, AI, biotechnology and space.", source: mea },
            { text: "A jet engine co-production arrangement for Indian fighter aircraft is the most sensitive item on the agenda.", source: mea },
          ],
        },
        {
          topic: "Space",
          points: [
            { text: "India signed the Artemis Accords in 2023 and works with NASA on the NISAR earth-observation satellite.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "People to people",
          points: [
            { text: "Indian nationals are the largest or second-largest foreign student cohort in American universities each year.", source: mea },
            { text: "Remittance flows from North America are a significant share of India's total inward remittances.", source: wb },
          ],
        },
      ],
    },
    treaties: [
      { year: "2008", instrument: "Civil Nuclear Cooperation (123 Agreement)", sector: "Energy", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2016", instrument: "LEMOA", sector: "Defence", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2018", instrument: "COMCASA", sector: "Defence", status: "Active" },
      { year: "2020", instrument: "BECA", sector: "Defence", status: "Active" },
      { year: "2023", instrument: "iCET framework", sector: "Technology", status: "Active" },
    ],
    news: [
      { date: "2026-09-12", source: "MEA", title: "Semiconductor supply-chain working group reconvenes", summary: "Officials review packaging and test investment commitments under iCET." },
      { date: "2026-08-30", source: "Dept. of Commerce", title: "Goods trade holds above the $120 billion mark", summary: "Pharmaceuticals and engineering goods lead the export basket." },
      { date: "2026-08-04", source: "Ministry of Defence", title: "Malabar exercise adds undersea domain awareness", summary: "The drill expands its anti-submarine and unmanned systems components." },
    ],
  },

  {
    code: "CN",
    slug: "china",
    name: "China",
    formalName: "People's Republic of China",
    region: "East Asia",
    lat: 39.9,
    lng: 116.41,
    temperature: "Strained",
    headline: "Deep trade dependence sitting on top of an unresolved border.",
    summary:
      "India's largest source of imports is also its most serious territorial dispute. Since the 2020 Galwan clash the relationship has run on disengagement talks, investment screening and quiet trade growth.",
    macro: {
      capital: "Beijing",
      headOfState: "President; Premier heads the State Council",
      system: "Single-party socialist republic",
      population: "1.41 B",
      medianAge: "40.2",
      hdi: "0.797",
      gdp: "$18.7 T",
      gdpPerCapita: "$13,300",
      territory: "9,596,960 km²",
      currency: "Renminbi (CNY)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$16.7 B",
      imports: "$101.7 B",
      balanceNote: "India's largest bilateral deficit",
      topExports: ["Iron ore", "Cotton & yarn", "Refined petroleum", "Marine products", "Organic chemicals"],
      topImports: ["Electronics & components", "Machinery", "Active pharmaceutical ingredients", "Fertilisers", "Solar cells"],
    },
    diaspora: {
      total: "~45,000 Indian nationals",
      students: "~8,000",
      workers: "~20,000 in business and services",
      note: "Numbers fell sharply after 2020 and have only partly recovered.",
    },
    vitals: [
      { label: "Time difference", value: "IST +2:30" },
      { label: "INR / CNY", value: "₹12.1", live: true },
      { label: "Trade balance", value: "−$85.0 B", live: true },
      { label: "Visa", value: "Prior visa required" },
    ],
    timeline: [
      { era: "pre", year: "c. 65 CE", title: "Buddhist transmission", detail: "Monastic and textual exchange makes India a formative influence on Chinese religious life." },
      { era: "pre", year: "1405", title: "Zheng He's voyages", detail: "Ming fleets reach Calicut and Cochin, formalising maritime trade contact." },
      { era: "pre", year: "1938", title: "Indian medical mission", detail: "A Congress-sponsored mission, including Dr Kotnis, serves in wartime China." },
      { era: "post", year: "1950", title: "Recognition", detail: "India is among the first non-communist states to recognise the People's Republic." },
      { era: "post", year: "1954", title: "Panchsheel", detail: "The five principles of peaceful coexistence are signed alongside the Tibet trade agreement." },
      { era: "post", year: "1962", title: "Border war", detail: "Defeat in the Himalayas freezes the relationship for over two decades." },
      { era: "post", year: "1988", title: "Rajiv Gandhi in Beijing", detail: "Talks resume and the border question is decoupled from wider cooperation." },
      { era: "post", year: "2020", title: "Galwan Valley", detail: "The first combat deaths on the LAC in 45 years reset the relationship." },
      { era: "post", year: "2024", title: "Patrolling understanding", detail: "An arrangement on eastern Ladakh patrolling points allows limited normalisation." },
    ],
    pillars: {
      political: [
        {
          topic: "Border management",
          points: [
            { text: "The LAC remains undemarcated along most of its length, with disengagement handled corps-commander to corps-commander.", source: mea },
            { text: "India's stated position is that the state of the border determines the state of the relationship.", source: mea },
          ],
        },
        {
          topic: "Multilateral overlap",
          points: [
            { text: "Both states sit in BRICS and the SCO while competing directly in South Asia and the Indian Ocean.", source: mea },
            { text: "China's hold on India's UNSC and NSG ambitions is a standing constraint.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Disputed sectors",
          points: [
            { text: "Aksai Chin in the west and Arunachal Pradesh in the east are the two principal claims.", source: mea },
            { text: "Upstream control of the Brahmaputra gives Beijing hydrological leverage.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Structural dependence",
          points: [
            { text: "China supplies a large share of India's electronics components and pharmaceutical ingredients.", source: commerce },
            { text: "Press Note 3 of 2020 requires government approval for investment from bordering countries.", source: mea },
          ],
        },
      ],
      tech: [
        {
          topic: "Restriction rather than cooperation",
          points: [
            { text: "Hundreds of Chinese applications have been blocked on security grounds since 2020.", source: mea },
            { text: "Telecom equipment procurement is governed by a trusted-source regime.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Thin contact",
          points: [
            { text: "Direct flights, journalist visas and student mobility have only partially resumed.", source: mea },
            { text: "The Kailash Mansarovar pilgrimage route remains a recurring negotiating item.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1954", instrument: "Panchsheel Agreement on Tibet trade", sector: "Political", status: "Lapsed" },
      { year: "1993", instrument: "Agreement on Peace and Tranquility along the LAC", sector: "Border", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "1996", instrument: "Confidence Building Measures in the Military Field", sector: "Defence", status: "Active" },
      { year: "2013", instrument: "Border Defence Cooperation Agreement", sector: "Border", status: "Under review" },
    ],
    news: [
      { date: "2026-09-02", source: "MEA", title: "Working mechanism meets on remaining friction points", summary: "Officials review buffer zones in eastern Ladakh." },
      { date: "2026-08-19", source: "Commerce Ministry", title: "Import deficit widens on electronics demand", summary: "Component sourcing keeps the trade gap near record levels." },
      { date: "2026-07-25", source: "Civil Aviation", title: "Limited direct flights resume", summary: "A restricted schedule reopens after a four-year suspension." },
    ],
  },

  {
    code: "RU",
    slug: "russia",
    name: "Russia",
    formalName: "Russian Federation",
    region: "Eurasia",
    lat: 55.75,
    lng: 37.62,
    temperature: "Cooperative",
    headline: "A defence and energy relationship India has declined to abandon.",
    summary:
      "Moscow remains India's largest historical arms supplier and, since 2022, a dominant source of discounted crude. India has kept the partnership while refusing to endorse the war in Ukraine.",
    macro: {
      capital: "Moscow",
      headOfState: "President; Prime Minister heads government",
      system: "Federal semi-presidential republic",
      population: "144 M",
      medianAge: "40.3",
      hdi: "0.832",
      gdp: "$2.18 T",
      gdpPerCapita: "$15,100",
      territory: "17,098,246 km²",
      currency: "Russian rouble (RUB)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$4.3 B",
      imports: "$61.4 B",
      balanceNote: "Deficit driven almost entirely by crude oil",
      topExports: ["Pharmaceuticals", "Organic chemicals", "Marine products", "Machinery", "Tea & coffee"],
      topImports: ["Crude oil", "Fertilisers", "Coking coal", "Defence equipment", "Precious stones"],
    },
    diaspora: {
      total: "~25,000 Indian nationals",
      students: "~18,000",
      workers: "~6,000",
      note: "Medical education accounts for most of the student population.",
    },
    vitals: [
      { label: "Time difference", value: "IST −2:30 (MSK)" },
      { label: "INR / RUB", value: "₹1.05", live: true },
      { label: "Trade balance", value: "−$57.1 B", live: true },
      { label: "Visa", value: "E-visa available" },
    ],
    timeline: [
      { era: "pre", year: "1466", title: "Afanasy Nikitin", detail: "A Tver merchant's travelogue is the earliest sustained Russian account of India." },
      { era: "pre", year: "1900s", title: "Revolutionary contact", detail: "Indian revolutionaries find refuge and support in early Soviet Russia." },
      { era: "pre", year: "1927", title: "Nehru in Moscow", detail: "The visit shapes Congress thinking on planned industrial development." },
      { era: "post", year: "1955", title: "Bulganin–Khrushchev visit", detail: "Soviet backing on Kashmir cements a durable alignment." },
      { era: "post", year: "1971", title: "Treaty of Peace and Friendship", detail: "Signed weeks before the Bangladesh war; Soviet naval presence deters escalation." },
      { era: "post", year: "1991", title: "Post-Soviet reset", detail: "Rupee-rouble trade collapses and the relationship is rebuilt on commercial terms." },
      { era: "post", year: "2000", title: "Strategic Partnership declared", detail: "Annual summits become the institutional backbone." },
      { era: "post", year: "2018", title: "S-400 contract", detail: "The air defence purchase proceeds despite American sanctions pressure." },
      { era: "post", year: "2022", title: "Discounted crude", detail: "Russia becomes India's largest oil supplier within a single year." },
    ],
    pillars: {
      political: [
        {
          topic: "Defence supply",
          points: [
            { text: "A large share of Indian military platforms remain of Soviet or Russian origin, creating long-term spares dependence.", source: mea },
            { text: "India has diversified procurement since 2020 while maintaining existing contracts.", source: mea },
          ],
        },
        {
          topic: "Ukraine position",
          points: [
            { text: "India has abstained on most UN votes and called for dialogue rather than condemnation.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Connectivity",
          points: [
            { text: "The International North–South Transport Corridor routes cargo through Iran to reach Russia.", source: mea },
            { text: "The Chennai–Vladivostok eastern maritime corridor is under development.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Energy and payments",
          points: [
            { text: "Crude oil dominates the import basket and drives the deficit.", source: commerce },
            { text: "Rupee-denominated settlement mechanisms remain only partially resolved.", source: wb },
          ],
        },
      ],
      tech: [
        {
          topic: "Nuclear and space",
          points: [
            { text: "Rosatom is building the Kudankulam nuclear power station in Tamil Nadu.", source: mea },
            { text: "Russian agencies supported crew training for India's human spaceflight programme.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Education",
          points: [
            { text: "Russian medical universities host a large Indian student population, a fact underlined by the 2022 evacuations.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1971", instrument: "Treaty of Peace, Friendship and Cooperation", sector: "Political", status: "Lapsed" },
      { year: "1993", instrument: "Treaty of Friendship and Cooperation", sector: "Political", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2000", instrument: "Declaration on Strategic Partnership", sector: "Political", status: "Active" },
      { year: "2019", instrument: "Programme of Military-Technical Cooperation", sector: "Defence", status: "Active" },
    ],
    news: [
      { date: "2026-09-08", source: "MEA", title: "Annual summit agenda set", summary: "Energy, connectivity and defence spares lead the draft agenda." },
      { date: "2026-08-21", source: "Petroleum Ministry", title: "Crude imports steady despite narrowing discount", summary: "Russian barrels remain the largest single source." },
      { date: "2026-07-30", source: "Shipping Ministry", title: "Eastern maritime corridor trial sailing completed", summary: "The Chennai–Vladivostok route cuts transit time by about a third." },
    ],
  },

  {
    code: "PK",
    slug: "pakistan",
    name: "Pakistan",
    formalName: "Islamic Republic of Pakistan",
    region: "South Asia",
    lat: 33.69,
    lng: 73.05,
    temperature: "Strained",
    headline: "A shared origin, a contested border and almost no functioning channel.",
    summary:
      "Relations have been suspended in practice since 2019: no high commissioners, negligible trade, and no composite dialogue. Terrorism and the status of Jammu and Kashmir define the agenda.",
    macro: {
      capital: "Islamabad",
      headOfState: "President (ceremonial); Prime Minister heads government",
      system: "Federal parliamentary republic",
      population: "247 M",
      medianAge: "20.6",
      hdi: "0.544",
      gdp: "$375 B",
      gdpPerCapita: "$1,520",
      territory: "881,913 km²",
      currency: "Pakistani rupee (PKR)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$1.2 B",
      imports: "$0.003 B",
      balanceNote: "Near-total suspension since 2019",
      topExports: ["Pharmaceuticals", "Organic chemicals", "Sugar", "Cotton"],
      topImports: ["Rock salt", "Dry fruit (via third countries)"],
    },
    diaspora: {
      total: "Negligible resident community",
      students: "None",
      workers: "None",
      note: "Cross-border movement is limited to restricted visa categories and pilgrimages.",
    },
    vitals: [
      { label: "Time difference", value: "IST −0:30 (PKT)" },
      { label: "INR / PKR", value: "₹0.31", live: true },
      { label: "Trade balance", value: "+$1.2 B", live: true },
      { label: "Visa", value: "Restricted categories only" },
    ],
    timeline: [
      { era: "pre", year: "1906", title: "Muslim League founded", detail: "Separate-electorate politics begins the constitutional track to partition." },
      { era: "pre", year: "1940", title: "Lahore Resolution", detail: "The demand for separate Muslim-majority states is formalised." },
      { era: "pre", year: "1947", title: "Partition", detail: "Independence and partition displace an estimated fourteen million people." },
      { era: "post", year: "1948", title: "First Kashmir war", detail: "A UN-brokered ceasefire fixes the line that becomes the LoC." },
      { era: "post", year: "1960", title: "Indus Waters Treaty", detail: "World Bank mediation produces a water-sharing arrangement that has survived every war." },
      { era: "post", year: "1971", title: "Bangladesh Liberation War", detail: "Pakistan's eastern wing becomes independent Bangladesh." },
      { era: "post", year: "1972", title: "Simla Agreement", detail: "Both states commit to settling disputes bilaterally." },
      { era: "post", year: "1999", title: "Kargil conflict", detail: "Fighting follows within months of the Lahore Declaration." },
      { era: "post", year: "2019", title: "Downgrade", detail: "Diplomatic missions are reduced and trade suspended after Pulwama and the Article 370 decision." },
    ],
    pillars: {
      political: [
        {
          topic: "Standing position",
          points: [
            { text: "India holds that talks and terrorism cannot proceed together.", source: mea },
            { text: "Jammu and Kashmir is treated by India as an internal constitutional matter.", source: mea },
          ],
        },
        {
          topic: "Regional effect",
          points: [
            { text: "SAARC has held no summit since 2016; India has shifted regional effort to BIMSTEC.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Boundaries",
          points: [
            { text: "The LoC in Kashmir, the Sir Creek maritime boundary and the Siachen glacier remain unresolved.", source: mea },
            { text: "A 2021 ceasefire understanding along the LoC has largely held.", source: mea },
          ],
        },
        {
          topic: "Water",
          points: [
            { text: "India has issued notices seeking modification of the Indus Waters Treaty.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Suspended trade",
          points: [
            { text: "Most-favoured-nation status was withdrawn in 2019 and duties raised to 200 per cent.", source: commerce },
            { text: "Residual trade moves through third countries, chiefly the UAE.", source: commerce },
          ],
        },
      ],
      tech: [
        {
          topic: "Nuclear risk management",
          points: [
            { text: "An annual exchange of lists of nuclear installations under the 1988 agreement continues without interruption.", source: mea },
            { text: "Ballistic missile test pre-notification remains in force.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Limited channels",
          points: [
            { text: "The Kartarpur Corridor allows visa-free Sikh pilgrimage to Gurdwara Darbar Sahib.", source: mea },
            { text: "Sporting contact is confined to neutral venues at multilateral tournaments.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1960", instrument: "Indus Waters Treaty", sector: "Water", status: "Under review", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "1972", instrument: "Simla Agreement", sector: "Political", status: "Active" },
      { year: "1988", instrument: "Non-Attack on Nuclear Installations", sector: "Nuclear", status: "Active" },
      { year: "1999", instrument: "Lahore Declaration", sector: "Political", status: "Lapsed" },
      { year: "2019", instrument: "Kartarpur Corridor Agreement", sector: "Consular", status: "Active" },
    ],
    news: [
      { date: "2026-09-05", source: "MEA", title: "Annual nuclear installations list exchanged", summary: "The practice continues uninterrupted since 1992." },
      { date: "2026-08-12", source: "MEA", title: "Kartarpur pilgrim numbers rise", summary: "Daily crossing quotas are being used more fully than in prior years." },
      { date: "2026-07-18", source: "Jal Shakti Ministry", title: "Treaty modification notice reiterated", summary: "India restates its call to renegotiate the 1960 water arrangement." },
    ],
  },

  {
    code: "BD",
    slug: "bangladesh",
    name: "Bangladesh",
    formalName: "People's Republic of Bangladesh",
    region: "South Asia",
    lat: 23.81,
    lng: 90.41,
    temperature: "Neutral",
    headline: "India's longest land border and its largest South Asian trade partner.",
    summary:
      "A relationship built on the 1971 war, settled by the 2015 land boundary exchange, and tested since 2024 by political change in Dhaka. Water sharing and connectivity are the standing files.",
    macro: {
      capital: "Dhaka",
      headOfState: "President (ceremonial); Chief Adviser heads the interim government",
      system: "Unitary parliamentary republic",
      population: "173 M",
      medianAge: "28.0",
      hdi: "0.685",
      gdp: "$451 B",
      gdpPerCapita: "$2,610",
      territory: "147,570 km²",
      currency: "Bangladeshi taka (BDT)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$11.1 B",
      imports: "$1.8 B",
      balanceNote: "Large surplus in India's favour",
      topExports: ["Cotton", "Cereals", "Refined petroleum", "Vehicles", "Machinery"],
      topImports: ["Ready-made garments", "Jute goods", "Fish", "Leather"],
    },
    diaspora: {
      total: "~10,000 Indian nationals resident",
      students: "~1,500",
      workers: "~8,000 in textiles and management",
      note: "Bangladeshi nationals are among the largest groups of medical tourists to India.",
    },
    vitals: [
      { label: "Time difference", value: "IST +0:30" },
      { label: "INR / BDT", value: "₹0.72", live: true },
      { label: "Trade balance", value: "+$9.3 B", live: true },
      { label: "Visa", value: "Prior visa required" },
    ],
    timeline: [
      { era: "pre", year: "1905", title: "Partition of Bengal", detail: "The first division of Bengal shapes a century of regional politics." },
      { era: "pre", year: "1943", title: "Bengal famine", detail: "A shared catastrophe across the undivided province." },
      { era: "pre", year: "1947", title: "East Bengal to Pakistan", detail: "Partition places the eastern delta in a state separated by 1,600 kilometres." },
      { era: "post", year: "1971", title: "Liberation War", detail: "Indian intervention is decisive in the creation of Bangladesh." },
      { era: "post", year: "1972", title: "Treaty of Friendship", detail: "A 25-year treaty establishes the founding framework." },
      { era: "post", year: "1996", title: "Ganga Waters Treaty", detail: "A 30-year sharing arrangement at the Farakka barrage." },
      { era: "post", year: "2015", title: "Land Boundary Agreement", detail: "Enclaves are exchanged, settling a dispute inherited from 1947." },
      { era: "post", year: "2020", title: "Rail links restored", detail: "Pre-1965 rail connections are progressively reopened." },
      { era: "post", year: "2024", title: "Political transition", detail: "A change of government in Dhaka introduces uncertainty into several files." },
    ],
    pillars: {
      political: [
        {
          topic: "Security cooperation",
          points: [
            { text: "Coordinated border management has reduced insurgent sanctuary in the northeast.", source: mea },
            { text: "The relationship is being recalibrated following the 2024 change of government.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Border and rivers",
          points: [
            { text: "The 4,096-kilometre boundary is India's longest with any neighbour.", source: mea },
            { text: "Fifty-four rivers cross the border; the Teesta sharing agreement remains unsigned.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Trade and lines of credit",
          points: [
            { text: "India has extended multiple lines of credit for roads, rail and ports.", source: mea },
            { text: "Bangladesh is India's largest export destination in South Asia.", source: commerce },
          ],
        },
      ],
      tech: [
        {
          topic: "Energy and digital",
          points: [
            { text: "Cross-border electricity transmission supplies a meaningful share of Bangladesh's grid.", source: mea },
            { text: "The India–Bangladesh Friendship Pipeline carries diesel to the north of the country.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Movement of people",
          points: [
            { text: "India issues among its highest volumes of visas to Bangladeshi nationals, largely for medical travel.", source: mea },
            { text: "Shared language and cultural production sustain dense informal ties across Bengal.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1972", instrument: "Treaty of Friendship, Cooperation and Peace", sector: "Political", status: "Lapsed" },
      { year: "1996", instrument: "Ganga Waters Treaty", sector: "Water", status: "Under review", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2015", instrument: "Land Boundary Agreement", sector: "Border", status: "Active" },
      { year: "2018", instrument: "Coastal Shipping Agreement", sector: "Trade", status: "Active" },
    ],
    news: [
      { date: "2026-09-10", source: "MEA", title: "Joint river commission meets on Teesta", summary: "Technical talks resume after an extended pause." },
      { date: "2026-08-27", source: "Power Ministry", title: "Cross-border transmission capacity raised", summary: "A new interconnection adds to existing supply." },
      { date: "2026-08-02", source: "MEA", title: "Visa processing normalises", summary: "Medical and student categories return to pre-2024 volumes." },
    ],
  },

  {
    code: "JP",
    slug: "japan",
    name: "Japan",
    formalName: "Japan",
    region: "East Asia",
    lat: 35.68,
    lng: 139.69,
    temperature: "Cooperative",
    headline: "The least contentious of India's major partnerships.",
    summary:
      "Japan is India's largest single source of concessional infrastructure finance and a QUAD partner with no disputes on the table. Capital, technology and Indo-Pacific alignment define the relationship.",
    macro: {
      capital: "Tokyo",
      headOfState: "Emperor (ceremonial); Prime Minister heads government",
      system: "Unitary parliamentary constitutional monarchy",
      population: "123 M",
      medianAge: "49.9",
      hdi: "0.925",
      gdp: "$4.07 T",
      gdpPerCapita: "$33,100",
      territory: "377,975 km²",
      currency: "Japanese yen (JPY)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$5.2 B",
      imports: "$17.7 B",
      balanceNote: "Deficit, offset by large investment inflows",
      topExports: ["Marine products", "Organic chemicals", "Petroleum products", "Machinery", "Iron ore"],
      topImports: ["Machinery", "Steel", "Vehicles & parts", "Electrical equipment", "Copper"],
    },
    diaspora: {
      total: "~46,000 Indian nationals",
      students: "~1,800",
      workers: "~30,000, concentrated in IT",
      note: "A specified skilled worker route is steadily expanding the labour channel.",
    },
    vitals: [
      { label: "Time difference", value: "IST +3:30 (JST)" },
      { label: "INR / JPY", value: "₹0.57", live: true },
      { label: "Trade balance", value: "−$12.5 B", live: true },
      { label: "Visa", value: "E-visa available" },
    ],
    timeline: [
      { era: "pre", year: "752", title: "Bodhisena at Todai-ji", detail: "An Indian monk consecrates the Great Buddha at Nara." },
      { era: "pre", year: "1903", title: "Okakura and Tagore", detail: "Pan-Asian intellectual exchange links Calcutta and Tokyo." },
      { era: "pre", year: "1943", title: "Indian National Army", detail: "Subhas Chandra Bose operates from Japanese-held territory." },
      { era: "post", year: "1949", title: "Nehru's elephant", detail: "Indira the elephant is sent to Ueno Zoo, a small gesture with lasting public memory." },
      { era: "post", year: "1952", title: "Peace Treaty", detail: "A separate bilateral treaty follows India's refusal to sign at San Francisco." },
      { era: "post", year: "1958", title: "First yen loan", detail: "India becomes the first recipient of Japanese development assistance." },
      { era: "post", year: "2006", title: "Strategic and Global Partnership", detail: "The relationship is upgraded and made summit-driven." },
      { era: "post", year: "2015", title: "Shinkansen agreement", detail: "Japan finances the Mumbai–Ahmedabad high-speed rail corridor." },
      { era: "post", year: "2022", title: "Investment target", detail: "Japan commits to five trillion yen of investment in India over five years." },
    ],
    pillars: {
      political: [
        {
          topic: "Indo-Pacific alignment",
          points: [
            { text: "Both states are QUAD members and hold a 2+2 ministerial dialogue.", source: mea },
            { text: "There are no territorial or historical disputes between them.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Connectivity",
          points: [
            { text: "Joint projects extend to Sri Lanka, Bangladesh and the northeast Indian states.", source: mea },
            { text: "The Asia–Africa Growth Corridor is the shared third-country framework.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Capital flows",
          points: [
            { text: "Japan is among the top five sources of FDI into India, led by automotive and financial services.", source: wb },
            { text: "The 2011 CEPA covers the bulk of bilateral tariff lines.", source: commerce },
          ],
        },
      ],
      tech: [
        {
          topic: "Industrial technology",
          points: [
            { text: "Semiconductor supply-chain cooperation was formalised in 2023.", source: mea },
            { text: "The Chandrayaan follow-on lunar polar mission is a joint ISRO–JAXA undertaking.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Skills and mobility",
          points: [
            { text: "A technical intern and specified skilled worker arrangement channels Indian labour into care and manufacturing.", source: mea },
            { text: "Japanese language instruction has expanded in Indian schools under a bilateral programme.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1952", instrument: "Treaty of Peace", sector: "Political", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2011", instrument: "Comprehensive Economic Partnership Agreement", sector: "Trade", status: "Active" },
      { year: "2016", instrument: "Civil Nuclear Cooperation Agreement", sector: "Energy", status: "Active" },
      { year: "2020", instrument: "Reciprocal Provision of Supplies and Services", sector: "Defence", status: "Active" },
    ],
    news: [
      { date: "2026-09-14", source: "MEA", title: "High-speed rail corridor passes a construction milestone", summary: "Viaduct work advances on the Gujarat section." },
      { date: "2026-08-25", source: "MEITY", title: "Semiconductor cooperation review held", summary: "Officials assess packaging and materials investment." },
      { date: "2026-08-06", source: "ISRO", title: "Lunar polar mission design review completed", summary: "The joint ISRO–JAXA mission clears a key gate." },
    ],
  },

  {
    code: "AE",
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    formalName: "United Arab Emirates",
    region: "West Asia",
    lat: 24.45,
    lng: 54.38,
    temperature: "Cooperative",
    headline: "India's diaspora capital and its fastest-moving trade agreement.",
    summary:
      "Around 3.5 million Indians live in the Emirates, and the 2022 CEPA was negotiated in 88 days. Energy, remittances, payments and corridor politics run in parallel.",
    macro: {
      capital: "Abu Dhabi",
      headOfState: "President; Prime Minister heads the federal cabinet",
      system: "Federal absolute monarchy of seven emirates",
      population: "11.0 M",
      medianAge: "33.5",
      hdi: "0.940",
      gdp: "$545 B",
      gdpPerCapita: "$49,500",
      territory: "83,600 km²",
      currency: "UAE dirham (AED)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$35.6 B",
      imports: "$48.0 B",
      balanceNote: "Deficit driven by crude and gold",
      topExports: ["Refined petroleum", "Gems & jewellery", "Engineering goods", "Cereals", "Textiles"],
      topImports: ["Crude oil", "Gold", "Petrochemicals", "Aluminium", "Dates"],
    },
    diaspora: {
      total: "~3.5 M Indian nationals",
      students: "~50,000",
      workers: "~3.0 M, mostly construction, retail and services",
      note: "The largest expatriate community in the Emirates and India's biggest single remittance source.",
    },
    vitals: [
      { label: "Time difference", value: "IST −1:30 (GST)" },
      { label: "INR / AED", value: "₹23.8", live: true },
      { label: "Trade balance", value: "−$12.4 B", live: true },
      { label: "Visa", value: "Visa on arrival for eligible holders" },
    ],
    timeline: [
      { era: "pre", year: "3rd c. BCE", title: "Gulf trade", detail: "Indian Ocean dhow routes link Gujarat to the Trucial Coast." },
      { era: "pre", year: "1853", title: "Perpetual Maritime Truce", detail: "British Indian administration governs the Trucial States from Bombay." },
      { era: "pre", year: "1900s", title: "Rupee circulation", detail: "The Indian rupee and later the Gulf rupee serve as legal tender on the coast." },
      { era: "post", year: "1972", title: "Diplomatic relations", detail: "Established a year after the federation is formed." },
      { era: "post", year: "1970s", title: "Labour migration begins", detail: "The oil boom draws the first large wave of Indian workers." },
      { era: "post", year: "2015", title: "Strategic Partnership", detail: "The first Indian prime ministerial visit in 34 years resets the relationship." },
      { era: "post", year: "2022", title: "CEPA signed", detail: "Negotiated in under three months and in force within four." },
      { era: "post", year: "2023", title: "IMEC announced", detail: "The corridor initiative places the Emirates on India's westward logistics route." },
      { era: "post", year: "2023", title: "Rupee settlement", detail: "Local currency settlement and UPI acceptance begin operating." },
    ],
    pillars: {
      political: [
        {
          topic: "Strategic convergence",
          points: [
            { text: "The I2U2 grouping links India, Israel, the United States and the Emirates on food and energy projects.", source: mea },
            { text: "Counter-terrorism and extradition cooperation has expanded markedly since 2015.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Corridor position",
          points: [
            { text: "The Emirates is the western hinge of IMEC, connecting Indian ports to Gulf rail and onward to Europe.", source: mea },
            { text: "Jebel Ali is a principal transhipment point for Indian cargo.", source: commerce },
          ],
        },
      ],
      economic: [
        {
          topic: "CEPA effect",
          points: [
            { text: "The agreement removed duties on the large majority of tariff lines from entry into force.", source: commerce },
            { text: "Emirati sovereign funds have committed substantial capital to Indian infrastructure and renewables.", source: wb },
          ],
        },
      ],
      tech: [
        {
          topic: "Payments and energy",
          points: [
            { text: "UPI acceptance and RuPay issuance operate across Emirati merchants.", source: mea },
            { text: "ADNOC holds crude storage in India's strategic petroleum reserve.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Labour and welfare",
          points: [
            { text: "Labour mobility agreements govern recruitment, contracts and grievance redress.", source: mea },
            { text: "The BAPS temple in Abu Dhabi, consecrated in 2024, is the region's first traditional Hindu stone temple.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1999", instrument: "Extradition Treaty", sector: "Legal", status: "Active" },
      { year: "2015", instrument: "Comprehensive Strategic Partnership", sector: "Political", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2022", instrument: "Comprehensive Economic Partnership Agreement", sector: "Trade", status: "Active" },
      { year: "2023", instrument: "Local Currency Settlement System", sector: "Finance", status: "Active" },
    ],
    news: [
      { date: "2026-09-07", source: "Commerce Ministry", title: "CEPA trade crosses the next milestone", summary: "Non-oil trade growth outpaces the overall basket." },
      { date: "2026-08-18", source: "MEA", title: "Labour mobility review held in Abu Dhabi", summary: "Recruitment standards and grievance mechanisms are examined." },
      { date: "2026-07-22", source: "RBI", title: "Rupee-dirham settlement volumes rise", summary: "Local currency invoicing expands beyond oil." },
    ],
  },

  {
    code: "FR",
    slug: "france",
    name: "France",
    formalName: "French Republic",
    region: "Europe",
    lat: 48.86,
    lng: 2.35,
    temperature: "Cooperative",
    headline: "Europe's most reliable strategic partner for India.",
    summary:
      "France stood by India after the 1998 nuclear tests, supplies frontline aircraft and submarines, and is a resident Indian Ocean power. Strategic autonomy is the shared vocabulary.",
    macro: {
      capital: "Paris",
      headOfState: "President; Prime Minister heads government",
      system: "Unitary semi-presidential republic",
      population: "68.4 M",
      medianAge: "42.6",
      hdi: "0.920",
      gdp: "$3.17 T",
      gdpPerCapita: "$46,300",
      territory: "551,695 km²",
      currency: "Euro (EUR)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$7.2 B",
      imports: "$6.4 B",
      balanceNote: "Broadly balanced",
      topExports: ["Engineering goods", "Textiles", "Chemicals", "Gems & jewellery", "Pharmaceuticals"],
      topImports: ["Aircraft & parts", "Machinery", "Chemicals", "Wine & spirits", "Electrical equipment"],
    },
    diaspora: {
      total: "~1.1 M persons of Indian origin, including overseas territories",
      students: "~10,000",
      workers: "~40,000 in mainland France",
      note: "Réunion and the former French comptoirs account for a large share of the origin community.",
    },
    vitals: [
      { label: "Time difference", value: "IST −4:30 (CEST)" },
      { label: "INR / EUR", value: "₹95.2", live: true },
      { label: "Trade balance", value: "+$0.8 B", live: true },
      { label: "Visa", value: "Schengen visa required" },
    ],
    timeline: [
      { era: "pre", year: "1668", title: "Surat factory", detail: "The French East India Company establishes its first Indian trading post." },
      { era: "pre", year: "1674", title: "Pondicherry founded", detail: "The settlement becomes the centre of French India." },
      { era: "pre", year: "1761", title: "Fall of Pondicherry", detail: "Defeat in the Carnatic wars ends French territorial ambition in India." },
      { era: "post", year: "1947", title: "Relations established", detail: "Diplomatic ties begin at independence." },
      { era: "post", year: "1954", title: "De facto transfer", detail: "Pondicherry, Karaikal, Mahé and Yanam are transferred to India." },
      { era: "post", year: "1998", title: "No sanctions", detail: "France declines to sanction India after Pokhran-II, unlike most Western states." },
      { era: "post", year: "1998", title: "Strategic Partnership", detail: "The first such partnership India signed with any country." },
      { era: "post", year: "2016", title: "Rafale contract", detail: "Thirty-six aircraft are ordered in a government-to-government deal." },
      { era: "post", year: "2023", title: "Horizon 2047", detail: "A 25-year roadmap covering defence, space, climate and mobility." },
    ],
    pillars: {
      political: [
        {
          topic: "Defence backbone",
          points: [
            { text: "Rafale aircraft and Scorpène submarines are the two flagship platforms.", source: mea },
            { text: "France supports Indian permanent membership of the UNSC.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Indian Ocean presence",
          points: [
            { text: "Réunion and French Southern Territories make France a resident Indian Ocean power.", source: mea },
            { text: "Reciprocal logistics support gives Indian ships access to French facilities across the ocean.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Investment",
          points: [
            { text: "French firms operate across energy, retail, defence manufacturing and rail in India.", source: wb },
            { text: "Trade is modest relative to strategic depth and is a stated area for growth.", source: commerce },
          ],
        },
      ],
      tech: [
        {
          topic: "Space and nuclear",
          points: [
            { text: "ISRO and CNES cooperate on earth observation, including the Trishna thermal mission.", source: mea },
            { text: "The Jaitapur nuclear project remains under commercial negotiation.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Mobility",
          points: [
            { text: "A migration and mobility partnership agreement governs student and professional movement.", source: mea },
            { text: "France has set a target of 30,000 Indian students; UPI acceptance began at the Eiffel Tower in 2024.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1998", instrument: "Strategic Partnership Declaration", sector: "Political", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2008", instrument: "Civil Nuclear Cooperation Agreement", sector: "Energy", status: "Active" },
      { year: "2018", instrument: "Reciprocal Logistics Support Agreement", sector: "Defence", status: "Active" },
      { year: "2018", instrument: "Migration and Mobility Partnership", sector: "Consular", status: "Active" },
      { year: "2023", instrument: "Horizon 2047 Roadmap", sector: "Political", status: "Active" },
    ],
    news: [
      { date: "2026-09-11", source: "Ministry of Defence", title: "Naval Rafale induction schedule confirmed", summary: "Carrier-borne aircraft deliveries are sequenced through the decade." },
      { date: "2026-08-29", source: "ISRO", title: "Joint thermal imaging satellite passes integration", summary: "The ISRO–CNES mission moves towards launch." },
      { date: "2026-08-09", source: "MEA", title: "Student mobility target reviewed", summary: "Both sides assess progress against the 30,000 figure." },
    ],
  },

  {
    code: "NP",
    slug: "nepal",
    name: "Nepal",
    formalName: "Federal Democratic Republic of Nepal",
    region: "South Asia",
    lat: 27.72,
    lng: 85.32,
    temperature: "Neutral",
    headline: "An open border and a relationship that resists ordinary diplomacy.",
    summary:
      "Citizens move and work freely across the border under the 1950 treaty. That intimacy magnifies every dispute: the Kalapani boundary, the treaty's revision, and Kathmandu's balancing with Beijing.",
    macro: {
      capital: "Kathmandu",
      headOfState: "President (ceremonial); Prime Minister heads government",
      system: "Federal parliamentary republic",
      population: "30.5 M",
      medianAge: "25.3",
      hdi: "0.622",
      gdp: "$44 B",
      gdpPerCapita: "$1,440",
      territory: "147,516 km²",
      currency: "Nepalese rupee (NPR), pegged to INR",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$7.1 B",
      imports: "$0.8 B",
      balanceNote: "Heavy surplus in India's favour",
      topExports: ["Petroleum products", "Vehicles", "Cereals", "Machinery", "Medicines"],
      topImports: ["Soybean oil", "Cardamom", "Jute goods", "Electricity", "Tea"],
    },
    diaspora: {
      total: "~600,000 Indian nationals resident",
      students: "~5,000",
      workers: "~500,000 across trade and services",
      note: "Movement is reciprocal and visa-free; several million Nepali citizens work in India.",
    },
    vitals: [
      { label: "Time difference", value: "IST +0:15 (NPT)" },
      { label: "INR / NPR", value: "₹0.625 (pegged)" },
      { label: "Trade balance", value: "+$6.3 B", live: true },
      { label: "Visa", value: "Visa-free movement" },
    ],
    timeline: [
      { era: "pre", year: "563 BCE", title: "Lumbini", detail: "The Buddha's birthplace anchors a shared religious geography." },
      { era: "pre", year: "1816", title: "Treaty of Sugauli", detail: "The Anglo-Nepalese war settlement fixes boundaries still disputed today." },
      { era: "pre", year: "1857", title: "Gorkha regiments", detail: "Nepali recruitment into the Indian army begins a link that continues." },
      { era: "post", year: "1950", title: "Treaty of Peace and Friendship", detail: "Establishes open borders and reciprocal national treatment." },
      { era: "post", year: "1996", title: "Mahakali Treaty", detail: "A framework for shared river development, largely unimplemented." },
      { era: "post", year: "2015", title: "Earthquake and blockade", detail: "Indian relief operations are followed by a border blockade that damages trust." },
      { era: "post", year: "2020", title: "Kalapani map dispute", detail: "Nepal issues a revised political map claiming Kalapani, Lipulekh and Limpiyadhura." },
      { era: "post", year: "2021", title: "Cross-border rail", detail: "The Jaynagar–Kurtha passenger line opens." },
      { era: "post", year: "2024", title: "Power trade agreement", detail: "A long-term arrangement to import 10,000 MW of Nepali hydropower." },
    ],
    pillars: {
      political: [
        {
          topic: "Treaty revision",
          points: [
            { text: "An Eminent Persons Group report on updating the 1950 treaty remains unreceived by both governments.", source: mea },
            { text: "Kathmandu's China policy is read in Delhi as a balancing instrument rather than a realignment.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Boundary",
          points: [
            { text: "Kalapani, Lipulekh and Susta are the active disputed segments.", source: mea },
            { text: "The 1,751-kilometre border is open, with regulated but unrestricted movement.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Dependence",
          points: [
            { text: "Nepal sources the overwhelming majority of its third-country trade through Indian ports.", source: commerce },
            { text: "The Nepalese rupee has been pegged to the Indian rupee since 1993.", source: wb },
          ],
        },
      ],
      tech: [
        {
          topic: "Hydropower and fuel",
          points: [
            { text: "Nepali surplus power is sold into the Indian energy exchange under an approved-projects list.", source: mea },
            { text: "The Motihari–Amlekhgunj pipeline is South Asia's first cross-border petroleum pipeline.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Kinship",
          points: [
            { text: "Roti-beti ties — marriage and kinship across the border — are the standing description of the relationship.", source: mea },
            { text: "Gorkha regiments and pension obligations remain an active administrative file.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1950", instrument: "Treaty of Peace and Friendship", sector: "Political", status: "Under review", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "1996", instrument: "Mahakali Treaty", sector: "Water", status: "Active" },
      { year: "2009", instrument: "Revised Trade Treaty", sector: "Trade", status: "Active" },
      { year: "2024", instrument: "Long-Term Power Trade Agreement", sector: "Energy", status: "Active" },
    ],
    news: [
      { date: "2026-09-09", source: "Power Ministry", title: "Hydropower import volumes rise in the monsoon season", summary: "Surplus Nepali generation flows into the Indian grid." },
      { date: "2026-08-23", source: "MEA", title: "Boundary working group convenes", summary: "Technical officials meet on survey and demarcation." },
      { date: "2026-08-01", source: "Railways", title: "Second cross-border rail section opens", summary: "The line extends deeper into the Terai." },
    ],
  },

  {
    code: "LK",
    slug: "sri-lanka",
    name: "Sri Lanka",
    formalName: "Democratic Socialist Republic of Sri Lanka",
    region: "South Asia",
    lat: 6.93,
    lng: 79.86,
    temperature: "Cooperative",
    headline: "A neighbour India stabilised in a crisis, with old wounds still open.",
    summary:
      "India extended close to four billion dollars during the 2022 collapse, the largest assistance from any country. Tamil political rights, fishing disputes and Chinese port access remain unsettled.",
    macro: {
      capital: "Sri Jayawardenepura Kotte (Colombo is commercial capital)",
      headOfState: "President (head of state and government)",
      system: "Unitary semi-presidential republic",
      population: "22.2 M",
      medianAge: "34.1",
      hdi: "0.780",
      gdp: "$84 B",
      gdpPerCapita: "$3,830",
      territory: "65,610 km²",
      currency: "Sri Lankan rupee (LKR)",
    },
    trade: {
      year: "FY 2023–24",
      exports: "$4.1 B",
      imports: "$1.4 B",
      balanceNote: "Surplus in India's favour",
      topExports: ["Refined petroleum", "Cotton", "Vehicles", "Pharmaceuticals", "Sugar"],
      topImports: ["Tea", "Spices", "Apparel", "Rubber products", "Coconut goods"],
    },
    diaspora: {
      total: "~1.6 M persons of Indian origin",
      students: "~1,000 studying in India annually on scholarships",
      workers: "~15,000 Indian nationals working locally",
      note: "The Indian-origin Tamil community dates largely to nineteenth-century plantation migration.",
    },
    vitals: [
      { label: "Time difference", value: "Same as IST" },
      { label: "INR / LKR", value: "₹0.29", live: true },
      { label: "Trade balance", value: "+$2.7 B", live: true },
      { label: "Visa", value: "Free ETA for Indian nationals" },
    ],
    timeline: [
      { era: "pre", year: "3rd c. BCE", title: "Mahinda's mission", detail: "Ashoka's emissaries carry Buddhism to the island." },
      { era: "pre", year: "1017", title: "Chola conquest", detail: "South Indian dynastic rule leaves a deep architectural and administrative imprint." },
      { era: "pre", year: "1820s", title: "Plantation migration", detail: "British administration moves Tamil labour to Ceylon's tea estates." },
      { era: "post", year: "1964", title: "Sirimavo–Shastri Pact", detail: "An agreement on the status of stateless plantation Tamils." },
      { era: "post", year: "1987", title: "Indo-Lanka Accord", detail: "The Thirteenth Amendment and the Indian Peace Keeping Force follow." },
      { era: "post", year: "1991", title: "Rajiv Gandhi assassination", detail: "The killing by the LTTE freezes Indian involvement for years." },
      { era: "post", year: "2009", title: "End of the civil war", detail: "Reconstruction and devolution become the bilateral agenda." },
      { era: "post", year: "2022", title: "Crisis assistance", detail: "India extends nearly $4 billion in credit lines, fuel and food during the economic collapse." },
      { era: "post", year: "2023", title: "Connectivity vision", detail: "Grid interconnection, a land bridge and UPI acceptance are announced." },
    ],
    pillars: {
      political: [
        {
          topic: "Devolution",
          points: [
            { text: "India consistently presses for full implementation of the Thirteenth Amendment and provincial elections.", source: mea },
            { text: "Chinese research vessel port calls prompted a moratorium India had sought.", source: mea },
          ],
        },
      ],
      geographical: [
        {
          topic: "Palk Strait",
          points: [
            { text: "The maritime boundary was settled in 1974, but the status of Katchatheevu remains politically contested in Tamil Nadu.", source: mea },
            { text: "Fishermen arrests over bottom trawling are the most frequent bilateral incident.", source: mea },
          ],
        },
      ],
      economic: [
        {
          topic: "Assistance and trade",
          points: [
            { text: "India was the largest bilateral creditor participant in Sri Lanka's debt restructuring.", source: wb },
            { text: "The 2000 free trade agreement made India the island's largest import source.", source: commerce },
          ],
        },
      ],
      tech: [
        {
          topic: "Energy and payments",
          points: [
            { text: "A high-voltage grid interconnection and joint renewable projects in Trincomalee are under development.", source: mea },
            { text: "UPI acceptance went live for Indian travellers in 2024.", source: mea },
          ],
        },
      ],
      society: [
        {
          topic: "Shared heritage",
          points: [
            { text: "The Ramayana and Buddhist circuits sustain a substantial pilgrimage tourism flow.", source: mea },
            { text: "India has built tens of thousands of houses for war-affected and estate-sector families.", source: mea },
          ],
        },
      ],
    },
    treaties: [
      { year: "1974", instrument: "Maritime Boundary Agreement", sector: "Border", status: "Active" },
      { year: "1987", instrument: "Indo-Sri Lanka Accord", sector: "Political", status: "Active", url: "https://www.mea.gov.in/bilateral-documents.htm" },
      { year: "2000", instrument: "Free Trade Agreement", sector: "Trade", status: "Active" },
      { year: "2023", instrument: "Economic and Connectivity Partnership Vision", sector: "Political", status: "Under review" },
    ],
    news: [
      { date: "2026-09-06", source: "MEA", title: "Grid interconnection feasibility study concludes", summary: "The report clears the way for a cross-strait transmission link." },
      { date: "2026-08-15", source: "Fisheries Ministry", title: "Joint working group on fishermen meets", summary: "Both sides discuss trawling and detention procedures." },
      { date: "2026-07-28", source: "MEA", title: "Housing project phase handed over", summary: "Units are transferred to estate-sector families in the central province." },
    ],
  },
];

export const PARTNERS_BY_SLUG = Object.fromEntries(
  PARTNERS.map((p) => [p.slug, p]),
) as Record<string, Partner>;
