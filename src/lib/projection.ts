/** Equirectangular projection onto the world plate image (percentage space). */
export function project(lat: number, lng: number) {
  return {
    x: ((lng + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100,
  };
}

/**
 * Great-circle-ish arc between two projected points, bowed away from the
 * equator so the line reads as a flight path rather than a chord.
 */
export function arcPath(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
) {
  const a = project(from.lat, from.lng);
  const b = project(to.lat, to.lng);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  // Perpendicular offset, capped so short hops stay gentle.
  const bow = Math.min(dist * 0.28, 14);
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const sign = my > 45 ? 1 : -1;
  const cx = mx + nx * bow * sign;
  const cy = my + ny * bow * sign;
  return { d: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`, a, b };
}
