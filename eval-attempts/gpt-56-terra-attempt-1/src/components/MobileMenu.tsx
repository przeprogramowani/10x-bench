import { useState } from "react";

const links = [
  ["O nas", "/o-nas"],
  ["Podcast", "/podcast"],
  ["YouTube", "/youtube"],
  ["Kursy", "/#kursy"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        className="grid h-10 w-10 place-items-center border border-white/15 bg-white/[0.03] text-white"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
          <span className={`h-px w-full bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-full bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </span>
      </button>
      {open && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-[73px] z-50 border-y border-white/10 bg-[#101111] px-5 pb-6 pt-4 shadow-2xl">
          <nav className="flex flex-col divide-y divide-white/10">
            {links.map(([label, href]) => (
              <a className="py-4 text-lg font-bold" href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="mt-5 block bg-[#c7ff3d] px-5 py-3 text-center text-sm font-extrabold text-[#101111]" href="https://10xdevs.pl">
            Poznaj 10xDevs
          </a>
        </div>
      )}
    </div>
  );
}
