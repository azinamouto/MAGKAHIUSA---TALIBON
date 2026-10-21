# Continuous Integration and Pipeline Governance

## CI Architecture (`.github/workflows/ci.yml`)

The CI workflow executes automatically on pushes to `main`, `feat/**` branches, and incoming pull requests:
1. **Tooling & Dependency Cache**: Pins Node.js 22 LTS and pnpm 9.15.9 with action caching.
2. **Hygiene & Linting**: Executes `pnpm lint` and `pnpm run format:check` to prevent formatting regressions and disallowed patterns.
3. **Database Client Generation**: Verifies `database/prisma/schema.prisma` syntax and generates Prisma Client in CI environment (`pnpm db:generate`).
4. **Type Safety**: Runs `pnpm typecheck` across all workspace projects under strict TypeScript rules.
5. **Testing Suite**: Runs `pnpm test` (Vitest) validating all domain contracts, schema tests, and component suites.
6. **Application Builds**: Compiles all frontend apps and backend service (`pnpm build`).
7. **Secret Exposure Safeguards**: Scans git tree to block any committed `.env` files (except `.env.example`).

## Security Auditing (`.github/workflows/security.yml`)

- Runs weekly automated dependency audits with `--audit-level high`.
- Blocks automated merging when high-severity vulnerabilities are unaddressed.

## Production Gating

There is **no auto-production deployment**. In accordance with `AGENTS.md` and `ADR-001.md`:
- Privilege gating requires signed LGU authorization.
- Backups and failover drills must be evidenced before production promotion.
