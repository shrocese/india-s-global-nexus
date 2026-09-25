import { useMemo, useState } from "react";
import type { Treaty, TreatyStatus } from "@/data/types";
import { cn } from "@/lib/utils";

type SortKey = "year" | "instrument" | "sector" | "status";

const STATUS_TONE: Record<TreatyStatus, string> = {
  Active: "bg-jade/15 text-jade",
  Lapsed: "bg-ink/10 text-ink-soft",
  "Under review": "bg-saffron/25 text-ink",
};

export function Treaties({ treaties }: { treaties: Treaty[] }) {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState<SortKey>("year");
  const [asc, setAsc] = useState(false);

  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(treaties.map((t) => t.sector)))],
    [treaties],
  );
  const statuses = ["All", "Active", "Under review", "Lapsed"];

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return treaties
      .filter(
        (t) =>
          (sector === "All" || t.sector === sector) &&
          (status === "All" || t.status === status) &&
          (q === "" ||
            t.instrument.toLowerCase().includes(q) ||
            t.sector.toLowerCase().includes(q) ||
            t.year.includes(q)),
      )
      .sort((a, b) => {
        const cmp = a[sort].localeCompare(b[sort], undefined, { numeric: true });
        return asc ? cmp : -cmp;
      });
  }, [treaties, query, sector, status, sort, asc]);

  const head = (key: SortKey, label: string) => (
    <th className="px-3 py-2 text-left">
      <button
        type="button"
        onClick={() => {
          if (sort === key) setAsc((v) => !v);
          else {
            setSort(key);
            setAsc(true);
          }
        }}
        className="stamp text-ink-soft"
      >
        {label}
        {sort === key && <span aria-hidden="true">{asc ? " ▲" : " ▼"}</span>}
      </button>
    </th>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search instruments…"
          className="h-10 min-w-48 flex-1 rounded-xl border border-rule bg-card px-3 text-sm outline-none placeholder:text-ink-soft/60 focus:border-oxide"
        />
        <Select value={sector} onChange={setSector} options={sectors} label="Sector" />
        <Select value={status} onChange={setStatus} options={statuses} label="Status" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-rule">
        <table className="w-full text-sm">
          <thead className="bg-card">
            <tr>
              {head("year", "Year")}
              {head("instrument", "Instrument")}
              {head("sector", "Sector")}
              {head("status", "Status")}
              <th className="px-3 py-2 text-left">
                <span className="stamp text-ink-soft">Document</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule bg-card/50">
            {rows.map((t) => (
              <tr key={`${t.year}-${t.instrument}`}>
                <td className="px-3 py-3 font-stamp">{t.year}</td>
                <td className="px-3 py-3 font-semibold">{t.instrument}</td>
                <td className="px-3 py-3 text-ink-soft">{t.sector}</td>
                <td className="px-3 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs font-bold",
                      STATUS_TONE[t.status],
                    )}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-3 py-3">
                  {t.url ? (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-oxide underline decoration-dotted underline-offset-2"
                    >
                      Official text
                    </a>
                  ) : (
                    <span className="stamp text-ink-soft">On file</span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-8 text-center text-ink-soft">
                  No instrument matches this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  label: string;
}) {
  return (
    <label className="flex h-10 items-center gap-2 rounded-xl border border-rule bg-card px-3">
      <span className="stamp text-ink-soft">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-sm font-semibold outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
