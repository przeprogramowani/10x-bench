const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});

export function formatDate(dateLike: string): string {
  const value = new Date(dateLike);
  if (Number.isNaN(value.getTime())) {
    return '-';
  }

  return dateFormatter.format(value);
}
