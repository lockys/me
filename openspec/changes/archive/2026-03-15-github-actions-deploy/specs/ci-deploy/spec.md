## ADDED Requirements

### Requirement: Workflow triggers on push to master
The GitHub Actions workflow SHALL trigger on every push to the `master` branch.

#### Scenario: Push to master triggers deploy
- **WHEN** code is pushed to the `master` branch
- **THEN** the deploy workflow SHALL run automatically

#### Scenario: Push to other branches does not trigger
- **WHEN** code is pushed to a non-master branch
- **THEN** the deploy workflow SHALL NOT run

### Requirement: Workflow builds production output
The workflow SHALL install dependencies with `npm ci` and run the existing `npm run build` command to produce the `dist/` directory including `404.html` and `CNAME`.

#### Scenario: Successful production build
- **WHEN** the workflow runs the build step
- **THEN** the `dist/` directory SHALL contain the production build output, `404.html`, and `CNAME`

### Requirement: Workflow deploys to gh-pages branch
On successful build, the workflow SHALL push the contents of `dist/` to the `gh-pages` branch using `peaceiris/actions-gh-pages@v4`.

#### Scenario: Successful deployment
- **WHEN** the build step succeeds
- **THEN** the `gh-pages` branch SHALL be updated with the contents of `dist/`

#### Scenario: Build failure prevents deployment
- **WHEN** the build step fails
- **THEN** the deploy step SHALL NOT execute and the `gh-pages` branch SHALL remain unchanged

### Requirement: Concurrent deploys are handled
The workflow SHALL use a concurrency group to ensure only the latest push to master results in a deployment, cancelling any in-progress runs.

#### Scenario: Rapid successive pushes
- **WHEN** multiple pushes to master happen in quick succession
- **THEN** only the most recent push SHALL complete deployment, previous in-progress runs SHALL be cancelled

### Requirement: No additional secrets required
The workflow SHALL authenticate using the built-in `GITHUB_TOKEN`. No personal access tokens or deploy keys SHALL be required.

#### Scenario: Authentication with default token
- **WHEN** the workflow runs
- **THEN** it SHALL use `github.token` for pushing to the `gh-pages` branch without additional secret configuration
