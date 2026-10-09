import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CompareWith } from "@/components/atlas/CompareWith";
import { CorePillars } from "@/components/atlas/CorePillars";
import { LiveIntel } from "@/components/atlas/LiveIntel";
import { ScrollTracker, type TrackStop } from "@/components/atlas/ScrollTracker";
import { Timeline } from "@/components/atlas/Timeline";
import { Treaties } from "@/components/atlas/Treaties";
import { VitalsRibbon } from "@/components/atlas/VitalsRibbon";
import { WorldPlate } from "@/components/atlas/WorldPlate";
import { DISPATCHES, HORIZON } from "@/data/horizon";
import { INDIA, PARTNERS_BY_SLUG } from "@/data/partners";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/country/$slug")({
  loader: ({ params }) => {
    const partner = PARTNERS_BY_SLUG[params.slug];
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Dossier unavailable | Meridian" }, { name: "robots", content: "noindex" }] };
    }
    const { partner } = loaderData;
    const title = `India – ${partner.name} relations | Meridian`;
    const description = `${partner.headline} Hard data, Core Pillars, history, treaties, and a 12-month horizon of India–${partner.name} relations.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div role="alert" className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="stamp text-oxide">Retrieval failed</p>
      <p className="mt-3 text-ink-soft">{error instanceof Error ? error.message : String(error)}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="stamp text-oxide">No such entry</p>
      <h1 className="mt-3 font-display text-3xl font-black">Dossier not on file</h1>
      <Link to="/" className="mt-6 inline-block text-oxide underline">Return to the index</Link>
    </div>
  ),
  component: CountryDossier,
});

const STOPS: TrackStop[] = [
  { id: "s-route", label: "Route", level: "I" },
  { id: "s-ledger", label: "Ledger", level: "I" },
  { id: "s-pillars", label: "Core Pillars", level: "II" },
  { id: "s-history", label: "History", level: "II" },
  { id: "s-treaties", label: "Treaties", level: "II" },
  { id: "s-horizon", label: "12 months", level: "III" },
  { id: "s-desk", label: "Editor's desk", level: "III" },
  { id: "s-wire", label: "Livewire", level: "III" },
];

const ROWS = [
  ["Population", "population"],
  ["GDP (nominal)", "gdp"],
  ["GDP per capita", "gdpPerCapita"],
  ["Territory", "territory"],
  ["HDI", "hdi"],
  ["Median age", "medianAge"],
] as const;

function CountryDossier() {
  const { partner } = Route.useLoaderData();
  const h = HORIZON[partner.slug];
  const dispatches = DISPATCHES.filter((d) => d.slug === partner.slug);

  return (
    <main>
      <ScrollTracker stops={STOPS} />

      {/* ───────── LEVEL I · MATERIAL LEDGER ───────── */}
      <section id="s-route" className="px-5 pt-10 lg:pr-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/" className="stamp text-ink-soft hover:text-oxide">← Index</Link>
            <span className="hairline flex-1" />
            <span className="stamp text-ink-soft">{partner.region}</span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            <div>
              <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                India &amp; {partner.name}
              </h1>
              <p className="mt-4 max-w-[46ch] font-display text-lg italic text-ink-soft">{partner.headline}</p>
              <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-relaxed">{partner.summary}</p>
            </div>
            <WorldPlate markers={[]} focus={partner} priority />
          </div>
        </div>
      </section>

      <div className="mt-8"><VitalsRibbon vitals={partner.vitals} /></div>

      <section id="s-ledger" className="px-5 py-12 lg:pr-24">
        <div className="mx-auto max-w-7xl">
          <LevelMark n="I" title="The material ledger" note="Size, money and people, side by side" />
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="paper-card p-5">
              <p className="stamp text-ink-soft">Head to head</p>
              <table className="mt-3 w-full text-sm">
                <thead>
                  <tr className="stamp text-left text-ink-soft">
                    <th className="py-2 font-normal" />
                    <th className="py-2 text-right font-normal text-oxide">India</th>
                    <th className="py-2 text-right font-normal text-cobalt">{partner.code}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule">
                  {ROWS.map(([label, key]) => (
                    <tr key={key}>
                      <td className="py-2 pr-2 text-ink-soft">{label}</td>
                      <td className="py-2 text-right font-semibold text-oxide">{INDIA[key]}</td>
                      <td className="py-2 pl-2 text-right font-semibold">{partner.macro[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="paper-card p-5">
              <p className="stamp text-ink-soft">Trade · {partner.trade.year}</p>
              <Flow label="India exports" value={partner.trade.exports} items={partner.trade.topExports} tone="oxide" />
              <Flow label="India imports" value={partner.trade.imports} items={partner.trade.topImports} tone="cobalt" />
              <p className="stamp mt-4 border-t border-rule pt-3 text-ink-soft">{partner.trade.balanceNote}</p>
            </div>
            <div className="paper-card p-5">
              <p className="stamp text-ink-soft">Diaspora</p>
              <p className="mt-3 font-display text-4xl font-black leading-none">{partner.diaspora.total}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Cell label="Students" value={partner.diaspora.students} />
                <Cell label="Workers" value={partner.diaspora.workers} />
              </div>
              <p className="mt-4 text-sm leading-snug text-ink-soft">{partner.diaspora.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── LEVEL II · STRUCTURAL DOSSIER ───────── */}
      <div className="border-y border-ink/20 bg-paper-deep px-5 py-14 lg:pr-24">
        <div className="mx-auto max-w-7xl">
          <LevelMark n="II" title="The structural dossier" note="What holds, whoever governs" />

          {h && (
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-2">
              <Track title="Points of convergence" items={h.convergence} tone="jade" />
              <Track title="Fault lines & friction" items={h.friction} tone="oxide" />
            </div>
          )}

          <section id="s-pillars" className="mt-12"><CorePillars partner={partner} /></section>

          <section id="s-history" className="mt-16">
            <SectionHead title="Historical spine" note="Before and after 1947" />
            <Timeline events={partner.timeline} />
          </section>

          <section id="s-treaties" className="mt-16">
            <SectionHead title="Treaties & agreements" note="Searchable, sortable register" />
            <Treaties treaties={partner.treaties} />
          </section>
        </div>
      </div>

      {/* ───────── LEVEL III · TACTICAL HORIZON ───────── */}
      <div className="bg-card px-5 py-16 lg:pr-24">
        <div className="mx-auto max-w-6xl">
          <LevelMark n="III" title="The horizon" note="The last twelve months, the next twelve" />

          {h && (
            <section id="s-horizon" className="mt-10 grid gap-10 md:grid-cols-2">
              <HorizonCol kicker="Retrospective" title="The past 12 months" items={h.retrospective} />
              <HorizonCol kicker="Outlook" title="The next 12 months" items={h.outlook} forward />
            </section>
          )}

          <section id="s-desk" className="mt-16">
            <SectionHead title="From the editor's desk" note="Bylined essays and analysis" />
            {dispatches.length ? (
              <div className="grid gap-5 md:grid-cols-2">
                {dispatches.map((d) => (
                  <article key={d.title} className="border-t-2 border-ink pt-4">
                    <p className="stamp text-ink-soft">{d.date} · {d.minutes} min read</p>
                    <h3 className="mt-2 font-display text-2xl font-black leading-tight">{d.title}</h3>
                    <p className="mt-2 font-display italic text-ink-soft">{d.dek}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-ink/25 px-6 py-10 text-center">
                <p className="font-display text-2xl italic">The first dispatch on India &amp; {partner.name} is in preparation.</p>
                <p className="stamp mt-3 text-ink-soft">Original analysis, not aggregated news</p>
              </div>
            )}
          </section>

          <section id="s-wire" className="mt-16">
            <SectionHead title="Livewire" note="LATEST NEWS AND OFFICIAL DEVELOPMENTS" />
            <LiveIntel items={partner.news} partner={partner.name} />
          </section>
        </div>
      </div>

      <CompareWith partner={partner} />
    </main>
  );
}

function LevelMark({ n, title, note }: { n: string; title: string; note: string }) {
  return (
    <div className="flex items-end gap-4">
      <span className="font-display text-6xl font-black leading-none text-oxide/80">{n}</span>
      <div className="pb-1">
        <h2 className="font-display text-2xl font-black leading-tight tracking-tight">{title}</h2>
        <p className="stamp mt-1 text-ink-soft">{note}</p>
      </div>
      <span className="hairline mb-3 flex-1" />
    </div>
  );
}

function SectionHead({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-3xl font-black tracking-tight">{title}</h2>
      <p className="stamp mt-2 text-ink-soft">{note}</p>
      <div className="hairline mt-4" />
    </div>
  );
}

function Track({ title, items, tone }: { title: string; items: string[]; tone: "jade" | "oxide" }) {
  return (
    <div className="bg-card p-6">
      <p className={cn("stamp", tone === "jade" ? "text-jade" : "text-oxide")}>{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 font-display text-lg leading-snug">
            <span className={cn("mt-2.5 h-px w-4 shrink-0", tone === "jade" ? "bg-jade" : "bg-oxide")} />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HorizonCol({ kicker, title, items, forward }: { kicker: string; title: string; items: string[]; forward?: boolean }) {
  return (
    <div className="border-t-2 border-ink pt-5">
      <p className={cn("stamp", forward ? "text-cobalt" : "text-oxide")}>{kicker}</p>
      <h3 className="mt-2 font-display text-3xl font-black">{title}</h3>
      <ol className="mt-5 space-y-4">
        {items.map((t, i) => (
          <li key={t} className="flex gap-4">
            <span className="font-stamp text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
            <p className="font-display text-lg leading-snug">{t}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Flow({ label, value, items, tone }: { label: string; value: string; items: string[]; tone: "oxide" | "cobalt" }) {
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm text-ink-soft">{label}</span>
        <span className={cn("font-display text-2xl font-black leading-none", tone === "oxide" ? "text-oxide" : "text-cobalt")}>{value}</span>
      </div>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.slice(0, 4).map((i) => (
          <li key={i} className="rounded-md bg-secondary px-2 py-1 text-xs text-ink-soft">{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-secondary px-3 py-2">
      <span className="stamp block text-ink-soft">{label}</span>
      <span className="mt-1 block text-sm font-bold">{value}</span>
    </div>
  );
}

