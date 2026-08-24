import { FormEvent, useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSent(true);
  };

  if (sent) {
    return <p className="max-w-sm text-sm font-medium text-acid">Dziękujemy. Sprawdź skrzynkę, żeby potwierdzić zapis.</p>;
  }

  return (
    <form className="flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Adres e-mail</label>
      <input className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/[0.06] px-5 text-sm text-paper placeholder:text-white/35 focus:border-acid focus:outline-none" id="newsletter-email" type="email" placeholder="twoj@email.pl" value={email} onChange={(event) => setEmail(event.target.value)} required />
      <button className="min-h-12 rounded-full bg-acid px-6 text-xs font-bold uppercase tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5" type="submit">Zapisz mnie</button>
    </form>
  );
}
