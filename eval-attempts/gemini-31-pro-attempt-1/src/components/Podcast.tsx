import React from 'react';
import { podcasts } from '../data/content';

export default function Podcast() {
  return (
    <div id="podcast" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Podcast Przeprogramowani
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Posłuchaj naszych rozmów o technologii, AI i rozwoju kariery programisty.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {podcasts.map((episode) => (
            <div key={episode.title} className="flex flex-col rounded-2xl shadow-sm overflow-hidden border border-slate-200 hover:border-blue-500 transition-colors">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    Odcinek Podcastu
                  </p>
                  <a href={episode.url} className="block mt-2">
                    <p className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-3">
                      {episode.title}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{episode.date}</span>
                  </div>
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-slate-500">
                      <time dateTime={episode.date}>
                        {new Date(episode.date).toLocaleDateString('pl-PL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://przeprogramowani.pl/podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
          >
            Zobacz wszystkie odcinki
          </a>
        </div>
      </div>
    </div>
  );
}
