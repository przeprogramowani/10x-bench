export default function NewsletterCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 to-brand-800/5 p-8 text-center sm:p-12">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          Bądź na bieżąco
        </h2>
        <p className="mb-8 text-lg text-surface-300">
          Dołącz do naszego newslettera na Substack. Cotygodniowa dawka wiedzy
          o programowaniu, AI i rozwoju kariery w IT.
        </p>
        <a
          href="https://przeprogramowani.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40"
        >
          Zapisz się do newslettera
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
