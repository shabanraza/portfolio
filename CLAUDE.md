# CLAUDE.md

Guidance for AI assistants working in this repository. Read this before making changes so edits stay consistent with existing patterns.

## Project overview

Personal portfolio SPA for **Mohammad Shaban**, positioned for Product Engineer and Full-Stack Engineer roles. It showcases independent products, selected engineering work, experience, skills, and contact links. Deployed to **Cloudflare Pages**.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check (`tsc -b`) then build — **type errors fail the build** |
| `npm run lint` | ESLint across the repo |
| `npm run preview` | Preview the built `dist/` locally |

No test runner is configured.

## Tech stack

- **React 19.2** + **TypeScript ~5.9**, **Vite 7.2**
- **Tailwind CSS v4** via `@tailwindcss/vite` — uses `@import "tailwindcss"` in `src/index.css`. There is **no `tailwind.config.js`**; theme tokens live in `@theme { ... }` and the design variables on `:root`.
- **lucide-react** for UI icons
- **clsx** + **tailwind-merge** — exposed via a local `cn()` helper that is *redefined inside each UI component* (keep this pattern, don't centralize it)
- **Native anchor links** — navigation uses section IDs and `href="#section"`; no client-side router is used
- **react-router-dom** — installed but **unused**; do not introduce routes without an explicit ask

## Directory layout

```
src/
  main.tsx              React 19 createRoot; renders App
  App.tsx               Composition root: Navbar + Hero + portfolio sections + Footer
                        Below-the-fold sections are React.lazy'd
  index.css             Tailwind import + light editorial design tokens and shared layout styles
  components/
    ui/                 Small shared primitives
    StickyCTA.tsx       Optional CTA primitive
  sections/             Hero, StatsBar, Products, CaseStudies, Experience, Stack, Contact
  layout/               Navbar, Footer
  assets/               Local logos (.svg, .webp, .avif) imported as ES modules
public/                 Static files served at root, including the portfolio portrait
index.html              Loads Google Fonts (Inter, Fraunces); mounts #root
```

## Routing & navigation

Single page. Navigation uses native `<a href="#section-id">` links targeting section IDs. To add a section:

1. Create a section in `src/sections/` with a stable `id`.
2. Lazy-import and render it in `App.tsx` if it is below the fold.
3. Add a matching `href` to the links in `src/layout/Navbar.tsx` if it belongs in navigation.

## Styling conventions

- Use the CSS variables in `src/index.css` and their Tailwind tokens (`text-ink`, `bg-page`, `border-line`, etc.).
- The visual system uses a light paper background, Inter for body text, and Fraunces for display headings.
- Shared layout and reusable patterns (`.site-container`, `.section-pad`, `.eyebrow`, `.project-card`) are defined in `src/index.css`.
- Add new theme colors to the root variables and expose them under `@theme` when Tailwind classes need them.

## Component conventions

- **Named exports only** (`export const Foo = () => { ... }`). The only default export is `App` in `src/App.tsx`.
- **PascalCase filenames** matching the exported component name.
- **Function components + hooks.** No class components.
- **Props interfaces inline**, above the component. Extend motion/HTML types where relevant:
  ```ts
  interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
  }
  ```
- Reusable UI primitives may accept `className?: string` and spread remaining props to their root element.
- **Variant/size lookup pattern** for UI primitives:
  ```ts
  const variants = { primary: '...', secondary: '...' };
  const sizes = { sm: '...', md: '...', lg: '...' };
  className={cn(variants[variant], sizes[size], className)}
  ```
- **`cn()` helper is redefined locally** inside each UI component (it's `twMerge(clsx(inputs))`) — keep this pattern when adding new UI primitives rather than centralizing in a shared util.
- **No barrel `index.ts` files.** Import directly from the component file.

## Data

Portfolio content (products, engineering work, experience, and skill groups) is **hardcoded as typed arrays inside the section component that renders it**. There is no `data/` directory — maintain this colocated pattern when adding new content.

## State management

Use local React state for interactive UI such as the mobile navigation. There is no global state provider; do not add a state library without an explicit ask.

## Animations

Keep motion restrained and purposeful; respect `prefers-reduced-motion`. CSS transitions are sufficient for the current design.

## Icons & assets

- UI icons: `import { ArrowRight, Mail, Menu, X } from 'lucide-react'`.
- Profile / static images: reference from `/public` by root-relative path, e.g. `<img src="/me.png" />`.

## Environment variables

Vite convention: all env vars **must be prefixed `VITE_`** to be exposed to the client. Access via `import.meta.env.VITE_*`.

Required (see `env.example`):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Optional:

- `VITE_EMAILJS_TEMPLATE_LEAD_MAGNET` — falls back to `VITE_EMAILJS_TEMPLATE_ID` if absent.

`.env` is gitignored. Never commit it.

## TypeScript

- `strict: true` and **`noUnusedLocals: true`** — unused imports and variables break the build. Clean them up before committing.
- `target: ES2022`, `module: ESNext`, `jsx: "react-jsx"` (no need to `import React` in component files).

## Deployment

Target: **Cloudflare Pages** (standard static deployment). Recent commits deliberately removed `wrangler.json` and `worker.ts` — **do not reintroduce worker configs** unless the user explicitly asks.

## Do / Don't quick reference

**Do**
- Keep product and section content colocated with the component that renders it.
- Use the CSS-variable design tokens and existing layout utilities.
- Lazy-load below-the-fold sections in `App.tsx`.
- Keep GitHub highlights curated and static; do not add runtime API dependencies for portfolio content.
- Run `npm run build` before committing — `noUnusedLocals` will catch dangling imports.

**Don't**
- Reintroduce terminal-themed chrome or fabricated activity/metrics.
- Add default exports for new components (except `App`).
- Create a `types/` or `data/` directory — it breaks the established colocated pattern.
- Add new state-management libraries.
- Reintroduce Cloudflare Worker config (`wrangler.json`, `worker.ts`).
- Introduce new animation libraries without an explicit need.
