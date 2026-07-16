import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'error' | 'success';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      setMessage('Podaj poprawny adres e-mail.');
      return;
    }

    // Demo: w wersji produkcyjnej podłącz endpoint newslettera (np. Cloudflare Function).
    setStatus('success');
    setMessage('Dzięki! Sprawdź skrzynkę i potwierdź zapis do Przeprogramowanego Newslettera.');
    setEmail('');
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200"
      >
        <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Adres e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="twoj@email.pl"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            aria-invalid={status === 'error'}
            className={`w-full rounded-full border bg-ink-900/60 px-5 py-3 text-sm text-white placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-brand-400 ${
              status === 'error' ? 'border-red-400/60' : 'border-white/15'
            }`}
          />
        </div>
        <button type="submit" className="btn-primary whitespace-nowrap">
          Zapisz się
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 pl-2 text-xs text-red-300" role="alert">
          {message}
        </p>
      )}
      <p className="mt-3 pl-2 text-xs text-slate-500">
        3 techn, 2 rozwój, 1 bonus — w każdy piątek. Zero spamu, wypisujesz się jednym kliknięciem.
      </p>
    </form>
  );
}
