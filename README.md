# Emrais Engineering Services Limited

Corporate website for Emrais Engineering Services Limited — Engineering Services, General Supplies, and General Contracts.

**Live domain:** [https://emrais.com.ng](https://emrais.com.ng)

## Stack

- Next.js 16 (static export)
- TypeScript
- Tailwind CSS 4
- shadcn/ui

## Project structure

```
src/
  app/                 # App Router entry (layout + page)
  components/
    site/              # Page sections (header, hero, about, …)
    stacked-projects.tsx
    ui/                # shadcn primitives
  lib/
    company-data.ts    # Company content
    icons.ts
public/                # Static assets + CNAME for custom domain
.github/workflows/     # GitHub Pages deploy
```

## Local development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production preview

```bash
bun run build
bun run preview
```

## Deploy to GitHub Pages

This repo is set up for automatic deploys on push to `main`.

1. Push this repository to GitHub (already pointed at `GideonBature/emrais-engineering`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).
5. After the first successful deploy, the site will be available at:
   - `https://emrais.com.ng` (once DNS is configured)
   - `https://gideonbature.github.io/emrais-engineering/` (redirects after the custom domain is active)

> **Important:** Pages must use **Source: GitHub Actions** (not “Deploy from a branch”).
>
> Custom domain builds use an empty `BASE_PATH` so assets load at the domain root.

## Map a custom domain

`public/CNAME` is set to `emrais.com.ng`.

### 1. DNS records

At your domain registrar, add:

| Type | Host | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `gideonbature.github.io` |

### 2. GitHub Pages custom domain

Already configured as `emrais.com.ng` in repo Pages settings. After DNS propagates:

1. Open **Settings → Pages**
2. Confirm the domain shows a green check
3. Enable **Enforce HTTPS**

### 3. Different domain?

Edit `public/CNAME`, update `openGraph.url` in `src/app/layout.tsx`, commit, and push. Then point DNS as above.

## Content updates

Company copy, services, projects, and equipment live in:

`src/lib/company-data.ts`

Images go in `public/`.
