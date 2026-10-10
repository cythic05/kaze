'use client';

import { ReactNode } from 'react';

interface SquareButtonProps {
  size?: number;
  variant?: 'filled' | 'outlined';
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function SquareButton({
  size = 28,
  variant = 'filled',
  onClick,
  children,
  className = '',
  ariaLabel,
}: SquareButtonProps) {
  const baseClasses = 'flex items-center justify-center rounded-none transition-colors duration-300';
  const variantClasses = variant === 'filled'
    ? 'bg-ink hover:bg-signal'
    : 'border border-ink hover:bg-ink';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
