import { Link } from "@tanstack/react-router";
import plate from "@/assets/world-plate.jpg";
import { INDIA_COORD } from "@/data/partners";
import { arcPath, project } from "@/lib/projection";
import { cn } from "@/lib/utils";

export interface PlateMarker {
  slug: string;
  name: string;
  code: string;
  lat: number;
  lng: number;
}

interface WorldPlateProps {
  markers: PlateMarker[];
  /** When set, draws the New Delhi → capital arc and mutes other markers. */
  focus?: PlateMarker;
  hovered?: string | null;
  onHover?: (slug: string | null) => void;
  priority?: boolean;
}

export function WorldPlate({
  markers,
  focus,
  hovered,
  onHover,
  priority,
}: WorldPlateProps) {
  const delhi = project(INDIA_COORD.lat, INDIA_COORD.lng);
  const arc = focus ? arcPath(INDIA_COORD, focus) : null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-rule bg-card">
      <img
        src={plate}
        alt="World map plate, equirectangular projection on aged paper"
        width={1920}
        height={960}
        {...(priority ? {} : { loading: "lazy" as const })}
        className="block w-full select-none opacity-90 mix-blend-multiply"
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {arc && (
          <>
            <path
              d={arc.d}
              fill="none"
              stroke="var(--color-oxide)"
              strokeWidth={0.35}
              vectorEffect="non-scaling-stroke"
              strokeDasharray="900"
              style={{
                animation: "dash-draw 1.6s cubic-bezier(.2,.7,.2,1) both",
              }}
            />
            <path
              d={arc.d}
              fill="none"
              stroke="var(--color-saffron)"
              strokeWidth={1.4}
              vectorEffect="non-scaling-stroke"
              opacity={0.22}
            />
          </>
        )}
      </svg>

      {/* New Delhi — the fixed reference point */}
      <Pin x={delhi.x} y={delhi.y} label="New Delhi" tone="origin" />

      {focus ? (
        <Pin
          x={project(focus.lat, focus.lng).x}
          y={project(focus.lat, focus.lng).y}
          label={focus.name}
          tone="focus"
        />
      ) : (
        markers.map((m) => {
          const p = project(m.lat, m.lng);
          const isHot = hovered === m.slug;
          return (
            <Link
              key={m.slug}
              to="/country/$slug"
              params={{ slug: m.slug }}
              onMouseEnter={() => onHover?.(m.slug)}
              onMouseLeave={() => onHover?.(null)}
              onFocus={() => onHover?.(m.slug)}
              onBlur={() => onHover?.(null)}
              aria-label={`Open the ${m.name} dossier`}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={cn(
                  "block size-2.5 rounded-full ring-2 ring-card transition-transform",
                  isHot ? "scale-150 bg-oxide" : "bg-ink/70 group-hover:bg-oxide",
                )}
              />
              <span
                className={cn(
                  "stamp absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-1.5 py-1 text-paper transition-opacity",
                  isHot ? "opacity-100" : "opacity-0",
                )}
              >
                {m.code}
              </span>
            </Link>
          );
        })
      )}
    </div>
  );
}

function Pin({
  x,
  y,
  label,
  tone,
}: {
  x: number;
  y: number;
  label: string;
  tone: "origin" | "focus";
}) {
  return (
    <div
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span
        className={cn(
          "block size-3 rounded-full ring-2 ring-card",
          tone === "origin" ? "bg-oxide" : "bg-cobalt",
        )}
      />
      <span className="stamp absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-1.5 py-1 text-paper">
        {label}
      </span>
    </div>
  );
}
