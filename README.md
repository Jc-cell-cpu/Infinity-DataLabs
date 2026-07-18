# Infinity DataLabs Website

Production-ready corporate website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lenis, Lucide icons, and shadcn-compatible UI foundations.

## Run locally

Requires Node.js 22+ and npm 11+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact integration

The contact form posts to `/api/contact`, validates and normalizes the payload, includes a honeypot field, and returns a safe placeholder response by default. To forward enquiries to a CRM, email automation, or serverless workflow, set:

```bash
CONTACT_WEBHOOK_URL=https://your-secure-endpoint.example/contact
```

The receiving endpoint should add authentication, persistence, rate limiting, spam filtering, and any required consent workflow before public launch.

## Deployment

### Vercel

Import the repository in Vercel. The included `vercel.json` adds baseline security headers and selects the Mumbai region. Add production environment variables in the project settings.

### Docker

```bash
docker compose up --build
```

The image uses Next.js standalone output, runs as a non-root user, and exposes `/api/health`.

## Structure

- `app/` — pages, metadata, sitemap, robots, OG image, and API routes
- `components/` — shell, sections, interaction, and shadcn-style UI primitives
- `lib/site-data.ts` — centralized capability and page content
- `public/brand/` — SVG logo package and brand guidance
- `design-system/MASTER.md` — visual and interaction source of truth

## Launch checklist

- Confirm the public company email and social profile URLs.
- Connect the contact endpoint to the production CRM or email service.
- Have legal counsel review the privacy notice.
- Add production analytics and consent tooling if required.
- Run Lighthouse against the deployed origin and test current desktop and mobile browsers.
