import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [err, setErr] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr('Podaj poprawny adres e-mail.');
      return;
    }
    setErr('');
    setDone(true);
  }

  if (done)
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5 text-sm text-emerald-200">
        🎉 Dzięki! Sprawdź skrzynkę — wysłaliśmy potwierdzenie. Do usłyszenia w piątek w formacie 3-2-1!
      </div>
    );

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="twoj@email.pl"
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
      />
      <button className="whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:opacity-90">
        Zapisz się za darmo →
      </button>
      {err && <p className="text-xs text-red-300">{err}</p>}
    </form>
  );
}
