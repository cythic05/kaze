interface LogoProps {
  tone?: 'ink' | 'paper';
  className?: string;
}

export default function Logo({ tone = 'ink', className = '' }: LogoProps) {
  const isPaper = tone === 'paper';

  return (
    <svg
      width="114"
      height="65"
      viewBox="0 0 114 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KAZE Logo"
    >
      {/* Pentagon pointing down like a map pin */}
      <path
        d="M57 0L107 22V48L57 65L7 48V22L57 0Z"
        fill={isPaper ? 'var(--paper)' : 'var(--ink)'}
      />
      {/* Wordmark: ka over ze, second line indented */}
      <text
        x="57"
        y="32"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontWeight="700"
        fontSize="24"
        fill={isPaper ? 'var(--ink)' : 'var(--paper)'}
      >
        ka
      </text>
      <text
        x="67"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontWeight="700"
        fontSize="24"
        fill={isPaper ? 'var(--ink)' : 'var(--paper)'}
      >
        ze
      </text>
    </svg>
  );
}
