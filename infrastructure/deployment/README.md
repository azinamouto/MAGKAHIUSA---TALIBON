# Deployment boundary
Only local database Compose is defined. No production release/auto-deploy is configured.
Hybrid-capable packaging is a design target. Production infrastructure requires dedicated manifests, secret management, threat modeling, HA/backup plan, risk assessment, and staging acceptance.
Never use the sample Docker database password in a network-exposed environment.
