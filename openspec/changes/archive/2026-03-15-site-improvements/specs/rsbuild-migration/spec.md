## ADDED Requirements

### Requirement: Build tool is Rsbuild
The project SHALL use `@rsbuild/core` and `@rsbuild/plugin-react` as the build tool, replacing Vite and `@vitejs/plugin-react`.

#### Scenario: Dev server starts successfully
- **WHEN** user runs `npm run dev`
- **THEN** Rsbuild dev server SHALL start and serve the React SPA with hot module replacement

#### Scenario: Production build succeeds
- **WHEN** user runs `npm run build`
- **THEN** Rsbuild SHALL produce a production build in `dist/` and copy `404.html` and `CNAME` into `dist/`

#### Scenario: Preview works
- **WHEN** user runs `npm run preview`
- **THEN** the production build SHALL be served locally for preview

### Requirement: Unused dependencies removed
The following unused packages SHALL be removed from `package.json`:
- `axios` (imported but never called)
- `@types/react` (no TypeScript)
- `@types/react-dom` (no TypeScript)

#### Scenario: Clean dependency tree
- **WHEN** unused dependencies are removed
- **THEN** the application SHALL build and run without errors

### Requirement: Vite artifacts removed
`vite.config.js` SHALL be deleted. Vite-specific packages (`vite`, `@vitejs/plugin-react`) SHALL be removed from devDependencies. A new `rsbuild.config.mjs` SHALL be created.

#### Scenario: No Vite references remain
- **WHEN** migration is complete
- **THEN** no references to Vite SHALL exist in `package.json` scripts or config files

### Requirement: Deploy workflow preserved
The `deploy` and `build:deploy` scripts SHALL continue to work with `gh-pages -d dist`.

#### Scenario: GitHub Pages deploy succeeds
- **WHEN** user runs `npm run build:deploy`
- **THEN** the site SHALL build with Rsbuild and deploy to GitHub Pages with SPA routing intact
