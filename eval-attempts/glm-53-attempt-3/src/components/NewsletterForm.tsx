import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRightIcon, CheckIcon, MailIcon } from './Icons';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.open('https://przeprogramowani.substack.com', '_blank', 'noopener');
    setDone(true);
  };

  if (done) {
    return (
      <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-glow/30 bg-cyan-glow/10 px-6 py-4 text-sm font-medium text-cyan-glow">
        <CheckIcon className="size-5" />
        Dzięki! Zapisz się na Substackie, aby dokończyć dołączenie do newslettera.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label className="relative flex-1">
        <span className="sr-only">Adres e-mail</span>
        <MailIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-mist" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="twoj@email.pl"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-mist/60 outline-none transition-colors focus:border-brand-400/60 focus:bg-white/10"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 via-accent-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:scale-[1.02]"
      >
        Zapisz się za darmo
        <ArrowRightIcon className="size-4" />
      </button>
    </form>
  );
}
