# CLAUDE.md

Guidance for AI assistants working in this repository. Read this before making changes so edits stay consistent with existing patterns.

## Project overview

Personal portfolio SPA for **Mohammad Shaban** — a full-stack / mobile developer who also ships SaaS products. Built as a single-page React app with scroll-anchored sections (no real routing). Deployed to **Cloudflare Pages**.

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
- **Tailwind CSS v4** via `@tailwindcss/vite` — uses `@import "tailwindcss"` in `src/index.css`. There is **no `tailwind.config.js`**; theme tokens live in `@theme { ... }` inside `src/index.css` and are driven by CSS custom properties on `:root` / `:root.light`.
- **Framer Motion 12** for animation (also use it for magnetic/cursor effects — do not add GSAP or other motion libs)
- **lucide-react** for UI icons; **devicons CDN** for tech-stack logos in the About section
- **clsx** + **tailwind-merge** — exposed via a local `cn()` helper that is *redefined inside each UI component* (keep this pattern, don't centralize it)
- **react-scroll** — active; drives all nav anchoring
- **react-router-dom** — installed but **unused**; do not introduce routes without an explicit ask
- **@emailjs/browser** — contact form + lead-magnet form
- **@calcom/embed-react** — booking widget in the Contact section

## Directory layout

```
src/
  main.tsx              React 19 createRoot; wraps App in ThemeProvider
  App.tsx               Composition root: ParticleBackground + Navbar + <main>(sections) + Footer + StickyCTA
                        Sections below the fold are React.lazy'd (see App.tsx:9-19)
  index.css             Tailwind import + CSS custom properties for theme
                        + global utilities (.heading-xl, .heading-lg, .heading-md, .text-lead,
                          .glass-panel, .glass-panel-hover, .editorial-grid)
  components/
    ui/                 Base primitives: Button, Section, GlassCard, MobileDeviceFrame
    ParticleBackground.tsx, HeroVisual.tsx, SkillsMarquee.tsx, TrustedBy.tsx, StickyCTA.tsx
  sections/             Page sections (Hero, ProblemSolution, Projects, Process, Comparison,
                        Services, Guarantee, Testimonials, About, LeadMagnet, FAQ, Contact)
  layout/               Navbar, Footer
  context/
    ThemeContext.tsx    Dark/light theme provider + useTheme() hook; persists to localStorage
                        Theme is applied by toggling .dark / .light on <html>
  utils/
    email.ts            sendEmail() and sendLeadMagnet() — EmailJS wrappers
  assets/               Local logos (.svg, .webp, .avif) imported as ES modules
public/                 Static files served at root: me.png, profile.JPG, mvp-checklist.html
index.html              Loads Google Fonts (DM Sans, Syne); mounts #root
env.example             Template for required env vars
```

## Routing & navigation

Single page. `react-scroll`'s `<Link to="..." smooth duration={500}>` targets the `id` prop on each `<Section>`. To add a "page":

1. Create a new section in `src/sections/` using `<Section id="my-section">`.
2. Lazy-import it in `App.tsx` (follow the existing pattern at `App.tsx:9-19`).
3. Add an entry to `navItems` in `src/layout/Navbar.tsx`.

## Styling conventions

- Reference theme colors with CSS variables: `text-primary`, `bg-[var(--color-surface)]`, `text-[var(--color-muted)]`, `border-[var(--color-border)]`.
- **Do not use Tailwind's `dark:` variants** — theming is driven by `.dark` / `.light` on `<html>`, not by Tailwind's dark mode. `dark:` classes will not respond to the toggle.
- Fonts: `font-display` → Syne (headings), `font-body` → DM Sans (body). Both loaded from Google Fonts in `index.html`.
- Prefer existing utilities over new CSS:
  - Headings: `.heading-xl`, `.heading-lg`, `.heading-md`
  - Body lead: `.text-lead`
  - Glass cards: `.glass-panel`, `.glass-panel-hover`
- CSS theme variables live in `src/index.css:3-63`. Add new tokens there and expose them under `@theme { ... }` if they need to be Tailwind-addressable.

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
- **Always accept `className?: string`** and spread `{...props}` to the root element.
- **Variant/size lookup pattern** for UI primitives:
  ```ts
  const variants = { primary: '...', secondary: '...' };
  const sizes = { sm: '...', md: '...', lg: '...' };
  className={cn(variants[variant], sizes[size], className)}
  ```
- **`cn()` helper is redefined locally** inside each UI component (it's `twMerge(clsx(inputs))`) — keep this pattern when adding new UI primitives rather than centralizing in a shared util.
- **No barrel `index.ts` files.** Import directly from the component file.

## Data

Portfolio content (case studies, services, skill lists, FAQ items, testimonials) is **hardcoded as typed arrays inside the section component that renders it**. See `caseStudies` in `src/sections/Projects.tsx:6-52` for the canonical shape. There is no `data/` directory — maintain this colocated pattern when adding new content.

## State management

**Context API only** — a single global `ThemeContext`. Everything else is local `useState`. Do **not** add Redux, Zustand, or other state libraries without explicit ask.

## Animations

- **Framer Motion** is the default. Canonical reveal pattern:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.6 }}
  />
  ```
- Use `AnimatePresence` for exit animations.
- `HeroVisual.tsx` demonstrates motion values (`useMotionValue`, `useTransform`, `useSpring`) for 3D tilt — follow this for similar interactive effects.
- `ParticleBackground.tsx` is canvas-driven and reads theme colors from CSS vars.

## Icons & assets

- UI icons: `import { ArrowRight, Mail, Menu, X } from 'lucide-react'`.
- Tech-stack logos (About section): external devicons CDN (`https://cdn.jsdelivr.net/gh/devicons/devicon/...`).
- Local logos: `import globalLogicLogo from '../assets/global_logic.svg'` (ES-module import).
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
- Reuse `Section`, `Button`, `GlassCard`, `MobileDeviceFrame` rather than rebuilding primitives.
- Colocate section content (arrays of typed objects) inside the section component.
- Use CSS-variable theme colors (`text-primary`, `bg-[var(--color-surface)]`, etc.).
- Lazy-load any new below-the-fold section in `App.tsx`.
- Run `npm run build` before committing — `noUnusedLocals` will catch dangling imports.

**Don't**
- Use Tailwind `dark:` variants — they don't respond to the theme toggle.
- Add default exports for new components (except `App`).
- Create a `types/` or `data/` directory — it breaks the established colocated pattern.
- Add new state-management libraries.
- Reintroduce Cloudflare Worker config (`wrangler.json`, `worker.ts`).
- Introduce new animation libraries (GSAP, Lottie-only setups) — Framer Motion covers the use cases here.
