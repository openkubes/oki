# Gate 5C - German Digital Edition v1.1 review

**Status:** CANDIDATE READY - HUMAN/GPT REVIEW REQUIRED  
**Prepared:** 2026-08-09  
**Decision authority:** GPT reviewer and human gate owner  
**Self-approval:** prohibited

## Candidate artifacts

- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.sha256`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.pdf.sha256`

## Immutable sources

- `story/de/manuscript-v1.1-mio.md` - `GATE 2A.1 - APPROVED; CONTENT FROZEN`
- `art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`
- `characters/ok-mgmt/canonical/OKMGMT-CHAR-001-v1.png`
- `art/keyframes/canonical/OKI-KF-MIO-01-v1.png`
- Oki Universe Canon v1.0 including approved Canon Amendment CA-001

## Mio rebuild scope

- the 18 scene titles and bodies come from the frozen v1.1 manuscript;
- canonical v2 illustrations are used for Scenes 04-11, 16-18;
- canonical v1 illustrations are reused for Scenes 01-03 and 12-15;
- the cover uses the canonical Scene 18 v2 ensemble with Oki, Mio and Aia;
- `ok-mgmt` remains intact on one visual line and is introduced as Mio;
- Scene 09 keeps creation separate from registration;
- Scene 10 keeps remediation with the builders and verification with the sensors;
- Scene 16 separates rebuild from restored relationships, access and memory;
- Scene 17 visibly marks the lifecycle as `MORGEN` / target and retains human Authority.

## QA evidence

- [x] PPTX contains 44 slides and passes ZIP archive integrity.
- [x] All 18 scene titles and bodies match `manuscript-v1.1-mio.md` after approved Markdown and layout-whitespace normalization.
- [x] All 18 canonical scene-image checksums pass.
- [x] Presentation overflow check passes with no overflow.
- [x] Template fidelity check passes with zero issues.
- [x] All 44 PPT slides were rendered and visually reviewed.
- [x] PDF contains 44 pages at 1080 x 720 pt.
- [x] All 44 PDF pages were rendered and visually reviewed after final metadata and link processing.
- [x] All 18 scene titles and bodies match the frozen v1.1 manuscript in the searchable PDF text layer.
- [x] PDF fonts are embedded, subsetted and Unicode-mapped.
- [x] PDF language is `de-DE`; title, author, subject and keywords are present.
- [x] PDF opens with a navigation outline for the book and all 18 scenes.
- [x] PDF contains six explicit URI links: two CC BY 4.0, two repository and two OpenKubes links.
- [x] PDF contains no encryption, JavaScript, forms or widgets.
- [x] SHA-256 manifests were generated and verified for PPTX and PDF.

## Accessibility and print boundaries

The PDF has a complete searchable text layer but is not a fully tagged PDF/UA
artifact. The frozen Markdown manuscript remains the accessible companion text.
Print production is still separate: final trim, bleed, binding, cover spread,
color profile, printer standard and high-resolution illustration derivatives
must be chosen before a printer-ready approval.

## Decision record

```text
Reviewer: pending
Date: pending
Decision: PENDING
```

If approved, record the digital decision as:

```text
German Digital Edition v1.1 - APPROVED FOR GITHUB PUBLICATION
```

Print production remains open and is not implied by digital approval.
