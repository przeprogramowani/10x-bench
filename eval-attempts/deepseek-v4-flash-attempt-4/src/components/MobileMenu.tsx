import { useState } from 'react'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-slate-300 md:hidden"
        aria-label="Menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col border-b border-white/5 bg-surface/95 backdrop-blur-xl md:hidden">
          <a href="/o-nas" onClick={() => setOpen(false)} className="border-t border-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">O nas</a>
          <a href="/podcast" onClick={() => setOpen(false)} className="border-t border-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">Podcast</a>
          <a href="/youtube" onClick={() => setOpen(false)} className="border-t border-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">YouTube</a>
          <a href="https://opanujfrontend.pl" target="_blank" onClick={() => setOpen(false)} className="border-t border-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">Opanuj Frontend</a>
          <a href="https://opanujtypescript.pl" target="_blank" onClick={() => setOpen(false)} className="border-t border-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">Opanuj TypeScript</a>
          <a href="https://10xdevs.pl" target="_blank" onClick={() => setOpen(false)} className="border-t border-white/5 px-4 py-3 text-sm font-semibold text-brand-light transition hover:bg-white/5 hover:text-white">10xDevs →</a>
        </div>
      )}
    </>
  )
}
