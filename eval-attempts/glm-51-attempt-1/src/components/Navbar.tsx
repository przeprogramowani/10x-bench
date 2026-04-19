import { useState } from "react";
import { siteConfig } from "../data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "O nas", href: "#o-nas" },
    { label: "Kursy", href: "#kursy" },
    { label: "Podcast", href: "#podcast" },
    { label: "YouTube", href: "#youtube" },
    { label: "Newsletter", href: siteConfig.newsletter },
  ];

  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="/" class="flex items-center gap-2 group">
            <span class="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
              &lt;/&gt;{" "}
              <span class="text-brand-400 group-hover:text-white transition-colors">
                {siteConfig.name}
              </span>
            </span>
          </a>

          <div class="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            class="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div class="md:hidden border-t border-white/5 bg-dark-950/95 backdrop-blur-xl">
          <div class="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                class="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
