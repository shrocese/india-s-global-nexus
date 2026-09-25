import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Method & sourcing | Meridian India Bilateral Atlas" },
      {
        name: "description",
        content:
          "How the India Bilateral Atlas is structured: a fixed schema, cited editorial claims, and separately maintained macro indicators.",
      },
      { property: "og:title", content: "Method & sourcing — Meridian" },
      {
        property: "og:description",
        content: "The fixed schema and sourcing rules behind every country dossier.",
      },
    ],
  }),
  component: Method,
});

function Method() {
  return (
    <main className="px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <p className="stamp text-oxide">Method</p>
        <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight">
          One structure, every country.
        </h1>

        <div className="mt-10 space-y-10">
          <Block title="The schema is fixed">
            <p>
              India is the root node. Every partner hangs off it with the same
              three layers: macro indicators, a historical timeline split at
              1947, and seven core pillars. A thin file renders the same sections
              as a thick one — the structure never bends to the country.
            </p>
          </Block>

          <Block title="Three kinds of content, kept apart">
            <ul className="space-y-3">
              <li>
                <strong>Macro indicators</strong> are quantitative and will be
                refreshed from World Bank and IMF open data. They are never
                mixed into editorial prose.
              </li>
              <li>
                <strong>Editorial briefs</strong> are written and reviewed, capped
                at three sentences per sub-topic, and each claim carries a
                superscript source anchor.
              </li>
              <li>
                <strong>Current affairs</strong> are aggregated and dated, kept in
                their own pillar so they never contaminate the standing record.
              </li>
            </ul>
          </Block>

          <Block title="Why not a Wikipedia consolidation">
            <p>
              An encyclopaedia entry optimises for completeness. A dossier
              optimises for comparison. Because every field sits in the same slot
              for every country, the atlas can answer questions an article cannot:
              which partners run a trade surplus, which treaties lapsed in the same
              decade, where diaspora weight exceeds trade weight.
            </p>
          </Block>

          <Block title="Corrections">
            <p>
              Figures are stated with their reference year. Where a number is
              disputed between sources, the atlas carries the official Indian
              government figure and marks the alternative in the source anchor.
            </p>
          </Block>
        </div>
      </div>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-black tracking-tight">{title}</h2>
      <div className="hairline my-4" />
      <div className="space-y-3 text-[0.95rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}
