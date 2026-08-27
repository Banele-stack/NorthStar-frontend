/**
 * The page's signature mark: a fixed point of light above a surveyed
 * horizon line. Replaces the old brass compass rose with something
 * lighter — daylight orientation instead of night navigation.
 */
export default function Starmark({ className }: { className?: string }) {
  const ticks = Array.from({ length: 17 }, (_, i) => 40 + i * 20);

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" fill="none">
      <circle cx="200" cy="168" r="150" stroke="var(--line)" strokeWidth="1" />
      <circle cx="200" cy="168" r="104" stroke="var(--line)" strokeWidth="1" />
      <circle cx="200" cy="168" r="56" fill="var(--beacon-soft)" className="beacon-pulse" />

      {/* four-point star, the fixed point */}
      <path
        d="M200 88 L213 155 L280 168 L213 181 L200 248 L187 181 L120 168 L187 155 Z"
        fill="var(--beacon)"
      />
      <path
        d="M200 88 L213 155 L280 168 L213 181 L200 248 L187 181 L120 168 L187 155 Z"
        fill="none"
        stroke="var(--beacon-bright)"
        strokeWidth="0.5"
      />

      {/* surveyed horizon, with the star's bearing marked */}
      <line x1="40" y1="330" x2="360" y2="330" stroke="var(--line-strong)" strokeWidth="1" />
      {ticks.map((x) => (
        <line key={x} x1={x} y1="326" x2={x} y2="334" stroke="var(--line-strong)" strokeWidth="1" />
      ))}
      <line x1="200" y1="320" x2="200" y2="340" stroke="var(--beacon)" strokeWidth="1.5" />
    </svg>
  );
}
