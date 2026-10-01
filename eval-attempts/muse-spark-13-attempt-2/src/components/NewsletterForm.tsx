import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("ok");
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-center" role="status">
        <p className="text-lg font-bold text-emerald-300">🎉 Dzięki za zapis!</p>
        <p className="mt-1 text-sm text-slate-300">
          Dokończ zapis przez{" "}
          <a href="https://przeprogramowani.substack.com" target="_blank" rel="noreferrer" className="underline">
            przeprogramowani.substack.com
          </a>{" "}
          — widzimy się w piątek.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Adres e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setStatus("idle");
        }}
        placeholder="twoj@email.pl"
        className="h-12 flex-1 rounded-2xl border border-white/15 bg-slate-950/60 px-4 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
      />
      <button
        type="submit"
        className="h-12 rounded-2xl bg-emerald-400 px-6 font-bold text-slate-950 transition hover:bg-emerald-300"
      >
        Zapisz się za darmo
      </button>
      {status === "error" && (
        <p className="text-sm text-rose-300 sm:basis-full" role="alert">
          Podaj poprawny adres e-mail.
        </p>
      )}
    </form>
  );
}
