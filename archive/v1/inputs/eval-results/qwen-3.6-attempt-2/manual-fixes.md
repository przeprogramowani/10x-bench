# Ręczne poprawki po procesie budowania (Manual Fixes)

Projekt: **qwen-3.6-claude-code-attempt-2**
Data: 2026-05-05

Poniżej znajduje się lista zmian wprowadzonych ręcznie w celu poprawnego przeprowadzenia ewaluacji wizualnej:

1. **Import stylów CSS w Layout**:
   - **Plik**: `src/layouts/BaseLayout.astro`
   - **Zmiana**: Dodano brakujący import `import '../styles/global.css';` w sekcji Frontmatter.
   - **Powód**: Bez tej zmiany style Tailwind CSS nie były wczytywane na żadnej z podstron (mimo poprawnego builda), co uniemożliwiało rzetelną ocenę spójności UI i responsywności.
