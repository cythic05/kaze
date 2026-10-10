'use client';

interface ExpandButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function ExpandButton({ isOpen, onClick, className = '' }: ExpandButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-7 h-7 flex items-center justify-center border border-ink rounded-none transition-colors hover:bg-ink group ${className}`}
      aria-label={isOpen ? 'Collapse' : 'Expand'}
      aria-expanded={isOpen}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} group-hover:text-paper`}
      >
        <path
          d="M7 0V14M0 7H14"
          stroke="currentColor"
          strokeWidth="2"
          className="text-ink group-hover:text-paper"
        />
      </svg>
    </button>
  );
}
