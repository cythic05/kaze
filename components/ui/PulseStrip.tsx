interface PulseStripProps {
  height?: number;
  className?: string;
}

export default function PulseStrip({ height = 24, className = '' }: PulseStripProps) {
  return (
    <div
      className={`w-full bg-paper ${className}`}
      style={{ height: `${height}px` }}
      role="presentation"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id="pulse-pattern"
            patternUnits="userSpaceOnUse"
            width="120"
            height="24"
          >
            {/* ECG heartbeat line pattern */}
            <path
              d="M0 12 L30 12 L35 4 L40 20 L45 12 L50 12 L55 4 L60 20 L65 12 L90 12 L95 4 L100 20 L105 12 L120 12"
              stroke="var(--teal)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pulse-pattern)" />
      </svg>
    </div>
  );
}
