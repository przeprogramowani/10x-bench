# 10x-bench-kit — analiza dystrybucji przez plugin Claude Code (ODŁOŻONE)

> Status: materiał badawczy. Decyzja: kit dystrybuujemy przez **10x-cli**
> (`10x bench init`) — patrz sekcja „Dystrybucja kitu" w
> `thoughts/shared/plans/2026-08-12-10x-bench-kit-concept.md`.
> Ta analiza zostaje jako opis potencjalnego drugiego kanału (marketplace pluginów
> Claude Code) i jako źródło wzorca „skille + templates/ kopiowane do projektu",
> który przenosi się na wariant 10x-cli.
>
> Źródło: analiza subagenta (Opus) na bazie dokumentacji Claude Code
> (plugins, plugins-reference, plugin-marketplaces, discover-plugins), 12.08.2026.

## 1. Mechanizm pluginów

**Struktura repo pluginu** — manifest to `.claude-plugin/plugin.json` (opcjonalny; bez
niego komponenty są auto-wykrywane, a nazwa bierze się z katalogu). W `.claude-plugin/`
leży wyłącznie `plugin.json`, pozostałe katalogi w rootcie pluginu:

| Katalog | Rola |
|---|---|
| `skills/<nazwa>/SKILL.md` | skille (namespace `/plugin-name:skill-name`) |
| `commands/*.md` | starszy format — do nowych pluginów używać `skills/` |
| `agents/`, `hooks/hooks.json`, `.mcp.json`, `.lsp.json`, `monitors/`, `themes/`, `output-styles/` | pozostałe komponenty |
| `bin/` | pliki wykonywalne dopisywane do PATH gdy plugin włączony |
| `settings.json` | domyślne ustawienia (tylko `agent` i `subagentStatusLine`) |

**Dodatkowe pliki (`templates/`, `scripts/`) — w pełni wspierane.** Plugin to zwykły
katalog kopiowany do cache; nie kosztują kontekstu, dopóki nikt ich nie czyta.

**Ścieżki w runtime:**

| Zmienna | Rozwija się do |
|---|---|
| `${CLAUDE_PLUGIN_ROOT}` | absolutna ścieżka instalacji pluginu |
| `${CLAUDE_PLUGIN_DATA}` | katalog trwały, przeżywa aktualizacje (`~/.claude/plugins/data/{id}/`) |
| `${CLAUDE_PROJECT_DIR}` | root projektu użytkownika |

Placeholdery rozwijają się w treści skilla wszędzie — `bench-init` może zawierać
dosłownie `cp -R "${CLAUDE_PLUGIN_ROOT}/templates/scripts" "${CLAUDE_PROJECT_DIR}/scripts"`.
`${CLAUDE_PLUGIN_ROOT}` zmienia się przy każdej aktualizacji — nie trzymać tam stanu
(stary katalog żyje ~14 dni jako orphan).

Bonus: plugin z `package.json` + `package-lock.json` dostaje automatyczne
`npm ci --ignore-scripts` w cache przy instalacji (limit 60 s; `yarn.lock`/`pnpm-lock.yaml`
pomijane).

## 2. Instalacja i aktualizacje

Dwa kroki: `/plugin marketplace add <źródło>` + `/plugin install <plugin>@<marketplace>`.
Źródła: `owner/repo` (GitHub), URL gita (można `#tag`), ścieżka lokalna, URL do
`marketplace.json`.

**Wersjonowanie** — wersja jest kluczem cache: `version` z `plugin.json` → `version`
z wpisu marketplace → **SHA commita** → digest archiwum → `unknown`. Strategie:
- bez `version` → update przy każdym commicie (dobre w aktywnym rozwoju),
- jawny semver → update po bumpie (stabilne release'y).

**Aktualizacje** automatyczne, ale opt-in per marketplace: third-party i lokalne mają
auto-update **domyślnie wyłączony** (oficjalne Anthropic — włączony). Włączenie:
`/plugin` → Marketplaces albo `"autoUpdate": true` w `extraKnownMarketplaces`.
Auto-update po starcie sesji (losowe opóźnienie do 10 min) + `/reload-plugins`.
Ręcznie: `/plugin marketplace update <name>`.

## 3. Zasięg instalacji

Scope: **user** (wszystkie projekty), **project** (współpracownicy repo, zapis w
`.claude/settings.json`), **local** (tylko ja, to repo), **managed** (wymuszone
administracyjnie, nieusuwalne).

Wymuszenie przez repo:

```json
{
  "extraKnownMarketplaces": {
    "10x-bench": { "source": { "source": "github", "repo": "przeprogramowani/10x-bench-kit" } }
  },
  "enabledPlugins": { "10x-bench-kit@10x-bench": true }
}
```

Haczyk: to **nie jest cicha instalacja** — członek zespołu musi zaufać workspace'owi
i wykonać `claude plugin install`; do CI/kontenerów służy `CLAUDE_CODE_PLUGIN_SEED_DIR`.

## 4. Ograniczenia istotne dla kitu

- **Rozmiar**: brak twardego limitu; realny koszt to kontekst (opisy skilli ładowane
  zawsze; `templates/` bezkosztowe do odczytu). `/plugin` pokazuje „Context cost".
- **Kopiowanie szablonów do projektu**: normalny wzorzec — skill czyta
  `${CLAUDE_PLUGIN_ROOT}/templates/`, pisze do `${CLAUDE_PROJECT_DIR}/`, pod systemem
  uprawnień.
- **Path traversal**: plugin nie sięgnie poza swój katalog (`../shared` nie działa po
  instalacji). Symlinki: wewnątrz pluginu zachowane, w obrębie marketplace
  dereferencjonowane, poza — pomijane.
- **Świeżość ścieżek**: po update mid-session hooki/MCP/LSP używają starej ścieżki do
  `/reload-plugins`; monitory wymagają restartu sesji.
- **Pułapka**: `templates/` nie może wyglądać jak komponent pluginu (skanowany jest
  `skills/` w rootcie). `templates/website/...` bezpieczne; dla szablonów
  `.claude/skills/*` w generowanym projekcie rozważyć sufiks `.tmpl`. Weryfikacja:
  `claude plugin validate` + `/context`.

## 5. Plugin vs template repository

| Kryterium | Plugin (marketplace) | Template repo z `.claude/skills/` |
|---|---|---|
| Łatwość startu | 2 komendy; skille od razu w każdym projekcie; wymaga zaufania do źródła | 1 klik „Use this template"; kit działa dopiero po sklonowaniu i tylko tam |
| Aktualizacje | rozwiązane systemowo (SHA/semver, auto-update) — **decydująca przewaga** | brak; fork w momencie sklonowania |
| Modyfikowalność | gorsza: cache nadpisywany przy update | najlepsza: wszystko w repo zespołu |

## 6. Wariant hybrydowy (rekomendowany w tej analizie)

Jedno repo = marketplace + plugin. Plugin dostarcza skille + `templates/`; `bench-init`
scaffolduje projekt benchmarku kopiując szablony. Utratę modyfikowalności odzyskuje sam
scaffold: to co skopiowane do projektu jest zwykłym, edytowalnym kodem zespołu; logika
kitu aktualizuje się centralnie. Wersjonowanie: na start bez pola `version` (SHA),
po stabilizacji semver + CHANGELOG. Wzorzec pierwszej klasy (por. `claude plugin init`,
plugin `plugin-dev` z oficjalnego marketplace).

### Struktura katalogów

```
10x-bench-kit/                              # repo = marketplace + plugin
├── .claude-plugin/
│   └── marketplace.json                    # metadata.pluginRoot: "./plugins"
├── plugins/
│   └── 10x-bench-kit/                      # = ${CLAUDE_PLUGIN_ROOT}
│       ├── .claude-plugin/plugin.json      # bez version → wersja = SHA
│       ├── skills/
│       │   ├── bench-init/SKILL.md
│       │   ├── bench-design-tasks/SKILL.md
│       │   ├── bench-scorecard/SKILL.md
│       │   ├── bench-run/SKILL.md
│       │   ├── bench-score/SKILL.md
│       │   └── bench-report/SKILL.md
│       ├── templates/                      # NIE skanowane jako komponenty
│       │   ├── scripts/process-results.ts
│       │   ├── criteria/criteria.example.json
│       │   ├── github/workflows/bench.yml
│       │   └── website/
│       ├── scripts/scaffold.ts
│       ├── bin/bench-scaffold
│       ├── package.json + package-lock.json  # → automatyczne npm ci w cache
│       └── README.md + CHANGELOG.md
└── README.md
```

```json
{
  "name": "10x-bench",
  "owner": { "name": "Przeprogramowani" },
  "metadata": { "pluginRoot": "./plugins" },
  "plugins": [
    { "name": "10x-bench-kit", "source": "10x-bench-kit",
      "description": "Zbuduj własny wewnętrzny benchmark modeli AI", "category": "evaluation" }
  ]
}
```

### Uwagi wdrożeniowe

- W `bench-init` jawnie `${CLAUDE_PLUGIN_ROOT}` (źródło) i `${CLAUDE_PROJECT_DIR}` (cel);
  nie polegać na cwd.
- Stan/cache → `${CLAUDE_PLUGIN_DATA}`, nigdy `${CLAUDE_PLUGIN_ROOT}`.
- Pętla dev: `claude --plugin-dir ./plugins/10x-bench-kit` + `/reload-plugins`;
  przed publikacją `claude plugin validate` (`--strict`).
- Możliwa publikacja w `anthropics/claude-plugins-community` (formularz w Console;
  wpisy pinowane do SHA, CI podbija pin).
- Kanał zapasowy: `git clone` + `--plugin-dir` (bez marketplace, do ewaluacji).

Dokumentacja: https://code.claude.com/docs/en/plugins,
https://code.claude.com/docs/en/plugins-reference,
https://code.claude.com/docs/en/plugin-marketplaces,
https://code.claude.com/docs/en/discover-plugins
