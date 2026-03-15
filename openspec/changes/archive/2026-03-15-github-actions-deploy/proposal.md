## Why

Deployments are currently manual (`npm run build:deploy` using the `gh-pages` npm package). Automating this via GitHub Actions ensures the site is always up to date when code is pushed to main, eliminates the need to run deploy commands locally, and provides a clear build/deploy audit trail.

## What Changes

- Add a GitHub Actions workflow that triggers on push to the `master` branch
- The workflow installs dependencies, runs the production build, and deploys the `dist/` output to the `gh-pages` branch
- The existing manual `npm run deploy` and `build:deploy` scripts remain available as a fallback

## Capabilities

### New Capabilities
- `ci-deploy`: GitHub Actions workflow for automated build and deploy to gh-pages on push to master

### Modified Capabilities

## Impact

- **New file**: `.github/workflows/deploy.yml` — the CI/CD workflow definition
- **GitHub repo settings**: May need to ensure GitHub Pages is configured to serve from the `gh-pages` branch (likely already set up since `gh-pages` npm package was in use)
- **No code changes**: The build command and output remain the same
