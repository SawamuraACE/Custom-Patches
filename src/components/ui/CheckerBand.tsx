export function CheckerBand({ bleed = false }: { bleed?: boolean }) {
  return (
    <svg
      className={`pointer-events-none absolute top-1/2 h-[40%] -translate-y-1/2 ${bleed ? "-left-4 w-[calc(100%+2rem)]" : "inset-x-0 w-full"}`}
      viewBox="0 0 5 2"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="1" height="1" fill="#000" />
      <rect x="2" y="0" width="1" height="1" fill="#000" />
      <rect x="4" y="0" width="1" height="1" fill="#000" />
      <rect x="1" y="1" width="1" height="1" fill="#000" />
      <rect x="3" y="1" width="1" height="1" fill="#000" />
    </svg>
  );
}
