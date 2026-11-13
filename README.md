# pediaos.com

Website of **PediaOS** — pediatric health-care technology.
Static HTML, no build step. Served by GitHub Pages from `main` (root) at https://pediaos.com.

- `index.html` — company home (products, approach, for hospitals, about, contact)
- `founder.html` — brief founder profile (Dr Vignesh N)
- `privacy.html`, `terms.html` — website/company privacy policy and terms of use
- `styles.css` — shared styles (light/dark tokens). Coloured *text* uses `--accent-text` / `--teal-text`
  (AA contrast in light mode); `--accent` / `--teal` are for fills, rules and icons only.
- `site.js` — phone menu toggle; `counter.js` — visit counter
- `404.html`, `icon.svg`, `img/`, `CNAME` (`pediaos.com`)

Products live on subdomains: Code Blue Companion (cbc.pediaos.com, repo `drvigneshn/cbc`),
Pediatric ER Companion (er.pediaos.com, `drvigneshn/er`), PALS Companion (pals.pediaos.com, `drvigneshn/pals`);
the Auscultation Simulator (clinical.pediaos.com) is in development.

The company site deliberately uses its own look (Sora + IBM Plex Sans, cool palette) so it reads as
the company rather than another app.

Keep the organisation name, address and contact details here identical to the Udyam / D-U-N-S /
Google Payments records (see the comment above the "Organisation" block in `index.html`).
