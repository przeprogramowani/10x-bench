import { useState, type FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Podaj poprawny adres e-mail.');
      return;
    }
    setStatus('loading');
    setMessage('');
    await new Promise((r) => setTimeout(r, 700));
    setStatus('success');
    setMessage('Dzięki! Sprawdź skrzynkę — zaraz powinno dotrzeć potwierdzenie.');
    setEmail('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Adres e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="twoj@email.pl"
        className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-50"
      >
        {status === 'loading' ? 'Zapisuję…' : 'Zapisz się'}
        {status !== 'loading' && (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      {status !== 'idle' && status !== 'loading' && (
        <p
          role="status"
          className={`w-full text-sm sm:order-3 ${status === 'success' ? 'text-brand-200' : 'text-red-300'}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
