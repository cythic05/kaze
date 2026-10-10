interface HatchStripProps {
  height?: number;
  color?: string;
  className?: string;
}

export default function HatchStrip({
  height = 24,
  color = 'var(--teal)',
  className = '',
}: HatchStripProps) {
  return (
    <div
      className={`w-full ${className}`}
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
            id="hatch-pattern"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="20"
              stroke={color}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hatch-pattern)" />
      </svg>
    </div>
  );
}
