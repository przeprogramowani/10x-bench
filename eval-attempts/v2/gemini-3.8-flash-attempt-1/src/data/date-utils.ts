export function formatDatePl(dateStr?: string): string {
  if (!dateStr) return 'nieznana';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 'nieznana';

  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export function filterRecentOrLatest<T extends { publishedAt: string }>(
  items: T[],
  attemptDateIso = '2026-09-08T07:41:47Z',
  daysWindow = 90
): T[] {
  const attemptTime = new Date(attemptDateIso).getTime();
  const windowMs = daysWindow * 24 * 60 * 60 * 1000;
  const cutoffTime = attemptTime - windowMs;

  // Filter items published before or on attempt date
  const validItems = items.filter((item) => {
    if (!item.publishedAt) return false;
    const itemTime = new Date(item.publishedAt).getTime();
    return !isNaN(itemTime) && itemTime <= attemptTime;
  });

  // Sort descending by date
  validItems.sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime();
    const timeB = new Date(b.publishedAt).getTime();
    return timeB - timeA;
  });

  // Find items within 90 days
  const withinWindow = validItems.filter((item) => {
    const itemTime = new Date(item.publishedAt).getTime();
    return itemTime >= cutoffTime;
  });

  // If there are items in 90 days, return them.
  // Otherwise, return latest available items (at least 3-6 items if available).
  if (withinWindow.length > 0) {
    return withinWindow;
  }

  return validItems.slice(0, 6);
}
