# Joule X Quote Builder — GitHub Pages / PWA Deployment

This folder is a GitHub Pages-ready Progressive Web App (PWA).

## Files
- `index.html` — main quote builder
- `manifest.webmanifest` — app install metadata
- `service-worker.js` — offline/app caching
- `.nojekyll` — prevents GitHub Pages from ignoring files/folders
- `site-assets/` — logos, app icons and configuration images

## Deploy on GitHub Pages
1. Create a GitHub repository, for example `joule-x-quote-builder`.
2. Upload all files in this folder to the repository root.
3. In GitHub: Settings → Pages.
4. Source: Deploy from branch.
5. Branch: `main`, folder: `/root`.
6. Save.
7. Open the GitHub Pages URL once deployment completes.

## Install on mobile
### iPhone / iPad
1. Open the GitHub Pages URL in Safari.
2. Tap Share.
3. Tap Add to Home Screen.

### Android
1. Open the GitHub Pages URL in Chrome.
2. Tap the menu.
3. Tap Install app or Add to Home screen.

## Notes
- For private/internal pricing, use a private repo plus controlled GitHub Pages/enterprise hosting or an intranet web server. Public GitHub Pages will expose the app to anyone with the link.
- If files are changed, update `CACHE_NAME` in `service-worker.js` to force all phones to load the new version.
