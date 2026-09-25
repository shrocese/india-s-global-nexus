import { useState } from "react";
import { ClaimLine } from "./Annotated";
import { LiveIntel } from "./LiveIntel";
import { Timeline } from "./Timeline";
import { Treaties } from "./Treaties";
import type { Brief, Partner, Temperature } from "@/data/types";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "history", num: "00", label: "History" },
  { id: "political", num: "01", label: "Political & Strategic" },
  { id: "geographical", num: "02", label: "Geographical" },
  { id: "economic", num: "03", label: "Economic & Trade" },
  { id: "tech", num: "04", label: "Tech & Science" },
  { id: "society", num: "05", label: "Society & Diaspora" },
  { id: "treaties", num: "06", label: "Treaties & Agreements" },
  { id: "intel", num: "07", label: "Live Intelligence" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const TEMP_TONE: Record<Temperature, string> = {
  Cooperative: "bg-jade text-paper",
  Neutral: "bg-saffron text-ink",
  Strained: "bg-oxide text-paper",
};

export function CorePillars({ partner }: { partner: Partner }) {
  const [tab, setTab] = useState<TabId>("history");

  return (
    <div>
      <div className="sticky top-[57px] z-20 -mx-1 bg-background/95 py-3 backdrop-blur">
        <div
          role="tablist"
          aria-label="Core Pillars"
          className="flex gap-1.5 overflow-x-auto px-1 pb-1"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors",
                tab === t.id
                  ? "border-ink bg-ink text-paper"
                  : "border-rule bg-card text-ink-soft hover:border-ink/30",
              )}
            >
              <span className="font-stamp text-[0.7em] opacity-60">{t.num}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="reveal pt-4" key={tab}>
        {tab === "history" && (
          <Section
            title="Historical spine"
            note="Events before and after 1947. Select a node to mark it."
          >
            <Timeline events={partner.timeline} />
          </Section>
        )}

        {tab === "political" && (
          <Section title="Political & Strategic" note="Executive briefs, three sentences or fewer.">
            <div className="mb-5 flex items-center gap-3">
              <span className="stamp text-ink-soft">Diplomatic temperature</span>
              <span
                className={cn(
                  "stamp-box border-0",
                  TEMP_TONE[partner.temperature],
                )}
              >
                {partner.temperature}
              </span>
            </div>
            <Briefs briefs={partner.pillars.political} />
          </Section>
        )}

        {tab === "geographical" && (
          <Section title="Geographical" note="Borders, maritime space and connectivity.">
            <Briefs briefs={partner.pillars.geographical} />
          </Section>
        )}

        {tab === "economic" && (
          <Section title="Economic & Trade" note={`Trade figures for ${partner.trade.year}.`}>
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <Figure label="India's exports" value={partner.trade.exports} tone="oxide" />
              <Figure label="India's imports" value={partner.trade.imports} tone="cobalt" />
              <Figure label="Balance" value={partner.trade.balanceNote} />
            </div>
            <Briefs briefs={partner.pillars.economic} />
          </Section>
        )}

        {tab === "tech" && (
          <Section title="Tech & Science" note="Space, nuclear, digital and industrial technology.">
            <Briefs briefs={partner.pillars.tech} />
          </Section>
        )}

        {tab === "society" && (
          <Section title="Society & Diaspora" note="People, culture and movement.">
            <Briefs briefs={partner.pillars.society} />
          </Section>
        )}

        {tab === "treaties" && (
          <Section title="Treaties & Agreements" note="Searchable and sortable register.">
            <Treaties treaties={partner.treaties} />
          </Section>
        )}

        {tab === "intel" && (
          <Section title="Live Intelligence" note="Current affairs, most recent first.">
            <LiveIntel items={partner.news} partner={partner.name} />
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-3xl font-black tracking-tight">{title}</h2>
      <p className="stamp mt-2 text-ink-soft">{note}</p>
      <div className="hairline my-5" />
      {children}
    </section>
  );
}

function Briefs({ briefs }: { briefs: Brief[] }) {
  let counter = 0;
  return (
    <div className="space-y-6">
      {briefs.map((b) => (
        <div key={b.topic}>
          <h3 className="font-display text-lg font-semibold">{b.topic}</h3>
          <ul className="mt-2 space-y-2">
            {b.points.map((p) => {
              counter += 1;
              return (
                <li key={p.text} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-oxide" />
                  <p className="max-w-[72ch] text-[0.95rem] leading-relaxed">
                    <ClaimLine claim={p} index={counter} />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Figure({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "oxide" | "cobalt";
}) {
  return (
    <div className="paper-card px-4 py-3">
      <span className="stamp block text-ink-soft">{label}</span>
      <span
        className={cn(
          "mt-2 block font-display text-xl font-black leading-tight",
          tone === "oxide" && "text-oxide",
          tone === "cobalt" && "text-cobalt",
        )}
      >
        {value}
      </span>
    </div>
  );
}
