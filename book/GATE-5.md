# Gate 5 - German book production

**Status:** OPEN - HTML v1.2 PUBLISHED; DIGITAL BOOK RELEASE AND PRINT TRACK REMAIN OPEN  
**Opened:** 2026-08-08 after Gate 4 approval

## Goal

Create a publication-ready German children's book derivative from the frozen
Gate-2A.2 editorial manuscript and the exact Gate-4.1 canonical scene selection.

## Immutable inputs

- `story/de/manuscript-v1.2.md` - `GATE 2A.2 - APPROVED; CONTENT FROZEN`
- `art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`
- Oki Universe Canon v1.0 including approved Canon Amendment CA-001
- approved licensing and provenance records for the complete v1.1 scene selection

## Production stages

### Gate 5A - Layout system proof

**Status:** APPROVED - 2026-08-08

Produce a 3:2 landscape review edition containing:

- front cover;
- inside cover, title, rights and dedication pages;
- complete text-and-image spreads for scenes 1-3;
- representative back cover.

The proof tests typography, reading rhythm, page numbering, image treatment and the relationship between frozen text and canonical art. It is a layout proof, not printer imposition.

Candidate v0.2:

- `book/de/Oki-und-die-vielen-Inseln-DE-Gate5-layout-proof-v0.2.pptx`
- `book/de/Oki-und-die-vielen-Inseln-DE-Gate5-layout-proof-v0.2.pdf`
- review record: `book/de/GATE-5A-REVIEW-01.md`

### Gate 5B - Full German book

**Status:** APPROVED - 2026-08-08

Apply the approved layout system to all 18 scenes without altering the manuscript or canonical images.

Candidate v0.1:

- `book/de/Oki-und-die-vielen-Inseln-DE-Gate5B-full-book-v0.1.pptx`
- `book/de/Oki-und-die-vielen-Inseln-DE-Gate5B-full-book-v0.1.pdf`
- `book/de/Oki-und-die-vielen-Inseln-DE-Gate5B-full-book-v0.1-montage.png`
- review record: `book/de/GATE-5B-REVIEW-01.md`

### Gate 5C - Release QA

**Status:** OPEN - DIGITAL v1.2 CANDIDATE READY FOR REVIEW; PRINT TARGET DECISION REQUIRED

Validate editorial fidelity, accessibility, image resolution, trim/bleed decisions, fonts, links, licensing, PDF rendering and printer requirements before release.

Preflight artifacts:

- `book/de/GATE-5C-PREFLIGHT-01.md`
- `book/de/GATE-5C-DIGITAL-V1-REVIEW.md`
- `book/de/GATE-5C-DIGITAL-V1.1-REVIEW.md`
- `book/de/GATE-5C-DIGITAL-V1.2-REVIEW.md`
- `book/de/PRINT-SPEC-DECISION.md`
- `book/de/Oki-und-die-vielen-Inseln-DE-digital-v1.0.pptx`
- `book/de/Oki-und-die-vielen-Inseln-DE-digital-v1.0.pdf`
- `book/de/Oki-und-die-vielen-Inseln-DE-digital-v1.1.pptx`
- `book/de/Oki-und-die-vielen-Inseln-DE-digital-v1.1.pdf`
- `book/de/Oki-und-die-vielen-Inseln-DE-digital-v1.2.pptx`
- `book/de/Oki-und-die-vielen-Inseln-DE-digital-v1.2.pdf`
- `book/de/html-v1.2/` - interactive and offline-capable HTML presentation
- `book/de/GATE-5C-HTML-V1.2-REVIEW.md`
- `story/en/manuscript-v1.0-rc1.md` - natural American-English review adaptation
- `book/en/GATE-5C-HTML-EN-V1.0-REVIEW.md`
- `story/es/manuscript-v1.0-rc1.md` - natural international-Spanish review adaptation
- `book/es/GATE-5C-HTML-ES-V1.0-REVIEW.md`
- `story/fa/manuscript-v1.0-rc1.md` - natural Persian RTL review adaptation
- `book/fa/GATE-5C-HTML-FA-V1.0-REVIEW.md`
- `story/zh/manuscript-v1.0-rc1.md` - natural Simplified Chinese review adaptation
- `book/zh/GATE-5C-HTML-ZH-V1.0-REVIEW.md`
- `story/ja/manuscript-v1.0-rc1.md` - natural Japanese review adaptation
- `book/ja/GATE-5C-HTML-JA-V1.0-REVIEW.md`
- `video/de/Oki-und-die-vielen-Inseln-DE-video-recording-v1.0.pptx`
- `video/de/Oki-und-die-vielen-Inseln-DE-recording-guide-v1.0.md`

The German digital v1.0 candidate remains the verified pre-amendment baseline.
Gate 2A.1, Gate 2A.2, Gate 2B.1, Gate 3.1 and Gate 4.1 are closed. The rebuilt
v1.2 PPTX, PDF, HTML presentation and checksums are the current publication
candidates. The project owner approved the HTML derivative for public GitHub
Pages publication on 2026-08-09. It passed automated manuscript,
image-integrity, build, test and offline-export QA before deployment.
The six-language HTML build exports English, Spanish, Persian, Simplified
Chinese and Japanese v1.0 RC1 review routes at `/en/`, `/es/`, `/fa/`, `/zh/`
and `/ja/` and verifies every set of 18 scene texts against its review
manuscript. The Persian route uses RTL presentation semantics while preserving
canonical technical identifiers as isolated LTR content. The five language
gates and localized illustration deltas remain open.
The PDF and PPTX still await explicit final release approval.
The v1.1 artifacts remain the Mio-layout
baseline. The print track remains open until trim, binding and printer
requirements are selected.

## Gate rules

1. Layout files are derivatives; manuscript and canonical images remain the source of truth.
2. Text edits that change meaning return to story governance.
3. Image edits that change content return to illustration governance.
4. The first proof uses one text page plus one full-image page per scene.
5. Final trim, bleed, binding, paper and color-profile choices remain open until a print target is selected.
6. Human approval is required before Gate 5B opens.
