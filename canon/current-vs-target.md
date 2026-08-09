# Current vs. target

**Status:** NORMATIVE COMPANION TO CANON v1.0  
**As of:** 2026-08-08

## CURRENT - may be stated as available only with evidence

- Oki represents the Mother Infra Cluster / `ok-infra`.
- The local reference path uses KubeVirt VMs to host a separate `ok-mgmt` Kubernetes cluster.
- The current workload lifecycle is `CREATE -> REGISTER -> RECONCILE -> PROVE`.
- The cluster owner or the current `ok-cluster` path creates the workload cluster.
- Registration introduces an already existing workload cluster to `ok-mgmt` and establishes a management relationship.
- Observability makes state visible. It does not repair or authorize changes by itself.

## TARGET - must be visibly labeled MORGEN or ZIELBILD

- `ok-mgmt` increasingly owns the declarative workload-cluster lifecycle.
- AI-native operations may diagnose and draft changes within explicit contracts and human authority boundaries.
- Additional hosting and provider profiles may be supported after their prerequisites and evidence are verified.

## Claims that are not allowed

- `ok-mgmt` already creates every workload cluster autonomously.
- Registration and creation are the same action.
- A verified target-provider profile proves that `ok-mgmt` can itself be hosted everywhere.
- A green status or successful command alone proves readiness.
- Aia or another agent holds implicit authority to change production.
- Rebuilding a management cluster automatically restores every piece of historical memory.

When decision and implementation diverge, describe the decision as target and the evidenced runtime behavior as current.
