import React, { useState } from 'react';

interface Props {
  title: string;
  audioUrl?: string;
  originalUrl: string;
  duration?: string;
  sourceName: string;
}

export const AudioPlayer: React.FC<Props> = ({
  title,
  audioUrl,
  originalUrl,
  duration,
  sourceName,
}) => {
  const [playbackError, setPlaybackError] = useState(false);

  return (
    <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-4 sm:p-5 flex flex-col gap-3 shadow-lg">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
          Odtwarzacz audio
        </span>
        {duration && (
          <span className="text-xs text-gray-400 font-mono">
            Czas trwania: {duration}
          </span>
        )}
      </div>

      {audioUrl && !playbackError ? (
        <div className="w-full">
          <audio
            controls
            preload="metadata"
            className="w-full h-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Odtwarzaj materiał audio: ${title}`}
            onError={() => setPlaybackError(true)}
          >
            <source src={audioUrl} type="audio/mpeg" />
            Twoja przeglądarka nie obsługuje elementu audio. Skorzystaj z odnośnika do odcinka.
          </audio>
        </div>
      ) : (
        <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-xs text-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            {playbackError
              ? 'Dostawca blokuje bezpośredni strumień audio w Twojej przeglądarce.'
              : 'Bezpośredni strumień MP3 jest niedostępny.'}
          </span>
          <a
            href={originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-300 underline hover:text-white"
          >
            Odsłuchaj na Spotify →
          </a>
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-gray-800/60 text-xs">
        <span className="text-gray-400">Źródło: {sourceName}</span>
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:underline"
        >
          <span>Otwórz oryginalny odcinek</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};
