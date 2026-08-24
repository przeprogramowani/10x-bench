import { useState } from "react";

type NewsletterFormProps = {
  dark?: boolean;
};

export default function NewsletterForm({ dark = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={dark ? "form-success form-success-dark" : "form-success"} role="status">
        Super, sprawdź swoją skrzynkę.
      </p>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Twój adres e-mail</label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="twój@email.pl"
        required
      />
      <button type="submit">Zapisuję się <span aria-hidden="true">↗</span></button>
    </form>
  );
}
