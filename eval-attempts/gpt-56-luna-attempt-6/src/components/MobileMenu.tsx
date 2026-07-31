import { useState } from 'react';

const links = [
  ['O nas', '/o-nas'],
  ['Podcast', '/podcast'],
  ['YouTube', '/youtube'],
  ['Programy', '/#programy'],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="mobile-trigger"
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="text-lg">{open ? '×' : '☰'}</span>
      </button>
      <div className={`mobile-menu absolute left-0 right-0 top-full bg-paper px-4 ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="mt-2 inline-flex !px-4 !py-3 !text-sm !text-white" style={{ background: '#151719' }} href="https://10xdevs.pl">10xDevs <span className="ml-2">↗</span></a>
      </div>
    </div>
  );
}
