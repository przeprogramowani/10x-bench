export function formatDatePl(dateString?: string): string {
  if (!dateString || dateString === 'nieznana') {
    return 'Data nieznana';
  }
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) {
      return 'Data nieznana';
    }
    return new Intl.DateTimeFormat('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d);
  } catch {
    return 'Data nieznana';
  }
}
