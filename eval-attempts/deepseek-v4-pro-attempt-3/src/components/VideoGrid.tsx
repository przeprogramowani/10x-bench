interface Video {
  title: string;
  videoId: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE',
    videoId: '0JOszZXqKaM',
    thumbnail: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
  },
  {
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    videoId: 'XgyH-HSzKRQ',
    thumbnail: 'https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
  },
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    videoId: '03y826SVjG0',
    thumbnail: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    videoId: 'S-iNbyLSisE',
    thumbnail: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
  },
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    videoId: 'aRkECt7derY',
    thumbnail: 'https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg',
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    videoId: 'vH1T5qB4dBQ',
    thumbnail: 'https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg',
  },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <a
          key={video.videoId}
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass card-hover rounded-xl overflow-hidden"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-6 h-6 text-brand-dark translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium line-clamp-2 leading-snug">{video.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}