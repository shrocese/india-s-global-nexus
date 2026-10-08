/**
 * Strategic posture: where each partner sits relative to India.
 * x: strategic friction (-100) ↔ strategic convergence (+100)
 * y: low material interdependence (-100) ↔ high material interdependence (+100)
 * Editorial judgement — reviewed by the editor, not computed.
 */
export type Ring = "global" | "major" | "neighbourhood" | "extended";

export const RINGS: { id: Ring; label: string; note: string }[] = [
  { id: "global", label: "Global powers", note: "The two poles" },
  { id: "major", label: "Major powers", note: "Systemic balancers" },
  { id: "neighbourhood", label: "Neighbourhood", note: "Shared borders and seas" },
  { id: "extended", label: "Extended neighbourhood", note: "Middle powers and the Gulf" },
];

export const POSTURE: Record<string, { ring: Ring; x: number; y: number }> = {
  "united-states": { ring: "global", x: 52, y: 78 },
  china: { ring: "global", x: -62, y: 62 },
  "european-union": { ring: "major", x: 44, y: 72 },
  russia: { ring: "major", x: 38, y: 30 },
  france: { ring: "major", x: 62, y: 18 },
  japan: { ring: "major", x: 68, y: 32 },
  pakistan: { ring: "neighbourhood", x: -90, y: -82 },
  bangladesh: { ring: "neighbourhood", x: 8, y: 38 },
  nepal: { ring: "neighbourhood", x: 28, y: 58 },
  "sri-lanka": { ring: "neighbourhood", x: 34, y: 40 },
  "united-arab-emirates": { ring: "extended", x: 58, y: 66 },
};

/**
 * Paired names: the top row shares "Interdependence"-type weight, the bottom row
 * shares light weight; left is contest, right is alignment.
 */
export const QUADRANTS = {
  tr: "Deep partnership",
  tl: "Contested partnership",
  br: "Distant alignment",
  bl: "Distant contest",
};

/** The same four read as one spectrum, from contest to partnership. */
export const SPECTRUM = [QUADRANTS.bl, QUADRANTS.tl, QUADRANTS.br, QUADRANTS.tr];

/** Home-page spotlight, in order of importance. Others are found by search. */
export const SPOTLIGHT = [
  "united-states",
  "european-union",
  "china",
  "russia",
  "japan",
  "united-kingdom",
  "united-arab-emirates",
  "pakistan",
];
