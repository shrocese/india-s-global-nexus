import type { NewsItem } from "@/data/types";

/** Cascading card grid. Feeds are curated now, RSS-aggregated later. */
export function LiveIntel({ items, partner }: { items: NewsItem[]; partner: string }) {
  return (
    <div className="space-y-4">
      <p className="stamp text-ink-soft">
        Filtered for India <span className="text-oxide">AND</span> {partner}
      </p>
      <div className="columns-1 gap-4 sm:columns-2 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {items.map((n) => (
          <article key={n.title} className="paper-card p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="stamp text-cobalt">{formatDate(n.date)}</span>
              <span className="stamp-box text-ink-soft">{n.source}</span>
            </div>
            <h4 className="mt-3 font-display text-lg font-semibold leading-tight">
              {n.title}
            </h4>
            <p className="mt-2 text-sm leading-snug text-ink-soft">{n.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  return `${d} ${months[Number(m) - 1]} ${y}`;
}
