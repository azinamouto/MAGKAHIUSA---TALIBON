# Development workflow
1. Read the issue and identify the relevant ADR and acceptance criterion.
2. Inspect implementation and state what is presently verified.
3. Work on one bounded module with schema/API changes explicitly listed.
4. Add tests for happy paths, permissions, failure paths, repeated requests, and retries.
5. Run static checks, unit tests, integration tests, and migrations against synthetic data.
6. Record exact commands and results; never call a build 'passed' if not run.
7. Open a PR listing risks, rollback, and data migration consequences.
8. Do not merge pending security/privacy issues without responsible approval.
