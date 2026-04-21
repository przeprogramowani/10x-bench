# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-file HTML slide deck for a Polish-language conference talk titled "Kiedy AI buduje Twoją stronę" (When AI builds your website). The talk walks through the creation of the 10xBench.ai benchmark — testing whether LLMs can vibe-code a complete website in one shot.

## Development

No build system, no dependencies. Open `index.html` directly in a browser:

```bash
open index.html
```

Navigate to a specific slide via URL hash (e.g., `index.html#15`).

## Architecture

- **`index.html`** — The entire presentation: markup and navigation JS in one file
- **`styles.css`** - Styles of the slide deck
- **`scenario.md`** — Talk outline/speaker notes (raw notes, not rendered anywhere)
- **`./assets`** - static assets, images for slides

### Slide Structure

Slides are `<div class="slide">` elements inside `<div class="deck">`. The first slide has class `active`; JS manages transitions. Each slide has a `data-act` attribute grouping it into a narrative act (`1`–`6` plus `closing`).

### Slide Layout Classes

Combine `slide` with a layout modifier:

| Class | Purpose |
|---|---|
| `slide--statement` | Single big headline |
| `slide--section` | Act/section break with label |
| `slide--split` | Two-column layout (`split-left` / `split-right`) |
| `slide--quote` | Blockquote with attribution |
| `slide--number` | Large number callout (`big-number` + caption) |
| `slide--insight` | Numbered insight card (header number + tag + text) |
| `slide--list` | Left-aligned bullet or checklist |

### Styling Rules

All new or updated styles **must** go in `styles.css`. Never add inline `<style>` blocks or inline `style` attributes in `index.html`.

### Design Tokens

All colors and fonts are in CSS `:root` custom properties. Key color utility classes: `.accent`, `.accent2`, `.warm`, `.positive`, `.negative`, `.dim`, `.bright`, `.gradient-text`, `.gradient-warm`.

### Navigation (JS at bottom of file)

- Arrow keys, Space/Enter, click on left/right third of screen, touch swipe
- `F` toggles fullscreen
- `Home`/`End` jump to first/last slide
- Hash-based URL tracking (`#slideNumber`)
- Cursor auto-hides after 2 seconds of inactivity

## Content Language

All slide content and speaker notes are in **Polish**. Continue in Polish when adding or editing slide content.

## Placeholders

Several slides contain `<div class="placeholder">` elements marking spots for screenshots, charts, and visuals to be inserted later. These are styled dashed-border boxes with icon + description text.

## Known TODOs

- Slide 1: Conference name (`[nazwa konferencji]`)
- Slide 42: Social links (`<!-- TODO: social -->`)
- Act VI (slides 39–40): "Dlaczego benchmarki z internetu nie wystarczą" — section stub with `[ TODO ]` placeholder
