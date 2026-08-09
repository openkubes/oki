# Gate 5C - German Digital Edition v1.0 final review

**Status:** ON HOLD - APPROVED CA-001 SCOPED MIO DELTAS PENDING  
**Prepared:** 2026-08-09  
**Decision authority:** GPT reviewer and human gate owner  
**Self-approval:** prohibited

## Hold notice

These artifacts passed the documented pre-amendment technical QA. They remain
an immutable comparison baseline, not the current publication candidate.
CA-001 is approved. A new candidate may enter final review only after Gate
2A.1, Gate 2B.1, Gate 3.1 and Gate 4.1 have passed and all derived files and
checksums have been regenerated.

## Candidate artifacts

- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.sha256`
- `../../video/de/Oki-und-die-vielen-Inseln-DE-video-recording-v1.0.pptx`
- `../../video/de/Oki-und-die-vielen-Inseln-DE-recording-guide-v1.0.md`

## Requested RC2 deltas

- [x] Page 14 keeps the literal ASCII identifier `ok-mgmt` visually intact.
- [x] The PDF text layer contains no technical identifier ending at a line-breaking ASCII hyphen.
- [x] Pages 4 and 43 refer to the public repository without future wording.
- [x] Pages 4 and 43 display `https://github.com/openkubes/oki`.
- [x] **Oki und die vielen Inseln** is recorded as the canonical German title.
- [x] The subtitle remains **Der illustrierte Kinderführer zu OpenKubes**.

## Final QA evidence

- [x] The public PPTX and recording PPTX each contain 44 slides.
- [x] All 18 scene titles and bodies normalize exactly to the frozen approved scene content; no story rewrite entered the release files.
- [x] Both PPTX files pass archive-integrity and presentation-overflow checks.
- [x] Template plan and template fidelity checks pass with zero reported issues.
- [x] Public and recording PPTX contain the same 132 visible text boxes.
- [x] All 44 recording slides contain a `[Recording]` speaker-note cue.
- [x] Render comparison against RC2 shows intentional visual changes only on pages 4, 14 and 43.
- [x] The complete 44-page PDF contact sheet was reviewed after final generation.
- [x] PDF metadata names the canonical title and OpenKubes Community.
- [x] PDF language is `de-DE`; the document opens with the navigation outline.
- [x] PDF contains 44 pages at 1080 x 720 pt and has no encryption, JavaScript, forms or widgets.
- [x] PDF retains its tagged structure: 132 `Div`, 302 `P` and 82 `Figure` elements.
- [x] PDF contains six explicit URI links: two CC BY 4.0, two repository and two OpenKubes links.
- [x] The frozen Markdown manuscript is the accessible companion text.
- [x] SHA-256 manifests were generated for the digital and recording packages.

## Known accessibility limitation

The PDF is tagged and its text is searchable, but the 82 `Figure` elements do not yet carry embedded `/Alt` values. The approved publication path for this digital edition is therefore to ship the PDF together with the frozen Markdown manuscript as its accessible text companion. A stricter PDF/UA or EPUB derivative remains separate future work.

## Publication precondition

The files name `https://github.com/openkubes/oki` as the public source repository. The repository and the v1.0 artifacts must therefore become publicly reachable in the same publication step. Do not publish the PDF in isolation while that URL is unavailable.

## Decision record

```text
Reviewer: pending
Date: pending
Decision: PENDING
```

If the reviewer returns `APPROVED`, record the release decision as:

```text
German Digital Edition v1.0 - APPROVED FOR GITHUB PUBLICATION
```

Print production remains outside this decision and stays open until its trim, bleed, binding, color and printer requirements are selected.
