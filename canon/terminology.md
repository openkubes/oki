# Oki terminology

**Status:** NORMATIVE COMPANION TO CANON v1.0  
**Rule:** If this document conflicts with the approved Canon, the Canon wins.

| Oki world | Technical meaning | Canonical wording rule |
|---|---|---|
| Oki | personified `ok-infra` / Mother Infra Cluster | Oki does not live on `ok-infra`; Oki represents it. |
| Aia | AI agent | Reads, analyzes and drafts. Does not decide or own authority. |
| island | Kubernetes cluster | Every independent island has its own town hall. |
| town hall | Kubernetes control plane | Never place one on a VM, Pod or product. |
| cluster egg | declaratively described cluster that may be emerging | An egg is not yet a ready cluster. |
| book of promises | OpenKubes contracts | Describes capabilities and guarantees, not preferred products. |
| sensors | factual checks | Observe and verify; do not decide. |
| lighthouse | observability | Makes state visible; does not repair automatically. |
| gate | controlled real-world change | A proposal and evidence reach the gate before execution. |
| key | human authority and accountability | The human keeps the key. |
| supply harbor | `ok-shared` | Shared services remain visible and explicit. |
| island world for the backpack | `ok-local` | Local learning and reference environment, not a production island. |

## Technical sequence

`CREATE -> REGISTER -> RECONCILE -> PROVE`

- **Create:** a cluster owner or the current `ok-cluster` path creates the workload cluster.
- **Register:** the already existing cluster is explicitly introduced to `ok-mgmt`.
- **Reconcile:** the management relationship maintains declared state.
- **Prove:** evidence demonstrates the promised outcome.

Use **ok management** as the spoken pronunciation of `ok-mgmt`. Keep `ok-mgmt` in technical writing.

## Technical identifier typography

Keep `ok-mgmt`, `ok-ai`, `ok-shared`, `ok-robotics`, `ok-iot` and `ok-local`
as literal ASCII identifiers. A rendered publication must keep each identifier
on one visual line. Prevent splitting through layout width or an earlier line
break; do not replace the ASCII hyphen with a Unicode dash.
