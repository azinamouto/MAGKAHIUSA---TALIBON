# MAGKAHIUSA–TALIBON Local Development Guide

Welcome to the engineering monorepo for the **MAGKAHIUSA–TALIBON** municipal disaster operations, household management, and public transparency platform.

---

## 1. Prerequisites

Before setting up the repository locally, ensure the following are installed:
- **Node.js**: `v22.x` (LTS recommended).
- **pnpm**: `v9.15.x` (managed via `corepack enable` or standalone pnpm).
- **Docker & Docker Compose**: WSL2 backend on Windows or standard Docker daemon on Linux/macOS.
- **Git**: configured with your authorized identity.

---

## 2. Quickstart

### 2.1 Clone and Environment Setup
```bash
# Clone the repository
git clone https://github.com/azinamouto/MAGKAHIUSA---TALIBON.git
cd MAGKAHIUSA---TALIBON

# Copy default development environment file
cp .env.example .env
```

### 2.2 Install Dependencies and Generate Prisma Client
```bash
# Install workspace dependencies
pnpm install

# Generate the Prisma database client
pnpm db:generate
```

### 2.3 Start Local PostgreSQL Container
```bash
docker compose -f infrastructure/docker/compose.yaml up -d
```

---

## 3. Running Applications in Development

The monorepo contains four primary applications:

| Application | Port | Dev Command | Description |
| :--- | :--- | :--- | :--- |
| **API Backend** | `http://localhost:4000` | `pnpm dev:api` | NestJS + Fastify authoritative API |
| **Municipal Command Web** | `http://localhost:5173` | `pnpm dev:municipal` | Municipal administrative command center |
| **Barangay PWA** | `http://localhost:5174` | `pnpm dev:barangay` | Offline-ready field worker application |
| **Public Portal** | `http://localhost:5175` | `pnpm dev:public` | Citizen-facing transparency & advisories |

To launch all applications simultaneously or individually, run the respective `pnpm dev:*` script in separate terminal tabs.

---

## 4. Verification and Quality Checks

Run the automated quality assurance pipeline:

```bash
# Run the complete test and quality pipeline:
# (linting + format check + security scan + typecheck + unit tests)
pnpm validate

# Individual checks:
pnpm lint            # Check syntax, debuggers, and forbidden tokens
pnpm format:check    # Verify whitespace and formatting hygiene
pnpm security:scan   # Scan for potential secret and credential exposures
pnpm typecheck       # Strict TypeScript verification across all 8 projects
pnpm test            # Execute Vitest test suite across all projects
```

---

## 5. Development Principles & Non-Negotiables

All contributors and AI agents must strictly follow `AGENTS.md` and `docs/adr/ADR-001.md`:
1. **Never fabricate or commit real citizen data**: All test fixtures must be explicitly synthetic or anonymized.
2. **Deny-by-default privileged operations**: Any new privileged endpoint or UI view must require authorization and tenant/barangay scoping.
3. **No silent conflict overwrites**: Offline drafts and updates must preserve revision history and present explicit resolution interfaces.
4. **Human-in-the-loop for aid**: Automated aid eligibility or denial is prohibited; all distributions require authorized human sign-off.
