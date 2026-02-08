import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Podaj poprawny adres e-mail.');
      return;
    }

    // In a real app, this would send to an API
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-surface-border bg-surface-raised p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Bądź na bieżąco
          </h2>
          <p className="mt-4 text-text-secondary">
            Dołącz do naszego newslettera. Otrzymuj informacje o nowych kursach,
            odcinkach podcastu i artykułach prosto na skrzynkę.
          </p>

          {status === 'success' ? (
            <div className="mt-8 rounded-lg bg-success/10 border border-success/20 p-4 text-success">
              Dziękujemy za zapisanie się! Sprawdź swoją skrzynkę e-mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="twoj@email.pl"
                className="flex-1 rounded-lg border border-surface-border bg-surface-base px-4 py-3 text-text-primary placeholder-text-muted outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-surface-base"
              >
                Zapisz się
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-sm text-error">{errorMessage}</p>
          )}

          <p className="mt-4 text-xs text-text-muted">
            Bez spamu. Możesz zrezygnować w dowolnym momencie.
          </p>
        </div>
      </div>
    </section>
  );
}
