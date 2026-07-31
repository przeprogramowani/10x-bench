import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSent(true);
  }

  return sent ? (
    <div className="border border-ink bg-acid px-5 py-4 font-mono text-sm font-semibold">
      Dzięki. Sprawdź skrzynkę, aby potwierdzić zapis.
    </div>
  ) : (
    <form className="flex flex-col gap-2 sm:flex-row" onSubmit={submit}>
      <label className="sr-only" htmlFor="newsletter-email">Adres e-mail</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="twój@email.pl"
        className="min-h-12 flex-1 border border-ink bg-transparent px-4 text-sm outline-none placeholder:text-ink/45 focus:bg-white"
      />
      <button type="submit" className="min-h-12 border border-ink bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:bg-violet hover:text-ink">
        Zapisz mnie →
      </button>
    </form>
  );
}
