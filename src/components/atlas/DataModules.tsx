import { useState } from "react";
import { INDIA } from "@/data/partners";
import type { Partner } from "@/data/types";
import { cn } from "@/lib/utils";

type ModuleKey = "compare" | "trade" | "diaspora" | null;

const ROWS: Array<{ label: string; key: keyof typeof INDIA }> = [
  { label: "Population", key: "population" },
  { label: "GDP (nominal)", key: "gdp" },
  { label: "GDP per capita", key: "gdpPerCapita" },
  { label: "Territory", key: "territory" },
  { label: "HDI", key: "hdi" },
  { label: "Median age", key: "medianAge" },
  { label: "Capital", key: "capital" },
  { label: "System", key: "system" },
];

export function DataModules({ partner }: { partner: Partner }) {
  const [open, setOpen] = useState<ModuleKey>("compare");
  const toggle = (k: Exclude<ModuleKey, null>) =>
    setOpen((cur) => (cur === k ? null : k));

  return (
    <div className="space-y-3">
      <p className="stamp px-1 text-ink-soft">Hard data · open one at a time</p>

      <Module
        title="Head to head"
        subtitle="India vs " + partner.name
        isOpen={open === "compare"}
        onToggle={() => toggle("compare")}
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="stamp text-left text-ink-soft">
              <th className="py-2 font-normal">Metric</th>
              <th className="py-2 text-right font-normal text-oxide">India</th>
              <th className="py-2 text-right font-normal text-cobalt">
                {partner.code}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROWS.map((r) => (
              <tr key={r.label} className="align-top">
                <td className="py-2 pr-2 text-ink-soft">{r.label}</td>
                <td className="py-2 pl-2 text-right font-semibold text-oxide">
                  {INDIA[r.key]}
                </td>
                <td className="py-2 pl-2 text-right font-semibold">
                  {partner.macro[r.key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Module>

      <Module
        title="Trade"
        subtitle={partner.trade.year}
        isOpen={open === "trade"}
        onToggle={() => toggle("trade")}
      >
        <div className="space-y-4">
          <Flow
            label="India exports to"
            partner={partner.name}
            value={partner.trade.exports}
            tone="oxide"
            items={partner.trade.topExports}
          />
          <Flow
            label="India imports from"
            partner={partner.name}
            value={partner.trade.imports}
            tone="cobalt"
            items={partner.trade.topImports}
          />
          <p className="stamp border-t border-rule pt-3 text-ink-soft">
            {partner.trade.balanceNote}
          </p>
        </div>
      </Module>

      <Module
        title="Diaspora"
        subtitle="Indians resident"
        isOpen={open === "diaspora"}
        onToggle={() => toggle("diaspora")}
      >
        <div className="space-y-3">
          <p className="font-display text-3xl font-black leading-none">
            {partner.diaspora.total}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Cell label="Students" value={partner.diaspora.students} />
            <Cell label="Workers" value={partner.diaspora.workers} />
          </div>
          <p className="text-sm leading-snug text-ink-soft">
            {partner.diaspora.note}
          </p>
        </div>
      </Module>
    </div>
  );
}

function Module({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  subtitle: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="paper-card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span>
          <span className="block font-display text-base font-semibold leading-tight">
            {title}
          </span>
          <span className="stamp text-ink-soft">{subtitle}</span>
        </span>
        <span
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-md border border-rule font-stamp text-sm leading-none",
            isOpen ? "bg-ink text-paper" : "text-ink-soft",
          )}
          aria-hidden="true"
        >
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && <div className="border-t border-rule px-4 py-4">{children}</div>}
    </section>
  );
}

function Flow({
  label,
  partner,
  value,
  tone,
  items,
}: {
  label: string;
  partner: string;
  value: string;
  tone: "oxide" | "cobalt";
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="stamp text-ink-soft">
          {label} {partner}
        </span>
        <span
          className={cn(
            "font-display text-xl font-black leading-none",
            tone === "oxide" ? "text-oxide" : "text-cobalt",
          )}
        >
          {value}
        </span>
      </div>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((i) => (
          <li
            key={i}
            className="rounded-md bg-secondary px-2 py-1 text-xs text-ink-soft"
          >
            {i}
          </li>
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
