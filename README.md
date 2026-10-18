# Dar Al Antique, concept website

A concept site prepared by Nuvai Solutions for Dar Al Antique (دار الانتيك للتحف والهدايا), Souq Ain Hulaitan, Al Khor.

Plain static HTML, CSS and JS. No build step. Deploy the repo root as-is on Vercel or GitHub Pages.

Arabic is the default language. English lives under `/en/` with the same pages.

- `index.html`, `en/index.html`: home
- `shop.html`, `en/shop.html`: catalog with shelf, condition and search filters (kept in the URL)
- `item.html?code=DA-0142`, `en/item.html?code=DA-0142`: item page, rendered from `assets/data.js`

The language switch keeps you on the same page, item and filters.

Illustrations in `assets/art.js` are placeholders for real product photos. The site is marked noindex while it is a concept.
