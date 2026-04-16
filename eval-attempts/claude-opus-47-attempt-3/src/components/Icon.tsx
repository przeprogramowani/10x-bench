import type { SVGProps } from 'react';

type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'play'
  | 'mic'
  | 'youtube'
  | 'spotify'
  | 'apple'
  | 'instagram'
  | 'linkedin'
  | 'substack'
  | 'mail'
  | 'check'
  | 'sparkle'
  | 'brain'
  | 'eye'
  | 'layers'
  | 'spark'
  | 'menu'
  | 'close'
  | 'code'
  | 'bolt'
  | 'graduate'
  | 'calendar';

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: Props) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };

  switch (name) {
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case 'arrow-up-right':
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      );
    case 'play':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      );
    case 'mic':
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11v1a7 7 0 0 0 14 0v-1" />
          <path d="M12 19v3" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M21.582 7.186a2.506 2.506 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418A2.506 2.506 0 0 0 2.418 7.186C2 8.746 2 12 2 12s0 3.254.418 4.814a2.506 2.506 0 0 0 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case 'spotify':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.333 14.52c-.16.26-.5.34-.76.18-2.08-1.27-4.7-1.56-7.79-.85-.3.07-.6-.12-.67-.42-.07-.3.12-.6.42-.67 3.38-.78 6.28-.44 8.62.98.26.16.34.5.18.78zm1.16-2.5c-.2.33-.63.43-.96.23-2.38-1.46-6.01-1.88-8.83-1.02-.37.11-.77-.1-.88-.47-.11-.37.1-.77.47-.88 3.22-.98 7.23-.51 9.97 1.18.33.2.43.63.23.96zm.1-2.6c-2.86-1.7-7.58-1.86-10.31-1.03-.45.14-.92-.12-1.05-.57-.13-.45.12-.92.57-1.05 3.13-.95 8.34-.77 11.63 1.19.4.24.54.76.3 1.17-.24.4-.76.53-1.14.29z" />
        </svg>
      );
    case 'apple':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.339 18.337H5.667v-8.59H8.34v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H9.999v-8.59h2.564v1.176h.036c.357-.676 1.228-1.388 2.528-1.388 2.699 0 3.203 1.78 3.203 4.092v4.71z" />
        </svg>
      );
    case 'substack':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3v3m0 12v3M5.64 5.64l2.12 2.12m8.49 8.49 2.12 2.12M3 12h3m12 0h3M5.64 18.36l2.12-2.12m8.49-8.49 2.12-2.12" />
        </svg>
      );
    case 'brain':
      return (
        <svg {...common}>
          <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.5a2 2 0 0 0-2 2v.5A2.5 2.5 0 0 0 3 10v0a2.5 2.5 0 0 0 1 2v0a2 2 0 0 0 0 4v0a2.5 2.5 0 0 0 1 2v0A2.5 2.5 0 0 0 7.5 20h0A2.5 2.5 0 0 0 10 17.5v-13A2.5 2.5 0 0 0 7.5 2zM14.5 2A2.5 2.5 0 0 1 17 4.5v.5a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1 2 2.5v0a2.5 2.5 0 0 1-1 2v0a2 2 0 0 1 0 4v0a2.5 2.5 0 0 1-1 2v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 14 17.5v-13A2.5 2.5 0 0 1 16.5 2z" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...common}>
          <path d="m12 2 9 5-9 5-9-5 9-5z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );
    case 'code':
      return (
        <svg {...common}>
          <path d="m8 18-6-6 6-6M16 6l6 6-6 6" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case 'graduate':
      return (
        <svg {...common}>
          <path d="m12 3 10 5-10 5L2 8l10-5z" />
          <path d="M6 10v6c0 1.5 2.5 3 6 3s6-1.5 6-3v-6" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    default:
      return null;
  }
}
