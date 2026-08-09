# Gate 4.1 - Mio scene impact audit

**Status:** APPROVED / CLOSED - ALL MIO SCENE DELTAS CANONICAL  
**Entry conditions:** Gate 2A.1 and Gate 3.1 approved; `OKMGMT-CHAR-001-v1` and `OKI-KF-MIO-01-v1` canonical  
**Rule:** existing Gate-4 scene images remain canonical until explicit replacements pass review

## Mandatory candidate replacements

| Scene | Reason | Required visual truth |
| --- | --- | --- |
| 04 | first inner island and Mio's emergence | Mio belongs to a separate guest island with its own town hall; identity may be foreshadowed before naming |
| 05 | character introduction | Mio is visibly distinct from Oki; Mio is the cluster avatar, not the town hall |
| 09 | registration | an already existing cluster is introduced to Mio; Oki does not perform management registration |
| 10 | responsibility lesson | Mio learns that birth is not readiness; builders remediate and sensors verify |
| 16 | recovery boundary | Mio may go dark while workload islands remain illuminated; rebuild is not complete memory restore |
| 17 | completed character arc | mature Mio stands beside the young cluster; all creation imagery stays inside `MORGEN` |

## Presence audit before final scope

Review Scenes 06, 07, 08, 11, 14 and 18 after the character sheet is approved.
Replace them only when Mio is the actual speaker/actor and the current image
would otherwise misassign the action to Oki or make the story hard to follow.

## Expected non-replacements

- Scene 08 must continue to show an external builder creating the workload island; Mio must not be inserted as its creator.
- Scenes 12 and 13 remain centered on Aia, Evidence and human Authority.
- Unaffected canonical illustrations must be reused byte-for-byte.

## Versioning rule

New approved scene assets receive new versions such as
`OKI-SCENE-DE-05-v2.png`. They never overwrite the approved v1 files or reuse
their provenance records. The final Gate-4.1 checksum manifest must name both
replacements and exact v1 reuses.

## Planned replacement batches

- **Batch A1:** Scenes 04 and 05 - APPROVED; `C01` promoted byte-identically to canonical v2
- **Batch B1:** Scenes 09 and 10 - APPROVED; Scene 09 C01 and Scene 10 C04 promoted byte-identically to canonical v2
- **Batch D1:** Scenes 16 and 17 - APPROVED; Scene 16 C01 and Scene 17 C02 promoted byte-identically to canonical v2
- **Presence audit:** Scenes 06, 07, 08, 11, 14 and 18 after mandatory batches

## Batch A1 candidate record

| Scene | Existing canonical | Candidate | Preliminary result |
| --- | --- | --- | --- |
| 04 | `OKI-SCENE-DE-04-v1.png` | `OKI-SCENE-DE-04-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-04-v2.png` |
| 05 | `OKI-SCENE-DE-05-v1.png` | `OKI-SCENE-DE-05-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-05-v2.png` |

Batch A1 passed Conformance, Rights and human approval on 2026-08-09.

## Batch B1 candidate record

| Scene | Existing canonical | Recommended candidate | Preliminary result |
| --- | --- | --- | --- |
| 09 | `OKI-SCENE-DE-09-v1.png` | `OKI-SCENE-DE-09-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-09-v2.png` |
| 10 | `OKI-SCENE-DE-10-v1.png` | `OKI-SCENE-DE-10-v2-C04.png` | APPROVED; canonical `OKI-SCENE-DE-10-v2.png` |

Scene 10 candidates C01-C03 remain provenance-only because they did not satisfy
all sensor-count and Mio-presence constraints. Batch B1 passed Conformance,
Rights and human approval on 2026-08-09.

## Batch D1 candidate record

| Scene | Existing canonical | Recommended candidate | Preliminary result |
| --- | --- | --- | --- |
| 16 | `OKI-SCENE-DE-16-v1.png` | `OKI-SCENE-DE-16-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-16-v2.png` |
| 17 | `OKI-SCENE-DE-17-v1.png` | `OKI-SCENE-DE-17-v2-C02.png` | APPROVED; canonical `OKI-SCENE-DE-17-v2.png` |

Scene 17 C01 remains provenance-only because it introduced an unapproved Oki
duplicate inside the target frame. Batch D1 passed Conformance, Rights and
human approval on 2026-08-09.

## Presence audit candidate record

| Scene | Existing canonical | Decision / recommended candidate | Preliminary result |
| --- | --- | --- | --- |
| 06 | `OKI-SCENE-DE-06-v1.png` | `OKI-SCENE-DE-06-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-06-v2.png` |
| 07 | `OKI-SCENE-DE-07-v1.png` | `OKI-SCENE-DE-07-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-07-v2.png` |
| 08 | `OKI-SCENE-DE-08-v1.png` | `OKI-SCENE-DE-08-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-08-v2.png` |
| 11 | `OKI-SCENE-DE-11-v1.png` | `OKI-SCENE-DE-11-v2-C01.png` | APPROVED; canonical `OKI-SCENE-DE-11-v2.png` |
| 14 | `OKI-SCENE-DE-14-v1.png` | exact v1 reuse | APPROVED; exact canonical v1 reuse |
| 18 | `OKI-SCENE-DE-18-v1.png` | `OKI-SCENE-DE-18-v2-C02.png` | APPROVED; canonical `OKI-SCENE-DE-18-v2.png` |

Scene 18 C01 remains provenance-only because it placed Mio's connected light
core on the back of the jacket. The complete decision and conformance record is
`GATE-4-1-PRESENCE-AUDIT-REVIEW-01.md`.

The Presence Audit passed Conformance, Rights and explicit human approval on
2026-08-09. All five selected candidates were promoted byte-identically. Scene
14 remains an exact v1 reuse.

## Gate 4.1 final result

- Replaced with canonical v2: Scenes 04, 05, 06, 07, 08, 09, 10, 11, 16, 17 and 18.
- Reused byte-for-byte from canonical v1: Scenes 01, 02, 03, 12, 13, 14 and 15.
- Complete 18-scene integrity manifest: `art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`.
- Original Gate-4 v1 assets remain frozen and are not overwritten.

**Gate 4.1 decision:** APPROVED / CLOSED, 2026-08-09.
