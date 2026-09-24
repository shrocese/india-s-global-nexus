import type { Vital } from "@/data/types";

/**
 * Four fixed vitals, evenly spaced. Deliberately not a scrolling ticker —
 * a static row stays scannable as depth is added later.
 */
export function VitalsRibbon({ vitals }: { vitals: Vital[] }) {
  return (
    <div className="grid grid-cols-2 divide-rule border-y border-rule bg-ink text-paper sm:grid-cols-4 sm:divide-x">
      {vitals.map((v) => (
        <div key={v.label} className="flex flex-col gap-2 px-5 py-4">
          <span className="stamp flex items-center gap-1.5 text-paper/50">
            {v.live && (
              <span className="pulse-live inline-block size-1.5 rounded-full bg-saffron" />
            )}
            {v.label}
          </span>
          <span className="font-display text-xl font-semibold leading-none">
            {v.value}
          </span>
        </div>
      ))}
    </div>
  );
}
