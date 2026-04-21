import { Headphones, ExternalLink, Clock } from 'lucide-react';

const episodes = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    description: 'W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą programistów i jak skutecznie uczyć się angielskiego w IT.',
    date: '25 września 2025',
    duration: '33:45',
    url: 'https://anchor.fm/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    description: 'Wojciech Trawiński, Senior Software Engineer w XTB opowiada, o tym jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
    date: '10 września 2025',
    duration: '45:57',
    url: 'https://anchor.fm/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
    description: 'W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach, które kształtują charakterystykę systemu.',
    date: '10 października 2024',
    duration: '01:16:44',
    url: 'https://anchor.fm/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
  },
  {
    title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
    description: 'Kolejne LIVE Q&A - rozmawiamy o nadchodzącym szkoleniu Opanuj TypeScript oraz o planach na nadchodzące eventy.',
    date: '21 sierpnia 2024',
    duration: '01:36:35',
    url: 'https://anchor.fm/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
  },
  {
    title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński - Przeprogramowani ft. Gość',
    description: 'Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, specjalizującej się w tworzeniu aplikacji za pomocą platform no-code i low-code.',
    date: '13 czerwca 2024',
    duration: '36:32',
    url: 'https://anchor.fm/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
  },
  {
    title: 'Nauka nowoczesnego frontendu | Paweł Gnat - Przeprogramowani ft. Gość',
    description: 'Paweł Gnat to frontend developer, który przebranżowił się do IT z budownictwa. Dzieli się swoimi wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
    date: '6 czerwca 2024',
    duration: '42:12',
    url: 'https://anchor.fm/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
  },
];

export default function PodcastSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Przeprogramowani Podcast
            </h2>
            <p className="text-lg text-slate-400">
              Szersze spojrzenie na programowanie
            </p>
          </div>
          <a
            href="https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
          >
            <Headphones className="w-5 h-5" />
            Słuchaj na Spotify
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-4">
          {episodes.map((episode) => (
            <a
              key={episode.url}
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-white group-hover:text-green-400 transition-colors line-clamp-2 mb-1">
                  {episode.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {episode.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 flex-shrink-0">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {episode.duration}
                </span>
                <span>{episode.date}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
