export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="18" r="10" stroke="var(--beacon)" strokeWidth="1.5" />
      <circle cx="16" cy="5.5" r="2.75" fill="var(--beacon)" />
    </svg>
  );
}
