'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Live updates', href: '#updates' },
  { label: 'Demo', href: '#demo' },
  { label: 'How it works', href: '#timeline' },
  { label: 'Console', href: '#console' },
  { label: 'Contact', href: '#footer' },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (isOpen) {
      // Reveal animation
      gsap.fromTo(
        overlayRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'power2.inOut' }
      );

      gsap.fromTo(
        menuListRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2,
        }
      );
    } else {
      // Hide animation
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      onClose();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 bg-ink flex items-center justify-center clip-path-overlay"
      onClick={onClose}
    >
      <nav className="container" onClick={(e) => e.stopPropagation()}>
        <ul ref={menuListRef} className="flex flex-col items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="font-display text-5xl md:text-7xl uppercase text-paper hover:text-teal transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
