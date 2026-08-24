import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (email.trim()) setSent(true);
  }

  if (sent) {
    return <p className="border border-white/30 px-4 py-4 text-sm text-white">Dzięki! Sprawdź swoją skrzynkę, żeby potwierdzić zapis.</p>;
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Twój adres e-mail</label>
      <input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="twój@email.pl" />
      <button type="submit">Zapisuję się <span aria-hidden="true">↗</span></button>
    </form>
  );
}
