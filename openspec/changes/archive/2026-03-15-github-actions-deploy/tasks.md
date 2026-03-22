## 1. Create GitHub Actions Workflow

- [x] 1.1 Create `.github/workflows/deploy.yml` with trigger on push to `master`, Node 20 setup, `npm ci`, `npm run build`, and `peaceiris/actions-gh-pages@v4` deploy step publishing `dist/`
- [x] 1.2 Add concurrency group (`deploy`) with `cancel-in-progress: true` to handle rapid successive pushes
- [x] 1.3 Configure `GITHUB_TOKEN` permissions (contents: write) for the deploy action

## 2. Verify

- [x] 2.1 Push to master and confirm the workflow runs successfully in the GitHub Actions tab
- [x] 2.2 Verify `gh-pages` branch is updated with build output including `404.html` and `CNAME`
- [x] 2.3 Confirm the deployed site loads correctly at calvinjeng.io
