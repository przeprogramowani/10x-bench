export const BENCHMARK_START_DATE = new Date('2026-09-08T07:41:47Z');
export const DAYS_90_MS = 90 * 24 * 60 * 60 * 1000;
export const CUTOFF_90_DAYS = new Date(BENCHMARK_START_DATE.getTime() - DAYS_90_MS);

export function formatPolishDate(dateInput: string | Date | undefined): string {
  if (!dateInput) return 'Data nieznana';
  const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return 'Data nieznana';

  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(d);
}

export function isWithin90Days(dateInput: string | Date | undefined): boolean {
  if (!dateInput) return false;
  const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return false;
  return d >= CUTOFF_90_DAYS && d <= BENCHMARK_START_DATE;
}
