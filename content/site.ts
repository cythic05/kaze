export interface HeroContent {
  headingLine1: string;
  headingLine2: string;
  description: string;
  subDescription: string;
  ctaLabel: string;
  ctaHref: string;
  consoleCard: {
    label: string;
    href: string;
  };
}

export interface SiteContent {
  hero: HeroContent;
}

export const siteContent: SiteContent = {
  hero: {
    headingLine1: 'FIND THE RIGHT BED',
    headingLine2: 'IN REAL TIME',
    description:
      'Every minute counts. KAZE gives ambulance teams and hospitals one shared, live view of beds and resources. Dispatchers see ranked destinations by capability, travel time and data freshness, request confirmation, and coordinate the handover in one place.',
    subDescription:
      'Built for dispatchers, hospital staff and the patients between them.',
    ctaLabel: 'How it works',
    ctaHref: '#timeline',
    consoleCard: {
      label: 'Open the dispatcher console',
      href: '/dispatch',
    },
  },
};
