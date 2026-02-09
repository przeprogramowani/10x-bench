import React from 'react';

interface NewsletterProps {
  compact?: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold mb-2">Przeprogramowany Newsletter</h3>
        <p className="mb-4 text-primary-100">Co tydzień w piątek: 3 rekomendacje techniczne, 2 rozwojowe, 1 bonus niespodzianka</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Twój email"
            className="flex-grow px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-300"
          />
          <button className="btn bg-gray-900 text-white hover:bg-gray-800">
            Zapisz się
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Przeprogramowany Newsletter</h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-primary-100">rekomendacje techniczne</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">2</div>
            <div className="text-primary-100">rekomendacje rozwojowe</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">1</div>
            <div className="text-primary-100">bonus niespodzianka</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Twój adres email"
            className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-300"
          />
          <a
            href="https://przeprogramowani.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-primary-700 hover:bg-gray-100"
          >
            Zapisz się
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
