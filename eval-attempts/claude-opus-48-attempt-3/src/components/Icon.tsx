interface IconProps {
  name: string;
  className?: string;
}

// Minimal inline SVG icon set (stroke = currentColor unless a brand glyph).
const paths: Record<string, JSX.Element> = {
  youtube: (
    <path d="M23 12s0-3.4-.4-5a2.8 2.8 0 0 0-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.6.5a2.8 2.8 0 0 0-2 2C1 8.6 1 12 1 12s0 3.4.4 5a2.8 2.8 0 0 0 2 2c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.8 2.8 0 0 0 2-2c.4-1.6.4-5 .4-5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
  ),
  spotify: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.6.6 0 0 1-.86.2c-2.35-1.44-5.3-1.76-8.79-.96a.63.63 0 1 1-.28-1.22c3.82-.87 7.09-.5 9.73 1.12a.62.62 0 0 1 .2.86Zm1.23-2.74a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.5c3.63-1.09 8.15-.56 11.24 1.34.37.22.49.7.25 1.07Zm.1-2.85C14.82 8.95 9.4 8.77 6.3 9.71a.94.94 0 1 1-.54-1.8c3.56-1.08 9.54-.87 13.3 1.36a.94.94 0 0 1-.96 1.61Z" />
  ),
  apple: (
    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.3 6v2.2a1.5 1.5 0 0 0 1.5 1.5h4.4a1.5 1.5 0 0 0 1.5-1.5V15c2-1.3 3.3-3.5 3.3-6a7 7 0 0 0-7-7Zm-2 18.5c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-.5h-4v.5ZM12 6.5A2.5 2.5 0 0 0 9.5 9a.75.75 0 0 0 1.5 0A1 1 0 0 1 12 8a.75.75 0 0 0 0-1.5Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.7" r="1.1" />
    </>
  ),
  tiktok: (
    <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.4-2.6 5.6-5.6 5.6A5.4 5.4 0 0 1 5.4 14a5.4 5.4 0 0 1 6-5.3v2.8a2.7 2.7 0 0 0-1-.2 2.6 2.6 0 1 0 2.6 2.6V3h3.5Z" />
  ),
  twitter: (
    <path d="M17.5 3h3.2l-7 8 8.2 10.9h-6.4l-5-6.6-5.8 6.6H1.5l7.5-8.5L1 3h6.6l4.6 6L17.5 3Zm-1.1 16.9h1.8L7.4 4.9H5.5l10.9 15Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  play: <path d="M8 5v14l11-7L8 5Z" />,
  arrow: (
    <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: (
    <path d="m5 12 4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  close: (
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  spark: (
    <path d="M12 2c.5 4.5 3 7 7.5 7.5-4.5.5-7 3-7.5 7.5-.5-4.5-3-7-7.5-7.5C9 9 11.5 6.5 12 2Z" />
  ),
};

export default function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const glyph = paths[name];
  if (!glyph) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      {glyph}
    </svg>
  );
}
