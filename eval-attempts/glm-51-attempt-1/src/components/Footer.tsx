import { siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer class="py-16 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <a href="/" class="text-xl font-bold text-white">
              &lt;/&gt;{" "}
              <span class="text-brand-400">{siteConfig.name}</span>
            </a>
            <p class="mt-3 text-sm text-gray-500 max-w-md">
              {siteConfig.tagline}. Tworzymy treści, kursy i narzędzia, które
              pomagają programistom rozwijać się na wielu płaszczyznach.
            </p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Projekty</h4>
            <ul class="space-y-2">
              {[
                { label: "10xDevs", href: "https://10xdevs.pl" },
                { label: "Opanuj Frontend", href: "https://opanujfrontend.pl" },
                { label: "Opanuj TypeScript", href: "https://opanujtypescript.pl" },
                { label: "Opanuj AI", href: "https://opanuj.ai" },
                { label: "10xRules.ai", href: "https://10xrules.ai" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Społeczność</h4>
            <ul class="space-y-2">
              {[
                { label: "YouTube", href: siteConfig.youtube },
                { label: "Podcast", href: siteConfig.podcast },
                { label: "Newsletter", href: siteConfig.newsletter },
                { label: "Facebook", href: siteConfig.facebook },
                { label: "Instagram", href: siteConfig.instagram },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}.pl — {siteConfig.tagline}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            class="text-sm text-gray-500 hover:text-white transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
