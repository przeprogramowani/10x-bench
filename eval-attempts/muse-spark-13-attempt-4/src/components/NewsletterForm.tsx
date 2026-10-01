import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      {!done ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes('@')) setDone(true);
          }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="twoj@email.pl"
            className="w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-3.5 text-sm focus:border-amber-400 focus:outline-none"
          />
          <button className="whitespace-nowrap rounded-2xl bg-amber-400 px-7 py-3.5 text-sm font-black text-black hover:bg-amber-300">
            Zapisz się za darmo →
          </button>
        </form>
      ) : (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-sm">
          <p className="font-bold text-emerald-300">Gotowe! Sprawdź skrzynkę ({email})</p>
          <p className="mt-1 text-slate-300">
            To demo — w oryginale zapis działa przez przeprogramowani.substack.com. Format 3-2-1 w każdy piątek.
          </p>
        </div>
      )}
      <p className="mt-3 text-xs text-slate-500">3 rekomendacje techniczne • 2 rozwojowe • 1 bonus. Zero spamu.</p>
    </div>
  );
}
