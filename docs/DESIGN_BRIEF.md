# KAZE design brief

## Product
Real-time emergency resource allocator. Tone: calm, precise, urgent but not panicked. Short English sentences.

## Colors
ink    #0B1F2A  replaces pure black: text, outlined/filled buttons, logo
mist   #DFF3EE  hero background
coral  #FFD9D2  "Live updates" section background
signal #FF4D3D  emergency red: divider lines, hover/active accents, pulse dot. Use sparingly
sky    #CFE8FF  illustration fills, placeholders, thumbnails
teal   #2BB8A3  hatch/pulse pattern lines, "confirmed" states
amber  #FFB020  "stale data" warnings only
fog    #E7EDF0  footer background
paper  #FFFFFF  timeline / CTA / newsletter backgrounds
Small text is always ink on light or paper on ink. Never small signal-red or teal text on light.

## Typography
Display: Anton, UPPERCASE, line-height 0.95.
- display-xl (hero, section titles): clamp(3.25rem, 9.5vw, 8rem)
- display-lg (demo, timeline): clamp(2.5rem, 5.5vw, 4.5rem)
Body: Outfit, 16px/1.5, weight 300-400 paragraphs, 500-700 titles.
- card-title ~28px weight 500, line-height 1.1
- footer big links ~28px weight 500
Reference screenshots are ~2x retina (about 2419px wide = about 1210 CSS px). Halve any pixel value you measure.

## Layout
- Full-bleed section backgrounds. Content side padding 52px desktop / 20px mobile.
- Section vertical padding ~120px desktop / 72px mobile. Hero min-height 100svh.
- Radius: 4px buttons, 8px inputs/cards, 0 on photos and illustrations.

## Signature components
- IconCta: 36px outlined square (1px ink, 4px radius) with a diagonal arrow-down-right icon, 16px label to its right.
- MenuButton: "menu" text (700) + 28px filled ink square with white "+".
- ExpandButton: 28px outlined square with "+", rotates to x when open.
- Hatch strip: thin 45-degree teal lines ~14px apart.
- Pulse strip (replaces reference's chevron pattern): repeating ECG heartbeat line, teal, on paper.
- Header: fixed, logo badge left, MenuButton right.

## Sections
1 Hero, 2 Live updates (split, sticky title), 3 Demo video, 4 Timeline "From call to handover" (pinned, 5 steps), 5 Launch the console CTA, 6 Pulse strip + newsletter, 7 Footer.

## Rules
- Original assets only. All copy lives in src/content/. Respect prefers-reduced-motion. Keyboard accessible. Responsive.
