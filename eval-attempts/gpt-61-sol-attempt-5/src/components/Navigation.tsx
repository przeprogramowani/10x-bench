import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = [{href:'/o-nas/',label:'O nas'}, {href:'/podcast/',label:'Podcast'}, {href:'/youtube/',label:'YouTube'}, {href:'/#kursy',label:'Kursy'}];
  useEffect(() => {
    function close(event: KeyboardEvent) { if (open && event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <>
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
    <nav id="main-navigation" aria-label="Nawigacja główna" className={`navigation ${open ? 'is-open' : ''}`}>
      {links.map(link => <a key={link.href} href={link.href} aria-current={path.replace(/\/$/,'') === link.href.replace(/\/$/,'') ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}
      <a className="nav-newsletter" href="/#newsletter" onClick={() => setOpen(false)}>Newsletter <ArrowUpRight size={16}/></a>
    </nav>
  </>;
}
