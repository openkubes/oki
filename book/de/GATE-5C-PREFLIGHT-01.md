# Gate 5C - Release and print preflight 01

**Status:** OPEN - DIGITAL v1.2 CANDIDATE READY FOR REVIEW; PRINT TARGET DECISION REQUIRED  
**Prepared:** 2026-08-08  
**Final digital QA:** 2026-08-09  
**Approved source:** `Oki-und-die-vielen-Inseln-DE-Gate5B-full-book-v0.1`

## Executive result

The approved 44-page Gate-5B book has been carried forward into a German digital v1.0 candidate. It is not yet a printer-ready book file because no trim size, bleed, binding, cover construction or printer color profile has been selected.

The v1.0 candidate remains the verified pre-Mio baseline. The scoped CA-001 Mio
gates are closed, and v1.1 remains the frozen Mio-layout baseline. The v1.2
editorial-clarity artifacts have completed technical and visual QA. They are
ready for explicit human/GPT publication review. No release is self-approved by
this preflight record.

German digital v1.2 candidate:

- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.sha256`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.2.pdf.sha256`
- review record: `GATE-5C-DIGITAL-V1.2-REVIEW.md`

German digital v1.1 candidate:

- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.sha256`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.1.pdf.sha256`
- review record: `GATE-5C-DIGITAL-V1.1-REVIEW.md`

Public release-candidate artifacts:

- `Oki-und-die-vielen-Inseln-DE-release-rc2.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-release-rc2.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-release-rc2.pdf.sha256`

German digital v1.0 candidate:

- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.pptx`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.pdf`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.sha256`
- `Oki-und-die-vielen-Inseln-DE-digital-v1.0.pdf.sha256`
- final review record: `GATE-5C-DIGITAL-V1-REVIEW.md`

Video recording pack:

- `video/de/Oki-und-die-vielen-Inseln-DE-video-recording-rc2.pptx`
- `video/de/Oki-und-die-vielen-Inseln-DE-recording-guide-rc2.md`

Synchronized v1.0 recording pack:

- `video/de/Oki-und-die-vielen-Inseln-DE-video-recording-v1.0.pptx`
- `video/de/Oki-und-die-vielen-Inseln-DE-recording-guide-v1.0.md`

## German digital v1.0 delta

- page 14 keeps literal ASCII identifier `ok-mgmt` on one visual line;
- the full PDF text layer was scanned and contains no technical identifier ending at a line-breaking ASCII hyphen;
- pages 4 and 43 now name the public `openkubes/oki` repository without future wording and display its full URL;
- the German title **Oki und die vielen Inseln** is recorded in Canon, manuscript and README metadata;
- the final PDF is generated directly from the corrected v1.0 PPTX and retains its tagged document structure;
- the frozen Markdown manuscript is the accessible text companion to the digital PDF;
- final publication approval remains a human/GPT gate; this document does not self-approve the release.

## Passed checks

- [x] 44 pages; page count is divisible by four.
- [x] All 18 frozen manuscript scenes are present.
- [x] All 18 scene titles and bodies normalize exactly to the frozen approved scene content.
- [x] All 18 canonical scene-image checksums pass.
- [x] All 44 pages passed visual review in Gate 5B.
- [x] Presentation overflow and template-fidelity checks pass.
- [x] PDF text remains searchable and selectable.
- [x] Arial and Arial Bold are fully embedded, subsetted and Unicode-mapped in the v1.2 PDF.
- [x] No encryption, JavaScript, forms or executable content.
- [x] `https://openkubes.org/` was verified reachable on 2026-08-08.

## Digital RC2 improvements

- document title: `Oki und die vielen Inseln`;
- author and creator: `OpenKubes Community`;
- German document language: `de-DE`;
- subject and keywords added;
- navigation outline added for the book and all 18 scenes;
- internal layout-proof and Gate-5B wording removed from the visible public pages;
- the full CC BY 4.0 URL and the trademark exception are shown on pages 4 and 43;
- six clickable links added: two CC BY 4.0 links, two repository links and two `https://openkubes.org/` links;
- tagged-PDF structure retained through the final metadata, outline and link pass;
- 42 rendered pages are pixel-identical to the approved Gate-5B PDF; only pages 4 and 43 intentionally differ.

## Video recording readiness

- the recording PPT is visually identical to the public release PPT;
- all 44 slides contain recording cues in speaker notes;
- the timing plan targets a warm 108 words-per-minute narration and approximately 22:18 total duration;
- every illustration page receives a seven-second silent hold;
- `ok-mgmt` is explicitly pronounced as `OK Management`;
- the recording guide specifies 3:2 capture, audio settings and YouTube export targets.

## Accessibility finding

The v1.2 PDF has a complete searchable text layer but no structure tree and is
not a tagged PDF/UA artifact. The current PowerPoint-to-PDF path therefore does
not preserve semantic reading order or authored illustration alt text. This
blocks a strict accessible-PDF approval.

Before the final release, choose one of these paths:

1. remediate the PDF in a PDF/UA-capable authoring tool;
2. publish the digital PDF together with the frozen accessible Markdown manuscript as a companion;
3. produce an accessible HTML or EPUB derivative in a later gate.

## Print-resolution finding

The 18 canonical images are 1536 x 1024 px, RGB, and carry no embedded ICC profile. The review PDF is 15 x 10 inches, so its full-page illustrations render at approximately 102 ppi.

| 3:2 trim size | Current effective ppi | 300-ppi image target |
| --- | ---: | ---: |
| 15 x 10 in | 102 | 4500 x 3000 px |
| 12 x 8 in | 128 | 3600 x 2400 px |
| 10.5 x 7 in | 146 | 3150 x 2100 px |
| 9 x 6 in | 171 | 2700 x 1800 px |
| 7.5 x 5 in | 205 | 2250 x 1500 px |
| 6 x 4 in | 256 | 1800 x 1200 px |

For a polished children's book, the illustrations therefore need content-preserving high-resolution derivatives unless the trim size is very small. These derivatives must remain explicitly non-canonical and retain links to the canonical source checksums.

## Print blockers

- [ ] Final 3:2 trim size.
- [ ] Binding: saddle stitch, perfect bound or casebound/hardcover.
- [ ] Printer/provider and its required PDF standard.
- [ ] Bleed amount; the current PDF has no separate bleed area.
- [ ] Safe-area and gutter values for the selected binding.
- [ ] Separate cover spread and spine width.
- [ ] RGB/sRGB or printer-specific CMYK output profile.
- [ ] Image target: recommended 300 ppi; minimum must be accepted explicitly by the printer.
- [ ] Final imprint, copyright and CC BY 4.0 attribution wording, including the license URL.
- [ ] Accessible-PDF, companion-text or EPUB release path.

## Current page-box state

The approved PDF uses identical MediaBox, CropBox, BleedBox, TrimBox and ArtBox values of 1080 x 720 points. It therefore has no printer bleed or separately declared trim box.

## Next production step

After the print target is chosen:

1. create checksum-tracked high-resolution print derivatives of all 18 scene images;
2. adapt the approved 3:2 layout to the selected trim, bleed, safe area and gutter;
3. generate the interior PDF and a separate cover spread;
4. apply the printer's color and PDF standard requirements;
5. render and inspect every final page again;
6. run the printer/provider preflight before Gate 5C approval.
