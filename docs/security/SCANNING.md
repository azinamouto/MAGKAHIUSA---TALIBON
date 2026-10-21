# Security Scanning and Credential Protection

## Objective

To enforce zero-tolerance security hygiene across the MAGKAHIUSA–TALIBON monorepo, in compliance with `AGENTS.md` and `docs/adr/ADR-001.md`.

## Automated Scanner (`scripts/security-scan.mjs`)

The automated security scan verifies:
1. **Private Key Leaks**: Detects RSA and PKCS#8 private keys.
2. **Hardcoded Secrets**: Identifies high-entropy passwords, tokens, and database credentials outside `.env.example`.
3. **Cloud Provider Tokens**: Detects AWS Access Keys (`AKIA...`) and GitHub Personal Access Tokens (`ghp_...`).
4. **Git Hygiene**: Verifies that `.gitignore` excludes local environment files (`.env`), credentials, and dependencies.
5. **PII Isolation**: Ensures no real resident personal records, contact information, or household coordinates exist in committed files.

## Running the Security Scan

```bash
pnpm run security:scan
```

This check is integrated into root workspace checks and CI verification workflows.

