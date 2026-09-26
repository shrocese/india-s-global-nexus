import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { WorldPlate } from "@/components/atlas/WorldPlate";
import { INDIA, PARTNERS } from "@/data/partners";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "India Bilateral Atlas — partner index | Meridian" },
      {
        name: "description",
        content:
          "A clickable map of India's bilateral relations. Ten partner states with macro indicators, historical timelines and seven core pillars each.",
      },
      { property: "og:title", content: "India Bilateral Atlas — partner index" },
      {
        property: "og:description",
        content: "The world, read from New Delhi. Select a country to open its dossier.",
      },
    ],
  }),
  component: Index,
});

const TEMP_TONE = {
  Cooperative: "text-jade",
  Neutral: "text-saffron",
  Strained: "text-oxide",
} as const;

function Index() {
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PARTNERS;
    return PARTNERS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <main className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[40ch]">
            <p className="stamp text-oxide">Home · Partner index</p>
            <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              The world, read from New Delhi.
            </h1>
            <p className="mt-4 max-w-[48ch] text-base text-ink-soft">
              Every dossier is built on the same structure, so the United States
              and Tuvalu read the same way. Select a country to open it.
            </p>
          </div>
          <label className="flex h-12 w-full max-w-xs items-center rounded-full border border-rule bg-card px-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search partner states…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink-soft/60"
            />
          </label>
        </div>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1.7fr_1fr]">
          <WorldPlate
            markers={filtered}
            hovered={hovered}
            onHover={setHovered}
            priority
          />

          <div className="paper-card p-4">
            <div className="flex items-baseline justify-between px-1">
              <p className="stamp text-ink-soft">Selectable partners</p>
              <p className="stamp text-ink-soft">{filtered.length} on file</p>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="flex items-center justify-between rounded-xl bg-oxide px-3 py-3 text-sm font-bold text-paper">
                <span>India</span>
                <span className="stamp opacity-80">Reference node</span>
              </div>
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  to="/country/$slug"
                  params={{ slug: p.slug }}
                  onMouseEnter={() => setHovered(p.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-3 py-3 text-sm font-semibold transition-colors",
                    hovered === p.slug
                      ? "border-ink bg-secondary"
                      : "border-rule bg-card",
                  )}
                >
                  <span>
                    {p.name}
                    <span className="stamp ml-2 text-ink-soft">{p.region}</span>
                  </span>
                  <span className={cn("stamp", TEMP_TONE[p.temperature])}>
                    {p.temperature}
                  </span>
                </Link>
              ))}
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-ink-soft">
                  No partner on file matches that search.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Reference node" value="India" />
          <Stat label="Population" value={INDIA.population} />
          <Stat label="GDP (nominal)" value={INDIA.gdp} />
          <Stat label="Core pillars per dossier" value="7" />
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="paper-card px-4 py-4">
      <span className="stamp block text-ink-soft">{label}</span>
      <span className="mt-2 block font-display text-2xl font-black leading-none">
        {value}
      </span>
    </div>
  );
}
