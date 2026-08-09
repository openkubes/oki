# Gate 5C - German Digital Edition v1.2 review

**Status:** CANDIDATE READY - HUMAN/GPT REVIEW REQUIRED  
**Prepared:** 2026-08-09  
**Decision authority:** GPT reviewer and human gate owner  
**Self-approval:** prohibited

## Candidate artifacts

- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.sha256`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.pdf.sha256`

## Immutable sources

- `story/de/manuscript-v1.2.md` - `GATE 2A.2 - APPROVED; CONTENT FROZEN`
- `story/de/GATE-2A2-EDITORIAL-DELTA-01.md`
- `art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`
- Oki Universe Canon v1.0 including approved Canon Amendment CA-001

## v1.2 editorial scope

- Scene 05 identifies Mio explicitly as the small blue personified figure in
  front of the town hall.
- Scene 05 replaces the invisible empty-map action with a short thinking beat.
- Scene 14 explains the island family through individuality and mutual
  reliability instead of copies.
- The opening epigraph mirrors the approved Scene-14 family wording.
- The back cover now asks when an island is not merely present but truly
  reliable.
- Visible release metadata identifies the German digital edition as v1.2.
- No canonical illustration was altered or replaced.

## QA evidence

- [x] PPTX contains 44 slides and passes ZIP archive integrity.
- [x] All 18 scene titles and bodies match `manuscript-v1.2.md` after approved
  Markdown and layout-whitespace normalization.
- [x] The opening epigraph and back-cover question match the approved v1.2
  derivative wording.
- [x] All 18 canonical scene-image checksums pass unchanged.
- [x] Presentation overflow check passes with no overflow.
- [x] Template fidelity check passes with zero issues.
- [x] All 44 PPT slides were rendered and visually reviewed.
- [x] PDF contains 44 pages at 1080 x 720 pt.
- [x] All 44 PDF pages were rendered and visually reviewed after final metadata
  and link processing.
- [x] All 18 scene titles and bodies match the frozen v1.2 manuscript in the
  searchable PDF text layer.
- [x] PDF fonts are embedded, subsetted and Unicode-mapped.
- [x] PDF language is `de-DE`; title, author, subject and keywords are present.
- [x] PDF opens with a navigation outline for the book and all 18 scenes.
- [x] PDF contains six explicit URI links: two CC BY 4.0, two repository and two
  OpenKubes links.
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
German Digital Edition v1.2 - APPROVED FOR GITHUB PUBLICATION
```

Print production remains open and is not implied by digital approval.
