const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

/** Data publikacji po polsku; brak daty ze źródła ⇒ jawne „Data nieznana" (P03). */
export function formatDate(iso: string | null): string {
  if (!iso) return 'Data nieznana';
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return 'Data nieznana';
  return dateFormatter.format(new Date(t));
}

export function formatDateTime(iso: string | null): string {
  if (!iso) return '—';
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return '—';
  return new Intl.DateTimeFormat('pl-PL', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(new Date(t)) + ' UTC';
}
