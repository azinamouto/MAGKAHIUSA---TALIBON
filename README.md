# MAGKAHIUSA — TALIBON

<div align="center">

### ONE MUNICIPALITY. CONNECTED BARANGAYS. UNITED IN SERVICE.

**Usa ka Talibon. Nagkahiusa sa Pagtabang.**

A centralized municipal–barangay disaster response, household information, relief assistance, and public transparency management platform.

**An ALZA.Net IT Solutions GovTech Initiative**

![Version](https://img.shields.io/badge/version-0.1.0-18181b?style=flat-square)
![Status](https://img.shields.io/badge/status-engineering%20baseline-64748b?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

---

**Built for communities. Engineered for resilience. Designed for accountability.**

</div>

## 01 / The Vision

When calamities strike, information becomes just as important as resources.

Emergency responders need to know which communities are affected, where assistance is urgently needed, how many households require support, and whether relief has actually reached the intended recipients.

Yet essential information can become fragmented across barangay records, spreadsheets, paper forms, and disconnected reporting procedures.

**MAGKAHIUSA–TALIBON** is a proposed digital infrastructure initiative designed to address these challenges.

The goal is to connect municipal departments and barangays through a shared, secure, and resilient information system that supports coordinated disaster operations and accountable public assistance.

This project is being designed around four principles:

**One verified household identity. One coordinated response. Traceable assistance. Transparent public information.**

## 02 / The Problem We're Solving

Traditional disaster assistance workflows can encounter several recurring challenges:

- Repeated household registration during separate calamities.
- Delayed barangay-to-municipal situation reporting.
- Inconsistent population and affected-household counts.
- Difficulty identifying urgent needs across geographic areas.
- Fragmented records of relief supplies and distribution.
- Limited visibility into approved assistance expenditures.
- Unreliable connectivity during emergency operations.

MAGKAHIUSA aims to reduce these problems through shared data standards, verified records, controlled synchronization, and accountable workflows.

The objective is not simply to digitize forms.

**It is to improve how local government information becomes coordinated action.**

## 03 / Platform Architecture

MAGKAHIUSA is designed as three connected applications operating on a shared backend.

| Application | Responsibility |
|---|---|
| Municipal Command Center | Oversight, incident coordination, reporting, and authorized resource management |
| Barangay Operations Workspace | Household information, incident assessments, and offline-capable reporting |
| Public Transparency Portal | Verified advisories, aggregated updates, and approved public disclosures |

### Conceptual Architecture

```text
                     MAGKAHIUSA — TALIBON
                              |
              +---------------+---------------+
              |               |               |
         MUNICIPAL        BARANGAY          PUBLIC
         COMMAND          OPERATIONS        PORTAL
         CENTER           WORKSPACE
              |               |               |
              +---------------+---------------+
                              |
                        NESTJS API
                              |
              +---------------+---------------+
              |               |               |
           IDENTITY        DISASTER         ASSISTANCE
           & ACCESS        RESPONSE         MANAGEMENT
              |               |               |
              +---------------+---------------+
                              |
                       POSTGRESQL
                         + POSTGIS
                              |
                    AUTHORITATIVE DATA
```

The architecture follows a modular monolith approach, with explicit module boundaries and centralized transactional integrity.

The barangay application is designed to support offline data capture and eventual synchronization.

## 04 / Core System Capabilities

### Unified Household Registry

A planned authoritative registry designed to maintain verified household information without requiring complete re-registration for every emergency.

- Resident and household identities.
- Household membership history.
- Barangay and geographic references.
- Record verification and correction workflows.
- Incident-specific assessment relationships.
- Privacy-controlled information access.

A household may participate in multiple incident assessments while retaining a consistent identity.

### Barangay–Municipal Connectivity

A shared reporting framework connecting participating barangays to authorized municipal departments.

- Barangay-scoped information access.
- Incident situation reports.
- Synchronization acknowledgments.
- Data revision and conflict handling.
- Reporting timestamps and verification states.

**Real-time updates must not be mistaken for automatically verified information.**

### Disaster Response Coordination

Designed to support incident-based assessment and emergency response workflows.

- Disaster incident registration.
- Affected-household assessments.
- Evacuation and displacement reporting.
- Geographic incident visualization.
- Community needs monitoring.
- Municipal situation reporting.

### Relief Assistance Management

A planned assistance and distribution framework emphasizing traceability and reconciliation.

- Assistance program records.
- Authorized household assessments.
- Resource inventory monitoring.
- Distribution and acknowledgment workflows.
- Discrepancy handling.
- Historical distribution records.

Automated risk indicators must not make final beneficiary eligibility decisions.

### Geographic Intelligence

PostGIS and MapLibre are selected to support geographic information workflows.

Planned capabilities include:

- Barangay geographic references.
- Authorized household and facility locations.
- Incident impact mapping.
- Evacuation center information.
- Area-level response assessment.
- Privacy-safe public geographic summaries.

Precise private household coordinates must not be exposed through unrestricted public APIs.

### Public Transparency

A separate public-facing platform is planned for authorized disclosures.

- Verified emergency announcements.
- Aggregated assistance information.
- Approved financial and resource reports.
- Public information bulletins.
- Non-identifying distribution summaries.

The public portal must maintain strict separation from protected household records.

## 05 / Technology Stack

The initial architecture is defined by **ADR-001**.

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Backend | NestJS + Fastify |
| Database | PostgreSQL |
| Geographic Data | PostGIS |
| ORM | Prisma + reviewed spatial SQL |
| Offline Storage | IndexedDB + Dexie |
| Mapping | MapLibre |
| API | REST + OpenAPI |
| Live Updates | Server-Sent Events |
| Containers | Docker |
| CI/CD | GitHub Actions |
| Package Management | pnpm |

**Deployment direction:** Hybrid-capable architecture supporting an evaluated cloud and municipal infrastructure strategy.

Production infrastructure is subject to institutional, security, and operational approval.

## 06 / Repository Structure

```text
MAGKAHIUSA-TALIBON/
|
+-- .agents/
|   +-- rules.md
|   +-- workflows.md
|   +-- definition-of-done.md
|   +-- handoff-template.md
|
+-- .github/
|   +-- workflows/
|   +-- pull_request_template.md
|
+-- apps/
|   +-- municipal-web/
|   +-- barangay-pwa/
|   +-- public-web/
|   +-- api/
|
+-- packages/
|   +-- contracts/
|   +-- ui/
|   +-- config/
|   +-- shared-types/
|
+-- database/
|   +-- prisma/
|
+-- infrastructure/
|   +-- docker/
|   +-- deployment/
|
+-- docs/
|   +-- adr/
|   +-- api/
|   +-- ARCHITECTURE.md
|   +-- SECURITY.md
|   +-- SRS.md
|   +-- ROADMAP.md
|   +-- ACCEPTANCE.md
|   +-- CI-CD.md
|
+-- AGENTS.md
+-- README.md
+-- package.json
+-- pnpm-workspace.yaml
```

The monorepo separates application interfaces, backend services, shared packages, database infrastructure, operational documentation, and engineering guidance.

## 07 / Development Setup

### Prerequisites

- Node.js LTS
- pnpm
- Docker and Docker Compose
- Git
- PostgreSQL-compatible development environment

### Clone the repository

```bash
git clone https://github.com/YOUR-ORG/MAGKAHIUSA-TALIBON.git
cd MAGKAHIUSA-TALIBON
```

Replace `YOUR-ORG` with the actual repository owner.

### Install dependencies

```bash
corepack enable
corepack pnpm install
```

### Configure environment

Copy the example environment configuration into a local `.env` file.

Do not commit credentials or production secrets.

### Start database services

```bash
docker compose -f infrastructure/docker/compose.yaml up -d
```

### Generate database client

```bash
corepack pnpm db:generate
```

### Start applications

Run each application in a separate terminal.

```bash
corepack pnpm dev:api
corepack pnpm dev:municipal
corepack pnpm dev:barangay
corepack pnpm dev:public
```

Expected development addresses, subject to configuration:

| Service | Address |
|---|---|
| Municipal Web | `http://localhost:5173` |
| Barangay Workspace | `http://localhost:5174` |
| Public Portal | `http://localhost:5175` |
| API Health | `http://localhost:4000/health` |

**Verification note:** The initial scaffold has not yet completed dependency installation, type checking, build verification, or end-to-end testing in a confirmed development environment. Commands and configurations must be validated before marking the baseline as operational.

## 08 / Security & Data Responsibility

MAGKAHIUSA is intended to handle information that may be sensitive, operationally critical, or personally identifiable.

Security and privacy are foundational requirements.

The architecture establishes the following expectations:

- Least-privilege access control.
- Barangay-scoped authorization.
- Named staff accounts.
- Multifactor authentication for privileged users.
- Server-side validation.
- Revocable sessions.
- Immutable or append-only audit evidence where appropriate.
- Encryption in transit and appropriate protection at rest.
- Privacy-safe public disclosure.
- Backup and recovery testing.
- Incident response procedures.
- No real citizen records in fixtures or public repositories.

The project must comply with applicable Philippine laws and approved government data-handling policies, including relevant provisions of the Data Privacy Act of 2012.

**Never use real resident or beneficiary information for public demonstrations without proper authorization and safeguards.**

## 09 / Engineering Principles

MAGKAHIUSA follows an evidence-driven development approach.

```text
INSPECT BEFORE MODIFYING.
DEFINE BEFORE IMPLEMENTING.
VERIFY BEFORE CLAIMING.
SECURE BEFORE DEPLOYING.
DOCUMENT BEFORE HANDOFF.
```

Every significant engineering change should:

1. Reference an identified requirement or technical decision.
2. Respect module and authorization boundaries.
3. Include meaningful automated verification.
4. Avoid introducing fabricated government data.
5. Document migrations and operational implications.
6. Preserve backward compatibility where required.
7. Report unresolved limitations.

The project includes `AGENTS.md` and `.agents/` documentation to establish consistent expectations for human developers and AI-assisted engineering tools.

Generated code does not constitute verified code until tested and reviewed.

## 10 / Current Development Status

**Version:** `0.1.0`  
**Stage:** Engineering baseline / pre-MVP  
**Operational status:** Not production-ready

| Component | Status |
|---|---|
| Architecture Decision ADR-001 | Defined |
| Monorepo Foundation | Scaffolded |
| Frontend Applications | Initial shells |
| NestJS Backend | Initial foundation |
| PostgreSQL Schema | Draft |
| CI/CD Workflows | Configured; execution unverified |
| Authentication | Pending implementation |
| Household Registry | Pending implementation |
| Offline Synchronization | Pending implementation |
| Incident Management | Pending implementation |
| Relief Distribution | Pending implementation |
| Public Transparency | Pending implementation |
| Production Deployment | Not authorized |

**Current status must not be interpreted as completion of operational LGU workflows.**

## 11 / Development Roadmap

### Phase 0 — Engineering Foundation

- Architecture documentation.
- Repository structure.
- Development environments.
- CI/CD configuration.
- API and database conventions.
- Initial security standards.

### Phase 1 — Identity and Household Registry

- Resident and household data models.
- Organizational access control.
- Record verification.
- Duplicate detection and resolution.
- Household history.
- Population counting validation.

### Phase 2 — Barangay Synchronization

- Offline operation queue.
- Versioned change protocol.
- Idempotent server processing.
- Sync acknowledgments.
- Conflict reconciliation.
- Interrupted-network testing.

### Phase 3 — Disaster Response

- Incident lifecycle.
- Household impact assessments.
- Situation reporting.
- Geographic information integration.
- Municipal incident summaries.

### Phase 4 — Assistance Management

- Relief resource inventory.
- Approved assistance programs.
- Distribution records.
- Receipt verification.
- Resource reconciliation.

### Phase 5 — Transparency & Readiness

- Public information portal.
- Approved budget disclosures.
- Security review.
- Disaster recovery testing.
- Usability and accessibility acceptance.
- Controlled LGU pilot evaluation.

Each phase is subject to engineering verification and relevant institutional approval.

## 12 / Project Boundaries

MAGKAHIUSA does not intend to replace the authority of municipal disaster management personnel, social welfare officers, or legally prescribed government procedures.

It is designed as supporting digital infrastructure for better coordination and information management.

The software must not:

- Automatically determine who deserves disaster assistance.
- Publish confidential beneficiary information.
- Assume missing reports mean zero affected residents.
- Treat unverified reports as final official figures.
- Fabricate expenditure, population, or assistance records.
- Promise uninterrupted service without demonstrated operational resilience.

## 13 / Project Organization

**Initiative:** MAGKAHIUSA–TALIBON  
**Proposed developer:** ALZA.Net IT Solutions  
**Focus:** Civic Technology, Local Government Systems, Disaster Resilience, and Public Accountability  
**Project location:** Talibon, Bohol, Philippines

MAGKAHIUSA is an independently proposed engineering initiative. This repository does not imply official endorsement, deployment, or adoption by the Municipality of Talibon unless separately documented.

## 14 / Contributing

Engineering contributions should follow the repository's documented architecture, security rules, and definition of done.

Before submitting a change:

- Review `AGENTS.md`.
- Inspect applicable ADRs.
- Keep changes scoped.
- Include appropriate tests.
- Document known limitations.
- Avoid secrets and real personal data.
- Record meaningful verification evidence.

Contribution and licensing policies will be finalized before opening the repository for unrestricted external contributions.

---

<div align="center">

### MAGKAHIUSA — TALIBON

**ONE MUNICIPALITY. CONNECTED BARANGAYS. UNITED IN SERVICE.**

*Technology should connect communities, strengthen response, and make public service more accountable.*

**WE FIND. WE SOLVE. WE LIFT. — ALZA**

**Built with purpose. Engineered with responsibility.**

</div>
