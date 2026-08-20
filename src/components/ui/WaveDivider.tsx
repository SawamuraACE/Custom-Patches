interface WaveDividerProps {
  fill: string;
  flip?: boolean;
  className?: string;
}

/** A single S-curve section divider, matching the redesign's soft wave transitions. */
export function WaveDivider({ fill, flip, className }: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block w-full h-16 sm:h-24 ${flip ? "rotate-180" : ""} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M0,0 C240,110 480,110 720,55 C960,0 1200,0 1440,60 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
