# Wilson Deng · 邓伟臣 | AI + Financial Product Manager

A high-fidelity personal portfolio website showcasing expertise in AI-driven financial products, knowledge graphs, and NLP solutions. Built with a focus on Material You design principles and fluid animations.

[Live Demo](https://wilson18hao.github.io/)

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: CSS Variables (Material You Design System)
- **Animations**: `motion/react` (Framer Motion) + Custom Rotating Text
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🛠️ Project Structure

- `src/data/site.ts`: Centralized content management.
- `src/components/ui/`: Reusable Material Design 3 components.
- `src/styles/tokens.css`: Design tokens for colors, spacing, and typography.
- `docs/`: Production build output for GitHub Pages.

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

This project is configured to deploy automatically via **GitHub Actions**.

### Recommended Setup (GitHub Actions)
1. Go to your repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Every push to the `main` branch will trigger the `.github/workflows/deploy-pages.yml` workflow, which builds the project and deploys the `docs/` folder.

### Manual Alternative (Deploy from branch)
If you prefer manual deployment:
1. Set **Source** to **Deploy from a branch**.
2. Select branch `main` and folder **`/docs`**.
   *Note: Do NOT select `/(root)`, as it will cause a white screen in production.*

## 📮 Contact

- **Email**: 90@example.com (Placeholder)
- **Phone**: 130-0000-0000 (Placeholder)
- **Location**: Beijing, China

---
Built with purpose by Wilson Deng.
