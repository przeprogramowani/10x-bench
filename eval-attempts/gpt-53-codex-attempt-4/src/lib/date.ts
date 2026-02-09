export function formatPolishDate(input: string): string {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    return "Brak daty";
  }

  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
