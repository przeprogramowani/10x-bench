import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus('error');
      return;
    }
    // In production this posts to the newsletter provider. Here we confirm optimistically.
    setStatus('ok');
    setEmail('');
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-ink-900 to-ink-900 p-8 sm:p-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="eyebrow">Przeprogramowany Newsletter</span>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Wiedza, która działa — co piątek</h2>
        <p className="mt-4 text-slate-300">
          3 rekomendacje techniczne, 2 o rozwoju i 1 bonusowa niespodzianka. Dołącz do tysięcy programistów,
          którzy zaczynają weekend od solidnej dawki wiedzy.
        </p>

        {status === 'ok' ? (
          <div
            className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-4 text-emerald-200"
            role="status"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Dzięki! Sprawdź skrzynkę, aby potwierdzić zapis.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Twój adres e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="twoj@email.com"
              className={`w-full rounded-full border bg-white/5 px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-400 ${
                status === 'error' ? 'border-red-400/60' : 'border-white/15'
              }`}
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
            />
            <button type="submit" className="btn-accent whitespace-nowrap px-7 py-3.5">
              Zapisz się
            </button>
          </form>
        )}
        {status === 'error' && (
          <p id="newsletter-error" className="mt-3 text-sm text-red-300">
            Podaj poprawny adres e-mail.
          </p>
        )}
        <p className="mt-4 text-xs text-slate-500">Bez spamu. Wypisujesz się jednym kliknięciem.</p>
      </div>
    </div>
  );
}
