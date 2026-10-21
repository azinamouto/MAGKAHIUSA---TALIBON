# Engineering rules
1. Inspect code, ADRs, and tests before changing behavior.
2. Separate observation, assumption, proposed feature, and verified implementation.
3. No fabricated populations, affected households, funding, reports, or sync status.
4. Enforce municipality and barangay authorization on every privileged operation, including sync.
5. Deny access until authenticated and scoped authorization exists.
6. Use privacy by design; do not cache full resident tables on untrusted devices.
7. Never quietly merge competing assessments, identities, or inventory mutations.
8. All aid eligibility remains reviewable by an authorized human with appeal/correction processes.
9. Always test concurrency, idempotency, network outages, access controls, and backups.
10. Don't silently change ADR decisions; propose a new ADR when architecture changes.
--test
