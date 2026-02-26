import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=450',
    date: 'Luty 2026',
    url: 'https://youtube.com/przeprogramowani'
  },
  {
    id: 2,
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=450',
    date: 'Styczeń 2026',
    url: 'https://youtube.com/przeprogramowani'
  }
];

const RecentYouTube = ({ showAll = false }) => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-red-500 font-medium mb-4">
              <Youtube size={20} /> Kanał YouTube
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ostatnie filmy</h2>
            <p className="text-gray-400 max-w-2xl">
              Sprawdź nasze najnowsze materiały wideo o nowościach ze świata AI i technikach programowania.
            </p>
          </div>
          {!showAll && (
            <a href="/youtube" className="mt-6 md:mt-0 inline-flex items-center text-white hover:text-red-400 transition font-medium">
              Przejdź do YouTube
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map(video => (
            <a key={video.id} href={video.url} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 mb-6 border border-gray-800 group-hover:border-red-500/50 transition-colors">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm scale-90 group-hover:scale-110 transition-transform shadow-xl">
                    <Youtube size={32} className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-2 font-medium">{video.date}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                    {video.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-red-400 flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentYouTube;
