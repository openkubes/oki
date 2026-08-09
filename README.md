# Oki

**The illustrated guide to the OpenKubes universe.**

Oki makes OpenKubes understandable through stories, characters, symbols and running evidence. This is the public `openkubes/oki` repository.

## Read online

The German illustrated story is available as an accessible, keyboard- and
touch-friendly presentation at **[openkubes.github.io/oki](https://openkubes.github.io/oki/)**.

Every deployment rebuilds the presentation, compares all 18 scenes with the
frozen German v1.2 manuscript and verifies every published illustration against
the canonical SHA-256 manifest. A failed integrity check prevents publication.

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

## Contribution rule

Architecture claims must name their status: `CURRENT`, `TARGET`, `EXPERIMENTAL` or `NARRATIVE`. Proposed and draft ideas must never look like current capabilities.

## Licensing

Licences for code, text, illustrations and trademarks are managed separately. Released Oki illustrations are approved for CC BY 4.0, with OpenKubes/Oki names, logos and marks excluded. See [`LICENSES/README.md`](LICENSES/README.md).
