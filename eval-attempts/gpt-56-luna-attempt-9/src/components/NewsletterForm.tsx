import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-[52px] items-center gap-3 rounded-full border border-forest/20 bg-paper px-5 text-sm font-semibold text-forest" role="status">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint"><Check size={15} strokeWidth={3} /></span>
        Sprawdź swoją skrzynkę — do zobaczenia w piątek!
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-2.5 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <label className="sr-only" htmlFor="newsletter-email">Twój adres e-mail</label>
      <input id="newsletter-email" type="email" required placeholder="Twój adres e-mail" className="min-h-[52px] min-w-0 flex-1 rounded-full border border-forest/20 bg-paper px-5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-forest" />
      <button className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-paper transition hover:bg-forest" type="submit">Dołączam <ArrowRight size={16} /></button>
    </form>
  );
}
