import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { POSTURE, QUADRANTS, RINGS, type Ring } from "@/data/posture";
import type { Partner } from "@/data/types";
import { cn } from "@/lib/utils";

/** Rings filter who is shown; the quadrant shows where each one stands. */
export function PostureMatrix({ partners }: { partners: Partner[] }) {
  const [ring, setRing] = useState<Ring | "all">("all");
  const [sel, setSel] = useState<string | null>(null);
  const shown = partners.filter((p) => ring === "all" || POSTURE[p.slug]?.ring === ring);
  const pos = (v: number) => 50 + v * 0.44;
  const selected = partners.find((p) => p.slug === sel);
  const sp = selected ? POSTURE[selected.slug] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {[{ id: "all" as const, label: "All rings" }, ...RINGS].map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRing(r.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
              ring === r.id ? "border-ink bg-ink text-paper" : "border-rule bg-card text-ink-soft hover:border-ink/40",
            )}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-rule bg-card sm:aspect-[4/3]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <line x1="50" y1="0" x2="50" y2="100" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="0.3" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="0.3" />
            {[15, 30, 45].map((r) => (
              <ellipse key={r} cx="50" cy="50" rx={r} ry={r} fill="none" stroke="var(--color-ink)" strokeOpacity="0.08" strokeWidth="0.3" />
            ))}
            {sp && (
              <line x1="50" y1="50" x2={pos(sp.x)} y2={100 - pos(sp.y)} stroke="var(--color-oxide)" strokeWidth="0.5" />
            )}
          </svg>
          <Corner className="right-3 top-3 text-right" text={QUADRANTS.tr} />
          <Corner className="left-3 top-3" text={QUADRANTS.tl} />
          <Corner className="bottom-3 left-3" text={QUADRANTS.bl} />
          <Corner className="bottom-3 right-3 text-right" text={QUADRANTS.br} />
          <span className="stamp absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 rounded bg-oxide px-1.5 py-1 text-paper">India</span>

          {shown.map((p) => {
            const q = POSTURE[p.slug];
            if (!q) return null;
            const on = sel === p.slug;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => setSel(on ? null : p.slug)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pos(q.x)}%`, top: `${100 - pos(q.y)}%` }}
                aria-label={`Show ${p.name}'s position`}
              >
                <span className={cn("block rounded-full ring-2 ring-card transition-all", on ? "size-3.5 bg-oxide" : "size-2.5 bg-ink group-hover:bg-oxide")} />
                <span className={cn("stamp absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap", on ? "text-oxide" : "text-ink-soft")}>
                  {p.code}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="stamp space-y-2 text-ink-soft">
            <p>→ Right: strategic convergence · Left: friction</p>
            <p>↑ Up: material interdependence · Down: distance</p>
          </div>
          {selected && sp ? (
            <div className="paper-card reveal p-5" key={selected.slug}>
              <p className="stamp text-oxide">{RINGS.find((r) => r.id === sp.ring)?.label}</p>
              <h3 className="mt-2 font-display text-3xl font-black">{selected.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{selected.headline}</p>
              <dl className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-secondary px-3 py-2">
                  <dt className="stamp text-ink-soft">Convergence</dt>
                  <dd className="mt-1 font-display text-xl font-black">{sp.x > 0 ? "+" : ""}{sp.x}</dd>
                </div>
                <div className="rounded-lg bg-secondary px-3 py-2">
                  <dt className="stamp text-ink-soft">Interdependence</dt>
                  <dd className="mt-1 font-display text-xl font-black">{sp.y > 0 ? "+" : ""}{sp.y}</dd>
                </div>
              </dl>
              <Link to="/country/$slug" params={{ slug: selected.slug }} className="mt-4 inline-block font-semibold text-oxide underline underline-offset-4">
                Open the dossier →
              </Link>
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-ink/25 p-5 font-display text-lg italic text-ink-soft">
              Select a point to see the exact vector from New Delhi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Corner({ className, text }: { className: string; text: string }) {
  return <span className={cn("stamp pointer-events-none absolute text-ink-soft/70", className)}>{text}</span>;
}
