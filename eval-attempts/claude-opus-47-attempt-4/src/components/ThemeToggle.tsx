import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(readInitialTheme());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200/70 bg-white/70 text-ink-700 backdrop-blur transition-all hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:border-brand-400/40 dark:hover:text-brand-200"
    >
      {mounted && theme === 'dark' ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
