## Why

The portfolio site has three quality gaps: dark mode is wired up but non-functional (dark theme is a copy of light theme with hardcoded colors throughout), the build tooling uses Vite 3 with stale/unused dependencies, and the site is English-only despite being authored by a developer based in Taiwan.

## What Changes

- **Complete dark mode**: Define actual dark theme colors in `theme.js`, replace all hardcoded colors (mint backgrounds in Intro, red accent `#c7372f` across components) with theme variables
- **Migrate build system to Rsbuild**: Replace Vite with Rsbuild, remove unused dependencies (`axios`, `@types/react`, `@types/react-dom`), preserve GitHub Pages build flow (`404.html`, `CNAME` copy)
- **Traditional Chinese for Intro**: Add i18n toggle (中/英) to the Intro page only, translate intro text content to Traditional Chinese while keeping proper names in English

## Capabilities

### New Capabilities
- `dark-mode-complete`: Full dark theme color definitions and removal of all hardcoded colors across components
- `rsbuild-migration`: Replace Vite with Rsbuild as the build tool, clean up unused dependencies
- `intro-i18n`: Traditional Chinese translation for the Intro page with a language toggle button

### Modified Capabilities

## Impact

- **src/theme.js**: New dark theme color values, add accent/highlight theme properties
- **src/components/Intro.jsx**: Theme-aware backgrounds, i18n text content, language toggle UI
- **src/Portfolio.jsx**: Hardcoded `#c7372f` accent colors → theme variables
- **src/components/Reaction.jsx**: Hardcoded hover border → theme variable
- **vite.config.js → rsbuild.config.js**: Build tool swap
- **package.json**: Remove `vite`, `@vitejs/plugin-react`, `axios`, `@types/react`, `@types/react-dom`; add `@rsbuild/core`, `@rsbuild/plugin-react`
- **Build scripts**: Update `dev`, `build`, `preview` commands for Rsbuild
