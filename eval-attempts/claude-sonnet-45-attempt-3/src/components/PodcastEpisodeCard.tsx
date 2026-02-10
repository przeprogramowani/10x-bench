interface PodcastEpisodeCardProps {
  title: string;
  duration: string;
  description: string;
  spotifyUrl?: string;
  appleUrl?: string;
}

export default function PodcastEpisodeCard({ title, duration, description, spotifyUrl, appleUrl }: PodcastEpisodeCardProps) {
  return (
    <div className="card">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 flex-1">{title}</h3>
          <span className="text-sm text-gray-500 ml-4 flex-shrink-0">{duration}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-3">
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
          )}
          {appleUrl && (
            <a
              href={appleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.836c-.398.398-1.055.398-1.453 0l-3.047-3.047-3.047 3.047c-.398.398-1.055.398-1.453 0-.398-.398-.398-1.055 0-1.453l3.047-3.047-3.047-3.047c-.398-.398-.398-1.055 0-1.453.398-.398 1.055-.398 1.453 0l3.047 3.047 3.047-3.047c.398-.398 1.055-.398 1.453 0 .398.398.398 1.055 0 1.453l-3.047 3.047 3.047 3.047c.398.398.398 1.055 0 1.453z"/>
              </svg>
              Apple Podcasts
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
