'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDownRight } from 'lucide-react';
import IconCta from '@/components/ui/IconCta';
import HatchStrip from '@/components/ui/HatchStrip';
import { siteContent } from '@/content/site';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      // Heading slide-up on load (stagger 0.08s)
      if (line1Ref.current && line2Ref.current) {
        gsap.fromTo(
          [line1Ref.current, line2Ref.current],
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }

      // Left medical cross slow drift (+-12px, +-4 degrees, 8-12s yoyo loops)
      if (crossRef.current) {
        gsap.to(crossRef.current, {
          x: 12,
          y: -12,
          rotation: -8 + 4,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Right map-pin pentagon slow drift (+-12px, +-4 degrees, 8-12s yoyo loops)
      if (pinRef.current) {
        gsap.to(pinRef.current, {
          x: -12,
          y: 12,
          rotation: 6 - 4,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      data-header="light"
      className="relative w-full min-h-[100svh] bg-mist flex flex-col justify-between overflow-hidden px-[20px] md:px-[52px] pt-[96px] md:pt-[116px] pb-[120px] sm:pb-[90px]"
    >
      {/* Center content */}
      <div className="my-auto flex flex-col items-center justify-center text-center relative z-10 w-full max-w-[1240px] mx-auto py-4">
        {/* Heading container with overlapping background outlined shapes */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left shape: Medical Cross, signal red at ~20% opacity, rotated ~ -8deg */}
          <div
            ref={crossRef}
            className="absolute -left-6 sm:left-2 md:-left-8 lg:-left-16 -top-10 sm:-top-14 md:-top-20 w-[210px] sm:w-[320px] md:w-[400px] lg:w-[460px] pointer-events-none select-none z-0"
            style={{ transform: 'rotate(-8deg)' }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 440 440"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 165 75 L 275 75 L 275 165 L 365 165 L 365 275 L 275 275 L 275 365 L 165 365 L 165 275 L 75 275 L 75 165 L 165 165 Z"
                stroke="var(--signal)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20"
              />
            </svg>
          </div>

          {/* Giant centered two-line Anton heading (display-xl, ink) */}
          <h1 className="relative z-10 font-display uppercase text-ink tracking-tight text-[clamp(3.25rem,9.5vw,8rem)] leading-[0.95] select-none text-center">
            <span className="block overflow-hidden py-1">
              <span ref={line1Ref} className="inline-block">
                {siteContent.hero.headingLine1}
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span ref={line2Ref} className="inline-block">
                {siteContent.hero.headingLine2}
              </span>
            </span>
          </h1>

          {/* Right shape: Map-pin pentagon, teal at ~30% opacity */}
          <div
            ref={pinRef}
            className="absolute -right-6 sm:right-2 md:-right-8 lg:-right-16 -bottom-8 sm:-bottom-12 md:-bottom-16 w-[210px] sm:w-[320px] md:w-[400px] lg:w-[460px] pointer-events-none select-none z-0"
            style={{ transform: 'rotate(6deg)' }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 460 460"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100 80 L 360 80 L 390 240 L 230 400 L 70 240 Z"
                stroke="var(--teal)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-30"
              />
            </svg>
          </div>
        </div>

        {/* Centered description paragraphs */}
        <div className="mt-8 md:mt-10 max-w-[720px] mx-auto text-center px-4">
          <p className="font-body text-ink text-[16px] md:text-[18px] leading-[1.5] font-normal">
            {siteContent.hero.description}
          </p>
          <p className="font-body text-ink text-[16px] md:text-[18px] leading-[1.5] font-normal mt-3">
            {siteContent.hero.subDescription}
          </p>
        </div>

        {/* IconCta: How it works -> #timeline */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <IconCta
            label={siteContent.hero.ctaLabel}
            href={siteContent.hero.ctaHref}
          />
        </div>
      </div>

      {/* Bottom-right: Ink console card (~200x90px, full-width on mobile) */}
      <a
        href={siteContent.hero.consoleCard.href}
        className="absolute bottom-5 sm:bottom-6 left-5 right-5 sm:left-auto sm:right-6 z-20 sm:w-[210px] h-[92px] bg-ink rounded-[8px] p-3.5 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-ink/10"
      >
        <div className="flex justify-end">
          <div className="w-7 h-7 rounded-[4px] border border-paper/60 flex items-center justify-center transition-all duration-300 group-hover:border-paper group-hover:bg-paper/10">
            <ArrowDownRight
              size={14}
              className="text-paper transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px]"
            />
          </div>
        </div>
        <span className="font-body text-paper text-[14px] font-medium leading-[1.2] max-w-[140px]">
          {siteContent.hero.consoleCard.label}
        </span>
      </a>

      {/* Bottom edge: ~70px teal HatchStrip */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <HatchStrip
          height={70}
          color="var(--teal)"
          className="opacity-45 md:opacity-55"
        />
      </div>
    </section>
  );
}
