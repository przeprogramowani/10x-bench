const podcasts = [
  {
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)',
    duration: '01:21:53',
    series: 'Opanuj.AI Podcast',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
    desc: 'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo?',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    duration: '01:12:26',
    series: 'Opanuj.AI Podcast',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
    desc: 'W zupełnie nowym formacie podcastu Opanuj.AI zapraszamy na relację z Google I/O 2026!',
  },
  {
    title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
    duration: '00:47:22',
    series: 'Opanuj.AI Podcast',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
    desc: 'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0.',
  },
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    duration: '00:33:45',
    series: 'Przeprogramowani ft. Gość',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    desc: 'Największe bariery językowe programistów i jak skutecznie uczyć się angielskiego w IT.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    duration: '00:45:56',
    series: 'Przeprogramowani ft. Gość',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    desc: 'Jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin | Przeprogramowani ft. Gość',
    duration: '01:16:44',
    series: 'Przeprogramowani ft. Gość',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    desc: 'Jak architektura wykracza poza konkretne narzędzia i koncentruje się na kluczowych decyzjach.',
  },
];

const platforms = [
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
  { name: 'Google Podcasts', url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw' },
  { name: 'RSS', url: 'https://anchor.fm/s/22544b7c/podcast/rss' },
];

export default function PodcastSection({ fullPage }: { fullPage?: boolean }) {
  const episodes = fullPage ? podcasts : podcasts.slice(0, 3);

  return (
    <section id="podcast" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="gradient-text">Podcasty</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Słuchaj naszych podcastów o technologii, AI i programowaniu
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Opanuj.AI Podcast</h3>
          <p className="text-dark-400 mb-6">Ponad 4000 słuchaczy — comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.filter(e => e.series === 'Opanuj.AI Podcast').map((ep) => (
              <a
                key={ep.title}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:bg-dark-700/60 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 text-sm text-primary-400 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span>{ep.duration}</span>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">{ep.title}</h4>
                <p className="text-dark-400 text-sm leading-relaxed line-clamp-2">{ep.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Przeprogramowani ft. Gość</h3>
          <p className="text-dark-400 mb-6">Ponad 3800 słuchaczy — rozmowy dla głodnych wiedzy</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.filter(e => e.series === 'Przeprogramowani ft. Gość').map((ep) => (
              <a
                key={ep.title}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:bg-dark-700/60 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 text-sm text-primary-400 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span>{ep.duration}</span>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">{ep.title}</h4>
                <p className="text-dark-400 text-sm leading-relaxed line-clamp-2">{ep.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-6">Jesteśmy na twojej ulubionej platformie</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
