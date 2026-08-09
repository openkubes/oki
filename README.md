# Oki

**The illustrated guide to the OpenKubes universe.**

Oki makes OpenKubes understandable through stories, characters, symbols and running evidence. This is the public `openkubes/oki` repository.

## Read online

The German illustrated story is available as an accessible, keyboard- and
touch-friendly presentation at **[oki.openkubes.org](https://oki.openkubes.org/)**.
The English v1.0 RC1 review preview is available at
**[oki.openkubes.org/en](https://oki.openkubes.org/en/)**.
The Spanish v1.0 RC1 review preview is available at
**[oki.openkubes.org/es](https://oki.openkubes.org/es/)**, and the Persian RTL
v1.0 RC1 review preview at
**[oki.openkubes.org/fa](https://oki.openkubes.org/fa/)**.
The Simplified Chinese and Japanese v1.0 RC1 review previews are available at
**[oki.openkubes.org/zh](https://oki.openkubes.org/zh/)** and
**[oki.openkubes.org/ja](https://oki.openkubes.org/ja/)**.
The Arabic RTL, French and Hindi v1.0 RC1 review previews are available at
**[oki.openkubes.org/ar](https://oki.openkubes.org/ar/)**,
**[oki.openkubes.org/fr](https://oki.openkubes.org/fr/)** and
**[oki.openkubes.org/hi](https://oki.openkubes.org/hi/)**.
The Portuguese v1.0 RC1 review preview, dedicated to Emily, is available at
**[oki.openkubes.org/pt](https://oki.openkubes.org/pt/)**.

Every deployment rebuilds the presentation, compares all 18 scenes with the
frozen German v1.2 manuscript and verifies every published illustration against
the canonical SHA-256 manifest. A failed integrity check prevents publication.
The same deployment also verifies the complete English, Spanish, Persian,
Simplified Chinese, Japanese, Arabic, French and Hindi RC1 texts against their
review manuscripts and exposes a compact ten-language menu.

The canonical German children's-book title is **Oki und die vielen Inseln**,
with the subtitle **Der illustrierte Kinderführer zu OpenKubes**.

> **See it. Understand it. Build it.**

## Source of truth

[`canon/Oki-Universe-Canon-v1.0.md`](canon/Oki-Universe-Canon-v1.0.md) is the approved source of truth. Every manuscript, illustration, book, guide, slide deck and video is a derivative.

```text
Canon
  -> manuscript
  -> canonical character assets
  -> scene illustrations
  -> book and technical guide
  -> slides and video
```

The original German 18-scene manuscript passed Gate 2A and remains permanently
frozen. The Mio v1.1 derivative passed Gate 2A.1 and is frozen separately. The
editorial-clarity v1.2 derivative passed Gate 2A.2 and is frozen separately. The
Oki, Aia and sensor references passed Gate 2B; Mio passed Gate 2B.1. All four
character references are canonical. The four original acceptance keyframes
passed Gate 3 and are canonical. All 18 original German scene illustrations
passed Gate 4 and remain frozen. Gate 4.1 approved the scoped Mio replacements;
the complete German v1.1 scene selection is fixed by
`art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`.

## Repository map

- `canon/` - architecture, story and visual rules
- `story/` - story inventory, manuscripts and production notes
- `characters/` - canonical character references
- `symbols/` - meaning and visual rules for recurring symbols
- `art/` - concepts, prompts, provenance and approved art
- `book/` - publication-ready book derivatives
- `technical-guide/` - illustrated technical explanation
- `slides/` and `video/` - presentation derivatives
- `tools/` - rendering, quality assurance and video tooling
- `LICENSES/` - licensing decisions and notices

Early PPTX, DOCX and PDF concept packages remain outside the public repository.
They are not visual sources of truth and may be migrated only after review.

## Gates

- **Gate 1 - Canon:** APPROVED, 2026-08-08
- **Gate 2A - German 18-scene manuscript:** APPROVED, CONTENT FROZEN
- **Gate 2B - Character assets:** APPROVED, CANONICAL
- **Gate 3 - Four acceptance keyframes:** APPROVED, CANONICAL
- **Gate 4 - 18-scene illustration production:** APPROVED, CANONICAL
- **Gate 5A - German layout system:** APPROVED
- **Gate 5B - Full German book:** APPROVED, 2026-08-08
- **CA-001 - Mio / `ok-mgmt` personification:** APPROVED, 2026-08-09
- **Gate 2A.1 - Mio story delta:** APPROVED, v1.1 CONTENT FROZEN, 2026-08-09
- **Gate 2A.2 - Editorial clarity delta:** APPROVED, v1.2 CONTENT FROZEN, 2026-08-09
- **Gate 2B.1 - Mio character asset:** APPROVED, CANONICAL, 2026-08-09
- **Gate 3.1 - Mio visual acceptance:** APPROVED, CANONICAL, 2026-08-09
- **Gate 4.1 - Mio scene deltas:** APPROVED, CANONICAL, 2026-08-09
- **Gate 5C - Release QA:** OPEN, DIGITAL v1.2 CANDIDATE READY FOR REVIEW; PRINT TARGET DECISION REQUIRED
- **Gate EN-2A - English manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C EN HTML - English web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate ES-2A - Spanish manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C ES HTML - Spanish web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate FA-2A - Persian manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C FA HTML - Persian RTL web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate ZH-2A - Simplified Chinese manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C ZH HTML - Simplified Chinese web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate JA-2A - Japanese manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C JA HTML - Japanese web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate AR-2A - Arabic manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C AR HTML - Arabic RTL web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate FR-2A - French manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C FR HTML - French web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate HI-2A - Hindi manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C HI HTML - Hindi web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS
- **Gate PT-2A - Portuguese manuscript:** REVIEW CANDIDATE, v1.0 RC1
- **Gate 5C PT HTML - Portuguese web edition:** REVIEW CANDIDATE, AUTOMATED QA PASS

## Contribution rule

Architecture claims must name their status: `CURRENT`, `TARGET`, `EXPERIMENTAL` or `NARRATIVE`. Proposed and draft ideas must never look like current capabilities.

## Licensing

Licences for code, text, illustrations and trademarks are managed separately. Released Oki illustrations are approved for CC BY 4.0, with OpenKubes/Oki names, logos and marks excluded. See [`LICENSES/README.md`](LICENSES/README.md).
