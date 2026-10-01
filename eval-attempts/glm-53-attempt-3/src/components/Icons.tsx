import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
} as const;

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 5v14l12-7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeadphonesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="14" width="4" height="7" rx="1.5" />
      <rect x="18" y="14" width="4" height="7" rx="1.5" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1C24 15.6 24 12 24 12s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 3.5c3-1 5.5 0 7 1.5s2.5 4 1.5 7l-8 8-3.5-3.5m3-13c-1 3-3.5 5.5-7 7l3.5 3.5" />
      <path d="M10 14 5 19m0-9h4" />
    </svg>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.42.4.6.24 1.04.52 1.5.98.46.46.74.9.98 1.5.16.46.35 1.25.4 2.42.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.4 2.42-.24.6-.52 1.04-.98 1.5-.46.46-.9.74-1.5.98-.46.16-1.25.35-2.42.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.42-.4a4.04 4.04 0 0 1-1.5-.98 4.04 4.04 0 0 1-.98-1.5c-.16-.46-.35-1.25-.4-2.42C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.96.4-2.42.24-.6.52-1.04.98-1.5.46-.46.9-.74 1.5-.98.46-.16 1.25-.35 2.42-.4C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
  );
}

export function RssIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.18 15.64a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36zM4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
    </svg>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.34.14.42.58.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.72.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.1 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.32-1.32 11.4-1.02 15.9 1.62.54.3.72 1.02.36 1.56-.3.42-1.02.6-1.62.24z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.05 12.72c-.03-2.53 2.07-3.75 2.16-3.8-1.18-1.72-3-1.96-3.65-1.98-1.55-.16-3.03.91-3.82.91-.79 0-2-0.89-3.29-.87-1.68.03-3.24.98-4.1 2.49-1.75 3.04-.45 7.53 1.25 9.99.83 1.2 1.82 2.54 3.12 2.49 1.25-.05 1.72-.8 3.23-.8 1.5 0 1.93.8 3.25.78 1.35-.03 2.21-1.22 3.03-2.42.95-1.39 1.34-2.74 1.36-2.81-.03-.01-2.6-1-2.63-3.98zM14.63 4.6c.69-.83 1.15-1.99 1.02-3.14-1.02.04-2.25.68-2.97 1.51-.65.74-1.21 1.92-1.06 3.05 1.13.09 2.3-.57 3.01-1.42z" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 11v3.6h8.9c-.18 1.3-.9 3.1-2.4 4.3-1.4 1.1-3.3 1.7-5.5 1.7-4.2 0-7.8-2.8-9-6.7-.3-1-.5-2-.5-3.1s.2-2.1.5-3.1c1.2-3.9 4.8-6.7 9-6.7 2.9 0 5.2 1.1 6.9 2.7l-2.8 2.8c-1.1-1-2.5-1.7-4.1-1.7-2.8 0-5.3 1.9-6.2 4.6-.2.7-.4 1.4-.4 2.2s.1 1.5.4 2.2c.9 2.7 3.3 4.6 6.2 4.6 1.9 0 3.4-.6 4.5-1.5 1-.8 1.6-2 1.9-3.2H12z" />
    </svg>
  );
}
