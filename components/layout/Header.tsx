'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/ui/Logo';
import MenuButton from '@/components/ui/MenuButton';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Header({ isMenuOpen, onMenuToggle }: HeaderProps) {
  const [tone, setTone] = useState<'ink' | 'paper'>('ink');

  useEffect(() => {
    const sections = document.querySelectorAll('[data-header]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headerTone = entry.target.getAttribute('data-header');
            if (headerTone === 'dark') {
              setTone('paper');
            } else if (headerTone === 'light') {
              setTone('ink');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-[20px] md:px-[52px] transition-colors duration-300"
    >
      <div className="flex items-center justify-between">
        <a href="#hero" className="inline-block">
          <Logo tone={tone} />
        </a>
        <MenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
      </div>
    </header>
  );
}
