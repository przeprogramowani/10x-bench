import React from 'react';
import { videos } from '../data/content';

export default function YouTube() {
  return (
    <div id="youtube" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Oglądaj na YouTube
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Darmowe materiały wideo o programowaniu, architekturze i narzędziach.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.title} className="flex flex-col rounded-2xl shadow-sm overflow-hidden bg-white border border-slate-200 group hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 relative">
                <img className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" src={video.thumbnail} alt={video.title} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={video.url} className="block">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@Przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
          >
            Subskrybuj kanał
          </a>
        </div>
      </div>
    </div>
  );
}
