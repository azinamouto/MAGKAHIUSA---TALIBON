# Repository agent instructions
Read `.agents/README.md` and `docs/adr/ADR-001.md` before making changes.
Inspect before editing. Never invent LGU datasets, approval, live status, or test results.
Do not expose residents, household coordinates, credentials, aid recipient identities, or unverified statistics publicly.
All privileged endpoints must deny by default until authentication and scoped authorization are tested.
Use migration review, unit/integration tests, and security regression tests for domain changes.
No silent conflict overwrite or automatic aid denial. Preserve evidence and document limitations.
