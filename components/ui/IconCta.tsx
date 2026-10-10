'use client';

import { ArrowDownRight } from 'lucide-react';
import { useState } from 'react';

interface IconCtaProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function IconCta({ label, href, onClick, className = '' }: IconCtaProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      className="flex items-center gap-4 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-[4px] border border-ink transition-all duration-300 ${
          isHovered ? 'bg-ink' : 'bg-transparent'
        }`}
      >
        <ArrowDownRight
          size={16}
          className={`transition-transform duration-300 ${
            isHovered ? 'translate-x-[3px] translate-y-[3px] text-paper' : 'text-ink'
          }`}
        />
      </div>
      <span className="text-base font-body font-medium text-ink">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
