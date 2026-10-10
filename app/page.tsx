'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import MenuOverlay from '@/components/layout/MenuOverlay';
import Hero from '@/components/sections/Hero';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Hero />
      <section id="updates"></section>
      <section id="demo"></section>
      <section id="timeline"></section>
      <section id="console"></section>
      <section id="newsletter"></section>
      <section id="footer"></section>
    </>
  );
}

