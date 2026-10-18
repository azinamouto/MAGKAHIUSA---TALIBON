# Acceptance matrix
Architecture acceptance criteria are planned, **not passed**.

| ID | Future proof requirement | Evidence |
|---|---|---|
| AC01 | One household linked to two incidents, no duplicate base record | Transactional integration test |
| AC02 | Membership changes never inflate population count | Temporal aggregation tests |
| AC03 | Cross-barangay API and sync isolation | Negative permission tests |
| AC04 | Offline queue survives app restart, no data loss | Device/browser test |
| AC05 | Repeated operation applies once | Retry/idempotency test |
| AC06 | Conflicting updates do not silently overwrite | Concurrency test |
| AC07 | Revoked account rejected when reconnecting | Revocation test |
| AC08 | Reported vs verified vs served status distinct | Report contract test |
| AC09 | Inventory movement auditable and reconcilable | Ledger test |
| AC10 | Failed distribution commit rolls back | Transaction failure test |
| AC11 | No public sensitive person-level data | Redaction test |
| AC12 | Privileged changes auditable | Audit event test |
| AC13 | Same release can deploy to cloud and approved local host | Deployment test |
| AC14 | Backup restored consistently | Disaster recovery drill |
| AC15 | Accessible keyboard/mobile workflow | Playwright accessibility checks |
| AC16 | Observable failures without PII in logs | Observability test |
| AC17 | Financial totals reconcile to source documents | Accounting verification |
| AC18 | Interrupted sync recovers without duplicate commit | Network fault test |

Foundation-only checks: API health/meta smoke tests and front-end build validation. These do not satisfy domain criteria above.
