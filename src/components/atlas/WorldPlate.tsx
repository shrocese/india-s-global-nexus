import { useNavigate } from "@tanstack/react-router";
import { geoDistance, geoEquirectangular, geoGraticule10, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import landTopo from "world-atlas/land-110m.json";
import { INDIA_COORD } from "@/data/partners";
import { cn } from "@/lib/utils";

export interface PlateMarker {
  slug: string;
  name: string;
  code: string;
  lat: number;
  lng: number;
  macro?: { capital: string };
}

interface WorldPlateProps {
  markers: PlateMarker[];
  focus?: PlateMarker;
  hovered?: string | null;
  onHover?: (slug: string | null) => void;
  priority?: boolean;
}

const W = 960;
const H = 480;
// Equirectangular, landmass only — no political boundaries are drawn.
const projection = geoEquirectangular()
  .scale(W / (2 * Math.PI))
  .translate([W / 2, H / 2]);
const path = geoPath(projection);
const topo = landTopo as unknown as Topology;
const LAND_D = path(feature(topo, topo.objects.land) as never) ?? "";
const GRID_D = path(geoGraticule10()) ?? "";

function xy(lat: number, lng: number) {
  const p = projection([lng, lat]) ?? [0, 0];
  return { x: p[0], y: p[1] };
}

function arcD(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  return (
    path({
      type: "LineString",
      coordinates: [
        [a.lng, a.lat],
        [b.lng, b.lat],
      ],
    }) ?? ""
  );
}

export function routeStats(lat: number, lng: number) {
  const km = Math.round(
    geoDistance([INDIA_COORD.lng, INDIA_COORD.lat], [lng, lat]) * 6371,
  );
  const φ1 = (INDIA_COORD.lat * Math.PI) / 180;
  const φ2 = (lat * Math.PI) / 180;
  const Δλ = ((lng - INDIA_COORD.lng) * Math.PI) / 180;
  const brg =
    ((Math.atan2(
      Math.sin(Δλ) * Math.cos(φ2),
      Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ),
    ) *
      180) /
      Math.PI +
      360) %
    360;
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return {
    km: km.toLocaleString("en-IN"),
    bearing: Math.round(brg),
    dir: dirs[Math.round(brg / 45) % 8],
  };
}

const capitalOf = (m: PlateMarker) => m.macro?.capital.split(" (")[0] ?? m.name;

export function WorldPlate({ markers, focus, hovered, onHover }: WorldPlateProps) {
  const navigate = useNavigate();
  const delhi = xy(INDIA_COORD.lat, INDIA_COORD.lng);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-rule bg-card">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full"
        role="img"
        aria-label={
          focus
            ? `Route from New Delhi to ${capitalOf(focus)}`
            : "World map with India's partner capitals"
        }
      >
        <defs>
          <pattern id="land-dots" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.9" fill="var(--color-ink)" opacity="0.35" />
          </pattern>
          <radialGradient id="delhi-glow">
            <stop offset="0%" stopColor="var(--color-oxide)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-oxide)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path d={GRID_D} fill="none" stroke="var(--color-ink)" strokeOpacity={0.07} strokeWidth={0.6} />
        <path d={LAND_D} fill="var(--color-paper-deep)" />
        <path d={LAND_D} fill="url(#land-dots)" />
        <path d={LAND_D} fill="none" stroke="var(--color-ink)" strokeOpacity={0.35} strokeWidth={0.6} />

        <circle cx={delhi.x} cy={delhi.y} r={70} fill="url(#delhi-glow)" />
        <circle cx={delhi.x} cy={delhi.y} r={6} fill="none" stroke="var(--color-oxide)" strokeWidth={1} className="map-sonar" />

        {/* Spokes on the index; the single route on a dossier */}
        {!focus &&
          markers.map((m) => (
            <path
              key={`a-${m.slug}`}
              d={arcD(INDIA_COORD, m)}
              fill="none"
              stroke="var(--color-oxide)"
              strokeWidth={hovered === m.slug ? 1.6 : 0.6}
              strokeOpacity={hovered === m.slug ? 0.9 : 0.25}
              strokeDasharray={hovered === m.slug ? undefined : "3 3"}
            />
          ))}
        {focus && (
          <>
            <path d={arcD(INDIA_COORD, focus)} fill="none" stroke="var(--color-saffron)" strokeWidth={5} strokeOpacity={0.3} />
            <path d={arcD(INDIA_COORD, focus)} fill="none" stroke="var(--color-oxide)" strokeWidth={1.6} pathLength={1} strokeDasharray="1" className="map-draw" />
          </>
        )}

        {!focus &&
          markers.map((m) => {
            const p = xy(m.lat, m.lng);
            const hot = hovered === m.slug;
            return (
              <g
                key={m.slug}
                role="link"
                tabIndex={0}
                aria-label={`Open the ${m.name} dossier`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => onHover?.(m.slug)}
                onMouseLeave={() => onHover?.(null)}
                onFocus={() => onHover?.(m.slug)}
                onBlur={() => onHover?.(null)}
                onClick={() => navigate({ to: "/country/$slug", params: { slug: m.slug } })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate({ to: "/country/$slug", params: { slug: m.slug } });
                }}
              >
                <circle cx={p.x} cy={p.y} r={12} fill="transparent" />
                <circle cx={p.x} cy={p.y} r={hot ? 5 : 3.2} fill={hot ? "var(--color-oxide)" : "var(--color-ink)"} stroke="var(--color-card)" strokeWidth={1.2} />
                <text x={p.x + 6} y={p.y - 6} className={cn("map-label transition-opacity", hot ? "opacity-100" : "opacity-60")}>
                  {capitalOf(m)}
                </text>
              </g>
            );
          })}

        {focus && (() => {
          const p = xy(focus.lat, focus.lng);
          return (
            <g>
              <circle cx={p.x} cy={p.y} r={6} fill="none" stroke="var(--color-cobalt)" strokeWidth={1} className="map-sonar" />
              <circle cx={p.x} cy={p.y} r={4} fill="var(--color-cobalt)" stroke="var(--color-card)" strokeWidth={1.2} />
              <text x={p.x + 7} y={p.y - 7} className="map-label map-label-strong">{capitalOf(focus)}</text>
            </g>
          );
        })()}

        <circle cx={delhi.x} cy={delhi.y} r={4.2} fill="var(--color-oxide)" stroke="var(--color-card)" strokeWidth={1.4} />
        <text x={delhi.x + 7} y={delhi.y + 13} className="map-label map-label-strong">New Delhi</text>
      </svg>

      {focus && (() => {
        const s = routeStats(focus.lat, focus.lng);
        return (
          <div className="stamp absolute bottom-3 left-3 rounded-md bg-ink px-2 py-1.5 text-paper">
            {s.km} km · Bearing {s.bearing}° {s.dir}
          </div>
        );
      })()}
      {!focus && (
        <p className="stamp pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink px-2 py-1.5 text-paper">
          Select a capital to open its dossier
        </p>
      )}
    </div>
  );
}
