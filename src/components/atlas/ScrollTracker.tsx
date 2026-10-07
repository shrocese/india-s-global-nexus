import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TrackStop {
  id: string;
  label: string;
  level: "I" | "II" | "III";
}

/**
 * A quiet altitude gauge on the right edge. Ticks are grouped by level;
 * the active tick lengthens, turns oxide and names itself.
 */
export function ScrollTracker({ stops }: { stops: TrackStop[] }) {
  const [active, setActive] = useState(stops[0]?.id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.35;
      let cur = stops[0]?.id;
      for (const s of stops) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) cur = s.id;
      }
      setActive(cur);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [stops]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const activeLevel = stops.find((s) => s.id === active)?.level;

  return (
    <>
      {/* Phones: a hairline progress bar under the header */}
      <div className="fixed inset-x-0 top-[57px] z-30 h-0.5 bg-rule lg:hidden" aria-hidden="true">
        <div className="h-full bg-oxide transition-[width]" style={{ width: `${progress * 100}%` }} />
      </div>

      <nav
        aria-label="Dossier sections"
        className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      >
        <ol className="flex flex-col items-end">
          {stops.map((s, i) => {
            const on = s.id === active;
            const newLevel = i === 0 || stops[i - 1].level !== s.level;
            return (
              <li key={s.id} className={cn(newLevel && i > 0 && "mt-5")}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  className="group flex items-center gap-2 py-1.5"
                  aria-current={on ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "stamp whitespace-nowrap transition-all",
                      on ? "text-oxide opacity-100" : "text-ink-soft opacity-0 group-hover:opacity-100",
                    )}
                  >
                    {newLevel && <span className="mr-1.5 opacity-60">{s.level}</span>}
                    {s.label}
                  </span>
                  <span
                    className={cn(
                      "block h-px transition-all duration-300",
                      on
                        ? "w-9 bg-oxide"
                        : activeLevel === s.level
                          ? "w-4 bg-ink/60"
                          : "w-3 bg-ink/25 group-hover:bg-ink/60",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
