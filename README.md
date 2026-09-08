# Emrais Engineering Services Limited

Corporate website for Emrais Engineering Services Limited — Engineering Services, General Supplies, and General Contracts.

**Live domain (after DNS setup):** [https://emrais-engineering.com](https://emrais-engineering.com)

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
   - `https://gideonbature.github.io/emrais-engineering/`
   - `https://emrais-engineering.com` (once DNS is configured)

> **Important:** Pages must use **Source: GitHub Actions** (not “Deploy from a branch”). Branch deploys serve the README instead of the built site.
>
> While using the `github.io/emrais-engineering` URL, the build uses `BASE_PATH=/emrais-engineering`. When your custom domain is live at the root, set `BASE_PATH: ""` in `.github/workflows/deploy.yml`.

## Map a custom domain

`public/CNAME` already contains `emrais-engineering.com`. That file is copied into the static build and tells GitHub which domain to serve.

### 1. DNS records

At your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.), add:

**Option A — apex + www (recommended)**

| Type | Host | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `gideonbature.github.io` |

**Option B — subdomain only** (e.g. `www.emrais-engineering.com`)

| Type | Host | Value |
|------|------|--------|
| CNAME | `www` | `gideonbature.github.io` |

Then change `public/CNAME` to `www.emrais-engineering.com`.

### 2. GitHub Pages custom domain

1. **Settings → Pages → Custom domain**
2. Enter `emrais-engineering.com`
3. Save, wait for DNS check to pass
4. Enable **Enforce HTTPS** (may take a few minutes after DNS propagates)

### 3. Different domain?

Edit `public/CNAME` to your domain, update `openGraph.url` in `src/app/layout.tsx`, commit, and push. Then point DNS as above.

## Content updates

Company copy, services, projects, and equipment live in:

`src/lib/company-data.ts`

Images go in `public/`.
