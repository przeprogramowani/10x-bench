import React, { useState } from 'react';

interface Props {
  videoId: string;
  title: string;
  originalUrl: string;
}

export const VideoPlayer: React.FC<Props> = ({ videoId, title, originalUrl }) => {
  const [iframeBlocked, setIframeBlocked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-md group">
        {!iframeBlocked ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={`Odtwarzacz YouTube: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
            onError={() => setIframeBlocked(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gray-900 text-gray-300">
            <p className="text-sm font-medium mb-3">
              Osadzenie wideo jest blokowane przez Twoją przeglądarkę lub rozszerzenie prywatności.
            </p>
            <a
              href={originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-semibold"
            >
              Obejrzyj bezpośrednio na YouTube →
            </a>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>Odtwarzacz oficjalnego kanału YouTube</span>
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-medium transition-colors focus:outline-none focus:underline"
        >
          <span>Otwórz film na YouTube</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};
