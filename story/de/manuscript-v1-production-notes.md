# Oki manuscript v1 - production notes

**Status:** INTERNAL REVIEW COMPANION  
**Reader-facing source:** [`manuscript-v1.md`](manuscript-v1.md)  
**Canon:** [`../../canon/Oki-Universe-Canon-v1.0.md`](../../canon/Oki-Universe-Canon-v1.0.md)

**Open delta:** [`GATE-2A1-MIO-STORY-DELTA.md`](GATE-2A1-MIO-STORY-DELTA.md) is authorized by approved CA-001 but still requires exact-text review. The frozen v1 manuscript remains unchanged.

These notes do not belong in the children's book. They make the story-to-architecture mapping reviewable before illustration work begins.

## Scene plan

### 1 - Before Oki

- **Inventory:** 1
- **Narrative job:** Establish the problem as missing repeatability, not missing products.
- **Illustration:** Wide machine landscape, humans with different plans, one capability-oriented blueprint beginning to glow.
- **Architecture:** OpenKubes starts from guarantees and contracts.
- **Risk check:** Do not show Oki or a Kubernetes control plane before bootstrap.

### 2 - Oki is born

- **Inventory:** 2
- **Narrative job:** Introduce Oki as curious, responsible and not omniscient.
- **Illustration:** Oki as a newly formed island with one clear town hall; humans visible at the origin point.
- **Architecture:** Oki personifies `ok-infra`; Oki does not run on it.
- **Acceptance keyframe:** **KF-01 - Oki Birth**.

### 3 - The workshop and the first egg

- **Inventory:** 3 + 4
- **Narrative job:** Combine KubeVirt with the first declarative cluster beginning to emerge.
- **Illustration:** Oki contains a VM workshop; an egg sits inside one prepared building place. No second town hall yet.
- **Architecture:** KubeVirt provides VM infrastructure. It does not itself create a Kubernetes cluster.
- **Risk check:** The egg must not look ready. The VM must not have a town hall.

### 4 - Islands inside islands

- **Inventory:** 5
- **Narrative job:** Deliver the Kubeception revelation.
- **Illustration:** Oki's island visibly contains a separate island with its own boundary and town hall.
- **Architecture:** Host cluster and guest cluster are separate Kubernetes identities.
- **Acceptance keyframe:** **KF-02 - Kubernetes on Kubernetes**.

### 5 - A town hall for ok-mgmt

- **Inventory:** 6 + 7
- **Narrative job:** Introduce the management cluster and its responsibility arc.
- **Illustration:** The guest island equips its own town hall; `ok-mgmt` sign is secondary, not a character logo.
- **Architecture:** Bootstrap produces a separate management cluster. Current `ok-mgmt` must not claim autonomous workload creation.
- **Pronunciation:** Narration says “ok management,” while technical text remains `ok-mgmt`.

### 6 - The book of promises

- **Inventory:** 8
- **Narrative job:** Make contract-first design emotionally and cognitively clear.
- **Illustration:** Large book labeled `VERTRÄGE - Was muss funktionieren?`; interchangeable tools remain in the background.
- **Architecture:** Contracts define stable capabilities and guarantees, not favorite components.

### 7 - Four sensors

- **Inventory:** 9
- **Narrative job:** Separate observation and proof from authority.
- **Illustration:** Scout, Meter, Check and Proof each carry their canonical symbol.
- **Architecture:** Evidence can demonstrate facts but cannot authorize change.
- **Risk check:** Proof's green check mark must never resemble or operate as the key.

### 8 - A new island appears

- **Inventory:** 10
- **Narrative job:** State plainly that another builder creates the workload cluster before management registration.
- **Illustration:** Distant builder and egg birth, outside `ok-mgmt`; no management bridge yet.
- **Architecture status:** **CURRENT** - cluster owner / current `ok-cluster` path creates the cluster.
- **Risk check:** Do not let `ok-mgmt` create or hatch this island.

### 9 - The introduction

- **Inventory:** 11
- **Narrative job:** Make registration an explicit relationship and trust boundary.
- **Illustration:** Existing island arrives at the harbor; identities and promises are checked before a bridge lights up.
- **Architecture status:** **CURRENT** - registration follows creation.

### 10 - Born is not ready

- **Inventory:** 12
- **Narrative job:** Explain outcome-based evidence in a child-readable way.
- **Illustration:** Incomplete path and intermittent signal first; repaired state and green evidence summary second.
- **Architecture:** A successful command is not readiness. Evidence proves the promised outcome.

### 11 - The lighthouse

- **Inventory:** 13
- **Narrative job:** Define observability and its limits.
- **Illustration:** Lighthouse exposes a dark bridge section but sends no repair beam.
- **Architecture:** Observability reveals state; it neither remediates nor authorizes automatically.

### 12 - Aia arrives

- **Inventory:** 14
- **Narrative job:** Introduce AI as a fast, useful but bounded collaborator.
- **Illustration:** Aia with violet idea-filled backpack finds drift between route and promise book.
- **Architecture status:** **NARRATIVE / TARGET-ALIGNED** - diagnosis and proposal drafting, no autonomous production change.

### 13 - The gate and key

- **Inventory:** 15
- **Narrative job:** Show the decision boundary without portraying it as distrust of AI.
- **Illustration:** Aia, proposal and sensors before the gate; human with plan and key at gate; real change behind it.
- **Architecture:** Machines inspect facts, AI assists thinking, humans retain accountable authority.
- **Acceptance keyframe:** **KF-03 - Aia at the Gate**.

### 14 - The island family

- **Inventory:** 16
- **Narrative job:** Show a family of platform distributions sharing contracts without becoming copies.
- **Illustration:** Distinct islands for `ok-shared`, `ok-ai`, `ok-robotics` and `ok-iot`, each with its own town hall.
- **Architecture:** Each named platform is an independent Kubernetes cluster in this metaphor. Shared services stay visible.

### 15 - Island world for the backpack

- **Inventory:** 17
- **Narrative job:** Make local learning accessible and joyful.
- **Illustration:** Laptop or backpack unfolds a small practice archipelago; visual label distinguishes it from production.
- **Architecture:** `ok-local` is a local reference and learning environment, not a normal production cluster.

### 16 - The storm

- **Inventory:** 18
- **Narrative job:** Teach recovery honestly, including the boundary between reconstruction and memory.
- **Illustration:** Oki remains outside the damaged `ok-mgmt` island and holds declared plans; separate memory chest/backup symbol.
- **Architecture:** Mother Infra can be an external recovery anchor only with implemented recovery inputs and evidence. Rebuild is not full state restoration.
- **Risk check:** Never promise automatic complete recovery.

### 17 - The next generation

- **Inventory:** 19
- **Narrative job:** Complete `ok-mgmt`'s growth from learner to responsible helper.
- **Illustration:** Mature `ok-mgmt` stands beside, not above, a young cluster near a new egg.
- **Architecture status:** **NARRATIVE BRIDGE TO TARGET** - do not visually imply today's autonomous lifecycle is already complete.
- **Visual conformance:** The new egg and its lifecycle must remain unmistakably inside the visible `MORGEN` / target context.

### 18 - What is OpenKubes?

- **Inventory:** 20
- **Narrative job:** Deliver the core definition and invite continuation.
- **Illustration:** Full archipelago, distinct islands and town halls, book in foreground, distant cracking egg.
- **Architecture:** OpenKubes is a framework for a family of reliable Kubernetes platform distributions, not one fixed product or cluster.
- **Acceptance keyframe:** **KF-04 - The Archipelago / Canonical Closing**.

## Gate 2A review questions

- Can a child follow the story without needing the technical notes?
- Does Oki remain curious rather than all-knowing?
- Is the current sequence `CREATE -> REGISTER -> RECONCILE -> PROVE` unmistakable?
- Are the boundaries of the lighthouse, sensors and Aia understandable?
- Is recovery described without promising memory that has not been restored?
- Does each technical island have exactly one town hall?
- Are the two merged scene pairs narratively natural?
- Is the closing definition of OpenKubes memorable and true?

Gate 2A approval freezes the story wording for character and acceptance-keyframe production. Later wording changes that alter meaning require a Canon impact review.
