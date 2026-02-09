const podcastEpisodes = [
  {
    id: '1',
    title: 'Programowanie z AI — przyszłość czy teraźniejszość?',
    description: 'Rozmowa o tym, jak AI zmienia sposób, w jaki programujemy. Czy AI zastąpi programistów? Jak wykorzystać AI jako narzędzie, nie zagrożenie?',
    duration: '45 min',
    date: '2026-02-07',
    episodeNumber: 127,
    spotifyUrl: 'https://open.spotify.com/episode/1',
    guests: ['Przemek Smyrdek', 'Marcin Czarkowski'],
  },
  {
    id: '2',
    title: 'TypeScript 5.0 — co nowego?',
    description: 'Przegląd najnowszych funkcji TypeScript 5.0. Dekoratory, const type parameters, i wiele więcej. Czy warto aktualizować?',
    duration: '38 min',
    date: '2026-01-31',
    episodeNumber: 126,
    spotifyUrl: 'https://open.spotify.com/episode/2',
    guests: ['TypeScript Team'],
  },
  {
    id: '3',
    title: 'Career paths 2026 — gdzie zmierza branża?',
    description: 'Analiza trendów w branży IT. Fullstack, Frontend, Backend, DevOps, AI Engineer — którą ścieżkę wybrać w 2026 roku?',
    duration: '52 min',
    date: '2026-01-24',
    episodeNumber: 125,
    spotifyUrl: 'https://open.spotify.com/episode/3',
    guests: ['Goście z branży'],
  },
  {
    id: '4',
    title: 'Opanuj Frontend — Behind the Scenes',
    description: 'Jak powstaje nasz kurs? Od koncepcji do realizacji. Proces tworzenia, feedback absolwentów, i ciągłe doskonalenie.',
    duration: '41 min',
    date: '2026-01-17',
    episodeNumber: 124,
    spotifyUrl: 'https://open.spotify.com/episode/4',
    guests: ['Przemek Smyrdek'],
  },
];

export default function Podcast() {
  return (
    <section className="py-20 sm:py-24 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-main bg-main/10 border border-main/20 rounded-full px-3 py-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M12 1a9 9 0 0 0-9 9v7a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0-9-9 9 9 0 0 0-9 9v7a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9v7a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9" />
              </svg>
              Podcast
            </span>
            <h2 className="section-heading">
              Przeprogramowany Podcast
            </h2>
            <p className="section-subheading">
              Rozmowy o programowaniu, karierze i technologiach
            </p>
          </div>
          <a
            href="https://open.spotify.com/show/5n0eO0pl5m1d82y2jA6U5E"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Wszystkie odcinki →
          </a>
        </div>

        {/* Episodes Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {podcastEpisodes.map((episode) => (
            <a
              key={episode.id}
              href={episode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group card p-6 flex gap-6"
            >
              {/* Episode Number / Art */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-main to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                #{episode.episodeNumber}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-500">
                    {new Date(episode.date).toLocaleDateString('pl-PL', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs text-gray-500">{episode.duration}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-main transition-colors line-clamp-2">
                  {episode.title}
                </h3>

                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {episode.description}
                </p>

                {/* Hosts */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {episode.guests.slice(0, 3).map((guest, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-900 flex items-center justify-center text-[10px] text-gray-300"
                        title={guest}
                      >
                        {guest.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {episode.guests.join(', ')}
                  </span>
                </div>
              </div>

              {/* Play Button */}
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-main transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="text-white ml-0.5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Subscribe */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Nie przegap żadnego odcinka!
              </h3>
              <p className="text-gray-400">
                Subskrybuj podcast w swojej ulubionej aplikacji i bądź na bieżąco z nowymi odcinkami.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 lg:mt-0">
              <a
                href="https://open.spotify.com/show/5n0eO0pl5m1d82y2jA6U5E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white rounded-lg font-medium hover:bg-[#1ed760] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/pl/podcast/przeprogramowani-podcast/id1559275634"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.7 19.5c-1.1 1.2-2.2 2.3-3.9 2.3-1.5 0-2.1-1.1-4.3-1.1-2.2 0-3 1.1-4.4 1.2-1.5.1-2.8-1.2-4.1-2.3C2.5 16.6 1 13.3 1 12c0-1.3 1.1-3.3 3.3-3.3 1.3 0 2.2.9 3.6.9 1.4 0 2.3-.9 4.3-.9 1.6 0 3.4 1.1 3.4 3.3 0 1.3-1.2 2.9-3 4.6zm-4.3-13c0-1.5 1.2-2.5 2.5-2.5s2.5 1 2.5 2.5-1.2 2.5-2.5 2.5-2.5-1-2.5-2.5z"/>
                </svg>
                Apple Podcasts
              </a>
              <a
                href="https://podcast.google.com/podcast/przeprogramowani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.24 0 0 5.24 0 12s5.24 12 12 12 12-5.24 12-12S18.76 0 12 0zm-2 17c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4zm2-9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V6z"/>
                </svg>
                Google Podcasts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
