/**
 * Konfiguracyjne wstrzykiwanie awarii źródeł (eksperyment P04/P08).
 * Wpisanie klucza źródła na listę symuluje jego całkowitą niedostępność
 * podczas buildu — strona musi wtedy użyć pamięci podręcznej (stale)
 * albo pokazać stan „niedostępne" z linkiem do źródła.
 *
 * Klucze: 'youtube' | 'opanuj-ai' | 'przeprogramowani-podcast'
 * Po eksperymencie lista MUSI być pusta w finalnym buildzie.
 */
export const FORCE_FAIL: string[] = [];
