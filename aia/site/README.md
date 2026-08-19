# Aia Illustrated Guide — Website

Local website implementation of **Aia, Conductor und Captain — Vom Wunsch zur
verifizierbaren Plattform**. The page is aimed at CIOs and SREs and combines
the character story with the technical responsibility model for Aia,
Crossplane and Cluster API.

## Run locally

Requires Node.js `>=22.13.0`.

```bash
pnpm install
pnpm dev
```

The development server is available at <http://localhost:3000/>. The German
guide is served at `/`; the complete English version is available at `/en`.

## Verify

```bash
pnpm build
node --test tests/rendered-html.test.mjs
```

## Static standalone version

`standalone/index.html` is the framework-free German build. The complete
English version lives at `standalone/en/index.html`. Both share the local
stylesheet, presentation controls and image assets and can be opened directly
in a browser without Node.js, Vinext or a server-side runtime.

The guide uses an Oki-style chapter presentation: navigate with the visible
arrow buttons, the slide overview, `←`/`→`, `Page Up`/`Page Down`, Space,
`Home`/`End`, or a horizontal swipe on touch devices. JavaScript-disabled
browsers fall back to the continuous one-page layout.

```bash
python3 -m http.server 4173 --directory standalone
```

## Content map

- `app/page.tsx` — complete German long-form guide
- `app/en/page.tsx` — complete English guide and English social metadata
- `app/globals.css` — responsive visual system and layouts
- `app/layout.tsx` — metadata and host-aware social preview
- `public/images/` — web-ready character, scene and reference assets
- `public/og.png` — social preview image
- `tests/rendered-html.test.mjs` — rendered-content and metadata checks
- `standalone/` — directly deployable static HTML, CSS and image bundle

The editorial source, full-resolution concepts, prompts and provenance remain
one level above this application under `aia/story/`, `aia/art/` and
`aia/characters/`.

## Publication

The intended hostname is <https://aia.openkubes.org/>. Publication is not yet
configured. It should use an independent deployment rooted at `aia/site` so
the existing `oki.openkubes.org` GitHub Pages artifact remains unchanged.
