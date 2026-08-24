const videos = [
  {
    title: 'Poznaj AI Workflow, które działa na produkcji - LIVE 10xDevs',
    id: 'c5HVzK-tclM',
  },
  {
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    id: 'B4t6w4QsD24',
  },
  {
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE',
    id: '0JOszZXqKaM',
  },
  {
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    id: 'XgyH-HSzKRQ',
  },
  {
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    id: '03y826SVjG0',
  },
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    id: 'S-iNbyLSisE',
  },
];

export default function YouTubeSection({ fullPage }: { fullPage?: boolean }) {
  const items = fullPage ? videos : videos.slice(0, 3);

  return (
    <section id="youtube" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="gradient-text">YouTube</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Filmy i podcasty — rozwój nowoczesnego programisty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl overflow-hidden hover:bg-dark-700/60 transition-all duration-200 group"
            >
              <div className="relative aspect-video bg-dark-800 overflow-hidden">
                <img
                  src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm group-hover:text-primary-300 transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://youtube.com/c/przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Zobacz więcej na YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
