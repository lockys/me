## Context

The site currently deploys via `npm run build:deploy`, which runs `vite build`, copies `404.html` + `CNAME` to `dist/`, then uses the `gh-pages` npm package to push `dist/` to the `gh-pages` branch. This is manual and requires a local environment with Node.js and npm. The repo is `lockys/me` on GitHub, default branch is `master`.

## Goals / Non-Goals

**Goals:**
- Automate production build + deploy to `gh-pages` on every push to `master`
- Preserve SPA routing support (`404.html`, `CNAME` in output)
- Provide clear success/failure feedback via GitHub Actions status

**Non-Goals:**
- Removing the local `npm run deploy` fallback
- Adding preview/staging environments
- Running lint or tests in the pipeline (no test framework exists)

## Decisions

### 1. Use `peaceiris/actions-gh-pages` for deployment
Use the well-maintained `peaceiris/actions-gh-pages@v4` action to push `dist/` to the `gh-pages` branch. This handles force-pushing to the deploy branch, CNAME preservation, and commit authorship.

**Why**: It's the standard GitHub Pages deploy action with 5k+ stars, handles edge cases (empty commits, CNAME), and requires minimal config. The `gh-pages` npm package does the same thing but needs Node.js setup in the runner.

**Alternative**: `actions/deploy-pages` (GitHub's native Pages action) — requires switching to the newer "GitHub Actions" source in repo settings. `peaceiris/actions-gh-pages` works with the existing `gh-pages` branch source, which is already configured.

### 2. Use `GITHUB_TOKEN` for authentication
The workflow uses the built-in `GITHUB_TOKEN` secret. No personal access token or deploy key needed since we're deploying to the same repo.

**Why**: Simplest setup, no secrets to manage, automatically available in GitHub Actions.

### 3. Node 20 + npm ci
Pin Node.js 20 LTS. Use `npm ci` instead of `npm install` for reproducible builds.

**Why**: `npm ci` is faster and deterministic. Node 20 is the current LTS.

## Risks / Trade-offs

- **[Concurrent pushes]** → GitHub Actions handles queueing; `concurrency` group ensures only the latest push deploys.
- **[Build failure]** → Deploy step only runs if build succeeds. Failed builds are visible in the Actions tab.
- **[CNAME already in build output]** → The existing `npm run build` script copies CNAME. The action also has a `cname` option as backup but we don't need it.
