import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, CodeXml } from 'lucide-react';
export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const links = [
    { href: '/o-nas/', label: 'O nas' },
    { href: '/#kursy', label: 'Kursy' },
    { href: '/podcast/', label: 'Podcast' },
    { href: '/youtube/', label: 'YouTube' },
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Przeprogramowani — strona główna">
          <span className="brand-icon">
            <CodeXml size={27} strokeWidth={2.1} />
          </span>
          <span>
            Przeprogramowani<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label="Główna nawigacja"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={
                path.replace(/\/$/, '') === link.href.replace(/\/$/, '') ? 'page' : undefined
              }
            >
              {link.label}
            </a>
          ))}
          <a className="nav-newsletter" href="/#newsletter" onClick={() => setOpen(false)}>
            Newsletter <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
