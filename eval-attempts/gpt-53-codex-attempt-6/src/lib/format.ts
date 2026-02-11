const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export const formatDatePl = (isoString: string): string => {
  const parsedDate = new Date(isoString);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Brak daty';
  }

  return dateFormatter.format(parsedDate);
};
