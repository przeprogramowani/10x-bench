export const ATTEMPT_START_DATE = new Date('2026-09-08T07:41:47Z');
export const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
export const CUTOFF_DATE = new Date(ATTEMPT_START_DATE.getTime() - NINETY_DAYS_MS);

export function formatPolishDate(dateStr?: string | null): string {
  if (!dateStr) return 'nieznana';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 'nieznana';

  const months = [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'października',
    'listopada',
    'grudnia'
  ];

  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function cleanText(input?: string): string {
  if (!input) return '';
  return input
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/<[^>]+>/g, '')
    .trim();
}
