import { useState } from "react";
import { INDIA, PARTNERS } from "@/data/partners";
import type { Partner } from "@/data/types";
import { cn } from "@/lib/utils";

const ROWS = [
  { label: "Population", key: "population" },
  { label: "GDP (nominal)", key: "gdp" },
  { label: "GDP per capita", key: "gdpPerCapita" },
  { label: "Territory", key: "territory" },
  { label: "HDI", key: "hdi" },
] as const;

/** Floating overlay that adds a third country to the comparison. */
export function CompareWith({ partner }: { partner: Partner }) {
  const [open, setOpen] = useState(false);
  const [third, setThird] = useState<Partner | null>(null);

  const others = PARTNERS.filter((p) => p.slug !== partner.slug);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper shadow-lg"
      >
        {open ? "Close comparison" : "Compare with…"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[min(30rem,calc(100vw-3rem))] rounded-2xl border border-rule bg-card p-4 shadow-2xl">
          <p className="stamp text-ink-soft">Add a third country</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {others.map((o) => (
              <button
                key={o.slug}
                type="button"
                onClick={() => setThird(third?.slug === o.slug ? null : o)}
                className={cn(
                  "rounded-lg border px-2.5 py-1.5 text-xs font-bold transition-colors",
                  third?.slug === o.slug
                    ? "border-jade bg-jade text-paper"
                    : "border-rule text-ink-soft hover:border-ink/30",
                )}
              >
                {o.name}
              </button>
            ))}
          </div>

          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="stamp text-left text-ink-soft">
                <th className="py-2 font-normal">Metric</th>
                <th className="py-2 text-right font-normal text-oxide">India</th>
                <th className="py-2 text-right font-normal text-cobalt">
                  {partner.code}
                </th>
                {third && (
                  <th className="py-2 text-right font-normal text-jade">
                    {third.code}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {ROWS.map((r) => (
                <tr key={r.key}>
                  <td className="py-2 text-ink-soft">{r.label}</td>
                  <td className="py-2 text-right font-semibold text-oxide">
                    {INDIA[r.key]}
                  </td>
                  <td className="py-2 text-right font-semibold">
                    {partner.macro[r.key]}
                  </td>
                  {third && (
                    <td className="py-2 text-right font-semibold text-jade">
                      {third.macro[r.key]}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
