# Continuous integration and candidate packaging
- `ci.yml` runs typechecking, unit tests, builds and a basic tracked-env check on main and PRs.
- `security.yml` runs a scheduled dependency audit; further security scanning is required.
- `package.yml` runs on version tags or by manual trigger, builds candidates and uploads artifacts. The `staging` environment can be configured with required reviewers in GitHub.
- There is **no auto-production deployment**. Release gating requires authorization, infrastructure-specific secrets, image scanning, backup/restore and rollback evidence, and LGU acceptance.
- A resolved, reviewed `pnpm-lock.yaml` must be committed before CI changes to `--frozen-lockfile` and reproducible production builds.
