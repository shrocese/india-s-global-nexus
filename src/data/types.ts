export type Temperature = "Cooperative" | "Neutral" | "Strained";

export interface Source {
  label: string;
  url: string;
}

/** A single editorial claim. Every claim may carry a citation. */
export interface Claim {
  text: string;
  source?: Source;
}

export interface Brief {
  topic: string;
  points: Claim[];
}

export interface Macro {
  capital: string;
  headOfState: string;
  system: string;
  population: string;
  medianAge: string;
  hdi: string;
  gdp: string;
  gdpPerCapita: string;
  territory: string;
  currency: string;
}

export interface TradeBlock {
  /** India's exports to the partner, in USD */
  exports: string;
  /** India's imports from the partner, in USD */
  imports: string;
  balanceNote: string;
  topExports: string[];
  topImports: string[];
  year: string;
}

export interface Diaspora {
  total: string;
  students: string;
  workers: string;
  note: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  detail: string;
  era: "pre" | "post";
}

export type TreatyStatus = "Active" | "Lapsed" | "Under review";

export interface Treaty {
  year: string;
  instrument: string;
  sector: string;
  status: TreatyStatus;
  url?: string;
}

export interface NewsItem {
  date: string;
  source: string;
  title: string;
  summary: string;
}

export interface Vital {
  label: string;
  value: string;
  live?: boolean;
}

/**
 * The rigid node. Every partner renders the same sections, even when a field
 * is thin — from the United States to Tuvalu.
 */
export interface Partner {
  code: string;
  slug: string;
  name: string;
  formalName: string;
  region: string;
  lat: number;
  lng: number;
  temperature: Temperature;
  headline: string;
  summary: string;
  macro: Macro;
  trade: TradeBlock;
  diaspora: Diaspora;
  vitals: Vital[];
  timeline: TimelineEvent[];
  pillars: {
    political: Brief[];
    geographical: Brief[];
    economic: Brief[];
    tech: Brief[];
    society: Brief[];
  };
  treaties: Treaty[];
  news: NewsItem[];
}
