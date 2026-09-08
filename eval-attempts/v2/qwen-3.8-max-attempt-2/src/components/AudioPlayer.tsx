import { useState } from 'react';

interface Props {
  /** Adres pliku audio (enclosure z feedu RSS) albo null. */
  src: string | null;
  /** Tytuł odcinka — używany jako przystępna nazwa odtwarzacza. */
  title: string;
  /** Niezależny od odtwarzacza link do oryginału u dostawcy. */
  episodeUrl: string;
}

/**
 * Odtwarzacz audio (P03): natywny element <audio> z plikiem z feedu oraz
 * niezależny link do odcinka u dostawcy. Gdy odtwarzanie zawiedzie
 * (np. dostawca blokuje hotlinking), pokazujemy zrozumiały komunikat
 * i link — sam link do materiału zostaje zachowany.
 */
export default function AudioPlayer({ src, title, episodeUrl }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src) {
    return (
      <p className="text-sm text-slate-400">
        Brak pliku audio w feedzie źródła.{' '}
        <a className="font-medium text-brand-300 underline hover:text-brand-200" href={episodeUrl} target="_blank" rel="noopener noreferrer">
          Otwórz odcinek u dostawcy<span className="sr-only"> (otwiera się w nowej karcie)</span>
        </a>
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {!failed ? (
        <audio
          controls
          preload="none"
          src={src}
          aria-label={`Odtwarzacz odcinka: ${title}`}
          className="w-full"
          onError={() => setFailed(true)}
        />
      ) : (
        <p className="rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
          Osadzone odtwarzanie audio jest niedostępne (dostawca mógł zablokować bezpośrednie
          udostępnianie pliku). Skorzystaj z linku poniżej.
        </p>
      )}
      <p className="text-sm">
        <a className="font-medium text-brand-300 underline hover:text-brand-200" href={episodeUrl} target="_blank" rel="noopener noreferrer">
          Otwórz odcinek u dostawcy<span className="sr-only"> (otwiera się w nowej karcie)</span>
        </a>
      </p>
    </div>
  );
}
