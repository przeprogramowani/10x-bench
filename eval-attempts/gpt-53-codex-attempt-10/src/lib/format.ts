export function formatPolishDate(value: string) {
  return new Intl.DateTimeFormat('pl-PL', {
    dateStyle: 'long',
  }).format(new Date(value));
}

export function trimDescription(value: string, length = 180) {
  if (value.length <= length) {
    return value;
  }

  return `${value.slice(0, length).trimEnd()}...`;
}
