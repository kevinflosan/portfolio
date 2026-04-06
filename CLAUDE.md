# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # static export to /out
npm run lint     # ESLint check
```

There are no tests in this project.

## Architecture

Single-page portfolio with i18n. Key facts:

- **Next.js 16 + `output: 'export'`** — generates a fully static site into `/out`. No server-side runtime.
- **`basePath: '/portfolio'`** — all routes are prefixed. Asset URLs in code must include `/portfolio/` explicitly (e.g. `href="/portfolio/kevin-cv-en.pdf"`).
- **`next-intl` v4** — i18n via `app/[locale]/` route. Locales: `en`, `es`. Default: `en`. Translations live in `messages/en.json` and `messages/es.json`.
- **`navigation.ts`** — exports locale-aware `Link`, `redirect`, `usePathname`, `useRouter` from `next-intl/navigation`. Use these instead of `next/navigation` equivalents when locale-awareness is needed.
- **`i18n/routing.ts`** — single source of truth for locales config.
- **Root `app/page.tsx`** — client-side redirect to `/portfolio/en/`. Not a real page.
- **`app/[locale]/layout.tsx`** — sets HTML lang, imports globals.css, wraps with `NextIntlClientProvider`. Static params generated from `routing.locales`.
- **Components** (`components/`) are all section components rendered in `app/[locale]/page.tsx` in order: `Navbar → Hero → About → Skills → Projects → Experience → Contact`. Each uses `useTranslations()` from `next-intl`.
- **`Navbar`** receives `locale` prop and constructs the language-switch URL by replacing the locale segment in `usePathname()`.
- **CV PDFs** are in `public/` as `kevin-cv-en.pdf` and `kevin-cv-es.pdf`. Download links use the locale to pick the right file.
- **Styling**: Tailwind CSS v4 (PostCSS plugin approach via `@tailwindcss/postcss`). No `tailwind.config.js` needed.
- **Animations**: Framer Motion v12.
- **Icons**: Lucide React.
