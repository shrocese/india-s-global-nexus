/**
 * Strategic posture: where each partner sits relative to India.
 * x: strategic friction (-100) ↔ strategic convergence (+100)
 * y: strategic distance (-100) ↔ material interdependence (+100)
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
  russia: { ring: "major", x: 38, y: 30 },
  france: { ring: "major", x: 62, y: 18 },
  japan: { ring: "major", x: 68, y: 32 },
  pakistan: { ring: "neighbourhood", x: -90, y: -82 },
  bangladesh: { ring: "neighbourhood", x: 8, y: 38 },
  nepal: { ring: "neighbourhood", x: 28, y: 58 },
  "sri-lanka": { ring: "neighbourhood", x: 34, y: 40 },
  "united-arab-emirates": { ring: "extended", x: 58, y: 66 },
};

export const QUADRANTS = {
  tr: "Deep partnership",
  tl: "Entangled rivalry",
  bl: "Adversarial distance",
  br: "Aligned, still thin",
};
