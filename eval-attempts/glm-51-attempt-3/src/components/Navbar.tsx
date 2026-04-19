import { useState } from 'react';

const navLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav class="fixed top-0 z-50 w-full border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" class="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span class="text-brand-400">&lt;/&gt;</span>
          <span>Przeprogramowani</span>
        </a>

        <div class="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              class="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
              {link.external && (
                <span class="ml-1 text-xs text-amber-400">↗</span>
              )}
            </a>
          ))}
        </div>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div class="border-t border-white/5 bg-gray-950/95 backdrop-blur-xl md:hidden">
          <div class="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                class="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
                {link.external && (
                  <span class="ml-1 text-xs text-amber-400">↗</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
