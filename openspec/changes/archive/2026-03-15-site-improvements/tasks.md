## 1. Complete Dark Mode

- [x] 1.1 Update `src/theme.js`: define distinct dark theme colors (`textColor`, `background`, `border`, `containerBorder`, `wingFilter`) and add new properties (`accentColor`, `highlightBg`) to both light and dark themes
- [x] 1.2 Update `src/Portfolio.jsx`: replace hardcoded `#c7372f` in `SCTimeSpan`, `SCAnimatedDot`, `SCFooterLink` hover with `theme.accentColor`
- [x] 1.3 Update `src/components/Intro.jsx`: replace hardcoded `#E2FFF2` / `#F0FFF7` backgrounds in `ProfileImage` and `IntroContent` with `theme.highlightBg`
- [x] 1.4 Update `src/components/Reaction.jsx`: replace hardcoded `#c7372f` hover border with `theme.accentColor`
- [x] 1.5 Verify dark mode: toggle between light/dark and confirm all components render correctly with no hardcoded colors

## 2. Migrate Build System to Rsbuild

- [x] 2.1 Install `@rsbuild/core` and `@rsbuild/plugin-react`; install `@rsbuild/plugin-styled-components` if needed for styled-components support
- [x] 2.2 Create `rsbuild.config.mjs` with React plugin and equivalent settings
- [x] 2.3 Update `package.json` scripts: `dev`, `build`, `preview` to use Rsbuild CLI; preserve `cp 404.html dist && cp CNAME dist` in build script
- [x] 2.4 Remove Vite packages (`vite`, `@vitejs/plugin-react`) and delete `vite.config.js`
- [x] 2.5 Remove unused dependencies: `axios`, `@types/react`, `@types/react-dom`
- [x] 2.6 Remove unused `axios` import from `src/components/Reaction.jsx`
- [x] 2.7 Verify: `npm run dev` starts Rsbuild dev server, `npm run build` produces working `dist/`

## 3. Traditional Chinese Translation for Intro

- [x] 3.1 Create `src/components/intro-i18n.js` with `{ en, zh }` translation object containing all Intro text blocks in English and Traditional Chinese
- [x] 3.2 Add language state to Intro.jsx with localStorage persistence (`__lang` key), default to `en`
- [x] 3.3 Add 中/英 toggle button UI to the Intro component
- [x] 3.4 Wire up translated text: replace inline English text with references to the i18n object based on current language
- [x] 3.5 Verify: toggle switches text, proper names stay in English, preference persists across page reloads, no toggle visible on other routes
