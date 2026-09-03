# Trident Wallpaper — Optimized Production Build

This build preserves the Website Final design/content/functionality while externalizing embedded images, CSS, and executable JavaScript into cacheable local assets.

- `index.html`: lightweight document shell
- `assets/css/styles.css`: extracted CSS
- `assets/js/main.js`: extracted executable JavaScript
- `assets/images/`: local WebP image assets extracted from the original page
- `robots.txt` and `sitemap.xml`: retained from the original package

Performance safeguards: original image bytes are preserved; existing lazy/eager/fetch-priority attributes are retained; hero preload points to the local hero asset.
