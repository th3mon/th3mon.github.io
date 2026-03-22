# th3mon.github.io

Personal website and engineering blog built with Astro, React, and TypeScript.

The site powers [szelenberger.pl](https://szelenberger.pl) and combines a content-driven blog with a few custom interactive pieces, including a small arcade page hidden inside the project.

## Stack

- Astro 5
- React 19
- TypeScript
- Astro Content Collections
- `@astrojs/sitemap`

## Features

- Homepage with recent writing and archive highlights
- Blog posts generated from Markdown content
- Markdown-based static pages such as `About` and `Stack`
- Client-side React components where interactivity is needed
- Sitemap generation for the production site
- Small canvas-based `Arcanoid` page

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start local development

```bash
npm run dev
```

The Astro dev server will start locally and watch content and component changes.

## Available Scripts

- `npm run dev` - start the Astro development server
- `npm run start` - alias for `npm run dev`
- `npm run build` - create a production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run check` - run Astro and TypeScript checks

## Project Structure

```text
.
|-- public/           Static assets
|-- src/
|   |-- components/   React UI and interactive components
|   |-- content/      Blog posts and draft content
|   |-- layouts/      Astro layouts
|   |-- pages/        Route entry points and Markdown pages
|   `-- styles/       Global and page-specific styles
|-- docs/             Project notes
|-- astro.config.mjs  Astro configuration
|-- package.json      Scripts and dependencies
`-- techstack.*       Personal stack reference files
```

## Content Model

Content collections are defined in `src/content.config.ts`.

- `blog` contains published posts with `title`, `date`, `permalink`, and optional `categories`
- `drafts` contains work-in-progress entries with `title`, `date`, and optional `categories`

Published blog entries live in `src/content/blog/` and are rendered into archive and post pages.

## Deployment

This project is configured with the production site URL `https://szelenberger.pl` in `astro.config.mjs`.

To create a deployable build:

```bash
npm run build
```

The generated output is written to `dist/`.
