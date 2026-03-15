## Context

The portfolio site has a dark mode toggle wired up (ThemeProvider + localStorage persistence) but the dark theme object is a shallow copy of the light theme — no visual difference. Hardcoded colors exist in Intro.jsx (`#E2FFF2`), Portfolio.jsx (`#c7372f`), and Reaction.jsx. The build uses Vite 3 with unused deps (axios, @types/react, @types/react-dom). The Intro page is English-only.

## Goals / Non-Goals

**Goals:**
- Functional dark mode with distinct dark theme colors and zero hardcoded colors
- Migrate from Vite to Rsbuild with identical dev/build/deploy workflow
- Traditional Chinese translation for the Intro page with a simple toggle

**Non-Goals:**
- Full i18n framework (react-i18next, etc.) — overkill for one page
- Translating /exp, /note, /kudos pages
- Backend changes or new routes
- TypeScript migration
- Upgrading styled-components to v6

## Decisions

### 1. Dark theme color strategy
Define explicit dark values for all existing theme properties plus new ones for accent and highlight colors. Add `accentColor`, `highlightBg` to theme object.

**Why**: Extending the existing theme shape is the minimal change. Components already consume `theme.textColor`, `theme.background`, etc. Adding accent/highlight avoids repeated hardcoded values.

**Alternative**: CSS custom properties — rejected because styled-components ThemeProvider is already wired up and working.

### 2. Rsbuild migration approach
Replace Vite with Rsbuild (`@rsbuild/core` + `@rsbuild/plugin-react`). Translate `vite.config.js` → `rsbuild.config.mjs`. Update `package.json` scripts. Preserve the `cp 404.html dist && cp CNAME dist` post-build step.

**Why**: Rsbuild is Rspack-based (Rust), drop-in for simple React SPAs. The current Vite config is minimal (just plugin-react), making migration straightforward.

**Alternative**: Keep Vite and just upgrade to v5 — user explicitly requested Rsbuild.

### 3. Intro i18n with local state + object map
Store translations as a simple `{ en, zh }` object in Intro.jsx or a co-located `i18n.js` file. Use React state (`lang`) toggled by a 中/英 button. Persist language choice in localStorage.

**Why**: Only one page needs translation. A full i18n library adds unnecessary bundle weight and complexity. A local object map is easy to maintain and extend later.

**Alternative**: react-i18next — rejected as overkill for a single component.

## Risks / Trade-offs

- **[Rsbuild compatibility]** → Rsbuild handles styled-components via SWC plugin. Verify styled-components works with `@rsbuild/plugin-styled-components` or the built-in SWC support. Fallback: use Babel mode.
- **[Dark mode color choices]** → Subjective. Pick reasonable defaults, user can tweak after. Mint green highlights need a dark-appropriate alternative.
- **[Translation accuracy]** → Author is native Traditional Chinese speaker, can review/edit the translations directly.
