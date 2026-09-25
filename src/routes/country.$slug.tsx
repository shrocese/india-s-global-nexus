import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CompareWith } from "@/components/atlas/CompareWith";
import { CorePillars } from "@/components/atlas/CorePillars";
import { DataModules } from "@/components/atlas/DataModules";
import { VitalsRibbon } from "@/components/atlas/VitalsRibbon";
import { WorldPlate } from "@/components/atlas/WorldPlate";
import { PARTNERS_BY_SLUG } from "@/data/partners";

export const Route = createFileRoute("/country/$slug")({
  loader: ({ params }) => {
    const partner = PARTNERS_BY_SLUG[params.slug];
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Dossier unavailable | Meridian" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { partner } = loaderData;
    const title = `India – ${partner.name} relations | Meridian`;
    const description = `${partner.headline} Macro indicators, pre- and post-1947 timeline, and seven core pillars of the India–${partner.name} relationship.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div role="alert" className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="stamp text-oxide">Retrieval failed</p>
      <p className="mt-3 text-ink-soft">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="stamp text-oxide">No such entry</p>
      <h1 className="mt-3 font-display text-3xl font-black">Dossier not on file</h1>
      <Link to="/" className="mt-6 inline-block text-oxide underline">
        Return to the index
      </Link>
    </div>
  ),
  component: CountryDossier,
});

function CountryDossier() {
  const { partner } = Route.useLoaderData();
  const index = Object.keys(PARTNERS_BY_SLUG).indexOf(partner.slug) + 1;

  return (
    <main>
      {/* HERO — arc from New Delhi to the partner capital */}
      <section className="px-5 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/" className="stamp text-ink-soft hover:text-oxide">
              ← Index
            </Link>
            <span className="stamp text-oxide">
              Dossier · {String(index).padStart(3, "0")}
            </span>
            <span className="hairline flex-1" />
            <span className="stamp-box text-ink-soft">
              New Delhi → {partner.macro.capital.split(" (")[0]}
            </span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight">
                India &amp; {partner.name}
              </h1>
              <p className="mt-4 max-w-[46ch] font-display text-lg italic text-ink-soft">
                {partner.headline}
              </p>
              <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-relaxed">
                {partner.summary}
              </p>
            </div>
            <WorldPlate markers={[]} focus={partner} priority />
          </div>
        </div>
      </section>

      <div className="mt-8">
        <VitalsRibbon vitals={partner.vitals} />
      </div>

      {/* 30 / 70 SPLIT */}
      <section className="px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[30fr_70fr]">
          <aside className="lg:sticky lg:top-[75px] lg:h-fit">
            <DataModules partner={partner} />
          </aside>
          <div>
            <CorePillars partner={partner} />
          </div>
        </div>
      </section>

      <CompareWith partner={partner} />
    </main>
  );
}
