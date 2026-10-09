const plDate = new Intl.DateTimeFormat('pl-PL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const plDateShort = new Intl.DateTimeFormat('pl-PL', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return plDate.format(d);
}

export function formatDateShort(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return plDateShort.format(d);
}

/** "01:14:11" -> "1:14:11", "00:33:45" -> "33:45" */
export function formatDuration(duration: string): string {
  if (!duration) return '';
  const parts = duration.split(':').map((p) => p.padStart(2, '0'));
  if (parts[0] === '00') parts.shift();
  return parts.join(':');
}

export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}
