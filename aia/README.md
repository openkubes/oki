# Aia — OpenKubes Illustrated Guide

This directory contains the source material and concept assets for the
CIO/SRE-oriented Oki Universe story about Aia, Crossplane, Cluster API,
verifiable platform delivery and robotics-assisted recovery.

## Working title

**Aia, Conductor und Captain — Vom Wunsch zur verifizierbaren Plattform**

## Structure

```text
aia/
├── art/
│   ├── concepts/       # Narrative concept art
│   ├── prompts/        # Recorded image-generation briefs
│   ├── provenance/     # Asset lineage, integrity and review status
│   └── references/     # Approved source/reference images for the guide
├── characters/
│   ├── captain/        # CAPI personification
│   ├── conductor/      # Active Crossplane conductor concept
│   └── cops/           # Superseded Crossplane working concept
├── site/               # CIO/SRE illustrated-guide website
└── story/
    └── de/             # German screenplay and narration
```

The existing canonical Oki Universe assets remain in the repository-level
`characters/`, `art/canonical/` and `canon/` directories. Aia assets reference
them rather than duplicating them.

## Status

The current material is `CONCEPT`, not `CANONICAL`. Captain, Conductor and every
narrative scene require the normal character, architecture, rights and human
approval gates before release.

## Intended publication

The intended public hostname is:

<https://aia.openkubes.org/>

The source can remain in this repository while being built and deployed as an
independent static site. The existing GitHub Pages workflow publishes only the
Oki book artifact for <https://oki.openkubes.org/>. Aia should therefore use a
separate build and deployment target rather than replacing that artifact.

Recommended later layout:

```text
aia/site/         # website source and independent deployment root
aia/site/dist/    # generated deployment bundle (not committed)
```

Recommended deployment choices:

1. a separate hosting project rooted at `aia/site`, with
   `aia.openkubes.org` as its custom domain; or
2. a dedicated deployment workflow that builds `aia/site` and publishes its
   generated bundle to a separate site.

Do not repoint the existing `oki.openkubes.org` Pages deployment when enabling
the Aia site.
