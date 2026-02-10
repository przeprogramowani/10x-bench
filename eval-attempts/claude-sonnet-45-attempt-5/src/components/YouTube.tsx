export default function YouTube() {
  const videos = [
    {
      title: 'Jak wykorzystać 100% możliwości edytorów AI (Cursor, Copilot)?',
      description: 'Poznaj zaawansowane techniki pracy z edytorami AI, które zwiększą twoją produktywność w programowaniu',
      thumbnail: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=AI+Editors',
      views: '15K'
    },
    {
      title: 'OpenAI GPT-5 vs Google Gemini 3 - która AI wygrywa?',
      description: 'Kompleksowe porównanie najnowszych modeli AI od OpenAI i Google',
      thumbnail: 'https://via.placeholder.com/400x225/8b5cf6/ffffff?text=GPT5+vs+Gemini',
      views: '23K'
    },
    {
      title: 'TypeScript 5.5 - co nowego?',
      description: 'Przegląd najnowszych funkcji TypeScript 5.5 z praktycznymi przykładami',
      thumbnail: 'https://via.placeholder.com/400x225/06b6d4/ffffff?text=TypeScript+5.5',
      views: '18K'
    },
    {
      title: 'React 19 - rewolucja w programowaniu frontendowym',
      description: 'Wszystko o nowych feature\'ach React 19 i jak zmienią sposób tworzenia aplikacji',
      thumbnail: 'https://via.placeholder.com/400x225/ec4899/ffffff?text=React+19',
      views: '31K'
    },
    {
      title: 'Astro 5.0 - najszybszy framework do tworzenia stron',
      description: 'Dlaczego Astro to przyszłość statycznych stron i aplikacji webowych',
      thumbnail: 'https://via.placeholder.com/400x225/f59e0b/ffffff?text=Astro+5',
      views: '12K'
    },
    {
      title: 'AI w e-commerce - jak ChatGPT zmienia zakupy online',
      description: 'Agenci AI, personalizacja i automatyzacja w branży e-commerce',
      thumbnail: 'https://via.placeholder.com/400x225/10b981/ffffff?text=AI+eCommerce',
      views: '9K'
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">YouTube</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Praktyczna wiedza o programowaniu, narzędziach i najnowszych technologiach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative pb-[56.25%] bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>👁️ {video.views} wyświetleń</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Subskrybuj nasz kanał YouTube</h3>
          <p className="text-lg mb-6 text-red-100">
            Dołącz do tysięcy programistów, którzy rozwijają swoje umiejętności z naszymi filmami
          </p>
          <a
            href="https://www.youtube.com/@przeprogramowani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
          >
            📺 Zobacz więcej na YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
