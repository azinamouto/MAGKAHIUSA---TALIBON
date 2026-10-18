# Security and privacy policy — baseline
**BLOCKER:** No authentication, tenant isolation, encrypted offline sensitive store, or production audit service exists yet. Never deploy with real citizen data.

## Must design and verify
- Data-sharing authority, privacy impact assessment, retention/deletion and data-subject request process.
- Staff identities, privilege separation, MFA, server-side sessions, CSRF protection, device security.
- Every read/write/export/sync request scoped to explicit barangay permissions.
- Strict transactional identity/aid operations; non-repudiable approvals and corrections.
- Public portal shows verified aggregate statistics only; no beneficiary names or household location pins.
- Backup encryption, isolation, tested restore, disaster continuity and incident response.
- No secrets in git or CI output; use managed secret storage, short-lived deployment credentials.
- Approved offline minimum dataset and storage eviction/revocation treatment.

OWASP ASVS and Philippines Data Privacy Act should be reviewed for relevant control requirements during implementation.
