# solofai.com

Personal site of Lori Pickering. Static site built with [Astro](https://astro.build), hosted on Firebase Hosting. Ships zero client-side JavaScript; every page is pre-rendered HTML.

## Commands

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Local dev server at http://localhost:4321 (shows drafts) |
| `npm run build`   | Type-check content and code, then build to `dist/`  |
| `npm run preview` | Serve the production build locally                  |
| `firebase deploy` | Publish `dist/` to solofai.com                      |

## Adding content

All content is Markdown or YAML. The build validates every file against the schema in `src/content.config.ts` and fails with a message naming the bad field, so a typo cannot reach the live site.

**A project:** add `src/content/work/<slug>.md`.

```md
---
title: Project name
summary: One or two sentences, under 200 characters.
status: prototype   # concept | prototype | live | research | archived
order: 3            # lower numbers list first
tags: [Python, LLMs]
links:
  - label: Open the demo
    href: https://example.com
featured: true      # also show on the home page
draft: false        # true = visible in `npm run dev` only
---

Longer description in Markdown.
```

**A post:** add `src/content/writing/<slug>.md` with `title`, `summary`, `date`, and optional `tags`, `updated`, `draft`. The Writing link appears in the navigation automatically once one post is published.

**A publication, role, or degree:** add an entry to `src/data/publications.yaml`, `experience.yaml`, or `education.yaml`. Each entry needs a unique `id`. Ordering is computed, so position in the file does not matter.

**Name, email, social links, navigation:** `src/config.ts`.

## Structure

```
src/
  config.ts              Site identity, social links, navigation
  content.config.ts      Typed schemas for every collection
  content/work/          Project pages (Markdown)
  content/writing/       Posts (Markdown)
  data/                  Publications, experience, education (YAML)
  lib/content.ts         Collection queries: draft filtering, sort order
  lib/format.ts          Date, range, and citation formatting helpers
  styles/global.css      Design tokens and base styles (the only global CSS)
  layouts/BaseLayout.astro  HTML shell and SEO/social metadata
  components/            Small single-purpose components, styles scoped to each
  pages/                 Routes; each page fetches via lib/ and composes components
```

## Conventions

- **Styles:** tokens (color, type scale, spacing) live only in `src/styles/global.css`. Components use the tokens inside scoped `<style>` blocks; no component defines its own colors or sizes.
- **Logic:** sorting, filtering, and formatting live in `src/lib/`, never inline in pages, so every listing follows the same rules.
- **Components:** PascalCase file names, one responsibility each. Lists share the `Entry` row so all margins align on one grid.
- **Accessibility:** text colors meet WCAG AA contrast in light and dark modes; motion respects `prefers-reduced-motion`; every page has a skip link and visible focus styles.

## Redirects

Old routes (`/academic`, `/engineering`, `/projects`, `/contact`) permanently redirect to their new equivalents via `firebase.json`, so existing links keep working.
