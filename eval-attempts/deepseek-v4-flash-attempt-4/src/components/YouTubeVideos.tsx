const videos = [
  {
    id: 'c5HVzK-tclM',
    title: 'Poznaj AI Workflow, które działa na produkcji - LIVE 10xDevs',
    thumbnail: 'https://img.youtube.com/vi/c5HVzK-tclM/maxresdefault.jpg',
  },
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    thumbnail: 'https://img.youtube.com/vi/B4t6w4QsD24/maxresdefault.jpg',
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    thumbnail: 'https://img.youtube.com/vi/0JOszZXqKaM/maxresdefault.jpg',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    thumbnail: 'https://img.youtube.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    thumbnail: 'https://img.youtube.com/vi/03y826SVjG0/maxresdefault.jpg',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    thumbnail: 'https://img.youtube.com/vi/S-iNbyLSisE/maxresdefault.jpg',
  },
]

export default function YouTubeVideos() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map(video => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          className="group overflow-hidden rounded-xl border border-white/5 bg-surface-light/50 transition hover:border-red-500/30 hover:bg-surface-light"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 transition group-hover:bg-red-600">
                <svg className="ml-0.5 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-3">
            <h4 className="text-sm font-medium text-slate-200 line-clamp-2 group-hover:text-red-400">{video.title}</h4>
          </div>
        </a>
      ))}
    </div>
  )
}
