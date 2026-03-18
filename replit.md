# Workspace

## Overview

Full-stack website for **Ayul Community Care** — a premium NDIS support provider based in Sydney, Australia. Built with React + TypeScript (Vite) on the frontend and Node.js + Express on the backend, using PostgreSQL for data persistence.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite, Tailwind CSS, Framer Motion
- **i18n**: react-i18next (6 languages: EN, HI, ZH, FR, ES, AR)

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/           # Express API server
│   └── ayul-community-care/  # React + Vite frontend (served at /)
├── lib/
│   ├── api-spec/             # OpenAPI spec + Orval codegen config
│   ├── api-client-react/     # Generated React Query hooks
│   ├── api-zod/              # Generated Zod schemas from OpenAPI
│   └── db/                   # Drizzle ORM schema + DB connection
├── scripts/
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Frontend Pages

- **Home** (`/`) — Hero, Services overview, Why Choose Us, Testimonials, CTA banner
- **About** (`/about`) — Company story, Mission & Vision, Values
- **Services** (`/services`) — 6 service cards with icons and hover animations
- **Contact** (`/contact`) — Form with validation, contact info, Google Maps embed

## Backend API

- `POST /api/contact` — Submit contact form (saves to PostgreSQL)
- `GET /api/contact` — List all submissions (admin)
- `GET /api/healthz` — Health check

## Database Schema

- `contacts` table: id, name, email, phone (nullable), message, created_at

## Multi-Language Support

Translations in `src/i18n/config.ts` for:
- English (en) — default
- Hindi (hi)
- Chinese (zh)
- French (fr)
- Spanish (es)
- Arabic (ar)

## Contact Info

- Phone: +61 450 602 904
- Email: admin@ayulcommunitycare.com.au
- Location: Sydney, NSW, Australia
