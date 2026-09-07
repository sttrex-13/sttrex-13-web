# Saint Profile

Minimal editorial portfolio built with React, TypeScript, Vite, React Router, SCSS modules, and GSAP.

The layout follows the supplied portfolio mockups: a persistent top header, a large three-column editorial grid, a fixed-feeling email footer, list pages for experience/projects/activities, and reusable detail pages.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Main routes

- `/` — home / links
- `/info` — profile image + biography
- `/experience` — work experience list
- `/experience/:slug` — experience detail
- `/activities` — activities & volunteer list
- `/activities/:slug` — activity detail
- `/projects` — project list

## Animation approach

Animations are intentionally subtle to fit the editorial UI:
- route/page fade + small vertical movement
- list-row stagger
- image reveal
- GSAP height/opacity animation for “Read More”

## Content

Most content lives in `src/data/`, so changing copy does not require editing the page components.
