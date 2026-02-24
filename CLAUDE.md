# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start dev server (localhost:3000)
bun build        # Production build
bun start        # Start production server
bun lint         # Run ESLint
```

No test framework is configured.

## Architecture

Single-page Next.js 16 app (React 19, TypeScript, Tailwind CSS v4). No routing, no backend, no database — all data is static.

**Data flow:** All dot phrase content lives in `src/data/dotPhrases.ts` as a typed array of `DotPhrase` objects. `page.tsx` is the only route; it holds all state (`activeCategory`, `searchQuery`, `showNIHSS`) and filters phrases client-side via `useMemo`. Components are pure display.

**Adding content:** To add a new dot phrase, append an entry to the `dotPhrases` array in `src/data/dotPhrases.ts`. To add a new category, extend the `categories` const (typed with `as const`) and add the new `CategoryId` to `CategoryId` union automatically.

**Styling convention:** The app mixes Tailwind utility classes with inline `style={{}}` for colors and gradients. The dark theme uses `#111827` card backgrounds, `#0A0F1E` page background, and `#4F6EF7` as the primary blue accent. Do not introduce a separate CSS theme system — keep inline styles for bespoke values and Tailwind for layout/spacing.

**Component responsibilities:**
- `NIHSSCalculator.tsx` — interactive 15-item NIHSS scoring form; generates and copies EHR-ready documentation text
- `PhraseCard.tsx` — displays a single dot phrase with expand/collapse preview and copy-to-clipboard
- `CategoryNav.tsx` — horizontal tab navigation for filtering by category
- `SearchBar.tsx` — controlled input that calls `onSearch` on each keystroke
