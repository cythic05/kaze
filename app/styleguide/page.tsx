'use client';

import { useState } from 'react';
import Logo from '@/components/ui/Logo';
import MenuButton from '@/components/ui/MenuButton';
import Header from '@/components/layout/Header';
import MenuOverlay from '@/components/layout/MenuOverlay';
import IconCta from '@/components/ui/IconCta';
import ExpandButton from '@/components/ui/ExpandButton';
import SquareButton from '@/components/ui/SquareButton';
import HatchStrip from '@/components/ui/HatchStrip';
import PulseStrip from '@/components/ui/PulseStrip';
import Reveal from '@/components/ui/Reveal';

export default function Styleguide() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-paper">
      <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-24 px-[20px] md:px-[52px] py-16">
        <h1 className="font-display text-5xl uppercase text-ink mb-12">Styleguide</h1>

        {/* Logo */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">Logo</h2>
          <div className="flex gap-8 items-center bg-mist p-8 rounded-lg">
            <Logo tone="ink" />
            <Logo tone="paper" className="bg-ink p-4" />
          </div>
        </section>

        {/* MenuButton */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">MenuButton</h2>
          <div className="flex gap-4">
            <MenuButton isOpen={false} onClick={() => {}} />
            <MenuButton isOpen={true} onClick={() => {}} />
          </div>
        </section>

        {/* IconCta */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">IconCta</h2>
          <div className="flex gap-8">
            <IconCta label="Learn more" href="#" />
            <IconCta label="Get started" onClick={() => {}} />
          </div>
        </section>

        {/* ExpandButton */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">ExpandButton</h2>
          <div className="flex gap-4">
            <ExpandButton isOpen={false} onClick={() => setIsExpanded(!isExpanded)} />
            <ExpandButton isOpen={true} onClick={() => setIsExpanded(!isExpanded)} />
          </div>
        </section>

        {/* SquareButton */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">SquareButton</h2>
          <div className="flex gap-4">
            <SquareButton variant="filled" ariaLabel="Filled button">
              <span className="text-paper text-lg">+</span>
            </SquareButton>
            <SquareButton variant="outlined" ariaLabel="Outlined button">
              <span className="text-ink text-lg">+</span>
            </SquareButton>
          </div>
        </section>

        {/* HatchStrip */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">HatchStrip</h2>
          <div className="bg-paper p-4 rounded-lg">
            <HatchStrip height={48} />
          </div>
        </section>

        {/* PulseStrip */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">PulseStrip</h2>
          <div className="bg-paper p-4 rounded-lg">
            <PulseStrip height={48} />
          </div>
        </section>

        {/* Reveal */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">Reveal (scroll to animate)</h2>
          <div className="space-y-8">
            <Reveal>
              <div className="bg-mist p-8 rounded-lg">
                <p className="font-body text-ink">This content reveals on scroll</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-coral p-8 rounded-lg">
                <p className="font-body text-ink">This content reveals with a delay</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-sky p-8 rounded-lg">
                <p className="font-body text-ink">This content reveals with more delay</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="font-body text-2xl font-bold text-ink mb-4">Color Palette</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <div className="aspect-square bg-ink rounded-lg flex items-center justify-center">
              <span className="text-paper font-body text-sm">ink</span>
            </div>
            <div className="aspect-square bg-mist rounded-lg flex items-center justify-center">
              <span className="text-ink font-body text-sm">mist</span>
            </div>
            <div className="aspect-square bg-coral rounded-lg flex items-center justify-center">
              <span className="text-ink font-body text-sm">coral</span>
            </div>
            <div className="aspect-square bg-signal rounded-lg flex items-center justify-center">
              <span className="text-paper font-body text-sm">signal</span>
            </div>
            <div className="aspect-square bg-sky rounded-lg flex items-center justify-center">
              <span className="text-ink font-body text-sm">sky</span>
            </div>
            <div className="aspect-square bg-teal rounded-lg flex items-center justify-center">
              <span className="text-paper font-body text-sm">teal</span>
            </div>
            <div className="aspect-square bg-amber rounded-lg flex items-center justify-center">
              <span className="text-ink font-body text-sm">amber</span>
            </div>
            <div className="aspect-square bg-fog rounded-lg flex items-center justify-center">
              <span className="text-ink font-body text-sm">fog</span>
            </div>
            <div className="aspect-square bg-paper border border-ink rounded-lg flex items-center justify-center">
              <span className="text-ink font-body text-sm">paper</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
