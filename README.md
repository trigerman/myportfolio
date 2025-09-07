# dj-portfolio (React + Vite + Tailwind) — GitHub Pages

This is a complete, browser-uploadable React portfolio with a GitHub Actions workflow.
You do **not** need npm locally—GitHub builds and deploys for you.

## Deploy (no CLI)
1. Create a new repo on GitHub (e.g., `dj-portfolio`).
2. Upload everything from this folder (including `.github/workflows/deploy.yml`).
3. Go to **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. Edit `vite.config.ts` and ensure `base` matches your repo name (e.g., `/dj-portfolio/`).
5. Commit a change to trigger deployment. Your site will appear at `https://<user>.github.io/<repo>/`.
