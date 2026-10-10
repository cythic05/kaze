'use client';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function MenuButton({ isOpen, onClick, className = '' }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 font-body font-bold text-ink hover:opacity-70 transition-opacity ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span className="text-sm">menu</span>
      <div className="w-7 h-7 bg-ink flex items-center justify-center rounded-none">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          <path
            d="M7 0V14M0 7H14"
            stroke="var(--paper)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </button>
  );
}
