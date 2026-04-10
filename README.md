# DKMStack Landing Page

Modern, responsive landing page built with Next.js App Router, React, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Distributed Rate Limiting (Upstash)

The contact API supports distributed rate limiting for multi-instance deployments.

1. Create `.env.local` from `.env.example`
2. Set:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. Restart the dev server

If these variables are missing, the API falls back to in-memory rate limiting (single-instance only).

## Project Structure

```text
dkmstack-landing/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    about.tsx
    contact-form.tsx
    contact.tsx
    footer.tsx
    hero.tsx
    navbar.tsx
    services.tsx
    why-choose-us.tsx
  next.config.ts
  package.json
  postcss.config.mjs
  tailwind.config.ts
  tsconfig.json
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Vercel auto-detects Next.js and deploys with default settings.
