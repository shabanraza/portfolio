# Mohammad Shaban — Portfolio

A single-page portfolio focused on product engineering, full-stack delivery, and independently built products. It highlights live products, selected public GitHub work, enterprise engineering experience, and direct contact links.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS v4
- Lucide icons

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

There is no test runner configured.

## Content

Portfolio copy and project highlights are kept with the sections that render them. Product previews in `public/product-previews/` are local copies of each product's Open Graph image. GitHub highlights are curated static content based on public repositories and commit history; the site does not make runtime GitHub API requests. Career titles and dates follow the supplied resume. LinkedIn is linked as a profile only.

## Deployment

The site is a static Vite build for Cloudflare Pages. Run `npm run build` and deploy the generated `dist/` directory.
