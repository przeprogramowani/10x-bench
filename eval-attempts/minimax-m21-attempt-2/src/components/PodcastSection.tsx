import React from 'react';

interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  image: string;
  url: string;
  category: 'opanuj-ai' | 'przeprogramowani';
}

const podcastData: PodcastEpisode[] = [
  {
    id: '1',
    title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma',
    duration: '01:23:04',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi',
    category: 'opanuj-ai',
  },
  {
    id: '2',
    title: 'Wielkie Podsumowanie AI w 2025',
    duration: '01:47:28',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Wielkie-Podsumowanie-AI-w-2025',
    category: 'opanuj-ai',
  },
  {
    id: '3',
    title: 'GPT-5.2 to GEMINI KILLER?',
    duration: '00:58:41',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-2-to-GEMINI-KILLER',
    category: 'opanuj-ai',
  },
  {
    id: '4',
    title: 'Programista vs. Angielski - Wiktoria Sitko',
    duration: '00:33:45',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs-Angielski',
    category: 'przeprogramowani',
  },
];

const PodcastSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'opanuj-ai' | 'przeprogramowani'>('all');

  const filteredPodcasts = activeCategory === 'all' 
    ? podcastData 
    : podcastData.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50" id="podcast">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Podcasty</h2>
          <p className="section-subtitle mx-auto">
            Słuchaj naszych podcastów o technologii, AI i programowaniu
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {['all', 'opanuj-ai', 'przeprogramowani'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as 'all' | 'opanuj-ai' | 'przeprogramowani')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat === 'all' ? 'Wszystkie' : cat === 'opanuj-ai' ? 'Opanuj.AI' : 'Przeprogramowani'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPodcasts.map((episode) => (
            <a
              key={episode.id}
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group"
            >
              <div className="relative">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {episode.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {episode.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/podcast"
            className="btn btn-secondary"
          >
            Wszystkie odcinki
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
