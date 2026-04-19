const footerLinks = [
  {
    title: 'Platforma',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'YouTube', href: '/youtube' },
      { label: 'Newsletter', href: 'https://przeprogramowani.substack.com', external: true },
    ],
  },
  {
    title: 'Kursy',
    links: [
      { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
      { label: 'Opanuj Frontend', href: 'https://opanujfrontend.pl', external: true },
      { label: 'Opanuj TypeScript', href: 'https://opanujtypescript.pl', external: true },
      { label: 'Opanuj AI', href: 'https://opanuj.ai', external: true },
    ],
  },
  {
    title: 'Społeczność',
    links: [
      { label: 'YouTube', href: 'https://youtube.com/c/przeprogramowani', external: true },
      { label: 'Facebook', href: 'https://facebook.com/przeprogramowani', external: true },
      { label: 'Instagram', href: 'https://instagram.com/przeprogramowani', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/przeprogramowani', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer class="border-t border-white/5 bg-gray-950">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" class="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span class="text-brand-400">&lt;/&gt;</span>
              <span>Przeprogramowani</span>
            </a>
            <p class="mt-3 text-sm leading-relaxed text-gray-500">
              Szersze spojrzenie na programowanie. Łączymy świat programowania, biznesu i rozwoju.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 class="text-sm font-semibold text-gray-300">{group.title}</h3>
              <ul class="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      class="text-sm text-gray-500 transition-colors hover:text-gray-300"
                    >
                      {link.label}
                      {link.external && (
                        <span class="ml-1 text-xs text-gray-600">↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p class="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Przeprogramowani.pl — Szersze spojrzenie na programowanie
          </p>
          <a
            href="mailto:kontakt@przeprogramowani.pl"
            class="text-xs text-gray-600 transition-colors hover:text-gray-400"
          >
            kontakt@przeprogramowani.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
