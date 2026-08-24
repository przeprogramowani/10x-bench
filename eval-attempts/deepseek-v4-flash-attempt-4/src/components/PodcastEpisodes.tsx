const episodes = [
  {
    title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI',
    podcast: 'Opanuj.AI Podcast',
    duration: '01:21:53',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE',
    podcast: 'Opanuj.AI Podcast',
    duration: '01:12:26',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
  },
  {
    title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI?',
    podcast: 'Opanuj.AI Podcast',
    duration: '00:47:22',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
  },
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    podcast: 'Przeprogramowani ft. Gość',
    duration: '00:33:45',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    podcast: 'Przeprogramowani ft. Gość',
    duration: '00:45:56',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    podcast: 'Przeprogramowani ft. Gość',
    duration: '01:16:44',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
  },
]

export default function PodcastEpisodes() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {episodes.map((ep, i) => (
        <a
          key={i}
          href={ep.url}
          target="_blank"
          className="group rounded-xl border border-white/5 bg-surface-light/50 p-4 transition hover:border-amber-500/30 hover:bg-surface-light"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">{ep.podcast}</span>
            <span className="text-xs text-slate-500">{ep.duration}</span>
          </div>
          <h4 className="text-sm font-medium text-slate-200 line-clamp-2 group-hover:text-amber-400">{ep.title}</h4>
          <div className="mt-3 flex items-center gap-1 text-xs text-slate-500 group-hover:text-amber-400">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Słuchaj
          </div>
        </a>
      ))}
    </div>
  )
}
