import { useState } from "react";
import type { TimelineEvent } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * One vertical spine. Events alternate left and right of the line.
 * Pre-1947 and post-1947 are marked on the spine itself.
 */
export function Timeline({ events }: { events: TimelineEvent[] }) {
  const [active, setActive] = useState<string | null>(null);
  const pre = events.filter((e) => e.era === "pre");
  const post = events.filter((e) => e.era === "post");
  const ordered = [...pre, ...post];
  const firstPostYear = post[0]?.year;

  return (
    <div className="relative py-2">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-ink/25 md:left-1/2" />

      <ul className="space-y-6">
        <EraMark label="Pre-independence" />
        {ordered.map((e, i) => {
          const isPostStart = e.year === firstPostYear && e.era === "post";
          const right = i % 2 === 1;
          const isActive = active === `${e.era}-${e.year}-${i}`;
          return (
            <li key={`${e.era}-${e.year}-${i}`}>
              {isPostStart && <EraMark label="Post-independence · 1947" accent />}
              <div
                className={cn(
                  "relative pl-12 md:w-1/2 md:pl-0",
                  right ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right",
                )}
              >
                <span
                  className={cn(
                    "absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full ring-2 ring-background transition-transform",
                    e.era === "pre" ? "bg-saffron" : "bg-cobalt",
                    isActive && "scale-150",
                    right ? "md:left-0" : "md:left-auto md:right-0 md:translate-x-1/2",
                  )}
                />
                <button
                  type="button"
                  onClick={() =>
                    setActive(isActive ? null : `${e.era}-${e.year}-${i}`)
                  }
                  className="text-left md:inline-block"
                >
                  <span className="stamp block text-ink-soft">{e.year}</span>
                  <span className="mt-1 block font-display text-lg font-semibold leading-tight">
                    {e.title}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block max-w-[46ch] text-sm leading-snug text-ink-soft",
                      right ? "" : "md:ml-auto",
                    )}
                  >
                    {e.detail}
                  </span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EraMark({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div className="relative mb-6 pl-12 md:pl-0 md:text-center">
      <span
        className={cn(
          "stamp-box relative z-10 bg-background",
          accent ? "text-oxide" : "text-ink-soft",
        )}
      >
        {label}
      </span>
    </div>
  );
}
