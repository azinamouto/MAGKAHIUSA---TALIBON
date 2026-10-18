# MAGKAHIUSA–TALIBON

**Municipal–Barangay Disaster Response, Household Registry & Relief Transparency Platform**

Engineering baseline `v0.1.0` — **NOT a production-ready LGU system**.

## Apps
- `apps/municipal-web` — municipal dashboard shell (demonstration figures intentionally absent)
- `apps/barangay-pwa` — barangay shell with local *non-personal* offline draft demonstration
- `apps/public-web` — public information shell; no beneficiary identities or invented financial data
- `apps/api` — NestJS/Fastify API with health/metadata and deliberately non-operational protected modules

## Requirements
Node 22 LTS, Corepack + pnpm 9.15.9, Docker for local PostgreSQL/PostGIS.

```bash
corepack enable
corepack pnpm install --frozen-lockfile # once pnpm-lock.yaml has been generated and committed
# for initial bootstrap only:
corepack pnpm install
cp .env.example .env
docker compose -f infrastructure/docker/compose.yaml up -d
corepack pnpm db:generate
corepack pnpm dev:api
corepack pnpm dev:municipal
corepack pnpm dev:barangay
corepack pnpm dev:public
```

No `pnpm-lock.yaml` is shipped unless dependency resolution has been completed; generate and commit it before enforcing frozen installs. Do **not** run database migrations on real LGU data.

## Project status
- Architecture / documentation: initial baseline
- Public API: health and system metadata only
- Registry / incident / ayuda: schema **draft**, not enabled APIs
- Authentication / authorization: **not implemented**; all protected business endpoints must remain unavailable
- Offline barangay PWA: demo *non-sensitive draft queue only*, not secure data synchronization
- GIS and public spending: placeholders; no fabricated real-time claims

See `docs/adr/ADR-001.md`, `docs/SECURITY.md`, `.agents/README.md`, `docs/ACCEPTANCE.md`.

## Safety rules
No real personal data or production credentials in this repo. Do not deploy to citizen-facing production until identity, privacy, sync, backups, accessibility, and end-to-end controls pass formal acceptance.
