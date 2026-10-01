import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <div className="glass rounded-3xl p-6 sm:p-10">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">Przeprogramowany Newsletter</h2>
      <p className="mt-2 text-white/65">Co piątek format 3-2-1: 3 rekomendacje techniczne, 2 rozwojowe, 1 bonus.</p>
      {done ? (
        <p role="status" className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
          Dzięki! Sprawdź skrzynkę — to demo, zapisz się naprawdę na przeprogramowani.substack.com
        </p>
      ) : (
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes('@')) setDone(true);
          }}
        >
          <label htmlFor="nl-email" className="sr-only">
            Adres e-mail
          </label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ty@firma.pl"
            className="w-full flex-1 rounded-full border border-white/15 bg-ink/60 px-5 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400"
          />
          <button type="submit" className="btn-primary justify-center text-sm">
            Zapisz się za darmo →
          </button>
        </form>
      )}
    </div>
  );
}
