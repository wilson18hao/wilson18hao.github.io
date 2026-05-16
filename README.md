# Wilson Deng Portfolio

Personal portfolio site built with React, TypeScript, Vite, and GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is written to `docs/` (static HTML, JS, CSS).

## GitHub Pages (recommended: GitHub Actions)

Use **GitHub Actions** as the Pages source so the live site always serves the built `docs/` output (avoids accidentally publishing repo **root**, which contains the Vite dev `index.html` that points at `/src/main.tsx` and causes a **white screen**).

1. Repo **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch”)
3. Push to `main`; the workflow **Deploy GitHub Pages** builds and publishes the `docs/` artifact

Live site: `https://wilson18hao.github.io/`

## Alternative: publish from the `/docs` folder on `main`

If you use **Deploy from a branch** instead of Actions:

- Branch: `main`
- Folder: **`/docs`** (must be `/docs`, **not** `/ (root)`)

If you pick **`/(root)`**, GitHub serves the development `index.html` at the repository root, which loads `/src/main.tsx`. That file is not part of the production build, so the app fails and you see a **white screen**.

## Push with a specific SSH key (optional)

```bash
npm run push:github
```

Uses `~/.ssh/id_ed25519` via `GIT_SSH_COMMAND`.
