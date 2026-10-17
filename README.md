# Tawhid Chowdhury — Portfolio

A lightweight academic portfolio built with HTML, CSS, and a small amount of JavaScript. It has no package installation or build step.

**Live site:** [tawhidchowdhury.github.io](https://tawhidchowdhury.github.io/)

## Preview locally

Open `index.html` in a browser, or serve the repository directory with a local web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Keep `index.html` at the repository root.
2. In **Settings → Pages**, publish from the `main` branch and `/(root)`.
3. Commit changes to `main`; GitHub Pages deploys the site automatically.

## Update the site

- Edit the bio, research, projects, education, and links in `index.html`.
- The academic CV is stored under `assets/docs/`; keep its filename in sync with the CV link in `index.html`.
- Edit colors, spacing, and responsive rules in `assets/css/style.css`.
- The theme toggle and copyright year are handled by `assets/js/main.js`.

The visual direction takes inspiration from [Badhon’s portfolio](https://badhon495.github.io/); this site has its own HTML, CSS, and JavaScript.