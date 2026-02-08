import React from 'react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
}

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
        >
          <div className="aspect-w-16 aspect-h-9 w-full bg-slate-200 dark:bg-slate-800">
             {/* Use generic video thumbnail if URL fails or just use style */}
             <div className="w-full h-48 bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors relative">
                <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             </div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 h-full">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-2">
              {video.title}
            </h3>
          </div>
        </a>
      ))}
      <div className="col-span-full text-center mt-8">
        <a
          href="https://www.youtube.com/c/przeprogramowani"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 shadow-sm text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Zobacz więcej na YouTube
        </a>
      </div>
    </div>
  );
};

export default VideoList;
