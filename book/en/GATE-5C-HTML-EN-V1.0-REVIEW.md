# Gate 5C - English HTML presentation v1.0 RC1

**Status:** REVIEW CANDIDATE  
**Prepared:** 2026-08-09  
**Review URL:** `https://oki.openkubes.org/en/` after GitHub Pages deployment  
**Source manuscript:** `story/en/manuscript-v1.0-rc1.md`  
**Approved source adaptation:** `story/de/manuscript-v1.2.md`  
**Canonical art manifest:** `art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`

## Candidate

- natural American-English adaptation of all 18 approved German scenes
- English route: `/en/`
- German route remains at `/`
- visible DE/EN language switch in both editions
- 22 slides: cover, central idea, 18 story scenes, conclusion and discovery page
- keyboard, touch, overview and fullscreen controls translated into English
- English title, metadata, captions, alternative text and accessibility labels

## Automated verification

- [x] all 18 English scene titles match the RC1 manuscript
- [x] all 18 English scene texts match the RC1 manuscript after markup normalization
- [x] both language editions contain exactly 22 slides
- [x] all shared scene images match the canonical SHA-256 manifest
- [x] production build completes
- [x] German and English rendered-route tests pass
- [x] German and English standalone-export tests pass
- [x] relative language and image links are valid in the offline export

Automated result: **PASS**

## Human review required

- [ ] English read-aloud rhythm and age suitability
- [ ] naturalness of character voices and dialogue
- [ ] consistency of singular `they` for Mio
- [ ] final wording of the cover and central idea
- [ ] explicit approval of the English manuscript as the language source of truth

## Illustration localization note

The RC1 HTML preview deliberately reuses the exact canonical scene images.
Scene 6 therefore retains the German book label `VERTRÄGE / Was muss
funktionieren?`, and scene 17 retains the German target label `MORGEN` in the
artwork. The surrounding English manuscript and accessible alternative text use
`CONTRACTS / What must work?` and `TOMORROW`.

English-lettered illustration derivatives require their own scoped art delta,
provenance records and human approval. They must not silently replace the
canonical German images.

## Decision record

```text
Human reviewer:
Date:
Decision: PENDING
Notes:
```
