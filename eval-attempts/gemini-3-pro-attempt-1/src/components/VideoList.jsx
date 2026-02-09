import React from 'react';
import { Youtube, PlayCircle } from 'lucide-react';

const videos = [
  {
    title: "Cursor 2.0 vs Windsurf SWE-1.5 - Nowa era programowania",
    views: "12 tys. wyświetleń",
    date: "2 tygodnie temu",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Czy AI zabierze pracę programistom w 2026?",
    views: "25 tys. wyświetleń",
    date: "1 miesiąc temu",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Jak zacząć z TypeScript w 2026 roku?",
    views: "8.5 tys. wyświetleń",
    date: "2 miesiące temu",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Review Opanuj Frontend AI Edition",
    views: "5 tys. wyświetleń",
    date: "3 miesiące temu",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400"
  }
];

const VideoList = ({ limit }) => {
  const displayVideos = limit ? videos.slice(0, limit) : videos;

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
              <Youtube className="w-8 h-8 text-red-500 mr-3" />
              Kanał YouTube
            </h2>
            <p className="text-gray-400">Zobacz nasze najnowsze materiały wideo.</p>
          </div>
          {limit && (
             <a href="/youtube" className="hidden md:flex items-center px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              Zobacz więcej
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayVideos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs text-white rounded">
                  12:34
                </div>
              </div>
              <h3 className="font-semibold text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              <div className="text-sm text-gray-500">
                <span>{video.views}</span>
                <span className="mx-1">•</span>
                <span>{video.date}</span>
              </div>
            </div>
          ))}
        </div>
        {limit && (
            <div className="mt-8 text-center md:hidden">
              <a href="/youtube" className="inline-block px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
                Zobacz więcej
              </a>
            </div>
          )}
      </div>
    </section>
  );
};

export default VideoList;
